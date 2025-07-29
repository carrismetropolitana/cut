/* * */

import { FastifyService, type FastifyServiceOptions } from '@tmlmobilidade/connectors';

/* * */

(async function () {
	//

	const options: FastifyServiceOptions = {
		ignoreTrailingSlash: true,
		logger: {
			level: 'debug',
			transport: {
				options: {
					colorize: true,
				},
				target: 'pino-pretty',
			},
		},
		origin: true,
		port: 49011,
	};

	// Start Fastify server

	const fastifyService = FastifyService.getInstance(options);

	await fastifyService.start();

	//
})();
