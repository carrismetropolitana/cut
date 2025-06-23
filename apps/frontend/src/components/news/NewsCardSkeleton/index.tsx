/* * */

import { Skeleton } from '@mantine/core';

import styles from './styles.module.css';

/* * */

export function NewsCardSkeleton() {
	return (
		<div className={styles.container}>
			<Skeleton className={styles.coverImage} />
			<Skeleton className={styles.publishDate} />
			<Skeleton className={styles.titleOne} />
			<Skeleton className={styles.titleTwo} />
		</div>
	);
}
