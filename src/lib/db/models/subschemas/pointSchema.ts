import { Schema } from 'mongoose';
import type { GeoJsonPoint } from '../../../types/subtypes/GeoJsonPoint';

export const pointSchema = new Schema<GeoJsonPoint>(
	{
		type: {
			type: String,
			enum: ['Point'],
			required: true
		},
		coordinates: {
			type: [Number],
			required: true
		}
	},
	{ _id: false } // Prevents Mongoose from creating an _id field for this schema
);
