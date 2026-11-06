import "../styles/home.css";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Settings,
  Truck,
  Wrench,
  Microscope,
  HeartPulse,
  Factory,
  Monitor,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: <Truck />,
    title: "Procurement & Supply",
    description:
      "Reliable sourcing and supply of engineering, laboratory, medical and industrial equipment.",
  },
  {
    icon: <Settings />,
    title: "Installation",
    description:
      "Professional installation and commissioning of equipment to support efficient operations.",
  },
  {
    icon: <Wrench />,
    title: "Maintenance & Support",
    description:
      "Technical maintenance and support services to keep equipment operating effectively.",
  },
  {
    icon: <ShieldCheck />,
    title: "Importation & Distribution",
    description:
      "Importation and distribution of quality equipment from trusted manufacturers and suppliers.",
  },
];

const categories = [
  {
    title: "Laboratory Equipment",
    image:
      "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Medical & Hospital Equipment",
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "Industrial Machinery",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=800&q=85",
  },
  {
    title: "IT & Technical Products",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=85",
  },
];

const industries = [
  { icon: <HeartPulse />, title: "Healthcare" },
  { icon: <Microscope />, title: "Research & Laboratories" },
  { icon: <Factory />, title: "Manufacturing & Industry" },
  { icon: <GraduationCap />, title: "Education" },
  { icon: <Monitor />, title: "Information Technology" },
];

function Home() {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="home-hero">
        <div className="home-hero-overlay"></div>

        <div className="home-container home-hero-content">
          <span className="home-eyebrow">
            QUALITY SUPPLY • RALIABLE DELIVERY • TRUSTED PARTNERSHIP
          </span>

          <h1>
            Supplying Excellence.
            <span> Delivering Solutions.</span>
          </h1>

          <p>
            Your trusted partner for engineering equipment, laboratory
            solutions, medical technology and industrial supplies.
          </p>

          <div className="home-hero-buttons">
            <Link to="/products" className="home-btn home-btn-primary">
              Explore Our Products <ArrowRight size={18} />
            </Link>

            <Link to="/contact" className="home-btn home-btn-outline">
              Request a Quote
            </Link>
          </div>

          <div className="home-hero-trust">
            <ShieldCheck size={20} />
            <span>Reliable Supply. Professional Service. Quality Solutions.</span>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="home-intro home-section">
        <div className="home-container home-intro-grid">
          <div className="home-intro-image">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85"
              alt="Technical professional working with engineering equipment"
            />
            <div className="home-image-label">
              <strong>Engineering Solutions</strong>
              <span>Built around your operational needs</span>
            </div>
          </div>

          <div className="home-intro-content">
            <span className="home-section-label">WHO WE ARE</span>
            <h2>
              Your Partner in <span>Engineering Excellence</span>
            </h2>

            <p>
              D' PRIME Global Ltd is focused on providing equipment,
              procurement and technical solutions to businesses and
              institutions across different sectors.
            </p>

            <p>
              From laboratory and medical equipment to industrial machinery
              and IT products, we support our clients with dependable supply
              and technical services.
            </p>

            <ul className="home-check-list">
              <li><CheckCircle2 /> Equipment procurement and supply</li>
              <li><CheckCircle2 /> Installation and maintenance services</li>
              <li><CheckCircle2 /> Technical and industrial solutions</li>
            </ul>

            <Link to="/about" className="home-text-link">
              Learn More About Us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="home-services home-section">
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-section-label">WHAT WE DO</span>
            <h2>Our Core Services</h2>
            <p>
              Practical equipment and technical solutions designed to support
              your organisation.
            </p>
          </div>

          <div className="home-service-grid">
            {services.map((service, index) => (
              <article className="home-service-card" key={index}>
                <div className="home-service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link to="/services" aria-label={`Learn about ${service.title}`}>
                  Learn More <ArrowRight size={16} />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="home-products home-section">
        <div className="home-container">
          <div className="home-section-heading home-heading-row">
            <div>
              <span className="home-section-label">OUR EQUIPMENT</span>
              <h2>Explore Our Product Categories</h2>
              <p>
                Equipment and products for professional and industrial
                applications.
              </p>
            </div>

            <Link to="/products" className="home-text-link">
              View All Products <ArrowRight size={18} />
            </Link>
          </div>

          <div className="home-category-grid">
            {categories.map((category, index) => (
              <Link
                to="/products"
                className="home-category-card"
                key={index}
              >
                <img src={category.image} alt={category.title} />
                <div className="home-category-overlay">
                  <h3>{category.title}</h3>
                  <span>
                    Explore Category <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="home-industries home-section">
        <div className="home-container">
          <div className="home-section-heading">
            <span className="home-section-label">WHO WE SERVE</span>
            <h2>Industries We Support</h2>
            <p>
              Supporting organisations with equipment and technical
              solutions across key sectors.
            </p>
          </div>

          <div className="home-industry-grid">
            {industries.map((industry, index) => (
              <div className="home-industry-card" key={index}>
                <div>{industry.icon}</div>
                <h3>{industry.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="home-cta">
        <div className="home-container home-cta-content">
          <div>
            <span className="home-section-label">LET'S WORK TOGETHER</span>
            <h2>Looking for Reliable Equipment or Technical Solutions?</h2>
            <p>
              Tell us what your organisation needs. Our team is ready to
              receive your enquiry.
            </p>
          </div>

          <Link to="/contact" className="home-btn home-btn-light">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
