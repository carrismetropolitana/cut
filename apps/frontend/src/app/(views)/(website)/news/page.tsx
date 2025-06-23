/* * */

import { NewsList } from '@/components/news/NewsList';
import { type Metadata } from 'next';

/* * */

export const metadata: Metadata = {
	description: 'Todas as noticias da CMetropolitana.',
	title: 'CMetropolitana | Notícias',
};

/* * */

export default function Page() {
	return <NewsList />;
}
