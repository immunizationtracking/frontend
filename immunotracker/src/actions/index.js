import axios from "axios";
import { AST_PropAccess } from "terser";

export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const REGISTER_POST_START = "REGISTER_POST_START";
export const REGISTER_POST_SUCCESS = "REGISTER_POST_SUCCESS";
export const REGISTER_POST_FAILURE = "REGISTER_POST_FAILURE";

export const logUserIn = user => dispatch => {
	dispatch({ type: LOG_IN_START });
	return axios
		.post("https://immunization-tracker.herokuapp.com/api/auth/login", user)
		.then(res => {
			localStorage.setItem("token", res.data.token);
			console.log(res);
			dispatch({ type: LOG_IN_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: LOG_IN_FAILURE, payload: err });
		});
};

export const registerNewUser = newUser => dispatch => {
	dispatch({ type: REGISTER_POST_START });
	axios
		.post(
			"https://immunization-tracker.herokuapp.com/api/auth/register",
			newUser
		)
		.then(res => {
			dispatch({ type: REGISTER_POST_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: REGISTER_POST_FAILURE, payload: err });
		});
};

export const LOG_OUT = "LOG_OUT";

export const logUserOut = dispatch => {
	localStorage.removeItem("token").then(() => {
		dispatch({ type: LOG_OUT });
	});
	console.log("test");
};

export const LOAD_PATIENTS_START = "LOAD_PATIENTS_START";
export const LOAD_PATIENTS_SUCCESS = "LOAD_PATIENTS_SUCCESS";
export const LOAD_PATIENTS_FAILURE = "LOAD_PATIENTS_FAILURE";

export const loadPatients = token => dispatch => {
	dispatch({ type: LOAD_PATIENTS_START });
	axios
		.get(`https://immunization-tracker.herokuapp.com/api/patients/`, token)
		.then(res => {
			dispatch({ type: LOAD_PATIENTS_SUCCESS, payload: res.data.patients });
		})
		.catch(err => {
			dispatch({ type: LOAD_PATIENTS_FAILURE, payload: err });
		});
};

export const ADD_PATIENT_START = "ADD_PATIENT_START";
export const ADD_PATIENT_SUCCESS = "ADD_PATIENT_SUCCESS";
export const ADD_PATIENT_FAILURE = "ADD_PATIENT_FAILURE";

export const addPatient = (patient, token) => dispatch => {
	dispatch({ type: ADD_PATIENT_START });
	axios
		.post(
			"https://immunization-tracker.herokuapp.com/api/patients",
			patient,
			token
		)
		.then(res => {
			dispatch({ type: ADD_PATIENT_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: ADD_PATIENT_FAILURE, payload: err });
		});
};

export const REMOVE_PATIENT_START = "REMOVE_PATIENT_START";
export const REMOVE_PATIENT_SUCCESS = "REMOVE_PATIENT_SUCCESS";
export const REMOVE_PATIENT_REFRESH = "REMOVE_PATIENT_REFRESH";
export const REMOVE_PATIENT_REFRESH_FINISHED =
	"REMOVE_PATIENT_REFRESH_FINISHED";
export const REMOVE_PATIENT_FAILURE = "REMOVE_PATIENT_FAILURE";

export const removePatient = (id, token) => dispatch => {
	dispatch({ type: REMOVE_PATIENT_START });
	return axios
		.delete(
			`https://immunization-tracker.herokuapp.com/api/patients/${id}`,
			token
		)
		.then(res => {
			dispatch({ type: REMOVE_PATIENT_SUCCESS, payload: res.data });
		})

		.catch(err => {
			dispatch({ type: REMOVE_PATIENT_FAILURE, payload: err });
		});
};

export const refreshPatients = token => dispatch => {
	axios
		.get(`https://immunization-tracker.herokuapp.com/api/patients/`, token)
		.then(res => {
			dispatch({ type: REMOVE_PATIENT_REFRESH, payload: res.data.patients });
		})
		.then(() => {
			dispatch({ type: REMOVE_PATIENT_REFRESH_FINISHED });
		});
};

// testDoctor

export const GET_VACCINES_START = "GET_VACCINES_START";
export const GET_VACCINES_SUCCESS = "GET_VACCINES_SUCCESS";
export const GET_VACCINES_FAILURE = "GET_VACCINES_FAILURE";

// export const getVaccs = (id, token) => dispatch => {
export const getVaccs = token => dispatch => {
	dispatch({ type: GET_VACCINES_START });
	return (
		axios
			// .get(`https://immunization-tracker.herokuapp.com/api/vaccines/${id}`, token)
			.get(`https://immunization-tracker.herokuapp.com/api/vaccines/`, token)
			.then(res => {
				dispatch({
					type: GET_VACCINES_SUCCESS,
					payload: res.data
				});
			})
			.catch(err => {
				dispatch({ type: GET_VACCINES_FAILURE, payload: err });
			})
	);
};

// Both of the above API calls work, commented out and non commented out.
// Cannot use yet until seed data is posted.

export const GET_DOCTOR_LIST_START = "GET_DOCTOR_LIST_START";
export const GET_DOCTOR_LIST_SUCCESS = "GET_DOCTOR_LIST_SUCCESS";
export const GET_DOCTOR_LIST_FAILURE = "GET_DOCTOR_LIST_FAILURE";

export const getDocs = token => dispatch => {
	dispatch({ type: GET_DOCTOR_LIST_START });
	return axios
		.get("https://immunization-tracker.herokuapp.com/api/practitioner/", token)
		.then(res => {
			dispatch({ type: GET_DOCTOR_LIST_SUCCESS, payload: res.data });
		})
		.catch(err => {
			dispatch({ type: GET_DOCTOR_LIST_FAILURE, payload: err });
		});
};

export const POST_VACCINES_START = "POST_VACCINES_START";
export const POST_VACCINES_SUCCESS = "POST_VACCINES_SUCCESS";
export const POST_VACCINES_FAILURE = "POST_VACCINES_FAILURE";

export const addVaccs = (vaccine, practicioner_id) => dispatch => {
	dispatch({ type: POST_VACCINES_START });
	return axios.get(
		"https://immunization-tracker.herokuapp.com/api/vaccines",
		vaccine,
		practicioner_id
	);
};
