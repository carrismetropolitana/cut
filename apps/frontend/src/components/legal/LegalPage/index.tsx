'use client';

/* * */

import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function LegalPage() {
	//

	//
	// A. Setup variables

	const t = useTranslations('legal.LegalPage');

	//
	// B. Render components

	return (
		<Surface>
			<Section heading={t('title')} subheading={t('subheading')} withPadding>
				<div className={styles.container}>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.1.title')}</div>
						<div className={styles.text}>{t('sections.1.paragraphs.1')}</div>
						<div className={styles.text}>{t('sections.1.paragraphs.2')}</div>
						<div className={styles.text}>{t('sections.1.paragraphs.3')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.2.title')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.1')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.3.title')}</div>
						<div className={styles.text}>{t('sections.3.paragraphs.1')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.4.title')}</div>
						<div className={styles.text}>{t('sections.4.paragraphs.1')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.5.title')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.1')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.2')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.3')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.4')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.5')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.6')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.7')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.8')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.6.title')}</div>
						<div className={styles.text}>{t('sections.6.paragraphs.1')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.7.title')}</div>
						<div className={styles.text}>{t('sections.7.paragraphs.1')}</div>
					</div>
				</div>
			</Section>
		</Surface>
	);

	//
}
