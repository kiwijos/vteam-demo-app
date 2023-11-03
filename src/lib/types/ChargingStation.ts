import type { GeoJsonPolygon } from './subtypes/GeoJsonPolygon';

export interface ChargingStation {
	name: string;
	description: string;
	location: GeoJsonPolygon;
}
