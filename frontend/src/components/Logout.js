import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LogoutI from "../utils/icons/logout.svg";


export const Logout = () => {
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
        <img src={LogoutI} className="logout-icon" onClick={logoutHandler} alt="lohout-label" />
    </div>
  );
};


