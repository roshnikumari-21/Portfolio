

// import React from "react";


// function Footer() {
//   return (
//     <footer className="bg-dark text-light text-center text-lg-start mt-5">
//       <div className="container p-4">
//         <div className="row">
        
//           <div className="col-lg-4 col-md-6 mb-4">
//             <h5 className="text-uppercase">Quick Links</h5>
//             <ul className="list-unstyled">
//               <li><a href="#" className="text-light text-decoration-none">Home</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Projects</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Research Papers</a></li>
//               <li><a href="#" className="text-light text-decoration-none">Blog</a></li>
//             </ul>
//           </div>

         
//           <div className="col-lg-4 col-md-6 mb-4">
//             <h5 className="text-uppercase">Contact</h5>
//             <p>Email: dk.sharma@nitjsr.ac.in</p>
//             <p>Phone: +91 98765 43210</p>
//             <div>
//               <a href="#" className="text-light me-3"><i className="fab fa-facebook"></i></a>
//               <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
//               <a href="#" className="text-light me-3"><i className="fab fa-linkedin"></i></a>
//             </div>
//           </div>

          
//           <div className="col-lg-4 col-md-12 mb-4">
//             <h5 className="text-uppercase">About</h5>
//             <p>This portfolio showcases research, projects, and achievements of a Dr. D.K Sharma. Stay updated with the latest publications and contributions.</p>
//           </div>
//         </div>
//       </div>

    
//       <div className="text-center p-3 bg-secondary">
//         © 2024 Professor Portfolio | All Rights Reserved
//       </div>
//     </footer>
//   );
// }

// export default Footer;


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
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/project" className="text-light text-decoration-none">Projects</Link></li>
              <li><Link to="/project" className="text-light text-decoration-none">Research Papers</Link></li>
              <li><Link to="/conference" className="text-light text-decoration-none">Conferences</Link></li>
              <li><Link to="/blog" className="text-light text-decoration-none">Blog</Link></li>

            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="text-uppercase">Contact</h5>
            <p><FaEnvelope /> Email: dk.sharma@nitjsr.ac.in</p>
            <p>📞 Phone: +91 98765 43210</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light me-3"><FaFacebook size={20} /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light me-3"><FaTwitter size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light me-3"><FaLinkedin size={20} /></a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-light me-3"><FaTelegram size={20} /></a>
              <Link to="/contact" className="text-light me-3"><FaEnvelope size={20} /></Link>
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
