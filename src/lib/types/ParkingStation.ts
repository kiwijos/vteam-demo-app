import type { GeoJsonPolygon } from './subtypes/GeoJsonPolygon';

export interface ParkingStation {
	name: string;
	description: string;
	location: GeoJsonPolygon;
}
