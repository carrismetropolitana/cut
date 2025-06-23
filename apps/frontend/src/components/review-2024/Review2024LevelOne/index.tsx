'use client';

/* * */

import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { Review2024CardGroup } from '@/components/review-2024/Review2024CardGroup';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function Review2024LevelOne() {
	//

	//
	// A. Setup variables

	const t = useTranslations('review-2024.Review2024LevelOne');

	//
	// B. Render components

	return (
		<Surface forceOverflow>
			<Grid columns="abc">

				<Section withPadding="desktop" withGap>
					<div className={styles.headingWrapper}>
						<h2 className={styles.heading}>{t('passageiros.heading')}</h2>
						<h5 className={styles.subheading}>{t('passageiros.subheading')}</h5>
					</div>
					<Review2024CardGroup groupId="passageiros" />
				</Section>

				<Section withPadding="desktop" withGap>
					<div className={styles.headingWrapper}>
						<h2 className={styles.heading}>{t('tops.heading')}</h2>
						<h5 className={styles.subheading}>{t('tops.subheading')}</h5>
					</div>
					<Review2024CardGroup groupId="tops" />
				</Section>

				<Section withPadding="desktop" withGap>
					<div className={styles.headingWrapper}>
						<h2 className={styles.heading}>{t('recordes.heading')}</h2>
						<h5 className={styles.subheading}>{t('recordes.subheading')}</h5>
					</div>
					<Review2024CardGroup groupId="recordes" />
				</Section>

			</Grid>
		</Surface>
	);

	//
}
