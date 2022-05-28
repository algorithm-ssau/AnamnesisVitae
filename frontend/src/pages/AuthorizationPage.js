import React, { useContext, useEffect, useState } from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";
import '../styles/AuthorizationPage.css';
// info: need to add 'disable' to checkboxes, 
// add info from checkboxes to api request
// chamge checkboxes colors

export const AuthorizationPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const openTypeDialog = document.getElementById("open-type-dialog")
    const modalContainer = document.getElementById("modal-container")
    const registerButton = document.getElementById("button-reg")
    const contentBox= document.getElementById("content-box");

    openTypeDialog && openTypeDialog.addEventListener("click", () => {
        modalContainer.classList.add("show")
        contentBox.classList.add("modal-open")
    })

    registerButton && registerButton.addEventListener("click", ()=> {
        modalContainer.classList.remove("show")
        contentBox.classList.remove("modal-open")
    })

    const [input, setInput] = useState({
        email: "",
        password: "",
        accountType: true
    });

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const[checked, setChecked] = useState(true)

    const changeHandler = (event) => {
        console.log(input);
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", { ...input });
            auth.login(data.token, data.userId, data.accountType);
        } catch (e) {}
    };

    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/register", "POST", { ...input });
            message(data.message)
            auth.login(data.token, data.userId)
        } catch (e) {}
    };

    return (
        <div id="background">
            <div
              className="modal-container"
              id="modal-container">
              <div className="chooseAccountTipe-text">Выберите тип аккаунта:</div>
              <div className="account-type">
                <label>
                  <input type="checkbox" className="filled-in" checked={checked===false} onChange={async () => {
                      setChecked(false)
                      input.accountType = false
                      await changeHandler
                  }}/>
                    <span className="accountType">Пациент</span>
                </label>
                  <label>
                    <input type="checkbox" className="filled-in" checked={checked===true} onChange={async () => {
                      setChecked(true)
                      input.accountType = true
                      await changeHandler
                  }}/>
                      <span className="accountType">Врач</span>
                  </label>
                </div>
                <button
                    id="button-reg"
                    className="button-reg"
                    onClick={registerHandler}
                    disabled={loading}
                >
                    Регистрация
                </button>
            </div>
        <div id="content-box" className="content-box">
          <div className="">
            <div className="">
              <span className="content-box-text">
                Форма входа для пользователя{" "}
              </span>
              <div className="input-block">
                <div className="input-field">
                  <input
                    placeholder=""
                    id="email"
                    type="text"
                    name="email"
                    className=""
                    value={input.email}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field">
                  <input
                    placeholder=""
                    id="password"
                    type="password"
                    name="password"
                    className=""
                    value={input.password}
                    onChange={changeHandler}
                  />
                  <label htmlFor="email">Пароль</label>
                </div>
              </div>
            </div>
            <div className="card-action">
              <button
                className="button-enter"
                disabled={loading}
                onClick={loginHandler}
              >
                Войти
              </button>
                <button
                    id="open-type-dialog"
                    className="button-reg"
                    disabled={loading}
                >
                    Регистрация
                </button>
            </div>
          </div>
        </div>
        </div>


    );
};
