import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../context/AuthContext";

import closePopup from "../assets/patterns/Close-Button.svg";

const url = import.meta.env.VITE_API_URL;

function PopupConnexion() {
  const { login } = useAuth();
  const [pseudo, setPseudo] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
      login(user.data);
      setPassword("");
      setPseudo("");
      navigate("/"); // Redirige l'utilisateur vers la page d'accueil après une connexion réussie
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
      <form onSubmit={submit}>
        <label htmlFor="pseudo">Rentrez votre pseudo:</label>
        <input
          type="text"
          id="pseudo"
          name="name"
          required
          minLength="3"
          maxLength="15"
          onChange={pseudoChange}
          value={pseudo}
        />
        <label htmlFor="pass"> Password:</label>
        <input
          type="password"
          id="pass"
          name="password"
          required
          onChange={passwordChange}
          value={password}
        />
        <button type="submit">Soumettre</button>
      </form>
      <Link to="/" className="home-btn">
        Fermer
      </Link>
    </section>
  );
}

export default PopupConnexion;
