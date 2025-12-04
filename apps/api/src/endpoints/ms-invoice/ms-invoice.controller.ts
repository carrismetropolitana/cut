/* * */

import { getMsInvoiceUrl } from '@/utils/get-ms-invoice-url';
import { type FastifyReply, type FastifyRequest } from '@tmlmobilidade/fastify';

/* * */

export class MsInvoiceController {
	//

	static async getInvoicePdf(request: FastifyRequest<{ Params: { ref: string } }>, reply: FastifyReply<Buffer>) {
		//

		//
		// Get the correct URL for the MS Invoice API

		const msInvoiceUrl = await getMsInvoiceUrl();

		//
		// Extract the document ref from the request parameters
		// and setup the correct fetch URL

		const documentRef = request.params['ref'] as string;

		const fetchUrl = `${msInvoiceUrl}/ticketingbackoffice/invoices/${documentRef}?layout=DefaultReceipt8`;

		//
		// Fetch the MS Invoice API with the document ref

		const response = await fetch(fetchUrl, { headers: { Accept: 'application/pdf' } });

		const responseData = await response.text();

		// Decode from base64 and send a buffer to the client

		const bufferData = Buffer.from(responseData, 'base64');

		return reply
			.header('Content-Type', 'application/pdf')
			.header('content-disposition', `inline; filename="${documentRef}.pdf"`)
			.send(bufferData);

		//
	}

	//
}
