/* * */

import { SibsController } from '@/endpoints/sibs/sibs.controller';
import { FastifyService } from '@tmlmobilidade/connectors';
import { FastifyInstance } from 'fastify';

/* * */

const server: FastifyInstance = FastifyService.getInstance().server;
const namespace = '/sibs';

/* * */

server.register(
	(instance, opts, next) => {
		// GET /sibs/token
		instance.get('/token', SibsController.getToken);

		next();
	},
	{ prefix: namespace },
);
