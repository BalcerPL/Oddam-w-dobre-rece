import React, { useContext, useEffect } from "react";
//
import "../../sass/step.scss";
//
import { GlobalContext } from "../../context/GlobalContext";
//
export default function Step3() {
  const {
    localization,
    setLocalization,
    helpGroups,
    setHelpGroups,
    exactOrganization,
    setExactOrganization,
  } = useContext(GlobalContext);

  const handleCitySelect = (event) => {
    setLocalization(event.target.value);
  };

  const handleCheckboxChange = (groupName) => {
    setHelpGroups({
      ...helpGroups,
      [groupName]: !helpGroups[groupName],
    });
  };

  return (
    <>
      <div className="stepsForm">
        <h2>Lokalizacja:</h2>
        <select className="stepSelect" onChange={handleCitySelect}>
          <option value="">{localization ? localization : "- miasto -"}</option>
          <option value="Poznań">Poznań</option>
          <option value="Warszawa">Warszawa</option>
          <option value="Kraków">Kraków</option>
          <option value="Wrocław">Wrocław</option>
          <option value="Katowice">Katowice</option>
        </select>
        <h3>Komu chcesz pomóc:</h3>
        <form className="checkboxForm">
          <label
            className="labelBTN"
            style={{
              backgroundColor: helpGroups.dzieciom ? "#FAD648" : "transparent",
            }}
          >
            <input
              type="checkbox"
              checked={helpGroups.dzieciom}
              onChange={() => handleCheckboxChange("dzieciom")}
            />
            dzieciom
          </label>
          <label
            className="labelBTN"
            style={{
              backgroundColor: helpGroups.samotnymMatkom
                ? "#FAD648"
                : "transparent",
            }}
          >
            <input
              type="checkbox"
              checked={helpGroups.samotnymMatkom}
              onChange={() => handleCheckboxChange("samotnymMatkom")}
            />
            samotnym matkom
          </label>
          <label
            className="labelBTN"
            style={{
              backgroundColor: helpGroups.bezdomnym ? "#FAD648" : "transparent",
            }}
          >
            <input
              type="checkbox"
              checked={helpGroups.bezdomnym}
              onChange={() => handleCheckboxChange("bezdomnym")}
            />
            bezdomnym
          </label>
          <label
            className="labelBTN"
            style={{
              backgroundColor: helpGroups.niepelnosprawnym
                ? "#FAD648"
                : "transparent",
            }}
          >
            <input
              type="checkbox"
              checked={helpGroups.niepelnosprawnym}
              onChange={() => handleCheckboxChange("niepelnosprawnym")}
            />
            niepełnosprawnym
          </label>
          <label
            className="labelBTN"
            style={{
              backgroundColor: helpGroups.osobomStarszym
                ? "#FAD648"
                : "transparent",
            }}
          >
            <input
              type="checkbox"
              checked={helpGroups.osobomStarszym}
              onChange={() => handleCheckboxChange("osobomStarszym")}
            />
            osobom starszym
          </label>
        </form>
        <h3>Wpisz nazwę konkretnej organizacji (opcjonalne)</h3>
        <input
          type="text"
          value={exactOrganization}
          onChange={(event) => setExactOrganization(event.target.value)}
        ></input>
      </div>
    </>
  );
}
