import { Schema, model } from 'mongoose';
import { pointSchema } from './subschemas/pointSchema';
import type { Bike } from '../../types/Bike';

const bikeSchema = new Schema<Bike>({
	location: pointSchema
});

bikeSchema.index({ location: '2dsphere' });

export const Bike = model<Bike>('Bike', bikeSchema);
