import React, { useState, createContext } from "react";

export const CountersContext = createContext(null);

export const CountersContextProvider = ({ children }) => {
  const [bags, setBags] = useState(0);
  const [organisations, setOrganisations] = useState(0);
  const [collections, setCollections] = useState(0);

  const value = {
    bags,
    setBags,
    organisations,
    setOrganisations,
    collections,
    setCollections,
  };

  return (
    <CountersContext.Provider value={value}>
      {children}
    </CountersContext.Provider>
  );
};
