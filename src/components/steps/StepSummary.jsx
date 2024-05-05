import React, { useState } from "react";
//IMPORT COMPONENTS

//IMPORT SASS
import "../../sass/step.scss";

export default function StepSummary() {
  return (
    <>
      <div className="step">
        <h2>Oddajesz:</h2>
        <div className="step4main">
          <div className="step4main__left">
            <p>Ulica:</p>
            <p>Miasto:</p>
            <p>Kod pocztowy:</p>
            <p>Telefon:</p>
          </div>
          <div className="step4main__right">
            <p>Data:</p>
            <p>Godzina:</p>
            <p>Uwagi dla kuriera:</p>
          </div>
        </div>
      </div>
    </>
  );
}
