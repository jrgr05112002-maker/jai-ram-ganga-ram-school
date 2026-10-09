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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
  `${import.meta.env.VITE_API_URL}/api/enquiries`,
  formData
);

      setStatus("Thank you! Your enquiry has been submitted.");
      setFormData({
        name: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatus("Unable to submit enquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-heading">
          <div className="eyebrow">Contact</div>
          <h2>We would be happy to hear from you.</h2>
          <p>
            For admissions, school information or a visit, please contact the school.
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
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Send Enquiry
            </button>

            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;