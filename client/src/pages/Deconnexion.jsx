import { Link } from "react-router-dom";
import axios from "axios";

import { useAuth } from "../context/AuthContext";

import closePopup from "../assets/patterns/Close-Button.svg";

const url = import.meta.env.VITE_API_URL;

function Deconnexion() {
  const { logout } = useAuth();

  const deco = async () => {
    try {
      const jesaispas = await axios.post(`${url}/api/auths/logout`);
      console.info(jesaispas);
      logout();
    } catch (err) {
      console.error("je suis l'erreur du T-C", err);
    }
  };

  return (
    <>
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
    </>
  );
}

export default Deconnexion;
