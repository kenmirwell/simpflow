import React from "react"

const Item = (props) => {
    return (
        <div className="item-container">
             { Object.keys(props.columns).map((i, index) => {
                    return (
                        <div className="item">
                            <p>{props.columns[i].Component(props.list)}</p>
                        </div>
                    )
                })}
        </div>
    )
}

export default Item