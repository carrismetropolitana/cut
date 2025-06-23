'use client';

/* * */

import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

interface Props {
	points: number
}

/* * */

export function Review2024QuizPoints({ points }: Props) {
	//

	//
	// A. Setup variables

	const t = useTranslations('review-2024.Review2024QuizPoints');

	//
	// B. Render components

	return (
		<div className={styles.container}>
			{t('points', { points: points })}
		</div>
	);

	//
}
