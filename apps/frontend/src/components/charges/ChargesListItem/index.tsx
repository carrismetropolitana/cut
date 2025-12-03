'use client';

/* * */

import { ChargesListItemDocs } from '@/components/charges/ChargesListItemDocs';
import { ChargesListItemHeader } from '@/components/charges/ChargesListItemHeader';
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
	return (
		<div className={styles.root}>
			<ChargesListItemHeader data={data} />
			<ChargesListItemTaps taps={data.taps} />
			<Divider />
			<ChargesListItemDocs chargeId={data.charge_id} documents={data.documents ?? []} />
		</div>
	);
}
