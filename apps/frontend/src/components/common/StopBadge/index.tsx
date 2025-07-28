'use client';

/* * */

import { type Stop } from '@carrismetropolitana/api-types/network';

import styles from './styles.module.css';

/* * */

interface StopBadgeProps {
	data?: Stop
}

/* * */

export function StopBadge({ data }: StopBadgeProps) {
	return (
		<div className={styles.root}>
			<div className={styles.name}>{data.long_name || 'N/A'}</div>
			<span className={styles.id}>#{data.id}</span>
		</div>
	);
}
