import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userRepeatedPassword, setUserRepeatedPassword] = useState("");
  const [isLogged, setIsLogged] = useState(true);

  const value = {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userRepeatedPassword,
    setUserRepeatedPassword,
    isLogged,
    setIsLogged,
  };

  return (
    <UserContext.Provider value={value}> {children} </UserContext.Provider>
  );
};
