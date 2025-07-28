/* * */

import { getFareEngineUrl } from '@/utils/get-fare-engine-url';
import { type FareEngineTapsResponse } from '@carrismetropolitana/cut-pckg-types';
import { type FastifyReply, type FastifyRequest } from '@tmlmobilidade/connectors';
import { HttpStatus } from '@tmlmobilidade/lib';

/* * */

export class FareEngineController {
	static async getToken(request: FastifyRequest, reply: FastifyReply<FareEngineTapsResponse>) {
		try {
			//

			//
			// Get the correct URL for the Fare Engine API

			const fareEngineUrl = await getFareEngineUrl();

			//
			// Extract the card token from the request parameters
			// and setup the correct fetch URL

			const cardToken = request.params['token'] as string;

			const fetchUrl = `${fareEngineUrl}/passenger/cards/${cardToken}/taps`;

			console.log('Fare Engine API URL:', fetchUrl);

			//
			// Fetch the Fare Engine API with the card token

			const response = await fetch(fetchUrl, {
				headers: {
					Host: process.env.FARE_ENGINE_API_BASE_URL,
				},
			});

			const responseData = await response.json() as FareEngineTapsResponse;

			//
			// Send the response back to the client

			return reply.send({
				data: responseData,
				error: null,
				status: HttpStatus.OK,
			});

			//
		}
		catch (error) {
			console.error('Error fetching Fare Engine token:', error);
			reply
				.status(error.statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR)
				.send({
					data: null,
					error: error.message,
					status: HttpStatus.INTERNAL_SERVER_ERROR,
				});
		}
	}
}
