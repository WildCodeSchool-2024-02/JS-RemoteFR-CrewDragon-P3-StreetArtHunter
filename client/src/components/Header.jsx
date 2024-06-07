import graffiti from "../assets/graffiti.2.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={graffiti} alt="Logo" />
        <h1 className="text">Street Art Hunter</h1>
      </div>
    </header>
  );
}

export default Header;
