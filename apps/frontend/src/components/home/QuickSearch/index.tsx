/* * */

import { QuickSearchFavoritesBar } from '@/components/home/QuickSearchFavoritesBar';
import { QuickSearchWidget } from '@/components/home/QuickSearchWidget';
import { Surface } from '@/components/layout/Surface';

/* * */

export function QuickSearch() {
	return (
		<Surface variant="brand" fullHeight>
			<QuickSearchFavoritesBar />
			<QuickSearchWidget />
		</Surface>
	);
}
