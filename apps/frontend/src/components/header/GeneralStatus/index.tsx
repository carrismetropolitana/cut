'use client';

/* * */

import { type GeneralStatusMessage } from '@carrismetropolitana/website-shared-types';
import { IconAlertOctagonFilled, IconCircleCheckFilled, IconInfoSquareFilled, IconTrafficCone } from '@tabler/icons-react';
import useSWR from 'swr';

import styles from './styles.module.css';

/* * */

export function GeneralStatus() {
	//

	//
	// A. Fetch data

	const { data: generalStatusData } = useSWR<GeneralStatusMessage[]>('/admin/public-api/general-status');

	//
	// B. Render components

	if (!generalStatusData || !generalStatusData.length) {
		return null;
	}

	return generalStatusData.map(item => (
		<div key={item._id} className={styles.container} data-severity={item.severity}>
			{item.severity === 'ok' && <IconCircleCheckFilled className={styles.icon} size={24} />}
			{item.severity === 'info' && <IconInfoSquareFilled className={styles.icon} size={24} />}
			{item.severity === 'warning' && <IconTrafficCone className={styles.icon} size={24} />}
			{item.severity === 'danger' && <IconAlertOctagonFilled className={styles.icon} size={24} />}
			<p className={styles.title}>{item.title}</p>
		</div>
	));

	//
}
