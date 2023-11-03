import type { GeoJsonPoint } from './subtypes/GeoJsonPoint';

export interface Bike {
	id: string;
	location: GeoJsonPoint;
}
