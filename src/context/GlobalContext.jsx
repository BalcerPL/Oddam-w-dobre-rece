import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalContextProvider = ({ children }) => {
  //
  const [bags, setBags] = useState(0);
  const [organizations, setOrganizations] = useState(0);
  const [localCollections, setLocalCollections] = useState(0);
  //
  const [choice, setChoice] = useState("");
  const [localization, setLocalization] = useState();
  const [whoYouWantToHelp, setWhoYouWantToHelp] = useState([]);
  const [exactOrganization, setExactOrganization] = useState("");
  const [helpGroups, setHelpGroups] = useState({
    dzieciom: false,
    samotnymMatkom: false,
    bezdomnym: false,
    niepelnosprawnym: false,
    osobomStarszym: false,
  });
  //
  const [formData, setFormData] = useState({
    street: "",
    city: "",
    postCode: "",
    phone: "",
    date: "",
    time: "",
    notes: "",
  });

  //
  const value = {
    bags,
    setBags,
    organizations,
    setOrganizations,
    localCollections,
    setLocalCollections,
    choice,
    setChoice,
    localization,
    setLocalization,
    whoYouWantToHelp,
    setWhoYouWantToHelp,
    exactOrganization,
    setExactOrganization,
    helpGroups,
    setHelpGroups,
    formData,
    setFormData,
  };

  return (
    <GlobalContext.Provider value={value}> {children} </GlobalContext.Provider>
  );
};
