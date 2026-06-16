'use client';

import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const portfolioSites = [
  {
    name: 'MaleOptimal',
    description: "Men's health optimization guides and evidence-based wellness content",
    metrics: '156+ articles',
    href: 'https://maleoptimal.co.uk',
    category: 'Health',
    color: 'from-amber-400 to-orange-500',
  },
  {
    name: 'GLP1Guide',
    description: 'UK GLP-1 medication calculators and weight loss guidance',
    metrics: 'Calculators & Guides',
    href: 'https://glp1guide.co.uk',
    category: 'Health',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    name: 'FuelOptimal',
    description: 'Nutrition guides, meal plans, and evidence-based dietary advice',
    metrics: 'Nutrition Hub',
    href: 'https://fueloptimal.co.uk',
    category: 'Nutrition',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    name: 'TradePick',
    description: 'Trading tools, market analysis, and investment resources',
    metrics: 'Tools & Analysis',
    href: 'https://tradepick.co.uk',
    category: 'Finance',
    color: 'from-purple-400 to-pink-500',
  },
  {
    name: 'HomeOptimal',
    description: 'Home improvement, organization, and lifestyle optimization',
    metrics: 'Home Guides',
    href: 'https://homeoptimal.co.uk',
    category: 'Lifestyle',
    color: 'from-rose-400 to-red-500',
  },
  {
    name: 'TechOptimal',
    description: 'Tech reviews, productivity tools, and digital lifestyle guides',
    metrics: 'Tech Reviews',
    href: 'https://techoptimal.co.uk',
    category: 'Technology',
    color: 'from-cyan-400 to-blue-500',
  },
];

function AuroraBackground() {
  return (
    <div className="aurora-bg" />
  );
}

function FloatingOrb({ delay, x, y, scale }: { delay: number; x: string; y: string; scale: string }) {
  return (
    <motion.div
      className="absolute rounded-full blur-3xl"
      style={{
        left: x,
        top: y,
        width: scale,
        height: scale,
        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.3) 0%, transparent 70%)',
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <div className="relative min-h-screen">
      <AuroraBackground />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative px-6 py-32 md:py-48 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <FloatingOrb delay={0} x="10%" y="20%" scale="300px" />
          <FloatingOrb delay={2} x="70%" y="10%" scale="250px" />
          <FloatingOrb delay={4} x="50%" y="60%" scale="350px" />
        </div>

        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative mx-auto max-w-[var(--container-max)]"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-medium text-[var(--foreground-muted)] uppercase tracking-wider">
                Building Digital Empires
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[1.05]">
              <span className="text-[var(--foreground)]">Content businesses that</span>
              <br />
              <span className="text-gradient">help people live better</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-[var(--foreground-muted)] max-w-2xl leading-relaxed">
              Good Living Co builds premium, evidence-based content sites across health, nutrition, finance, and lifestyle — reaching millions of readers seeking to optimize their lives.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <Link
                href="/portfolio"
                className="btn-magnetic inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all hover:shadow-glow"
              >
                Explore Portfolio
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="btn-magnetic inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)] px-8 py-4 text-sm font-medium text-[var(--foreground)] transition-all hover:border-[var(--border-highlight)]"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Strip */}
      <section className="px-6 py-12 border-y border-[var(--border)]">
        <div className="mx-auto max-w-[var(--container-max)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '200+', label: 'Articles Published' },
              { value: '2M+', label: 'Readers Reached' },
              { value: '8', label: 'Content Sites' },
              { value: '6+', label: 'Revenue Streams' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <div className="text-3xl md:text-4xl font-medium text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-[var(--foreground-muted)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[var(--container-max)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-sm font-medium text-[var(--foreground-muted)] uppercase tracking-wider mb-3">
              Our Portfolio
            </h2>
            <p className="text-3xl md:text-4xl font-medium text-[var(--foreground)] tracking-tight">
              Sites that serve millions
            </p>
          </motion.div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioSites.map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="stagger-item"
              >
                <Link
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-bezel glow-border block h-full"
                >
                  <div className="card-bezel-inner">
                    {/* Category Badge with Gradient */}
                    <div className="flex items-start justify-between mb-6">
                      <span className={`text-xs font-medium px-3 py-1.5 rounded-full bg-gradient-to-r ${site.color} text-white`}>
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

                    {/* Site Name */}
                    <h3 className="text-2xl font-medium text-[var(--foreground)] mb-3 group-hover:text-gradient transition-all">
                      {site.name}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--foreground-muted)] mb-6 leading-relaxed">
                      {site.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex items-center gap-2 text-sm">
                      <span className="inline-flex items-center gap-1.5 text-[var(--foreground-muted)]">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                        </span>
                        {site.metrics}
                      </span>
                    </div>
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
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card-bezel"
          >
            <div className="card-bezel-inner p-8 md:p-12">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-medium text-[var(--foreground)] mb-4 tracking-tight">
                  Let's build something together
                </h2>
                <p className="text-[var(--foreground-muted)] mb-8 text-lg leading-relaxed">
                  We're always exploring new opportunities to collaborate with brands that align with our mission of helping people live better lives.
                </p>
                <Link
                  href="/contact"
                  className="btn-magnetic inline-flex items-center gap-3 rounded-full bg-[var(--foreground)] px-8 py-4 text-sm font-medium text-[var(--background)] transition-all hover:shadow-glow"
                >
                  Get in touch
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
