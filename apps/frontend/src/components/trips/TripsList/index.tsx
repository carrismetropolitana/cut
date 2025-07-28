'use client';

/* * */

import { useTokenContext } from '@/contexts/Token.context';
import { Table, type TableData } from '@mantine/core';
import { useMemo } from 'react';

import styles from './styles.module.css';

/* * */

export function TripsList() {
	//

	//
	// A. Setup variables

	const tokenContext = useTokenContext();

	//
	// B. Transform data

	const tableData: TableData = useMemo(() => {
		const table: TableData = {
			body: [],
			head: ['ID', 'Data', 'Hora', 'Tipo', 'Linha', 'Sentido'],
		};
		if (!tokenContext.data.trips?.taps) return table;
		tokenContext.data.trips.taps.forEach((tap) => {
			table.body.push([
				tap.tap_id,
				tap.timestamp,
				tap.ticketing.line,
				tap.ticketing.stop,
			]);
		});
		return table;
		//
	}, [tokenContext.data.trips]);

	//
	// C. Render components

	return (
		<div className={styles.container}>
			<Table data={tableData} />
		</div>
	);

	//
}
