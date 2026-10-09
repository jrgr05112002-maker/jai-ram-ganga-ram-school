
import { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_BASE_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/enquiries`,
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        setStatus("Thank you! Your enquiry has been submitted.");

        setFormData({
          name: "",
          phone: "",
          message: ""
        });
      }
    } catch (error) {
      console.error("Enquiry submission failed:", error.message);

      if (error.response) {
        console.error("API status:", error.response.status);
        console.error("API response:", error.response.data);
      }

      setStatus("Unable to submit enquiry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Contact</div>

          <h2>We would be happy to hear from you.</h2>

          <p>
            For admissions, school information or a visit,
            please contact the school.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>School Information</h3>

            <div className="contact-item">
              <FaMapMarkerAlt />

              <div>
                <strong>Location</strong>

                <span>
                  Phirni Road, Village Mullanpur Garibdass,
                  Dist. SAS Nagar
                </span>
              </div>
            </div>

            <div className="contact-item">
              <FaPhone />

              <div>
                <strong>Mobile</strong>

                <a href="tel:9417032880">9417032880</a>
                <a href="tel:7508376744">75083 76744</a>
                <a href="tel:8847695799">8847695799</a>
              </div>
            </div>

            <div className="contact-item">
              <FaEnvelope />

              <div>
                <strong>Email</strong>

                <a href="mailto:shrijairamgangaram@gmail.com">
                  shrijairamgangaram@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="contact-name">Name</label>

              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-phone">Phone</label>

              <input
                id="contact-phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                autoComplete="tel"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Message</label>

              <textarea
                id="contact-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
                rows={4}
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Send Enquiry"}
            </button>

            {status && (
              <p
                className="form-status"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
