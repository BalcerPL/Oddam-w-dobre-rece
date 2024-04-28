import React from "react";
import Nav from "./Nav";

import "../sass/logout.scss";

export default function Logout() {
  return (
    <div className="container">
      <Nav />
      <div className="logoutDiv">
        <h2>
          Wylogowanie nastąpiło <br></br> pomyślnie!
        </h2>
        <span className="line"></span>
        <div className="logoutDiv__buttons">
          <a href="/">
            <button className="logoutBTN">Strona główna</button>
          </a>
        </div>
      </div>
    </div>
  );
}
