/* * */

export interface SurveyPassengersCardSchema {
	_id: string
	content: {
		lottie_src: string
	}
	header: {
		title: string
	}
}

/* * */

export const allPassengersCardsData: SurveyPassengersCardSchema[] = [
	//

	//
	{
		_id: 'passenger_gender',
		content: {
			lottie_src: '/assets/survey-2024/animations/passenger/passenger_gender.json',
		},
		header: {
			title: 'Género',
		},
	},

	{
		_id: 'passenger_age',
		content: {
			lottie_src: '/assets/survey-2024/animations/passenger/passenger_age.json',
		},
		header: {
			title: 'Idade',
		},
	},

	{
		_id: 'passenger_occupation',
		content: {
			lottie_src: '/assets/survey-2024/animations/passenger/passenger_occupation.json',
		},
		header: {
			title: 'Ocupação',
		},
	},

	{
		_id: 'passenger_commute',
		content: {
			lottie_src: '/assets/survey-2024/animations/passenger/passenger_commute.json',
		},
		header: {
			title: 'Regime de Deslocação',
		},
	},
	{
		_id: 'passenger_education',
		content: {
			lottie_src: '/assets/survey-2024/animations/passenger/passenger_education.json',
		},
		header: {
			title: 'Nível de Instrução',
		},
	},

];
