/* * */

import { getFareEngineUrl } from '@/utils/get-fare-engine-url';
import { type FareEngineChargesResponse, FareEngineTapsResponse } from '@carrismetropolitana/cut-pckg-types';
import { HttpStatus } from '@tmlmobilidade/consts';
import { type FastifyReply, type FastifyRequest } from '@tmlmobilidade/fastify';

/* * */

export class FareEngineController {
	//

	/**
	 * This function retrieves the charges for a specific card token from the Fare Engine API.
	 * It constructs the URL based on the Fare Engine API base URL and the card token.
	 * It then fetches the data and returns it in the response.
	 */
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

	/**
	 * This function retrieves the taps for a specific card token from the Fare Engine API.
	 * It constructs the URL based on the Fare Engine API base URL and the card token.
	 * It then fetches the data and returns it in the response.
	 */
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

	/**
	 * This function updates a specific charge for a card token in the Fare Engine API.
	 * It constructs the URL based on the Fare Engine API base URL, card token, and charge ID.
	 * It then sends a POST request to update the charge and returns the response.
	 */
	static async updateCharge(request: FastifyRequest<{ Body: { billing_address: string, email: string, name: string, tax_id: string }, Params: { charge_id: string, token: string } }>, reply: FastifyReply<string>) {
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
		// Extract the charge ID and the customer details
		// from the request parameters

		const chargeId = request.params['charge_id'] as string;
		if (!chargeId) throw new Error('Charge ID is required');

		//
		// Validate the customer details

		const validatedCustomerDetails = request.body;

		//
		// Fetch the Fare Engine API with the card token

		const response = await fetch(fetchUrl, {
			body: JSON.stringify({
				charges: [chargeId],
				customer: {
					billing_address: validatedCustomerDetails.billing_address ?? '',
					email: validatedCustomerDetails.email ?? '',
					name: validatedCustomerDetails.name ?? '',
					tax_id: validatedCustomerDetails.tax_id ?? '',
				},
			}),
			headers: {
				'Content-Type': 'application/json',
				'Host': process.env.FARE_ENGINE_API_BASE_URL,
			},
			method: 'PATCH',
		});

		console.log('Response from Fare Engine API:', response.ok);

		// const responseResult = await response.text();
		const responseData = await response.json() as FareEngineTapsResponse;

		console.log('Response from Fare Engine API:', responseData);

		// return;

		return reply.send({
			data: 'responseData',
			error: null,
			statusCode: HttpStatus.OK,
		});

		//
	}

	//
}
