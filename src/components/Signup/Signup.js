import React from "react"
import TextFields from "common/Fields/TextFields"
import { useSelector, useDispatch } from "react-redux"
import { fields } from "./Config"
import { validate } from "./Validate"
import { setUserFields } from "redux/reducers/user"
import request from "../../config/Api"
import { Link, NavLink, useNavigate } from "react-router-dom";


const Signup = (props) => {
    const field = fields()
    const dispatch = useDispatch()
    const fieldState = useSelector(state => state.users.userFields)
    const navigate = useNavigate()
    
    const onChange = (e) => {
        dispatch(setUserFields({key: e.target.id, value: e.target.value, error: null}))
    }

    const onSubmit = () => {
        validate({fieldState, dispatch, setUserFields})

        const data = {
            firstName: fieldState.firstName.value,
            lastName: fieldState.lastName.value,
            middle: fieldState.middle.value,
            email: fieldState.email.value,
            password: fieldState.password.value,
        }

        if(validate() === 0 || validate() === undefined) {
            request.post("/user", data)
                .then(response => {
                    navigate("/login")
                })

        } else {
            console.log("validate", validate())
            console.log("error")
        }
    }
    
    return (
        <div className="signup">
            <div className="signup-container">
                <div className="content-container">
                    <h5>Signup</h5>
                    <div className="signup-field">
                        {
                            field.map((i, index) => {
                                return (
                                    <TextFields 
                                        key={index}
                                        id={i.id}
                                        type={i.type}
                                        placeholder={i.placeholder}
                                        value={fieldState[i.id] && fieldState[i.id].value}
                                        onChange={ e => onChange(e)}
                                        error={fieldState[i.id] && fieldState[i.id].error}
                                    />
                                )
                            })
                        }
                    </div>
                    <a className="btn button" href="#" onClick={onSubmit}>Signup</a>
                    <Link to="/login">Log in</Link>
                </div>
            </div>
        </div>
    )
}

export default Signup