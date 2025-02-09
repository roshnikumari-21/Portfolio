

import React from "react";

const Home = () => {
  return (
    <div className="container mt-5">
     
      <header className="row mb-5 p-4  text-black rounded shadow">
        <div className="col-md-4 text-center">
          <img
            src="https://img.freepik.com/premium-photo/full-body-portrait-photo-happy-indian-school-male-teachis-standing-proudly-blurred-background-o_928503-3759.jpg?semt=ais_hybrid"
            alt="Dr. D.K. Sharma"
            className="img-fluid rounded shadow-lg border border-primary p-2"
            style={{ maxWidth: "350px" }}
          />
        </div>
        <div className="col-md-8 mt-2">
          <h1 className="text-black">
            Dr. <span className="text-primary">D</span>.K.{" "}
            <span className="text-primary">S</span>harma
          </h1>
          <h3 className="text-muted pb-2">
            Assistant Professor, Computer Science and Engineering
          </h3>
         

          <p>
            <i class="fas fa-envelope"></i>
            <strong> Email:</strong>{" "}
            <a href="mailto:dk.sharma@nitjsr.ac.in">dk.sharma@nitjsr.ac.in</a>
          </p>
          <p>
            <i class="fas fa-phone"></i>
            <strong> Phone:</strong>{" "}
            <a href="tel:+911234567890">+91-9874567890</a>
          </p>
        </div>
      </header>

     
      <section className="mb-4 p-4 bg-light rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-graduation-cap me-2"></i> Education
        </h2>
        <ul>
          <li>
            <strong>Ph.D. in Artificial Intelligence</strong> - Indian Institute
            of Science (IISc), Bangalore
          </li>
          <li>
          <strong>M.Tech in Software Designing</strong>  - Indian Institute of
          Technology (IIT), Kharagpur
          </li>
          <li>
            <strong>B.Tech in Computer Science</strong> - National Institute of
            Technology (NIT), Warangal
          </li>
        </ul>
      </section>

     
      <section className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-user me-2"></i> About
        </h2>
        <p>
        Dr. D.K. Sharma has over <span className="fw-bold">10 years</span> of experience in academia, specializing in AI and Data Science. He is currently serving as an Assistant Professor at <span className="fw-bold">NIT Jamshedpur</span>. His passion for research and teaching has led to numerous contributions in Computer Science.
        </p>
      </section>

     
      <section className="mb-4 p-4 bg-light rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-microscope me-2"></i> Research Interests
        </h2>
        <ul>
          <li>Machine Learning and Data Mining</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>AI Ethics and Policy</li>
        </ul>
      </section>

     
      <section className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-book me-2"></i> Courses Taught
        </h2>
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Machine Learning</li>
          <li>Software Engineering</li>
          <li>Cloud Computing</li>
        </ul>
      </section>

     
      <section className="mb-4 p-4 bg-light rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-file-alt me-2"></i> Publications
        </h2>
        <ul>
          <li>
            Sharma, D., & Sharma, V. (2022). "Optimizing Machine Learning
            Algorithms for Predictive Analytics."{" "}
            <i>International Journal of Computer Science and Technology.</i>
          </li>
          <li>
            Sharma, D., et al. (2021). "Ethics in AI: A Comprehensive Overview."{" "}
            <i>Journal of AI Research and Policy.</i>
          </li>
        </ul>
      </section>

     
      <section className="mb-4 p-4 bg-white rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-lightbulb me-2"></i> Projects and Grants
        </h2>
        <ul>
          <li>
            Co-investigator on "AI for Smart City Solutions" (2023) funded by
            MeitY.
          </li>
        </ul>
      </section>

    
      <section className="mb-4 p-4 bg-light rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-chalkboard me-2"></i> Conferences and Workshops
        </h2>
        <ul>
          <li>
            Presented at "International Conference on Machine Learning and
            Applications" (2023).
          </li>
          <li>
            Conducted a workshop on "Introduction to Deep Learning" at NIT
            Jamshedpur (2022).
          </li>
        </ul>
      </section>

     

     
      <section className="mb-4 p-4 bg-light rounded shadow">
        <h2 className="text-primary">
          <i className="fas fa-users me-2"></i> Professional Memberships
        </h2>
        <ul>
          <li>Member of the IEEE Computer Society.</li>
          <li>Member of the Association for Computing Machinery (ACM).</li>
        </ul>
      </section>

     
      <footer className="text-center mt-5 p-4 bg-primary text-white rounded shadow">
        <p>Feel free to reach out for collaborations or research inquiries.</p>
      </footer>
    </div>
  );
};

export default Home;
