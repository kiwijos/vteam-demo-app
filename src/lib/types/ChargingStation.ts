import type { GeoJsonPolygon } from './subtypes/GeoJsonPolygon';

export interface ChargingStation {
	id: string;
	name: string;
	description: string;
	location: GeoJsonPolygon;
}
