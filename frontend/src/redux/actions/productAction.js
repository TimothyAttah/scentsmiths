import { PRODUCT_TYPES } from '../types';
import axios from 'axios';

const baseURL = 'http://localhost:5000/api/products';
// const baseURL = 'https://smartsmith-backend.vercel.app/api/products';

const API = axios.create({ baseURL: baseURL });

API.interceptors.request.use((req) => {
	if (localStorage.getItem('jwt')) {
		req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
	}

	return req;
});

export const listProducts = (keyword = '') => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_LIST_REQUEST,
		});

		// const { data } = await axios.get('https://smartsmith-backend.vercel.app/api/products');

		const { data } = await API.get(`?keyword=${keyword}`);
		console.log('data>>>>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_LIST_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		console.log(err.message);
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_LIST_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const listProductDetails = (id) => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DETAILS_REQUEST,
		});

		// const { data } = await axios.get(
		// 	`https://smartsmith-backend.vercel.app/api/products/${id}`,
		// );

		const { data } = await API.get(`/${id}`);

		console.log('datails data>>>>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DETAILS_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		console.log(err.message);
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DETAILS_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const deleteProduct = (id) => async (dispatch) => {
	try {
		dispatch({
			type:PRODUCT_TYPES.PRODUCT_DELETE_REQUEST,
		});
		const { data } = await API.delete(`/${id}/delete`);

		console.log('products delete action >>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DELETE_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_DELETE_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const createProduct = () => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_CREATE_REQUEST,
		});
		const { data } = await API.post(`/create`);

		console.log('products create action >>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_CREATE_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_CREATE_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const updateProduct = (product) => async (dispatch) => {
	try {
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_UPDATE_REQUEST,
		});
		const { data } = await API.put(`/${product?._id}/update`, product);

		console.log('products UPDATE action >>>', data);

		dispatch({
			type: PRODUCT_TYPES.PRODUCT_UPDATE_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: PRODUCT_TYPES.PRODUCT_UPDATE_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

