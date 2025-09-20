import Product from '../models/productModel.js';

// @desc Get all product
	// @route GET /api/products?
	// @access Public
export const productControllers = {
	getAllProducts: async (req, res) => {
		try {
			const keyword = req.query.keyword ? {
				name: {
					$regex: req.query.keyword,
					$options: 'i'
				}
			}: {}
			const products = await Product.find({...keyword});
			// res.status(401);
			// throw new Error('Not Authorized');
			return res.status(200).json({ msg: 'All products', data: products });
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
				image,
				brand,
				category,
				countInStock,
				// numReviews,
				description,
			} = req.body;

			const product = await Product.findById(req.params.id);

			if (product) {

				product.name = name;
				product.price = price;
				product.image = image;
				product.brand = brand;
				product.category = category;
				product.countInStock = countInStock;
				// product.numReviews = numReviews;
				product.description = description;




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
};
