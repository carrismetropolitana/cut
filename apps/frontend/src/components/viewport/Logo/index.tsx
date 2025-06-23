'use client';

/* * */

import { ThemeSwitch } from '@/components/responsive/ThemeSwitch';
import { Image } from '@mantine/core';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

export function Logo() {
	return (
		<Link className={styles.container} href="/">
			<ThemeSwitch
				dark={<Image alt="Carris Metropolitana" src="/assets/header/static/cmet-header-dark.svg" style={{ height: 70, width: 150 }} />}
				light={<Image alt="Carris Metropolitana" src="/assets/header/static/cmet-header-light.svg" style={{ height: 70, width: 150 }} />}
			/>
		</Link>
	);
}
