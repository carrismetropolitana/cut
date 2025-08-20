/* * */

import { type FareEngineDocument, type FareEngineDocumentParsed } from '@carrismetropolitana/cut-pckg-types';

/**
 * Parses a Fare Engine document into a more usable format.
 * @param doc The Fare Engine document to parse.
 * @returns The parsed document or null if the document is invalid.
 */
export function parseFareEngineDocument(doc: FareEngineDocument): FareEngineDocumentParsed | null {
	//

	//
	// Split the document ref value intro individual components

	const refComponents = doc.ref.split('/');

	if (refComponents.length < 2) return null;

	//
	// For invoices, the ref is 'invoices/123'.
	// However, for credit notes the ref is 'invoices/123/credit-notes/456'.
	// This means we should always get the last two components of the ref to
	// get the actual document type and ID.

	const docType = refComponents[refComponents.length - 2];
	const docId = refComponents[refComponents.length - 1];

	if (docType !== 'invoices' && docType !== 'creditNotes') return null;

	//
	// Parse the amount from cents to euros
	// and format it for display

	const amountDisplay = new Intl
		.NumberFormat('pt-PT', { currency: 'EUR', style: 'currency' })
		.format(doc.amount / 100);

	//
	// Return the structured data

	return {
		...doc,
		amount_display: amountDisplay,
		doc_id: docId,
		doc_type: docType,
	};

	//
}
