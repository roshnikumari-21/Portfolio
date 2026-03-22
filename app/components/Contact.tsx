'use client';

import { useState } from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaGithub,
  FaTwitter,
  FaFacebook
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

type ModalState = {
  isOpen: boolean;
  type: 'success' | 'error';
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    type: 'success',
    message: ''
  });
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsTransmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModal({
          isOpen: true,
          type: 'success',
          message: 'TRANSMISSION SUCCESSFUL.\nDATA PACKET DELIVERED.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setModal({
          isOpen: true,
          type: 'error',
          message: 'TRANSMISSION FAILED.\nINTERFERENCE DETECTED.'
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setModal({
        isOpen: true,
        type: 'error',
        message: 'UPLINK ERROR.\nCONNECTION SEVERED.'
      });
    } finally {
      setIsTransmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      
      {/* Custom Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="cyber-card p-1 bg-black max-w-md w-full mx-4 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <div className={`border-b ${modal.type === 'success' ? 'border-[var(--color-cyber-cyan)] bg-[var(--color-cyber-cyan)]/10 text-[var(--color-cyber-cyan)]' : 'border-[var(--color-cyber-pink)] bg-[var(--color-cyber-pink)]/10 text-[var(--color-cyber-pink)]'} px-4 py-3 flex items-center justify-between`}>
              <span className="font-mono text-sm tracking-widest uppercase">
                {modal.type === 'success' ? 'SYS.MESSAGE // OK' : 'SYS.ALERT // ERR'}
              </span>
              <span className={`w-3 h-3 ${modal.type === 'success' ? 'bg-[var(--color-cyber-cyan)]' : 'bg-[var(--color-cyber-pink)]'} animate-pulse inline-block`}></span>
            </div>
            
            <div className="p-8 text-center border-x border-b border-[var(--color-cyber-charcoal)]">
              <h3 className={`text-xl font-bold uppercase tracking-widest mb-6 ${modal.type === 'success' ? 'text-white' : 'text-[var(--color-cyber-pink)] glitch-text'}`} data-text={modal.message.split('\n')[0]}>
                {modal.message.split('\n')[0]}
              </h3>
              <p className="text-gray-400 font-mono text-sm mb-8">
                {modal.message.split('\n')[1]}
              </p>
              
              <button
                onClick={() => setModal({ ...modal, isOpen: false })}
                className={`cyber-button w-full ${modal.type === 'success' ? '' : '!border-[var(--color-cyber-pink)] !text-[var(--color-cyber-pink)] before:!bg-[var(--color-cyber-pink)]'}`}
              >
                [ ACKNOWLEDGE ]
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-6">
        
        <div className="mb-14 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white glitch-text mb-4" data-text="SECURE UPLINK">
            SECURE UPLINK
          </h2>
          <p className="text-[var(--color-cyber-cyan)] font-mono text-sm max-w-2xl mx-auto uppercase">
            &gt; establishing encrypted peer-to-peer connection...
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LEFT: NETWORK INFO */}
          <div className="space-y-8">
            <div className="cyber-card p-6 bg-black/60">
              <h3 className="text-[var(--color-cyber-pink)] font-mono text-sm mb-4 border-b border-[var(--color-cyber-pink)]/30 pb-2">
                // NODE_DIRECTORIES
              </h3>
              
              <div className="space-y-6 form-mono text-sm text-gray-300">
                <a href="mailto:roshnikumari212004@gmail.com" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-[var(--color-cyber-cyan)] flex items-center justify-center text-[var(--color-cyber-cyan)] group-hover:bg-[var(--color-cyber-cyan)] group-hover:text-black transition-colors">
                    <MdEmail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--color-cyber-yellow)] cursor-default">SYS.GMAIL</div>
                    <div className="group-hover:text-[var(--color-cyber-cyan)] transition-colors">roshnikumari212004@gmail.com</div>
                  </div>
                </a>

                <a href="tel:+918709758581" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 border border-[var(--color-cyber-cyan)] flex items-center justify-center text-[var(--color-cyber-cyan)] group-hover:bg-[var(--color-cyber-cyan)] group-hover:text-black transition-colors">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--color-cyber-yellow)] cursor-default">COM.VOICE</div>
                    <div className="group-hover:text-[var(--color-cyber-cyan)] transition-colors">+91 8709758581</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 group cursor-crosshair relative">
                  <div className="w-10 h-10 border border-[var(--color-cyber-pink)] flex items-center justify-center text-[var(--color-cyber-pink)] group-hover:bg-[var(--color-cyber-pink)] group-hover:text-black transition-colors">
                    <FaLocationDot size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] text-[var(--color-cyber-yellow)] flex items-center gap-2 cursor-default">
                      GEO.LOC <span className="animate-pulse w-2 h-2 bg-[var(--color-cyber-pink)] rounded-full inline-block"></span>
                    </div>
                    <div className="group-hover:text-[var(--color-cyber-pink)] transition-colors tracking-wide cursor-default">
                      Belabagan, B.Deoghar, Jharkhand
                    </div>
                    <div className="text-[10px] text-[var(--color-cyber-cyan)] mt-1 font-mono cursor-default">
                      COORD: 24°29'N 86°42'E
                    </div>
                  </div>
                  {/* Targeting Reticle Decor */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 border border-[var(--color-cyber-pink)] rounded-full relative">
                      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[var(--color-cyber-pink)]"></div>
                      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[var(--color-cyber-pink)]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cyber-card p-6 bg-black/60">
              <h3 className="text-[var(--color-cyber-yellow)] font-mono text-sm mb-4 border-b border-[var(--color-cyber-yellow)]/30 pb-2">
                // EXTERNAL_LINKS
              </h3>
              <div className="flex gap-4 flex-wrap">
                {[
                  { icon: FaGithub, link: "https://github.com/roshnikumari-21" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/roshni-kumari-2aa61928a/" },
                  { icon: FaTwitter, link: "https://x.com/Roshnisingh_21" },
                  { icon: FaInstagram, link: "https://www.instagram.com/roshnisingh_21/" },
                  { icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61581885718089" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="w-12 h-12 flex items-center justify-center border border-[var(--color-cyber-charcoal)] text-gray-400 hover:text-[var(--color-cyber-yellow)] hover:border-[var(--color-cyber-yellow)] hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all bg-black"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div>
            <form onSubmit={handleSubmit} className="cyber-card p-8 bg-black/80 relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--color-cyber-cyan)] via-[var(--color-cyber-pink)] to-[var(--color-cyber-yellow)]"></div>
              
              <div className="mb-6">
                <div className="text-[var(--color-cyber-cyan)] font-mono text-sm mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[var(--color-cyber-cyan)] animate-pulse"></span>
                  TRANSMISSION_PROTOCOL ENCRYPTED
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="relative group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="cyber-input"
                    placeholder="// ENTER_IDENTIFIER"
                  />
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="cyber-input"
                    placeholder="// ENTER_COM_LINK"
                  />
                </div>
              </div>

              <div className="relative group mb-8">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="cyber-input"
                  placeholder="// SUBJECT_HEADER"
                />
              </div>

              <div className="relative group mb-10">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="cyber-input resize-none"
                  placeholder="// ENTER_PAYLOAD..."
                />
              </div>

              <button
                type="submit"
                disabled={isTransmitting}
                className={`cyber-button w-full text-center hover:glitch-text ${isTransmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                data-text={isTransmitting ? "[ TRANSMITTING... ]" : "[ INITIATE_UPLINK ]"}
              >
                {isTransmitting ? "[ TRANSMITTING... ]" : "[ INITIATE_UPLINK ]"}
              </button>

              <div className="mt-4 text-center text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                System will process request within 24 cyber-hours.
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
