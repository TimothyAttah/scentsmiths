import express from 'express';
import { orderControllers } from '../controllers/orderController.js';
import { protect, admin } from '../middleware/auth.js';

const orderRoutes = express.Router();

orderRoutes.post('/create', orderControllers.addOrderItems);

orderRoutes.get('/myorders', orderControllers.getMyOrders);

orderRoutes.get('/:id', orderControllers.getOrderItems);

orderRoutes.put('/:id/pay', orderControllers.updateOrderToPaid);

orderRoutes.put(
	'/:id/deliver',
	protect,
	admin,
	orderControllers.updateOrderToDelivered,
);

orderRoutes.get('/', protect, admin, orderControllers.getOrders);

export default orderRoutes;
