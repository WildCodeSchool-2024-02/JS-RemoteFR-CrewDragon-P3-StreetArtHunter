import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./main.scss";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="App">
      <Header openMenu={openMenu} />
      <Nav isMenuOpen={isMenuOpen} />
      <Footer />
    </div>
  );
}

export default App;
