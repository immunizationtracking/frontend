import {
	LOG_IN_START,
	LOG_IN_SUCCESS,
	LOG_IN_FAILURE,
	REGISTER_POST_START,
	REGISTER_POST_SUCCESS,
	REGISTER_POST_FAILURE
} from "../actions";

const initialState = {
	userLoggingIn: {
		username: "",
		password: ""
	},
	userRegistering: {
		id: "",
		username: "",
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		role: ""
	},

	dummyUsers: [
		{
			name: "",
			date_of_birth: "",
			MRN: "",
			gender: ""
		},
		{
			name: "",
			date_of_birth: "",
			MRN: "",
			gender: ""
		},
		{
			name: "",
			date_of_birth: "",
			MRN: "",
			gender: ""
		}
	],
	isRegistered: "",
	isRegistering: "",
	wasRegisterSuccesful: "",
	registerErrMsg: "",
	registerSuccessMsg: "",
	currentUser: ""
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_START:
			return {
				...state,
				isLoggingIn: true
			};
		case REGISTER_POST_START:
			return {
				...state,
				isRegistered: false,
				isRegistering: true
			};
		case REGISTER_POST_SUCCESS:
			return {
				...state,
				isRegistered: true,
				isRegistering: false,
				wasRegisterSuccesful: true,
				registerSuccessMsg: "Success!",
				currentUser: action.payload
			};
		case REGISTER_POST_FAILURE:
			return {
				...state,
				isRegistered: false,
				isRegistering: false,
				wasRegisterSuccesful: false,
				registerErrMsg: action.payload
			};
		default:
			return state;
	}
};
