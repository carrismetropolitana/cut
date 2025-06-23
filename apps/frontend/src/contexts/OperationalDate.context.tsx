'use client';

/* * */

import { type OperationalDate } from '@tmlmobilidade/types';
import { Dates } from '@tmlmobilidade/utils';
import { useQueryState } from 'nuqs';
import { createContext, useContext, useEffect, useState } from 'react';

/* * */

interface OperationalDateContextState {
	actions: {
		updateSelectedDate: (value: OperationalDate) => void
		updateSelectedDateFromFormat: (value: string, format?: string) => void
		updateSelectedDateFromJsDate: (value: Date) => void
		updateSelectedDateToLessOneDay: () => void
		updateSelectedDateToPlusOneDay: () => void
		updateSelectedDateToToday: () => void
		updateSelectedDateToTomorrow: () => void
	}
	data: {
		selected_date: Dates | null
		today: Dates
		tomorrow: Dates
	}
	flags: {
		is_today_selected: boolean
		is_tomorrow_selected: boolean
	}
}

/* * */

const OperationalDateContext = createContext<OperationalDateContextState | undefined>(undefined);

export function useOperationalDateContext() {
	const context = useContext(OperationalDateContext);
	if (!context) {
		throw new Error('useOperationalDateContext must be used within a OperationalDateContextProvider');
	}
	return context;
}

/* * */

export const OperationalDateContextProvider = ({ children }) => {
	//

	//
	// A. Setup variables

	const [selectedDate, setSelectedDate] = useState<Dates | null>(null);
	const [selectedDateQuery, setSelectedDateQuery] = useQueryState('date');

	//
	// B. Transform data

	const todayDate = Dates
		.now('Europe/Lisbon');

	const tomorrowDate = Dates
		.now('Europe/Lisbon')
		.plus({ days: 1 });

	useEffect(() => {
		if (!selectedDate) return;
		const isToday = selectedDate.operational_date === todayDate.operational_date;
		if (isToday) setSelectedDateQuery(null);
		else setSelectedDateQuery(selectedDate.operational_date);
	}, [selectedDate, todayDate]);

	useEffect(() => {
		// If no date is selected and the query is empty,
		// set the selected date to today and the query to null
		if (!selectedDate && !selectedDateQuery) {
			setSelectedDate(todayDate);
			return;
		}
		// If no date is selected and the query has a value,
		// set the selected date to the query value
		if (!selectedDate && selectedDateQuery) {
			const selectedDateValue = Dates
				.fromOperationalDate(selectedDateQuery, 'Europe/Lisbon')
				.set({ hour: 15 });
			setSelectedDate(selectedDateValue);
			return;
		}
	}, [todayDate, selectedDateQuery, selectedDate]);

	//
	// C. Handle actions

	const updateSelectedDate = (value: string) => {
		const dateValue = Dates
			.fromOperationalDate(value, 'Europe/Lisbon')
			.set({ hour: 15 });
		setSelectedDate(dateValue);
	};

	const updateSelectedDateFromFormat = (value: string, format = 'yyyy-MM-dd') => {
		const dateValue = Dates
			.fromFormat(value, format, 'Europe/Lisbon')
			.set({ hour: 15 });
		setSelectedDate(dateValue);
	};

	const updateSelectedDateFromJsDate = (value: Date) => {
		const dateValue = Dates
			.fromJSDate(value)
			.set({ hour: 15 });
		setSelectedDate(dateValue);
	};

	const updateSelectedDateToToday = () => {
		setSelectedDate(todayDate);
	};

	const updateSelectedDateToTomorrow = () => {
		setSelectedDate(tomorrowDate);
	};

	const updateSelectedDateToPlusOneDay = () => {
		if (!selectedDate) return;
		const dateValue = selectedDate?.plus({ days: 1 });
		setSelectedDate(dateValue);
	};

	const updateSelectedDateToLessOneDay = () => {
		if (!selectedDate) return;
		const dateValue = selectedDate?.minus({ days: 1 });
		setSelectedDate(dateValue);
	};

	//
	// D. Define context value

	const contextValue: OperationalDateContextState = {
		actions: {
			updateSelectedDate,
			updateSelectedDateFromFormat,
			updateSelectedDateFromJsDate,
			updateSelectedDateToLessOneDay,
			updateSelectedDateToPlusOneDay,
			updateSelectedDateToToday,
			updateSelectedDateToTomorrow,
		},
		data: {
			selected_date: selectedDate,
			today: todayDate,
			tomorrow: tomorrowDate,
		},
		flags: {
			is_today_selected: selectedDate?.operational_date === todayDate.operational_date,
			is_tomorrow_selected: selectedDate?.operational_date === tomorrowDate.operational_date,
		},
	};

	//
	// E. Render components

	return (
		<OperationalDateContext.Provider value={contextValue}>
			{children}
		</OperationalDateContext.Provider>
	);

	//
};
