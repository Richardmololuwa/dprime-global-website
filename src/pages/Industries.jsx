
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  Factory,
  FlaskConical,
  HardHat,
  HeartPulse,
  Monitor,
  CheckCircle2,
} from "lucide-react";
import "../styles/industries.css";

const industries = [
  {
    id: 1,
    title: "Healthcare & Hospitals",
    icon: HeartPulse,
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85",
    description:
      "Supporting healthcare facilities with medical equipment and essential supplies designed to support quality patient care.",
    services: [
      "Medical equipment supply",
      "Hospital furniture and accessories",
      "Patient monitoring equipment",
      "Installation and maintenance support",
    ],
  },
  {
    id: 2,
    title: "Laboratories & Research",
    icon: FlaskConical,
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1000&q=85",
    description:
      "Providing laboratory equipment and technical solutions for research centres, diagnostic laboratories and scientific institutions.",
    services: [
      "Laboratory equipment procurement",
      "Scientific instruments",
      "Laboratory accessories",
      "Equipment installation support",
    ],
  },
  {
    id: 3,
    title: "Oil, Gas & Energy",
    icon: Factory,
    image:
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1000&q=85",
    description:
      "Supporting energy and industrial operations through the procurement and supply of relevant technical equipment and supplies.",
    services: [
      "Industrial equipment sourcing",
      "Safety equipment supply",
      "Technical materials procurement",
      "Equipment distribution",
    ],
  },
  {
    id: 4,
    title: "Manufacturing & Industry",
    icon: Building2,
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85",
    description:
      "Helping manufacturing businesses access industrial machinery, operational equipment and technical supplies.",
    services: [
      "Industrial machinery supply",
      "Production equipment sourcing",
      "Mechanical equipment procurement",
      "Maintenance support",
    ],
  },
  {
    id: 5,
    title: "Construction & Engineering",
    icon: HardHat,
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
    description:
      "Supporting engineering and construction operations with equipment, tools and materials required for project execution.",
    services: [
      "Engineering equipment supply",
      "Technical tools and accessories",
      "Safety equipment",
      "Project-related procurement",
    ],
  },
  {
    id: 6,
    title: "Information Technology",
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
    description:
      "Providing IT products and infrastructure solutions to support modern business and institutional operations.",
    services: [
      "Computer and IT equipment",
      "Networking infrastructure",
      "Office technology supplies",
      "IT accessories and peripherals",
    ],
  },
];

function Industries() {
  return (
    <main className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="industries-hero-overlay"></div>

        <div className="industries-hero-content">
          <span>INDUSTRIES WE SERVE</span>
          <h1>
            Supporting Industries.
            <br />
            Delivering Solutions.
          </h1>
          <p>
            From healthcare and research to engineering and manufacturing,
            we provide equipment and procurement solutions that support
            different sectors.
          </p>

          <Link to="/request-quote" className="industries-hero-btn">
            Discuss Your Requirements
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="industries-intro">
        <div className="industries-intro-label">
          <span>OUR INDUSTRY COVERAGE</span>
          <div></div>
        </div>

        <div className="industries-intro-content">
          <h2>
            Equipment and Technical Solutions Across Multiple Sectors
          </h2>

          <p>
            Every industry has unique operational demands. At D' PRIME
            Global Ltd, our focus is on understanding these requirements
            and connecting businesses and institutions with suitable
            equipment, supplies and technical solutions.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="industries-list-section">
        <div className="industries-section-heading">
          <span>WHERE WE MAKE AN IMPACT</span>
          <h2>Industries We Support</h2>
          <p>
            Explore the sectors where our procurement, supply and
            equipment solutions can make a difference.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <article className="industry-card" key={industry.id}>
                <div className="industry-image">
                  <img src={industry.image} alt={industry.title} />
                  <div className="industry-icon">
                    <Icon size={25} />
                  </div>
                </div>

                <div className="industry-card-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.description}</p>

                  <h4>Areas of Support</h4>

                  <ul>
                    {industry.services.map((service, index) => (
                      <li key={index}>
                        <CheckCircle2 size={16} />
                        {service}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    state={{ industry: industry.title }}
                    className="industry-link"
                  >
                    Make an Enquiry
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Our Approach */}
      <section className="industry-approach">
        <div className="industry-approach-image">
          <img
            src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85"
            alt="Technical professionals working with industrial equipment"
          />
        </div>

        <div className="industry-approach-content">
          <span>OUR APPROACH</span>
          <h2>UNDERSTAND → SOURCE → DELIVER → SUPPORT</h2>

          <p>
           We first understand the client's requirements, identify suitable products and suppliers, coordinate procurement and logistics, and ensure delivery according to the agreed requirements.
This approach enables us to provide practical and responsive solutions for different procurement needs.

          </p>

          <div className="industry-approach-points">
            <div>
              <CheckCircle2 size={20} />
              <span>Understanding your equipment requirements</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Identifying suitable products and suppliers</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Coordinating supply and delivery requirements</span>
            </div>

            <div>
              <CheckCircle2 size={20} />
              <span>Providing relevant installation and maintenance support</span>
            </div>
          </div>

          <Link to="/services" className="industry-approach-btn">
            Explore Our Services
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="industries-cta">
        <span>LET'S WORK TOGETHER</span>
        <h2>Looking for the Right Equipment for Your Industry?</h2>
        <p>
          Tell us what your business or organisation needs. Our team
          will be glad to discuss suitable procurement and supply
          solutions.
        </p>

        <Link to="/contact">
          Contact Us
          <ArrowRight size={18} />
        </Link>
      </section>
    </main>
  );
}

export default Industries;
