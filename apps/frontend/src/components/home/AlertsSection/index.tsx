'use client';

/* * */

import { AlertsCarousel } from '@/components/common/AlertsCarousel';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { useAlertsContext } from '@/contexts/Alerts.context';
import { DateTime } from 'luxon';
import { useTranslations } from 'next-intl';
import { useMemo } from 'react';

/* * */

export function AlertsSection() {
	//

	//
	// A. Setup variables

	const t = useTranslations('home.AlertsSection');
	const alertsContext = useAlertsContext();

	//
	// B. Transform data

	const alertsActiveTodayAndTomorrow = useMemo(() => {
		return alertsContext.data.simplified
			.filter((alert) => {
				const today = DateTime.now().startOf('day').toJSDate();
				const alertDate = new Date(alert.start_date);
				return alertDate >= today;
			})
			.sort((a, b) => {
				return new Date(a.start_date).getTime() - new Date(b.start_date).getTime();
			})
		;
	}, [alertsContext.data.simplified]);

	//
	// C. Render components

	return (
		<Surface>
			<Section heading={t('section_heading')} href="/alerts" withGap>
				<AlertsCarousel alerts={alertsActiveTodayAndTomorrow} />
			</Section>
		</Surface>
	);

	//
}
