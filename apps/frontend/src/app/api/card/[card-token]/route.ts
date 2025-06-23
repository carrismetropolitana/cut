/* * */

interface SibsTokenResponse {
	authToken: string
	returnStatus: {
		statusCode: string
		statusDescription: string
		statusMsg: string
	}
}

/* * */

export async function GET(request: Request) {
	//

	//
	// Validate environment variables

	if (!process.env.SIBS_TOKEN_ENDPOINT || !process.env.IBM_CLIENT_ID || !process.env.SIBS_SECRET_INDEX) {
		return Response.json({ error: 'Missing required environment variables' }, { status: 500 });
	}

	//
	// Fetch the SIBS token from the API

	const response = await fetch(process.env.SIBS_TOKEN_ENDPOINT, {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'X-IBM-Client-ID': process.env.IBM_CLIENT_ID,
			'X-SIBS-Secret-Index': process.env.SIBS_SECRET_INDEX,
		},
		method: 'GET',
	});

	const responseData: SibsTokenResponse = await response.json();

	return Response.json({ auth_token: responseData.authToken });

	//
}
