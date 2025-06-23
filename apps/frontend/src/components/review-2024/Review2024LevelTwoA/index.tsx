'use client';

/* * */

import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { Review2024CardGroup } from '@/components/review-2024/Review2024CardGroup';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function Review2024LevelTwoA() {
	//

	//
	// A. Setup variables

	const t = useTranslations('review-2024.Review2024LevelTwo');

	//
	// B. Render components

	return (
		<Surface forceOverflow>
			<Section withPadding="desktop" withGap>
				<div className={styles.headingWrapper}>
					<h2 className={styles.heading}>{t('municipio_growth.heading')}</h2>
					<h5 className={styles.subheading}>{t('municipio_growth.subheading')}</h5>
				</div>
				<Grid columns="abc" withGap>
					<Review2024CardGroup groupId="municipio_growth_area_1" />
					<div className={styles.cardGroup}>
						<Review2024CardGroup groupId="municipio_growth_area_2" />
						<Review2024CardGroup groupId="municipio_growth_area_3" />
					</div>
					<Review2024CardGroup groupId="municipio_growth_area_4" />
				</Grid>
			</Section>
		</Surface>
	);

	//
}
