'use client';

/* * */

import { Surface } from '@/components/layout/Surface';
import { Image } from '@mantine/core';

import styles from './styles.module.css';

/* * */

export function Review2024Intro() {
	return (
		<Surface forceOverflow>
			<Image alt="Review 2024" className={styles.image} src="/assets/review-2024/images/intro.png" />
		</Surface>
	);
}
