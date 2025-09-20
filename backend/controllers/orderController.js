import Order from '../models/orderModel.js';

export const orderControllers = {
	// @desc CREATE NEW ORDER
	// @route POST /api/orders
	// @access PRIVATE
	addOrderItems: async (req, res) => {
		try {
			const {
				orderItems,
				shippingAddress,
				paymentMethod,
				itemsPrice,
				taxPrice,
				shippingPrice,
				totalPrice,
			} = req.body;
			if (orderItems && orderItems.length === 0) {
				return res.status(400).json({ msg: 'No order items' });
			} else {
				
				const order = new Order({
					orderItems,
					shippingAddress,
					paymentMethod,
					itemsPrice,
					taxPrice,
					shippingPrice,
					totalPrice,
				});

				const createdOrder = await order.save();
				return res
					.status(201)
					.json({ msg: 'New order created successfully', data: createdOrder });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc GET ORDER BY ID
	// @route GET /api/orders:id
	// @access PRIVATE
	getOrderItems: async (req, res) => {
		try {
			const order = await Order.findById(req.params.id).populate(
				'user',
				'name email',
			);

			if (order) {
				return res.status(200).json({ msg: 'Your order', data: order });
			} else {
				return res.status(400).json({ msg: 'Your order was not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	updateOrderToPaid: async (req, res) => {
		try {
			const order = await Order.findById(req.params.id);

			if (order) {
				order.isPaid = true;
				order.paidAt = Date.now();
				order.paymentResult = {
					id: req.body.id,
					status: req.body.status,
					update_time: req.body.update_time,
				};
				const updatedOrder = await order.save();

				return res.status(200).json({ msg: 'Your order', data: updatedOrder });
			} else {
				return res.status(400).json({ msg: 'Your order was not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc Update order to delivered
	// @route GET /api/orders/:id/deliver
	// @access PRIVATE/ADMIN
	updateOrderToDelivered: async (req, res) => {
		try {
			const order = await Order.findById(req.params.id);

			if (order) {
				order.isDelivered = true;
				order.deliveredAt = Date.now();

				const updatedOrder = await order.save();

				return res.status(200).json({ msg: 'Your order is delivered', data: updatedOrder });
			} else {
				return res.status(400).json({ msg: 'Your order was not found' });
			}
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc GET logged in user orders
	// @route GET /api/orders/myOrders
	// @access PRIVATE
	getMyOrders: async (req, res) => {
		try {
			const orders = await Order.find({});

			return res.status(200).json({ msg: 'My orders', data: orders });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},

	// @desc GET all orders
	// @route GET /api/orders
	// @access PRIVATE/ADMIN
	getOrders: async (req, res) => {
		try {
			const orders = await Order.find({}).populate('user', 'id name');

			return res.status(200).json({ msg: ' All orders', data: orders });
		} catch (err) {
			return res.status(500).json({ msg: err.message });
		}
	},
};
