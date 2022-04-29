import React, { useContext } from "react";
import { Questionnaire } from "../components/Questionnaire";
import {Navbar} from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'

export const CreatePage = () => {
    const history = useNavigate();
    const auth = useContext(AuthContext)
return (
    <div className="content-box-create-page">
        <Navbar/>
        <Questionnaire auth={auth} history={history}/>
    </div>
)
}