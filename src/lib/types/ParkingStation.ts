export interface ParkingStation {
	id: number;
	name: string;
	description: string;
	geometry: {
		type: string;
		coordinates: number[][][];
	};
	image: string;
	imageAlt: string;
}
