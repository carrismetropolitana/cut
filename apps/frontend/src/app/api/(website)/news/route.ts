/* * */

interface NewsData {
	_id: number
	content: string
	cover_image_src: string
	publish_date: string
	title: string
}

/* * */

export async function GET() {
	//

	const allNewsData = await fetch('https://backoffice.carrismetropolitana.pt/?api=news').then(res => res.json());

	if (!allNewsData || !allNewsData.data) return Response.json([], { status: 500, statusText: 'Unable to fetch news data' });

	return Response.json(allNewsData.data as NewsData, { headers: { 'Cache-Control': 'public, max-age=180' } });

	//
}
