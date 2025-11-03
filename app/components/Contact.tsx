'use client';

import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    value: "roshnikumari212004@gmail.com",
    link: "mailto:roshnikumari212004@gmail.com",
    color: "from-red-400 to-red-600"
  },
  {
    icon: "📱",
    title: "Phone",
    value: "+91 8709758581",
    link: "tel:+918709758581",
    color: "from-green-400 to-green-600"
  },
  {
    icon: "📍",
    title: "Location",
    value: "Jamshedpur, Jharkhand, India",
    link: "#",
    color: "from-blue-400 to-blue-600"
  },
  {
    icon: "💼",
    title: "LinkedIn",
    value: "https://www.linkedin.com/in/roshni-kumari-2aa61928a/",
    link: "https://www.linkedin.com/in/roshni-kumari-2aa61928a/",
    color: "from-blue-500 to-blue-700"
  }
];

export default function Contact() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const contactCardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo('.contact-title',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      // Contact cards animation
      gsap.fromTo(contactCardRefs.current,
        { 
          y: 60, 
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%'
          }
        }
      );

      // Form animation
      gsap.fromTo(formRef.current,
        { 
          x: 50, 
          opacity: 0 
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%'
          }
        }
      );

      // Floating animation for contact cards
      contactCardRefs.current.forEach((card) => {
        if (card) {
          gsap.to(card, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  const addToContactCardRefs = (el: HTMLAnchorElement | null) => {
    if (el && !contactCardRefs.current.includes(el)) {
      contactCardRefs.current.push(el);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with Formspree, Netlify Forms, or your backend
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="contact-title text-3xl md:text-4xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's start a conversation!
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities and projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {contactMethods.map((method, index) => (
                <a
                  key={method.title}
                  ref={addToContactCardRefs}
                  href={method.link}
                  target={method.link.startsWith('http') ? '_blank' : '_self'}
                  rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:scale-105 group"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${method.color} flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {method.icon}
                  </div>
                  <h4 className="font-semibold text-white mb-1">{method.title}</h4>
                  <p className="text-gray-400 text-sm">{method.value}</p>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-gray-800/30 rounded-xl p-6 border border-white/10">
              <h4 className="font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {[
                  { name: 'GitHub', icon: '🐙', url: 'https://github.com/roshnikumari-21' },
                  { name: 'Twitter', icon: '🐦', url: 'https://x.com/Roshnisingh_21' },
                  { name: 'LinkedIn', icon: '💼', url: 'https://www.linkedin.com/in/roshni-kumari-2aa61928a/' },
                  { name: 'Instagram', icon: '📸', url: 'https://www.instagram.com/roshnisingh_21/' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center text-lg hover:bg-blue-500 hover:scale-110 transition-all duration-300 transform"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400"
                  placeholder="Project Collaboration"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-400 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Send Message
                <span className="ml-2">🚀</span>
              </button>

              <p className="text-gray-400 text-sm text-center mt-4">
                I typically respond within 24 hours
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}