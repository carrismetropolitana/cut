/* * */

import type { Store } from '@carrismetropolitana/api-types/facilities';

import { LiveIcon } from '@/components/common/LiveIcon';
import { Skeleton } from '@mantine/core';
import { IconClockHour3, IconUsers, IconUserStar } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

interface Props {
	data: Store
}

/* * */

export default function Component({ data }: Props) {
	//

	//
	// A. Setup variables

	const t = useTranslations('stores.StoresListGroupItemRealtime');

	//
	// B. Transform data

	const expectedWaitTimeInMinutes = Math.round((data.realtime?.expected_wait_time ?? 0) / 60);

	//
	// C. Render components

	if (data.realtime?.current_status === 'open') {
		return (
			<div className={`${styles.container} ${styles.isOpen}`}>
				<div className={styles.label}>
					{t('current_status.open')}
					<LiveIcon color="var(--color-status-ok-text)" />
				</div>
				<div className={styles.value}>
					<IconUsers size={16} />
					{t('people_waiting', { count: data.realtime?.currently_waiting })}
				</div>
				<div className={styles.value}>
					<IconUserStar size={16} />
					{t('desks_open', { count: data.realtime?.active_counters })}
				</div>
				<div className={styles.value}>
					<IconClockHour3 size={16} />
					{t('expected_wait_time', { count: expectedWaitTimeInMinutes })}
				</div>
			</div>
		);
	}

	if (data.realtime?.current_status === 'busy') {
		return (
			<div className={`${styles.container} ${styles.isBusy}`}>
				<div className={styles.label}>
					{t('current_status.busy')}
					<LiveIcon color="var(--color-status-warning-text)" />
				</div>
				<div className={styles.value}>
					<IconUsers size={16} />
					{t('people_waiting', { count: data.realtime?.currently_waiting })}
				</div>
				<div className={styles.value}>
					<IconUserStar size={16} />
					{t('desks_open', { count: data.realtime?.active_counters })}
				</div>
				<div className={styles.value}>
					<IconClockHour3 size={16} />
					{t('expected_wait_time', { count: expectedWaitTimeInMinutes })}
				</div>
			</div>
		);
	}

	if (data.realtime?.current_status === 'closed') {
		return (
			<div className={`${styles.container} ${styles.isClosed}`}>
				<div className={styles.label}>{t('current_status.closed')}</div>
			</div>
		);
	}

	return (
		<div className={`${styles.container} ${styles.isUnknown}`}>
			<Skeleton className={styles.skeleton} />
		</div>
	);

	//
}
