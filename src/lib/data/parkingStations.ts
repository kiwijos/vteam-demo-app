import type { ParkingStation } from '$lib/types/ParkingStation';

export const parkingStations: ParkingStation[] = [
	{
		id: 1,
		name: 'Station 1',
		description: 'Station 1 description',
		geometry: {
			type: 'Polygon',
			coordinates: [
				[
					[16.4428593, 57.2569655],
					[16.4428593, 57.2569655],
					[16.4430525, 57.2567624],
					[16.4430525, 57.2567624],
					[16.4436157, 57.2568088],
					[16.4436157, 57.2568059],
					[16.4428593, 57.2569655]
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
					[16.4473498, 57.265854],
					[16.4469046, 57.2657235],
					[16.4469046, 57.2657235],
					[16.4470441, 57.2656075],
					[16.4470441, 57.2656075],
					[16.4472694, 57.2656742],
					[16.4472694, 57.2656742],
					[16.447264, 57.2657438],
					[16.447264, 57.2657438],
					[16.4473981, 57.2657989],
					[16.4473981, 57.2657989],
					[16.4473498, 57.265854],
					[16.4473498, 57.265854]
				]
			]
		},
		image: 'Station 2 image',
		imageAlt: 'Station 2 image alt'
	}
];
