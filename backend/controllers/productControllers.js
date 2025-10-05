import Product from '../models/productModel.js';

// @desc Get all product
// @route GET /api/products?
// @access Public
export const productControllers = {
	getAllProducts: async (req, res) => {
		try {
			const pageSize = 2;
			const page = Number(req.query.pageNumber) || 1;
			const keyword = req.query.keyword
				? {
						name: {
							$regex: req.query.keyword,
							$options: 'i',
						},
				  }
				: {};

			const count = await Product.countDocuments({ ...keyword });
			const products = await Product.find({ ...keyword })
				.limit(pageSize)
				.skip(pageSize * (page - 1));
			// res.status(401);
			// throw new Error('Not Authorized');
			return res.status(200).json({
				msg: 'All products',
				// data: products,
				products,
				page,
				pages: Math.ceil(count / pageSize),
			});
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
	getOneProduct: async (req, res) => {
		try {
			// const product = await Product.find((p) => p._id === req.params.id);

			const product = await Product.findById(req.params.id);

			if (product) {
				return res.status(200).json({ msg: 'One product', data: product });
			} else {
				return res.status(404).json({ msg: 'Product not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Delete a product
	// @route Delete /api/products/:id
	// @access Private/Admin
	deleteProduct: async (req, res) => {
		try {
			const product = await Product.findByIdAndDelete(req.params.id);

			if (product) {
				return res
					.status(200)
					.json({ msg: 'Delete product was successful', data: product });
			} else {
				return res.status(404).json({ msg: 'Product not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Create a product
	// @route POST /api/products/create
	// @access Private/Admin
	createProduct: async (req, res) => {
		try {
			const product = new Product({
				name: 'Sample name',
				price: 0,
				user: req.user._id,
				image: '/images/airpods.jpg',
				brand: 'Sample brand',
				category: 'Sample category',
				countInStock: 0,
				numReviews: 0,
				description: 'Sample description',
			});

			const createdProduct = await product.save();
			return res
				.status(201)
				.json({ msg: 'Product created successfully', data: createdProduct });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Update a product
	// @route PUT /api/products/:id
	// @access Private/Admin
	updateProduct: async (req, res) => {
		try {
			const {
				name,
				price,
				description,
				image,
				brand,
				category,
				countInStock,
				// numReviews,
			} = req.body;

			const product = await Product.findById(req.params.id);

			if (product) {
				product.name = name;
				product.price = price;
				product.description = description;
				product.image = image;
				product.brand = brand;
				product.category = category;
				product.countInStock = countInStock;
				// product.numReviews = numReviews;

				const updatedProduct = await product.save();
				return res
					.status(200)
					.json({ msg: 'Product updated successfully', data: updatedProduct });
			} else {
				return res.status(404).json({ msg: 'Product not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Create new review
	// @route POST /api/products/:id/reviews
	// @access Private
	createProductReview: async (req, res) => {
		try {
			const { name, rating, comment } = req.body;
			const product = await Product.findById(req.params.id);

			if (product) {
				const alreadyReviewed = product.reviews.find(r => r.user.toString() === req.user._id.toString());

				if (alreadyReviewed)
				{
					return res.status(404).json({ msg: 'Product already reviewed' });
				}

				const review = {
					name: req.user.name,
					rating: Number(rating),
					comment,
					user: req.user._id
				};

				product.reviews.push(review);
				product.numReviews = product.reviews.length;
				product.rating =
					product.reviews.reduce((acc, item) => item.rating + acc, 0) /
					product.reviews.length;

				await product.save();

				return res
					.status(201)
					.json({ msg: 'Review added successfully', data: product });
			} else {
				return res.status(404).json({ msg: 'Product not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Get top rated products
	// @route GET /api/products/top
	// @access Public
	getTopProducts: async (req, res) => {
		try {
			const products = await Product.find({}).sort({ rating: -1 }).limit(3);

			return res.status(200).json({ msg: 'Got Top Products ', data: products });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
};
