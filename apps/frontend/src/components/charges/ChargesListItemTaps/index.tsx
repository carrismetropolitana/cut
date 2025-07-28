'use client';

/* * */

import { LineBadge } from '@/components/common/LineBadge';
import { StopBadge } from '@/components/common/StopBadge';
import { type Line, type Stop } from '@carrismetropolitana/api-types/network';
import { type FareEngineTap } from '@carrismetropolitana/cut-pckg-types';
import { Table, type TableData } from '@mantine/core';
import { Dates } from '@tmlmobilidade/utils';
import { useMemo } from 'react';
import useSWR from 'swr';

import styles from './styles.module.css';

/* * */

interface ChargesListItemTapsProps {
	taps: FareEngineTap[]
}

/* * */

export function ChargesListItemTaps({ taps }: ChargesListItemTapsProps) {
	//

	const { data: allLinesData } = useSWR<Line[]>('https://api.carrismetropolitana.pt/v2/lines');
	const { data: allStopsData } = useSWR<Stop[]>('https://api.carrismetropolitana.pt/v2/stops');

	const tableData: TableData = useMemo(() => {
		// Setup an empty table with headers
		const table: TableData = {
			body: [],
			head: ['Linha', 'Paragem', 'Data e Hora'],
		};
		// If there are no taps, return the empty table
		if (!taps || !allLinesData || !allStopsData) return table;
		// Loop through the taps and fill the table with data
		for (const tapData of taps) {
			// Find the corresponding Line and Stop the tap IDs
			const lineData = allLinesData.find(line => line.id === tapData.ticketing.line);
			const stopData = allStopsData.find(stop => stop.id === tapData.ticketing.stop);
			// Parse the tap timestamp
			const parsedTimestamp = Dates.fromISO(tapData.timestamp).toFormat('dd/mm/yyyy - HH:mm');
			// If there are charges, fill the table with data
			table.body.push([
				<LineBadge data={lineData} />,
				<StopBadge data={stopData} />,
				parsedTimestamp,
			]);
		}
		return table;
	}, [taps, allLinesData, allStopsData]);

	return (
		<div className={styles.root}>
			<h3 className={styles.title}>Viagens:</h3>
			<Table data={tableData} highlightOnHover withTableBorder />
		</div>
	);

	//
}
