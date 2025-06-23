'use client';

/* * */

import { LottiePlayer } from '@/components/common/LottiePlayer';
import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function Pass() {
	//

	//
	// A. Setup variables

	const t = useTranslations('cards.Pass');

	//
	// B. Render components

	return (
		<Surface variant="brand2">
			<Section heading={t('heading')} subheading={t('subheading')} withPadding>
				<Grid columns="ab" withGap>

					<div className={styles.cardWrapper}>
						<LottiePlayer path="/assets/cards/metropolitano.json" loop play />
						<div className={styles.cardContents}>
							<p className={styles.cardTitle}>{t('metropolitano.title')}</p>
							<p className={styles.cardDescription}>{t('metropolitano.description')}</p>
						</div>
					</div>

					<div className={styles.cardWrapper}>
						<LottiePlayer path="/assets/cards/municipal.json" loop play />
						<div className={styles.cardContents}>
							<p className={styles.cardTitle}>{t('municipal.title')}</p>
							<p className={styles.cardDescription}>{t('municipal.description')}</p>
						</div>
					</div>

				</Grid>
			</Section>
		</Surface>
	);

	//
}
