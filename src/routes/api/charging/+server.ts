import { json } from '@sveltejs/kit';
import type { ChargingStation as ChargingStationType } from '$lib/types/ChargingStation';
import { ChargingStation } from '$lib/db/models/chargingStationModel';
import type { ChargingStationResponse } from '$lib/types/ChargingStationResponse';

async function getChargingStations(id: string | null): Promise<ChargingStationResponse> {
	const stations: ChargingStationType[] | null = await ChargingStation.find(id ? { _id: id } : {});

	if (stations === null) {
		return {
			data: null,
			error: "Charging station doesn't exist",
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
	const id = url.searchParams.get('stationId') || null;

	const stations = await getChargingStations(id);

	return json(stations);
}
