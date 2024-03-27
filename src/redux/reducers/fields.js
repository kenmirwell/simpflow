import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fields: {}
}

const fields = createSlice({
    name: "fields",
    initialState: initialState,
    reducers: {
        setFields: (state, action) => {
            return {
                ...state,
                fields: action.payload
            }
        }
    }
});

export const { setFields} = fields.actions;

export default fields.reducer