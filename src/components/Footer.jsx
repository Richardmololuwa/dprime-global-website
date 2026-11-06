
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight

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

          <div className="footer-socials">

  {/* Instagram */}
  <a
    href="https://www.instagram.com/dprimeglobal1/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  </a>

  {/* Facebook */}
  <a
    href="https://www.facebook.com/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z" />
    </svg>
  </a>

</div>
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
            <span>07047002681, 08032251861</span>
          </a>

          <a href="mailto:dprimeglobal@gmail.com">
            <Mail size={17} />
            <span> dprimeglobal@gmail.com, dairorotimi57@gmail.com</span>
          </a>

          <div>
            <MapPin size={17} />
            <span>5 Unity Drive, Ibukun Estate, Alimosho, Lagos, Nigeria</span>
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
