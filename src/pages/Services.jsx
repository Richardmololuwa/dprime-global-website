
import "../styles/services.css";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingCart,
  Truck,
  Settings,
  Wrench,
  Globe2,
  ShieldCheck,
  CheckCircle2,
  ClipboardCheck,
  Headset,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: <ShoppingCart />,
    title: "Engineering Equipment Procurement",
    description:
      "We support organisations in sourcing engineering and technical equipment based on their operational requirements, specifications and intended applications.",
    points: [
      "Equipment sourcing and supplier identification",
      "Procurement support and coordination",
      "Product specification consideration",
      "Supply solutions for institutional and industrial needs",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    icon: <Truck />,
    title: "Equipment Supply & Distribution",
    description:
      "We focus on the supply and distribution of a wide range of professional equipment and products for businesses, institutions and industries.",
    points: [
      "Laboratory and scientific equipment",
      "Medical and hospital equipment",
      "Industrial machinery and components",
      "Safety equipment and IT products",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    icon: <Settings />,
    title: "Equipment Installation & Commissioning",
    description:
      "We aim to support equipment deployment through installation and commissioning services suited to the equipment and project requirements.",
    points: [
      "Equipment installation coordination",
      "Setup and configuration support",
      "Operational readiness checks",
      "Technical assistance during deployment",
    ],
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "04",
    icon: <Wrench />,
    title: "Maintenance & Technical Support",
    description:
      "We recognise the importance of keeping equipment in good working condition. Our maintenance and technical support offering is designed around clients' equipment needs.",
    points: [
      "Equipment maintenance support",
      "Technical assessment and troubleshooting",
      "Preventive maintenance coordination",
      "Equipment servicing support",
    ],
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "05",
    icon: <Globe2 />,
    title: "Importation & Product Sourcing",
    description:
      "We focus on sourcing and importation of engineering, industrial, laboratory and technical products to meet specific client requirements.",
    points: [
      "International product sourcing",
      "Importation coordination",
      "Supplier and product research",
      "Procurement of specialised equipment",
    ],
    image:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "06",
    icon: <ShieldCheck />,
    title: "Safety & Technical Solutions",
    description:
      "We support organisations with safety equipment and related technical products intended to support safer and more effective working environments.",
    points: [
      "Workplace safety equipment",
      "Industrial protective products",
      "Technical product supply",
      "Equipment solutions based on client requirements",
    ],
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85",
  },
];

const process = [
  {
    icon: <ClipboardCheck />,
    title: "Understand",
    description:
      "We begin by understanding your equipment, procurement or technical requirements.",
  },
  {
    icon: <ShoppingCart />,
    title: "Source",
    description:
      "We identify suitable products and sourcing options based on your needs.",
  },
  {
    icon: <Truck />,
    title: "Deliver",
    description:
      "We coordinate the supply or delivery of the requested equipment.",
  },
  {
    icon: <Headset />,
    title: "Support",
    description:
      "Where applicable, we provide installation, maintenance and technical support.",
  },
];

function Services() {
  return (
    <main className="services-page">

      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay"></div>

        <div className="services-container services-hero-content">
          <span className="services-eyebrow">
            OUR EXPERTISE & CAPABILITIES
          </span>

          <h1>
            Professional Services.
            <span> Practical Solutions.</span>
          </h1>

          <p>
            Explore our engineering, procurement, equipment supply and
            technical service areas.
          </p>

          <div className="services-breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro services-section">
        <div className="services-container">
          <span className="services-label">WHAT WE OFFER</span>
          <h2>Solutions That Support Your Operations</h2>
          <p>
            From equipment procurement and supply to installation and
            maintenance support, our service areas are designed to address
            different technical and operational requirements.
          </p>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section className="services-list services-section">
        <div className="services-container">

          {services.map((service, index) => (
            <article
              className={`services-detail-card ${
                index % 2 !== 0 ? "services-reverse" : ""
              }`}
              key={service.number}
            >
              <div className="services-detail-image">
                <img src={service.image} alt={service.title} />
                <span className="services-number">{service.number}</span>
              </div>

              <div className="services-detail-content">
                <div className="services-detail-icon">
                  {service.icon}
                </div>

                <span className="services-label">OUR SERVICES</span>

                <h2>{service.title}</h2>

                <p>{service.description}</p>

                <ul>
                  {service.points.map((point, pointIndex) => (
                    <li key={pointIndex}>
                      <CheckCircle2 size={18} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/request-quote"
                  className="services-enquiry-link"
                >
                  Enquire About This Service <ArrowRight size={17} />
                </Link>
              </div>
            </article>
          ))}

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="services-process services-section">
        <div className="services-container">

          <div className="services-section-heading">
            <span className="services-label">OUR APPROACH</span>
            <h2>How We Work</h2>
            <p>
              A straightforward approach to understanding and responding
              to your equipment and technical requirements.
            </p>
          </div>

          <div className="services-process-grid">
            {process.map((step, index) => (
              <article className="services-process-card" key={index}>
                <span className="services-process-number">
                  {`0${index + 1}`}
                </span>

                <div className="services-process-icon">
                  {step.icon}
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="services-cta">
        <div className="services-container services-cta-content">
          <div>
            <span className="services-label">NEED A SOLUTION?</span>
            <h2>Let's Discuss Your Equipment Requirements</h2>
            <p>
              Contact us with your procurement, equipment supply or
              technical service enquiry.
            </p>
          </div>

          <Link to="/contact" className="services-cta-button">
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Services;
