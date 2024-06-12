import PropTypes from "prop-types";
import { useState } from "react";

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
    <section className="popup">
      <h2>Vous voulez vous connecter?</h2>
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

      <input type="submit" value="Connexion" onClick={() => close()} />
    </section>
  );
}

export default PopupConnexion;

PopupConnexion.propTypes = {
  setShowPopupConnexion: PropTypes.bool.isRequired,
};
