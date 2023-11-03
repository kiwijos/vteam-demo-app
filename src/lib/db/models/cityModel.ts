import { Schema, model } from 'mongoose';
import { polygonSchema } from './subschemas/polygonSchema';
import type { City as CityType } from '../../types/City';

const citySchema = new Schema<CityType>({
	name: String,
	location: polygonSchema
});

citySchema.index({ location: '2dsphere' });

export const City = model<CityType>('City', citySchema);
