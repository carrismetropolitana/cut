/* * */

import { type SshConfig, SshTunnelService, type SshTunnelServiceOptions } from '@/utils/ssh-tunnel.service';
import { readFileSync } from 'node:fs';

/* * */

let GLOBAL_MS_INVOICE_TUNNEL_INSTANCE: SshTunnelService | undefined;

/**
 * This function retrieves the URL for the MS Invoice API.
 * It constructs the URL based on environment variables and returns it.
 * For local development, it is necessary to setup an SSH tunnel.
 * In production, it uses the direct URL.
 * @returns The URL for the MS Invoice API.
 * @throws Will throw an error if the required environment variables are not set.
 */
export async function getMsInvoiceUrl(): Promise<string> {
	//

	//
	// Check if the required environment variable is set

	if (!process.env.MS_INVOICE_API_BASE_URL) {
		throw new Error('Missing MS_INVOICE_API_BASE_URL environment variable.');
	}

	//
	// Check if the tunnel is to be used.
	// If not, return the direct URL.

	if (process.env.MS_INVOICE_USE_TUNNEL !== 'true') {
		return process.env.MS_INVOICE_API_BASE_URL;
	}

	//
	// If we're here, then the SSH Tunnel is to be used.
	// Check if the required SSH Tunnel environment variables are set.

	if (!process.env.MS_INVOICE_TUNNEL_DST_ADDR || !process.env.MS_INVOICE_TUNNEL_DST_PORT) {
		throw new Error('Missing MS_INVOICE_TUNNEL_DST_ADDR or MS_INVOICE_TUNNEL_DST_PORT environment variable.');
	}

	if (!process.env.MS_INVOICE_TUNNEL_LOCAL_HOST || !process.env.MS_INVOICE_TUNNEL_LOCAL_PORT) {
		throw new Error('Missing MS_INVOICE_TUNNEL_LOCAL_HOST or MS_INVOICE_TUNNEL_LOCAL_PORT environment variable.');
	}

	if (!process.env.MS_INVOICE_TUNNEL_SSH_HOST || !process.env.MS_INVOICE_TUNNEL_SSH_PORT || !process.env.MS_INVOICE_TUNNEL_SSH_KEY_PATH || !process.env.MS_INVOICE_TUNNEL_SSH_USERNAME) {
		throw new Error('Missing MS_INVOICE_TUNNEL_SSH_HOST, MS_INVOICE_TUNNEL_SSH_PORT, MS_INVOICE_TUNNEL_SSH_KEY_PATH or MS_INVOICE_TUNNEL_SSH_USERNAME environment variable.');
	}

	//
	// Setup the SSH Tunnel connection configuration

	const sshConfig: SshConfig = {
		forwardOptions: {
			dstAddr: process.env.MS_INVOICE_TUNNEL_DST_ADDR,
			dstPort: Number(process.env.MS_INVOICE_TUNNEL_DST_PORT),
			srcAddr: process.env.MS_INVOICE_TUNNEL_LOCAL_HOST,
			srcPort: Number(process.env.MS_INVOICE_TUNNEL_LOCAL_PORT),
		},
		serverOptions: {
			port: Number(process.env.MS_INVOICE_TUNNEL_LOCAL_PORT),
		},
		sshOptions: {
			host: process.env.MS_INVOICE_TUNNEL_SSH_HOST,
			keepaliveCountMax: 3, // Retry 3 times before closing the connection
			keepaliveInterval: 10000, // Send keep-alive every 10 seconds
			port: Number(process.env.MS_INVOICE_TUNNEL_SSH_PORT),
			privateKey: readFileSync(process.env.MS_INVOICE_TUNNEL_SSH_KEY_PATH ?? ''),
			username: process.env.MS_INVOICE_TUNNEL_SSH_USERNAME,
		},
		tunnelOptions: {
			autoClose: false,
			reconnectOnError: true,
		},
	};

	const sshOptions: SshTunnelServiceOptions = {
		maxRetries: 3,
	};

	//
	// Actually create the SSH Tunnel connection

	if (!GLOBAL_MS_INVOICE_TUNNEL_INSTANCE) {
		GLOBAL_MS_INVOICE_TUNNEL_INSTANCE = new SshTunnelService(sshConfig, sshOptions);
	}

	const sshTunnelConnection = await GLOBAL_MS_INVOICE_TUNNEL_INSTANCE.connect();

	//
	// Construct the URL for the MS Invoice API using the local host and port

	const localAddress = sshTunnelConnection.address();

	if (!localAddress || typeof localAddress !== 'object') {
		throw new Error('Failed to retrieve the SSH tunnel address.');
	}

	return `http://${process.env.MS_INVOICE_TUNNEL_LOCAL_HOST}:${localAddress.port}`;

	//
}
