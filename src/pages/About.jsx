
import "../styles/about.css";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Award,
  Users,
  Handshake,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    icon: <ShieldCheck />,
    title: "Quality",
    description:
      "We prioritise quality in the equipment and solutions we source and supply, with attention to our clients' requirements.",
  },
  {
    icon: <Handshake />,
    title: "Integrity",
    description:
      "We value transparency, honesty and responsible business relationships in every engagement.",
  },
  {
    icon: <Award />,
    title: "Professionalism",
    description:
      "We approach procurement and technical services with care, responsibility and a commitment to professional standards.",
  },
  {
    icon: <Users />,
    title: "Customer Focus",
    description:
      "We listen to our clients and work to understand their operational needs before recommending suitable solutions.",
  },
];

const strengths = [
  "Broad range of engineering and technical equipment",
  "Procurement and supply solutions",
  "Installation and maintenance support",
  "Importation and distribution services",
  "Solutions for multiple professional industries",
  "A customer-focused approach to service delivery",
];

function About() {
  return (
    <main className="about-page">

      {/* PAGE HERO */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="about-container about-hero-content">
          <span className="about-eyebrow">GET TO KNOW US</span>
          <h1>About D' PRIME Global Ltd</h1>
          <p>
            Engineering solutions, equipment procurement and technical
            services designed to support organisations and industries.
          </p>

          <div className="about-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="about-overview about-section">
        <div className="about-container about-overview-grid">

          <div className="about-overview-image">
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85"
              alt="Engineering professionals working with technical equipment"
            />
            <div className="about-image-accent"></div>
          </div>

          <div className="about-overview-content">
            <span className="about-label">WHO WE ARE</span>

            <h2>
              Delivering Equipment and
              <span> Technical Solutions</span>
            </h2>

            <p>
              D' PRIME Global Ltd is an engineering and procurement-focused
              company involved in the supply, installation, maintenance,
              importation and distribution of a wide range of professional
              equipment and technical products.
            </p>

            <p>
              Our areas of focus include engineering equipment, laboratory
              equipment, hospital and medical equipment, industrial machinery,
              safety equipment and information technology products.
            </p>

            <p>
              We aim to support businesses, institutions and organisations
              with dependable sourcing, practical solutions and services
              aligned with their operational requirements.
            </p>

            <Link to="/services" className="about-link">
              Explore Our Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION AND VISION */}
      <section className="about-purpose about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">OUR PURPOSE</span>
            <h2>What Drives Us</h2>
            <p>
              Our direction is guided by the value we aim to create for
              clients and the industries we serve.
            </p>
          </div>

          <div className="about-purpose-grid">

            <article className="about-purpose-card">
              <div className="about-purpose-icon">
                <Target />
              </div>
              <span>OUR MISSION</span>
              <h3>Providing Dependable Solutions</h3>
              <p>
                To provide access to quality engineering, laboratory,
                medical and industrial equipment, supported by dependable
                procurement and technical services that address our clients'
                needs.
              </p>
            </article>

            <article className="about-purpose-card about-vision-card">
              <div className="about-purpose-icon">
                <Eye />
              </div>
              <span>OUR VISION</span>
              <h3>Building Lasting Partnerships</h3>
              <p>
                To be a trusted provider of equipment and technical solutions,
                recognised for reliability, professionalism and our
                contribution to the organisations and industries we serve.
              </p>
            </article>

          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="about-values about-section">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-label">WHAT WE STAND FOR</span>
            <h2>Our Core Values</h2>
            <p>
              The principles that guide our business relationships,
              services and approach to every client.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value, index) => (
              <article className="about-value-card" key={index}>
                <div className="about-value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="about-why about-section">
        <div className="about-container about-why-grid">

          <div className="about-why-content">
            <span className="about-label">WHY WORK WITH US</span>
            <h2>
              Solutions That Support
              <span> Your Operations</span>
            </h2>

            <p>
              We understand that access to suitable equipment and dependable
              technical services is important to effective operations.
              Our approach focuses on understanding client requirements
              and providing relevant solutions.
            </p>

            <div className="about-strength-list">
              {strengths.map((strength, index) => (
                <div className="about-strength-item" key={index}>
                  <CheckCircle2 size={19} />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-why-image">
            <img
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85"
              alt="Engineering technician inspecting industrial machinery"
            />
          </div>

        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <div className="about-container about-cta-content">
          <div>
            <span className="about-label">LET'S CONNECT</span>
            <h2>Have an Equipment or Technical Requirement?</h2>
            <p>
              Get in touch with us to discuss your procurement,
              equipment and technical service needs.
            </p>
          </div>

          <Link to="/contact" className="about-cta-button">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default About;
