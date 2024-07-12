/* eslint-disable react/button-has-type */
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext"; 

function Nav({ openMenu, isMenuOpen }) {
  const { isAuthenticated, person, logout } = useAuth(); // Obtenez l'état d'authentification et les données de l'utilisateur
  const { user } = person; // Déstructuration pour obtenir les données de l'utilisateur

  return (
    <main className={isMenuOpen ? "order-end" : "order-start"}>
      <nav
        className={isMenuOpen ? "menu-open" : "menu-close"}
        aria-label="Navigation"
      >
        <ul>
          <Link to="/" onClick={openMenu}>
            Accueil
          </Link>
          <Link to="/galery" onClick={openMenu}>
            Galerie
          </Link>
          <Link to="/instruction" onClick={openMenu}>
            Règles
          </Link>
          {isAuthenticated &&
            user.role_id === 1 && ( // Affiche "Admin" seulement pour les admins
              <Link to="/admin" onClick={openMenu}>
                Admin
              </Link>
            )}
        </ul>
        <ul className="log-nav">
          {!isAuthenticated ? (
            <>
              <Link to="/connexion" onClick={openMenu}>
                Connexion
              </Link>
              <Link to="/inscription" onClick={openMenu}>
                Inscription
              </Link>
            </>
          ) : (
            <>
              <Link to="/user" onClick={openMenu}>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  logout(); // Appelle la fonction de déconnexion
                  openMenu(); // Optionnel: fermer le menu après déconnexion
                }}
                className="home-btn"
              >
                Déconnexion
              </button>
            </>
          )}
        </ul>
      </nav>
      <section className={isMenuOpen ? "hide-content" : "show-content"}>
        <Outlet />
        <Footer />
      </section>
    </main>
  );
}

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
};

export default Nav;
