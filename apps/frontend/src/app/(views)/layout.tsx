'use client';

/* * */

import { RootProviders } from '@/providers/root-providers';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

/* * */

export default function Layout({ children }) {
	return (
		<NuqsAdapter>
			<RootProviders>
				{children}
			</RootProviders>
		</NuqsAdapter>
	);
}
