/* * */

export interface Review2024QuizAnswerSchema {
	_id: string
	is_correct: boolean
	label: string
}

export interface Review2024QuizSchema {
	_id: string
	_points: number
	answers: Review2024QuizAnswerSchema[]
	colors: {
		border?: string
		primary: string
		text: string
	}
	question: {
		description?: string
		lottie_src?: string
		title: string
	}
}

/* * */

export const allQuizData: Review2024QuizSchema[] = [

	{
		_id: '01',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: true, label: '174 Milhões' },
			{ _id: 'b', is_correct: false, label: '17,4 Milhões' },
		],
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		question: {
			description: 'Este ano fomos gigantes! Transportámos o total de 174 015 385 passageiros.',
			lottie_src: '/assets/review-2024/animations/passageiros/kms_total.json',
			title: 'Quantos passageiros transportámos em 2024?',
		},
	},

	{
		_id: '02',
		_points: 15,
		answers: [
			{ _id: 'a', is_correct: false, label: '40 Milhões' },
			{ _id: 'b', is_correct: true, label: '88 Milhões' },
		],
		colors: {
			primary: '#0C807E',
			text: '#FFFFFF',
		},
		question: {
			description: 'Em 2024 fizemos Portugal de Norte a Sul mais de 158 mil vezes!',
			lottie_src: '/assets/review-2024/animations/passageiros/kms_total.json',
			title: 'Quantos quilómetros percorremos em 2024?',
		},
	},

	{
		_id: '03',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: false, label: '80 000' },
			{ _id: 'b', is_correct: true, label: '90 000' },
		],
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		question: {
			description: 'Seriam precisos 345 autocarros standard para caberem 90 mil telemóveis',
			lottie_src: '/assets/review-2024/animations/digital/app_total.json',
			title: 'Quantos passageiros já utilizam a nossa app?',
		},
	},

	{
		_id: '04',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: true, label: '34 milhões' },
			{ _id: 'b', is_correct: false, label: '34 mil' },
		],
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		question: {
			description: 'Em 2024, seriam precisos 34 milhões de carros de 5 lugares para transportar os nossos 174 milhões de  passageiros!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_total.json',
			title: 'Quantos carros de 5 lugares seriam precisos para transportar todos os nossos passageiros este ano?',
		},
	},

	{
		_id: '05',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: true, label: 'Área 1' },
			{ _id: 'b', is_correct: false, label: 'Área 2' },
		],
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		question: {
			description: 'Em 2024, a Área 1 encheu mais de 1900 vezes o Estádio Nacional do Jamor!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_area_1.json',
			title: 'Em que Área transportámos mais passageiros em 2024 (59 Milhões)?',
		},
	},

	{
		_id: '06',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: true, label: 'Sim!' },
			{ _id: 'b', is_correct: false, label: 'Impossível' },
		],
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		question: {
			description: 'A 10 de outubro de 2024, conseguíamos encher o Estádio da Luz mais de 10 vezes!',
			lottie_src: '/assets/review-2024/animations/recordes/recordes_day_du.json',
			title: 'Houve algum dia em que ultrapassámos os 680 mil passageiros em 24h?',
		},
	},

	{
		_id: '07',
		_points: 20,
		answers: [
			{ _id: 'a', is_correct: false, label: 'Vila Franca de Xira' },
			{ _id: 'b', is_correct: true, label: 'Moita' },
		],
		colors: {
			primary: '#000000',
			text: '#FFFFFF',
		},
		question: {
			description: 'Moita cresceu 42% em número de passageiros desde 2023! Um grupo com o número total de passageiros da Moita (2.6 Milhões) em 2024 conseguiria encher o Parque Municipal da Moita mais de 1000 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			title: 'Qual foi o município da amL em que mais aumentou o número de passageiros em 2024?',
		},
	},

	{
		_id: '08',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: false, label: '25 000' },
			{ _id: 'b', is_correct: true, label: '50 000' },
		],
		colors: {
			primary: '#F5A000',
			text: '#000000',
		},
		question: {
			description: 'Uma pessoa teria que verificar o telemóvel 137 vezes por dia durante um ano inteiro para atingir as 50 mil visitas que recebemos diariamente no site!',
			lottie_src: '/assets/review-2024/animations/digital/website_daily.json',
			title: 'Quantos visitantes diários temos no nosso website?',
		},
	},

	{
		_id: '09',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: true, label: 'Claro que é verdade!' },
			{ _id: 'b', is_correct: false, label: 'Não acredito.' },
		],
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		question: {
			description: 'Ao longo de 2024, o terminal da Moita (Estação) ganhou mais de 33 mil passageiros, tendo transportado no total mais de 53 mil durante o ano!',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			title: 'Em 2024, houve um terminal cresceu mais que 100%. Verdade ou mentira?',
		},
	},

	{
		_id: '10',
		_points: 10,
		answers: [
			{ _id: 'a', is_correct: false, label: '10 milhões' },
			{ _id: 'b', is_correct: true, label: '17 milhões' },
		],
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		question: {
			description: 'Em outubro, foi como se toda a população de Portugal entrasse num autocarro mais de 1,5 vezes no mesmo mês!',
			lottie_src: '/assets/review-2024/animations/recordes/recordes_month.json',
			title: 'Qual foi o número máximo de passageiros que transportámos num mês?',
		},
	},

];
