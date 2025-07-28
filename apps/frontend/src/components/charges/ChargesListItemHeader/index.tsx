'use client';

/* * */

import { type FareEngineCharge } from '@carrismetropolitana/cut-pckg-types';
import { Dates } from '@tmlmobilidade/utils';
import { useMemo } from 'react';

import styles from './styles.module.css';

/* * */

interface ChargesListItemHeaderProps {
	data: FareEngineCharge
}

/* * */

export function ChargesListItemHeader({ data }: ChargesListItemHeaderProps) {
	//

	//
	// A. Transform data

	const parsedTimestamp = useMemo(() => {
		const tapsTimestamps = data.taps.map(tap => Dates.fromISO(tap.timestamp).toFormat('dd/LL/yyyy'));
		const uniqueDates = new Set<string>(tapsTimestamps);
		return Array.from(uniqueDates).join(', ');
	}, [data.request_timestamp]);

	const parsedAmount = useMemo(() => {
		const value = (data.amount / 100).toFixed(2);
		return `€ ${value}`;
	}, [data.amount]);

	//
	// B. Render components

	return (
		<div className={styles.root}>
			<div className={styles.leftSection}>
				<span className={styles.date}>{parsedTimestamp}</span>
				<span className={styles.chargeId}>{data.charge_id}</span>
			</div>
			<div className={styles.rightSection}>
				<span className={styles.status} data-status="ok">{data.status}</span>
				<div className={styles.amount} data-status="paid">{parsedAmount}</div>
			</div>
		</div>
	);

	//
}
