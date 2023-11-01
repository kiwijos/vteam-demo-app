import { json } from '@sveltejs/kit';
import type { ParkingStation } from '$lib/types/ParkingStation';
import { parkingStations } from '$lib/data/parkingStations';

async function getParking({
	start = 0,
	end = 10,
	parkingId = null
}: {
	start: number;
	end: number;
	parkingId: number | null;
}) {
	// simulate delay when retriving the parkingStations with a promise that resolves after 500ms with the parkingStations
	const stationsData = await new Promise<ParkingStation[]>((resolve) =>
		setTimeout(() => resolve(parkingStations), 500)
	);

	if (parkingId) {
		const stationsWithId = stationsData.filter((station) => station.id === parkingId);
		return stationsWithId.slice(start, end);
	} else {
		return stationsData.slice(start, end);
	}
}

export async function GET({ url }) {
	const start = Number(url.searchParams.get('start')) || 0;
	const end = Number(url.searchParams.get('end')) || 10;
	const parkingId = Number(url.searchParams.get('parkingId')) || null;

	const stationsData = await getParking({ start, end, parkingId });

	return json(stationsData);
}
