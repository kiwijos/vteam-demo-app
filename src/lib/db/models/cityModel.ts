import { Schema, model } from 'mongoose';
import { polygonSchema } from './subschemas/polygonSchema';
import type { City } from '../../types/City';

const citySchema = new Schema<City>({
	name: String,
	location: polygonSchema
});

citySchema.index({ location: '2dsphere' });

export const City = model<City>('City', citySchema);
