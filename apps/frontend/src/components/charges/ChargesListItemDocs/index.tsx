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

interface ChargesListItemDocsProps {
	taps: FareEngineTap[]
}

/* * */

export function ChargesListItemDocs({ taps }: ChargesListItemDocsProps) {
	//

	return (
		<div className={styles.root}>
			<h3 className={styles.title}>Documentos:</h3>
		</div>
	);

	//
}
