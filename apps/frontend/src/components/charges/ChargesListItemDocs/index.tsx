'use client';

/* * */

import { type FareEngineCharge } from '@carrismetropolitana/cut-pckg-types';
import { Table, TableData } from '@mantine/core';
import { useMemo } from 'react';

import styles from './styles.module.css';

/* * */

interface ChargesListItemDocsProps {
	documents: FareEngineCharge['documents']
}

/* * */

export function ChargesListItemDocs({ documents }: ChargesListItemDocsProps) {
	//

	const tableData: TableData = useMemo(() => {
		// Setup an empty table with headers
		const table: TableData = {
			body: [],
			head: ['Nº Documento', 'Tipo', 'Valor', 'Ficheiro'],
		};
		// If there are no documents, return the empty table
		if (!documents) return table;
		// Loop through the documents and fill the table with data

		table.body = documents.map((doc) => {
			const docType = doc.ref ? doc.ref.split('/')[0] : 'Desconhecido';
			const docId = doc.ref ? doc.ref.split('/').pop() : 'Desconhecido';
			const parsedAmount = doc.amount ? `€ ${(doc.amount / 100).toFixed(2)}` : 'N/A';
			return [
				docId,
				docType,
				parsedAmount,
				'descarregar',
			];
		});
		return table;
	}, [documents]);

	return (
		<div className={styles.root}>
			<h3 className={styles.title}>Documentos: {documents.length}</h3>
			<Table data={tableData} highlightOnHover withTableBorder />
		</div>
	);
}
