import React, {useContext, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import {Questionnaire} from "../components/Questionnaire";
import {ApplicationHelp} from "../components/ApplicationHelp";
import {LogoutText} from "../components/LogoutText";

export const PatientPage = () => {
    const history = useNavigate();
    const auth = useContext(AuthContext)
    const [window,setWindow] = useState(1)
    const [passed, setPassed] = useState(false)
    // Проверка на то прошел ли пользователь уже эти вопросы
    // Взять инфу из бд
    // Надо сделать

    switch (window) {
        case 1:
            if (!passed) {
                return (
                    <div className="content-box-create-page">
                        <ul className="navbar-vitae">
                            <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-black-passive">Диагностика</a></li>
                            <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-white-active">Профиль</a></li>
                            <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-white-active">Справка</a></li>
                            <li><LogoutText/></li>
                        </ul>
                        <Questionnaire auth={auth} history={history} setPassed={setPassed}/>
                    </div>
                )
            } else {
                return (
                    <div className="content-box-create-page">
                        <ul className="navbar-vitae">
                            <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-grey-passive">Диагностика</a></li>
                            <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-black-passive">Профиль</a></li>
                            <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-white-active">Справка</a></li>
                            <li><LogoutText/></li>
                        </ul>
                    </div>
                )
            }
            break;
        case 2:
            if (!passed) {
                return (
                    <div className="content-box-create-page">
                        <ul className="navbar-vitae">
                            <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-white-active">Диагностика</a></li>
                            <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-black-passive">Профиль</a></li>
                            <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-white-active">Справка</a></li>
                            <li><LogoutText/></li>
                        </ul>
                    </div>
                )
            } else {
                return (
                    <div className="content-box-create-page">
                        <ul className="navbar-vitae">
                            <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-grey-passive">Диагностика</a></li>
                            <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-black-passive">Профиль</a></li>
                            <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-white-active">Справка</a></li>
                            <li><LogoutText/></li>
                        </ul>
                    </div>
                )
            }
            break;
        case 3:
            if (!passed) {
                return (
                    <div className="content-box-create-page">
                        <ul className="navbar-vitae">
                            <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-white-active">Диагностика</a></li>
                            <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-white-active">Профиль</a></li>
                            <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-black-passive">Справка</a></li>
                            <li><LogoutText/></li>
                        </ul>
                        <ApplicationHelp/>
                    </div>
                )
            } else {
                return (
                    <div className="content-box-create-page">
                        <ul className="navbar-vitae">
                            <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-grey-passive">Диагностика</a></li>
                            <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-white-active">Профиль</a></li>
                            <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-black-passive">Справка</a></li>
                            <li><LogoutText/></li>
                        </ul>
                        <ApplicationHelp/>
                    </div>
                )
            }
            break;
    }

}