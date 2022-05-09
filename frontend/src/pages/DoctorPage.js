import React, {useContext} from "react";
import {useHttp} from "../hooks/http.hook";
import {AuthContext} from "../context/AuthContext";

export const DoctorPage = () => {
    const { request } = useHttp();
    const auth = useContext(AuthContext)

    const patientsHandler = async () => {
        try {
            const patientsRequest = await request(
                "/api/auth/patients",
                "POST",
                {},
                { Authorization: `Bearer ${auth.token}` }
                );
            console.log(patientsRequest.patients)
        } catch (error) {
            console.log(error);
        }
     }

return (
    <div className="doctor-page">
        <h1>Doctor Page</h1>
        <button className="enter-button" onClick={patientsHandler}>Подтвердить</button>
    </div>
)
}