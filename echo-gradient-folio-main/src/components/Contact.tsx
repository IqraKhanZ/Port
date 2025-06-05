import React, { useState, useRef } from 'react';
import { Mail, User, MessageSquare, Phone, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_eufwj7v', 'template_g7zv4yf', form.current, 'YcR3EhlbRy7HERi0u')
      .then(() => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        alert('Oops! Something went wrong.');
      });
  };

  // (Social links and contact details unchanged…)

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading omitted for brevity */}
        
        {/* Contact Form */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <MessageSquare className="w-8 h-8 text-cyan-400" />
            Send Message
          </h3>

          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">Your Name</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required className="..." />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">Email Address</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="..." />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">Message</label>
              <textarea name="message" rows={5} value={formData.message} onChange={handleChange} required className="..." />
            </div>

            <button type="submit" className="group w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:scale-105 transition">
              <span className="group-hover:animate-pulse">Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

