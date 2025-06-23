/* * */

import { Image } from '@mantine/core';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

interface Props {
	coverImageSrc: string
	href: string
	title: string
}

/* * */

export default function Component({ coverImageSrc, href, title }: Props) {
	//

	//
	// C. Render components

	return (
		<Link href={href} target="_blank">
			<Image alt={title} className={styles.coverImage} fallbackSrc="/assets/common/placeholder.png" src={coverImageSrc} />
		</Link>
	);

	//
}
