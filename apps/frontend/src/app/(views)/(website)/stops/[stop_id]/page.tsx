/* * */

import { StopsDetail } from '@/components/stops/StopsDetail';
import { StopsDetailContextProvider } from '@/contexts/StopsDetail.context';
import { type Line, type Stop } from '@carrismetropolitana/api-types/network';
import { getPublicVariable } from '@carrismetropolitana/website-shared-settings';
import { type Metadata } from 'next';

/* * */

export async function generateMetadata({ params }): Promise<Metadata> {
	//

	//
	// A. Setup variables

	const { stop_id } = await params;

	//
	// B. Fetch data

	const allStopsResponse = await fetch(`${getPublicVariable('api_url')}/stops`);
	const allStopsData: Stop[] = await allStopsResponse.json();

	const allLinesResponse = await fetch(`${getPublicVariable('api_url')}/lines`);
	const allLinesData: Line[] = await allLinesResponse.json();

	//
	// C. Transform data

	const stopData = allStopsData.find(item => item.id === stop_id);
	const linesAtThisStopString = allLinesData
		.filter(item => stopData?.line_ids.includes(item.id))
		.sort((a, b) => a.id.localeCompare(b.id))
		.map(item => item.short_name)
		.join(', ');

	//
	// D. Render components

	return {
		description: `Horários planeados e em tempo real na paragem #${stopData?.id}. Nesta paragem passam as linhas ${linesAtThisStopString}.`,
		title: stopData?.long_name,
	};

	//
}

/* * */

export default async function Page({ params }) {
	const { stop_id } = await params;
	return (
		<StopsDetailContextProvider stopId={stop_id}>
			<StopsDetail />
		</StopsDetailContextProvider>
	);
}
