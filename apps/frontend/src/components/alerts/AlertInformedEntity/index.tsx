'use client';

/* * */

import type { Line, Stop } from '@carrismetropolitana/api-types/network';

import { LineBadge } from '@/components/lines/LineBadge';
import { useLinesContext } from '@/contexts/Lines.context';
import { useStopsContext } from '@/contexts/Stops.context';
import { Routes } from '@/utils/routes';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

/* * */

interface Props {
	lineId?: string
	routeId?: string
	stopId?: string
}

/* * */

export default function Component({ lineId, routeId, stopId }: Props) {
	//

	//
	// A. Setup variables

	const router = useRouter();
	const linesContext = useLinesContext();
	const stopsContext = useStopsContext();

	//
	// B. Transform data

	const lineData = useMemo<Line | undefined>(() => {
		return linesContext.data.lines?.find(line => line.id === lineId || line.route_ids.some(itemId => itemId === routeId));
	}, [linesContext.data.lines]);

	const stopData = useMemo<Stop | undefined>(() => {
		return stopsContext.data.stops?.find(stop => stop.id === stopId);
	}, [stopsContext.data.stops]);

	//
	// C. Handle actions

	const handleLineBadgeClick = () => {
		router.push(`${Routes.LINES.route}/${lineData?.id}`);
	};

	//
	// D. Render components

	if (lineData) {
		return (
			<LineBadge lineData={lineData} onClick={handleLineBadgeClick} />
		);
	}

	if (stopId && stopData) {
		return (
			<p>{stopData.long_name}</p>
		);
	}

	//
}
