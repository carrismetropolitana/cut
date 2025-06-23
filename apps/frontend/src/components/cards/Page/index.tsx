/* * */

import { Discounts } from '@/components/cards/Discounts';
import { MunicipalDiscounts } from '@/components/cards/MunicipalDiscounts';
import { Pass } from '@/components/cards/Pass';

/* * */

export default function Component() {
	return (
		<>
			<Pass />
			<Discounts />
			<MunicipalDiscounts />
		</>
	);
}
