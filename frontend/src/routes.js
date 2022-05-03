import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { DoctorPage } from "./pages/DoctorPage";
import { PatientPage } from "./pages/PatientPage";
import { AuthorizationPage } from "./pages/AuthorizationPage";

//  Route.Redirect - старая технология

export const useRoutes = (isAuthenticated) => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/doctor" exact element={<DoctorPage />} />
                <Route path="/patient" exact element={<PatientPage />} />
                <Route path="/" element={<Navigate replace to="/patient/" />} />
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path="/" exact element={<AuthorizationPage />} />
            <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
    );
};
