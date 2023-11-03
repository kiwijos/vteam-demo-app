import { Schema, model } from 'mongoose';
import { polygonSchema } from './subschemas/polygonSchema';
import type { ChargingStation } from '../../types/ChargingStation';

const charginStationSchema = new Schema<ChargingStation>({
	name: String,
	description: String,
	location: polygonSchema
});

charginStationSchema.index({ location: '2dsphere' });

export const ChargingStation = model<ChargingStation>('ChargingStation', charginStationSchema);
