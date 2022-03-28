import React, { useContext, useEffect, useState } from "react";
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/message.hook";
import {AuthContext} from "../context/AuthContext";

// info: need to add 'disable' to checkboxes, 
// add info from checkboxes to api request
// chamge checkboxes colors

export const AuthorizationPage = () => {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()

    const [input, setInput] = useState({
        email: "",
        password: "",
        accountType: ""
    });

    useEffect( () => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const changeHandler = (event) => {
        console.log(input);
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const changeType = (event) => {
        console.log(input);
        setInput({ ...input, accountType: event});
    };

    const loginHandler = async () => {
        try {
            const data = await request("/api/auth/login", "POST", { ...form });
            message(data.message)
            auth.login(data.token, data.userId);
        } catch (e) {}
    };

    const registerHandler = async () => {
        try {
            const data = await request("/api/auth/registration", "POST", { ...form });
            auth.login(data.token, data.userId)
        } catch (e) {}
    };

    return (
        <div className="content-box">
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
              {/* <div className="account-type">
                <label>
                  <input type="checkbox" class="filled-in" checked="checked" />
                  <span>Пациент</span>
                </label>
                <label>
                  <input type="checkbox" class="filled-in" checked="checked" />
                  <span>Врач</span>
                </label>
              </div> */}
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
                className="button-reg"
                onClick={registerHandler}
                disabled={loading}
              >
                Регистрация
              </button>
            </div>
          </div>
        </div>
      );
};
