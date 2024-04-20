import React from "react";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";

import "../sass/nav.scss";

export default function Nav() {
  const navigate = useNavigate();

  const handleClickStart = () => {
    navigate("/");
  };

  return (
    <nav className="nav">
      <div>
        <ul>
          <li>
            <a href="/login">Zaloguj</a>
          </li>
          <li>
            <a href="/register">Załóż konto</a>
          </li>
        </ul>
        <ul>
          <li onClick={handleClickStart}>Start</li>
          <li>
            <Link to="fourSimpleSteps" smooth="true" duration={700}>
              O co chodzi?
            </Link>
          </li>
          <li>
            <Link to="aboutUs" smooth="true" duration={800}>
              O nas
            </Link>
          </li>
          <li>
            <Link to="whoWeHelp" smooth="true" duration={800}>
              Fundacje i organizacje
            </Link>
          </li>
          <li>
            <Link to="contact" smooth="true" duration={800}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
