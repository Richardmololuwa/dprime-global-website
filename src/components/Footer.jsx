
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

  
{/* WhatsApp */}
<a
  href="https://wa.me/2347047002681"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="21"
    height="21"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.58 0 .27 5.3.27 11.83c0 2.08.55 4.12 1.6 5.92L.17 24l6.4-1.68a11.8 11.8 0 0 0 5.53 1.4h.01c6.53 0 11.84-5.31 11.84-11.84a11.8 11.8 0 0 0-3.43-8.4ZM12.1 21.7h-.01a9.8 9.8 0 0 1-5-1.37l-.36-.21-3.8 1 1.02-3.7-.24-.38a9.78 9.78 0 0 1-1.5-5.21c0-5.42 4.4-9.83 9.83-9.83a9.76 9.76 0 0 1 6.96 2.88 9.76 9.76 0 0 1 2.87 6.96c0 5.43-4.41 9.84-9.83 9.84Zm5.4-7.37c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.23-.65.08-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.15 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.75-.72 2-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
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
