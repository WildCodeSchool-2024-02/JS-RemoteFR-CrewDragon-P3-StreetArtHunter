import PropTypes from "prop-types";
import burgerMenu from "../assets/Burger-Menu.svg";

function Burger({ openMenu }) {
  return (
    <button type="button" className="burger-button" onClick={() => openMenu()}>
      <img src={burgerMenu} alt="Burger menu icon" />
    </button>
  );
}

Burger.propTypes = {
  openMenu: PropTypes.func.isRequired,
};

export default Burger;
