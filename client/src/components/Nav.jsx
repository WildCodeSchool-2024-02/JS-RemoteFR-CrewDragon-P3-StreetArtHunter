import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Nav({ openMenu, isMenuOpen }) {
  return (
    <main className={isMenuOpen ? "order-end" : "order-start"}>
      <nav
        className={isMenuOpen ? "menu-open" : "menu-close"}
        aria-label="Navigation"
      >
        <ul>
          <Link
            to="/"
            tabIndex={isMenuOpen ? -1 : 0}
            onClick={() => openMenu()}
          >
            <button type="button">Accueil</button>
          </Link>
          <Link
            to="/galery"
            tabIndex={isMenuOpen ? -1 : 0}
            onClick={() => openMenu()}
          >
            <button type="button">Galerie</button>
          </Link>
          <Link
            to="/instruction"
            tabIndex={isMenuOpen ? -1 : 0}
            onClick={() => openMenu()}
          >
            <button type="button">Règles</button>
          </Link>
        </ul>
        <ul className="log-nav">
          <button type="button">Connexion</button>
          <button type="button">Inscription</button>
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
