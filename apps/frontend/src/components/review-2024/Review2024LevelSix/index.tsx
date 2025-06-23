'use client';

/* * */

import { Surface } from '@/components/layout/Surface';

import styles from './styles.module.css';

/* * */

export function Review2024LevelSix() {
	return (
		<Surface forceOverflow>
			<div className={styles.videoWrapper}>
				<video className={styles.video} autoPlay loop muted playsInline>
					<source src="/assets/review-2024/videos/timeline.mp4" type="video/mp4" />
				</video>
			</div>
		</Surface>
	);
}
