'use client';

/* * */

import { type FareEngineCharge, type FareEngineChargesResponse, type FareEngineTap, type FareEngineTapsResponse } from '@carrismetropolitana/cut-pckg-types';
import { type HttpResponse } from '@tmlmobilidade/utils';
import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import useSWR from 'swr';

/* * */

interface TokenContextState {
	data: {
		charges: FareEngineCharge[]
		token: string
		ungrouped_taps: FareEngineTap[]
	}
	flags: {
		error: Error | null
		loading: boolean
	}
}

/* * */

const TokenContext = createContext<TokenContextState | undefined>(undefined);

export function useTokenContext() {
	const context = useContext(TokenContext);
	if (!context) {
		throw new Error('useTokenContext must be used within a TokenContextProvider');
	}
	return context;
}

/* * */

export const TokenContextProvider = ({ children, token }: PropsWithChildren<{ token: string }>) => {
	//

	//
	// B. Fetch data

	const { data: allChargesResponse, error: allChargesError, isLoading: allChargesLoading } = useSWR<HttpResponse<FareEngineChargesResponse>>(token && `/api/fare-engine/${token}/charges`);
	const { data: allTapsResponse, error: allTapsError, isLoading: allTapsLoading } = useSWR<HttpResponse<FareEngineTapsResponse>>(token && `/api/fare-engine/${token}/taps`);

	//
	// C. Transform data

	const allChargesData = useMemo(() => {
		// Exit early if no response or data
		if (!allChargesResponse || !allChargesResponse.data?.charges) return [];
		// Extract the charges from the response
		// and sort them by record number
		return allChargesResponse.data.charges
			.sort((a, b) => a.record_no - b.record_no)
			.map((charge) => {
				// Sort the taps within each charge by record number
				charge.taps.sort((a, b) => a.record_no - b.record_no);
				// Remove duplicate taps for the same journey
				const uniqueTaps = new Map(charge.taps.map(tap => [tap.ticketing.journey, tap]));
				charge.taps = Array.from(uniqueTaps.values());
				return charge;
			});
	}, [allChargesResponse]);

	const allUngroupedTapsData = useMemo(() => {
		// Exit early if no response or data
		if (!allTapsResponse || !allTapsResponse.data?.taps) return [];
		// Extract the taps from the response that are not
		// present in any charge and sort them by record number.
		const ungroupedTaps = allTapsResponse.data.taps
			.sort((a, b) => a.record_no - b.record_no)
			.filter(tap => !allChargesData.some(charge => charge.taps.some(chargeTap => chargeTap.tap_id === tap.tap_id)));
		// Remove duplicate taps for the same journey
		const uniqueUngroupedTaps = new Map(ungroupedTaps.map(tap => [tap.ticketing.journey, tap]));
		return Array.from(uniqueUngroupedTaps.values());
	}, [allTapsResponse, allChargesData]);

	//
	// D. Define context value

	const contextValue: TokenContextState = useMemo(() => ({
		data: {
			charges: allChargesData,
			token: token,
			ungrouped_taps: allUngroupedTapsData,
		},
		flags: {
			error: allChargesError || allTapsError || null,
			loading: allChargesLoading || allTapsLoading,
		},
	}), [
		token,
		allChargesData,
		allUngroupedTapsData,
		allChargesError,
		allChargesLoading,
		allTapsError,
		allTapsLoading,
	]);

	//
	// E. Render components

	return (
		<TokenContext.Provider value={contextValue}>
			{children}
		</TokenContext.Provider>
	);

	//
};
