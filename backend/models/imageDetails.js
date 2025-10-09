import mongoose from 'mongoose';

const ImageDetailsSchema = new mongoose.Schema({
	image: {
		type: String,
	},
	// collection: 'ImageDetails',
});

const Images = mongoose.model('ImageDetails', ImageDetailsSchema);

export default Images;
