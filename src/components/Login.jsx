import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
//
import supabase from "./supabase/supabaseClient";
import Nav from "./Nav";
//
import "../sass/login.scss";
//

export default function Login() {
  const { isLogged, setIsLogged, userID, setUserID } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const lowercaseEmail = emailInput.toLowerCase();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: lowercaseEmail,
        password: password,
      });
      if (error) {
        setError("Wystąpił błąd podczas logowania. Spróbuj ponownie.");
      } else {
        setIsLogged(true);
        setUserID(data.user.id);
      }
    } catch (error) {
      setError("Wystąpił błąd podczas logowania. Spróbuj ponownie.");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleLogin();
    }
  };

  useEffect(() => {
    if (isLogged) {
      const timer = setTimeout(() => {
        navigate("/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLogged, navigate]);

  return (
    <>
      <div className="container">
        <Nav />
        <div className="loginDiv">
          <h2>Zaloguj się</h2>
          <span className="line"></span>
          <div className="loginDiv__box">
            <p>Email</p>
            <input
              type="email"
              className="input__email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <p>Hasło</p>
            <input
              type="password"
              className="input__password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            {isLogged && (
              <p style={{ color: "green" }}> Sukces! Udało się zalogować</p>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="loginDiv__buttons">
            <a href="/register">
              <button className="registerBTN">Załóż konto</button>
            </a>
            <button className="loginBTN" onClick={handleLogin}>
              Zaloguj się
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
