import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Nav({ openMenu, isMenuOpen }) {
  return (
    <main className={isMenuOpen ? "order-end" : "order-start"}>
      <nav className={isMenuOpen ? "menu-open" : "menu-close"}>
        <ul>
          <Link to="/">
            <button type="button" onClick={() => openMenu()}>
              Accueil
            </button>
          </Link>
          <Link to="/galery">
            <button type="button" onClick={() => openMenu()}>
              Galerie
            </button>
          </Link>
          <Link to="/instruction">
            <button type="button" onClick={() => openMenu()}>
              Règles
            </button>
          </Link>
        </ul>
        <ul className="log-nav">
          <button type="button">Connexion</button>
          <button type="button">Inscription</button>
        </ul>
      </nav>
      <div className={isMenuOpen ? "hide-content" : "show-content"}>
        <Outlet />
        <Footer />
      </div>
    </main>
  );
}

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
};

export default Nav;
