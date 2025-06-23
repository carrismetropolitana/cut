/* * */

import { useAnalyticsContext } from '@/contexts/Analytics.context';
import { Image } from '@mantine/core';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

export interface Props {
	imageUrl: string
	title: string
	url: string
}

/* * */

export function PlannerCard({ imageUrl, title, url }: Props) {
	//

	//
	// A. Setup variables

	const analyticsContext = useAnalyticsContext();

	//
	// B. Handle actions

	const handlePartnerCardClick = () => {
		analyticsContext.actions.capture(ampli => ampli.plannerUsed({ planner_clicked: title }));
	};

	//
	return (
		<Link className={styles.container} href={url} onClick={handlePartnerCardClick} target="_blank">
			<Image alt={title} className={styles.coverImage} fallbackSrc="/assets/common/placeholder.png" src={imageUrl} />
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
			</div>
		</Link>
	);
}
