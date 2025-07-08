/* * */

import { type SshConfig, SshTunnelService, type SshTunnelServiceOptions } from '@/utils/ssh-tunnel.service';
import { type FastifyReply, type FastifyRequest } from '@tmlmobilidade/connectors';
import { HttpStatus } from '@tmlmobilidade/lib';
import { readFileSync } from 'node:fs';

/* * */

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

/* * */

interface FareEngineTokenResponse {
	authToken: string
	returnStatus: {
		statusCode: string
		statusDescription: string
		statusMsg: string
	}
}

/* * */

export class FareEngineController {
	static async getToken(request: FastifyRequest, reply: FastifyReply) {
		try {
			//

			//
			// Validate environment variables

			if (!process.env.FARE_ENGINE_TUNNEL_DST_ADDR || !process.env.FARE_ENGINE_TUNNEL_DST_PORT || !process.env.FARE_ENGINE_TUNNEL_LOCAL_HOST || !process.env.FARE_ENGINE_TUNNEL_LOCAL_PORT || !process.env.FARE_ENGINE_TUNNEL_SSH_HOST || !process.env.FARE_ENGINE_TUNNEL_SSH_PORT || !process.env.FARE_ENGINE_TUNNEL_SSH_KEY_PATH || !process.env.FARE_ENGINE_TUNNEL_SSH_USERNAME) {
				return reply.send({ error: 'Missing required environment variables' }).status(HttpStatus.INTERNAL_SERVER_ERROR);
			}

			//
			// Setup a new Tunnel SSH connection to the Fare Engine API

			console.log('Setting up SSH tunnel to Fare Engine API...');

			const sshTunnelService = await SshTunnelService.getInstance(sshConfig, sshOptions).connect();

			const baseDestUrl = `http://${process.env.FARE_ENGINE_TUNNEL_LOCAL_HOST}:${process.env.FARE_ENGINE_TUNNEL_LOCAL_PORT}/passenger/cards/123`;

			// const fareEngineApiUrl = `${baseDestUrl}/cards/123`;

			console.log('Fare Engine API URL:', baseDestUrl);

			const response = await fetch(baseDestUrl, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
				},
			});

			const responseData = await response.json();

			console.log('Fare Engine API response:', responseData);

			//
			// Fetch the SIBS token from the API

			return reply.send({ request_card_token: 'here' });

			//
		}
		catch (error) {
			reply
				.status(error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR)
				.send(error);
		}
	}
}
