'use client';

/* * */

import { Loader } from '@/components/common/Loader';
import { useLocaleContext } from '@/contexts/Locale.context';
import { useTranslations } from 'next-intl';
import Script from 'next/script';

import './widget-override.css';
import { useEffect, useState } from 'react';

import styles from './styles.module.css';

/* * */

export function SibsWidget() {
	//

	//
	// A. Setup variables

	const t = useTranslations('home.SibsWidget');
	const localeContext = useLocaleContext();

	const [isLoaded, setIsLoaded] = useState(false);

	const token = 'MTMyLjEyMjg1MjcxMDk';

	//
	// B. Handle actions

	useEffect(() => {
		if (!isLoaded) return;
		// Get widget elements by ID
		const cardInputElement = document.getElementById('card-input');
		const expDateElement = document.getElementById('exp-date-input');
		const submitButtonElement = document.querySelector('#card-form button[type="submit"]');
		if (!cardInputElement || !expDateElement || !submitButtonElement) return;
		// Replace the placeholder text
		cardInputElement.setAttribute('placeholder', t('card_input.placeholder'));
		expDateElement.setAttribute('placeholder', t('exp_date_input.placeholder'));
		submitButtonElement.textContent = t('submit_button.text');
	}, [isLoaded, localeContext.data.current_locale]);

	//
	// C. Render components

	return (
		<div className={styles.container}>

			<Script id="sibs-token-script" strategy="beforeInteractive">
				{`var sibsWidgetAuthToken = '${token}';`}
			</Script>

			<Script
				onLoad={() => setIsLoaded(true)}
				src="https://form.sibsgateway.com/assets/js/masstransit_widget.js"
				strategy="afterInteractive"
			/>

			{!isLoaded && <Loader />}

			<div id="sibs-widget-container" />

		</div>
	);

	//
}
