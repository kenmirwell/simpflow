import React from "react"

const YearModal = (props) => {

    return (
        <div className="year-modal">
            <div className="year-modal-container">
                <div className="year-modal-content">
                    {props.years.map((i, index) => {
                        return (
                            <div className="year-button">
                                <p>{i}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="arrows-container">
                    <span class="material-symbols-outlined">
                        arrow_left
                    </span>
                    <span class="material-symbols-outlined">
                        arrow_right
                    </span>
                </div>
            </div>
        </div>
    )
}

export default YearModal