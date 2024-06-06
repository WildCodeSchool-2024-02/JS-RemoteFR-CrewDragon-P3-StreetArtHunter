
import graffiti from "../assets/graffiti.2.png";
import "../style/Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={graffiti} alt="Logo" />
        <div className="text">Street Art Hunter</div>
      </div>
    </header>
  );
}

export default Header;
