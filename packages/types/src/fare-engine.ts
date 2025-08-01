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

export interface FareEngineDocument {
	amount: number
	anonymous: boolean
	ref: string
}

/* * */

export interface FareEngineCharge {
	amount: number
	card_token: string
	charge_id: string
	clearing_timestamp: string
	currency: 'EUR'
	documents: FareEngineDocument[]
	record_no: number
	// refunds: null
	request_timestamp: string
	status: 'cleared' | 'cleared_forced' | 'not_cleared'
	taps: FareEngineTap[]
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

export interface FareEngineChargesResponse {
	charges: FareEngineCharge[]
	response_info: FareEngineResponseInfo
}
