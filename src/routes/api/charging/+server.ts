import { json } from '@sveltejs/kit';
import type { ChargingStation } from '$lib/types/ChargingStation';
import { chargingStations } from '$lib/data/chargingStations';

async function getStations({
	start = 0,
	end = 10,
	stationId = null
}: {
	start: number;
	end: number;
	stationId: number | null;
}) {
	// simulate delay when retriving the chargingStations with a promise that resolves after 500ms with the chargingStations
	const stationsData = await new Promise<ChargingStation[]>((resolve) =>
		setTimeout(() => resolve(chargingStations), 500)
	);

	if (stationId) {
		const stationsWithId = stationsData.filter((station) => station.id === stationId);
		return stationsWithId.slice(start, end);
	} else {
		return stationsData.slice(start, end);
	}
}

export async function GET({ url }) {
	const start = Number(url.searchParams.get('start')) || 0;
	const end = Number(url.searchParams.get('end')) || 10;
	const stationId = Number(url.searchParams.get('stationId')) || null;

	const stationsData = await getStations({ start, end, stationId });

	return json(stationsData);
}
