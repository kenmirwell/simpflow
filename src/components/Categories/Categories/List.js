import React from "react"
import { getColumns } from "./Config";
import Table from "common/Table/Table"

const List = (props) => {    
    const columns = getColumns()

    return (
        <>  
            <Table 
                columns={columns}
                rowData={props.categoryData}
            />
        </>
    )
}

export default List