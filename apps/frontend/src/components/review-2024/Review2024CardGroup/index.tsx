/* * */

import { allCardsData } from '@/components/review-2024/_data/cards';
import { Review2024Card } from '@/components/review-2024/Review2024Card';

import styles from './styles.module.css';

/* * */

interface Props {
	groupId: string
}

/* * */

export function Review2024CardGroup({ groupId }: Props) {
	//

	//
	// A. Transform data

	const groupCards = allCardsData.filter(card => card._group === groupId);

	// If groupId starts with 'terminals', then we need to sort the cards by the number in the header
	if (groupId.startsWith('terminals')) {
		groupCards.sort((a, b) => Number(b.header.number.replace('%', '')) - Number(a.header.number.replace('%', '')));
	}
	//
	// B. Render components

	return (
		<div className={styles.container}>
			{groupCards[0]._group_title && <h3 className={styles.groupTitle}>{groupCards[0]._group_title}</h3>}
			{groupCards.map((cardData, index) => (
				<Review2024Card
					key={cardData._id}
					cardData={cardData}
					isFirstChild={index === 0}
					isLastChild={index === groupCards.length - 1}
				/>
			))}
		</div>
	);

	//
}
