import { Link } from "react-router-dom";
import "../styles/components/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="link" to="/">Inicio</Link>
      <Link className="link" to="/peliculas">Qué ver</Link>
    </nav>
  );
}

export default Navbar;
