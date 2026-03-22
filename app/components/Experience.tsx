'use client';

export default function Experience() {
  const experiences = [
    {
      id: "EXP-01",
      title: "SDE Intern",
      company: "Flipkart",
      period: "2024",
      status: "CLASSIFIED",
      description: [
        "Enhanced the Content Management Platform (Flipkart Minutes), improving automation efficiency by 30%",
        "Built reusable UI components reducing manual processes across 3 teams and accelerating feature rollout",
        "Partnered with Product & Engineering teams to design and deploy scalable solutions, boosting system reliability"
      ],
      technologies: ["React", "Redux", "Node.js", "Java", "Dropwizard"],
    },
    {
      id: "EXP-02",
      title: "Top 20 Finalist",
      company: "Flipkart Runway Season 5",
      period: "2024",
      status: "VERIFIED",
      description: [
        "Selected among 50,000+ applicants for one of India's most prestigious internship programs"
      ],
      technologies: [],
    },
    {
      id: "EXP-03",
      title: "Finalist",
      company: "BNY Mellon",
      period: "2024",
      status: "SECURED",
      description: [
        "Recognized for top-tier problem solving and technical acumen during the competition."
      ],
      technologies: [],
    }
  ];

  const cpStats = [
    { platform: "CodeChef", value: "3★", label: "Max Rating" },
    { platform: "Codeforces", value: "1227", label: "Max Rating" },
    { platform: "LeetCode", value: "1726", label: "Contest Rating" },
    { platform: "Global", value: "1500+", label: "Problems Solved" }
  ];

  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="mb-12 border-l-4 border-[var(--color-cyber-pink)] pl-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white glitch-text" data-text="DATACOGS // EXPERIENCE">
            DATACOGS // EXPERIENCE
          </h2>
          <p className="text-[var(--color-cyber-cyan)] font-mono text-sm mt-2">&gt; ACCESSING CLASSIFIED DATABASE FILES...</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group relative cyber-card p-6 md:p-8 bg-black/80 hover:bg-black transition-all duration-300"
              >
                {/* Glitch Overlay on Hover */}
                <div className="absolute inset-0 bg-[var(--color-cyber-cyan)] opacity-0 group-hover:opacity-10 pointer-events-none mix-blend-overlay transition-opacity duration-100"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-[var(--color-cyber-charcoal)] pb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-[var(--color-cyber-yellow)] font-mono text-xs border border-[var(--color-cyber-yellow)] px-2 py-0.5">
                        FILE: {exp.id}
                      </span>
                      <span className="text-[var(--color-cyber-pink)] font-mono text-xs border border-[var(--color-cyber-pink)] px-2 py-0.5">
                        {exp.status}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-wider">{exp.title}</h3>
                    <div className="text-[var(--color-cyber-cyan)] font-mono text-lg">{exp.company}</div>
                  </div>
                  <div className="mt-4 md:mt-0 font-mono text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-[var(--color-cyber-cyan)]">TIME_LOG:</span> {exp.period}
                  </div>
                </div>

                <ul className="space-y-3 font-mono text-sm text-gray-300">
                  {exp.description.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[var(--color-cyber-pink)] mt-0.5">&gt;</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {exp.technologies.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2 py-1 bg-[var(--color-cyber-charcoal)] text-[var(--color-cyber-yellow)] border border-[var(--color-cyber-yellow)]/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <div className="p-6 border border-[var(--color-cyber-yellow)] bg-black/90 shadow-[0_0_15px_rgba(252,238,10,0.1)] relative h-full">
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-cyber-yellow)]"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-cyber-yellow)]"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--color-cyber-yellow)]"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-cyber-yellow)]"></div>

              <div className="text-[var(--color-cyber-yellow)] font-bold mb-6 flex items-center gap-2 border-b border-[var(--color-cyber-yellow)]/30 pb-2">
                <span className="animate-pulse block w-2 h-2 bg-[var(--color-cyber-yellow)] rounded-full"></span>
                BOUNTY BOARD // STATS
              </div>

              <div className="space-y-6">
                {cpStats.map((stat, idx) => (
                  <div key={idx} className="relative group">
                    <div className="text-gray-400 font-mono text-xs mb-1">{stat.platform} // {stat.label}</div>
                    <div className="text-3xl font-bold text-white group-hover:text-[var(--color-cyber-cyan)] transition-colors data-text={stat.value}">
                      {stat.value}
                    </div>
                    {/* Animated glowing bar */}
                    <div className="h-[2px] w-full bg-[var(--color-cyber-charcoal)] mt-2 overflow-hidden">
                      <div className="h-full bg-[var(--color-cyber-cyan)] w-1/3 group-hover:w-full transition-all duration-500 shadow-[0_0_5px_var(--color-cyber-cyan)]"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}