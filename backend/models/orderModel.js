import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
	{
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
		orderItems: [
			{
				name: { type: String, required: true },
				qty: { type: Number, required: true },
				image: { type: String, required: true },
				price: { type: Number, required: true },
				product: {
					type: mongoose.Schema.Types.ObjectId,

					ref: 'Product',
				},
			},
		],
		shippingAddress: {
			fullName: { type: String, required: true },
			phoneNumber: { type: String, required: true },
			email: { type: String, required: true },
			address: { type: String, required: true },
			country: { type: String, required: true },
			state: { type: String, required: true },
			city: { type: String },
			
			// postalCode: { type: String, required: true },
		},
		paymentMethod: {
			type: String,
		},
		paymentResult: {
			id: { type: String },
			status: { type: String },
			update_time: { type: String },
		},
		// taxPrice: {
		// 	type: Number,
		// 	required: true,
		// 	default: 0.0,
		// }, // email_address: { type: String },

		shippingPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		itemsPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		totalPrice: {
			type: Number,
			required: true,
			default: 0.0,
		},
		isPaid: {
			type: Boolean,
			required: true,
			default: false,
		},
		paidAt: {
			type: Date,
		},
		isDelivered: {
			type: Boolean,
			required: true,
			default: false,
		},
		deliveredAt: {
			type: Date,
		},
	},
	{ timestamps: true },
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
