'use client';

/* * */

import { Loader } from '@/components/common/Loader';
import { useLocaleContext } from '@/contexts/Locale.context';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

import './widget-override.css';
import { useEffect, useState } from 'react';

/* * */

export function SibsWidget() {
	//

	//
	// A. Setup variables

	const t = useTranslations('home.SibsWidget');
	const localeContext = useLocaleContext();
	const router = useRouter();

	const [isLoaded, setIsLoaded] = useState(false);
	const [authToken, setAuthToken] = useState<null | string>(null);

	//
	// B. Fetch data

	useEffect(() => {
		(async () => {
			// Fetch the SIBS token from the API
			const response = await fetch('/api/sibs/token');
			if (!response.ok) throw new Error('Failed to fetch SIBS token');
			const data = await response.json();
			setAuthToken(data.auth_token);
		})();
	}, []);

	//
	// C. Handle actions

	useEffect(() => {
		if (!isLoaded || !authToken) return;
		// Get widget elements by ID
		const cardInputElement = document.getElementById('card-input');
		const expDateElement = document.getElementById('exp-date-input');
		const submitButtonElement = document.querySelector('#card-form button[type="submit"]');
		if (!cardInputElement || !expDateElement || !submitButtonElement) return;
		// Replace the placeholder texts
		cardInputElement.setAttribute('placeholder', t('card_input.placeholder'));
		expDateElement.setAttribute('placeholder', t('exp_date_input.placeholder'));
		submitButtonElement.textContent = t('submit_button.text');
	}, [isLoaded, authToken, localeContext.data.current_locale]);

	useEffect(() => {
		const handler = (e: Event) => {
			// Save the token received from the SIBS widget
			// to the Token context so that it can be used later
			const customEvent = e as CustomEvent<{ token: string }>;
			if (!customEvent.detail || !customEvent.detail.token) return;
			router.push(`/charges/${customEvent.detail.token}`);
		};
		// Listen for the custom event from the SIBS widget
		document.addEventListener('sibsTokenInfo', handler);
		// Cleanup event listener on unmount
		return () => document.removeEventListener('sibsTokenInfo', handler);
	}, []);

	//
	// D. Render components

	if (!authToken) {
		return <Loader />;
	}

	return (
		<>

			<Script id="inject-sibs-auth-token-value">
				{`var sibsWidgetAuthToken = '${authToken}';`}
			</Script>

			<Script
				onLoad={() => setIsLoaded(true)}
				src="https://form.sibsgateway.com/assets/js/masstransit_widget.js"
			/>

			{!isLoaded && <Loader />}

			<div id="sibs-widget-container" />

		</>
	);

	//
}
