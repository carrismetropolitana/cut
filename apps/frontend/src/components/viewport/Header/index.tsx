/* * */

import { LocaleSwitcher } from '@/components/viewport/LocaleSwitcher';
import { Logo } from '@/components/viewport/Logo';

import styles from './styles.module.css';

/* * */

export function Header() {
	//

	//
	// C. Render components

	return (
		<header className={styles.container}>
			<Logo />
			<LocaleSwitcher />
		</header>
	);

	//
}
