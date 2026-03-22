'use client';

export default function About() {
  return (
    <section id="about" className="py-20 relative z-10">
      <div className="container mx-auto px-6">
        
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-1 bg-black/80">
            {/* Terminal Header */}
            <div className="bg-[var(--color-cyber-charcoal)] px-4 py-2 flex items-center justify-between border-b border-[var(--color-cyber-cyan)]">
              <div className="flex flex-col">
                <span className="text-[var(--color-cyber-cyan)] font-mono text-sm tracking-widest uppercase">
                  Terminal.exe // root@mainframe
                </span>
                <span className="text-gray-500 font-mono text-[10px]">
                  CONNECTION: SECURE
                </span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--color-cyber-pink)] hover:opacity-80 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--color-cyber-yellow)] hover:opacity-80 cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--color-cyber-cyan)] hover:opacity-80 cursor-pointer"></div>
              </div>
            </div>

            {/* Terminal Window Content */}
            <div className="p-6 md:p-10 font-mono text-gray-300 relative overflow-hidden">
              {/* Scanline back */}
              <div className="absolute inset-0 bg-[var(--color-cyber-cyan)]/5 pointer-events-none mix-blend-overlay"></div>
              
              <div className="mb-6">
                <span className="text-[var(--color-cyber-yellow)]">&gt;</span> <span className="text-white">whoami</span>
              </div>
              <div className="mb-8 pl-4 border-l border-[var(--color-cyber-charcoal)] leading-loose">
                I'm a Computer Science Engineering student at NIT Jamshedpur with a passion for building 
                scalable web applications and solving complex problems. My system log records a 
                <span className="text-[var(--color-cyber-pink)] font-bold glitch-text mx-2" data-text="CGPA of 9.60">CGPA of 9.60</span>
                [ <span className="text-[var(--color-cyber-pink)] text-xs animate-pulse">OVERRIDE ACCEPTED</span> ], ranking in the 
                <span className="text-[var(--color-cyber-pink)] font-bold glitch-text mx-2" data-text="Top 0.57%">Top 0.57%</span> 
                of my batch of 700+ operatives.
              </div>

              <div className="mb-6">
                <span className="text-[var(--color-cyber-yellow)]">&gt;</span> <span className="text-white">cat /sys/logs/experience.txt</span>
              </div>
              <div className="mb-8 pl-4 border-l border-[var(--color-cyber-charcoal)] leading-loose">
                As an SDE Intern at Flipkart, I enhanced their Content Management Platform, improving 
                automation efficiency by <span className="text-[var(--color-cyber-cyan)] font-bold">30%</span> and building reusable components that accelerated feature 
                rollout across multiple nodes.
              </div>

              <div className="mb-6">
                <span className="text-[var(--color-cyber-yellow)]">&gt;</span> <span className="text-white">./execute_downtime.sh</span>
              </div>
              <div className="mb-4 pl-4 border-l border-[var(--color-cyber-charcoal)] leading-loose flex items-center gap-2">
                <span className="inline-block w-2 h-4 bg-[var(--color-cyber-cyan)] animate-pulse"></span>
                Processing background tasks: competitive programming, open-source contribution, exploring machine learning augmentations.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}