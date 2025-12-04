'use client';

/* * */

import { type FareEngineCharge } from '@carrismetropolitana/cut-pckg-types';
import { Dates } from '@tmlmobilidade/dates';
import { useMemo } from 'react';

import styles from './styles.module.css';

import { ChargeAmountStatus } from '../ChargeAmountStatus';

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

	//
	// B. Render components

	return (
		<div className={styles.root}>
			<div className={styles.leftSection}>
				<span className={styles.date}>{parsedTimestamp}</span>
				<span className={styles.chargeId}>{data.charge_id}</span>
			</div>
			<div className={styles.rightSection}>
				<ChargeAmountStatus amount={data.amount} status={data.status} />
			</div>
		</div>
	);

	//
}
