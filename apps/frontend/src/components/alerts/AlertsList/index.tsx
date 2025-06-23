/* * */

import { AlertsListGroup } from '@/components/alerts/AlertsListGroup';
import { AlertsListToolbar } from '@/components/alerts/AlertsListToolbar';

/* * */

export function AlertsList() {
	return (
		<>
			<AlertsListToolbar />
			<AlertsListGroup />
		</>
	);
}
