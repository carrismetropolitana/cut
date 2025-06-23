/* * */

import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

import MainImage from './main-image.png';

/* * */

export function HomePage() {
	//

	//
	// A. Setup variables

	const t = useTranslations('home.HomePage');

	//
	// B. Render components

	return (
		<div className={styles.container}>
			<Image alt="" className={styles.image} height={200} src={MainImage} width={200} priority />
			<h1 className={styles.title}>
				<span>{t('title')}</span>
				<span className={styles.subtitle}>{t('subtitle')}</span>
			</h1>
			<Button component={Link} href="/about">{t('start')}</Button>
		</div>
	);

	//
}
