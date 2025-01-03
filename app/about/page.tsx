'use client';

import { aboutSections } from '@/constants/about'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import AboutBanner with no SSR to avoid hydration issues
const AboutBanner = dynamic(() => import('@/components/ui/about/AboutBanner'), {
  ssr: false
});

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 font-worksans">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/40 to-gray-900" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white mb-8">
              Transforming <span className="text-purple-500">Insights</span> into Impact
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We empower organizations to navigate complexity, embrace innovation, and achieve sustainable growth through data-driven strategies and expert consulting.
            </p>
          </motion.div>
        </div>
      </section>

      

      {/* Content Sections */}
      {aboutSections.map((section, index) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="w-full"
        >
          <AboutBanner section={section} />
        </motion.div>
      ))}

      {/* Updated Values Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              These principles guide our decisions and shape our culture
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: 'Commitment',
                description: 'Dedicated to delivering excellence and exceeding expectations in everything we do',
                icon: '🎯'
              },
              {
                title: 'Integrity',
                description: 'Upholding the highest ethical standards with transparency and honesty',
                icon: '⭐'
              },
              {
                title: 'Innovation',
                description: 'Continuously pushing boundaries and embracing new technologies',
                icon: '💡'
              },
              {
                title: 'Inclusion',
                description: 'Fostering a diverse environment where every voice matters',
                icon: '🤝'
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-purple-500 transition-all group"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-500 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Global Presence</h2>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto">
              Delivering excellence across continents with our strategically located offices
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <Image
              src="/assets/about/global-presence.jpg"
              alt="Algoritt's Global Presence Map"
              width={1200}
              height={600}
              className="rounded-2xl shadow-2xl"
              priority
            />
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {[
                { country: 'USA', region: 'North America' },
                { country: 'UK', region: 'Europe' },
                { country: 'Poland', region: 'Europe' },
                { country: 'Czech Republic', region: 'Europe' },
                { country: 'India', region: 'Asia' },
              ].map((location, index) => (
                <motion.div
                  key={location.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700"
                >
                  <h3 className="text-xl font-bold text-white mb-1">{location.country}</h3>
                  <p className="text-gray-400">{location.region}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let&apos;s collaborate to unlock your organization&apos;s full potential.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
