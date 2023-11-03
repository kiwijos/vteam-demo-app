import type { City } from './City';

export interface CityResponse {
	data: City[] | null;
	error: string;
	ok: boolean;
}
