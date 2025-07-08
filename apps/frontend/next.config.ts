/* * */

import { type NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

/* * */

const nextConfig: NextConfig = {

	output: 'standalone',

	reactStrictMode: true,

	async rewrites() {
		return [
			{
				destination: `http://localhost:49011/:path*`,
				source: '/api/:path*',
			},
		];
	},

};

/* * */

export default createNextIntlPlugin()(nextConfig);
