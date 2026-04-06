'use client';

export default function Projects() {
  const projects = [
    {
      id: "PRJ-01",
      title: "KnightMare",
      description: "Full-stack chess application with AI opponent using Stockfish engine, user authentication, and global leaderboard. Features real-time game play and user statistics tracking.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS", "Stockfish"],
      github: "https://github.com/roshnikumari-21/KnightMare",
      live: "https://knightmare.onrender.com/",
      type: "AI Platform"
    },
    {
      id: "PRJ-02",
      title: "DeepTruth",
      description: "Advanced deepfake detection system utilizing deep learning architectures to analyze video frames and identify synthetic media with high accuracy.",
      technologies: ["Python", "TensorFlow", "React", "AWS", "FastAPI"],
      github: "#",
      live: "#",
      type: "ML/Security"
    },
    {
      id: "PRJ-03",
      title: "ProfPort",
      description: "Comprehensive portfolio management system for professors with admin controls, dynamic content management, and intuitive interface for academic professionals.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
      github: "https://github.com/roshnikumari-21/ProfPort",
      live: "https://profport.onrender.com/",
      type: "Web System"
    },
    {
      id: "PRJ-04",
      title: "StyleSync & Swyft",
      description: "AI-powered fashion experience with virtual try-on and personalized discovery feed. Uses computer vision and generative AI to create immersive shopping.",
      technologies: ["React", "Node.js", "TensorFlow.js", "Generative AI", "MongoDB"],
      github: "https://github.com/roshnikumari-21/MyntraHackerRamp",
      live: "https://myntra-hackerramp-five.vercel.app/",
      type: "Computer Vision"
    },
    {
      id: "PRJ-05",
      title: "CatGPT",
      description: "A specialized conversational AI tailored to feline behavior advice, using fine-tuned open-source LLMs deployed via scalable serverless architecture.",
      technologies: ["LangChain", "Next.js", "OpenAI API", "Tailwind"],
      github: "#",
      live: "#",
      type: "LLM App"
    },
    {
      id: "PRJ-06",
      title: "AuraPredict",
      description: "Machine learning web application for early cancer prediction using diagnostic data. Features real-time predictions and interactive data visualizations.",
      technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn"],
      github: "https://github.com/roshnikumari-21/AuraPredict",
      live: "#",
      type: "Health Tech sector"
    }
  ];

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white glitch-text mb-4" data-text="THE ARSENAL // PROJECTS">
            THE ARSENAL // PROJECTS
          </h2>
          <p className="text-[var(--color-cyber-cyan)] font-mono text-sm max-w-2xl mx-auto">
            &gt; DECRYPTING DATASHARDS... MODULES LOADED SUCESSFULLY.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative cyber-card p-6 bg-black/60 backdrop-blur-md overflow-hidden"
            >
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-[var(--color-cyber-cyan)]/5 mix-blend-overlay pointer-events-none group-hover:bg-[var(--color-cyber-pink)]/10 transition-colors duration-500"></div>
              
              <div className="absolute top-0 right-0 p-2 text-xs font-mono text-[var(--color-cyber-charcoal)] group-hover:text-[var(--color-cyber-pink)] transition-colors opacity-50">
                {project.id}
              </div>

              <div className="mb-4">
                <span className="text-[var(--color-cyber-yellow)] font-mono text-xs uppercase tracking-widest border-b border-[var(--color-cyber-yellow)]/30 pb-1 mb-3 inline-block">
                  [ {project.type} ]
                </span>
                
                {/* Chromatic Aberration Text Effect on Hover */}
                <h3 className="text-2xl font-bold text-white mb-2 uppercase group-hover:block transition-all duration-300 relative">
                  <span className="relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[var(--color-cyber-cyan)] group-hover:to-[var(--color-cyber-pink)]">
                    {project.title}
                  </span>
                  {/* Pseudo elements for chromatic aberration */}
                  <span className="absolute left-[2px] top-0 text-[var(--color-cyber-pink)] opacity-0 group-hover:opacity-70 -z-10 transition-opacity">
                    {project.title}
                  </span>
                  <span className="absolute -left-[2px] top-0 text-[var(--color-cyber-cyan)] opacity-0 group-hover:opacity-70 -z-10 transition-opacity">
                    {project.title}
                  </span>
                </h3>
              </div>
              
              <p className="font-mono text-sm text-gray-400 mb-6 h-24 overflow-hidden relative group-hover:text-gray-200 transition-colors">
                {project.description}
                <span className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black to-transparent"></span>
              </p>
              
              <div className="flex flex-wrap items-start content-start gap-2 mb-10 mt-auto min-h-[3rem]">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="text-[10px] font-bold tracking-wider uppercase px-3 py-1 bg-[var(--color-cyber-cyan)]/10 text-[var(--color-cyber-cyan)] rounded-full border border-[var(--color-cyber-cyan)]/30 group-hover:border-[var(--color-cyber-cyan)] group-hover:shadow-[0_0_8px_var(--color-cyber-cyan)] transition-all flex-shrink-0"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-0 border-t border-[var(--color-cyber-charcoal)] pt-4 absolute bottom-6 left-6 right-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center font-mono text-sm text-gray-400 hover:text-[var(--color-cyber-pink)] transition-colors hover:bg-[var(--color-cyber-pink)]/10 py-2 border-r border-[var(--color-cyber-charcoal)]"
                >
                  &lt; SOURCE /&gt;
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center font-mono text-sm text-gray-400 hover:text-[var(--color-cyber-yellow)] transition-colors hover:bg-[var(--color-cyber-yellow)]/10 py-2"
                >
                  [ EXECUTE ]
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}