/* * */

interface NewsData {
	_id: number
	cover_image_src: string
	publish_date: string
	title: string
	url: string
}

/* * */

export async function GET() {
	//

	const allNewsData = await fetch('https://backoffice.carrismetropolitana.pt/wp-json/wp/v2/noticia?per_page=10').then(res => res.json());

	if (!allNewsData) return Response.json([], { status: 500, statusText: 'Unable to fetch news data' });

	const allNewsDataFormatted: NewsData[] = [];

	for (const newsData of allNewsData) {
		//

		const featuredImageMediaData = await fetch(`https://backoffice.carrismetropolitana.pt/wp-json/wp/v2/media/${newsData.featured_media}`).then(res => res.json());

		allNewsDataFormatted.push({
			_id: newsData.id,
			cover_image_src: featuredImageMediaData?.source_url,
			publish_date: newsData.date,
			title: newsData.title.rendered,
			url: `https://carrismetropolitana.pt/app-android/news/${newsData.id}`,
		});

		//
	}

	return Response.json(allNewsDataFormatted, { headers: { 'Cache-Control': 'public, max-age=180' } });

	//
}
