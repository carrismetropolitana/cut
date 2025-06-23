/* * */

import { LinesListContextProvider } from '@/contexts/LinesList.context';

/* * */

export default function Layout({ children }) {
	return (
		<LinesListContextProvider>
			{children}
		</LinesListContextProvider>
	);
}
