'use client';

/* * */

import { type FareEngineCharge } from '@carrismetropolitana/cut-pckg-types';
import { IconCircleCheckFilled, IconSquareCheckFilled, IconX } from '@tabler/icons-react';
import { useMemo } from 'react';

import styles from './styles.module.css';

/* * */

interface ChargeAmountStatusProps {
	amount: FareEngineCharge['amount']
	status: FareEngineCharge['status']
}

/* * */

export function ChargeAmountStatus({ amount, status }: ChargeAmountStatusProps) {
	//

	//
	// A. Transform data

	const parsedAmount = useMemo(() => {
		const value = (amount / 100).toFixed(2);
		return `€ ${value}`;
	}, [amount]);

	//
	// B. Render components

	return (
		<div className={styles.root} data-status={status}>
			{status === 'cleared' && <IconCircleCheckFilled className={styles.icon} size={30} />}
			{status === 'cleared_forced' && <IconSquareCheckFilled className={styles.icon} size={30} />}
			{status === 'not_cleared' && <IconX className={styles.icon} size={30} />}
			<div className={styles.amount} data-status="paid">{parsedAmount}</div>
		</div>
	);

	//
}
