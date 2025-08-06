'use client';

/* * */

import { Grid } from '@/components/layout/Grid';
import { NoDataLabel } from '@/components/layout/NoDataLabel';
import { useTokenContext } from '@/contexts/Token.context';
import { type FareEngineCharge } from '@carrismetropolitana/cut-pckg-types';
import { Button, Table, TableData, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMemo, useState } from 'react';

import styles from './styles.module.css';

/* * */

interface ChargesListItemDocsProps {
	chargeId: FareEngineCharge['charge_id']
	documents: FareEngineCharge['documents']
}

/* * */

export function ChargesListItemDocs({ chargeId, documents }: ChargesListItemDocsProps) {
	//

	//
	// A. Setup variables

	const tokenContext = useTokenContext();

	const [isVisible, setIsVisible] = useState(false);

	//
	// A. Transform data

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

	//
	// B. Handle actions

	const handleSubmit = async () => {
		await fetch(`/api/fare-engine/${tokenContext.data.token}/${chargeId}/update`, {
			body: JSON.stringify({ status: 'updated' }),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
	};

	//
	// C. Render components

	const form = useForm({
		initialValues: {
			billing_address: '',
			email: '',
			name: '',
			tax_id: '',
		},
	});

	//
	// B. Render components

	if (!documents || documents.length === 0) {
		return (
			<div className={styles.root}>
				<NoDataLabel text="Nenhuma fatura encontrada." />
			</div>
		);
	}

	return (
		<div className={styles.root}>

			<h4 className={styles.title}>Faturas e Notas de Credito: </h4>

			<Table data={tableData} highlightOnHover withTableBorder />

			<p className={styles.updateLink} onClick={() => setIsVisible(!isVisible)}>Atualizar dados de faturação</p>

			{isVisible && (
				<form className={styles.form} onSubmit={form.onSubmit(handleSubmit)}>
					<Grid columns="ab" withGap>
						<TextInput label="Nome" {...form.getInputProps('name')} />
						<TextInput label="NIF" {...form.getInputProps('tax_id')} />
						<TextInput label="Email" {...form.getInputProps('email')} />
						<TextInput label="Endereço de cobrança" {...form.getInputProps('billing_address')} />
					</Grid>
					<Button type="submit">Atualizar</Button>
				</form>
			)}

		</div>
	);

	//
}
