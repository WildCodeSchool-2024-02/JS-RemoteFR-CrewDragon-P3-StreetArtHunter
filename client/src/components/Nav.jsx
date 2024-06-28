import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import Footer from "./Footer";

function Nav({ openMenu, isMenuOpen }) {
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
        </ul>
        <ul className="log-nav">
          <Link to="/connexion" onClick={openMenu}>
            Connexion
          </Link>
          <Link to="/inscription" onClick={openMenu}>
            Inscription
          </Link>
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
