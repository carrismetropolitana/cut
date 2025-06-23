/* * */

import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { SegmentedControl } from '@mantine/core';
import { useTranslations } from 'next-intl';

/* * */

interface Props {
	onSelectTab: (value: string) => void
	selectedTab: string
}

/* * */

export function Review2024TabSelector({ onSelectTab, selectedTab }: Props) {
	//

	//
	// A. Setup variables

	const t = useTranslations('review-2024.Review2024TabSelector');

	//
	// B. Render components

	return (
		<Surface>
			<Section heading={t('heading')} withPadding>
				<SegmentedControl
					onChange={onSelectTab}
					value={selectedTab}
					w="100%"
					data={[
						{ label: t('tabs.overview'), value: 'overview' },
						{ label: t('tabs.quiz'), value: 'quiz' },
					]}
				/>
			</Section>
		</Surface>
	);

	//
}
