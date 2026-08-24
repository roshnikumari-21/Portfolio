'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from './SectionHeading';
import { prefersReducedMotion, registerMotion } from '../lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: 1,
    title: 'SDE Intern',
    company: 'Flipkart',
    period: '2026',
    dates: 'May 2026 – Jul 2026',
    location: 'Bengaluru (On-site)',
    description: [
      "Developed and shipped production APIs, automated compliance workflows, and contributed to backend services powering Flipkart's Compliance Management Platform.",
      'Improved infrastructure security through secret migration, participated in production deployments, and enhanced operational dashboards.',
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'MySQL', 'TiDB', 'Kubernetes', 'Helm'],
    type: 'internship',
  },
  {
    id: 2,
    title: 'SDE Intern',
    company: 'Flipkart',
    period: '2025',
    dates: 'May 2025 – Jul 2025',
    location: 'Bengaluru (On-site)',
    description: [
      'Enhanced the Content Management Platform (Flipkart Minutes – Neolite ADP UI), improving automation efficiency by 30% and streamlining internal workflows.',
      'Built reusable UI components, reducing manual processes across 3 teams and accelerating feature rollout.',
    ],
    technologies: ['React', 'Redux', 'Node.js', 'Java', 'Dropwizard', 'Cursor AI'],
    type: 'internship',
  },
];

const roles = [
  {
    id: 1,
    title: 'Member',
    org: 'Programming Club of NIT Jamshedpur',
    dates: 'Apr 2025 – Present',
  },
  {
    id: 2,
    title: 'General Secretary',
    org: 'Society of Computer Science and Engineering (SCSE)',
    dates: 'Feb 2025 – Present',
    link: 'https://scse-nitjsr.in/',
  },
  {
    id: 3,
    title: 'Class Representative',
    org: 'NIT Jamshedpur',
    dates: 'Sep 2024 – Present',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    registerMotion();
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) return;

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 40%',
              scrub: true,
            },
          },
        );
      }

      itemRefs.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { y: 48, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="section-pad relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="04" title="Experience" kicker="Journey" />

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-[5.5rem] top-0 hidden h-full w-px origin-top bg-line md:block"
            aria-hidden="true"
          />

          {experiences.map((exp, index) => (
            <article
              key={exp.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className="grid gap-8 border-t border-line py-12 md:grid-cols-12 md:py-16"
            >
              <div className="md:col-span-3">
                <p className="font-display italic text-6xl md:text-7xl leading-none text-accent">{exp.period}</p>
                <p className="kicker mt-4">{exp.dates}</p>
                <p className="kicker mt-2">{exp.location}</p>
                <p className="kicker mt-2 text-accent">Internship</p>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-heading text-3xl md:text-5xl tracking-tight">{exp.title}</h3>
                <p className="mt-2 text-xl text-muted">{exp.company}</p>

                <ul className="mt-8 space-y-4 text-paper/80 leading-relaxed">
                  {exp.description.map((point) => (
                    <li key={point} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="mt-2 h-px w-6 bg-accent" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="kicker">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 border-t border-line pt-12">
          <p className="kicker mb-8">Positions of Responsibility</p>
          <div className="divide-y divide-line border-y border-line">
            {roles.map((role) => (
              <article key={role.id} className="grid gap-2 py-6 md:grid-cols-12 md:items-baseline">
                <p className="kicker md:col-span-3">{role.dates}</p>
                <div className="md:col-span-9">
                  <h3 className="font-heading text-2xl">{role.title}</h3>
                  <p className="mt-1 text-muted">{role.org}</p>
                  {role.link && (
                    <a
                      href={role.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block font-heading text-sm tracking-[0.16em] uppercase text-paper after:mt-1 after:block after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Website
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 border border-line px-6 py-8 md:px-10">
          <p className="kicker mb-3">Milestone</p>
          <h4 className="font-heading text-2xl md:text-3xl">Top 20 Finalist — Flipkart Runway Season 5</h4>
          <p className="mt-3 max-w-2xl text-muted">
            Selected among 50,000+ applicants for one of India&apos;s most prestigious internship programs · May 2025
          </p>
        </div>
      </div>
    </section>
  );
}
