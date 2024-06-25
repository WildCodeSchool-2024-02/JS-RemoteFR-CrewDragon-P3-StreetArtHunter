import PropTypes from "prop-types";
import graffiti from "../assets/icons/logo_sah.png";
import Burger from "./Burger";

function Header({ openMenu }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={graffiti} alt="Logo street art hunter" />
        <h1>Street Art Hunter</h1>
      </div>
      <Burger openMenu={openMenu} />
    </header>
  );
}

Header.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Header;
