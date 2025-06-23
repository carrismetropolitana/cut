/* * */

import { GridNav } from '@/components/layout/GridNav';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { URLS } from '@/settings/urls.settings';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function OpenDataPage() {
	//

	//
	// A. Setup variables

	const t = useTranslations('open-data.OpenDataPage');

	//
	// B. Transform data

	const REPO_LINKS = [
		{ _id: 'gtfs', description: t('links.repos.gtfs.description'), href: URLS.repos.gtfs, label: t('links.repos.gtfs.label') },
		{ _id: 'api', description: t('links.repos.api.description'), href: URLS.repos.api, label: t('links.repos.api.label') },
		{ _id: 'datasets', description: t('links.repos.datasets.description'), href: URLS.repos.datasets, label: t('links.repos.datasets.label') },
	];

	const PARTNER_LINKS = [
		{ _id: 'dados_gov', href: URLS.open_data_partners.dados_gov, label: t('links.partners.dados_gov.label') },
		{ _id: 'nap_pt', href: URLS.open_data_partners.nap_pt, label: t('links.partners.nap_pt.label') },
		{ _id: 'github', href: URLS.open_data_partners.github, label: t('links.partners.github.label') },
	];

	//
	// C. Render components

	return (
		<>

			<Surface>
				<Section heading={t('sections.intro.heading')} subheading={t('sections.intro.subheading')}>
					<GridNav className={styles.gridNavOverride} items={REPO_LINKS} />
				</Section>
			</Surface>

			<Surface>
				<Section heading={t('sections.partners.heading')} subheading={t('sections.intro.subheading')}>
					<GridNav className={styles.gridNavOverrideThreeCols} items={PARTNER_LINKS} />
				</Section>
			</Surface>

			<Surface variant="persistent">
				<Section heading={t('sections.legal_framing.heading')} withGap withPadding>
					<p className={styles.text}>{t('sections.legal_framing.text_1')}</p>
					<p className={styles.text}>{t('sections.legal_framing.text_2')}</p>
					<p className={styles.text}>{t('sections.legal_framing.text_3')}</p>
					<p className={styles.text}>{t('sections.legal_framing.text_4')}</p>
				</Section>
			</Surface>

		</>
	);

	//
}
