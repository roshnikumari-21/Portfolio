'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce application built with Next.js, MongoDB, and Stripe integration.",
    technologies: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/project-one",
    live: "https://project-one.vercel.app"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    github: "https://github.com/yourusername/project-two",
    live: "https://project-two.netlify.app"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Real-time weather application with beautiful visualizations and location-based forecasts.",
    technologies: ["Vue.js", "Express", "Chart.js", "OpenWeather API"],
    github: "https://github.com/yourusername/project-three",
    live: "https://weather-dashboard-app.netlify.app"
  }
];

export default function Projects() {
  const sectionRef = useRef(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
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

      // Project cards animation
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
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={addToProjectRefs}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-500 transform hover:-translate-y-2 border border-white/10 hover:border-blue-500/30 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <span>→</span>
                </a>
                <a
                  href={project.live}
                  className="text-green-400 hover:text-green-300 transition-colors duration-300 flex items-center gap-1"
                >
                  <span>Live Demo</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}