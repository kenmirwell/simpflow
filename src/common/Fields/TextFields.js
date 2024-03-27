import React from "react"

const TextFields = (props) => {

    return (
        <>
            <div className="field">
                <div className="field-container">
                    <input className={props.error && "error"} 
                        id={props.id}
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={e => props.onChange(e)}
                        message={props.message}
                    />  
                    <span className="error-message">{props.error && "*" + props.error}</span>
                </div>
            </div>
        </>
    )
}

export default TextFields