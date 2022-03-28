import React, { useContext, useEffect, useState } from "react";

// info: need to add 'disable' to checkboxes, 
// add info from checkboxes to api request
// chamge checkboxes colors

export const AuthorizationPage = () => {
 
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
               
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="input-field">
              <input
                
              />
              <label htmlFor="email">Пароль</label>
            </div>
          </div>
          
        </div>
        <div className="card-action">
          <button
           
          >
            Войти
          </button>
          <button
            
          >
            Регистрация
          </button>
        </div>
      </div>
    </div>
  );
};
