import React, { useEffect, useContext } from "react";
//
import { GlobalContext } from "../../context/GlobalContext";
//
import "../../sass/step.scss";

export default function Step2() {
  const { bags, setBags } = useContext(GlobalContext);

  const handleSelect = (event) => {
    setBags(event.target.value);
  };

  return (
    <>
      <div className="step">
        <h2>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy: </h2>
        <p>
          Liczba 60l worków:
          <select className="stepSelect" onChange={handleSelect}>
            <option>{bags > 0 ? bags : "- wybierz -"}</option>
            <option className="option" value="1">
              1
            </option>
            <option className="option" value="2">
              2
            </option>
            <option className="option" value="3">
              3
            </option>
            <option className="option" value="4">
              4
            </option>
            <option className="option" value="5">
              5
            </option>
          </select>
        </p>
      </div>
    </>
  );
}
