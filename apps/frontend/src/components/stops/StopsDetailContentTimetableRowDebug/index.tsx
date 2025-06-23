/* * */

import { CopyBadge } from '@/components/common/CopyBadge';
import { type Arrival } from '@/types/stops.types';

import styles from './styles.module.css';

/* * */

interface Props {
	arrivalData: Arrival
}

/* * */

export function StopsDetailContentTimetableRowDebug({ arrivalData }: Props) {
	return (
		<div className={styles.container}>
			<CopyBadge label={`Trip ID: ${arrivalData.trip_id || 'NULL'}`} value={arrivalData.trip_id || 'NULL'} />
			<CopyBadge label={`Stop Sequence: ${typeof arrivalData.stop_sequence === 'number' ? arrivalData.stop_sequence : 'NULL'}`} value={arrivalData.stop_sequence || 'NULL'} />
			<CopyBadge label={`Vehicle ID: ${arrivalData.vehicle_id || 'NULL'}`} value={arrivalData.vehicle_id || 'NULL'} />
			<CopyBadge label={`Planeado: ${arrivalData.scheduled_arrival || 'NULL'} (${arrivalData.scheduled_arrival_unix || 'NULL'})`} value={arrivalData.scheduled_arrival_unix || 'NULL'} />
			<CopyBadge label={`Estimado: ${arrivalData.estimated_arrival || 'NULL'} (${arrivalData.estimated_arrival_unix || 'NULL'})`} value={arrivalData.estimated_arrival_unix || 'NULL'} />
			<CopyBadge label={`Observado: ${arrivalData.observed_arrival || 'NULL'} (${arrivalData.observed_arrival_unix || 'NULL'})`} value={arrivalData.observed_arrival_unix || 'NULL'} />
		</div>
	);
}
