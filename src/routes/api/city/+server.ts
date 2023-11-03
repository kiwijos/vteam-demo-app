import { json } from '@sveltejs/kit';
import type { City as CityType } from '$lib/types/City';
import { City } from '$lib/db/models/cityModel';

async function getCity({ cityName = null }: { cityName: string | null }) {
	const res = await City.find(cityName ? { name: cityName } : {});

	const cityData: CityType[] = res.map((city) => {
		return {
			id: city._id.toString(),
			name: city.name,
			location: city.location
		};
	});

	return cityData;
}

export async function GET({ url }) {
	const cityName = url.searchParams.get('cityName') || null;

	const cityData = await getCity({ cityName });

	return json(cityData);
}
