/* * */

import { Viewport } from '@/components/viewport/Viewport';
import { ConfigProviders } from '@/providers/config-providers';
import { RootProviders } from '@/providers/root-providers';
import { ThemeProviders } from '@/providers/theme-providers';
import { defaultTheme } from '@/themes/_default/default.theme';
import { Notifications } from '@mantine/notifications';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

/* * */

export default function Layout({ children }) {
	return (
		<NuqsAdapter>
			<RootProviders>
				<ConfigProviders>
					<ThemeProviders themeData={defaultTheme} themeId="website">
						<Notifications styles={{ root: { marginTop: '60px' } }} />
						<Viewport>
							{children}
						</Viewport>
					</ThemeProviders>
				</ConfigProviders>
			</RootProviders>
		</NuqsAdapter>
	);
}
