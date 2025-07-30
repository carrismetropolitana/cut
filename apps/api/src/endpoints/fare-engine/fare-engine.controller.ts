/* * */

import { getFareEngineUrl } from '@/utils/get-fare-engine-url';
import { type FareEngineChargesResponse, FareEngineTapsResponse } from '@carrismetropolitana/cut-pckg-types';
import { type FastifyReply, type FastifyRequest } from '@tmlmobilidade/connectors';
import { HttpStatus } from '@tmlmobilidade/lib';

/* * */

export class FareEngineController {
	static async getCharges(request: FastifyRequest, reply: FastifyReply<FareEngineChargesResponse>) {
		//

		//
		// Get the correct URL for the Fare Engine API

		const fareEngineUrl = await getFareEngineUrl();

		//
		// Extract the card token from the request parameters
		// and setup the correct fetch URL

		const cardToken = request.params['token'] as string;

		const fetchUrl = `${fareEngineUrl}/passenger/cards/${cardToken}/charges`;

		//
		// Fetch the Fare Engine API with the card token

		const response = await fetch(fetchUrl, {
			headers: {
				Host: process.env.FARE_ENGINE_API_BASE_URL,
			},
		});

		const responseData = await response.json() as FareEngineChargesResponse;

		return reply.send({
			data: responseData,
			error: null,
			statusCode: HttpStatus.OK,
		});

		//
	}

	static async getTaps(request: FastifyRequest, reply: FastifyReply<FareEngineTapsResponse>) {
		//

		//
		// Get the correct URL for the Fare Engine API

		const fareEngineUrl = await getFareEngineUrl();

		//
		// Extract the card token from the request parameters
		// and setup the correct fetch URL

		const cardToken = request.params['token'] as string;

		const fetchUrl = `${fareEngineUrl}/passenger/cards/${cardToken}/taps`;

		//
		// Fetch the Fare Engine API with the card token

		const response = await fetch(fetchUrl, {
			headers: {
				Host: process.env.FARE_ENGINE_API_BASE_URL,
			},
		});

		const responseData = await response.json() as FareEngineTapsResponse;

		return reply.send({
			data: responseData,
			error: null,
			statusCode: HttpStatus.OK,
		});

		//
	}
}
