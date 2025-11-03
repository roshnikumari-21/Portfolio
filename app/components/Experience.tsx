'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: 1,
    title: "SDE Intern",
    company: "Flipkart",
    period: "2024",
    description: [
      "Enhanced the Content Management Platform (Flipkart Minutes – Neolite ADP UI), improving automation efficiency by 30%",
      "Built reusable UI components reducing manual processes across 3 teams and accelerating feature rollout",
      "Partnered with Product & Engineering teams to design and deploy scalable solutions, boosting system reliability"
    ],
    technologies: ["React", "Redux", "Node.js", "Java", "Dropwizard", "Cursor AI"],
    type: "internship"
  }
];

export default function Experience() {
  const sectionRef = useRef(null);
  const expRefs = useRef<(HTMLDivElement | null)[]>([]);

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

      expRefs.current.forEach((exp, index) => {
        if (exp) {
          gsap.fromTo(exp,
            { 
              x: -50, 
              opacity: 0 
            },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              delay: index * 0.3,
              scrollTrigger: {
                trigger: exp,
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

  const addToExpRefs = (el: HTMLDivElement | null) => {
    if (el && !expRefs.current.includes(el)) {
      expRefs.current.push(el);
    }
  };

  return (
    <section ref={sectionRef} id="experience" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              ref={addToExpRefs}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-all duration-500 mb-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xl font-semibold text-blue-400">{exp.company}</span>
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm border border-blue-500/30">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium border border-green-500/30">
                  {exp.type === 'internship' ? 'Internship' : 'Full-time'}
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map(tech => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Achievement Badge */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 text-center">
            <h4 className="text-xl font-bold text-white mb-2">🏆 Top 20 Finalist - Flipkart Runway Season 5</h4>
            <p className="text-gray-300">
              Selected among 50,000+ applicants for one of India's most prestigious internship programs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}