'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...formData,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#000f30]">
      <Navbar />
      <div className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white"
          >
            <div className="text-center mb-12">
              <h1 className="text-[40px] font-bold text-[#333] mb-4 font-[var(--font-roboto-condensed)]">
                Get in touch
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-[18px] font-[var(--font-roboto-condensed)] text-[#333] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B6FF] focus:border-transparent"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-[18px] font-[var(--font-roboto-condensed)] text-[#333] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B6FF] focus:border-transparent"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-[18px] font-[var(--font-roboto-condensed)] text-[#333] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00B6FF] focus:border-transparent"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#00B6FF] text-white px-8 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 font-[var(--font-roboto-condensed)] disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">
                  Thank you for your message. We&apos;ll get back to you soon!
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  Something went wrong. Please try again later.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 