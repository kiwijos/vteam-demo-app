import type { GeoJsonPolygon } from './subtypes/GeoJsonPolygon';

export interface City {
	name: string;
	location: GeoJsonPolygon;
}
