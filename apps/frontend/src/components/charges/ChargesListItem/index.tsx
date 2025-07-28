'use client';

/* * */

import { ChargesListItemDocs } from '@/components/charges/ChargesListItemDocs';
import { ChargesListItemHeader } from '@/components/charges/ChargesListItemHeader';
import { ChargesListItemSummary } from '@/components/charges/ChargesListItemSummary';
import { ChargesListItemTaps } from '@/components/charges/ChargesListItemTaps';
import { type FareEngineCharge } from '@carrismetropolitana/cut-pckg-types';
import { Divider } from '@mantine/core';

import styles from './styles.module.css';

/* * */

interface ChargesListItemProps {
	data: FareEngineCharge
}

/* * */

export function ChargesListItem({ data }: ChargesListItemProps) {
	//

	//
	// C. Render components

	//
	// C. Render components

	return (
		<div className={styles.root}>
			<ChargesListItemHeader data={data} />
			<ChargesListItemTaps taps={data.taps} />
			<Divider />
			<ChargesListItemDocs taps={data.taps} />
			<Divider />
			<ChargesListItemSummary taps={data.taps} />
		</div>
	);

	//
}
