import type { ParkingStation } from '../../types';

export const parkingStations: ParkingStation[] = [
	{
		name: 'Skeppsbron',
		description: 'Skeppsbron',
		location: {
			type: 'Polygon', // GeoJSON type
			coordinates: [
				[
					[16.4533808, 57.2660168],
					[16.4535015, 57.2658587],
					[16.4541801, 57.2659762],
					[16.4540605, 57.2661379],
					[16.4533808, 57.2660168]
				]
			]
		}
	},
	{
		name: 'Kulturhuset',
		description: 'Kulturhuset',
		location: {
			type: 'Polygon', // GeoJSON type
			coordinates: [
				[
					[16.4467236, 57.2632141],
					[16.4467947, 57.263006],
					[16.4471166, 57.2630299],
					[16.4470477, 57.263307],
					[16.4467236, 57.2632141]
				]
			]
		}
	},
	{
		name: 'Oscarsgymnasiet',
		description: 'Osacarsgymnasiet',
		location: {
			type: 'Polygon', // GeoJSON type
			coordinates: [
				[
					[16.4428908, 57.2569634],
					[16.4434111, 57.2564789],
					[16.4441568, 57.2567023],
					[16.4428908, 57.2569634]
				]
			]
		}
	}
];
