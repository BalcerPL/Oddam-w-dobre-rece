//IMPORT REACT STUFF
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
//IMPORT COMPONENTS
import Nav from "./Nav";
import Contact from "./Contact";
// IMPORT SASS
import "../sass/oddajRzeczy.scss";

export default function OddajRzeczy() {
  const { isLogged } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/Login");
    }
  }, [isLogged, navigate]);

  return (
    <>
      <div className="container">
        <Nav />
        <span className="oddajRzeczy__img"></span>
        <div className="oddajRzeczy">
          <div className="oddajRzeczy__main">
            <p>
              Oddaj rzeczy których już nie chcesz <br></br> POTRZEBUJĄCYM
            </p>
            <span className="line"></span>
            <p>Wystarczą 4 proste kroki:</p>
            <div className="fourSteps">
              <div className="fourSteps__box">
                <p>1</p>
                <p>
                  Wybierz <br></br> rzeczy
                </p>
              </div>
              <div className="fourSteps__box">
                <p>2</p>
                <p>
                  Spakuj je <br></br>w worki
                </p>
              </div>
              <div className="fourSteps__box">
                <p>3</p>
                <p>
                  Wybierz <br></br> fundację
                </p>
              </div>
              <div className="fourSteps__box">
                <p>4</p>
                <p>
                  Zamów <br></br> kuriera
                </p>
              </div>
            </div>
          </div>
        </div>

        <Contact />
      </div>
    </>
  );
}
