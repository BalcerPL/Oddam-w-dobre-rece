import React from "react";
import { useNavigate } from "react-router-dom";

import "../sass/fourSimpleSteps.scss";

export default function FourSimpleSteps() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/login");
  };

  return (
    <div className="fourSimpleSteps" id="fourSimpleSteps">
      <div className="fourSimpleSteps__header">
        <h3>Wystarczą 4 proste kroki</h3>
        <span></span>
      </div>

      <div className="fourSimpleSteps__main">
        <div className="fourSimpleSteps__main__step">
          <span className="icon icon__1"></span>
          <p>Wybierz rzeczy</p>
          <span className="fourSimpleSteps__line"></span>
          <p>
            ubrania, zabawki, <br></br> sprzęt, inne
          </p>
          <span></span>
        </div>

        <div className="fourSimpleSteps__main__step">
          <span className="icon icon__2"></span>
          <p>Spakuj je</p>
          <span className="fourSimpleSteps__line"></span>
          <p>
            skorzystaj z <br></br> worków na śmieci
          </p>
          <span></span>
        </div>

        <div className="fourSimpleSteps__main__step">
          <span className="icon icon__3"></span>
          <p>
            Zdecyduj komu <br></br> chcesz pomóc
          </p>
          <span className="fourSimpleSteps__line"></span>
          <p>
            wybierz zaufane <br></br> miejsce
          </p>
          <span></span>
        </div>

        <div className="fourSimpleSteps__main__step">
          <span className="icon icon__4"></span>
          <p>Zamów kuriera</p>
          <span className="fourSimpleSteps__line"></span>
          <p>
            kurier przyjedzie <br></br> w dogodnym terminie
          </p>
        </div>
      </div>

      <div className="fourSimpleSteps__footer">
        <button className="heroBTN" onClick={handleClickLogin}>
          ODDAJ <br></br> RZECZY
        </button>
      </div>
    </div>
  );
}
