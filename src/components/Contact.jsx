import React from "react";

import "../sass/contact.scss";

export default function Contact() {
  return (
    <>
      <div className="contact" id="contact">
        <div className="contact__main">
          <div className="contact__main__leftSide"></div>
          <div className="contact__main__rightSide">
            <h2>Skontaktuj się z nami</h2>
            <span className="line"></span>

            <div className="contact__main__inputs">
              <div>
                <div>
                  <p>Wpisz swoje imię</p>
                  <input type="text" placeholder="Imię" />
                </div>

                <div>
                  <p>Wpisz swój email</p>
                  <input type="email" placeholder="email@email.com" />
                </div>
              </div>

              <div>
                <p>Wpisz swoją wiadomość</p>
                <textarea
                  className="textarea"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda exercitationem modi, non nobis voluptates illum laborum doloribus nemo, harum sed dicta accusantium hic repellat iure, asperiores atque! Ipsam, recusandae animi."
                ></textarea>
              </div>
            </div>

            <button className="BTN contact__BTN">Wyslij</button>
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
