'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm Roshni Kumari";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-6 relative overflow-hidden z-10">
      
      {/* Circuitry background pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-cyber-pink) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content: "Mainframe" */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-2 text-[var(--color-cyber-cyan)] font-bold tracking-widest text-sm uppercase">
              <span className="mr-2">&gt;_</span> System initialized...
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white min-h-[120px] sm:min-h-[100px] md:min-h-[140px] lg:min-h-[180px]">
              <span className="mr-1 leading-tight">{typedText}</span>
              <span className="blink-cursor text-[var(--color-cyber-pink)]">|</span>
            </h1>
            
            <div className="mb-8 p-4 cyber-card border-l-4 border-l-[var(--color-cyber-yellow)] bg-black/50 text-[var(--color-cyber-cyan)] font-mono text-sm md:text-base">
              <div className="flex flex-col gap-2">
                <p>&gt; STATUS: ONLINE</p>
                <p className="text-white">&gt; ROLE: [ <span className="text-[var(--color-cyber-yellow)]">Full Stack Developer</span> ]</p>
                <p className="text-white">&gt; RANK: [ <span className="text-[var(--color-cyber-yellow)]">Competitive Programmer</span> ]</p>
                <p className="text-white">&gt; EXP:  [ <span className="text-[var(--color-cyber-yellow)]">Former Flipkart SDE Intern</span> ]</p>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <div className="px-4 py-2 border border-[var(--color-cyber-cyan)] bg-black/40 text-[var(--color-cyber-cyan)] font-mono text-xs shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                CGPA: <span className="text-[var(--color-cyber-pink)] font-bold glitch-text" data-text="9.60/10.0">9.60/10.0</span> <span className="text-[var(--color-cyber-pink)] text-[10px] ml-1">[OVERRIDE]</span>
              </div>
              <div className="px-4 py-2 border border-[var(--color-cyber-cyan)] bg-black/40 text-[var(--color-cyber-cyan)] font-mono text-xs shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                Rank: <span className="text-[var(--color-cyber-pink)] font-bold glitch-text" data-text="Top 0.57%">Top 0.57%</span>
              </div>
              <div className="px-4 py-2 border border-[var(--color-cyber-cyan)] bg-black/40 text-[var(--color-cyber-cyan)] font-mono text-xs shadow-[0_0_10px_rgba(0,229,255,0.2)]">
                1500+ PROBLEMS SOLVED
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <a href="#projects" className="cyber-button text-center">
                [ ACCESS_ARSENAL ]
              </a>
              <a href="#contact" className="cyber-button text-center !border-[var(--color-cyber-yellow)] !text-[var(--color-cyber-yellow)] hover:!text-black before:!bg-[var(--color-cyber-yellow)]">
                // INITIATE_UPLINK
              </a>
            </div>
          </div>

          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative group p-2">
              {/* Angular Photo Container */}
              <div 
                className="relative z-10 w-72 h-72 lg:w-96 lg:h-96 overflow-hidden border-2 border-[var(--color-cyber-pink)] bg-black transition-colors duration-500 shadow-[0_0_15px_var(--color-cyber-pink)]"
                style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}
              >
                {/* Pink Tint Overlay */}
                <div className="absolute inset-0 opacity-50 bg-[var(--color-cyber-pink)] mix-blend-color z-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                
                <Image
                  src="/myfacelogo.png" // Update with actual file name
                  alt="Roshni Kumari"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-110 group-hover:filter-none transition-all duration-700 zoom-in"
                  priority
                />
                
                {/* Scanline over image */}
                <div className="absolute top-0 left-0 w-full h-[5%] bg-[var(--color-cyber-pink)]/40 blur-[2px] z-30 animate-[scanlines_4s_linear_infinite]"></div>
              </div>
              
              {/* Back Decorators */}
              <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[var(--color-cyber-pink)] -z-10" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-[var(--color-cyber-yellow)] -z-20 opacity-50" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}