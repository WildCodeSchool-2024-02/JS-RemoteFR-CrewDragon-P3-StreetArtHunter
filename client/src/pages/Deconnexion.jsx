import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../context/AuthContext";

import closePopup from "../assets/patterns/Close-Button.svg";

const url = import.meta.env.VITE_API_URL;

function Deconnexion() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const deco = async () => {
    try {
      const jesaispas = await axios.post(`${url}/api/auths/logout`);
      console.info(jesaispas);
      logout();
      navigate("/");
    } catch (err) {
      console.error("je suis l'erreur du T-C", err);
    }
  };

  return (
    <section id="log-out" className="popup">
      <Link to="/" className="close-btn">
        <img src={closePopup} alt="Fermer" />
      </Link>
      <h2>Vous voulez vous deconnecter?</h2>
      <button type="button" onClick={deco}>
        Deconnexion
      </button>
      <Link to="/" className="home-btn">
        Fermer
      </Link>
    </section>
  );
}

export default Deconnexion;
