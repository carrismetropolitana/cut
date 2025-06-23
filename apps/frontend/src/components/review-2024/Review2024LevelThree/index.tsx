'use client';

/* * */

import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { Review2024CardGroup } from '@/components/review-2024/Review2024CardGroup';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function Review2024LevelThree() {
	//

	//
	// A. Setup variables

	const t = useTranslations('review-2024.Review2024LevelThree');

	//
	// B. Render components

	return (
		<Surface forceOverflow>
			<Section withPadding="desktop" withGap>

				<div className={styles.headingWrapper}>
					<h2 className={styles.heading}>{t('terminals.heading')}</h2>
					<h5 className={styles.subheading}>{t('terminals.subheading')}</h5>
				</div>

				<Grid columns="abc" withGap>
					<Review2024CardGroup groupId="terminals_1" />
					<Review2024CardGroup groupId="terminals_2" />
					<Review2024CardGroup groupId="terminals_3" />
				</Grid>
			</Section>
		</Surface>
	);

	//
}
