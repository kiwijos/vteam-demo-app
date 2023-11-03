import { json } from '@sveltejs/kit';
import type { ParkingStation as ParkingStationType } from '$lib/types/ParkingStation';
import { ParkingStation } from '$lib/db/models/parkingStationModel';
import { City } from '$lib/db/models/cityModel';
import type { City as CityType } from '$lib/types/City';
import type { ParkingStationResponse } from '$lib/types/ParkingStationResponse';

async function getParkingWithinCity(cityName: string | null): Promise<ParkingStationResponse> {
	const city: CityType | null = await City.findOne({ name: cityName }, 'location');

	if (city === null) {
		return {
			data: null,
			error: "City doesn't exist",
			ok: false
		};
	}

	const stations: ParkingStationType[] | null = await ParkingStation.find()
		.where('location')
		.within(city.location);

	if (stations === null) {
		return {
			data: null,
			error: "Parking station doesn't exist",
			ok: false
		};
	}

	return {
		data: stations,
		error: '',
		ok: true
	};
}

export async function GET({ url }) {
	const cityName = url.searchParams.get('cityName') || null;

	const stations = await getParkingWithinCity(cityName);

	return json(stations);
}
