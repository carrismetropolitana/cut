'use client';

/* * */

import Carousel from '@/components/common/Carousel';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { NewsCard } from '@/components/news/NewsCard';
import { NewsCardSkeleton } from '@/components/news/NewsCardSkeleton';
import collator from '@/utils/collator';
import { useTranslations } from 'next-intl';
import useSWR from 'swr';

/* * */

export function NewsSection() {
	//

	//
	// A. Setup variables

	const t = useTranslations('home.NewsSection');

	//
	// B. Fetch Data

	const { data: allNewsData } = useSWR('/api/news');

	//
	// C. Transform data

	const allNewsDataLatest = allNewsData?.sort((a, b) => collator.compare(b.publish_date, a.publish_date)).slice(0, 6);

	const carouselSlides = allNewsDataLatest?.map(slideItem => ({
		_id: slideItem._id,
		component: (
			<NewsCard
				_id={slideItem._id}
				coverImageSrc={slideItem.cover_image_src}
				publishDate={slideItem.publish_date}
				title={slideItem.title}
			/>
		),
	}));

	//
	// D. Render components

	return (
		<Surface>
			<Section heading={t('section_heading')} href="/news">
				<Carousel skeletonComponent={<NewsCardSkeleton />} skeletonQty={4} slides={carouselSlides} />
			</Section>
		</Surface>
	);

	//
}
