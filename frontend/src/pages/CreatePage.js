import React, { useContext, useState } from "react";
import { Questionnaire } from "../components/Questionnaire";
import {Navbar} from "../components/Navbar";
import {ApplicationHelp} from "../components/ApplicationHelp";
import { useNavigate } from "react-router-dom";
import {AuthContext} from '../context/AuthContext'

export const CreatePage = () => {
    const history = useNavigate();
    const auth = useContext(AuthContext)
    const [window,setWindow] = useState(1)

    if (window == 1) {
        return (
                <div className="content-box-create-page">
                    <ul className="navbar-vitae">
                        <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-active">Диагностика</a></li>
                        <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-passive">Мои ресурсы</a></li>
                        <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-passive">Профиль</a></li>
                        <li><a onClick={() => {setWindow(4)}} className="navbar-vitae-a-passive">Справка</a></li>
                    </ul>
                    <Questionnaire auth={auth} history={history}/>
                </div>

        )
    } else if (window == 2) {
        return (
            <div className="content-box-create-page">
                <ul className="navbar-vitae">
                    <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-passive">Диагностика</a></li>
                    <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-active">Мои ресурсы</a></li>
                    <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-passive">Профиль</a></li>
                    <li><a onClick={() => {setWindow(4)}} className="navbar-vitae-a-passive">Справка</a></li>
                </ul>
            </div>
        )
    } else if (window == 3) {
        return (
            <div className="content-box-create-page">
                <ul className="navbar-vitae">
                    <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-passive">Диагностика</a></li>
                    <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-passive">Мои ресурсы</a></li>
                    <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-active">Профиль</a></li>
                    <li><a onClick={() => {setWindow(4)}} className="navbar-vitae-a-passive">Справка</a></li>
                </ul>
            </div>
        )
    } else if (window == 4) {
        return (
            <div className="content-box-create-page">
                <ul className="navbar-vitae">
                    <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-passive">Диагностика</a></li>
                    <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-passive">Мои ресурсы</a></li>
                    <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-passive">Профиль</a></li>
                    <li><a onClick={() => {setWindow(4)}} className="navbar-vitae-a-active">Справка</a></li>
                </ul>
                <ApplicationHelp/>
            </div>
        )
    }
}