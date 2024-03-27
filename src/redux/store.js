import { configureStore } from '@reduxjs/toolkit'
import users from "redux/reducers/user"
import fields from "redux/reducers/fields"


export const store = configureStore({
    reducer: {
        users: users,
        fields: fields
    }
})