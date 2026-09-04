'use client';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimationWrapper from './AnimationWrapper';
import SectionHeading from './SectionHeading';
import { isFinePointer, prefersReducedMotion, registerMotion } from '../lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const projects = [
  {
    id: 1,
    title: 'Codophile: Visual CSS Playground & Tailwind Generator',
    period: '2026',
    description:
      'Interactive developer tool for real-time CSS experimentation, visual previews, and CSS/Tailwind code generation.',
    technologies: [
      'Next.js 15',
      'React 19',
      'TypeScript',
      'Tailwind CSS v4',
      'Framer Motion',
      'Monaco Editor',
      'MongoDB',
    ],
    github: 'https://github.com/roshnikumari-21/codophile-v2',
    live: 'https://beta.codophile.in/',
  },
  {
    id: 2,
    title: 'KnightMare: Chess Web App with AI & Leaderboard',
    period: 'Mar 2025',
    description:
      'Full-stack chess application with AI opponent using Stockfish engine, user authentication, and global leaderboard. Features real-time game play and user statistics tracking.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS', 'Stockfish'],
    github: 'https://github.com/roshnikumari-21/KnightMare',
    live: 'https://knightmare.onrender.com/',
  },
  {
    id: 3,
    title: 'Smart-Serve: AI-Powered Community Issue & Volunteer Management',
    period: 'Jan 2026',
    description:
      'MERN platform that uses Gemini AI to analyze community reports, classify issues, and generate priority scores from urgency, impact, category, and recency.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'TypeScript',
      'Tailwind CSS',
      'Gemini AI',
    ],
    github: 'https://github.com/roshnikumari-21/Smart-Serve-System',
    live: 'https://smart-serve-system.vercel.app',
  },
  {
    id: 4,
    title: 'StyleSync & Swyft - AI Fashion Platform',
    description:
      'Myntra Hackerramp project featuring AI-powered fashion experience with virtual try-on (StyleSync) and personalized discovery feed (Swyft). Uses computer vision, generative AI, and recommendation systems to create immersive, intelligent fashion shopping for Gen Z.',
    technologies: [
      'React',
      'Node.js',
      'TensorFlow.js',
      'Python',
      'OpenCV',
      'Generative AI',
      'Computer Vision',
      'MongoDB',
    ],
    github: 'https://github.com/roshnikumari-21/MyntraHackerRamp',
    live: 'https://myntra-hackerramp-five.vercel.app/',
  },
  {
    id: 5,
    title: 'ProfPort - Professor Portfolio System',
    description:
      'Comprehensive portfolio management system for professors with admin controls, dynamic content management, and intuitive interface for academic professionals.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Tailwind CSS'],
    github: 'https://github.com/roshnikumari-21/ProfPort',
    live: 'https://profport.onrender.com/',
  },
  {
    id: 6,
    title: 'AuraPredict - Cancer Prediction ML App',
    description:
      'Machine learning web application for early cancer prediction using diagnostic data. Features real-time predictions and interactive data visualizations.',
    technologies: ['Python', 'Streamlit', 'Pandas', 'Scikit-learn', 'ML'],
    github: 'https://github.com/roshnikumari-21/AuraPredict',
    live: 'https://aurapredict.streamlit.app/',
  },
  {
    id: 7,
    title: 'Stackelberg Competition Research',
    description:
      'Research project implementing genetic algorithms for hierarchical decision-making in supply chain optimization using Stackelberg competition models.',
    technologies: ['Python', 'DEAP', 'SciPy', 'NumPy', 'Genetic Algorithms'],
    github: 'https://github.com/roshnikumari-21/Capstone_GA_1',
  },
  {
    id: 8,
    title: 'DSA Solutions & Interview Prep',
    description:
      'Comprehensive collection of Data Structures and Algorithms solutions organized by topic. Serves as personal reference and interview preparation resource with clean, well-structured code and explanations for frequently asked coding problems across platforms.',
    technologies: ['C++', 'Python', 'Java', 'Algorithms', 'Data Structures', 'Problem Solving'],
    github: 'https://github.com/roshnikumari-21/DSA',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    registerMotion();
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) return;

      projectRefs.current.forEach((project) => {
        if (!project) return;
        gsap.fromTo(
          project,
          { y: 56, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: project,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onMove = (event: React.MouseEvent<HTMLElement>, index: number) => {
    if (!isFinePointer()) return;
    const el = projectRefs.current[index];
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * 3}deg) rotateX(${-y * 3}deg)`;
  };

  const onLeave = (index: number) => {
    const el = projectRefs.current[index];
    if (el) el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
  };

  return (
    <section ref={sectionRef} id="projects" className="section-pad relative z-10">
      <div className="mx-auto max-w-[1400px]">
        <SectionHeading index="05" title="Featured Projects" kicker="Selected work" />
        <p className="mb-12 max-w-2xl text-lg text-muted">
          Full-stack, AI, and research work — including resume highlights and earlier projects.
        </p>

        <div className="border-t border-line">
          {projects.map((project, index) => (
            <article
              key={project.id}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              onMouseMove={(event) => onMove(event, index)}
              onMouseLeave={() => onLeave(index)}
              className="group grid gap-6 border-b border-line py-10 transition-[transform] duration-300 md:grid-cols-12 md:py-14"
              data-cursor="view"
            >
              <div className="md:col-span-2">
                <span className="font-display italic text-4xl text-muted group-hover:text-accent transition-colors">
                  {String(project.id).padStart(2, '0')}
                </span>
                {project.period && <p className="kicker mt-3">{project.period}</p>}
              </div>

              <div className="md:col-span-10">
                <h3 className="font-heading text-3xl md:text-5xl tracking-tight leading-[1.05] group-hover:translate-x-1 transition-transform duration-500">
                  {project.title}
                </h3>
                <p className="mt-5 max-w-3xl text-paper/75 leading-relaxed">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="kicker">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-heading text-sm tracking-[0.16em] uppercase text-paper after:mt-1 after:block after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-heading text-sm tracking-[0.16em] uppercase text-paper after:mt-1 after:block after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <AnimationWrapper animation="fadeUp">
            <div className="border-y border-line py-10">
              <h3 className="kicker mb-10">Ratings</h3>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                <div>
                  <div className="font-display italic text-5xl md:text-6xl text-accent">1200+</div>
                  <div className="kicker mt-3">Problems Solved</div>
                </div>
                <a
                  href="https://www.codechef.com/users/roshnikumari21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-accent transition-colors"
                >
                  <div className="font-display italic text-5xl md:text-6xl text-accent">3★</div>
                  <div className="kicker mt-3">CodeChef 1651</div>
                </a>
                <a
                  href="https://codeforces.com/profile/roshniKumari"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-accent transition-colors"
                >
                  <div className="font-display italic text-5xl md:text-6xl text-accent">1227</div>
                  <div className="kicker mt-3">Codeforces Pupil</div>
                </a>
                <a
                  href="https://leetcode.com/Roshniee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-accent transition-colors"
                >
                  <div className="font-display italic text-5xl md:text-6xl text-accent">1787</div>
                  <div className="kicker mt-3">LeetCode</div>
                </a>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
