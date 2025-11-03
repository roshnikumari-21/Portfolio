'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: "JavaScript", level: 90, category: "Frontend", color: "from-yellow-400 to-yellow-600" },
  { name: "TypeScript", level: 85, category: "Frontend", color: "from-blue-500 to-blue-700" },
  { name: "React", level: 88, category: "Frontend", color: "from-cyan-400 to-cyan-600" },
  { name: "Next.js", level: 82, category: "Frontend", color: "from-gray-400 to-gray-600" },
  { name: "Node.js", level: 78, category: "Backend", color: "from-green-500 to-green-700" },
  { name: "Python", level: 75, category: "Backend", color: "from-blue-400 to-blue-600" },
  { name: "MongoDB", level: 70, category: "Database", color: "from-green-400 to-green-600" },
  { name: "PostgreSQL", level: 68, category: "Database", color: "from-blue-300 to-blue-500" },
  { name: "Tailwind CSS", level: 85, category: "Styling", color: "from-teal-400 to-teal-600" },
  { name: "Git/GitHub", level: 80, category: "Tools", color: "from-orange-500 to-orange-700" },
  { name: "AWS", level: 65, category: "Cloud", color: "from-orange-400 to-orange-600" },
  { name: "Docker", level: 60, category: "DevOps", color: "from-blue-400 to-blue-600" }
];

const categories = ["All", "Frontend", "Backend", "Database", "Styling", "Tools", "Cloud", "DevOps"];

export default function Skills() {
  const sectionRef = useRef(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const filterRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo('.skills-title',
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

      // Filter buttons animation
      gsap.fromTo(filterRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      // Skills animation
      skillRefs.current.forEach((skill, index) => {
        if (skill) {
          gsap.fromTo(skill,
            { 
              x: -50, 
              opacity: 0,
              scale: 0.8
            },
            {
              x: 0,
              opacity: 1,
              scale: 1,
              duration: 0.8,
              delay: index * 0.1,
              scrollTrigger: {
                trigger: skill,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            }
          );

          // Animate progress bars
          const progressBar = skill.querySelector('.progress-bar');
          const skillItem = skills[index];
          if (progressBar && skillItem) {
            gsap.fromTo(progressBar,
              { width: '0%' },
              {
                width: `${skillItem.level}%`,
                duration: 1.5,
                delay: 0.5 + (index * 0.1),
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: skill,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              }
            );
          }
        }
      });
    });

    return () => ctx.revert();
  }, [activeFilter]);

  const addToSkillRefs = (el: HTMLDivElement | null) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  const addToFilterRefs = (el: HTMLButtonElement | null) => {
    if (el && !filterRefs.current.includes(el)) {
      filterRefs.current.push(el);
    }
  };

  const filteredSkills = activeFilter === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gray-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="skills-title text-3xl md:text-4xl font-bold text-center mb-4">Skills & Technologies</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Here are the technologies I work with to bring ideas to life
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={category}
              ref={addToFilterRefs}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              ref={addToSkillRefs}
              className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-1 shadow-lg hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              
              <div className="mb-2">
                <span className="text-xs text-gray-400 bg-gray-800 px-2 py-1 rounded-full">
                  {skill.category}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`progress-bar h-3 rounded-full bg-gradient-to-r ${skill.color} relative`}
                  style={{ width: '0%' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"></div>
                </div>
              </div>

              {/* Animated dots for loading effect */}
              <div className="flex justify-between mt-1">
                {[0, 25, 50, 75, 100].map((point) => (
                  <div
                    key={point}
                    className={`w-1 h-1 rounded-full ${
                      skill.level >= point ? 'bg-blue-400' : 'bg-gray-600'
                    } transition-all duration-500`}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-gray-400 bg-gray-900/50 px-6 py-3 rounded-full border border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
              <span>Beginner (0-50%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
              <span>Intermediate (51-75%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"></div>
              <span>Advanced (76-100%)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}