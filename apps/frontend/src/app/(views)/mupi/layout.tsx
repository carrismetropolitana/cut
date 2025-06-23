/* * */

import { MupiViewport } from '@/components/viewport/MupiViewport';
import { ConfigProviders } from '@/providers/config-providers';
import { DataProviders } from '@/providers/data-providers';
import { MapProviders } from '@/providers/map-providers';
import { ProfileProviders } from '@/providers/profile-providers';
import { ThemeProviders } from '@/providers/theme-providers';
import { mupiTheme } from '@/themes/mupi/mupi.theme';
import { Notifications } from '@mantine/notifications';

/* * */

export default function Layout({ children }) {
	return (
		<ConfigProviders>
			<ThemeProviders themeData={mupiTheme} themeId="mupi">
				<DataProviders>
					<ProfileProviders>
						<MapProviders>
							<Notifications styles={{ root: { marginTop: '60px' } }} />
							<MupiViewport>
								{children}
							</MupiViewport>
						</MapProviders>
					</ProfileProviders>
				</DataProviders>
			</ThemeProviders>
		</ConfigProviders>
	);
}
