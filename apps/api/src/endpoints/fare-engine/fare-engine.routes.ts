/* * */

import { FareEngineController } from '@/endpoints/fare-engine/fare-engine.controller';
import { FastifyService } from '@tmlmobilidade/connectors';
import { FastifyInstance } from 'fastify';

/* * */

const server: FastifyInstance = FastifyService.getInstance().server;
const namespace = '/fare-engine';

/* * */

server.register(
	(instance, opts, next) => {
		// GET /fare-engine/:token
		instance.get('/:token', FareEngineController.getToken);

		next();
	},
	{ prefix: namespace },
);
