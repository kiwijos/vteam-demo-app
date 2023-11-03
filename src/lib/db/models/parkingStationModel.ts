import { Schema, model } from 'mongoose';
import { polygonSchema } from './subschemas/polygonSchema';
import type { ParkingStation as ParkingStationType } from '../../types/ParkingStation';

const parkingStationSchema = new Schema<ParkingStationType>({
	name: String,
	description: String,
	location: polygonSchema
});

parkingStationSchema.index({ location: '2dsphere' });

export const ParkingStation = model<ParkingStationType>('ParkingStation', parkingStationSchema);
