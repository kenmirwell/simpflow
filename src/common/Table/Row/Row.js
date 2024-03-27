import React from "react"
import Item from "./Item/Item"

const Row = (props) => {

    return (
        <div className="row-table">
            <div className="row-table-container">
                 {props.list.map((i, index) => {
                      return (
                        <Item
                            columns={props.columns}
                            list={i}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Row;