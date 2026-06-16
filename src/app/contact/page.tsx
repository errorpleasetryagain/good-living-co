'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in production, this would connect to an API
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry. We will get back to you soon.');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[var(--foreground)] leading-[1.1]">
              Contact Us
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl">
              Interested in advertising, partnerships, or other business opportunities? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h2 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-6">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition-all"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition-all"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="advertising">Advertising Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder-[var(--foreground-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--foreground)] transition-all resize-none"
                    placeholder="Tell us about your inquiry..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="flex flex-col justify-between"
            >
              <div>
                <h2 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-6">
                  Business Information
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">
                      Advertising & Partnerships
                    </h3>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      We offer premium advertising placements across our portfolio of sites. All partnerships are carefully selected to align with our values and provide genuine value to our readers.
                    </p>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-[var(--foreground-muted)]">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        partnerships@goodlivingco.com
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[var(--border)] pt-8">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">
                      Monetization
                    </h3>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      Our sites are monetized through transparent affiliate partnerships and email newsletters.
                    </p>
                    <div className="space-y-2 text-sm text-[var(--foreground-muted)]">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--foreground)]"></span>
                        Awin Affiliate Network (ID: 2838304)
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[var(--foreground)]"></span>
                        MailerLite Email Lists (ID: 2237662)
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[var(--border)] pt-8">
                    <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">
                      Portfolio Sites
                    </h3>
                    <p className="text-[var(--foreground-muted)] mb-4">
                      Good Living Co operates six content sites across health, nutrition, finance, and lifestyle verticals.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {['MaleOptimal', 'GLP1Guide', 'FuelOptimal', 'TradePick', 'HomeOptimal', 'TechOptimal'].map((site) => (
                        <span
                          key={site}
                          className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--foreground-muted)]"
                        >
                          {site}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
          >
            <div className="max-w-3xl">
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-4">
                Built on Trust
              </h2>
              <p className="text-[var(--foreground-muted)] mb-6">
                Every partnership we enter is evaluated against our core values: evidence-based content, reader-first approach, and transparent monetization. We only work with brands that share our commitment to helping people live better lives.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { title: 'Transparent', desc: 'All affiliate relationships clearly disclosed' },
                  { title: 'Selective', desc: 'Partnerships aligned with reader value' },
                  { title: 'Long-term', desc: 'Building lasting relationships, not quick wins' },
                ].map((item) => (
                  <div key={item.title}>
                    <h3 className="text-sm font-medium text-[var(--foreground)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--foreground-muted)]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
