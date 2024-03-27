import React from "react"

const Header = (props) => {

    // console.log(Object.keys(props.columns).map(i => props.columns[i].Component("hello")))

    return (
        <div className="header-table">
            <div className="header-table-container">
                {Object.keys(props.columns).map(i => {
                        return (
                            <p>{props.columns[i].header}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Header