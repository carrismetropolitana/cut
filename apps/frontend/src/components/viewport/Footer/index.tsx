/* * */

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import pjson from 'package.json';

import styles from './styles.module.css';

/* * */

const LINKS = [
	{ _id: 'conditions', href: '/conditions' },
	{ _id: 'privacy', href: '/privacy' },
	{ _id: 'cookies', href: '/cookies' },
	{ _id: 'legal', href: '/legal' },
];

/* * */

export function Footer() {
	//

	//
	// A. Setup variables

	const t = useTranslations('viewport.Footer');

	const currentYear = new Date().getFullYear();

	//
	// B. Render components

	return (
		<>

			<p className={styles.copyright}>
				{t('copyright', { year: currentYear })}
			</p>

			<div className={styles.linksWrapper}>
				{LINKS.map(link => (
					<a key={link._id} className={styles.link} href={link.href} rel="noopener noreferrer" target="_blank">
						{t(`links.${link._id}`)}
					</a>
				))}
			</div>

			<Link className={styles.link} href="https://github.com/carrismetropolitana/cut" target="_blank">
				{pjson.version}
			</Link>

		</>
	);

	//
}
