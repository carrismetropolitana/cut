'use client';
/* * */
import { Surface } from '@/components/layout/Surface';
import { Image } from '@mantine/core';

import styles from './styles.module.css';

/* * */

export function SurveyIntro() {
	return (
		<Surface forceOverflow>
			<Image alt="Survey Header Image" className={styles.image} src="/assets/survey-2024/images/survey-2024-logo-small.png" />
		</Surface>
	);
}
