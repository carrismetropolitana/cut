/* * */

import { Image } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

interface Props {
	coverImageSrc: string
	href?: string
	title: string
}

/* * */

export function MainCarouselCard({ coverImageSrc, href, title }: Props) {
	//

	//
	// A. Setup variables

	const t = useTranslations('home.MainCarouselCard');

	//
	// B. Render components

	if (!href) {
		return (
			<Image alt={title} fallbackSrc="/assets/common/placeholder.png" src={coverImageSrc} />
		);
	}

	return (
		<div className={styles.container}>
			<Link className={styles.learnMore} href={href} target="_blank">
				{t('learn_more')}
				<IconArrowRight size={18} />
			</Link>
			<Image alt={title} fallbackSrc="/assets/common/placeholder.png" src={coverImageSrc} />
		</div>
	);

	//
}
