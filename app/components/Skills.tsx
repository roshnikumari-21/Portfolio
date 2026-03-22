'use client';

import { useEffect, useState } from 'react';

const augmentationModules = [
  {
    category: "Frontend Operations",
    id: "MOD_FW_01",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "React", level: 88 },
      { name: "Next.js", level: 82 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    category: "Backend Systems",
    id: "MOD_BE_02",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Python", level: 75 },
      { name: "Java", level: 70 },
      { name: "Express.js", level: 80 }
    ]
  },
  {
    category: "Data Matrix",
    id: "MOD_DB_03",
    skills: [
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 68 },
      { name: "Redis", level: 60 }
    ]
  },
  {
    category: "Cloud & DevOps",
    id: "MOD_INF_04",
    skills: [
      { name: "Git/GitHub", level: 80 },
      { name: "AWS", level: 65 },
      { name: "Docker", level: 60 },
      { name: "Terraform", level: 50 }
    ]
  }
];

export default function Skills() {
  const [activeModule, setActiveModule] = useState("All");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayModules = activeModule === "All" 
    ? augmentationModules 
    : augmentationModules.filter(m => m.category === activeModule);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white glitch-text mb-4" data-text="NEURAL NETWORK // AUGMENTATIONS">
            NEURAL NETWORK // AUGMENTATIONS
          </h2>
          <p className="text-[var(--color-cyber-cyan)] font-mono text-sm max-w-2xl mx-auto uppercase">
            &gt; scanning available cybernetic upgrades... modules ready for deployment.
          </p>
        </div>

        {/* Filter Terminals */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveModule("All")}
            className={`cyber-button text-xs ${activeModule === "All" ? 'bg-[var(--color-cyber-cyan)] !text-black' : ''}`}
          >
            [ SYNC_ALL_MODULES ]
          </button>
          {augmentationModules.map((mod) => (
            <button
              key={mod.category}
              onClick={() => setActiveModule(mod.category)}
              className={`cyber-button text-xs ${activeModule === mod.category ? 'bg-[var(--color-cyber-cyan)] !text-black' : ''}`}
            >
              / {mod.id}
            </button>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {displayModules.map((module) => (
            <div key={module.id} className="cyber-card p-6 bg-black/80">
              <div className="border-b border-[var(--color-cyber-cyan)] border-dashed pb-3 mb-6 flex justify-between items-end">
                <div>
                  <div className="text-[var(--color-cyber-pink)] font-mono text-xs mb-1">
                    SYS.MODULE: {module.id}
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-widest">
                    {module.category}
                  </h3>
                </div>
                <div className="text-[var(--color-cyber-cyan)] font-mono text-sm animate-pulse">
                  [ ACTIVE ]
                </div>
              </div>

              <div className="space-y-6">
                {module.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-sm text-gray-300 uppercase">{skill.name}</span>
                      <span className="font-mono text-xs text-[var(--color-cyber-yellow)]">{skill.level}% INTEGRATION</span>
                    </div>
                    {/* Glowing segmented energy meter */}
                    <div className="cyber-meter">
                      <div 
                        className="cyber-meter-fill" 
                        style={{ width: mounted ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}