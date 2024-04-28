import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function NavLoggedComponent() {
  const { userEmail: userName, setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <ul>
      <li>Cześć {userName}</li>
      <li onClick={() => navigate("/OddajRzeczy")}>Oddaj rzeczy</li>
      <li
        onClick={() => {
          setIsLogged(false);
          navigate("/logout");
        }}
      >
        Wyloguj
      </li>
    </ul>
  );
}
