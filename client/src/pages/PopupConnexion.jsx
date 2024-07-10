import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import closePopup from "../assets/patterns/Close-Button.svg";

const url = import.meta.env.VITE_API_URL;

function PopupConnexion() {
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");

  const pseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const user = await axios.post(`${url}/api/auths/login`, {
        pseudo,
        password,
      });
      console.info(user.data);
      setPassword("");
      setPseudo("");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section id="log-in" className="popup">
      <Link to="/" className="close-btn">
        <img src={closePopup} alt="Fermer" />
      </Link>
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

      <button type="submit" value="Connexion" onClick={submit}>
        Soumettre
      </button>
      <Link to="/" className="home-btn">
        Fermer
      </Link>
    </section>
  );
}

export default PopupConnexion;
