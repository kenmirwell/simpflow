import React from "react"
import Header from "./Header/Header"
import Row from "./Row/Row"

const Table = (props) => {
    return (
        <>
            <Header
                columns={props.columns}
            />
            <Row 
                columns={props.columns}
                list={props.rowData}
            />
        </>
    )
}

export default Table;