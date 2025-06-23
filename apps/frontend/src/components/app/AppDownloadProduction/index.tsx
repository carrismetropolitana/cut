/* * */

import { GridNav } from '@/components/layout/GridNav';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { URLS } from '@/settings/urls.settings';
import { IconBrandAppleFilled, IconBrandGoogleFilled } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function AppDownloadProduction() {
	//

	//
	// A. Setup variables

	const t = useTranslations('app.AppDownloadProduction');

	//
	// B. Transform data

	const STORE_LINKS = [
		{ _id: 'iphone', href: URLS.app.apple_app_store.prod, icon: <IconBrandAppleFilled />, label: t('iphone') },
		{ _id: 'android', href: URLS.app.google_play_store.prod, icon: <IconBrandGoogleFilled />, label: t('android') },
	];

	//
	// C. Render components

	return (
		<Surface>
			<Section heading={t('heading')} subheading={t('subheading')}>
				<GridNav className={styles.gridNavOverride} items={STORE_LINKS} />
			</Section>
		</Surface>
	);

	//
}
