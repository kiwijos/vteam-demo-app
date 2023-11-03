import type { PageServerLoad } from './$types';
import type { ParkingStation } from '$lib/types/ParkingStation';

export const load: PageServerLoad = async ({ fetch }) => {
	const res = await fetch('/api/parking/within?cityName=Oskarshamn');
	const result = await res.json();

	const data: ParkingStation[] = result.data;

	return { data };
};
