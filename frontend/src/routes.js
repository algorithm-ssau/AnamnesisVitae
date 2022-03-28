import React from "react"
import {Redirect, Route, Switch} from 'react-router-dom'
import {CreatePage} from "./pages/CreatePage";
import {DoctorPage} from "./pages/DoctorPage";
import {PatientPage} from "./pages/PatientPage";
import {AuthorizationPage} from "./pages/AuthorizationPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/create">
                    <CreatePage/>
                </Route>
                <Route path="/doctor/:id">
                    <DoctorPage/>
                </Route>
                <Route path="/patient/:id">
                    <PatientPage/>
                </Route>
                <Redirect to="/create"/>
            </Switch>
        )
    }
    return (
        <Switch>
            <Route path="/" exact>
                <AuthorizationPage/>
            </Route>
            <Redirect to="/"/>
        </Switch>
    )
}