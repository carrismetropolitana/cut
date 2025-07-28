'use client';

/* * */

import { type Line } from '@carrismetropolitana/api-types/network';

import styles from './styles.module.css';

/* * */

interface LineBadgeProps {
	data?: Line
}

/* * */

export function LineBadge({ data }: LineBadgeProps) {
	return (
		<div className={styles.root} style={{ backgroundColor: data?.color, color: data?.text_color }}>
			{data?.short_name || '• • •'}
		</div>
	);
}
