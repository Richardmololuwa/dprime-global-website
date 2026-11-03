
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import logo from "../assets/images/LogoRev.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Company Branding */}
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="D' PRIME Global Ltd" />
          </Link>

          <p>
            Your trusted partner in engineering equipment,
            medical technology, industrial machinery and
            integrated technical solutions.
          </p>

          <Link to="/about" className="footer-about-link">
            Learn More About Us <ArrowRight size={16} />
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/industries">Industries</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Services */}
        <div className="footer-services">
          <h3>Our Services</h3>
          <p>Procurement & Supply</p>
          <p>Equipment Installation</p>
          <p>Maintenance & Repairs</p>
          <p>Importation & Distribution</p>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h3>Contact Information</h3>

          <a href="tel:+2347047002681">
            <Phone size={17} />
            <span>07047002681</span>
          </a>

          <a href="mailto:dprimeglobal@gmail.com">
            <Mail size={17} />
            <span>dprimeglobal@gmail.com</span>
          </a>

          <div>
            <MapPin size={17} />
            <span>Lagos State, Nigeria</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} D' PRIME Global Ltd.
          All rights reserved.
        </p>
        <p>Procure • Supply • Support</p>
      </div>
    </footer>
  );
}

export default Footer;
