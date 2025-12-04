/* * */

import { HttpException, HttpStatus } from '@tmlmobilidade/consts';
import { type FastifyReply, type FastifyRequest } from '@tmlmobilidade/fastify';

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
	static async getToken(request: FastifyRequest, reply: FastifyReply<{ auth_token: string }>) {
		//

		//
		// Validate environment variables

		if (!process.env.SIBS_TOKEN_ENDPOINT || !process.env.IBM_CLIENT_ID || !process.env.SIBS_SECRET_INDEX) {
			throw new HttpException(HttpStatus.BAD_REQUEST, 'Missing required environment variables');
		}

		//
		// Fetch the SIBS token from the API

		try {
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

			console.log('SIBS Token Response:', responseData);

			reply.send({
				data: { auth_token: responseData.authToken },
				error: null,
				statusCode: HttpStatus.OK,
			});
		}
		catch (error) {
			console.log('Error fetching SIBS token:', error);
			throw new HttpException(HttpStatus.INTERNAL_SERVER_ERROR, error.cause || 'Failed to fetch SIBS token');
		}

		//
	}
}
