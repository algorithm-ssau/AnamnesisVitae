import React, {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/AuthContext";
import { ResultsView } from "../components/ResultsView";
import {ApplicationHelp} from "../components/ApplicationHelp";
import { LogoutText } from "../components/LogoutText";
import { useHttp } from "../hooks/http.hook";

const defaulrPatientList = [
    {
      name: " ",
      answers: [0,0,0,0,0],
    },
  ]

export const DoctorPage = () => {
const auth = useContext(AuthContext)
    const [window, setWindow] = useState(1)
    const [patientList, setPatientList] = useState(null)
    const { request } = useHttp();
    const getPatients = async () => {
    try {
        const patients = await request(
            "/api/auth/patients",
            "POST",
            {},
            { Authorization: `Bearer ${auth.token}` }
        );
        return patients
    } catch (error) {
        return null
    }
    }

    const lupa = async () => {
        try {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '/about');
            xhr.send();
            console.log(xhr)
            if (xhr.status != 200) {
                // обработать ошибку
                alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
            } else {
                // вывести результат
                alert( xhr.responseText ); // responseText -- текст ответа.
            }
        } catch (error) {
            return null
        }
        }

    
    useEffect(() => {
        if (window === 1)
        {
            getPatients().then((v) => {
               
                if (v!==null)  setPatientList(v)
            })
        }
    }, [window])

switch (window) {
    case 1:
            return (
                <div className="content-box-create-page">
                    <ul className="navbar-vitae">
                        <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-black-passive">Результаты</a></li>
                        <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-white-active">Профиль</a></li>
                        <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-white-active">Справка</a></li>
                        <li><a href="http://localhost:8080/about" className="navbar-vitae-a-white-active">Статистика</a></li>
                        <li><LogoutText/></li>
                    </ul>
                    { patientList && <ResultsView patients={patientList}/> }
                </div>
            )
        break;
    case 2:
       
            return (
                <div className="content-box-create-page">
                    <ul className="navbar-vitae">
                        <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-white-active">Результаты</a></li>
                        <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-black-passive">Профиль</a></li>
                        <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-white-active">Справка</a></li>
                        <li><a href="http://localhost:8080/about" className="navbar-vitae-a-white-active">Статистика</a></li>
                        <li><LogoutText/></li>
                    </ul>
                </div>
            )
       
        break;
    case 3:
       
            return (
                <div className="content-box-create-page">
                    <ul className="navbar-vitae">
                        <li><a onClick={() => {setWindow(1)}} className="navbar-vitae-a-white-active">Результаты</a></li>
                        <li><a onClick={() => {setWindow(2)}} className="navbar-vitae-a-white-active">Профиль</a></li>
                        <li><a onClick={() => {setWindow(3)}} className="navbar-vitae-a-black-passive">Справка</a></li>
                        <li><a href="http://localhost:8080/about" className="navbar-vitae-a-white-active">Статистика</a></li>
                        <li><LogoutText/></li>
                    </ul>
                    <ApplicationHelp/>
                </div>
            )
       
        break;
}
}

       
 
