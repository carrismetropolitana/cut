'use client';

/* * */

import { FareEngineTap, type FareEngineTapsResponse } from '@carrismetropolitana/cut-pckg-types';
import { type HttpResponse } from '@tmlmobilidade/utils';
import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import useSWR from 'swr';

/* * */

interface TokenContextState {
	data: {
		token: string
		trips: FareEngineTap[]
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

	const { data: allTapsResponse, error: allTapsError, isLoading: allTapsLoading } = useSWR<HttpResponse<FareEngineTapsResponse>>(token && `/api/fare-engine/${token}/taps`);

	//
	// C. Transform data

	const allTapsData = useMemo(() => {
		// Exit early if no response or data
		if (!allTapsResponse || !allTapsResponse.data?.taps) return [];
		// Extract the taps from the response
		return allTapsResponse.data.taps;
	}, [allTapsResponse]);

	//
	// D. Define context value

	const contextValue: TokenContextState = useMemo(() => ({
		data: {
			token: token,
			trips: allTapsData,
		},
		flags: {
			error: allTapsError,
			loading: allTapsLoading,
		},
	}), [allTapsError, allTapsLoading]);

	//
	// E. Render components

	return (
		<TokenContext.Provider value={contextValue}>
			{children}
		</TokenContext.Provider>
	);

	//
};
