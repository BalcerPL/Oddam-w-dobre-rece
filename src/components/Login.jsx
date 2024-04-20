import React from "react";
import Nav from "./Nav";

import "../sass/login.scss";

export default function Login() {
  return (
    <>
      <div className="container">
        <Nav />
        <div className="loginDiv">
          <h2>Zaloguj się</h2>
          <span className="line"></span>
          <div className="loginDiv__box">
            <p>Email</p>
            <input type="email" className="input__email"></input>
            <p>Hasło</p>
            <input type="password" className="input__pasword"></input>
          </div>
          <div className="loginDiv__buttons">
            <button className="loginBTN">Załóź konto</button>
            <button className="loginBTN">Zaloguj się</button>
          </div>
        </div>
      </div>
    </>
  );
}
