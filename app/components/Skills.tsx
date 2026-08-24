'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from './SectionHeading';
import { prefersReducedMotion, registerMotion } from '../lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  { name: 'C', category: 'Languages' },
  { name: 'C++', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'Data Structures and Algorithms', category: 'Problem Solving' },
  { name: 'Competitive Programming', category: 'Problem Solving' },
  { name: 'HTML', category: 'Web' },
  { name: 'CSS', category: 'Web' },
  { name: 'React.js', category: 'Web' },
  { name: 'Tailwind CSS', category: 'Web' },
  { name: 'Bootstrap', category: 'Web' },
  { name: 'Express.js', category: 'Web' },
  { name: 'Next.js', category: 'Web' },
  { name: 'Node.js', category: 'Web' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Terminal', category: 'Tools' },
  { name: 'Windows', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
  { name: 'Vercel', category: 'Tools' },
  { name: 'Render', category: 'Tools' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'Redis', category: 'Databases' },
  { name: 'Object-Oriented Programming', category: 'Fundamentals' },
  { name: 'DBMS', category: 'Fundamentals' },
  { name: 'Operating System', category: 'Fundamentals' },
  { name: 'Computer Networks', category: 'Fundamentals' },
];

const categories = ['All', 'Languages', 'Problem Solving', 'Web', 'Tools', 'Databases', 'Fundamentals'];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredSkills =
    activeFilter === 'All' ? skills : skills.filter((skill) => skill.category === activeFilter);

  useEffect(() => {
    registerMotion();
    skillRefs.current = [];

    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) return;

      skillRefs.current.forEach((skill) => {
        if (!skill) return;
        gsap.fromTo(
          skill,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skill,
              start: 'top 90%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  return (
    <section ref={sectionRef} id="skills" className="section-pad relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="06" title="Skills & Technologies" kicker="Craft" />
        <p className="mb-10 max-w-2xl text-lg text-muted">
          Technologies and fundamentals I work with, grouped as they appear on my resume.
        </p>

        <div className="mb-12 flex flex-wrap gap-x-6 gap-y-3" role="group" aria-label="Skill categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveFilter(category)}
              aria-pressed={activeFilter === category}
              className={`kicker pb-1 border-b transition-colors ${
                activeFilter === category
                  ? 'text-paper border-accent'
                  : 'text-muted border-transparent hover:text-paper'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              ref={(el) => {
                if (el && !skillRefs.current.includes(el)) skillRefs.current.push(el);
              }}
              className="group border-t border-line px-1 py-7 transition-[padding] duration-300 hover:px-4"
            >
              <p className="kicker mb-2">{skill.category}</p>
              <h3 className="font-heading text-3xl md:text-4xl tracking-tight group-hover:text-accent transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
