import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRepeatedPassword, setUserRepeatedPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const [userID, setUserID] = useState(null);

  const value = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userRepeatedPassword,
    setUserRepeatedPassword,
    isLogged,
    setIsLogged,
    userID,
    setUserID,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
