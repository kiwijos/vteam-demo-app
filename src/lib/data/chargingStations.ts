import type { ChargingStation } from '$lib/types/ChargingStation';

export const chargingStations: ChargingStation[] = [
	{
		id: 1,
		name: 'Station 1',
		description: 'Station 1 description',
		geometry: {
			type: 'Polygon',
			coordinates: [
				[
					[16.4467235, 57.2631895],
					[16.4467573, 57.2631085],
					[16.4467573, 57.2631085],
					[16.4468109, 57.2630301],
					[16.4470818, 57.2630388],
					[16.4470362, 57.2631578],
					[16.4469786, 57.2632307],
					[16.4467224, 57.2631897],
					[16.4467224, 57.2631897]
				]
			]
		},
		image: 'Station 1 image',
		imageAlt: 'Station 1 image alt'
	},
	{
		id: 2,
		name: 'Station 2',
		description: 'Station 2 description',
		geometry: {
			type: 'Polygon',
			coordinates: [
				[
					[16.4510691, 57.2641426],
					[16.4516968, 57.264073],
					[16.4517397, 57.2641136],
					[16.4515787, 57.2641368],
					[16.4513159, 57.2641803],
					[16.4513159, 57.2641803],
					[16.4511496, 57.2641977],
					[16.4511496, 57.2641977],
					[16.4510691, 57.2641426],
					[16.4510691, 57.2641426]
				]
			]
		},
		image: 'Station 2 image',
		imageAlt: 'Station 2 image alt'
	}
];
