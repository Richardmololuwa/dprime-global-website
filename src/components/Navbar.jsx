
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Products", path: "/products" },
    { name: "Industries", path: "/industries" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">

        <Link
          to="/"
          className="brand"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="D' PRIME Global Ltd"
            className="brand-logo"
          />
        </Link>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
              end={link.path === "/"}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="nav-quote"
          onClick={() => setMenuOpen(false)}
        >
          Request a Quote
        </Link>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

      </div>
    </header>
  );
}

export default Navbar;
