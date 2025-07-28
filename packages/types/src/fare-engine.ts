/* * */

export interface FareEngineTap {
	card_token: string
	// gps: null
	record_no: number
	state: 'APPROVED' | 'NOT_APPROVED'
	tap_id: string
	ticketing: {
		journey: string
		line: string
		network: string
		operator: string
		passengers: number
		pattern: string
		stop: string
		validator: string
		vehicle: string
		zone: string
	}
	timestamp: string
}

/* * */

export interface FareEngineResponseInfo {
	page_no: number
	page_size: number
	returned_count: number
	returned_from: number
	total_count: number
}

export interface FareEngineTapsResponse {
	response_info: FareEngineResponseInfo
	taps: FareEngineTap[]
}
