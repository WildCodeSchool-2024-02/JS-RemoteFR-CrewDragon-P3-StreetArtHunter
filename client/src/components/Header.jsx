import PropTypes from "prop-types";
import graffiti from "../assets/graffiti.2.png";
import Burger from "./Burger";
import graffiti from "../assets/graffiti.2.png";

function Header({ openMenu }) {
  return (
    <header className="header">
      <div className="logo">
        <img src={graffiti} alt="Logo" />
        <h1 className="text">Street Art Hunter</h1>
        <Burger openMenu={openMenu} />
      </div>
    </header>
  );
}

Header.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Header;
