import axios from 'axios';

// const baseURL = 'http://localhost:5000/api';
export const devBaseURL = 'http://localhost:5000';
export const proBaseURL = 'https://scentsmiths-backend.vercel.app';


const baseURL = 'https://scentsmiths-backend.vercel.app/api';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('jwt')) {
		req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
	}

	return req;
});

export const addTocart = (id) => API.get(`/products/${id}`);

export const createOrder = (order) => API.post(`/orders/create`, order);

export const getOrderDetails = (id) => API.get(`/orders/${id}`);

export const payOrder = (orderId, paymentResult) =>
	API.put(`/orders/${orderId}/pay`, paymentResult);

export const listMyOrders = () => API.get(`/orders/myorders`);

export const listOrders = () => API.get(`/orders`);

export const deliverOrder = (order) =>
	API.put(`/orders/${order._id}/deliver`, {});

export const listProducts = (keyword = '', pageNumber = '') =>
	API.get(`/products?keyword=${keyword}&pageNumber=${pageNumber}`);

export const listProductDetails = (id) => API.get(`/products/${id}`);

export const deleteProduct = (id) => API.delete(`/products/${id}/delete`);

export const createProduct = () => API.post(`/products/create`);

export const topRatedProduct = () => API.get(`/products/top`);

export const productCreateReviews = (productId, review) =>
	API.post(`/products/${productId}/reviews`, review);

export const updateProduct = (product) =>
	API.put(`/products/${product._id}/update`, product);

export const loginUser = (email, password) =>
	API.post('/auth/login', { email, password });

export const registerUser = (name, email, password) =>
	API.post('/auth/register', { name, email, password });

export const getUserDetails = (id) => API.get(`/auth/users/${id}`);

export const updateUserProfile = (user) => API.put(`/auth/users/profile`, user);

export const listUsers = () => API.get(`/auth/users`);

export const deleteUser = (id) => API.delete(`/auth/users/${id}/delete`);

export const getUserByIdDetails = (id) => API.get(`/users/${id}`);
