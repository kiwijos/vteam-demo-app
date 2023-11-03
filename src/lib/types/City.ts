import type { GeoJsonPolygon } from './subtypes/GeoJsonPolygon';

export interface City {
	id: string;
	name: string;
	location: GeoJsonPolygon;
}
