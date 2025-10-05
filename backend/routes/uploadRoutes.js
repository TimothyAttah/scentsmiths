import path from 'path';
import express from 'express';
import multer from 'multer';

// import img1 from '../../frontend/public/images/camera.jpg'

const uploadRouter = express.Router();

// const storage = multer.diskStorage({
// 	destination: function (req, file, cb) {
// 		cb(null, 'uploads/'); // Store files in the 'uploads' folder
// 	},
// 	filename: function (req, file, cb) {
// 		cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
// 	},
// });

// const upload = multer({
// 	storage: storage,
// 	// limits: { fileSize: 1024 * 1024 * 5 }, // 5MB limit
// 	fileFilter: (req, file, cb) => {
// 		const filetypes = /jpeg|jpg|png|gif/;
// 		const mimetype = filetypes.test(file.mimetype);
// 		const extname = filetypes.test(
// 			path.extname(file.originalname).toLowerCase(),
// 		);

// 		if (mimetype && extname) {
// 			return cb(null, true);
// 		}
// 		cb('Error: Images Only!');
// 	},
// });

// uploadRouter.post('/', upload.single('image'), (req, res) => {
// 	if (!req.file) {
// 		return res.status(400).send('No file uploaded.');
// 	}
// 	// File uploaded successfully, you can now save file path to database or perform other actions
// 	res.send('Image uploaded successfully: ' + req.file.filename);
// });

const storage = multer.diskStorage({
	destination(req, file, cb) {
		cb(null, 'uploads/');
		// cb(null, '../../frontend/public/images');
	},
	filename(req, file, cb) {
		cb(
			null,
			`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`,
		);
	},
});

function checkFileType(file, cb) {
	const filetypes = /jpg|jpeg|png/;
	const extname = filetypes.test(
		path.extname(file.originalname).toLocaleLowerCase()
	);
	const mimetype = filetypes.test(file.mimetype);

	if (extname && mimetype) {
		return cb(null, true);
	} else {
		cb('Images only');
	}
}

const upload = multer({
	storage,
	fileFilter: function (req, file, cb) {
		checkFileType(file, cb);
	},
});

uploadRouter.post('/', upload.single('image'), (req, res) => {
	res.send(`/${req.file.path}`);
});

export default uploadRouter;
