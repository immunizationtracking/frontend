const initialState = {
	userLoggingIn = {
		username: '',
		password: ''
	},
	userRegistering = {
		id: '',
		username: '',
		email: '',
		password: '',
		first_name: '',
		last_name: '',
		role: '',
	},

};

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
