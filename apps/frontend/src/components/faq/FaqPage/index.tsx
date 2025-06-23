/* * */

import allFaqData from '@/components/faq/_data/faq.json';
import { FaqList } from '@/components/faq/FaqList';
import { Section } from '@/components/layout/Section';
import { Surface } from '@/components/layout/Surface';
import { Button } from '@mantine/core';
import { IconPhoneCheck } from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

/* * */

export function FaqPage() {
	//

	//
	// A. Setup variables

	const t = useTranslations('faq.Page');

	//
	// B. Render components

	return (
		<>
			<Surface>
				<Section heading={t('heading')} subheading={t('subheading')} withPadding>
					<Button leftSection={<IconPhoneCheck size={18} />}>{t('contacts')}</Button>
				</Section>
			</Surface>
			<FaqList data={allFaqData} />
		</>
	);

	//
}
