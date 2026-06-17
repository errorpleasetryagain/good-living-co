'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const portfolioSites = [
  {
    name: 'MaleOptimal',
    url: 'https://maleoptimal.co.uk',
    description: 'Men\'s health and optimisation — evidence-based guides on TRT, nutrition, training, and longevity.',
    accent: '#2E5F4C',
    category: 'Health',
  },
  {
    name: 'GLP1Guide',
    url: 'https://glp1guide.co.uk',
    description: 'GLP-1 medication calculators and guides — semaglutide, tirzepatide dosing, cost comparisons.',
    accent: '#3B5998',
    category: 'Health',
  },
  {
    name: 'FuelOptimal',
    url: 'https://fueloptimal.co.uk',
    description: 'Nutrition and performance — meal plans, supplement guides, athletic nutrition.',
    accent: '#D97706',
    category: 'Nutrition',
  },
  {
    name: 'TradePick',
    url: 'https://tradepick.co.uk',
    description: 'Tools and trades — equipment reviews, trade skills, career guides for skilled workers.',
    accent: '#DC2626',
    category: 'Trade',
  },
  {
    name: 'RemotePivot',
    url: 'https://remotepivot.co.uk',
    description: 'Remote work — career transitions, productivity, tools for distributed teams.',
    accent: '#7C3AED',
    category: 'Career',
  },
  {
    name: 'AIByRole',
    url: 'https://aibyrole.co.uk',
    description: 'AI tools by job role — practical AI guides for specific professions and industries.',
    accent: '#0891B2',
    category: 'Technology',
  },
];

const stats = [
  { value: '200+', label: 'Articles published' },
  { value: '2M+', label: 'Readers reached' },
  { value: '6', label: 'Content sites' },
  { value: '8+', label: 'Revenue streams' },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section — Editorial style, not generic gradient */}
      <section className="py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <p className="text-sm font-medium text-[#666655] mb-4 tracking-wide uppercase">
            Good Living Co
          </p>
          <h1 className="text-5xl md:text-7xl font-medium mb-6 leading-tight">
            Building content businesses that help people live better
          </h1>
          <p className="text-xl text-[#666655] max-w-2xl leading-relaxed">
            We create evidence-based resources in health, nutrition, career, and technology. 
            No hype. No bro science. Just honest, researched guides that actually work.
          </p>
          
          <div className="flex gap-4 mt-10">
            <Link href="/portfolio" className="btn btn-primary">
              View Our Sites
            </Link>
            <Link href="/about" className="btn btn-secondary">
              Our Story
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Trust Ticker — Editorial credibility */}
      <section className="border-t border-b border-[#E0DED9] py-4 px-6 md:px-12">
        <div className="trust-ticker max-w-7xl mx-auto">
          <span>✓ Evidence-based research</span>
          <span>✓ 2M+ readers</span>
          <span>✓ Independent & unbiased</span>
          <span>✓ Updated weekly</span>
        </div>
      </section>

      {/* Stats Section — Simple, flat */}
      <section className="py-16 px-6 md:px-12 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-4xl md:text-5xl font-medium text-[#2E5F4C] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#666655] text-sm uppercase tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid — Editorial layout, not generic cards */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Our Portfolio</h2>
          <p className="text-xl text-[#666655] max-w-3xl">
            Six content sites, each serving a specific audience with deep, researched guides.
          </p>
          <div className="divider mt-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioSites.map((site, index) => (
            <motion.article
              key={site.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="card group cursor-pointer"
            >
              <Link href={site.url} className="block">
                <div className="flex items-center justify-between mb-4">
                  <span 
                    className="text-xs font-medium uppercase tracking-wide px-3 py-1 rounded-full"
                    style={{ 
                      backgroundColor: `${site.accent}08`,
                      color: site.accent 
                    }}
                  >
                    {site.category}
                  </span>
                  <span className="text-[#666655] group-hover:text-[#2E5F4C] transition-colors">
                    →
                  </span>
                </div>
                <h3 className="text-2xl mb-3 group-hover:text-[#2E5F4C] transition-colors">
                  {site.name}
                </h3>
                <p className="text-[#666655] leading-relaxed">
                  {site.description}
                </p>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Mission Section — Editorial, asymmetrical */}
      <section className="py-20 px-6 md:px-12 bg-[#F5EFE7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">Why We Do This</h2>
              <div className="divider" />
              <p className="text-lg text-[#666655] leading-relaxed mb-6">
                Most health and wellness content is either too superficial or pushed by people 
                selling something. We believe in honest, researched guides that help people 
                make better decisions.
              </p>
              <p className="text-lg text-[#666655] leading-relaxed mb-8">
                Every article is backed by peer-reviewed research, tested in real life, and 
                written in plain English. No hype. No fear-mongering. Just useful information.
              </p>
              <Link href="/about" className="btn btn-primary">
                Read Our Story
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:block"
            >
              {/* Placeholder for founder photo or brand image */}
              <div 
                className="w-full h-96 bg-[#EBE4DC] rounded-lg flex items-center justify-center"
                style={{ 
                  backgroundImage: 'url(/about-hero.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <span className="text-[#666655] text-sm">
                  [Founder photo or brand imagery]
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section — Simple, warm */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl mb-6">Partnerships & Press</h2>
          <p className="text-xl text-[#666655] leading-relaxed mb-8">
            Interested in collaborating, featuring our work, or advertising across our network? 
            We'd love to hear from you.
          </p>
          <Link href="/contact" className="btn btn-primary">
            Get in Touch
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
