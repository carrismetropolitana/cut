/* * */

import type { SimplifiedAlert } from '@/types/alerts.types';

import AlertsCarouselSlide from '@/components/common/AlertsCarouselSlide';
import Carousel from '@/components/common/Carousel';

/* * */

interface Props {
	alerts: SimplifiedAlert[]
}

/* * */

export function AlertsCarousel({ alerts }: Props) {
	//

	const carouselSlides = alerts?.map(slideItem => ({
		_id: slideItem.alert_id + slideItem.description,
		component: (
			<AlertsCarouselSlide alert={slideItem} />
		),
	}));

	return (
		<Carousel slides={carouselSlides} />
	);

	//
}
