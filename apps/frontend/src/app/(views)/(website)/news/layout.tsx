/* * */

import { NewsListContextProvider } from '@/contexts/NewsList.context';

/* * */

export default function Layout({ children }) {
	return (
		<NewsListContextProvider>
			{children}
		</NewsListContextProvider>
	);
}
