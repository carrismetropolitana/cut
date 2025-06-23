'use client';

/* * */

import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { allPassengersCardsData } from '@/components/survey/_data/passenger';
import { SurveyLevelPassengerCard } from '@/components/survey/SurveyLevelPassengerCard';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function SurveyLevelPassenger() {
	//

	//
	// A. Setup variables

	const t = useTranslations('survey.SurveyLevelPassenger');

	//
	// B. Render components

	return (
		<div id="passengerChacterization">
			<Surface forceOverflow>
				<Section heading={t('heading')} subheading={t('subheading')} withPadding>
					<div className={styles.contentWrapper}>
						{allPassengersCardsData.map((cardData, index) => (
							<SurveyLevelPassengerCard key={index} cardData={cardData} />
						))}
					</div>
				</Section>
			</Surface>
		</div>
	);

	//
}
