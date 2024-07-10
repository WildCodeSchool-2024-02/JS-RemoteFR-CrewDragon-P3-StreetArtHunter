import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import closePopup from "../assets/patterns/Close-Button.svg";

const url = import.meta.env.VITE_API_URL;

function PopupInscription() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    pseudo: "",
    email: "",
    postal_code: "",
    city: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${url}/api/persons`, formData);
      navigate("/"); // Redirige l'utilisateur vers la page d'accueil après une inscription réussie
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <section id="sign-in" className="popup">
      <Link to="/" className="close-btn">
        <img src={closePopup} alt="Fermer" />
      </Link>
      <h2>Vous voulez vous inscrire?</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Info Perso</legend>
          <label htmlFor="firstname">Entrer votre prenom:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
          <label htmlFor="lastname">Entrer votre nom de famille:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
          <label htmlFor="email">Entrer votre email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <legend>Adresse</legend>
          <label htmlFor="postal_code">Code postal:</label>
          <input
            type="text"
            id="postal_code"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
          />
          <label htmlFor="city">Ville:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </fieldset>
        <fieldset>
          <legend>Perso</legend>
          <label htmlFor="pseudo">Choisissez un pseudo:</label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
          />
          <label htmlFor="password">Password (8 characters minimum):</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </fieldset>
        <button type="submit">Soumettre</button>
      </form>
      <Link to="/" className="home-btn">
        Fermer
      </Link>
    </section>
  );
}

export default PopupInscription;
