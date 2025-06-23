'use client';

/* * */

import { useLocaleContext } from '@/contexts/Locale.context';
import { enabledLocaleCodes } from '@/i18n/config';
import { SegmentedControl, Skeleton } from '@mantine/core';
import { useTranslations } from 'next-intl';

import styles from './styles.module.css';

/* * */

export function LocaleSwitcher() {
	//

	//
	// A. Setup variables

	const localeContext = useLocaleContext();

	const t = useTranslations('viewport.LocaleSwitcher');

	//
	// B. Transform data

	const availableLocalesFormatted = enabledLocaleCodes.map(localeCode => ({
		label: t(`${localeCode}.label`),
		value: localeCode,
	}));

	//
	// C. Handle actions

	const handleLocaleChange = (value: string) => {
		localeContext.actions.setCurrentLocale(value);
	};

	//
	// D. Render components

	if (!localeContext.data.current_locale) {
		return <Skeleton height={57} width="100%" />;
	}

	return (
		<SegmentedControl
			classNames={{ innerLabel: styles.innerLabel }}
			data={availableLocalesFormatted}
			onChange={handleLocaleChange}
			size="xs"
			value={localeContext.data.current_locale}
		/>
	);

	//
}
