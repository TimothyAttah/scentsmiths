import { applyMiddleware, createStore, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from './reducers';

const cartItemsFromStorage = localStorage.getItem('cartItems')
	? JSON.parse(localStorage.getItem('cartItems'))
	: [];

const usersFromStorage = localStorage.getItem('users')
	? JSON.parse(localStorage.getItem('users'))
	: null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
	? JSON.parse(localStorage.getItem('shippingAddress'))
	: {};

const tokenFromStorage = localStorage.getItem('jwt');

const initialState = {
	cart: {
		cartItems: cartItemsFromStorage,
		shippingAddress: shippingAddressFromStorage,
	},
	loginUser: { users: usersFromStorage, token: tokenFromStorage },
};
const middleware = [thunk];

const store = createStore(
	reducers,
	initialState,
	compose(applyMiddleware(...middleware)),
);

export default store;
