import { Schema, model } from 'mongoose';
import { pointSchema } from './subschemas/pointSchema';
import type { Bike as BikeType } from '../../types/Bike';

const bikeSchema = new Schema<BikeType>({
	location: pointSchema
});

bikeSchema.index({ location: '2dsphere' });

export const Bike = model<BikeType>('Bike', bikeSchema);
