import React, { useState } from "react";
import axios from "axios";

import "../sass/contact.scss";

export default function Contact() {
  // INPUT CONSTS
  const contactInputs = document.querySelectorAll(
    ".contact__main__rightSide input"
  );
  const firstInput = contactInputs[0];
  const secondInput = contactInputs[1];
  const contactTextArea = document.querySelector(".textareaClass");

  // CONST useSTATE
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleNameChange = (e) => {
    setFormName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setFormEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setFormMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Walidacja formularza
    const errors = {};
    if (!formName.trim()) {
      errors.name = "Podane imię jest nieprawidłowe!";
      firstInput.classList.add("borderBottomRed");
    }
    if (!/^\S+@\S+\.\S+$/.test(formEmail)) {
      errors.email = "Podany email jest nieprawidłowy!";
      secondInput.classList.add("borderBottomRed");
    }
    if (formMessage.length < 120) {
      errors.message = "Wiadomość musi mieć co najmniej 120 znaków";
      contactTextArea.classList.add("borderBottomRed");
    }
    setFormErrors(errors);

    

    // Jeśli są błędy, nie wysyłaj żądania
    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(
          "https://fer-api.coderslab.pl/v1/portfolio/contact",
          {
            name: formName,
            email: formEmail,
            message: formMessage,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.status === 200 && response.data.status === "success") {
          setFormName("");
          setFormEmail("");
          setFormMessage("");
          alert("Formularz został pomyślnie wysłany!");
        } else {
          console.error("Błąd podczas wysyłania formularza");
        }
      } catch (error) {
        console.error("Błąd podczas wysyłania formularza", error);
      }
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__main">
          <div className="contact__main__leftSide"></div>
          <div className="contact__main__rightSide">
            <h2>Skontaktuj się z nami</h2>
            <span className="line"></span>

            <form onSubmit={handleSubmit}>
              <div className="contact__main__inputs">
                <div>
                  <div>
                    <p>Wpisz swoje imię</p>
                    <input
                      type="text"
                      placeholder="Imię"
                      value={formName}
                      onChange={handleNameChange}
                    />
                    {formErrors.name && (
                      <p className="contactWarning">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <p>Wpisz swój email</p>
                    <input
                      type="email"
                      placeholder="email@email.com"
                      value={formEmail}
                      onChange={handleEmailChange}
                    />
                    {formErrors.email && (
                      <p className="contactWarning">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <p>Wpisz swoją wiadomość</p>
                  <textarea
                    className="textareaClass"
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem modi, non nobis voluptates illum laborum doloribus nemo, harum sed dicta accusantium hic repellat iure, asperiores atque! Ipsam, recusandae animi."
                    value={formMessage}
                    onChange={handleMessageChange}
                  ></textarea>
                  {formErrors.message && (
                    <p className="contactWarning">{formErrors.message}</p>
                  )}
                </div>
              </div>
              <button type="submit" className="BTN contact__BTN">
                Wyślij
              </button>
            </form>
          </div>
        </div>
        <div className="contact__footer">
          <p>&copy; Copyright by Coders Lab</p>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src/assets/Facebook.svg" alt="FacebookIcon" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="src/assets/Instagram.svg" alt="Instagram" />
          </a>
        </div>
      </div>
    </>
  );
}
