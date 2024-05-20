//IMPORT REACT STUFF
import React, { useState, useContext } from "react";
//IMPORT SUPABASE
import supabase from "./supabase/supabaseClient";
//IMPORT CONTEXT
import { GlobalContext } from "../context/GlobalContext";
import { UserContext } from "../context/UserContext";
//IMPORT COMPONENTS
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import StepSummary from "./steps/StepSummary";
// IMPORT SASS
import "../sass/oddajRzeczySteps.scss";

export default function OddajRzeczySteps() {
  const [step, setStep] = useState(1);

  const {
    bags,
    organizations,
    localCollections,
    choice,
    localization,
    whoYouWantToHelp,
    exactOrganization,
    helpGroups,
    formData,
  } = useContext(GlobalContext);

  const { userID } = useContext(UserContext);

  const stepsInfo = {
    step1p:
      "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji wwyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądz celu ich pomocy.",
    step2p:
      "Wszystkie rzeczy do odania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz FIXME: TUTAJ.",
    step3p:
      "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądz celu ich pomocy.",
    step4p: "Podaj adres oraz termin odbioru rzeczy",
    step5p: "Podsumowanie Twojej Darowizny",
  };

  const sendToSupabase = async () => {
    const { data, error } = await supabase.from("submissions").insert([
      {
        user_id: userID,
        bags: bags,
        organizations: organizations,
        localCollections: localCollections,
        choice: choice,
        localization: localization,
        whoYouWantToHelp: whoYouWantToHelp,
        exactOrganization: exactOrganization,
        samotnymMatkom: helpGroups.samotnymMatkom,
        bezdomnym: helpGroups.bezdomnym,
        niepelnosprawnym: helpGroups.niepelnosprawnym,
        osobomStarszym: helpGroups.osobomStarszym,
        city: formData.city,
        postCode: formData.postCode,
        street: formData.street,
        phone: formData.phone,
        date: formData.date,
        time: formData.time,
        notes: formData.notes,
      },
    ]);

    if (error) {
      console.error("Error: ", error);
    } else {
      console.log("Data submitted successfully: ");
    }
  };

  return (
    <>
      <div className="oddajRzeczySteps">
        <div className="oddajRzeczySteps__header">
          <h2>Ważne!</h2>
          <p>
            {step === 1 && stepsInfo.step1p}
            {step === 2 && stepsInfo.step2p}
            {step === 3 && stepsInfo.step3p}
            {step === 4 && stepsInfo.step4p}
            {step === 5 && stepsInfo.step5p}
          </p>
        </div>
        <div className="oddajRzeczySteps__main">
          {step >= 1 && step <= 4 ? (
            <p>Krok {step} / 4</p>
          ) : (
            <p className="summaryP">Podsumowanie Twojej Darowizny</p>
          )}
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
          {step === 5 && <StepSummary />}
          <div className="buttonsDiv">
            <button
              className={`oddajRzeczySteps__BTN ${step === 1 ? "hidden" : ""}`}
              onClick={() => {
                if (step > 1) {
                  setStep(step - 1);
                }
              }}
            >
              Wstecz
            </button>
            <button
              className="oddajRzeczySteps__BTN"
              onClick={() => {
                if (step < 5) {
                  setStep(step + 1);
                } else if (step === 5) {
                  sendToSupabase();
                }
              }}
            >
              {step < 5 ? "Dalej" : "Potwierdzam"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
