import mongoose from 'mongoose';
import { ATLAS_USERNAME, ATLAS_PASSWORD } from '$env/static/private';

const uri = `mongodb+srv://${ATLAS_USERNAME}:${ATLAS_PASSWORD}@vteam.phxohrg.mongodb.net/?retryWrites=true&w=majority`;

export const startDb = async () => {
	try {
		await mongoose.connect(uri, { dbName: 'test' });
	} catch (error) {
		console.log('error', error);
	}
};

// Probably won't be used very much
export const stopDb = async () => {
	await mongoose.disconnect();
};
