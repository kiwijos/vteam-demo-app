import { Schema } from 'mongoose';
import type { GeoJsonPolygon } from '../../../types/subtypes/GeoJsonPolygon';

export const polygonSchema = new Schema<GeoJsonPolygon>(
	{
		type: {
			type: String,
			enum: ['Polygon'],
			required: true
		},
		coordinates: {
			type: [[[Number]]], // Triple nested array: Array of arrays of arrays of numbers
			required: true
		}
	},
	{ _id: false } // Prevents Mongoose from creating an _id field for this schema
);
