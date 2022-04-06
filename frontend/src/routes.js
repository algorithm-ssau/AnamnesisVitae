import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import { DoctorPage } from "./pages/DoctorPage";
import { PatientPage } from "./pages/PatientPage";
import { AuthorizationPage } from "./pages/AuthorizationPage";

//  Route.Redirect - старая технология

export const useRoutes = (isAuthenticated) => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/create" element={<CreatePage />} />
                <Route path="/doctor/:id" element={<DoctorPage />} />
                <Route path="/patient/:id" element={<PatientPage />} />
                <Route path="*" element={<Navigate replace to="/create" />} />
            </Routes>
        );
    }
    return (
        <Routes>
            <Route path="/" exact element={<AuthorizationPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    );
};
