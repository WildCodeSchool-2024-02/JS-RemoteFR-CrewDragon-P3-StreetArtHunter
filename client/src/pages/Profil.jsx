/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-alert */
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import "../style/Profil.scss";

function Profil() {
  const { person } = useAuth();
  const user = person?.user || {};
  const [formData, setFormData] = useState({
    email: user.email || "",
    password: "",
    pseudo: user.pseudo || "",
    postal_code: user.postal_code || "",
    city: user.city || "",
    firstname: user.firstname || "",
    lastname: user.lastname || "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        email: user.email || "",
        pseudo: user.pseudo || "",
        postal_code: user.postal_code || "",
        city: user.city || "",
        firstname: user.firstname || "",
        lastname: user.lastname || "",
        password: "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/api/persons/${user.id}`,
        formData
      );
      alert("Informations mises à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
      alert("Erreur lors de la mise à jour du profil.");
    }
  };

  return (
    <div className="profil-container">
      <h2>Mon Profil</h2>
      <form onSubmit={handleSubmit} className="profil-form">
        <div className="form-group">
          <label htmlFor="firstname">Prénom:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Nom:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder=""
          />
        </div>
        <div className="form-group">
          <label htmlFor="pseudo">Pseudo:</label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="postal_code">Code postal:</label>
          <input
            type="text"
            id="postal_code"
            name="postal_code"
            value={formData.postal_code}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">Ville:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn-update">
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

export default Profil;
