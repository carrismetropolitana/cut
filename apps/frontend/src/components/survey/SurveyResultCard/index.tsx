'use client';

/* * */
import { SurveryResultsCardSchema } from '@/components/survey/_data/results';

import styles from './styles.module.css';
/* * */

interface Props {
	cardData: SurveryResultsCardSchema
}

export function SurveyResultCard({ cardData }: Props) {
	//

	//
	// A. Setup variables

	const { _id, color, content, header } = cardData;
	const { primary, text } = color;

	//
	// B.Render components

	return (
		<div className={styles.container} id={_id?.toString() || ''} style={{ border: `1px solid ${primary}` }}>
			<div className={styles.header}>
				<div className={styles.leftColumn}>
					<div className={styles.circledNumber}>
						<div className={styles.blurredCircle} style={{ backgroundColor: primary, color: text }} />
						<p className={styles.headerNumber} style={{ color: text }}>{header.value}</p>
					</div>
				</div>
				<div className={styles.rightColumn}>
					<p className={styles.headerTitle}>{content.description}</p>
				</div>
			</div>
		</div>
	);

	//
}
