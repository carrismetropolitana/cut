'use client';

/* * */

import { LineBadge } from '@/components/common/LineBadge';
import { type Line, type Stop } from '@carrismetropolitana/api-types/network';
import { type FareEngineTap } from '@carrismetropolitana/cut-pckg-types';
import { Table, TableData } from '@mantine/core';
import { Dates } from '@tmlmobilidade/utils';
import { useMemo } from 'react';
import useSWR from 'swr';

import styles from './styles.module.css';

/* * */

interface ChargesListItemSummaryProps {
	taps: FareEngineTap[]
}

/* * */

export function ChargesListItemSummary({ taps }: ChargesListItemSummaryProps) {
	//

	return (
		<div className={styles.root}>
			<h3 className={styles.title}>Resumo:</h3>
		</div>
	);

	//
}
