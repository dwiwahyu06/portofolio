import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container section">
      <h2>Contact Me</h2>
      <div className="contact-icons" style={{ display: "flex", gap: "20px", fontSize: "2rem" }}>
        
        {/* Email */}
        <a
          href="mailto:dwiwahyuprivate@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Email"
        >
          <FaEnvelope />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/dwiwahyu06/"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/dwi-wahyu-susilowati-39ab6a374/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/6285187238701"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </a>
      </div>
    </div>
  );
};

export default Contact;
