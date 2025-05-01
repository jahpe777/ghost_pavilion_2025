import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <section className="navbar">
      <h1 className="ghost-pavilion-home">
        <Link to="/">Ghost Pavilion 2025</Link>
      </h1>
      <nav>
        <ul className="navlinks">
          <li className="nav-li">
            <Link to="/watch">Watch</Link>
          </li>
          <li className="nav-li">
            <Link to="/listen">Listen</Link>
          </li>
          <li className="nav-li">
            <Link to="/speak">Speak</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default NavBar;
