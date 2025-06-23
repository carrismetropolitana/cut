/* * */

import { FavoritesList } from '@/components/profile/FavoritesList';
import { LinesListContextProvider } from '@/contexts/LinesList.context';
import { ProfileListContextProvider } from '@/contexts/ProfileList.context';
import { StopsListContextProvider } from '@/contexts/StopsList.context';

/* * */

export default function Page() {
	return (
		<ProfileListContextProvider>
			<LinesListContextProvider>
				<StopsListContextProvider>
					<FavoritesList />
				</StopsListContextProvider>
			</LinesListContextProvider>
		</ProfileListContextProvider>
	);
}
