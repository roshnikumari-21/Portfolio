




import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/user`);
        console.log("Fetched profile:", res.data); 
        setProfile(res.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header Section */}
      <header className="bg-white p-6 rounded-lg shadow flex flex-col md:flex-row gap-6 items-center">

        <img
           src={profile.profilePicture || "https://wallpapers-clan.com/wp-content/uploads/2024/06/cute-cat-peeking-over-edge-desktop-wallpaper-preview.jpg"}
          alt={profile.name}
          className="w-1/4 h-1/4 rounded-xl border-4 border-blue-500 shadow"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            {profile.name?.split(" ")[0]}{" "}
            <span className="text-blue-600">{profile.name?.split(" ")[1]}</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">{profile.position}</p>
          <p className="text-sm">
            <strong>Email:</strong>{" "}
            <a href={`mailto:${profile.email}`} className="text-blue-600 underline">
              {profile.email}
            </a>
          </p>
          <p className="text-sm">
            <strong>Phone:</strong>{" "}
            <a href={`tel:${profile.phone}`} className="text-blue-600 underline">
              {profile.phone}
            </a>
          </p>
        </div>
      </header>

      {/* Education */}
      <Section title="Education" icon="🎓" bg="bg-gray-50">
        <ul className="list-disc pl-5 space-y-2">
          <li>Ph.D. in AI – IISc Bangalore</li>
          <li>M.Tech in Software Design – IIT Kharagpur</li>
          <li>B.Tech in CSE – NIT Warangal</li>
        </ul>
      </Section>

      {/* About */}
      <Section title="About" icon="🧑‍🏫" bg="bg-white">
        <p>
          Dr. D.K. Sharma has over <strong>10 years</strong> of experience in academia,
          specializing in AI and Data Science. He currently serves at{" "}
          <strong>NIT Jamshedpur</strong>.
        </p>
      </Section>

      {/* Research Interests */}
      <Section title="Research Interests" icon="🔬" bg="bg-gray-50">
        <ul className="list-disc pl-5 space-y-2">
          <li>Machine Learning</li>
          <li>Natural Language Processing</li>
          <li>Computer Vision</li>
          <li>AI Ethics</li>
        </ul>
      </Section>

      {/* Courses */}
      <Section title="Courses Taught" icon="📚" bg="bg-white">
        <ul className="list-disc pl-5 space-y-2">
          <li>DSA</li>
          <li>Machine Learning</li>
          <li>Software Engineering</li>
          <li>Cloud Computing</li>
        </ul>
      </Section>

      {/* Publications */}
      <Section title="Publications" icon="📝" bg="bg-gray-50">
        <ul className="list-disc pl-5 space-y-2">
          <li>"Optimizing ML Algorithms" – IJCS&T</li>
          <li>"Ethics in AI" – Journal of AI Research</li>
        </ul>
      </Section>

      {/* Projects */}
      <Section title="Projects & Grants" icon="💡" bg="bg-white">
        <ul className="list-disc pl-5 space-y-2">
          <li>"AI for Smart Cities" – Funded by MeitY</li>
        </ul>
      </Section>

      {/* Conferences */}
      <Section title="Conferences & Workshops" icon="🎤" bg="bg-gray-50">
        <ul className="list-disc pl-5 space-y-2">
          <li>ICMLA 2023 – Presenter</li>
          <li>Workshop on Deep Learning – NITJSR 2022</li>
        </ul>
      </Section>

      {/* Memberships */}
      <Section title="Professional Memberships" icon="👥" bg="bg-white">
        <ul className="list-disc pl-5 space-y-2">
          <li>IEEE Computer Society</li>
          <li>ACM Member</li>
        </ul>
      </Section>

      {/* Footer */}
      <footer className="text-center mt-10 py-4 text-sm text-white bg-blue-600 rounded-lg">
        Feel free to reach out for collaborations or research inquiries.
      </footer>
    </div>
  );
};

const Section = ({ title, children, icon, bg }) => (
  <section className={`${bg} my-6 p-6 rounded-lg shadow`}>
    <h2 className="text-xl font-semibold mb-3 text-blue-700">
      {icon} {title}
    </h2>
    {children}
  </section>
);

export default Home;
