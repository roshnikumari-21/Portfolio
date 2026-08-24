'use client';

import { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { IoSend } from 'react-icons/io5';

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
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) throw new Error('Failed to connect.');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let aiContent = '';
      const aiMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [...prev, { id: aiMessageId, role: 'assistant', content: '' }]);

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const chunk = decoder.decode(value, { stream: true });
          aiContent += chunk;
          setMessages((prev) =>
            prev.map((m) => (m.id === aiMessageId ? { ...m, content: aiContent } : m)),
          );
        }
      }
    } catch (error) {
      console.error('Error connecting to chat:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString(),
          role: 'assistant',
          content: 'I could not reach the resume assistant right now. Please try again in a moment.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[80] md:bottom-8 md:right-8">
      {isOpen && (
        <div
          ref={panelRef}
          className="chat-panel mb-4 flex h-[min(560px,70svh)] w-[min(400px,calc(100vw-2.5rem))] flex-col border border-line bg-ink/95 backdrop-blur-md"
          role="dialog"
          aria-label="Resume assistant"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="kicker">Assistant</p>
              <p className="font-heading text-lg">Ask about my work</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="text-muted hover:text-paper"
            >
              <MdClose size={22} />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4 text-sm leading-relaxed">
            {messages.length === 0 && (
              <p className="text-muted">
                Ask about internships, projects, skills, or competitive programming — answers come from my
                resume knowledge.
              </p>
            )}

            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[90%] px-4 py-3 ${
                    m.role === 'user'
                      ? 'bg-paper text-ink'
                      : 'border border-line text-paper/90'
                  }`}
                >
                  <span className="kicker mb-2 block">
                    {m.role === 'user' ? 'You' : 'Roshni'}
                  </span>
                  <div className="whitespace-pre-wrap">{m.content}</div>
                </div>
              </div>
            ))}

            {isLoading && messages[messages.length - 1]?.content === '' && (
              <p className="kicker">Thinking…</p>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="border-t border-line p-3">
            <div className="flex items-center gap-2 border-b border-line">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question…"
                className="w-full bg-transparent py-3 text-sm text-paper placeholder:text-muted focus:outline-none"
                disabled={isLoading}
                aria-label="Message"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Send message"
                className="text-accent disabled:opacity-30"
              >
                <IoSend size={18} />
              </button>
            </div>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="border border-paper bg-paper px-5 py-3 font-heading text-xs tracking-[0.18em] uppercase text-ink transition-colors hover:bg-transparent hover:text-paper"
        aria-expanded={isOpen}
      >
        {isOpen ? 'Close' : 'Ask my resume'}
      </button>
    </div>
  );
}
