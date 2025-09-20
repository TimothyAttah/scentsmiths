import { USER_TYPES } from '../types';

export const userLoginReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_TYPES.USER_LOGIN_REQUEST:
			return {
				loading: true,
			};
		case USER_TYPES.USER_LOGIN_SUCCESS:
			return {
				loading: false,
				users: action.payload,
			};
		case USER_TYPES.USER_LOGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_TYPES.USER_LOGOUT:
			return {};
		default:
			return state;
	}
};

export const userRegisterReducer = (state = {}, action) => {
	switch (action.type) {
		case USER_TYPES.USER_REGISTER_REQUEST:
			return {
				loading: true,
			};
		case USER_TYPES.USER_REGISTER_SUCCESS:
			return {
				loading: false,
				users: action.payload,
			};
		case USER_TYPES.USER_REGISTER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const userDetailsReducer = (state = {user: {}}, action) => {
	switch (action.type) {
		case USER_TYPES.USER_DETAILS_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_TYPES.USER_DETAILS_SUCCESS:
			return {
				loading: false,
				user: action.payload,
			};
		case USER_TYPES.USER_DETAILS_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case USER_TYPES.USER_DETAILS_RESET:
			return { user: {} };

		default:
			return state;
	}
};

export const userByIdDetailsReducer = (state = { user: {} }, action) => {
	switch (action.type) {
		case USER_TYPES.USER_GET_BY_ID_REQUEST:
			return {
				...state,
				loading: true,
			};
		case USER_TYPES.USER_GET_BY_ID_SUCCESS:
			return {
				loading: false,
				user: action.payload,
			};
		case USER_TYPES.USER_GET_BY_ID_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const userUpdateProfileReducer = (state = {  }, action) => {
	switch (action.type) {
		case USER_TYPES.USER_UPDATE_PROFILE_REQUEST:
			return {
				loading: true,
			};
		case USER_TYPES.USER_UPDATE_PROFILE_SUCCESS:
			return {
        loading: false,
        success: true,
				users: action.payload,
			};
		case USER_TYPES.USER_UPDATE_PROFILE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export const userListReducer = (state = {users:[]}, action) => {
	switch (action.type) {
		case USER_TYPES.USER_LIST_REQUEST:
			return {
				loading: true,
			};
		case USER_TYPES.USER_LIST_SUCCESS:
			return {
				loading: false,
				users: action.payload,
			};
		case USER_TYPES.USER_LIST_FAIL:
			return {
				loading: false,
				error: action.payload,
			};

		case USER_TYPES.USER_LIST_RESET:
			return {users: []}

		default:
			return state;
	}
};

export const userDeleteReducer = (state = { }, action) => {
	switch (action.type) {
		case USER_TYPES.USER_DELETE_REQUEST:
			return {
				loading: true,
			};
		case USER_TYPES.USER_DELETE_SUCCESS:
			return {
				loading: false,
			success: true
			};
		case USER_TYPES.USER_DELETE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};