'use client';

/* * */

import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function PrivacyPage() {
	//

	//
	// A. Setup variables

	const t = useTranslations('legal.PrivacyPage');

	//
	// B. Render components

	return (
		<Surface>
			<Section heading={t('title')} withPadding>
				<div className={styles.container}>
					<div className={styles.section}>
						<div className={styles.text}>{t('sections.0.paragraphs.1')}</div>
						<div className={styles.text}>{t('sections.0.paragraphs.2')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.1.title')}</div>
						<div className={styles.text}>{t('sections.1.paragraphs.1')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.2.title')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.1')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.2')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.list.1')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.list.2')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.list.3')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.list.4')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.list.5')}</div>
						<div className={styles.text}>{t('sections.2.paragraphs.list.6')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.3.title')}</div>
						<div className={styles.text}>{t('sections.3.paragraphs.1')}</div>
						<div className={styles.text}>{t('sections.3.paragraphs.2')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.4.title')}</div>
						<div className={styles.text}>{t('sections.4.paragraphs.1')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.5.title')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.1')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.list.1')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.list.2')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.list.3')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.list.4')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.list.5')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.2')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.3')}</div>
						<div className={styles.text}>{t('sections.5.paragraphs.4')}</div>
					</div>
					<div className={styles.section}>
						<div className={styles.title}>{t('sections.6.title')}</div>
						<div className={styles.text}>{t('sections.6.paragraphs.1')}</div>
						<div className={styles.text}>{t('sections.6.paragraphs.2')}</div>
						<div className={styles.text}>{t('sections.6.paragraphs.3')}</div>
					</div>
				</div>
			</Section>
		</Surface>
	);

	//
}
