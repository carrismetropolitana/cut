'use client';

/* * */

import { LottiePlayer } from '@/components/common/LottiePlayer';
import { useEnvironmentContext } from '@/contexts/Environment.context';
import { URLS } from '@/settings/urls.settings';
import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

export function AppStartupMessageDefault() {
	//

	//
	// A. Setup variables

	const t = useTranslations('app.AppStartupMessageDefault');
	const environmentContext = useEnvironmentContext();

	//
	// B. Handle actions

	// const handleClose = () => {
	// 	if (environmentContext === 'app-ios') {
	// 		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// 		(window as any).webkit.messageHandlers.closeButtonClicked.postMessage('');
	// 	}
	// 	if (environmentContext === 'app-android') {
	// 		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	// 		(window as any).Android.closeButtonClicked();
	// 	}
	// };

	//
	// C. Render components

	return (
		<div className={styles.container}>
			<div className={styles.introWrapper}>
				<LottiePlayer path="/assets/startup/washing.json" loop play />
				<h1 className={styles.heading}>{t('heading')}</h1>
				<h2 className={styles.subheading}>{t('subheading')}</h2>
				<p className={styles.text}>{t('text')}</p>
			</div>
			<div className={styles.actionsWrapper}>
				{environmentContext.data.value === 'app-ios' && (
					<Button component={Link} href={URLS.app.apple_app_store.prod}>
						{t('actions.update_ios')}
					</Button>
				)}
				{environmentContext.data.value === 'app-android' && (
					<Button component={Link} href={URLS.app.google_play_store.prod}>
						{t('actions.update_android')}
					</Button>
				)}
				{/* <AppButton label={t('actions.close')} onClick={handleClose} variant="muted" /> */}
			</div>
		</div>
	);

	//
}
