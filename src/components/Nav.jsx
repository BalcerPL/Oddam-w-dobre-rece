import React, { useContext } from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";
import NavNotLoggedComponent from "./NavNotLoggedComponent";
import NavLoggedComponent from "./NavLoggedComponent";

import "../sass/nav.scss";

export default function Nav() {
  const { isLogged, setIsLogged } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate("/");
  };

  return (
    <nav className="nav">
      <div>
        {isLogged ? <NavLoggedComponent /> : <NavNotLoggedComponent />}
        <ul>
          <li onClick={handleClickStart}>Start</li>

          <Link to="fourSimpleSteps" smooth="true" duration={700}>
            <li>O co chodzi?</li>
          </Link>

          <Link to="aboutUs" smooth="true" duration={800}>
            <li>O nas</li>
          </Link>

          <Link to="whoWeHelp" smooth="true" duration={800}>
            <li>Fundacje i organizacje</li>
          </Link>

          <Link to="contact" smooth="true" duration={800}>
            <li>Kontakt</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
