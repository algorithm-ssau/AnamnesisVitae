import {useNavigate} from "react-router-dom";
import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";

export const LogoutText = () => {
    const history = useNavigate();
    const auth = useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();
        auth.logout();
        console.log("logout event");
        history('/')
    };

    return (
        <div className="logout-component" >
            <a className="navbar-vitae-a-white-active" onClick={logoutHandler}>Выход</a>
        </div>
    );
};
