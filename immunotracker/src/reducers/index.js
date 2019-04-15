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
  ]
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
