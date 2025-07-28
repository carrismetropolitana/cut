'use client';

/* * */

import { type FareEngineTap } from '@carrismetropolitana/cut-pckg-types';
import { Dates, Formats } from '@tmlmobilidade/utils';
import { useMemo } from 'react';

import styles from './styles.module.css';

/* * */

interface TripsListItemProps {
	data: FareEngineTap
}

/* * */

export function TripsListItem({ data }: TripsListItemProps) {
	//

	//
	// A. Transform data

	const parsedDateTime = useMemo(() => {
		const result = Dates.fromISO(data.timestamp).toFormat('dd/mm/yyyy HH:mm');
		return result;
	}, [data.timestamp]);

	//
	// C. Render components

	return (
		<div className={styles.root}>
			{/* <p className={styles.id}>{data.tap_id}</p> */}
			<p className={styles.date}>{parsedDateTime}</p>
			<p className={styles.line}>{data.ticketing.line}</p>
			<p className={styles.stop}>{data.ticketing.stop}</p>
			<p className={styles.vehicle}>{data.ticketing.vehicle}</p>
		</div>
	);

	//
}
