import express from 'express';
import { authControllers } from '../controllers/authController.js';
import { protect, admin } from '../middleware/auth.js';

const authRoutes = express.Router();

authRoutes.post('/register', authControllers.registerUser);

authRoutes.post('/login', authControllers.loginUser);

authRoutes.get('/users/profile', protect, authControllers.getUserProfile);

authRoutes.put('/users/profile', protect, authControllers.updateUserProfile);

authRoutes.get('/users', protect, admin, authControllers.getAllUsers);

authRoutes.delete(
	'/users/:id/delete',
	protect,
	admin,
	authControllers.deleteUser,
);

authRoutes.get('/users/:id', protect, admin, authControllers.getUserById);

authRoutes.put('/users/:id', protect, admin, authControllers.updateUser);


export default authRoutes;
