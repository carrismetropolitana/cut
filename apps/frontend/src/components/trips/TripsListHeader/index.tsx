'use client';

/* * */

import styles from './styles.module.css';

/* * */

export function TripsListHeader() {
	return (
		<div className={styles.root}>
			{/* <p>#ID</p> */}
			<div className={styles.column}>Data / Hora</div>
			<div className={styles.column}>Linha</div>
			<div className={styles.column}>Paragem</div>
			<div className={styles.column}>Veículo</div>
			<div className={styles.column}>Viagem</div>
		</div>
	);
}
