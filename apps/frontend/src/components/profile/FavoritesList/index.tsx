'use client';

/* * */

import { LinesListViewFavorites } from '@/components/lines/LinesListViewFavorites';
import { FavoritesListToolbar } from '@/components/profile/FavoritesListToolbar';
import { StopsListViewFavorites } from '@/components/stops/StopsListViewFavorites';
import { useProfileListContext } from '@/contexts/ProfileList.context';

/* * */

export function FavoritesList() {
	//

	//
	// A. Setup variables

	const profileListContext = useProfileListContext();

	//
	// B. Render components

	return (
		<>
			<FavoritesListToolbar />
			{(!profileListContext.flags.is_loading && profileListContext.filters.by_current_view === 'lines') && <LinesListViewFavorites />}
			{(!profileListContext.flags.is_loading && profileListContext.filters.by_current_view === 'stops') && <StopsListViewFavorites />}
		</>
	);

	//
}
