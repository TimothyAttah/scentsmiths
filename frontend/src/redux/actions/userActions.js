import { USER_TYPES, ORDER_TYPES, CART_TYPES } from '../types';
// import axios from 'axios';

// // const baseURL = 'http://localhost:5000/api/auth';
// const baseURL = 'https://scentsmiths-backend.vercel.app/api/auth';

// const API = axios.create({ baseURL: baseURL });

// API.interceptors.request.use((req) => {
// 	if (localStorage.getItem('jwt')) {
// 		req.headers['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
// 	}

// 	return req;
// });

import * as api from '../api';

export const login = (email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_TYPES.USER_LOGIN_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		// const { data } = await API.post('/login', { email, password }, config);

		const { data } = await api.loginUser(email, password);

		console.log('login>>>', data);

		dispatch({
			type: USER_TYPES.USER_LOGIN_SUCCESS,
			payload: data.data,
		});

		localStorage.setItem('jwt', data.token);
		localStorage.setItem('users', JSON.stringify(data.data));
	} catch (err) {
		dispatch({
			type: USER_TYPES.USER_LOGIN_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem('users');
	dispatch({ type: USER_TYPES.USER_LOGOUT });
	dispatch({ type: USER_TYPES.USER_DETAILS_RESET });
	dispatch({ type: ORDER_TYPES.ORDER_LIST_MY_ORDER_RESET });
	dispatch({ type: USER_TYPES.USER_LIST_RESET });
};

export const register = (name, email, password) => async (dispatch) => {
	try {
		dispatch({
			type: USER_TYPES.USER_REGISTER_REQUEST,
		});

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		// const { data } = await API.post(
		// 	'register',
		// 	{ name, email, password },
		// 	config,
		// );

		const { data } = await api.registerUser({ name, email, password });
		console.log('register>>>', data);

		dispatch({
			type: USER_TYPES.USER_REGISTER_SUCCESS,
			payload: data.data,
		});

		dispatch({
			type: USER_TYPES.USER_LOGIN_SUCCESS,
			payload: data.data,
		});

		localStorage.setItem('jwt', data.token);
		localStorage.setItem('users', JSON.stringify(data.data));
	} catch (err) {
		dispatch({
			type: USER_TYPES.USER_REGISTER_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const getUserDetails = (id) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_TYPES.USER_DETAILS_REQUEST,
		});

		const {
			loginUser: { token },
		} = getState();

		const config = {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};

		// const { data } = await API.get(`/users/${id}`);
		const { data } = await api.getUserDetails(id);

		console.log('user profile>>>', data);

		dispatch({
			type: USER_TYPES.USER_DETAILS_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: USER_TYPES.USER_DETAILS_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
	try {
		dispatch({
			type: USER_TYPES.USER_UPDATE_PROFILE_REQUEST,
		});

		// const {
		// 	loginUser: { users },
		// } = getState();

		// const config = {
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 		Authorization: `Bearer ${token}`,
		// 	},
		// };

		// const { data } = await API.put(`/users/profile`, user);

		const { data } = await api.updateUserProfile(user);

		console.log('user profile update>>>', data);

		dispatch({
			type: USER_TYPES.USER_UPDATE_PROFILE_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: USER_TYPES.USER_UPDATE_PROFILE_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const listUsers = () => async (dispatch) => {
	try {
		dispatch({
			type: USER_TYPES.USER_LIST_REQUEST,
		});

		const { data } = await API.get(`/users`);

		console.log('user profile LIST >>>>>>>>', data);

		dispatch({
			type: USER_TYPES.USER_LIST_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: USER_TYPES.USER_LIST_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const deleteUser = (id) => async (dispatch) => {
	try {
		dispatch({
			type: USER_TYPES.USER_DELETE_REQUEST,
		});

		// const { data } = await API.delete(`/users/${id}/delete`);

		const { data } = await api.deleteUser(id);

		console.log('user delete action >>>>>>>>', data);

		dispatch({
			type: USER_TYPES.USER_DELETE_SUCCESS,
		});
	} catch (err) {
		dispatch({
			type: USER_TYPES.USER_DELETE_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};

export const getUserByIdDetails = (id) => async (dispatch) => {
	try {
		dispatch({
			type: USER_TYPES.USER_GET_BY_ID_REQUEST,
		});

		// const { data } = await API.get(`/users/${id}`);
		const { data } = await api.getUserByIdDetails(id);

		console.log('user by id details>>>', data);

		dispatch({
			type: USER_TYPES.USER_GET_BY_ID_SUCCESS,
			payload: data.data,
		});
	} catch (err) {
		dispatch({
			type: USER_TYPES.USER_GET_BY_ID_FAIL,
			payload:
				err.response && err.response.data.msg
					? err.response.data.msg
					: err.message,
		});
	}
};
