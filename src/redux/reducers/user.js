import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loggedUser: { 
        email: {value: null, error: null},
        password: {value: null, error: null},
    },
    userFields: {
        email: {value: null, error: null},
        password: {value: null, error: null},
        middle: {value: null, error: null},
        confirmPassword: {value: null, error: null},
        firstName: {value: null, error: null},
        lastName: {value: null, error: null},
    }
}

const users = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        setLoggedUser: (state, action) => {
            return {
                ...state,
                loggedUser: action.payload
            }
        },
        setUserFields: (state, action) => {
            return {
                ...state,
                userFields: {
                    ...state.userFields,
                    [action.payload.key]: {
                        ...state.userFields[action.payload.key],
                        value: action.payload.value,
                        error: action.payload.error
                    }
                }
            }
        },
    }
});

export const { setLoggedUser } = users.actions;
export const { setUserFields } = users.actions;

export default users.reducer