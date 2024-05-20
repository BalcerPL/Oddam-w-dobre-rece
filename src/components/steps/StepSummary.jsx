//IMPORT REACT
import React, { useContext } from "react";
//IMPORT SUPABASE
import supabase from "../supabase/supabaseClient";
//IMPORT CONTEXT
import { GlobalContext } from "../../context/GlobalContext";
//IMPORT COMPONENTS

//IMPORT SASS
import "../../sass/stepSummary.scss";

export default function StepSummary() {
  const { bags, choice, localization, helpGroups, formData, notes } =
    useContext(GlobalContext);

  function formatKey(key) {
    if (key === "samotnymMatkom") {
      return "samotnym matkom";
    }
    if (key === "osobomStarszym") {
      return "osobom starszym";
    } else return key;
  }

  const trueHelpGroups = Object.entries(helpGroups)
    .filter(([key, value]) => value)
    .map(([key, value]) => <p key={key}>{formatKey(key)},</p>);

  return (
    <>
      <div className="stepSummary">
        <h2>Oddajesz:</h2>
        <div className="stepSummary__top">
          <div>
            <span className="firstSpan"></span>
            <p>{bags} worki,</p>
            <p>{choice},</p>
            {trueHelpGroups}
          </div>
          <div>
            <span className="secondSpan"></span>
            <p>dla lokalizacji: {localization}</p>
          </div>
        </div>
        <div className="stepSummaryMain">
          <div className="stepSummaryMain__left">
            <h2>Adres odbioru:</h2>
            <p>Ulica: {formData.street}</p>
            <p>Miasto: {formData.city}</p>
            <p>Kod pocztowy: {formData.postCode}</p>
            <p>Telefon: {formData.phone}</p>
          </div>
          <div className="stepSummaryMain__right">
            <h2>Termin odbioru:</h2>
            <p>Data: {formData.date}</p>
            <p>Godzina: {formData.time}</p>
            <p>Uwagi dla kuriera: {formData.notes}</p>
          </div>
        </div>
      </div>
    </>
  );
}
