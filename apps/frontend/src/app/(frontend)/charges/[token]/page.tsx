/* * */

import { ChargesList } from '@/components/charges/ChargesList';
import { TokenContextProvider } from '@/contexts/Token.context';

/* * */

export default async function Page({ params }) {
	const { token } = await params;
	return (
		<TokenContextProvider token={token}>
			<ChargesList />
		</TokenContextProvider>
	);
}
