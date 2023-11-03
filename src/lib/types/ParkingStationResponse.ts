import type { ParkingStation } from './ParkingStation';

export interface ParkingStationResponse {
	data: ParkingStation[] | null;
	error: string;
	ok: boolean;
}
