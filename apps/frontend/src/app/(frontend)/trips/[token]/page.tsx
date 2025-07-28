/* * */

import { TripsList } from '@/components/trips/TripsList';
import { TokenContextProvider } from '@/contexts/Token.context';

/* * */

export default async function Page({ params }) {
	const { token } = await params;
	return (
		<TokenContextProvider token={token}>
			<TripsList />
		</TokenContextProvider>
	);
}
