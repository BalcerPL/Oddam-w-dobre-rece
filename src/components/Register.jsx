//IMPORT REACT STUFF
import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
//IMPORT SUPABASE
import supabase from "./supabase/supabaseClient";
//IMPORT COMPONENTS
import Nav from "./Nav";
//IMPORT SASS
import "../sass/register.scss";

export default function Register() {
  const navigate = useNavigate();
  const {
    userEmail,
    setUserEmail,
    userPassword,
    setUserPassword,
    userRepeatedPassword,
    setUserRepeatedPassword,
  } = useContext(UserContext);
  const [error, setError] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  useEffect(() => {
    if (userPassword === userRepeatedPassword) {
      setError(null);
    }
  }, [userPassword, userRepeatedPassword]);

  const handleRegister = async () => {
    try {
      if (!userEmail.includes("@")) {
        setError("Podany adres email jest nieprawidłowy");
        return;
      }
      if (userPassword.length < 6) {
        setError("Hasło musi mieć co najmniej 6 znaków");
        return;
      }
      if (userPassword !== userRepeatedPassword) {
        setError("Hasła nie pasują do siebie");
        return;
      }

      const { user, error } = await supabase.auth.signUp({
        email: userEmail,
        password: userPassword,
      });

      if (error) {
        setError(error.message);
      } else {
        setRegistrationSuccess(true);
      }
    } catch (error) {
      console.error("Błąd podczas rejestracji:", error.message);
      setError("Wystąpił błąd podczas rejestracji, spróbuj ponownie");
    }
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleRepeatedPasswordChange = (e) => {
    setUserRepeatedPassword(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRegister();
    }
  };

  return (
    <div className="container">
      <Nav />
      <div className="registerDiv">
        <h2>Załóż konto</h2>
        <span className="line"></span>
        {registrationSuccess && (
          <div className="registrationSuccessMessage">
            Udało się zarejestrować użytkownika!
          </div>
        )}
        <div className="registerDiv__box">
          <p>Email</p>
          <input
            type="email"
            className="input__email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <p className="registerError">{error}</p>
          <p>Hasło</p>
          <input
            type="password"
            className="input__password"
            value={userPassword}
            onChange={handlePasswordChange}
            onKeyDown={handleKeyPress}
          />
          <p>Powtórz hasło</p>
          <input
            type="password"
            className="input__password"
            value={userRepeatedPassword}
            onChange={handleRepeatedPasswordChange}
            onKeyDown={handleKeyPress}
          />
        </div>
        <div className="registerDiv__buttons">
          <button className="registerBTN" onClick={handleRegister}>
            Załóż konto
          </button>

          <button className="registerBTN" onClick={navigate("./Login")}>
            Zaloguj się
          </button>
        </div>
      </div>
    </div>
  );
}
