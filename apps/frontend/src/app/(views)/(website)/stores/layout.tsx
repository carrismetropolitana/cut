/* * */

import { StoresListContextProvider } from '@/contexts/StoresList.context';
import { type Metadata } from 'next';

/* * */

export const metadata: Metadata = {
	description: 'Lojas e Rede de Agentes com ocupação em Tempo Real.',
	title: 'CMetropolitana | Lojas',
};

/* * */

export default function Layout({ children }) {
	return (
		<StoresListContextProvider>
			{children}
		</StoresListContextProvider>
	);
}
