'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const portfolioSites = [
  {
    name: 'MaleOptimal',
    description: "Men's health optimization guides and evidence-based wellness content",
    articles: '156+ articles',
    href: 'https://maleoptimal.com',
    category: 'Health',
    features: ['Hormone optimization', 'Fitness protocols', 'Sleep & recovery', 'Supplement guides'],
  },
  {
    name: 'GLP1Guide',
    description: 'UK GLP-1 medication calculators and weight loss guidance',
    articles: 'Calculators & Guides',
    href: 'https://glp1guide.co.uk',
    category: 'Health',
    features: ['Dosage calculators', 'UK prescribing info', 'Side effect guides', 'Progress tracking'],
  },
  {
    name: 'FuelOptimal',
    description: 'Nutrition guides, meal plans, and evidence-based dietary advice',
    articles: 'Nutrition Hub',
    href: 'https://fueloptimal.com',
    category: 'Nutrition',
    features: ['Macro calculators', 'Meal planning', 'Recipe database', 'Nutrition science'],
  },
  {
    name: 'TradePick',
    description: 'Trading tools, market analysis, and investment resources',
    articles: 'Tools & Analysis',
    href: 'https://tradepick.co.uk',
    category: 'Finance',
    features: ['Market screeners', 'Trading strategies', 'Risk calculators', 'Portfolio tools'],
  },
  {
    name: 'HomeOptimal',
    description: 'Home improvement, organization, and lifestyle optimization',
    articles: 'Home Guides',
    href: 'https://homeoptimal.com',
    category: 'Lifestyle',
    features: ['Organization systems', 'DIY projects', 'Smart home guides', 'Productivity spaces'],
  },
  {
    name: 'TechOptimal',
    description: 'Tech reviews, productivity tools, and digital lifestyle guides',
    articles: 'Tech Reviews',
    href: 'https://techoptimal.com',
    category: 'Technology',
    features: ['Software reviews', 'Hardware guides', 'Productivity stacks', 'Digital wellness'],
  },
];

export default function PortfolioPage() {
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
              Our Portfolio
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl">
              Six premium content sites, each built with the same commitment to quality, evidence, and reader trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <div className="grid gap-8">
            {portfolioSites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
                className="stagger-item"
              >
                <Link
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 transition-all hover:border-[var(--foreground)] hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--border)] text-[var(--foreground-muted)]">
                          {site.category}
                        </span>
                        <span className="text-sm text-[var(--foreground-muted)]">
                          {site.articles}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-3">
                        {site.name}
                      </h2>
                      <p className="text-[var(--foreground-muted)] mb-6 max-w-2xl">
                        {site.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {site.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1.5 rounded-full border border-[var(--border)] text-[var(--foreground-muted)]"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full border border-[var(--border)] transition-all group-hover:bg-[var(--foreground)] group-hover:border-[var(--foreground)]">
                        <svg
                          className="w-5 h-5 text-[var(--foreground-muted)] transition-colors group-hover:text-[var(--background)]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
          >
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { value: '6+', label: 'Content Sites' },
                { value: '500+', label: 'Articles Published' },
                { value: '100K+', label: 'Monthly Readers' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.6 + index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <div className="text-3xl md:text-4xl font-medium text-[var(--foreground)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[var(--foreground-muted)]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24 md:pb-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-12"
          >
            <div className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-medium text-[var(--foreground)] mb-4">
                Interested in advertising or partnerships?
              </h2>
              <p className="text-[var(--foreground-muted)] mb-8">
                We offer premium advertising placements and partnership opportunities across our portfolio. All monetization is transparent and aligned with reader value.
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
