
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import "../styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);
    setError("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setError(
        "Email service is not configured. Please check your environment variables."
      );
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            subject: `Website Enquiry: ${formData.subject}`,
            enquiry_type: formData.subject,
            message: formData.message,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message. Please try again."
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setError(
        err.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">
          <span>CONTACT D' PRIME GLOBAL LTD</span>
          <h1>Let's Talk About Your Requirements.</h1>
          <p>
            Have a question, need technical equipment or looking for
            a reliable procurement partner? We'd be glad to hear from you.
          </p>

          <a href="#contact-form" className="contact-hero-btn">
            Send Us an Enquiry
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="contact-intro">
        <span>WE'RE HERE TO HELP</span>
        <h2>Get in Touch With Our Team</h2>
        <p>
          Whether you're making a product enquiry, requesting a quotation
          or looking for more information about our services, reach out
          to us through any of the channels below.
        </p>
      </section>

      {/* Contact Details and Form */}
      <section className="contact-main-section">
        <div className="contact-information">
          <div className="contact-info-heading">
            <span>CONTACT INFORMATION</span>
            <h2>We'd Love to Hear From You</h2>
            <p>
              Choose your preferred contact channel and let us know how
              we can assist you.
            </p>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Phone size={22} />
            </div>
            <div>
              <h3>Phone</h3>
              <a href="tel:+2347047002681">07047002681, 08032251861 </a>
              
              <p>Speak with our team</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Mail size={22} />
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:dprimeglobal@gmail.com">
                dprimeglobal@gmail.com, dairorotimi57@gmail.com
              </a>
              
             
              <p>Send us your enquiries</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <MapPin size={22} />
            </div>
            <div>
              <h3>Location</h3>
              <p className="contact-location">
                5 Unity Drive, Ibukun Estate, Alimosho, Lagos, Nigeria
              </p>
              <p>Serving businesses and institutions</p>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon">
              <Clock size={22} />
            </div>
            <div>
              <h3>Business Enquiries</h3>
              <p className="contact-location">
                Contact us through phone or email
              </p>
              <p>We'll respond as soon as possible.</p>
            </div>
          </div>

         
        </div>

        {/* Contact Form */}
        <div className="contact-form-container" id="contact-form">
          <div className="contact-form-heading">
            <span>SEND US A MESSAGE</span>
            <h2>How Can We Help You?</h2>
            <p>
              Complete the form below and provide a few details about
              your enquiry.
            </p>
          </div>

          {submitted && (
            <div
              className="contact-success-message"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 size={21} />
              <span>
                Thank you for your enquiry! Your message has been
                sent successfully. We'll get back to you soon.
              </span>
            </div>
          )}

          {error && (
            <div
              className="contact-error-message"
              role="alert"
              aria-live="assertive"
            >
              <AlertCircle size={21} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="contact-name">Full Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-form-group">
                <label htmlFor="contact-phone">Phone Number</label>
                <input
                  type="tel"
                  id="contact-phone"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form-group">
                <label htmlFor="contact-subject">Enquiry Subject *</label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select an enquiry type</option>
                  <option value="Product Enquiry">Product Enquiry</option>
                  <option value="Procurement">Procurement</option>
                  <option value="Installation">Installation</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Partnership">Business Partnership</option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
              </div>
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message">Your Message *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="6"
                placeholder="Tell us how we can assist you..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="contact-submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending Message..." : "Send Message"}
              <Send size={18} />
            </button>

            <p className="contact-form-disclaimer">
              * Required fields
            </p>
          </form>
        </div>
      </section>

      {/* Location Section */}
 
{/* Location Section */}
<section className="contact-location-section">
  <div className="contact-location-info">
    <span>OUR LOCATION</span>
    <h2>Based in Lagos, Nigeria</h2>
    <p>
      Connect with D' PRIME Global Ltd for equipment procurement,
      supply and technical service enquiries.
    </p>

    <a
      href="https://maps.app.goo.gl/pq7DE13gV8z7AFzM6?g_st=ic"
      target="_blank"
      rel="noopener noreferrer"
      className="location-directions"
    >
      <MapPin size={18} />
      Get Directions
    </a>
  </div>

  <div className="contact-location-visual">
    <iframe
      title="D' PRIME Global Ltd Location"
      src="https://maps.google.com/maps?q=https://maps.app.goo.gl/pq7DE13gV8z7AFzM6&t=&z=15&ie=UTF8&iwloc=&output=embed"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</section>

    </main>
  );
}

export default Contact;
