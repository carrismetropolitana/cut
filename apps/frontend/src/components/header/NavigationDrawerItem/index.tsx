/* * */

import { type NavigationLink } from '@/types/navigation.types';
import { IconArrowNarrowRight, IconExternalLink } from '@tabler/icons-react';
import Link from 'next/link';

import styles from './styles.module.css';

/* * */

interface Props {
	href: NavigationLink['href']
	icon?: NavigationLink['icon']
	label: string
	onClick?: () => void
	target?: NavigationLink['target']
}

/* * */

export function NavigationDrawerItem({ href, icon, label, onClick, target, ...props }: Props) {
	return (
		<Link href={href} target={target} {...props} className={styles.container} onClick={onClick}>
			<span className={styles.icon}>
				{icon}
			</span>
			<span className={styles.label}>
				{label}
			</span>
			{target === '_blank' ? <IconExternalLink className={styles.arrowIndicator} size={16} /> : <IconArrowNarrowRight className={styles.arrowIndicator} size={20} />}
		</Link>
	);
}
