/* * */

export interface Review2024CardSchema {
	_group: string
	_group_title?: string
	_id: string
	_type?: 'default' | 'lines' | 'terminals'
	colors: {
		border?: string
		primary: string
		text: string
	}
	content: {
		description?: string
		line_ids?: string[]
		lottie_src?: string
		number_legend: string
		number_source?: string
		number_value: string
		terminals?: Review2024CardSchemaTerminalsContent[]
		title?: string
	}
	header: {
		number: string
		title: string
	}
}

interface Review2024CardSchemaTerminalsContent {
	legend: string
	title: string
	value: string
}

/* * */

export const allCardsData: Review2024CardSchema[] = [

	//
	// Group: "passageiros"

	{
		_group: 'passageiros',
		_id: 'pax_total',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Em 2024, seriam precisos 34 milhões de carros de 5 lugares para transportar os nossos passageiros!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_total.json',
			number_legend: 'total de passageiros transportados em 2024',
			number_source: 'https://www.pordata.pt/pt/estatisticas/populacao',
			number_value: '174 015 385 (174 Milhões)',
			title: 'Este ano fomos gigantes!',
		},
		header: {
			number: '174M',
			title: 'Passageiros',
		},
	},

	{
		_group: 'passageiros',
		_id: 'pax_area_1',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Em 2024, a Área 1 encheu mais de 1900 vezes o Estádio Nacional do Jamor!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_area_1.json',
			number_legend: 'total de passageiros transportados na Área 1 em 2024 (Amadora, Cascais, Lisboa, Oeiras e Sintra)',
			number_value: '59 098 165 (59 Milhões)',
			title: 'A Área 1 fez de 2024 um ano maior!',
		},
		header: {
			number: '59M',
			title: 'Passageiros Área 1',
		},
	},

	{
		_group: 'passageiros',
		_id: 'pax_area_2',
		colors: {
			primary: '#FBBA1A',
			text: '#000000',
		},
		content: {
			description: 'Em 2024, na Área 2 couberam todos os turistas que visitam Portugal por ano mais de duas vezes!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_area_2.json',
			number_legend: 'total de passageiros transportados na Área 2 em 2024 (Loures, Mafra,  Odivelas Vila Franca de Xira)',
			number_source: 'https://www.jornaldenegocios.pt/empresas/turismo---lazer/detalhe/portugal-recebeu-265-milhoes-de-turistas-em-2023-mais-19-face-a-2022',
			number_value: '58 292 739 (58.2 Milhões)',
			title: 'A Área 2 fez de 2024 um ano maior!',
		},
		header: {
			number: '58M',
			title: 'Passageiros Área 2',
		},
	},

	{
		_group: 'passageiros',
		_id: 'pax_area_3',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Em 2024, a Área 3 encheu mais de 850 vezes a ponte 25 de abril!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_area_3.json',
			number_legend: 'total de passageiros transportados na Área 3 em 2024 (Almada, Seixal e Sesimbra)',
			number_source: 'https://web.archive.org/web/20201203182555/http:/rpee.lnec.pt/Ficheiros/rpee_serieIII_n14/rpee_sIII_n14_pg05_18.pdf',
			number_value: '37 407 951 (37.4 Milhões)',
			title: 'A Área 3 fez de 2024 um ano maior!',
		},
		header: {
			number: '37M',
			title: 'Passageiros Área 3',
		},
	},

	{
		_group: 'passageiros',
		_id: 'pax_area_4',
		colors: {
			primary: '#FBBA1A',
			text: '#000000',
		},
		content: {
			description: 'Em 2024, na Área 4 transportámos toda a população estudantil portuguesa 11 vezes!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_area_4.json',
			number_legend: 'total de passageiros transportados na Área 4 em 2024 (Alcochete, Moita, Montijo, Palmela, Setúbal e Barreiro)',
			number_source: 'https://www.pordata.pt/pt/estatisticas/educacao/do-pre-escolar-ao-secundario/alunos-matriculados-do-pre-escolar-ao-secundario',
			number_value: '19 216 530 (19.2 Milhões)',
			title: 'A Área 4 fez de 2024 um ano maior!',
		},
		header: {
			number: '19M',
			title: 'Passageiros Área 4',
		},
	},

	{
		_group: 'passageiros',
		_id: 'pax_bridges',
		colors: {
			primary: '#3D85C6',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo do ano de 2024, seriam precisas 41 Pontes Vasco da Gama e 213 Pontes 25 de Abril para caberem todos estes passageiros ao mesmo tempo!',
			lottie_src: '/assets/review-2024/animations/passageiros/pax_bridges.json',
			number_legend: 'total de passageiros transportados sobre o Tejo em 2024 (Ponte 25 de Abril e Ponte Vasco da Gama)',
			number_source: 'https://web.archive.org/web/20170112103807/http:/www.lusoponte.pt/pvg_projecto_estatisticas.htm',
			number_value: '10 278 762 (10.2 Milhões)',
			title: 'Em 2024, fizemos pontes dentro da amL.',
		},
		header: {
			number: '10M',
			title: 'Pontes',
		},
	},

	{
		_group: 'passageiros',
		_id: 'pips_total',
		colors: {
			primary: '#BB3E96',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, abrimos janelas para o futuro!',
			lottie_src: '/assets/review-2024/animations/passageiros/pips_total.json',
			number_legend: 'total de painéis de informação ao público (PIPs) disponíveis em 2024 (Interiores e Exteriores)',
			number_value: '214',
			title: 'Em 2024, estivemos em cima do acontecimento!',
		},
		header: {
			number: '214',
			title: 'PIPs',
		},
	},

	{
		_group: 'passageiros',
		_id: 'kms_total',
		colors: {
			primary: '#0C807E',
			text: '#FFFFFF',
		},
		content: {
			description: 'Em 2024, fizemos Portugal de Norte a Sul 158 462 (158 mil) vezes!',
			lottie_src: '/assets/review-2024/animations/passageiros/kms_total.json',
			number_legend: 'total de quilómetros percorridos em 2024',
			number_value: '88 897 439 (88.8 Milhões)',
			title: 'Em 2024, fomos muito longe.',
		},
		header: {
			number: '88M',
			title: 'Quilómetros',
		},
	},

	//
	// Group: "tops"

	{
		_group: 'tops',
		_id: 'tops_lines_area_1',
		_type: 'lines',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Se os passageiros destas linhas (5 519 192) dessem as mãos, conseguiam ir de Lisboa a Sintra mais de 250 vezes. \n\n Ranking: \n Top 1- Linha 1715 transportou 2 271 212 passageiros (2.2 Milhões) \n Top 2 - Linha 1709 transportou 1 666 446 passageiros (1.6 Milhões) \n Top 3 - Linha 1703 transportou 1 581 534 passageiros (1.5 Milhões)',
			line_ids: ['1715', '1709', '1703'],
			lottie_src: '/assets/review-2024/animations/tops/tops_lines_area_1.json',
			number_legend: ' linhas com mais passageiros transportados na Área 1 ao longo do ano de 2024 (Amadora, Cascais, Lisboa, Oeiras, Sintra)',
			number_value: '1715|1709|1703',
			title: 'Todas as nossas linhas importam, mas 3 destacaram-se!',
		},
		header: {
			number: '',
			title: 'Top Linhas Área 1',
		},
	},

	{
		_group: 'tops',
		_id: 'tops_lines_area_2',
		_type: 'lines',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Os passageiros destas linhas (6 258 565) caberiam de mãos dadas na largura da foz do Tejo em Lisboa mais de 700 vezes. \n\n Ranking \n Top 1- Linha 2769 transportou 2 292 407 passageiros (2.2 Milhões) \n Top 2 - Linha 2711 transportou 1 999 079 passageiros (1.9 Milhões) \n Top 3 - Linha 2730 transportou 1,967,079 passageiros (1.9 Milhões)',
			line_ids: ['2769', '2711', '2730'],
			lottie_src: '/assets/review-2024/animations/tops/tops_lines_area_2.json',
			number_legend: ' linhas com mais passageiros transportados na Área 2 ao longo do ano de 2024 (Loures, Mafra, Odivelas, Vila Franca de Xira)',
			number_value: '2769|2711|2730',
			title: 'Todas as nossas linhas importam, mas 3 destacaram-se!',
		},
		header: {
			number: '',
			title: 'Top Linhas Área 2',
		},
	},

	{
		_group: 'tops',
		_id: 'tops_lines_area_3',
		_type: 'lines',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Os passageiros destas linhas (4 590 671) conseguiriam dar as mãos pela largura das praias da Costa da Caparica mais de 250 vezes. \n\n Ranking \n Top 1- Linha 3508 transportou 1 740 231 passageiros (1.7 Milhões) \n Top 2 - Linha 3022 transportou 1 650 700 passageiros (1.6 Milhões) \n Top 3 - Linha 3013 transportou 1 199 740 passageiros (1.1 Milhões)',
			line_ids: ['3508', '3022', '3013'],
			lottie_src: '/assets/review-2024/animations/tops/tops_lines_area_3.json',
			number_legend: 'linhas com mais passageiros transportados na Área 3 ao longo do ano de 2024 (Almada, Seixal e Sesimbra)',
			number_value: '3508|3022|3013',
			title: 'Todas as nossas linhas importam, mas 3 destacaram-se!',
		},
		header: {
			number: '',
			title: 'Top Linhas Área 3',
		},
	},

	{
		_group: 'tops',
		_id: 'tops_lines_area_4',
		_type: 'lines',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Os passageiros destas linhas (4 597 469), conseguiriam dar as mãos pelo comprimento do rio Sado mais de 360 vezes. \n\n Ranking \n Top 1- Linha 4600	 transportou 2 035 134 passageiros (2 Milhões) \n Top 2 - Linha 4701 transportou 1 628 676 passageiros (1.6 Milhões) \n Top 3 - Linha 4512 transportou 933 659 passageiros (933 mil)',
			line_ids: ['4600', '4701', '4512'],
			lottie_src: '/assets/review-2024/animations/tops/tops_lines_area_4.json',
			number_legend: 'linhas com mais passageiros transportados na Área 4 ao longo do ano de 2024 (Alcochete, Barreiro, Moita, Montijo, Palmela, Setúbal)',
			number_value: '4600|4701|4512',
			title: 'Todas as nossas linhas importam, mas 3 destacaram-se!',
		},
		header: {
			number: '',
			title: 'Top Linhas Área 4',
		},
	},

	// {
	// 	_group: 'tops',
	// 	_id: 'lines_growth',
	// 	_type: 'lines',
	// 	colors: {
	// 		border: '#FFDD00',
	// 		primary: '#FFFFFF',
	// 		text: '#5A5A64',
	// 	},
	// 	content: {
	// 		description: 'Ranking. \n Top 1 - A linha 4702  teve um crescimento de 571%. \n Top 2- A linha 4705 teve um crescimento de 142%. \n Top 3 -  A linha 2134 teve um crescimento de 111%',
	// 		line_ids: ['4702', '4705', '2134'],
	// 		lottie_src: '/assets/review-2024/animations/tops/lines_growth.json',
	// 		number_legend: 'linhas com maior taxa de crescimento ao longo de 2024',
	// 		number_value: '4702|4705|2134',
	// 		title: 'Crescem depressa!',
	// 	},
	// 	header: {
	// 		number: '',
	// 		title: 'Crescimento Linhas',
	// 	},
	// },

	{
		_group: 'tops',
		_id: 'lines_lisboa',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Ao longo de 2024, transportámos 68 982 369 (68.9 Milhões) de passageiros até Lisboa. Isto representou um crescimento de 21.28%, face a 2024. \n\n Estas foram as 3 linhas que se destacaram na ligação à cidade: \n Top 1 - A linha 2711  teve um crescimento de 56% (mais 719 mil passageiros). \n Top 2- A linha 1715 teve um crescimento de 33% (mais 558 mil de passageiros). \n Top 3 -  A linha 4701 teve um crescimento de 50% (mais 540 mil passageiros)',
			line_ids: ['2711', '1715', '4701'],
			lottie_src: '/assets/review-2024/animations/tops/lines_growth.json',
			number_legend: 'linhas de ligação a Lisboa com maior taxa de crescimento, ao longo de 2024',
			number_value: '2711|1715|4701',
			title: 'Crescem depressa!',
		},
		header: {
			number: '68M',
			title: 'Ligações a Lisboa',
		},
	},

	//
	// Group: "recordes"

	{
		_group: 'recordes',
		_id: 'recordes_month',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Em outubro de 2024, foi como se toda a população de Portugal entrasse num autocarro mais de 1,5 vezes no mesmo mês!',
			lottie_src: '/assets/review-2024/animations/recordes/recordes_month.json',
			number_legend: 'total de passageiros transportados num mês (outubro de 2024)',
			number_value: '17 060 039 (17 Milhões)',
			title: 'Um mês que valeu por mil!',
		},
		header: {
			number: '17M',
			title: 'Mês',
		},
	},

	{
		_group: 'recordes',
		_id: 'recordes_day_du',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Num dia de 2024, conseguíamos encher o Estádio da Luz mais de 10 vezes!',
			lottie_src: '/assets/review-2024/animations/recordes/recordes_day_du.json',
			number_legend: 'total de passageiros transportados num dia útil (10 de outubro de 2024)',
			number_value: '688 019 (688 mil)',
			title: 'O melhor dia de todos!',
		},
		header: {
			number: '688m',
			title: 'Dia Útil',
		},
	},

	{
		_group: 'recordes',
		_id: 'recordes_day_sab',
		colors: {
			primary: '#FBBA1A',
			text: '#000000',
		},
		content: {
			description: 'Se 305 mil pessoas dessem as mãos, conseguiriam chegar de Mafra a Setúbal e voltar.',
			lottie_src: '/assets/review-2024/animations/recordes/recordes_day_sab.json',
			number_legend: 'total de passageiros transportados num sábado (14 de setembro de 2024)',
			number_value: '305 063 (305 mil)',
			title: 'Aos fins de semana também conta!',
		},
		header: {
			number: '305m',
			title: 'Sábado',
		},
	},

	{
		_group: 'recordes',
		_id: 'recordes_day_dom',
		colors: {
			primary: '#3D85C6',
			text: '#FFFFFF',
		},
		content: {
			description: 'Num domingo, transportámos mais de  quatro plateias do Passeio Marítimo de Algés!',
			lottie_src: '/assets/review-2024/animations/recordes/recordes_day_dom.json',
			number_legend: 'total de passageiros transportados num domingo (15 de agosto de 2024)',
			number_value: '274 416 (274 mil)',
			title: 'A CMetropolitana não tira férias!',
		},
		header: {
			number: '274m',
			title: 'Domingo/Feriado',
		},
	},

	//
	// Group: "municipio_growth_area_1"

	{
		_group: 'municipio_growth_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_growth_a1_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  2 894 074 (2.8 Milhões) passageiros ao longo de 2024',
			number_value: '+26%',
			title: 'Na Amadora não parámos de crescer!',
		},
		header: {
			number: '+26%',
			title: 'Amadora',
		},
	},

	{
		_group: 'municipio_growth_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_growth_a1_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  625 701 (625 mil) passageiros ao longo de 2024',
			number_value: '+36%',
			title: 'Em Cascais não parámos de crescer!',
		},
		header: {
			number: '+36%',
			title: 'Cascais',
		},
	},

	{
		_group: 'municipio_growth_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_growth_a1_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de 2 766 045 (2.7 Milhões) passageiros ao longo de 2024',
			number_value: '+18%',
			title: 'Em Lisboa não parámos de crescer!',
		},
		header: {
			number: '+18%',
			title: 'Lisboa',
		},
	},

	{
		_group: 'municipio_growth_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_growth_a1_04',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  2 380 497 (2.3 Milhões) passageiros ao longo de 2024',
			number_value: '+26%',
			title: 'Em Oeiras não parámos de crescer!',
		},
		header: {
			number: '+26%',
			title: 'Oeiras',
		},
	},

	{
		_group: 'municipio_growth_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_growth_a1_05',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  6 735 781 (6.7 Milhões) passageiros ao longo de 2024',
			number_value: '+33%',
			title: 'Em Sintra não parámos de crescer!',
		},
		header: {
			number: '+33%',
			title: 'Sintra',
		},
	},

	//
	// Group: "municipio_growth_area_2"

	{
		_group: 'municipio_growth_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_growth_a2_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de 3 721 540 (3.7 Milhões) de passageiros ao longo de 2024',
			number_value: '+20%',
			title: 'Em Loures não parámos de crescer!',
		},
		header: {
			number: '+20%',
			title: 'Loures',
		},
	},

	{
		_group: 'municipio_growth_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_growth_a2_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de 525 363 (525 mil) de passageiros ao longo de 2024',
			number_value: '+22%',
			title: 'Em Mafra não parámos de crescer!',
		},
		header: {
			number: '+22%',
			title: 'Mafra',
		},
	},

	{
		_group: 'municipio_growth_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_growth_a2_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  2 361 699 (2.3 Milhões) de passageiros ao longo de 2024',
			number_value: '+18%',
			title: 'Em Odivelas não parámos de crescer!',
		},
		header: {
			number: '+18%',
			title: 'Odivelas',
		},
	},

	{
		_group: 'municipio_growth_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_growth_a2_04',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  2 038 390 (2 Milhões) de passageiros ao longo de 2024',
			number_value: '+34%',
			title: 'Em Vila Franca de Xira não parámos de crescer!',
		},
		header: {
			number: '+34%',
			title: 'Vila Franca de Xira',
		},
	},

	//
	// Group: "municipio_growth_area_3"

	{
		_group: 'municipio_growth_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_growth_a3_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  2 570 574 (2.5 Milhões) de passageiros  ao longo de 2024',
			number_value: '+17%',
			title: 'Em Almada não parámos de crescer!',
		},
		header: {
			number: '+17%',
			title: 'Almada',
		},
	},

	{
		_group: 'municipio_growth_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_growth_a3_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  2 710 735 (2.7 Milhões) de passageiros ao longo de 2024',
			number_value: '+21%',
			title: 'No Seixal não parámos de crescer!',
		},
		header: {
			number: '+21%',
			title: 'Seixal',
		},
	},

	{
		_group: 'municipio_growth_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_growth_a3_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  342 877 (342 mil) de passageiros ao longo de 2024',
			number_value: '+16%',
			title: 'Em Sesimbra não parámos de crescer!',
		},
		header: {
			number: '+16%',
			title: 'Sesimbra',
		},
	},

	//
	// Group: "municipio_growth_area_4"

	{
		_group: 'municipio_growth_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_growth_a4_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  221 481 (221 mil) de passageiros  ao longo de 2024',
			number_value: '+22%',
			title: 'Em Alcochete não parámos de crescer!',
		},
		header: {
			number: '+22%',
			title: 'Alcochete',
		},
	},

	{
		_group: 'municipio_growth_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_growth_a4_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  334 986 (334 mil) de passageiros ao longo de 2024',
			number_value: '+30%',
			title: 'No Barreiro não parámos de crescer!',
		},
		header: {
			number: '+30%',
			title: 'Barreiro',
		},
	},

	{
		_group: 'municipio_growth_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_growth_a4_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  789 413 (789 mil) de passageiros ao longo de 2024',
			number_value: '+42%',
			title: 'Na Moita não parámos de crescer!',
		},
		header: {
			number: '+42%',
			title: 'Moita',
		},
	},

	{
		_group: 'municipio_growth_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_growth_a4_04',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  742 358 (742 mil) de passageiros ao longo de 2024',
			number_value: '+35%',
			title: 'No Montijo não parámos de crescer!',
		},
		header: {
			number: '+35%',
			title: 'Montijo',
		},
	},

	{
		_group: 'municipio_growth_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_growth_a4_05',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  430 586 (430 mil) de passageiros ao longo de 2024',
			number_value: '+41%',
			title: 'Em Palmela não parámos de crescer!',
		},
		header: {
			number: '+41%',
			title: 'Palmela',
		},
	},

	{
		_group: 'municipio_growth_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_growth_a4_06',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			lottie_src: '/assets/review-2024/animations/municipios/municipio_growth.json',
			number_legend: 'Aumento de  1 810 770 (1.8 Milhões) de passageiros ao longo de 2024',
			number_value: '+33%',
			title: 'Em Setúbal não parámos de crescer!',
		},
		header: {
			number: '+33%',
			title: 'Setúbal',
		},
	},

	//
	// Group: "municipio_pax_area_1"

	{
		_group: 'municipio_pax_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_pax_a1_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o UBBO mais de 200 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados na Amadora em 2024',
			number_value: '14 038 901 (14 Milhões)',
			title: 'Na Amadora fomos gigantes!',
		},
		header: {
			number: '14M',
			title: 'Amadora',
		},
	},

	{
		_group: 'municipio_pax_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_pax_a1_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Se todos estes passageiros dessem as mãos, conseguiriam ir de Lisboa à Baía de Cascais mais de 120 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Cascais em 2024',
			number_value: '2 364 120 (2.3 Milhões)',
			title: 'Em Cascais não parámos de crescer!',
		},
		header: {
			number: '2M',
			title: 'Cascais',
		},
	},

	{
		_group: 'municipio_pax_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_pax_a1_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o Campo Pequeno mais de 2 mil vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Lisboa em 2024',
			number_value: '18 559 612 (18.5 Milhões)',
			title: 'Em Lisboa não parámos de crescer!',
		},
		header: {
			number: '18M',
			title: 'Lisboa',
		},
	},

	{
		_group: 'municipio_pax_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_pax_a1_04',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o Passeio Marítimo de Algés mais de 200 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Oeiras em 2024',
			number_value: '11 599 673 (11.5 Milhões)',
			title: 'Em Oeiras fomos gigantes!',
		},
		header: {
			number: '11M',
			title: 'Oeiras',
		},
	},

	{
		_group: 'municipio_pax_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_pax_a1_05',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros são 60 vezes o número anual de visitantes do Palácio da Pena.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Sintra em 2024',
			number_value: '26 910 644 (26.9 Milhões)',
			title: 'Em Sintra fomos gigantes!',
		},
		header: {
			number: '26M',
			title: 'Sintra',
		},
	},

	//
	// Group: "municipio_pax_area_2"

	{
		_group: 'municipio_pax_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_pax_a2_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o Pavilhão Paz e Amizade mais de 10 mil vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Loures em 2024',
			number_value: '21 917 890 (21.9 Milhões)',
			title: 'Em Loures fomos gigantes!',
		},
		header: {
			number: '21M',
			title: 'Loures',
		},
	},

	{
		_group: 'municipio_pax_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_pax_a2_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher os dois maiores salões da Tapada de Mafra mais de 5 mil vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Mafra em 2024',
			number_value: '2 920 018 (2.9 Milhões)',
			title: 'Em Mafra fomos gigantes!',
		},
		header: {
			number: '2M',
			title: 'Mafra',
		},
	},

	{
		_group: 'municipio_pax_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_pax_a2_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o Espaço Multiusos de Odivelas mais de 4 mil vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Odivelas em 2024',
			number_value: '15 153 265 (15.1 Milhões)',
			title: 'Em Odivelas fomos gigantes!',
		},
		header: {
			number: '15M',
			title: 'Odivelas',
		},
	},

	{
		_group: 'municipio_pax_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_pax_a2_04',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher a Praça de Touros de Vila Franca de Xira 1 500 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Vila Franca de Xira em 2024',
			number_value: '7 970 835 (7.9 Milhões)',
			title: 'Em Vila Franca de Xira fomos gigantes!',
		},
		header: {
			number: '7M',
			title: 'Vila Franca de Xira',
		},
	},

	//
	// Group: "municipio_pax_area_3"

	{
		_group: 'municipio_pax_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_pax_a3_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Se todos estes passageiros dessem as mãos, conseguiriam de Lisboa so Cristo Rei mais de 1400 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Almada em 2024',
			number_value: '17 567 493 (17.6 Milhões)',
			title: 'Em Almada  fomos gigantes!',
		},
		header: {
			number: '17M',
			title: 'Almada',
		},
	},

	{
		_group: 'municipio_pax_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_pax_a3_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Se todos estes passageiros dessem as mãos, conseguiriam de Lisboa ao Splash do Seixal mais de 2 mil vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados no Seixal em 2024',
			number_value: '15 406 927 (15.4 Milhões)',
			title: 'No Seixal fomos gigantes!',
		},
		header: {
			number: '15M',
			title: 'Seixal',
		},
	},

	{
		_group: 'municipio_pax_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_pax_a3_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Se todos estes passageiros dessem as mãos, conseguiriam ir de Lisboa à Fortaleza mais de 100 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Sesimbra em 2024',
			number_value: '2 517 523 (2.5 Milhões)',
			title: 'Em Sesimbra fomos gigantes!',
		},
		header: {
			number: '2M',
			title: 'Sesimbra',
		},
	},

	//
	// Group: "municipio_pax_area_4"

	{
		_group: 'municipio_pax_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_pax_a4_01',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Se todos estes passageiros dessem as mãos, conseguiriam ir de Lisboa ao Freeport mais de 70 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Alcochete em 2024',
			number_value: '1 210 453 (1.2 Milhões)',
			title: 'Em Alcochete fomos gigantes!',
		},
		header: {
			number: '1M',
			title: 'Alcochete',
		},
	},

	{
		_group: 'municipio_pax_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_pax_a4_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o Parque da Cidade mais de 15 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados no Barreiro em 2024',
			number_value: '1 463 091 (1.4 Milhões)',
			title: 'No Barreiro fomos gigantes!',
		},
		header: {
			number: '1M',
			title: 'Barreiro',
		},
	},

	{
		_group: 'municipio_pax_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_pax_a4_03',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o Parque Municipal da Moita mais de 1000 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados na Moita em 2024',
			number_value: '2 654 507 (2.6 Milhões)',
			title: 'Na Moita fomos gigantes!',
		},
		header: {
			number: '2M',
			title: 'Moita',
		},
	},

	{
		_group: 'municipio_pax_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_pax_a4_04',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Se todos estes passageiros dessem as mãos, conseguiriam ir de Lisboa ao Coreto da Praça da República do Montijo mais de 200 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados no Montijo em 2024',
			number_value: '2 887 670 (2.8 Milhões)',
			title: 'No Montijo fomos gigantes!',
		},
		header: {
			number: '2M',
			title: 'Montijo',
		},
	},

	{
		_group: 'municipio_pax_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_pax_a4_05',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Se todos estes passageiros dessem as mãos, conseguiriam ir de Lisboa ao Castelo de Palmela mais de 64 vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Palmela em 2024',
			number_value: '1 483 372 (1.4 Milhões)',
			title: 'Em Palmela fomos gigantes!',
		},
		header: {
			number: '1M',
			title: 'Palmela',
		},
	},

	{
		_group: 'municipio_pax_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_pax_a4_06',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Todos estes passageiros conseguiriam encher o Fórum Luísa Todi mais de 11 mil vezes.',
			lottie_src: '/assets/review-2024/animations/municipios/municipio_pax.json',
			number_legend: 'total de passageiros transportados em Setúbal em 2024',
			number_value: '7 357 729 (7.3 Milhões)',
			title: 'Em Setúbal fomos gigantes!',
		},
		header: {
			number: '7M',
			title: 'Setúbal',
		},
	},

	//
	// Group: "municipio_lines_area_1"

	{
		_group: 'municipio_lines_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_lines_a1_01',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 1 070 393 pessoas a ver as vistas da Amadora, ao longo de 2024. \n\n Linha 1005 \n Amadora (Estação Norte) - UBBO',
			line_ids: ['1005'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados na Amadora, em 2024',
			number_value: '1005',
			title: 'Em 2024, passeámos  juntos pela Amadora!',
		},
		header: {
			number: '',
			title: 'Amadora',
		},
	},

	{
		_group: 'municipio_lines_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_lines_a1_04',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 836 769 pessoas a ver as vistas de Oeiras, ao longo de 2024. \n\n Linha 1103 \n Algés (Estação) - Queijas (PSP)',
			line_ids: ['1103'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Oeiras, em 2024',
			number_value: '1103',
			title: 'Em 2024, passeámos  juntos por Oeiras!',
		},
		header: {
			number: '',
			title: 'Oeiras',
		},
	},

	{
		_group: 'municipio_lines_area_1',
		_group_title: 'Área 1',
		_id: 'municipio_lines_a1_05',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 1 093 375 pessoas a ver as vistas de Sintra, ao longo de 2024. \n\n Linha 1251 \n Portela Sintra (Estação Sul) - Rio De Mouro (Estação Sul)',
			line_ids: ['1251'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Sintra, em 2024',
			number_value: '1251',
			title: 'Em 2024, passeámos  juntos por Sintra!',
		},
		header: {
			number: '',
			title: 'Sintra',
		},
	},

	//
	// Group: "municipio_lines_area_2"

	{
		_group: 'municipio_lines_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_lines_a2_01',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 297 244 pessoas a ver as vistas de Loures, ao longo de 2024. \n\n Linha 2031 \n Sacavém (C.Saúde) - Sacavém (Centro Saúde)',
			line_ids: ['2031'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Loures, em 2024',
			number_value: '2031',
			title: 'Em 2024, passeámos  juntos por Loures!',
		},
		header: {
			number: '',
			title: 'Loures',
		},
	},

	{
		_group: 'municipio_lines_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_lines_a2_02',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 77 672 pessoas a ver as vistas de Mafra, ao longo de 2024. \n\n Linha 2126 \n Ericeira | Circular',
			line_ids: ['2126'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Mafra, em 2024',
			number_value: '2126',
			title: 'Em 2024, passeámos  juntos por Mafra!',
		},
		header: {
			number: '',
			title: 'Mafra',
		},
	},

	{
		_group: 'municipio_lines_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_lines_a2_03',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 467 232 pessoas a ver as vistas de Odivelas, ao longo de 2024. \n\n Linha 2212 \n Odivelas (C. Comercial) | Circular',
			line_ids: ['2212'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Odivelas, em 2024',
			number_value: '2212',
			title: 'Em 2024, passeámos  juntos por Odivelas!',
		},
		header: {
			number: '',
			title: 'Odivelas',
		},
	},

	{
		_group: 'municipio_lines_area_2',
		_group_title: 'Área 2',
		_id: 'municipio_lines_a2_04',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 	1 182 030 pessoas a ver as vistas de Vila Franca de Xira, ao longo de 2024. \n\n Linha 2303 \n Alverca (Est) - Arcena',
			line_ids: ['2303'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Vila Franca de Xira, em 2024',
			number_value: '2303',
			title: 'Em 2024, passeámos  juntos por Vila Franca de Xira!',
		},
		header: {
			number: '',
			title: 'Vila Franca de Xira',
		},
	},

	//
	// Group: "municipio_lines_area_3"

	{
		_group: 'municipio_lines_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_lines_a3_01',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 1 650 700 pessoas a ver as vistas de Almada, ao longo de 2024. \n\n Linha 3022 \n Costa da Caparica (Terminal) - Cacilhas (Terminal)',
			line_ids: ['3022'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Almada, em 2024',
			number_value: '3022',
			title: 'Em 2024, passeámos  juntos por Almada!',
		},
		header: {
			number: '',
			title: 'Almada',
		},
	},

	{
		_group: 'municipio_lines_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_lines_a3_02',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 1 004 187 pessoas a ver as vistas do Seixal, ao longo de 2024. \n\n Linha 3113 \n Fogueteiro (Estação) - Seixal (Terminal Fluvial), via Quinta do Cabral',
			line_ids: ['3113'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados no Seixal, em 2024',
			number_value: '3113',
			title: 'Em 2024, passeámos  juntos pelo Seixal!',
		},
		header: {
			number: '',
			title: 'Seixal',
		},
	},

	{
		_group: 'municipio_lines_area_3',
		_group_title: 'Área 3',
		_id: 'municipio_lines_a3_03',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 150 299 pessoas a ver as vistas de Sesimbra, ao longo de 2024. \n\n Linha 3220 \n Sesimbra (Centro) | Circular',
			line_ids: ['3220'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Sesimbra, em 2024',
			number_value: '3220',
			title: 'Em 2024, passeámos  juntos por Sesimbra!',
		},
		header: {
			number: '',
			title: 'Sesimbra',
		},
	},

	//
	// Group: "municipio_lines_area_4"

	{
		_group: 'municipio_lines_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_lines_a4_01',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 8 883 pessoas a ver as vistas de Alcochete, ao longo de 2024. \n\n Linha 4001 \n Alcochete | Circular',
			line_ids: ['4001'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Alcochete, em 2024',
			number_value: '4001',
			title: 'Em 2024, passeámos  juntos por Alcochete!',
		},
		header: {
			number: '',
			title: 'Alcochete',
		},
	},

	{
		_group: 'municipio_lines_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_lines_a4_03',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 68 099 pessoas a ver as vistas da Moita, ao longo de 2024. \n\n Linha 4102 \n Moita (Estação) - Sarilhos Pequenos via Gaio-Rosário',
			line_ids: ['4102'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados na Moita, em 2024',
			number_value: '4102',
			title: 'Em 2024, passeámos  juntos pela Moita!',
		},
		header: {
			number: '',
			title: 'Moita',
		},
	},

	{
		_group: 'municipio_lines_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_lines_a4_04',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 391 600 pessoas a ver as vistas do Montijo, ao longo de 2024. \n\n Linha 4203 \n Afonsoeiro - Montijo (Terminal Fluvial) via Bairro da Liberdade',
			line_ids: ['4203'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados no Montijo, em 2024',
			number_value: '4203',
			title: 'Em 2024, passeámos  juntos pelo Montijo!',
		},
		header: {
			number: '',
			title: 'Montijo',
		},
	},

	{
		_group: 'municipio_lines_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_lines_a4_05',
		_type: 'lines',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 44 778 pessoas a ver as vistas de Palmela, ao longo de 2024. \n\n Linha 4307 \n Loja Nova - Palmela (Terminal)',
			line_ids: ['4307'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Palmela, em 2024',
			number_value: '4307',
			title: 'Em 2024, passeámos  juntos por Palmela!',
		},
		header: {
			number: '',
			title: 'Palmela',
		},
	},

	{
		_group: 'municipio_lines_area_4',
		_group_title: 'Área 4',
		_id: 'municipio_lines_a4_06',
		_type: 'lines',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Só nesta linha levámos 662 573 pessoas a ver as vistas de Setúbal, ao longo de 2024. \n\n Linha 4426 \n Setúbal (Bairro do Viso) - Setúbal (Bairro Quinta Santo António)',
			line_ids: ['4426'],
			lottie_src: '/assets/review-2024/animations/municipios/municipio_lines.json',
			number_legend: 'linha municipal com mais passageiros transportados em Setúbal, em 2024',
			number_value: '4426',
			title: 'Em 2024, passeámos  juntos por Setúbal!',
		},
		header: {
			number: '',
			title: 'Setúbal',
		},
	},

	//
	// Group: "terminals_1"

	{
		_group: 'terminals_1',
		_id: 'terminals_1_01',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal da Moita (Estação) ganhou mais de 33 mil passageiros, tendo transportado no total mais de 53 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+174,90%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+175%',
			title: 'Moita (Estação)',
		},
	},

	{
		_group: 'terminals_1',
		_id: 'terminals_1_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Póvoa Sta Iria (Estação) ganhou mais de 196 mil passageiros, tendo transportado no total mais de 480 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+68,20%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+68%',
			title: 'Alverca (Estação)',
		},
	},

	{
		_group: 'terminals_1',
		_id: 'terminals_1_03',
		colors: {
			primary: '#3D85C6',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Palmela (Terminal) ganhou mais de 92 mil passageiros, tendo transportado no total mais 240 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+60,30%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+60%',
			title: 'Palmela (Terminal)',
		},
	},

	{
		_group: 'terminals_1',
		_id: 'terminals_1_04',
		colors: {
			primary: '#FBBA1A',
			text: '#000000',
		},
		content: {
			description: 'Ao longo de 2024, o terminal do Barreiro (Campo Luso) ganhou mais de 9 mil passageiros, tendo transportado no total mais de 20 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+45,40%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+45%',
			title: 'Barreiro (Campo Luso)',
		},
	},

	{
		_group: 'terminals_1',
		_id: 'terminals_1_05',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#5A5A64',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Agualva-Cacém (Estação) ganhou mais de 589 mil passageiros, tendo transportado no total mais de 1 milhão durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+44,40%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+44%',
			title: 'Agualva-Cacém (Estação)',
		},
	},

	{
		_group: 'terminals_1',
		_id: 'terminals_1_06',
		colors: {
			primary: '#BB3E96',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Carcavelos (Estação) ganhou mais de 39 mil passageiros, tendo transportado no total mais de 160 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+31,70%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+32%',
			title: 'Carcavelos (Estação)',
		},
	},

	//
	// Group: "terminals_2"

	{
		_group: 'terminals_2',
		_id: 'terminals_2_01',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Foros de Amora (Estação) ganhou mais de 210 mil passageiros, tendo transportado no total mais de 1.3 milhões durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+30,90%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+31%',
			title: 'Foros de Amora (Estação)',
		},
	},

	{
		_group: 'terminals_2',
		_id: 'terminals_2_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Ao longo de 2024, o terminal do Pragal (Estação) ganhou mais de 350 mil passageiros, tendo transportado no total mais de 1.5 milhões durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+30,40%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+30%',
			title: 'Pragal (Estação)',
		},
	},

	{
		_group: 'terminals_2',
		_id: 'terminals_2_03',
		colors: {
			primary: '#3D85C6',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal do Campo Grande (Metro) ganhou mais de 890 mil passageiros, tendo transportado no total mais 4 milhões durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+27,70%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+28%',
			title: 'Campo Grande (Metro)',
		},
	},

	{
		_group: 'terminals_2',
		_id: 'terminals_2_04',
		colors: {
			primary: '#FBBA1A',
			text: '#000000',
		},
		content: {
			description: 'Ao longo de 2024, o Terminal Intermodal de Mafra ganhou mais de 69 mil passageiros, tendo transportado no total mais de 320 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+26,80%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+27%',
			title: 'Mafra Parque Intermodal (Terminal)',
		},
	},

	{
		_group: 'terminals_2',
		_id: 'terminals_2_05',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#5A5A64',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Odivelas (Metro) ganhou mais de 488 mil passageiros, tendo transportado no total mais de 2 Milhões durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+26,80%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+27%',
			title: 'Odivelas (Metro)',
		},
	},

	{
		_group: 'terminals_2',
		_id: 'terminals_2_06',
		colors: {
			primary: '#BB3E96',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Setúbal - ITS (Terminal) ganhou mais de 150 mil passageiros, tendo transportado no total mais de 1 milhão durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+21,80%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+22%',
			title: 'Setubal - ITS (Terminal)',
		},
	},

	//
	// Group: "terminals_3"

	{
		_group: 'terminals_3',
		_id: 'terminals_3_01',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Algés (Estação) ganhou mais de 179 mil passageiros, tendo transportado no total mais de 1.9 milhões durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+20,60%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '21%',
			title: 'Algés (Estação)',
		},
	},

	{
		_group: 'terminals_3',
		_id: 'terminals_3_02',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Ao longo de 2024, o terminal da Amadora (Estação) ganhou mais de 268 mil passageiros, tendo transportado no total mais de 1.7 milhões durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+18,00%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+18%',
			title: 'Amadora (Estação)',
		},
	},

	{
		_group: 'terminals_3',
		_id: 'terminals_3_03',
		colors: {
			primary: '#3D85C6',
			text: '#FFFFFF',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Bucelas ganhou mais de 33 mil passageiros, tendo transportado no total mais de 260 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+14,70%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+15%',
			title: 'Bucelas (Terminal)',
		},
	},

	{
		_group: 'terminals_3',
		_id: 'terminals_3_04',
		colors: {
			primary: '#FBBA1A',
			text: '#000000',
		},
		content: {
			description: 'Ao longo de 2024, o terminal de Sesimbra ganhou mais de 19 mil passageiros, tendo transportado no total mais de 350 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+5,90%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+6%',
			title: 'Sesimbra (Terminal)',
		},
	},

	{
		_group: 'terminals_3',
		_id: 'terminals_3_05',
		colors: {
			border: '#FFDD00',
			primary: '#FFFFFF',
			text: '#5A5A64',
		},
		content: {
			description: 'Ao longo de 2024, o terminal do Montijo ganhou mais de 1 900 passageiros, tendo transportado no total mais de 515 mil durante o ano.',
			lottie_src: '/assets/review-2024/animations/terminais/terminals.json',
			number_legend: 'taxa de crescimento ao longo de 2024',
			number_value: '+0,40%',
			title: 'Em 2024, tivemos alguns pontos de encontro favoritos!',
		},
		header: {
			number: '+0,4%',
			title: 'Montijo (Terminal)',
		},
	},

	//
	// Group: "digital"

	{
		_group: 'digital',
		_id: 'followers_total',
		colors: {
			primary: '#3D85C6',
			text: '#FFFFFF',
		},
		content: {
			description: 'Acabámos 2024 com 25 553 seguidores somados por todos os nossos canais digitais. \n Seria preciso um prédio de mais de 3 500 andares, com 3 frações por piso, para que toda a nossa comunidade vivesse junta.',
			lottie_src: '/assets/review-2024/animations/digital/followers_total.json',
			number_legend: 'total de seguidores novos na nossa comunidade digital, em 2024',
			number_value: '25 553 (25 mil)',
			title: 'Este ano, andámos ligados!',
		},
		header: {
			number: '25m',
			title: 'Seguidores',
		},
	},

	{
		_group: 'digital',
		_id: 'news_total',
		colors: {
			primary: '#FFDD00',
			text: '#000000',
		},
		content: {
			description: 'Em 2024, publicámos mais de 1 800 alertas no total, uma média de 5 por dia!',
			lottie_src: '/assets/review-2024/animations/digital/news_total.json',
			number_legend: 'total de notícias publicadas pela Carris Metropolitana, em 2024',
			number_value: '1 894',
			title: 'Em 2024, contámos tudo!',
		},
		header: {
			number: '1m',
			title: 'Alertas',
		},
	},

	{
		_group: 'digital',
		_id: 'realtime_daily',
		colors: {
			border: '#00CD32',
			primary: '#FFFFFF',
			text: '#00CD32',
		},
		content: {
			description: 'Em 2024, guardámos 3 milhões de eventos por dia enviados pelos nossos autocarro, a notificar a sua localização.',
			lottie_src: '/assets/review-2024/animations/digital/realtime_daily.json',
			number_legend: 'eventos recebidos em tempo real, por dia, em 2024',
			number_value: '3 000 000 (3 Milhões)',
			title: 'Este ano, sabemos por onde andámos!',
		},
		header: {
			number: '3M',
			title: 'Eventos Tempo Real',
		},
	},

	{
		_group: 'digital',
		_id: 'app_total',
		colors: {
			primary: '#C61D23',
			text: '#FFFFFF',
		},
		content: {
			description: 'Seriam precisos 345 autocarros standard para caberem 90 mil telemóveis.',
			lottie_src: '/assets/review-2024/animations/digital/app_total.json',
			number_legend: 'utilizadores totais da aplicação Carris Metropolitana, em 2024',
			number_value: '90 000 (90 mil)',
			title: '2024 foi o ano de viajar no bolso dos passageiros!',
		},
		header: {
			number: '90m',
			title: 'Aplicação',
		},
	},

	{
		_group: 'digital',
		_id: 'website_daily',
		colors: {
			primary: '#F5A000',
			text: '#000000',
		},
		content: {
			description: 'Uma pessoa teria que verificar o telemóvel 137 vezes por dia durante um ano inteiro para atingir as 50 mil visitas que recebemos diariamente no site!',
			lottie_src: '/assets/review-2024/animations/digital/website_daily.json',
			number_legend: 'visitantes diários ao nosso website, ao longo de 2024',
			number_value: '50 000 (50 mil)',
			title: 'Este ano estivemos sempre à distância de um clique!',
		},
		header: {
			number: '50m',
			title: 'Website',
		},
	},

];
