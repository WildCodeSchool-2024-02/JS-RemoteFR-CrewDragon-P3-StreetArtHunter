import PropTypes from "prop-types";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

function Nav({ isMenuOpen }) {
  return (
    <main>
      <nav className={isMenuOpen ? "menu-open" : "menu-close"}>
        <Link to="/">
          <p>Acceuil</p>
        </Link>
        <Link to="/galery">
          <p>Galery</p>
        </Link>
        <Link to="/instruction">
          <p>Insctructions</p>
        </Link>
      </nav>
      <Outlet />
      <Footer />
    </main>
  );
}

Nav.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Nav;
