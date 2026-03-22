'use client';

import { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause, FaForwardStep, FaBackwardStep, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';

export default function Music() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = [
    { title: 'NIGHTWAVE_PLAZA (LIVE)', artist: 'Nightwave Plaza Radio', length: 'LIVE', src: 'https://radio.plaza.one/mp3' },
    { title: 'SYNTH_OVERRIDE.WAV', artist: 'Test Audio Sample 1', length: '06:12', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3' },
    { title: 'CHROME_HEART.OGG', artist: 'Test Audio Sample 2', length: '07:05', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
    { title: 'CYBER_LULLABY.MP3', artist: 'Test Audio Sample 3', length: '05:54', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  ];

  useEffect(() => {
    if (audioRef.current) {
      // Force the audio element to load the new src to prevent the browser 
      // from asynchronously loading it and interrupting a play() request
      audioRef.current.load();
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            if (error.name !== 'AbortError') {
              console.error("Audio playback failed:", error);
            }
          });
        }
      }
    }
  }, [currentTrack]); // Only run on track change

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            if (error.name !== 'AbortError') {
              console.error("Audio playback failed:", error);
            }
          });
        }
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]); // Only run on play state change

  const handleTimeUpdate = () => {
    if (audioRef.current && tracks[currentTrack].length !== 'LIVE') {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      setProgress((current / duration) * 100);
    } else if (tracks[currentTrack].length === 'LIVE') {
      setProgress(100); // Max progress for live stream
    }
  };

  const handleTrackEnd = () => {
    setCurrentTrack(prev => (prev === tracks.length - 1 ? 0 : prev + 1));
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const playTrack = (index: number) => {
    if (currentTrack === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
      setProgress(0);
    }
  };

  return (
    <section id="music" className="py-20 relative z-10">
      <div className="container mx-auto px-6 max-w-5xl">
        
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white glitch-text mb-4" data-text="AUDIO // FREQUENCIES">
            AUDIO // FREQUENCIES
          </h2>
          <p className="text-[var(--color-cyber-cyan)] font-mono text-sm max-w-2xl mx-auto uppercase">
            &gt; decoding auditory stimulators...
          </p>
        </div>

        <div className="cyber-card bg-black/80 flex flex-col md:flex-row overflow-hidden border border-[var(--color-cyber-pink)] shadow-[0_0_15px_rgba(255,77,196,0.2)]">
          
          {/* Audio Element Hidden */}
          <audio 
            ref={audioRef}
            src={tracks[currentTrack].src}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleTrackEnd}
          />

          {/* Left Player Side */}
          <div className="p-8 border-b md:border-b-0 md:border-r border-[var(--color-cyber-charcoal)] relative flex-1 flex flex-col justify-between">
            {/* Visualizer bars placeholder */}
            <div className="absolute top-0 right-0 w-32 h-16 opacity-30 pointer-events-none flex items-end gap-1 p-4">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 bg-[var(--color-cyber-cyan)] ${isPlaying ? 'animate-[pulse_1s_infinite]' : ''}`} 
                  style={{ height: `${Math.random() * 100}%`, animationDelay: `${i * 0.1}s` }}
                ></div>
              ))}
            </div>

            <div>
              <div className="text-[10px] text-[var(--color-cyber-yellow)] font-mono mb-2 uppercase tracking-widest cursor-default flex items-center gap-2">
                NOW_PLAYING {isPlaying && <span className="w-2 h-2 rounded-full bg-[var(--color-cyber-pink)] animate-pulse inline-block"></span>}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 uppercase break-all">
                {tracks[currentTrack].title}
              </h3>
              <p className="text-[var(--color-cyber-cyan)] font-mono text-sm">
                SRC: {tracks[currentTrack].artist}
              </p>
            </div>

            <div className="mt-12">
              {/* Progress Bar */}
              <div className="w-full h-1 bg-[var(--color-cyber-charcoal)] mb-4 relative group">
                <div 
                  className={`h-full bg-[var(--color-cyber-pink)] transition-all duration-300 relative shadow-[0_0_8px_var(--color-cyber-pink)]`}
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white shadow-[0_0_10px_white] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-gray-400 font-mono mb-6">
                <span>{tracks[currentTrack].length === 'LIVE' ? 'LIVE' : (audioRef.current ? Math.floor(audioRef.current.currentTime / 60) + ':' + ('0' + Math.floor(audioRef.current.currentTime % 60)).slice(-2) : '0:00')}</span>
                <span>{tracks[currentTrack].length}</span>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <button 
                    onClick={() => {
                        const prevIdx = currentTrack === 0 ? tracks.length - 1 : currentTrack - 1;
                        playTrack(prevIdx);
                    }}
                    className="text-[var(--color-cyber-cyan)] hover:text-white hover:shadow-[0_0_10px_var(--color-cyber-cyan)] transition-all"
                  >
                    <FaBackwardStep size={24} />
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="w-14 h-14 flex items-center justify-center border-2 border-[var(--color-cyber-pink)] text-[var(--color-cyber-pink)] hover:bg-[var(--color-cyber-pink)] hover:text-black hover:shadow-[0_0_15px_var(--color-cyber-pink)] transition-all relative"
                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                  >
                    {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} className="ml-1" />}
                  </button>
                  <button 
                    onClick={() => {
                        const nextIdx = currentTrack === tracks.length - 1 ? 0 : currentTrack + 1;
                        playTrack(nextIdx);
                    }}
                    className="text-[var(--color-cyber-cyan)] hover:text-white hover:shadow-[0_0_10px_var(--color-cyber-cyan)] transition-all"
                  >
                    <FaForwardStep size={24} />
                  </button>
                </div>
                
                <div className="hidden sm:flex items-center gap-2 text-gray-400 cursor-pointer" onClick={toggleMute}>
                  {isMuted ? <FaVolumeXmark size={16} /> : <FaVolumeHigh size={16} />}
                  <div className="w-16 h-1 bg-[var(--color-cyber-charcoal)]">
                    <div className={`h-full bg-[var(--color-cyber-yellow)] transition-all ${isMuted ? 'w-0' : 'w-2/3'}`}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Playlist Side */}
          <div className="p-6 md:w-80 bg-black flex flex-col relative">
            <div className="text-[10px] text-[var(--color-cyber-pink)] font-mono mb-4 border-b border-[var(--color-cyber-pink)]/30 pb-2 flex justify-between uppercase tracking-widest">
              <span>TRACK_LIST</span>
              <span>{tracks.length}_FILES</span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-1 pr-2 custom-scrollbar">
              {tracks.map((track, idx) => (
                <button
                  key={idx}
                  onClick={() => playTrack(idx)}
                  className={`w-full text-left p-3 font-mono text-xs transition-colors flex justify-between items-center group relative ${currentTrack === idx ? 'bg-[var(--color-cyber-cyan)]/10 text-[var(--color-cyber-cyan)] border-l-2 border-[var(--color-cyber-cyan)]' : 'text-gray-400 hover:bg-white/5 border-l-2 border-transparent hover:border-gray-500'}`}
                >
                  <div className="truncate pr-4 border-r border-transparent group-hover:border-[var(--color-cyber-charcoal)] transition-colors">
                    {currentTrack === idx && <span className="mr-2 animate-pulse">{isPlaying ? '▶' : '⏸'}</span>}
                    {track.title}
                  </div>
                  <span className="text-[10px] opacity-50 flex-shrink-0">{track.length}</span>
                </button>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-[var(--color-cyber-charcoal)] flex flex-col gap-2">
              <div className="text-[8px] text-[var(--color-cyber-cyan)] text-center pb-2 opacity-50">
                You can replace track srcs in Music.tsx
              </div>
              <div className="flex justify-between gap-2">
                <a href="#" className="flex-1 cyber-button !py-2 !px-0 bg-transparent text-[10px] text-center border-[var(--color-cyber-charcoal)] text-gray-300 hover:!text-[var(--color-cyber-yellow)] hover:border-[var(--color-cyber-yellow)]">
                  SPOTIFY_LINK
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
