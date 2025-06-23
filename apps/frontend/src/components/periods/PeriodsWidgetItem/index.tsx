'use client';

/* * */

import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

import styles from './styles.module.css';

import { PeriodIcon } from '../PeriodIcon';

/* * */

export function PeriodsWidgetItem({ periodData }) {
	//

	//
	// A. Setup variables

	const t = useTranslations('periods.PeriodsWidgetItem');

	//
	// A. Setup variables

	const nextValidPair = useMemo(() => {
		if (!periodData) return;
		return periodData.validPairs[0];
	}, [periodData]);

	//
	// B. Render components

	if (!periodData) {
		return null;
	}

	return (
		<div className={`${styles.container} ${periodData.isActive && styles.isActive}`}>
			<PeriodIcon id={periodData.id} size={34} />
			<div className={styles.content}>
				<p className={styles.name}>{periodData.name}</p>
				{periodData.isActive
					? <p className={styles.date}>{t('until', { value: nextValidPair.until })}</p>
					: <p className={styles.date}>{t('from', { value: nextValidPair.from })}</p>}
			</div>
		</div>
	);

	//
}
