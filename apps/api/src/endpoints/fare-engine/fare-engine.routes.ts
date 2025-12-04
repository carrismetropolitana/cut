/* * */

import { FareEngineController } from '@/endpoints/fare-engine/fare-engine.controller';
import { type FastifyInstance, FastifyService } from '@tmlmobilidade/fastify';

/* * */

const server: FastifyInstance = FastifyService.getInstance().server;
const namespace = '/fare-engine';

/* * */

server.register(
	(instance, opts, next) => {
		//

		// GET /fare-engine/:token/taps
		instance.get('/:token/taps', FareEngineController.getTaps);

		// GET /fare-engine/:token/charges
		instance.get('/:token/charges', FareEngineController.getCharges);

		// GET /fare-engine/:token/:charge_id/update
		instance.post('/:token/:charge_id/update', FareEngineController.updateCharge);

		next();
	},
	{ prefix: namespace },
);
