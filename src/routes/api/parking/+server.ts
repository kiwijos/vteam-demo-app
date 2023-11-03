import { json } from '@sveltejs/kit';
import type { ParkingStation as ParkingStationType } from '$lib/types/ParkingStation';
import { ParkingStation } from '$lib/db/models/parkingStationModel';
import type { ParkingStationResponse } from '$lib/types/ParkingStationResponse';

async function getParkingStations(id: string | null): Promise<ParkingStationResponse> {
	const res: ParkingStationType[] | null = await ParkingStation.find(id ? { _id: id } : {});

	if (res === null) {
		return {
			data: null,
			error: "Parking station doesn't exist",
			ok: false
		};
	}

	return {
		data: res,
		error: '',
		ok: true
	};
}

export async function GET({ url }) {
	const id = url.searchParams.get('stationId') || null;

	const stationsData = await getParkingStations(id);

	return json(stationsData);
}
