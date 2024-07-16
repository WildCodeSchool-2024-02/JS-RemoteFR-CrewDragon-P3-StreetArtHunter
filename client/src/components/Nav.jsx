import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";

function Nav({ openMenu, isMenuOpen }) {
  const { isAuthenticated, person } = useAuth();
  const user = person?.user;

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
          {isAuthenticated && (
            <Link to="/profil" onClick={openMenu}>
              Profil
            </Link>
          )}
          {isAuthenticated && user?.role_id === 1 && (
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
              <Link to="/deconnexion" onClick={openMenu}>
                Déconnexion
              </Link>
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
