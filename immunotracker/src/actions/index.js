import axios from "axios";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const REGISTER_POST_START = "REGISTER_POST_START";
export const REGISTER_POST_SUCCESS = "REGISTER_POST_SUCCESS";
export const REGISTER_POST_FAILURE = "REGISTER_POST_FAILURE";

export const logUserIn = user => dispatch => {
	dispatch({ type: LOG_IN_START });
	axios
		.post("API-URL-Here", user)
		.then(res => {
			dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: LOG_IN_FAILURE, payload: err.err });
		});
};

export const registerNewUser = newUser => dispatch => {
	dispatch({ type: REGISTER_POST_START });
	axios
		.post("new-user-api-url-here", newUser)
		.then(res => {
			dispatch({ type: REGISTER_POST_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: REGISTER_POST_FAILURE, payload: err });
		});
};
