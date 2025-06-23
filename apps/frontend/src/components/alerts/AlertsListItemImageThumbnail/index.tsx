/* * */

import { useAnalyticsContext } from '@/contexts/Analytics.context';
import { Image } from '@mantine/core';
import { IconCircleArrowUpRightFilled } from '@tabler/icons-react';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

interface AlertsListItemImageThumbnailProps {
	alertId: string
	alertTitle: string
	alt: string
	href: string
	src: string
	target?: string
}

/* * */

export default function Component({ alertId, alertTitle, alt, href, src, target }: AlertsListItemImageThumbnailProps) {
	//

	//
	// A. Setup variables

	const analyticsContext = useAnalyticsContext();

	//
	// B. Handle actions

	const handleAlertDetailClick = () => {
		analyticsContext.actions.capture(ampli => ampli.alertClicked({ alert_id: alertId, alert_title: alertTitle || '' }));
	};

	//
	// C. Render components

	return (
		<Link className={styles.container} href={href} onClick={handleAlertDetailClick} target={target}>
			<IconCircleArrowUpRightFilled className={styles.icon} size={25} />
			<Image alt={alt} className={styles.image} fallbackSrc="/assets/common/placeholder.png" src={src} />
		</Link>
	);
}
