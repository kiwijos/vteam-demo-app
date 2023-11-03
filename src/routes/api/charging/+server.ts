import { json } from '@sveltejs/kit';
import type { ChargingStation as ChargingStationType } from '$lib/types/ChargingStation';
import { ChargingStation } from '$lib/db/models/chargingStationModel';

async function getCharingStations({ stationId = null }: { stationId: number | null }) {
	let res = [];

	if (stationId) {
		res.push(await ChargingStation.findById(stationId));
	} else {
		res = await ChargingStation.find();
	}

	const stationsData: ChargingStationType[] = res.map((station) => {
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
	const stationId = Number(url.searchParams.get('stationId')) || null;

	const stationsData = await getCharingStations({ stationId });

	return json(stationsData);
}
