/* * */

import { type SshConfig, SshTunnelService, type SshTunnelServiceOptions } from '@/utils/ssh-tunnel.service';
import { readFileSync } from 'node:fs';

/**
 * This function retrieves the URL for the Fare Engine API.
 * It constructs the URL based on environment variables and returns it.
 * For local development, it is necessary to setup an SSH tunnel.
 * In production, it uses the direct URL.
 * @returns The URL for the Fare Engine API.
 * @throws Will throw an error if the required environment variables are not set.
 */
export async function getFareEngineUrl(): Promise<string> {
	//

	//
	// Check if the required environment variable is set

	if (!process.env.FARE_ENGINE_API_BASE_URL) {
		throw new Error('Missing FARE_ENGINE_API_BASE_URL environment variable.');
	}

	//
	// Check if the tunnel is to be used

	if (process.env.FARE_ENGINE_USE_TUNNEL !== 'true') {
		return process.env.FARE_ENGINE_API_BASE_URL;
	}

	//
	// If we're here, then the SSH Tunnel is to be used.
	// Check if the required SSH Tunnel environment variables are set.

	if (!process.env.FARE_ENGINE_TUNNEL_DST_ADDR || !process.env.FARE_ENGINE_TUNNEL_DST_PORT) {
		throw new Error('Missing FARE_ENGINE_TUNNEL_DST_ADDR or FARE_ENGINE_TUNNEL_DST_PORT environment variable.');
	}

	if (!process.env.FARE_ENGINE_TUNNEL_LOCAL_HOST || !process.env.FARE_ENGINE_TUNNEL_LOCAL_PORT) {
		throw new Error('Missing FARE_ENGINE_TUNNEL_LOCAL_HOST or FARE_ENGINE_TUNNEL_LOCAL_PORT environment variable.');
	}

	if (!process.env.FARE_ENGINE_TUNNEL_SSH_HOST || !process.env.FARE_ENGINE_TUNNEL_SSH_PORT || !process.env.FARE_ENGINE_TUNNEL_SSH_KEY_PATH || !process.env.FARE_ENGINE_TUNNEL_SSH_USERNAME) {
		throw new Error('Missing FARE_ENGINE_TUNNEL_SSH_HOST, FARE_ENGINE_TUNNEL_SSH_PORT, FARE_ENGINE_TUNNEL_SSH_KEY_PATH or FARE_ENGINE_TUNNEL_SSH_USERNAME environment variable.');
	}

	//
	// Setup the SSH Tunnel connection configuration

	const sshConfig: SshConfig = {
		forwardOptions: {
			dstAddr: process.env.FARE_ENGINE_TUNNEL_DST_ADDR,
			dstPort: Number(process.env.FARE_ENGINE_TUNNEL_DST_PORT),
			srcAddr: process.env.FARE_ENGINE_TUNNEL_LOCAL_HOST,
			srcPort: Number(process.env.FARE_ENGINE_TUNNEL_LOCAL_PORT),
		},
		serverOptions: {
			port: Number(process.env.FARE_ENGINE_TUNNEL_LOCAL_PORT),
		},
		sshOptions: {
			host: process.env.FARE_ENGINE_TUNNEL_SSH_HOST,
			keepaliveCountMax: 3, // Retry 3 times before closing the connection
			keepaliveInterval: 10000, // Send keep-alive every 10 seconds
			port: Number(process.env.FARE_ENGINE_TUNNEL_SSH_PORT),
			privateKey: readFileSync(process.env.FARE_ENGINE_TUNNEL_SSH_KEY_PATH ?? ''),
			username: process.env.FARE_ENGINE_TUNNEL_SSH_USERNAME,
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

	const sshTunnelConnection = await SshTunnelService.getInstance(sshConfig, sshOptions).connect();

	//
	// Construct the URL for the Fare Engine API using the local host and port

	const localAddress = sshTunnelConnection.address();

	if (!localAddress || typeof localAddress !== 'object') {
		throw new Error('Failed to retrieve the SSH tunnel address.');
	}

	return `${process.env.FARE_ENGINE_API_BASE_URL}:${localAddress.port}`;

	//
}
