'use client';

/* * */

import { Review2024Intro } from '@/components/review-2024/Review2024Intro';
import { Review2024LevelFour } from '@/components/review-2024/Review2024LevelFour';
import { Review2024LevelOne } from '@/components/review-2024/Review2024LevelOne';
import { Review2024LevelSix } from '@/components/review-2024/Review2024LevelSix';
import { Review2024LevelThree } from '@/components/review-2024/Review2024LevelThree';
import { Review2024LevelTwoA } from '@/components/review-2024/Review2024LevelTwoA';
import { Review2024LevelTwoB } from '@/components/review-2024/Review2024LevelTwoB';
import { Review2024LevelTwoC } from '@/components/review-2024/Review2024LevelTwoC';
import { Review2024QuizWrapper } from '@/components/review-2024/Review2024QuizWrapper';
import { Review2024TabSelector } from '@/components/review-2024/Review2024TabSelector';
import { useQueryState } from 'nuqs';
import { useState } from 'react';

/* * */

export function Review2024Page() {
	//

	//
	// A. Setup variables

	const [selectedTab, setSelectedTab] = useQueryState('tab', { defaultValue: 'overview' });

	const [quizPoints, setQuizPoints] = useState(0);
	const [quizProgress, setQuizProgress] = useState(0);
	const [answerStatus, setAnswerStatus] = useState<'correct' | 'wrong' | null>(null);

	//
	// B. Render components

	return (
		<>

			<Review2024Intro />

			<Review2024TabSelector
				onSelectTab={setSelectedTab}
				selectedTab={selectedTab}
			/>

			{selectedTab === 'overview' && (
				<>
					<Review2024LevelOne />
					<Review2024LevelThree />
					<Review2024LevelTwoA />
					<Review2024LevelTwoB />
					<Review2024LevelTwoC />
					<Review2024LevelFour />
					<Review2024LevelSix />
				</>
			)}

			{selectedTab === 'quiz' && (
				<Review2024QuizWrapper
					answerStatus={answerStatus}
					points={quizPoints}
					progress={quizProgress}
					setAnswerStatus={setAnswerStatus}
					setPoints={setQuizPoints}
					setProgress={setQuizProgress}
				/>
			)}

		</>
	);

	//
}
