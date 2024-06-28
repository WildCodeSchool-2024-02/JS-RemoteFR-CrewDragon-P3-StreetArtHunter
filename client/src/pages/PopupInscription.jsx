import { useState } from "react";
import { Link } from "react-router-dom";
import closePopup from "../assets/patterns/Close-Button.svg";

function PopupInscription() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [pseudo, setPseudo] = useState("");
  const [mail, setMail] = useState("");
  const [postal, setPostal] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const firstnameChange = (e) => {
    setFirstname(e.target.value);
  };
  const lastnameChange = (e) => {
    setLastname(e.target.value);
  };
  const pseudoChange = (e) => {
    setPseudo(e.target.value);
  };
  const mailChange = (e) => {
    setMail(e.target.value);
  };
  const postalChange = (e) => {
    setPostal(e.target.value);
  };
  const cityChange = (e) => {
    setCity(e.target.value);
  };
  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section id="sign-in" className="popup">
      <Link to="/" className="close-btn">
        <img src={closePopup} alt="Fermer" />
      </Link>
      <h2>Vous voulez vous inscrire?</h2>
      <fieldset>
        <legend>Info Perso</legend>
        <label htmlFor="firstname">Entrer votre prenom:</label>
        <input
          type="text"
          id="firstname"
          name="name"
          required
          onChange={firstnameChange}
          value={firstname}
        />

        <label htmlFor="lastname">Entrer votre nom de famille:</label>
        <input
          type="text"
          id="lastname"
          name="name"
          required
          onChange={lastnameChange}
          value={lastname}
        />

        <label htmlFor="email">Entrer votre email:</label>
        <input
          type="email"
          id="email"
          pattern=".+@example\.com"
          required
          onChange={mailChange}
          value={mail}
        />
      </fieldset>
      <fieldset>
        <legend>Adresse</legend>
        <label htmlFor="postalcode">Code postal:</label>
        <input
          type="number"
          id="postalcode"
          name="name"
          required
          onChange={postalChange}
          value={postal}
        />

        <label htmlFor="city">Ville:</label>
        <input
          type="text"
          id="city"
          name="name"
          required
          onChange={cityChange}
          value={city}
        />
      </fieldset>
      <fieldset>
        <legend>Perso</legend>
        <label htmlFor="pseudo">Choissisez un pseudo:</label>
        <input
          type="text"
          id="pseudo"
          name="name"
          required
          minLength="4"
          maxLength="15"
          onChange={pseudoChange}
          value={pseudo}
        />
        <label htmlFor="pass">Password (8 characters minimum):</label>
        <input
          type="password"
          id="pass"
          name="password"
          required
          onChange={passwordChange}
          value={password}
        />
      </fieldset>

      <button type="submit" value="Inscription">
        Soumettre
      </button>
      <Link to="/" className="home-btn">
        Fermer
      </Link>
    </section>
  );
}

export default PopupInscription;
