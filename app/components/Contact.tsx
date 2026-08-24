'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaPhone,
  FaGithub,
  FaTwitter,
  FaFacebook,
} from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import Magnetic from './Magnetic';
import { prefersReducedMotion, registerMotion } from '../lib/motion';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const contactMethods = [
  {
    icon: <MdEmail aria-hidden="true" />,
    title: 'Email',
    value: 'roshnikumari212004@gmail.com',
    link: 'mailto:roshnikumari212004@gmail.com',
  },
  {
    icon: <FaPhone aria-hidden="true" />,
    title: 'Phone',
    value: '+91 8709758581',
    link: 'tel:+918709758581',
  },
  {
    icon: <FaLocationDot aria-hidden="true" />,
    title: 'Location',
    value: 'Jamshedpur, Jharkhand, India',
    link: '#',
  },
  {
    icon: <FaLinkedin aria-hidden="true" />,
    title: 'LinkedIn',
    value: 'linkedin.com/in/roshni-kumari-2aa61928a/',
    link: 'https://www.linkedin.com/in/roshni-kumari-2aa61928a/',
  },
];

const socials = [
  { href: 'https://github.com/roshnikumari-21', icon: <FaGithub />, label: 'GitHub' },
  { href: 'https://x.com/Roshnisingh_21', icon: <FaTwitter />, label: 'Twitter' },
  { href: 'https://www.linkedin.com/in/roshni-kumari-2aa61928a/', icon: <FaLinkedin />, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/roshnisingh_21/', icon: <FaInstagram />, label: 'Instagram' },
  { href: 'https://www.facebook.com/profile.php?id=61581885718089', icon: <FaFacebook />, label: 'Facebook' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    registerMotion();
    const ctx = gsap.context(() => {
      if (prefersReducedMotion()) return;

      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        },
      );

      gsap.fromTo(
        formRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const fieldClass =
    'w-full bg-transparent border-b border-line px-0 py-3 text-paper placeholder:text-muted/70 focus:border-accent focus:outline-none transition-colors';

  return (
    <section ref={sectionRef} id="contact" className="section-pad relative z-10 pb-10">
      <div className="mx-auto max-w-[1400px]">
        <p className="kicker mb-6">07 / Contact</p>
        <h2
          ref={titleRef}
          className="font-heading text-[clamp(3.2rem,10vw,8rem)] leading-[0.86] tracking-tight mb-16"
        >
          Get In
          <span className="block font-display italic text-accent">Touch</span>
        </h2>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h3 className="font-heading text-2xl mb-4">Let&apos;s Connect</h3>
            <p className="text-paper/75 leading-relaxed mb-10">
              I&apos;m always interested in hearing about new opportunities and projects.
            </p>

            <div className="divide-y divide-line border-y border-line">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 py-5 group"
                >
                  <span className="mt-1 text-accent">{method.icon}</span>
                  <span>
                    <span className="kicker block mb-1">{method.title}</span>
                    <span className="text-paper group-hover:text-accent transition-colors break-all">
                      {method.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-10">
              <p className="kicker mb-4">Follow Me</p>
              <div className="flex flex-wrap gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center border border-line text-lg text-paper transition-colors hover:border-accent hover:text-accent"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="lg:col-span-7 space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              <label className="block">
                <span className="kicker">Your Name *</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder="Roshni Kumari"
                />
              </label>
              <label className="block">
                <span className="kicker">Email Address *</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={fieldClass}
                  placeholder="roshni@example.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="kicker">Subject *</span>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className={fieldClass}
                placeholder="Project Collaboration"
              />
            </label>

            <label className="block">
              <span className="kicker">Your Message *</span>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className={`${fieldClass} resize-none`}
                placeholder="Tell me about your project..."
              />
            </label>

            <Magnetic>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center justify-center border border-paper bg-paper px-8 py-3 font-heading text-sm tracking-[0.14em] uppercase text-ink transition-colors hover:bg-transparent hover:text-paper disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending' : 'Send Message'}
              </button>
            </Magnetic>

            {status === 'success' && (
              <p className="text-sm text-accent">Thank you for your message! I&apos;ll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-sm text-accent">Something went wrong. Please try again later.</p>
            )}
            {status === 'idle' && (
              <p className="text-sm text-muted">I typically respond within 24 hours</p>
            )}
          </form>
        </div>

        <footer className="mt-24 border-t border-line pt-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="font-heading text-[clamp(2.5rem,8vw,6rem)] leading-[0.85] tracking-tight">
              Roshni
              <span className="font-display italic text-accent"> Kumari</span>
            </p>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a href="#hero" className="kicker hover:text-paper transition-colors">
                Back to top
              </a>
              <p className="kicker">© 2026</p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
