import { Schema, model } from 'mongoose';
import { polygonSchema } from './subschemas/polygonSchema';
import type { ChargingStation as ChargingStationType } from '../../types/ChargingStation';

const charginStationSchema = new Schema<ChargingStationType>({
	name: String,
	description: String,
	location: polygonSchema
});

charginStationSchema.index({ location: '2dsphere' });

export const ChargingStation = model<ChargingStationType>('ChargingStation', charginStationSchema);
