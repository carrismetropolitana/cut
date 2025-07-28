'use client';

/* * */

import { Loader } from '@/components/common/Loader';
import { useEffect } from 'react';

/* * */

export default function Page() {
	//

	useEffect(() => {
		if (typeof window === 'undefined') return;
		window.location.href = '/';
	}, []);

	return <Loader />;

	//
}
