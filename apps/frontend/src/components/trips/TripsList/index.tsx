'use client';

/* * */

import { TripsListHeader } from '@/components/trips/TripsListHeader';
import { TripsListItem } from '@/components/trips/TripsListItem';
import { useTokenContext } from '@/contexts/Token.context';

import styles from './styles.module.css';

/* * */

export function TripsList() {
	//

	//
	// A. Setup variables

	const tokenContext = useTokenContext();

	//
	// C. Render components

	return (
		<div className={styles.container}>

			<TripsListHeader />

			{tokenContext.data.charges.map(item => (
				<TripsListItem key={item.charge_id} data={item} />
			))}

		</div>
	);

	//
}
