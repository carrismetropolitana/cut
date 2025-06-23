/* * */

import { Footer } from '@/components/viewport/Footer';
import { Header } from '@/components/viewport/Header';

import styles from './styles.module.css';

/* * */

export function Viewport({ children }) {
	//

	//
	// A. Setup variables

	//
	// B. Render components

	return (
		<div className={styles.viewport}>

			<div className={styles.innerWrapper}>
				<Header />
				{children}
			</div>

			<Footer />

		</div>
	);

	//
}
