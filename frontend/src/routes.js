import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DoctorPage } from "./pages/DoctorPage";
import { PatientPage } from "./pages/PatientPage";
import { AuthorizationPage } from "./pages/AuthorizationPage";

//  Route.Redirect - старая технология

export const useRoutes = (isAuthenticated, accountType) => {
    if (isAuthenticated) {
        console.log("accountType" ,accountType, "isAuthenticated" ,isAuthenticated)
        if (accountType === true) {
            return (
                <Routes>
                    <Route path="/doctor" exact element={<DoctorPage />} />
                    <Route path="*" element={<Navigate replace to="/doctor/" />} />
                  {/*  <Route path="/patient" element={<Navigate replace to="/doctor/" />} />*/}
                </Routes>
            );
        } else  if (accountType === false) {
            return (
                <Routes>
                    <Route path="/patient" exact element={<PatientPage />} />
                    <Route path="*" element={<Navigate replace to="/patient/" />} />
                    {/*<Route path="/doctor" element={<Navigate replace to="/patient/" />} />*/}
                </Routes>
            );
        }
    }
    return (
        <Routes>
            <Route path="/" exact element={<AuthorizationPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};
