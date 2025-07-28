'use client';

/* * */

import { ChargesListItem } from '@/components/charges/ChargesListItem';
import { useTokenContext } from '@/contexts/Token.context';

import styles from './styles.module.css';

/* * */

export function ChargesList() {
	//

	//
	// A. Setup variables

	const tokenContext = useTokenContext();

	//
	// C. Render components

	return (
		<div className={styles.root}>

			<h4>Charges List</h4>

			<div className={styles.listWrapper}>
				{tokenContext.data.charges.map(item => (
					<ChargesListItem key={item.charge_id} data={item} />
				))}
			</div>

		</div>
	);

	//
}
