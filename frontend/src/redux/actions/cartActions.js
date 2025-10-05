import { CART_TYPES } from '../types';

// import axios from 'axios';

// // const baseURL = 'http://localhost:5000/api/products';
// const baseURL = 'https://scentsmiths-backend.vercel.app/api/products';

// const API = axios.create({ baseURL: baseURL });

// API.interceptors.request.use((req) => {
// 	if (localStorage.getItem('jwt')) {
// 		req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
// 	}

// 	return req;
// });

import * as api from '../api'


export const addToCart = (id, qty) => async (dispatch, getState) => {

	// const { data } = await axios.get(
	// 	`https://scentsmiths-backend.vercel.app/api/products/${id}`,
	// );

	// const { data } = await API.get(	`/${id}`);
	const { data } = await api.addTocart(id);


	dispatch({
		type: CART_TYPES.CART_ADD_ITEM,
		payload: {
			product: data.data._id,
			name: data.data.name,
			image: data.data.image,
			price: data.data.price,
			countInStock: data.data.countInStock,
			qty,
		},
	});

	console.log('cart items >>>>>', data.data);

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));

};

export const removeFromCart = (id) => (dispatch, getState) => {
	dispatch({
		type: CART_TYPES.CART_REMOVE_ITEM,
		payload: id,
	});

	localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {

	dispatch({
		type: CART_TYPES.CART_SAVE_SHIPPING_ADDRESS,
		payload: data,
	});

	localStorage.setItem('shippingAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
	dispatch({
		type: CART_TYPES.CART_SAVE_PAYMENT_METHOD,
		payload: data,
	});

	localStorage.setItem('paymentMethod', JSON.stringify(data));
};
