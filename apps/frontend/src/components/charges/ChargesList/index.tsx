'use client';

/* * */

import { ChargesListItem } from '@/components/charges/ChargesListItem';
import { Loader } from '@/components/common/Loader';
import { NoDataLabel } from '@/components/layout/NoDataLabel';
import { useTokenContext } from '@/contexts/Token.context';
import Image from 'next/image';

import styles from './styles.module.css';

import HeaderImage from './header.png';

/* * */

export function ChargesList() {
	//

	//
	// A. Setup variables

	const tokenContext = useTokenContext();

	//
	// B. Render components

	return (
		<div className={styles.root}>

			<Image alt="" height={100} src={HeaderImage} width={300} priority />

			<h4 className={styles.title}>Todas as validações associadas a este cartão</h4>

			<div className={styles.listWrapper}>

				{tokenContext.flags.loading && (
					<div className={styles.root}>
						<Loader />
					</div>
				)}

				{!tokenContext.flags.loading && tokenContext.data.charges.length === 0 && (
					<NoDataLabel text="Nenhuma validação encontrada" />
				)}

				{tokenContext.data.charges.map(item => (
					<ChargesListItem key={item.charge_id} data={item} />
				))}

			</div>

			<p className={styles.tokenInfo}>O identificador do seu cartão é <span className={styles.tokenValue}>{tokenContext.data.token}</span></p>

		</div>
	);

	//
}
