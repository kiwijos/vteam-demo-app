import { json } from '@sveltejs/kit';
import type { ParkingStation as ParkingStationType } from '$lib/types/ParkingStation';
import { ParkingStation } from '$lib/db/models/parkingStationModel';
import { City } from '$lib/db/models/cityModel';

async function getParkingWithinCity({ cityName = null }: { cityName: string | null }) {
	const city = await City.findOne({ name: cityName }, 'location');

	const res = await ParkingStation.find().where('location').within(city.location);

	const stationsData: ParkingStationType[] = res.map((station) => {
		return {
			id: station._id.toString(),
			name: station.name,
			description: station.description,
			location: station.location
		};
	});

	return stationsData;
}

export async function GET({ url }) {
	const cityName = url.searchParams.get('cityName') || null;

	const stationsData = await getParkingWithinCity({ cityName });

	return json(stationsData);
}
