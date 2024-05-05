import React, { useState, useRef, useEffect, useContext } from "react";

// import { FormContext } from "../../context/FormContext";

import "../../sass/step.scss";

export default function Step1() {
  // const { choice, setChoice } = useContext(FormContext);
  const { choice, setChoice } = useState("");
  const formRef = useRef(null);

  const handleRadioChange = (event) => {
    setChoice(event.target.value);
  };

  const handleOutsideClick = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      setChoice(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="step" ref={formRef}>
      <h2>Zaznacz co chcesz oddać:</h2>
      <form className="stepsForm">
        <label>
          <input
            type="radio"
            value="ubrania, które nadają się do ponownego użycia"
            checked={choice === "ubrania, które nadają się do ponownego użycia"}
            onChange={handleRadioChange}
          />
          <span className="customRadio"></span>
          Ubrania, które nadają się do ponownego użycia
        </label>
        <label>
          <input
            type="radio"
            value="ubrania, do wyrzucenia"
            checked={choice === "ubrania, do wyrzucenia"}
            onChange={handleRadioChange}
          />
          <span className="customRadio"></span>
          Ubrania, do wyrzucenia
        </label>
        <label>
          <input
            type="radio"
            value="zabawki"
            checked={choice === "zabawki"}
            onChange={handleRadioChange}
          />
          <span className="customRadio"></span>
          Zabawki
        </label>
        <label>
          <input
            type="radio"
            value="książki"
            checked={choice === "książki"}
            onChange={handleRadioChange}
          />
          <span className="customRadio"></span>
          Książki
        </label>
        <label>
          <input
            type="radio"
            value="inne"
            checked={choice === "inne"}
            onChange={handleRadioChange}
          />
          <span className="customRadio"></span>
          Inne
        </label>
      </form>
    </div>
  );
}
