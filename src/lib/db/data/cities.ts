import type { City } from '../../types/City';

export const cities: City[] = [
	{
		name: 'Oskarshamn',
		location: {
			type: 'Polygon', // GeoJSON type
			coordinates: [
				[
					[16.4234514, 57.2644603],
					[16.4234514, 57.2644603],
					[16.4435357, 57.236044],
					[16.4435357, 57.236044],
					[16.5001574, 57.2470944],
					[16.5001574, 57.2470944],
					[16.4792876, 57.2791139],
					[16.4513322, 57.2801812],
					[16.4234514, 57.2644603]
				]
			]
		}
	},
	{
		name: 'Vimmerby',
		location: {
			type: 'Polygon', // GeoJSON type
			coordinates: [
				[
					[15.8419756, 57.6845119],
					[15.8411615, 57.6664982],
					[15.849357, 57.6499911],
					[15.849357, 57.6499911],
					[15.8921007, 57.662022],
					[15.8921007, 57.662022],
					[15.8771662, 57.6826765],
					[15.8771662, 57.6826765],
					[15.8419756, 57.6845119],
					[15.8419756, 57.6845119]
				]
			]
		}
	}
];
