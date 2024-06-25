import PropTypes from "prop-types";
import { useState } from "react";
import closePopup from "../assets/patterns/Close-Button.svg";

function PopupConnexion({ setShowPopupConnexion }) {
  const close = () => {
    setShowPopupConnexion(false);
  };
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const pseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section id="log-in" className="popup">
      <input
        type="image"
        src={closePopup}
        alt="Fermer"
        onClick={() => close()}
        className="close-btn"
      />
      <h2>Vous voulez vous connecter?</h2>
      <label htmlFor="pseudo">Rentrez votre pseudo:</label>
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
      <label htmlFor="pass">Password:</label>
      <input
        type="password"
        id="pass"
        name="password"
        required
        onChange={passwordChange}
        value={password}
      />

      <button type="submit" value="Connexion" onClick={() => close()}>
        Soumettre
      </button>
      <button type="button" onClick={() => close()}>
        Fermer
      </button>
    </section>
  );
}

export default PopupConnexion;

PopupConnexion.propTypes = {
  setShowPopupConnexion: PropTypes.bool.isRequired,
};
