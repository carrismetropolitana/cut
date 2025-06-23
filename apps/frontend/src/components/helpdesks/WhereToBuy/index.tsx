/* * */

import { Grid } from '@/components/layout/Grid';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { ThemeSwitch } from '@/components/responsive/ThemeSwitch';
import { Image } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

export function WhereToBuy() {
	//

	//
	// A. Setup variables

	const t = useTranslations('helpdesks.WhereToBuy');

	//
	// B. Render components

	return (
		<>

			<Surface variant="brand2">
				<Section heading={t('heading')} subheading={t('subheading')} withPadding>
					<Grid columns="ab" withGap>

						<Link className={styles.cardWrapper} href="/stores">
							<Image alt={t('stores.title')} className={styles.cardImage} src="/assets/helpdesks/stores.png" />
							<div className={styles.cardContents}>
								<p className={styles.cardTitle}>{t('stores.title')}</p>
								<p className={styles.cardDescription}>{t('stores.description')}</p>
							</div>
						</Link>

						<Link className={styles.cardWrapper} href="/app-navegante">
							<Image alt={t('app.title')} className={styles.cardImage} src="/assets/helpdesks/app.png" />
							<div className={styles.cardContents}>
								<p className={styles.cardTitle}>{t('app.title')}</p>
								<p className={styles.cardDescription}>{t('app.description')}</p>
							</div>
						</Link>

						<div className={styles.cardWrapper}>
							<ThemeSwitch
								dark={<Image alt={t('multibanco.title')} className={styles.cardImageAlt} src="/assets/helpdesks/multibanco-dark.png" />}
								light={<Image alt={t('multibanco.title')} className={styles.cardImageAlt} src="/assets/helpdesks/multibanco-light.png" />}
							/>
							<div className={styles.cardContents}>
								<p className={styles.cardTitle}>{t('multibanco.title')}</p>
								<p className={styles.cardDescription}>{t('multibanco.description')}</p>
							</div>
						</div>

						<div className={styles.cardWrapper}>
							<ThemeSwitch
								dark={<Image alt={t('payshop.title')} className={styles.cardImageAlt} src="/assets/helpdesks/payshop-dark.png" />}
								light={<Image alt={t('payshop.title')} className={styles.cardImageAlt} src="/assets/helpdesks/payshop-light.png" />}
							/>
							<div className={styles.cardContents}>
								<p className={styles.cardTitle}>{t('payshop.title')}</p>
								<p className={styles.cardDescription}>{t('payshop.description')}</p>
							</div>
						</div>

					</Grid>
				</Section>
			</Surface>

		</>
	);

	//
}
