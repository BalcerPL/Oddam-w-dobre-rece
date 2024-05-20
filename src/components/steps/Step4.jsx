import React, { useContext } from "react";
//
import { GlobalContext } from "../../context/GlobalContext";
//
import "../../sass/step.scss";
//
export default function Step4() {
  const { formData, setFormData } = useContext(GlobalContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    if ((name === "postCode" || name === "phone") && isNaN(value)) {
      event.target.classList.add("redColor");
    } else {
      event.target.classList.remove("redColor");
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div className="stepsForm">
      <h2>Podaj adres i termin odbioru rzeczy przez kuriera</h2>
      <div className="step4main">
        <div className="step4main__left">
          <label>
            Ulica:
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Miasto:
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Kod pocztowy:
            <input
              placeholder="Numbers only!"
              type="text"
              name="postCode"
              value={formData.postCode}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Telefon:
            <input
              placeholder="Numbers only!"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            ></input>
          </label>
        </div>
        <div className="step4main__right">
          <label>
            Data:
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Godzina:
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Uwagi dla kuriera:
            <textarea
              type="textarea"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
            ></textarea>
          </label>
        </div>
      </div>
    </div>
  );
}
