import { json } from '@sveltejs/kit';
import type { City as CityType } from '$lib/types/City';
import { City } from '$lib/db/models/cityModel';
import type { CityResponse } from '$lib/types/CityResponse';

async function getCity(cityName: string | null): Promise<CityResponse> {
	const cities: CityType[] | null = await City.find(cityName ? { name: cityName } : {});

	if (cities === null) {
		return {
			data: null,
			error: "City doesn't exist",
			ok: false
		};
	}

	return {
		data: cities,
		error: '',
		ok: true
	};
}

export async function GET({ url }) {
	const cityName = url.searchParams.get('cityName') || null;

	const cities = await getCity(cityName);

	return json(cities);
}
