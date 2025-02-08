

import React from "react";


function Footer() {
  return (
    <footer className="bg-dark text-light text-center text-lg-start mt-5">
      <div className="container p-4">
        <div className="row">
        
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Projects</a></li>
              <li><a href="#" className="text-light text-decoration-none">Research Papers</a></li>
              <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
            </ul>
          </div>

         
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact</h5>
            <p>Email: professor@example.com</p>
            <p>Phone: +91 98765 43210</p>
            <div>
              <a href="#" className="text-light me-3"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>

          
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="text-uppercase">About</h5>
            <p>This portfolio showcases research, projects, and achievements of a professor. Stay updated with the latest publications and contributions.</p>
          </div>
        </div>
      </div>

    
      <div className="text-center p-3 bg-secondary">
        © 2024 Professor Portfolio | All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;

