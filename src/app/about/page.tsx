'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutPage() {
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
              About Good Living Co
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="max-w-3xl"
          >
            <h2 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-[var(--foreground)] leading-relaxed mb-6">
              At Good Living Co, we believe that quality information should be accessible, evidence-based, and actionable. In a world of noise and misinformation, we're building trusted resources that help people make better decisions about their health, finances, and lifestyle.
            </p>
            <p className="text-lg md:text-xl text-[var(--foreground-muted)] leading-relaxed">
              Each of our sites is crafted with rigorous research, expert input, and a genuine desire to improve outcomes for our readers. We're not chasing clicks — we're building lasting resources that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Adam's Story Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="max-w-3xl"
          >
            <h2 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-6">
              Adam's Story
            </h2>
            <div className="prose prose-lg text-[var(--foreground-muted)]">
              <p className="mb-6">
                Good Living Co was founded by Adam Turton, a technology operations leader turned entrepreneur. After years of building resilient systems and leading teams in the corporate world, Adam set out to create something different: a portfolio of content businesses that could genuinely help people while operating with integrity.
              </p>
              <p className="mb-6">
                The journey began with a simple observation: too much online content prioritizes engagement over accuracy, clicks over outcomes. Adam saw an opportunity to build sites that would be different — resources people could trust, return to, and recommend to others.
              </p>
              <p className="mb-6">
                Starting with MaleOptimal, Adam applied a systematic approach: identify underserved topics, research thoroughly, write clearly, and iterate based on reader feedback. The model worked. What began as a side project grew into a portfolio of six+ sites reaching hundreds of thousands of readers monthly.
              </p>
              <p className="mb-6">
                Today, Good Living Co operates sites across health, nutrition, finance, and lifestyle verticals. Each is run with the same principles: evidence-based content, transparent monetization through affiliate partnerships (Awin ID: 2838304) and email newsletters (MailerLite ID: 2237662), and an unwavering commitment to reader trust.
              </p>
              <p>
                Adam writes under the pen name James Whitfield for content across the portfolio, maintaining a consistent voice focused on clarity, honesty, and practical value. When not building content systems, Adam continues to work in technology operations, applying the same rigor to both worlds.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <h2 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-8">
              Our Values
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Evidence First',
                description: 'Every claim is researched, every recommendation is backed by data. We cite sources and update content as new information emerges.',
              },
              {
                title: 'Reader Trust',
                description: "We are transparent about how we make money. Affiliate links and sponsored content are always disclosed. Your trust is our most valuable asset.",
              },
              {
                title: 'Long-term Thinking',
                description: "We build resources designed to last. No clickbait, no trends for trends' sake — just evergreen content that serves readers for years.",
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.4 + index * 0.1 }}
                className="stagger-item rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6"
              >
                <h3 className="text-lg font-medium text-[var(--foreground)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--foreground-muted)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-4">
                Want to learn more?
              </h2>
              <p className="text-[var(--foreground-muted)] mb-8">
                Explore our portfolio of sites or get in touch to discuss potential partnerships.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
                >
                  View Portfolio
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--border)]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
