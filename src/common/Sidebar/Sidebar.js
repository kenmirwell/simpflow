import React from "react";
import { NavLink } from "react-router-dom";

import Routes from "config/Routes"

const Sidebar = () => {

    const onLogout = () => {
        localStorage.clear()
    }

    return (
        <>
            <div className="sidebar">
                <div className="content-container">
                    <div className="logo">
                        <h5>Simpflow</h5>
                    </div>
                    <div className="navigation">
                        <ul>
                            {
                                Object.keys(Routes).map(k => {
                                    return (
                                        <NavLink to={`${Routes[k].path}`} > 
                                            <li>
                                                {Routes[k].icon}
                                                <span>{Routes[k].title}</span>
                                            </li>
                                        </NavLink>
                                    )
                                })
                            }
                            <a href="#" onClick={onLogout}>Logout</a>
                            {/* {Routes.map((i) => {
                                return (
                                    <NavLink to={`${i.path}` }>
                                        {({ isActive, isPending }) => (
                                            <li>
                                                 {i.icon}
                                                <span>{i.title}</span>
                                            </li>
                                        )}
                                    </NavLink>
                                )
                            })} */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;