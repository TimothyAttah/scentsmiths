import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const mongoDB = await mongoose.connect(process.env.MONGO_URI);

		console.log(`MongoDB connected on host: ${mongoDB.connection.host}`);
	} catch (err) {
		console.log(err.message);
	}
};

export default connectDB;