import React from "react";

import "../sass/homeHeader.scss";

import Nav from "./Nav";

export default function HomeHeader() {
  return (
    <div className="hero">
      <span className="hero__img"></span>

      <Nav />

      <div className="hero__main">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce.</p>
        <span className="hero__main__img"></span>
        <span>
          <button className="heroBTN">
            <a href="/login">
              ODDAJ <br></br> RZECZY
            </a>
          </button>
          <button className="heroBTN">
            <a href="/register">
              ZORGANIZUJ <br></br> ZBIÓRKĘ
            </a>
          </button>
        </span>
      </div>
    </div>
  );
}
