import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('/api/parking/within?cityName=Oskarshamn');
	const data = await res.json();

	return { data };
};
