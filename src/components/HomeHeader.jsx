import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import "../sass/homeHeader.scss";

import Nav from "./Nav";

export default function HomeHeader() {
  const { isLogged } = useContext(UserContext);

  const navigate = useNavigate();

  return (
    <div className="hero">
      <span className="hero__img"></span>

      <Nav />

      <div className="hero__main">
        <p>Zacznij pomagać!</p>
        <p>Oddaj niechciane rzeczy w zaufane ręce.</p>
        <span className="hero__main__img"></span>
        <span>
          <button
            className="heroBTN"
            onClick={() => navigate(isLogged ? "/OddajRzeczy" : "/login")}
          >
            {isLogged ? (
              <>
                ODDAJ <br /> RZECZY
              </>
            ) : (
              <>Zaloguj się, aby oddać rzeczy</>
            )}
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
