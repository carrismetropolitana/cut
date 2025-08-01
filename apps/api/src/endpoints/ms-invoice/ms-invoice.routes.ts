/* * */

import { MsInvoiceController } from '@/endpoints/ms-invoice/ms-invoice.controller';
import { type FastifyInstance, FastifyService } from '@tmlmobilidade/connectors';

/* * */

const server: FastifyInstance = FastifyService.getInstance().server;
const namespace = '/ms-invoice';

/* * */

server.register(
	(instance, opts, next) => {
		// GET /ms-invoice/:ref/pdf
		instance.get('/:ref/pdf', MsInvoiceController.getInvoicePdf);

		next();
	},
	{ prefix: namespace },
);
