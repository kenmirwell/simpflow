import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Redirect, useParams, useRouteMatch } from "react-router-dom";
// import Routes from "config/Routes";

import Dashboard from "components/Dashboard/Dashboard"
import Calendar from "components/Calendar/Calendar"
import Categories from "components/Categories/Categories"
import Account from "components/Account/Account"
import Label from "components/Label/Label"
import Trash from "components/Trash/Trash"
import Settings from "components/Settings/Settings"

import Header from "common/Header/Header"
import Sidebar from "common/Sidebar/Sidebar"
import Login from "components/Login/Login"
import Signup from "components/Signup/Signup"

import { useSelector, useDispatch } from "react-redux"


export default function Main() {

    // const loggedUserRedux = useSelector(state => state.users.loggedUser)

    const loggedUserLocal = JSON.parse(localStorage.getItem("loggedUser"))

    console.log("loggedUserLocal ", loggedUserLocal )

    return (
        <>  
            <div className="main">
                { !loggedUserLocal ? 
                <Routes>
                    <Route exact path="/login" element={ <Login/> }/> 
                    <Route exact path="/sign-up" element={ <Signup/> }/>
                </Routes>
                : 
                <div className="main-content-container">
                    <Sidebar />
                    <div className="main-content">
                        <Header />
                        <div className="content-component">
                                <Routes>
                                    <Route exact path="/" element={ <Dashboard/> }/>
                                    <Route exact path="/calendar" element={ <Calendar/> }/>
                                    <Route exact path="/categories-budget" element={ <Categories/> }/>
                                    <Route exact path="/account-setup" element={ <Account/> }/>
                                    <Route exact path="/label" element={ <Label/> }/>
                                    <Route exact path="/trash" element={ <Trash/> }/>
                                    <Route exact path="/app-settings" element={ <Settings/> }/>
                                </Routes>
                        </div>  
                    </div>
                </div>
                }
            </div>
        </>
    )
}