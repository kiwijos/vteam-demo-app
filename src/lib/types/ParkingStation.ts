import type { GeoJsonPolygon } from './subtypes/GeoJsonPolygon';

export interface ParkingStation {
	id: string;
	name: string;
	description: string;
	location: GeoJsonPolygon;
}
