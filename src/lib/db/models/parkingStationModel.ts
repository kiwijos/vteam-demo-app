import { Schema, model } from 'mongoose';
import { polygonSchema } from './subschemas/polygonSchema';
import type { ParkingStation } from '../../types/ParkingStation';

const parkingStationSchema = new Schema<ParkingStation>({
	name: String,
	description: String,
	location: polygonSchema
});

parkingStationSchema.index({ location: '2dsphere' });

export const ParkingStation = model<ParkingStation>('ParkingStation', parkingStationSchema);
