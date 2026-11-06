
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
      "We are committed to supplying products that meet appropriate specifications and customer requirements.",
  },
  {
    icon: <Handshake />,
    title: "Integrity",
    description:
      "We conduct our business with honesty, transparency and accountability.",
  },
  {
    icon: <Award />,
    title: "Professionalism",
    description:
      "We listen to our customers and work to provide solutions that address their specific needs.",
  },
  {
    icon: <Users />,
    title: "Customer Focus",
    description:
      "We listen to our clients and work to understand their operational needs before recommending suitable solutions.",
  },
  {
    icon: <ShieldCheck />,
    title: "Reliability",
    description:
      "We strive to deliver the right products at the agreed time and according to agreed specifications.",
  },
  {
    icon: <Award />,
    title: "Professionalism",
    description:
      "We listen to our customers and work to provide solutions that address their specific needs.",
  },
];

const strengths = [
  "Quality Products - We focus on supplying products that meet our clients' requirements.",
  "Reliable Delivery - We understand the importance of timely delivery, particularly for institutional and healthcare clients.",
  "Customer-Focused Service - We work closely with clients to understand their individual procurement needs.",
  "Competitive Solutions - We seek appropriate sourcing options that provide value for money.",
  "Professional Integrity - We conduct our business with transparency, accountability and respect for our clients and business partners.",
 
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
              src="https://i.pinimg.com/1200x/88/c8/c3/88c8c326acfdb9e5e4861dafb68f4622.jpg"
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
             <b>D'PRIME GLOBAL LTD</b> is a Nigerian company engaged in the supply and distribution of  
             <b> engineering equipment, laboratory equipment, medical and hospital equipment, safety equipment, 
             and related industrial products.</b>
            </p>


            <p>
              We are committed to providing quality products and dependable supply solutions to 
              government institutions, healthcare facilities, laboratories, industries, educational 
              institutions, engineering organizations and corporate clients.

            </p>
            <p>
              Our business is founded on the principles of quality, integrity, reliability, 
              professionalism and customer satisfaction. We understand that our clients require 
              not only quality products but also timely delivery, competitive pricing and responsive service.
            </p>

            <p>
              We aim to support businesses, institutions and organisations
              with dependable sourcing, practical solutions and services
              aligned with their operational requirements.
            </p>

            <p>At D'PRIME GLOBAL LTD, we therefore seek to build long-term relationships with our clients by 
              consistently providing products and services that meet their specifications and operational requirements</p>

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
                To deliver quality products, reliable supply services and customer-focused solutions
                that contribute to the efficiency, safety and productivity of the organizations we serve.
              </p>
            </article>

            <article className="about-purpose-card about-vision-card">
              <div className="about-purpose-icon">
                <Eye />
              </div>
              <span>OUR VISION</span>
              <h3>Building Lasting Partnerships</h3>
              <p>
                To become a trusted and leading provider of quality equipment
                and supply solutions in Nigeria and beyond.
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
            <span className="about-label">WHY CHOOSE US?</span>
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
