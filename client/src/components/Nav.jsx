import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./Footer";
import PopupConnexion from "./PopupConnexion";
import PopupInscription from "./PopupInscription";

function Nav({ openMenu, isMenuOpen }) {
  const [showPopupConnexion, setShowPopupConnexion] = useState(false);
  const [showPopupInscription, setShowPopupInscription] = useState(false);
  const navigate = useNavigate();

  const togglePopupConnexion = () => {
    navigate("/");
    setShowPopupConnexion(true);
    openMenu();
  };

  const togglePopupInscription = () => {
    navigate("/");
    setShowPopupInscription(true);
    openMenu();
  };

  return (
    <main className={isMenuOpen ? "order-end" : "order-start"}>
      <nav
        className={isMenuOpen ? "menu-open" : "menu-close"}
        aria-label="Navigation"
      >
        <ul>
          <Link to="/" tabIndex={isMenuOpen ? -1 : 0} onClick={openMenu}>
            <button type="button">Accueil</button>
          </Link>
          <Link to="/galery" tabIndex={isMenuOpen ? -1 : 0} onClick={openMenu}>
            <button type="button">Galerie</button>
          </Link>
          <Link
            to="/instruction"
            tabIndex={isMenuOpen ? -1 : 0}
            onClick={openMenu}
          >
            <button type="button">Règles</button>
          </Link>
        </ul>
        <ul className="log-nav">
          <button type="button" onClick={togglePopupConnexion}>
            Connexion
          </button>
          <button type="button" onClick={togglePopupInscription}>
            Inscription
          </button>
        </ul>
      </nav>
      <section
        className={
          isMenuOpen || showPopupConnexion || showPopupInscription
            ? "hide-content"
            : "show-content"
        }
      >
        <Outlet />
        <Footer />
      </section>

      {/* Popup de connexion */}
      {showPopupConnexion && (
        <PopupConnexion setShowPopupConnexion={setShowPopupConnexion} />
      )}

      {/* Popup d'inscription */}
      {showPopupInscription && (
        <PopupInscription setShowPopupInscription={setShowPopupInscription} />
      )}
    </main>
  );
}

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
};

export default Nav;
