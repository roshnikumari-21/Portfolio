


import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaFacebook, FaTwitter, FaLinkedin, FaTelegram, FaEnvelope } from "react-icons/fa"; // Import social media icons

function Footer() {
  return (
    <footer className="bg-dark text-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">

          {/* Quick Links Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="text-light text-decoration-none hover-effect "   >Home</Link></li>
              <li><Link to="/project" className="text-light text-decoration-none hover-effect">Projects</Link></li>
              <li><Link to="/project" className="text-light text-decoration-none hover-effect">Research Papers</Link></li>
              <li><Link to="/conference" className="text-light text-decoration-none hover-effect">Conferences</Link></li>
              <li><Link to="/blog" className="text-light text-decoration-none hover-effect">Blog</Link></li>

            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact</h5>
            <p><FaEnvelope /> Email: dk.sharma@nitjsr.ac.in</p>
            <p>📞 Phone: +91 98765 43210</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 hover-effect"><FaFacebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 hover-effect"><FaTwitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-3 hover-effect"><FaLinkedin size={20} /></a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-light me-3 hover-effect"><FaTelegram size={20} /></a>
              <Link to="/contact" className="text-light me-3 hover-effect"><FaEnvelope size={20} /></Link>
            </div>
          </div>

          {/* About Section */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="text-uppercase">About</h5>
            <p>This portfolio showcases research, projects, and achievements of Dr. D.K Sharma. Stay updated with the latest publications and contributions.</p>
          </div>

        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center p-3 bg-secondary">
        © 2024 Professor Portfolio | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
