import React, { createContext, useState } from "react";

export const FormContext = createContext(null);

export const FormContextProvider = ({ children }) => {
  const { choice, setChoice } = useState([]);
  const { bags, setBags } = useState();
  const {
    localisation,
    setLocalisation,
    organization,
    setOrganization,
    helpGroups,
    setHelpGroups,
  } = useState();
  const { formData, setFormData } = useState();

  const value = {
    choice,
    setChoice,
    bags,
    setBags,
    localisation,
    setLocalisation,
    organization,
    setOrganization,
    helpGroups,
    setHelpGroups,
    formData,
    setFormData,
  };
  return <FormContextProvider value={value}>{children}</FormContextProvider>;
};
