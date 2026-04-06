'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiRobot2Line, RiSendPlane2Fill, RiCloseLine, RiTerminalBoxLine } from 'react-icons/ri';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          })),
        }),
      });

      if (!response.ok) throw new Error('Failed to connect to mainframe.');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aiContent = '';

      const aiMessageId = (Date.now() + 1).toString();
      // Add empty message for streaming
      setMessages((prev) => [...prev, { id: aiMessageId, role: 'assistant', content: '' }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          aiContent += chunk;
          setMessages((prev) =>
            prev.map(m => m.id === aiMessageId ? { ...m, content: aiContent } : m)
          );
        }
      }
    } catch (error) {
      console.error('Error connecting to mainframe:', error);
      setMessages((prev) => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: "ERROR: NEURAL_LINK_DROPPED. UNABLE TO SECURE CONNECTION TO MAIN_CORE."
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-mono">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-6 w-[350px] md:w-[420px] h-[550px] cyber-card bg-black/95 flex flex-col shadow-[0_0_40px_rgba(0,229,255,0.15)] overflow-hidden border border-[var(--color-cyber-cyan)]/50"
          >
            {/* Terminal Header */}
            <div className="bg-[var(--color-cyber-charcoal)] px-4 py-3 flex items-center justify-between border-b border-[var(--color-cyber-cyan)] relative overflow-hidden">
              {/* Animated scanning line in header */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-[var(--color-cyber-cyan)] opacity-20 animate-[scanlines_2s_linear_infinite]"></div>

              <div className="flex items-center gap-2">
                <RiTerminalBoxLine className="text-[var(--color-cyber-cyan)]" />
                <span className="text-[var(--color-cyber-cyan)] text-[10px] md:text-xs tracking-widest uppercase font-bold">
                  NEURAL_LINK // V-2.0.7-7
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5 mr-2">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-pink)]/40"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-yellow)]/40"></div>
                  <div className="w-2 h-2 rounded-full bg-[var(--color-cyber-cyan)] animate-pulse"></div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-[var(--color-cyber-pink)] transition-colors p-1"
                >
                  <RiCloseLine size={20} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5 scrollbar-thin scrollbar-thumb-[var(--color-cyber-cyan)]/20 relative">
              {/* Scanline back */}
              <div className="absolute inset-0 bg-[var(--color-cyber-cyan)]/5 pointer-events-none mix-blend-overlay z-0"></div>

              {messages.length === 0 && (
                <div className="text-gray-500 text-xs md:text-sm animate-pulse space-y-2 opacity-80">
                  <p>&gt; UPLINK ESTABLISHED WITH MAIN_CORE...</p>
                  <p>&gt; BIOS VERSION 9.60 LOADED.</p>
                  <p>&gt; READY FOR DATA QUERIES, OPERATIVE.</p>
                </div>
              )}

              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} relative z-10`}
                >
                  <div className={`max-w-[90%] p-4 text-xs md:text-sm relative leading-relaxed ${m.role === 'user'
                      ? 'bg-[var(--color-cyber-pink)]/10 border border-[var(--color-cyber-pink)]/40 text-white'
                      : 'bg-[var(--color-cyber-cyan)]/10 border border-[var(--color-cyber-cyan)]/40 text-gray-200'
                    }`}
                    style={{
                      clipPath: m.role === 'user'
                        ? 'polygon(0 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%)'
                        : 'polygon(15px 0, 100% 0, 100% 100%, 0 100%, 0 15px)'
                    }}>
                    <span className={`text-[10px] block font-bold uppercase tracking-widest mb-1 ${m.role === 'user' ? 'text-[var(--color-cyber-pink)]' : 'text-[var(--color-cyber-cyan)]'
                      }`}>
                      {m.role === 'user' ? '[ USER_ID: OPERATIVE ]' : '[ SOURCE: MAIN_CORE ]'}
                    </span>
                    <div className="whitespace-pre-wrap">
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && messages[messages.length - 1]?.content === '' && (
                <div className="flex justify-start relative z-10">
                  <div className="bg-[var(--color-cyber-cyan)]/10 border border-[var(--color-cyber-cyan)]/40 p-3 text-[10px] md:text-xs text-[var(--color-cyber-cyan)] animate-pulse tracking-widest">
                    &gt; DECRYPTING_PACKETS... [ █ █ █ █ ░ ░ ░ ]
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--color-cyber-charcoal)] bg-black/80 relative z-10">
              <div className="relative group">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="ENTER COMMAND..."
                  className="cyber-input pr-12 text-xs md:text-sm tracking-wide placeholder:text-gray-600 focus:placeholder:text-gray-400"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-[var(--color-cyber-cyan)] hover:text-[var(--color-cyber-pink)] disabled:opacity-30 transition-all hover:scale-110 active:scale-90"
                >
                  <RiSendPlane2Fill size={22} />
                </button>
              </div>
              <div className="mt-2 text-[8px] text-gray-600 flex justify-between font-mono">
                <span>ENCRYPTION: AES-256</span>
                <span>STATUS: SECURE_UPLINK</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <div className="relative">
        {/* Radar Ping Effect */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-[var(--color-cyber-cyan)] animate-ping opacity-20"></div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-[0_0_25px_var(--color-cyber-cyan)] hover:shadow-[0_0_40px_var(--color-cyber-pink)] group border-2 ${isOpen
              ? 'bg-[var(--color-cyber-pink)] border-white rotate-90'
              : 'bg-[var(--color-cyber-cyan)] border-black/20'
            }`}
        >
          {isOpen ? (
            <RiCloseLine size={32} className="text-black" />
          ) : (
            <RiRobot2Line size={32} className="text-black animate-float group-hover:scale-110 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}
