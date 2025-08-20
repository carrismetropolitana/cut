'use client';

/* * */

import { Grid } from '@/components/layout/Grid';
import { NoDataLabel } from '@/components/layout/NoDataLabel';
import { useTokenContext } from '@/contexts/Token.context';
import { parseFareEngineDocument } from '@/utils/parse-fare-engine-document';
import { type FareEngineCharge } from '@carrismetropolitana/cut-pckg-types';
import { Button, Table, TableData, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useTranslations } from 'next-intl';
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

	const t = useTranslations('charges.ChargesListItemDocs');

	const tokenContext = useTokenContext();

	const [isVisible, setIsVisible] = useState(false);

	//
	// B. Transform data

	const tableData: TableData = useMemo(() => {
		// Setup an empty table with headers
		const table: TableData = {
			body: [],
			head: [t('table.header.doc_id'), t('table.header.doc_type'), t('table.header.amount'), t('table.header.file')],
		};
		// If there are no documents, return the empty table
		if (!documents) return table;
		// Loop through the documents and fill the table with data

		table.body = documents
			.map(doc => parseFareEngineDocument(doc))
			.filter(doc => !!doc)
			.map((doc) => {
				return [
					doc.doc_id,
					t(`table.rows.doc_type.${doc.doc_type}`),
					doc.amount_display,
					<a href={`/api/ms-invoice/${doc.doc_id}/pdf`} target="_blank">Abrir PDF</a>,
				];
			});
		return table;
	}, [documents]);

	//
	// C. Setup form

	const form = useForm({
		initialValues: {
			billing_address: '',
			email: '',
			name: '',
			tax_id: '',
		},
	});

	//
	// D. Handle actions

	const handleSubmit = async () => {
		await fetch(`/api/fare-engine/${tokenContext.data.token}/${chargeId}/update`, {
			body: JSON.stringify(form.getValues()),
			headers: {
				'Content-Type': 'application/json',
			},
			method: 'POST',
		});
	};

	//
	// E. Render components

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
