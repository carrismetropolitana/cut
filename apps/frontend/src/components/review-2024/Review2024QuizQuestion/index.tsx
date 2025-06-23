'use client';

/* * */

import { LottiePlayer } from '@/components/common/LottiePlayer';
import { allQuizData, type Review2024QuizAnswerSchema, type Review2024QuizSchema } from '@/components/review-2024/_data/quiz';
import { IconCircleCheckFilled } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

interface Props {
	answerStatus: 'correct' | 'wrong' | null
	onAnswer: (answerData: Review2024QuizAnswerSchema) => void
	onClickNext: () => void
	progress: number
	quizData: Review2024QuizSchema
}

interface CustomCSSProperties extends React.CSSProperties {
	'--color-border'?: string
	'--color-primary': string
	'--color-text': string
}

/* * */

export function Review2024QuizQuestion({ answerStatus, onAnswer, onClickNext, progress, quizData }: Props) {
	//

	//
	// A. Transform data

	const t = useTranslations('review-2024.Review2024QuizQuestion');

	const stylesData: CustomCSSProperties = {
		'--color-border': quizData.colors.border || quizData.colors.primary,
		'--color-primary': quizData.colors.primary,
		'--color-text': quizData.colors.text,
	};

	//
	// B. Render components

	return (
		<div
			className={styles.container}
			data-is-answered={answerStatus !== null}
			style={stylesData}
		>

			<div className={styles.header}>
				<p className={styles.headerTitle}>{t('progress', { current: progress + 1, total: allQuizData.length })}</p>
				<p className={styles.headerPoints}>{t('points', { points: quizData._points })}</p>
			</div>

			<div className={styles.question}>

				{quizData.question.lottie_src && (
					<div className={styles.questionLottie}>
						<LottiePlayer path={quizData.question.lottie_src} loop play />
					</div>
				)}

				<p className={styles.questionTitle}>{quizData.question.title}</p>

				{answerStatus !== null && quizData.question.description && (
					<p className={styles.questionDescription}>{quizData.question.description}</p>
				)}

				<div className={styles.answersWrapper}>
					{quizData.answers.map(answerData => (
						<div
							key={answerData._id}
							className={styles.answerOption}
							data-is-correct={answerData.is_correct}
							onClick={() => onAnswer(answerData)}
						>
							{answerData.label}
							{answerStatus !== null && answerData.is_correct && (
								<IconCircleCheckFilled />
							)}
						</div>
					))}
				</div>

				{answerStatus !== null && (
					<div className={styles.nextQuestion} onClick={onClickNext}>
						{t('next_question')}
					</div>
				)}

			</div>

		</div>
	);

	//
}
