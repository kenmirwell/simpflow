import React from "react";
import { startOfMonth, endOfMonth, differenceInDays, add, sub, format, getDate } from "date-fns";


const Cell = (props) => {
    const [activeCell, setActiveCell] = React.useState(null)
    const currentDate = new Date()

    return (
        <>
            <div 
                onClick={e => props.selectDate()} className={`cell-container ${props.class} ${props.dateValue && format(props.dateValue, "yyyy, LLLL") === format(currentDate, "yyyy, LLLL") && props.index === getDate(currentDate) - 1 && "today"} ${props.selectedDate && props.index === props.selectedDate.day - 1 && "active"}`}>
                <span>{props.children}</span>
            </div>
        </>
    )
}

export default Cell;