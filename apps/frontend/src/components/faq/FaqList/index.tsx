/* * */

import { GroupedListItem } from '@/components/layout/GroupedListItem';
import { Surface } from '@/components/layout/Surface';
import { type FaqGroupByTopic } from '@/types/faq.types';
import { Accordion, AccordionControl, AccordionItem, AccordionPanel } from '@mantine/core';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

interface Props {
	data: FaqGroupByTopic[]
}

/* * */

export function FaqList({ data }: Props) {
	//

	//
	// A, Setup variables

	const t = useTranslations('faq.FaqList');

	//
	// B. Render components

	return (
		<Surface>
			{data.map(faqGroup => (
				<GroupedListItem key={faqGroup._id} label={t('label')} title={faqGroup.title}>
					<Accordion>
						{faqGroup.items.map(topicItem => (
							<AccordionItem key={topicItem._id} value={topicItem.title}>
								<AccordionControl>{topicItem.title}</AccordionControl>
								<AccordionPanel>
									<div className={styles.innerWrapper} dangerouslySetInnerHTML={{ __html: topicItem.body }} />
								</AccordionPanel>
							</AccordionItem>
						))}
					</Accordion>
				</GroupedListItem>
			))}
		</Surface>
	);

	//
}
