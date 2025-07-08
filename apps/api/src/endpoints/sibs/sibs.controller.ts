/* * */

import { type FastifyReply, type FastifyRequest } from '@tmlmobilidade/connectors';
import { HttpStatus } from '@tmlmobilidade/lib';

/* * */

interface SibsTokenResponse {
	authToken: string
	returnStatus: {
		statusCode: string
		statusDescription: string
		statusMsg: string
	}
}

/* * */

export class SibsController {
	static async getToken(request: FastifyRequest, reply: FastifyReply) {
		try {
			//

			//
			// Validate environment variables

			if (!process.env.SIBS_TOKEN_ENDPOINT || !process.env.IBM_CLIENT_ID || !process.env.SIBS_SECRET_INDEX) {
				return Response.json({ error: 'Missing required environment variables' }, { status: 500 });
			}

			//
			// Fetch the SIBS token from the API

			const response = await fetch(process.env.SIBS_TOKEN_ENDPOINT, {
				headers: {
					'Accept': 'application/json',
					'Content-Type': 'application/json',
					'X-IBM-Client-ID': process.env.IBM_CLIENT_ID,
					'X-SIBS-Secret-Index': process.env.SIBS_SECRET_INDEX,
				},
				method: 'GET',
			});

			const responseData = await response.json() as SibsTokenResponse;

			return reply.send({ auth_token: responseData.authToken });

			//
		}
		catch (error) {
			reply
				.status(error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR)
				.send(error);
		}
	}
}
