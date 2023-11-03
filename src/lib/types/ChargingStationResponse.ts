import type { ChargingStation } from './ChargingStation';

export interface ChargingStationResponse {
	data: ChargingStation[] | null;
	error: string;
	ok: boolean;
}
