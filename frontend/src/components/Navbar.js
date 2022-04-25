import React  from "react";
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <ul className="navbar-vitae">
            <li><a className="navbar-vitae-a-active">Диагностика</a></li>
            <li><a className="navbar-vitae-a-passive">Мои ресурсы</a></li>
            <li><a className="navbar-vitae-a-passive">Профиль</a></li>
            <li><a className="navbar-vitae-a-passive">Справка</a></li>
        </ul>

    )
}