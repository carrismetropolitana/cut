/* * */

import { type Line, type Stop } from '@carrismetropolitana/api-types/network';
import { getPublicVariable } from '@carrismetropolitana/website-shared-settings';

/* * */

export default async function Sitemap() {
	//

	//
	// A. Setup variables

	const apiUrl = new URL(getPublicVariable('api_url'));
	const baseUrl = new URL(getPublicVariable('server_url_frontend'));

	//
	// B. Fetch data

	const allStopsResponse = await fetch(`${apiUrl}/stops`);
	const allStopsData = await allStopsResponse.json();

	const allLinesResponse = await fetch(`${apiUrl}/lines`);
	const allLinesData = await allLinesResponse.json();

	//
	// C. Transform data

	const allStopsAsPages = allStopsData?.map((stopData: Stop) => {
		return {
			changeFrequency: 'daily',
			lastModified: new Date(),
			priority: 1,
			url: `${baseUrl}/stops/${stopData.id}`,
		};
	}) ?? [];

	const allLinesAsPages = allLinesData?.map((lineData: Line) => {
		return {
			changeFrequency: 'daily',
			lastModified: new Date(),
			priority: 1,
			url: `${baseUrl}/lines/${lineData.id}`,
		};
	}) ?? [];

	//
	// D. Return sitemap

	return [

		{
			changeFrequency: 'always',
			lastModified: new Date(),
			priority: 1,
			url: `${baseUrl}/stores`,
		},

		{
			changeFrequency: 'daily',
			lastModified: new Date(),
			priority: 1,
			url: `${baseUrl}/stops`,
		},

		...allStopsAsPages,

		{
			changeFrequency: 'daily',
			lastModified: new Date(),
			priority: 1,
			url: `${baseUrl}/lines`,
		},

		...allLinesAsPages,

	];

	//
}
