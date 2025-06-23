/* * */

import { Skeleton } from '@mantine/core';

import styles from './styles.module.css';

/* * */

export function PlannerCardSkeleton() {
	return (
		<div className={styles.container}>
			<Skeleton className={styles.coverImage} />
			<Skeleton className={styles.titleOne} />
		</div>
	);
}
