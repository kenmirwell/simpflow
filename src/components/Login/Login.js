import React from "react"
import TextFields from "common/Fields/TextFields"
import { useSelector, useDispatch } from "react-redux"
import { setLoggedUser } from "redux/reducers/user"
import { setFields } from "redux/reducers/fields"
import request from "../../config/Api"
import { Link, NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch()
    const loggedUser = useSelector(state => state.users.loggedUser)
    const fields = useSelector(state => state.fields.fields)
    const [fieldsState, setFieldsState] = React.useState({
        email: {value: null, error: null},
        password: {value: null, error: null},
    })

    const onChange = (e) => {
        setFieldsState({
            ...fieldsState,
            [e.target.id]: {
                ...fieldsState[e.target.id],
                value: e.target.value,
                error: null
            }
        })
    }

    const onSubmit = () => {
        if(valid() === 0) {
            /** This code is for coversion of object to string to be able to store in localstorage */
            const user = JSON.stringify(fieldsState)

            /**This code is for storing data to redux */
            // dispatch(setLoggedUser(JSON.parse(user)))

            /**This code is for storing of data to localstorage */
            localStorage.setItem("loggedUser", user);
        } else {
            console.log("error")
        }
    }

    const valid = () => {
        let errorCount  = 0

        /* Dynamic validation for forms */
        for(const key of Object.keys(fieldsState)) {
            if(!fieldsState[key].value) {

                setFieldsState({
                    ...fieldsState,
                    [key]: {
                        ...fieldsState[key],
                        error: "This field must have value!",
                        value: null
                    }
                })

                errorCount++
            }
        }

        if(fieldsState.email.value) {
            const data = {
                email: fieldsState.email.value
            }
            
            request.post("/user-login", data)
                .then(response => {
                    console.log("response", response)
                }).catch(err => {
                    setFieldsState({
                        ...fieldsState,
                        email: {
                            ...fieldsState.email,
                            error: "Invalid email",
                            value: null
                        }
                    })
    
                })
        }

        return errorCount

        /* For reference below is a manual validation code for forms */

        // if(!fieldsState["email"].value) {
        //     errorMessage = "field must have value!"
        //     errorCount++
        // }

        // if(!fieldsState["password"].value) {
        //     errorMessage = "field must have value!"
        //     errorCount++
        // }
        
        // setFieldsState({
        //     ...fieldsState,
        //     [e.target.id]: {
        //         ...fieldsState[e.target.id],
        //         error: errorMessage
        //     }
        // })

        // return errorCount
    }

    return (
        <div className="login">
            <div className="login-container">
                <div className="content-container">
                    <h5>Login</h5>
                    <div className="login-field">
                        <TextFields 
                            id={"email"}
                            type={"text"}
                            placeholder={"email"}
                            value={fieldsState.email.value}
                            onChange={ e => onChange(e)}
                            error={fieldsState.email.error}
                        />
                        <TextFields 
                            id={"password"}
                            type={"password"}
                            placeholder={"password"}
                            value={fieldsState.password.value}
                            onChange={ e => onChange(e)}
                            error={fieldsState.password.error}
                        />
                    </div>
                    <a className="btn button" href="#" onClick={onSubmit}>Log in</a>
                    <Link to="/sign-up">Sign up</Link>
                </div>
            </div>
        </div>
    )
}

export default Login