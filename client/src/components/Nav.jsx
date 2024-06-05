import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
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
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
