'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const portfolioSites = [
  {
    name: 'MaleOptimal',
    description: "Men's health optimization guides and evidence-based wellness content",
    articles: '156+ articles',
    href: 'https://maleoptimal.com',
    category: 'Health',
  },
  {
    name: 'GLP1Guide',
    description: 'UK GLP-1 medication calculators and weight loss guidance',
    articles: 'Calculators & Guides',
    href: 'https://glp1guide.co.uk',
    category: 'Health',
  },
  {
    name: 'FuelOptimal',
    description: 'Nutrition guides, meal plans, and evidence-based dietary advice',
    articles: 'Nutrition Hub',
    href: 'https://fueloptimal.com',
    category: 'Nutrition',
  },
  {
    name: 'TradePick',
    description: 'Trading tools, market analysis, and investment resources',
    articles: 'Tools & Analysis',
    href: 'https://tradepick.co.uk',
    category: 'Finance',
  },
  {
    name: 'HomeOptimal',
    description: 'Home improvement, organization, and lifestyle optimization',
    articles: 'Home Guides',
    href: 'https://homeoptimal.com',
    category: 'Lifestyle',
  },
  {
    name: 'TechOptimal',
    description: 'Tech reviews, productivity tools, and digital lifestyle guides',
    articles: 'Tech Reviews',
    href: 'https://techoptimal.com',
    category: 'Technology',
  },
];

export default function Home() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[var(--foreground)] leading-[1.1]">
              Building content businesses that help people live better
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl">
              Good Living Co creates premium, evidence-based content across health, nutrition, finance, and lifestyle — reaching millions of readers seeking to optimize their lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <h2 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-8">
              Our Portfolio
            </h2>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioSites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 + index * 0.08 }}
                className="stagger-item"
              >
                <Link
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:border-[var(--foreground)] hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--border)] text-[var(--foreground-muted)]">
                      {site.category}
                    </span>
                    <svg
                      className="w-5 h-5 text-[var(--foreground-muted)] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-[var(--foreground)] mb-2">
                    {site.name}
                  </h3>
                  <p className="text-[var(--foreground-muted)] mb-4">
                    {site.description}
                  </p>
                  <div className="text-sm text-[var(--foreground-muted)]">
                    {site.articles}
                  </div>
                </Link>
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
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-4">
                Interested in partnering?
              </h2>
              <p className="text-[var(--foreground-muted)] mb-8">
                We're always exploring new opportunities to collaborate with brands that align with our mission of helping people live better lives.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[0.98]"
              >
                Get in touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
