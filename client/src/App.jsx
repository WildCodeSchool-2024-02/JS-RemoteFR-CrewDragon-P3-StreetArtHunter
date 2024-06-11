import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import "./main.scss";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App">
      <Header openMenu={openMenu} />
      <Nav openMenu={openMenu} isMenuOpen={isMenuOpen} />
    </div>
  );
}

export default App;
