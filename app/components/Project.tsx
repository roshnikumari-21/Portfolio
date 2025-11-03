'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimationWrapper from './AnimationWrapper';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "KnightMare - Chess AI Platform",
    description: "Full-stack chess application with AI opponent using Stockfish engine, user authentication, and global leaderboard. Features real-time game play and user statistics tracking.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Stockfish"],
    github: "https://github.com/roshnikumari-21/KnightMare",
    live: "https://knightmare.onrender.com/",
    featured: true
  },
  {
    id: 2,
    title: "AuraPredict - Cancer Prediction ML App",
    description: "Machine learning web application for early cancer prediction using diagnostic data. Features real-time predictions and interactive data visualizations.",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "ML"],
    github: "https://github.com/roshnikumari-21/AuraPredict",
    live: "#",
    featured: true
  },
  {
    id: 3,
    title: "ProfPort - Professor Portfolio System",
    description: "Comprehensive portfolio management system for professors with admin controls, dynamic content management, and intuitive interface for academic professionals.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/roshnikumari-21/ProfPort",
    live: "https://profport.onrender.com/",
    featured: false
  },
  {
    id: 4,
    title: "Stackelberg Competition Research",
    description: "Research project implementing genetic algorithms for hierarchical decision-making in supply chain optimization using Stackelberg competition models.",
    technologies: ["Python", "DEAP", "SciPy", "NumPy", "Genetic Algorithms"],
    github: "https://github.com/roshnikumari-21/Stackelberg-Competition",
    live: "#",
    featured: false
  },
  {
  id: 5,
  title: "StyleSync & Swyft - AI Fashion Platform",
  description: "Myntra Hackerramp project featuring AI-powered fashion experience with virtual try-on (StyleSync) and personalized discovery feed (Swyft). Uses computer vision, generative AI, and recommendation systems to create immersive, intelligent fashion shopping for Gen Z.",
  technologies: ["React", "Node.js", "TensorFlow.js", "Python", "OpenCV", "Generative AI", "Computer Vision", "MongoDB"],
  github: "https://github.com/roshnikumari-21/MyntraHackerRamp",
  live: "https://myntra-hackerramp-five.vercel.app/",
  featured: true
},
{
  id: 6,
  title: "DSA Solutions & Interview Prep",
  description: "Comprehensive collection of Data Structures and Algorithms solutions organized by topic. Serves as personal reference and interview preparation resource with clean, well-structured code and explanations for frequently asked coding problems across platforms.",
  technologies: ["C++", "Python", "Java", "Algorithms", "Data Structures", "Problem Solving"],
  github: "https://github.com/roshnikumari-21/DSA",
  live: "#",
  featured: false
}
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.section-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      projectRefs.current.forEach((project, index) => {
        if (project) {
          gsap.fromTo(project,
            { 
              y: 60, 
              opacity: 0,
              scale: 0.9
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.2,
              scrollTrigger: {
                trigger: project,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const addToProjectRefs = (el: HTMLDivElement | null) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-4">Featured Projects</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are some of my projects that showcase my skills in full-stack development, machine learning, and problem-solving
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={addToProjectRefs}
              className={`bg-gray-800 rounded-xl p-6 border transition-all duration-500 transform hover:-translate-y-2 shadow-lg hover:shadow-xl ${
                project.featured 
                  ? 'border-blue-500/30 hover:border-blue-500/50 hover:shadow-blue-500/10' 
                  : 'border-white/10 hover:border-blue-500/30 hover:shadow-blue-500/5'
              }`}
            >
              {project.featured && (
                <div className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-medium mb-4 border border-blue-500/30">
                  ⭐ Featured
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="bg-gray-700/50 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1 group"
                >
                  <span>GitHub</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center gap-1 group"
                >
                  <span>Live Demo</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Stats */}
        <div className="mt-16 text-center">
          <AnimationWrapper animation="fadeUp">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-white">Coding Journey</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">1500+</div>
                  <div className="text-gray-400 text-sm">Problems Solved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">3★</div>
                  <div className="text-gray-400 text-sm">CodeChef Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">1227</div>
                  <div className="text-gray-400 text-sm">Codeforces Max</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">1726</div>
                  <div className="text-gray-400 text-sm">LeetCode Contest</div>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  )
}