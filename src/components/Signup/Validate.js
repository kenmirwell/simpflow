import React from "react"

export const validate = (params) => {
    let errorCount  = 0

    if(params){
        const field = params.fieldState
        const dispatch = params.dispatch
        const setFields = params.setUserFields
        const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        for(const key of Object.keys(field)) {
            if(!field[key].value) {
                dispatch(setFields({
                    key: key, 
                    error: "This field must have value", 
                    value: null
                }))

                errorCount++
            }
        }

        if(field.password.value && field.confirmPassword.value) {
            if(field.password.value !== field.confirmPassword.value) {
                dispatch(setFields({
                    key: "confirmPassword", 
                    error: "Must be the same with your password", 
                    value: null
                }))
                
                errorCount++
            } else {
                dispatch(setFields({
                    key: "confirmPassword", 
                    error: null, 
                    value: field.confirmPassword.value
                }))
            }
        }

        if(field.email.value) {
            if(!field.email.value.match(emailFormat)){
                dispatch(setFields({
                    key: "email", 
                    error: "invalid email", 
                    value: null
                }))

                console.log("3")
                errorCount++
            }
        }

        return errorCount
    } 
    
}