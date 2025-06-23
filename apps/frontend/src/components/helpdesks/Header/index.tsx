/* * */

import { Grid } from '@/components/layout/Grid';
import { Image } from '@mantine/core';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function Header() {
	//

	//
	// A. Setup variables

	const t = useTranslations('helpdesks.Header');

	//
	// B. Render components

	return (
		<>

			<Grid columns="ab" withGap>
				<div className={styles.cardWrapper}>
					<Image alt={t('ocasional_travel.title')} className={styles.cardImage} src="/assets/helpdesks/ocasional_travel.png" />
					<div className={styles.cardContents}>
						<p className={styles.cardTitle}>{t('ocasional_travel.title')}</p>
						<p className={styles.cardDescription}>{t('ocasional_travel.description')}</p>
					</div>
				</div>
				<div className={styles.cardWrapper}>
					<Image alt={t('frequent_travel.title')} className={styles.cardImage} src="/assets/helpdesks/frequent_travel.png" />
					<div className={styles.cardContents}>
						<p className={styles.cardTitle}>{t('frequent_travel.title')}</p>
						<p className={styles.cardDescription}>{t('frequent_travel.description')}</p>
					</div>
				</div>
			</Grid>

		</>
	);

	//
}
