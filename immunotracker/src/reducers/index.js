import {
	LOG_IN_START,
	LOG_IN_SUCCESS,
	LOG_IN_FAILURE,
	REGISTER_POST_START,
	REGISTER_POST_SUCCESS,
	REGISTER_POST_FAILURE,
	LOG_OUT,
	LOAD_PATIENTS_START,
	LOAD_PATIENTS_SUCCESS,
	LOAD_PATIENTS_FAILURE,
	ADD_PATIENT_START,
	ADD_PATIENT_SUCCESS,
	ADD_PATIENT_FAILURE
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
	currentUser: "",
	isLoggedIn: false,
	isLoggedOut: true,
	patients: [],
	patientsLoaded: false,
	addingPatient: false,
	addingPatientFinished: true
};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOG_IN_START:
			return {
				...state,
				isLoggingIn: true
			};
		case LOG_IN_SUCCESS:
			return {
				...state,
				isLoggedIn: true,
				isLoggedOut: false
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
		case LOG_OUT:
			return {
				...state,
				isLoggedIn: false,
				isLoggedOut: true
			};
		case LOAD_PATIENTS_START:
			return {};
		case LOAD_PATIENTS_SUCCESS:
			return {
				...state,
				patients: action.payload,
				patientsLoaded: true
			};
		case ADD_PATIENT_START:
			return {
				patientsLoaded: false,
				addingPatient: true,
				addingPatientFinished: false,
				patientsLoaded: false
			};
		case ADD_PATIENT_SUCCESS:
			return {
				...state,
				patients: action.payload,

				addingPatient: false,
				addingPatientFinished: true,
				patientsLoaded: true
			};
		default:
			return state;
	}
};
