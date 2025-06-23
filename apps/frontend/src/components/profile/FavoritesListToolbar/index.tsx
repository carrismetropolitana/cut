'use client';

/* * */

import { BackButton } from '@/components/common/BackButton';
import { FoundItemsCounter } from '@/components/common/FoundItemsCounter';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { useLinesListContext } from '@/contexts/LinesList.context';
import { useProfileListContext } from '@/contexts/ProfileList.context';
import { useStopsListContext } from '@/contexts/StopsList.context';
import { SegmentedControl } from '@mantine/core';
import { useTranslations } from 'next-intl';

/* * */

export function FavoritesListToolbar() {
	//

	//
	// A. Setup variables

	const t = useTranslations('profile.FavoritesListToolbar');
	const profileListContext = useProfileListContext();
	const linesListContext = useLinesListContext();
	const stopsListContext = useStopsListContext();

	//
	// B. Transform data

	const currentViewOptions = [
		{ label: t('by_current_view.lines'), value: 'lines' },
		{ label: t('by_current_view.stops'), value: 'stops' },
	];

	//
	// D. Render components

	return (
		<Surface>

			<Section withBottomDivider withPadding>
				<BackButton />
			</Section>

			<Section heading={t('heading')} withBottomDivider withGap withPadding>
				<SegmentedControl data={currentViewOptions} onChange={profileListContext.actions.updateFilterByCurrentView} value={profileListContext.filters.by_current_view} w="100%" />
				{profileListContext.filters.by_current_view === 'lines' && (
					<FoundItemsCounter text={t('found_items_counter.lines', { count: linesListContext.data.favorites.length })} />
				)}
				{profileListContext.filters.by_current_view === 'stops' && (
					<FoundItemsCounter text={t('found_items_counter.stops', { count: stopsListContext.data.favorites.length })} />
				)}
			</Section>

		</Surface>
	);

	//
}
