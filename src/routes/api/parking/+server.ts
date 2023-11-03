import { json } from '@sveltejs/kit';
import type { ParkingStation as ParkingStationType } from '$lib/types/ParkingStation';
import { ParkingStation } from '$lib/db/models/parkingStationModel';

async function getParkingStations({ stationId = null }: { stationId: string | null }) {
	let res = [];

	if (stationId) {
		res.push(await ParkingStation.findById(stationId));
	} else {
		res = await ParkingStation.find();
	}

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
	const stationId = url.searchParams.get('stationId') || null;

	const stationsData = await getParkingStations({ stationId });

	return json(stationsData);
}
