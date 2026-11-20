
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import "../styles/privacy-policy.css";

function PrivacyPolicy() {
  return (
    <main className="privacy-page">
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <span>YOUR PRIVACY MATTERS</span>
          <h1>Privacy Policy</h1>
          <p>
            How D' PRIME Global Ltd collects, uses and protects
            your personal information when you use our website.
          </p>
          <small>Last Updated: 13 November 2026</small>
        </div>
      </section>

      <section className="privacy-content-section">
        <div className="privacy-content">

          <div className="privacy-intro">
            <ShieldCheck size={42} />
            <div>
              <h2>Our Commitment to Your Privacy</h2>
              <p>
                D' PRIME Global Ltd respects your privacy and is
                committed to handling your personal information
                responsibly. This policy explains what information
                we collect, why we collect it, how it is used and
                the choices available to you.
              </p>
            </div>
          </div>

          <div className="privacy-section">
            <h2>1. Information We Collect</h2>
            <p>
              When you interact with our website, particularly
              through our contact and enquiry forms, we may collect:
            </p>
            <ul>
              <li>Your full name.</li>
              <li>Your email address.</li>
              <li>Your phone number, where provided.</li>
              <li>The subject and contents of your enquiry.</li>
              <li>Any additional information you voluntarily provide.</li>
            </ul>
            <p>
              Basic technical information may also be processed
              by our website hosting and service providers when
              you access the website.
            </p>
          </div>

          <div className="privacy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use information collected to:</p>
            <ul>
              <li>Respond to enquiries and customer requests.</li>
              <li>Prepare quotations and discuss equipment requirements.</li>
              <li>Provide information about our products and services.</li>
              <li>Communicate with prospective and existing clients.</li>
              <li>Maintain the security and proper operation of our website.</li>
              <li>Meet applicable legal and regulatory obligations.</li>
            </ul>
            <p>
              We do not use information submitted through our
              contact form for unrelated marketing purposes.
            </p>
          </div>

          <div className="privacy-section">
            <h2>3. Legal Basis for Processing</h2>
            <p>
              Where applicable under the Nigeria Data Protection
              Act 2023, we process personal information on
              appropriate lawful grounds. These may include:
            </p>
            <ul>
              <li>
                Taking steps at your request before entering
                into a business relationship or contract.
              </li>
              <li>
                Our legitimate interests in responding to
                enquiries and operating our business, where
                those interests do not override your rights.
              </li>
              <li>
                Compliance with legal obligations.
              </li>
              <li>
                Your consent, where consent is required.
              </li>
            </ul>
          </div>

          <div className="privacy-section">
            <h2>4. Third-Party Services</h2>
            <p>
              We use selected third-party services to operate
              certain website features:
            </p>

            <h3>Web3Forms</h3>
            <p>
              Our contact form uses Web3Forms to process and
              deliver enquiries to our designated email inbox.
              Information submitted through the form may be
              transmitted to and processed by Web3Forms and
              its infrastructure providers.
            </p>
            <p>
              You can read its
              {" "}
              <a
                href="https://web3forms.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>.
            </p>

            <h3>Google Maps</h3>
            <p>
              Our contact page may display an embedded Google
              Maps location. Loading or interacting with the
              map may allow Google to process technical
              information, such as your IP address and browser
              information, in accordance with Google's privacy
              practices.
            </p>
            <p>
              See
              {" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's Privacy Policy
              </a>.
            </p>

            <h3>Website Hosting</h3>
            <p>
              Our website is hosted through Vercel. The hosting
              provider may process technical information and
              server logs necessary to deliver, secure and
              maintain the website.
            </p>
            <p>
              See
              {" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel's Privacy Policy
              </a>.
            </p>
          </div>

          <div className="privacy-section">
            <h2>5. Cookies and Tracking</h2>
            <p>
              We do not currently install Google Analytics,
              Meta Pixel or similar advertising and visitor
              analytics tracking tools on this website.
            </p>
            <p>
              However, essential technical processes, hosting
              services and embedded third-party features may
              use cookies or similar technologies where
              necessary for their operation.
            </p>
          </div>

          <div className="privacy-section">
            <h2>6. Data Sharing and International Transfers</h2>
            <p>
              We do not sell your personal information.
              We may share information with service providers
              where necessary to operate our website, process
              enquiries or provide requested services.
            </p>
            <p>
              Some service providers may process information
              outside Nigeria. Where applicable, we take
              appropriate steps to ensure that personal
              information is handled in accordance with
              applicable data protection requirements.
            </p>
          </div>

          <div className="privacy-section">
            <h2>7. Data Retention</h2>
            <p>
              We retain personal information only for as long
              as reasonably necessary to respond to enquiries,
              maintain relevant business communications,
              fulfil contractual obligations and comply with
              legal requirements.
            </p>
            <p>
              Information processed by third-party providers
              may also be subject to their own retention
              policies. For example, Web3Forms publishes
              information about its submission retention
              periods in its privacy documentation.
            </p>
          </div>

          <div className="privacy-section">
            <h2>8. Data Security</h2>
            <p>
              We take reasonable technical and organisational
              measures to protect personal information against
              unauthorised access, disclosure, alteration,
              loss or misuse.
            </p>
            <p>
              However, no method of internet transmission or
              electronic storage can be guaranteed to be
              completely secure.
            </p>
          </div>

          <div className="privacy-section">
            <h2>9. Your Privacy Rights</h2>
            <p>
              Subject to applicable law, you may have the
              right to:
            </p>
            <ul>
              <li>Request access to your personal information.</li>
              <li>Request correction of inaccurate information.</li>
              <li>Request deletion of your personal information.</li>
              <li>Object to or request restriction of certain processing.</li>
              <li>Withdraw consent where processing relies on consent.</li>
              <li>Request information about how your data is processed.</li>
              <li>Lodge a complaint with the Nigeria Data Protection Commission.</li>
            </ul>
            <p>
              To exercise these rights, contact us using the
              details below. We may need to verify your
              identity before responding.
            </p>
          </div>

          <div className="privacy-section">
            <h2>10. External Websites</h2>
            <p>
              Our website may contain links to external
              websites and services. We are not responsible
              for the privacy practices or content of those
              third-party websites. We encourage you to
              review their privacy policies.
            </p>
          </div>

          <div className="privacy-section">
            <h2>11. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy when our
              website, services or legal obligations change.
              Any updated version will be published on this
              page with a revised update date.
            </p>
          </div>

          <div className="privacy-contact">
            <h2>12. Contact Us About Privacy</h2>
            <p>
              If you have questions about this policy or
              wish to make a privacy-related request,
              please contact D' PRIME Global Ltd.
            </p>

            <div className="privacy-contact-details">
              <a href="mailto:dprimeglobal@gmail.com">
                <Mail size={18} />
                dprimeglobal@gmail.com
              </a>

              <a href="tel:+2347047002681">
                <Phone size={18} />
                07047002681
              </a>

              <div>
                <MapPin size={18} />
                Lagos State, Nigeria
              </div>
            </div>
          </div>

          <Link to="/" className="privacy-back-link">
            <ArrowLeft size={17} />
            Back to Home
          </Link>

        </div>
      </section>
    </main>
  );
}

export default PrivacyPolicy;
