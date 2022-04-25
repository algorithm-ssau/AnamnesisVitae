import React from "react";
import { Questionnaire } from "../components/Questionnaire";
import {Navbar} from "../components/Navbar";

export const CreatePage = () => {
return (
    <div className="content-box-create-page">
        <Navbar/>
        <Questionnaire/>
    </div>
)
}