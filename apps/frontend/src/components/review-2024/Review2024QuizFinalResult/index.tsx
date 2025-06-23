'use client';

/* * */

import { LottiePlayer } from '@/components/common/LottiePlayer';
import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

import { allQuizData } from '../_data/quiz';

/* * */

interface Props {
	points: number
}

/* * */

export function Review2024QuizFinalResult({ points }: Props) {
	//

	//
	// A. Transform data

	const t = useTranslations('review-2024.Review2024QuizFinalResult');

	//
	// B. Transform data

	const totalPoints = allQuizData.reduce((acc, quiz) => acc + quiz._points, 0);

	const pointTiers = [
		{ _id: 'terrible', animation: '/assets/review-2024/animations/quiz/quiz_finalresult_terrible.json', value: totalPoints * 0.2 },
		{ _id: 'bad', animation: '/assets/review-2024/animations/quiz/quiz_finalresult_bad.json', value: totalPoints * 0.4 },
		{ _id: 'good', animation: '/assets/review-2024/animations/quiz/quiz_finalresult_good.json', value: totalPoints * 0.6 },
		{ _id: 'incredible', animation: '/assets/review-2024/animations/quiz/quiz_finalresult_incredible.json', value: totalPoints - 1 },
		{ _id: 'perfect', animation: '/assets/review-2024/animations/quiz/quiz_finalresult_perfect.json', value: totalPoints },
	];

	const pointTier = pointTiers.find(tier => tier.value >= points) || pointTiers[0];

	//
	// C. Render components

	return (
		<div className={styles.container}>

			<div className={styles.animation}>
				<LottiePlayer path={pointTier.animation} loop play />
			</div>

			<p className={styles.title}>{t(`${pointTier._id}.title`)}</p>

			<p className={styles.subtitle}>{t(`${pointTier._id}.subtitle`, { points: points })}</p>

			<Button onClick={() => window.location.reload()}>{t('actions.restart')}</Button>

		</div>
	);

	//
}
