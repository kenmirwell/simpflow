import React from "react";
import Cell from "./Cell/Cell"
import YearModal from "./YearModal/YearModal"
import { startOfMonth, endOfMonth, differenceInDays, add, sub, format, getDay } from "date-fns";

const CalendarCard = (props) => {
    const [date, setDate] = React.useState(new Date())
    const [selectedYear, setSelectedYear] = React.useState({
        year: null,
        modal: false
    })
    const dateValue = new Date(date)
    const days = ["Sun", "Mon", "tue", "Wed", "Thu", "Fri", "Sat"]

    const [selectedDate, setSelectedDate] = React.useState({})

    const startDate = startOfMonth(dateValue) 
    const endDate = endOfMonth(dateValue) 
    const numDays = differenceInDays(endDate, startDate) + 1
    const prefixDate = startDate.getDay()
    const suffixDate = endDate.getDay()

    const nextMonth = () => {
        setDate(add(dateValue, {months: 1}))

        setSelectedDate({})
    }

    const prevMonth = () => {
        setDate(sub(dateValue, {months: 1}))

        setSelectedDate({})
    }

    const selectDate = (e, date) => {
        const year = parseInt(format(dateValue, "yyyy"))
        const day = date
        const month = parseInt(format(dateValue, "L")) - 1

        setSelectedDate({
            year: year,
            day: day,
            month: month,
            dayOfWeek: getDay(new Date(year, month, day))
        })
    }

    const onModal = () => {
        setSelectedYear({
            ...selectedYear,
            modal: !selectedYear.modal
        })
    }

    const nextyear = () => {
        setDate(add(dateValue, {months: 1}))

        setSelectedDate({})
    }

    const prevyear = () => {
        setDate(sub(dateValue, {months: 1}))

        setSelectedDate({})
    }

    const year = (new Date()). getFullYear(); 
    const years = Array.from(new Array(102),( val, index) => index + ( year - 20 ))

    return (
        <>  
            <div className="calendar-card">
                <div className="component-container">
                   <div className="calendar-content">
                        <div className="year-container">
                            {selectedYear.modal && <YearModal years={years}/>}
                            <div className="year-content">
                                <p>{format(dateValue, "LLLL yyyy")}</p>
                                <span onClick={onModal} class="material-symbols-outlined">
                                    arrow_drop_down
                                </span>
                            </div>
                            <div className="arrows-container">
                                <span onClick={prevMonth} class="material-symbols-outlined">
                                    arrow_left
                                </span>
                                <span onClick={nextMonth} class="material-symbols-outlined">
                                    arrow_right
                                </span>
                            </div>
                        </div>
                        <div className="calendar-days">
                            {days.map(i => {
                                return (
                                    <span>{i}</span>
                                )
                            })}
                        </div>
                        
                        <div className="calendar-columns">
                            {Array.from({length: prefixDate}).map((i, index) => {
                                return (
                                    <Cell key={index} class={"preffix"}/>
                                )
                            })}

                            {Array.from({length: numDays}).map((i, index) => {
                                return (
                                    <Cell 
                                        key={index} 
                                        index={index}
                                        class={"cell"}
                                        selectedDate={selectedDate}
                                        dateValue={dateValue}
                                        selectDate={e => selectDate(e, index + 1)}
                                    >
                                        {index + 1}
                                    </Cell>
                                )
                            })}

                            {/* {Array.from({length: suffixDate}).map((i, index) => {
                                return (
                                    <Cell key={index}/>
                                )
                            })} */}
                        </div>
                   </div>
                </div>  
            </div>
        </>
    )
}

export default CalendarCard;