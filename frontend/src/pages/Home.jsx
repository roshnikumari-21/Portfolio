import React, { useState, useEffect } from "react";

const Home = () => {


  return (
    <div className="container mt-5">
      <header className="row mb-5">
        <div className="col-md-4 text-center">
          <img
            src="https://img.freepik.com/premium-photo/full-body-portrait-photo-happy-indian-school-male-teachis-standing-proudly-blurred-background-o_928503-3759.jpg?semt=ais_hybrid"
            alt="Dr. D.K. Sharma"
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-8 mt-2">
          <h1 className="text-primary">Dr. D.K. Sharma</h1>
          <h3>Assistant Professor, Computer Science and Engineering</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:dk.sharma@nitjsr.ac.in">
              dk.sharma@nitjsr.ac.in
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+911234567890">+91-9874567890</a>
          </p>
        </div>
      </header>

    

      <section className="mb-4">
        <h2 className="text-primary">About</h2>
        <p>
          Dr. D.K. Sharma completed his Bachelor of Technology in Computer
          Science from the Indian Institute of Technology (IIT) Kharagpur and
          received his PhD in Artificial Intelligence from the Indian Institute
          of Science (IISc), Bangalore. With over 10 years of experience in
          academia, Dr. Sharma is passionate about teaching, research, and
          developing innovative solutions in the field of computer science.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-primary">Research Interests</h2>
        <ul>
          <li>Machine Learning and Data Mining</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>AI Ethics and Policy</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-primary">Courses Taught:</h2>
        
        <ul>
          <li>Data Structures and Algorithms</li>
          <li>Machine Learning</li>
          <li>Software Engineering</li>
          <li>Cloud Computing</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-primary">Publications</h2>
        <ul>
          <li>
            Sharma, D., & Sharma, V. (2022). "Optimizing Machine Learning
            Algorithms for Predictive Analytics."{" "}
            <i>International Journal of Computer Science and Technology.</i>
          </li>
          <li>
            Sharma, D., et al. (2021). "Ethics in AI: A Comprehensive Overview."
            <i>Journal of AI Research and Policy.</i>
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-primary">Projects and Grants</h2>
        <ul>
          <li>
            Co-investigator on a project funded by the Ministry of Electronics
            and Information Technology (MeitY) on "AI for Smart City Solutions"
            (2023).
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-primary">Conferences and Workshops</h2>
        <ul>
          <li>
            Presented at the "International Conference on Machine Learning and
            Applications" in 2023.
          </li>
          <li>
            Conducted a workshop on "Introduction to Deep Learning" at NIT
            Jamshedpur in 2022.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-primary">Awards and Honors</h2>
        <ul>
          <li>Awarded the "Best Teachis" award by NIT Jamshedpur in 2021.</li>
          <li>
            Recipient of the "Young Researchis Award" at the National Conference
            on AI in 2020.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="text-primary">Professional Memberships</h2>
        <ul>
          <li>Member of the IEEE Computer Society.</li>
          <li>Member of the Association for Computing Machinery (ACM).</li>
        </ul>
      </section>

      <footer className="text-center mt-5">
        <p>
          Feel free to reach out for consultations, collaborations, or inquiries
          regarding research and teaching.
        </p>
      </footer>
    </div>
  );
};

export default Home;
