import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ChevronDown } from 'lucide-react';
import { contentData } from '../data/content';

export default function HeroSection({ onOpenSurprise }) {
  const { title, subtitle, cta } = contentData.hero;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-16 bg-gradient-to-b from-[#F0F7FF] via-[#E0F2FE] to-[#F0F7FF] overflow-hidden paper-texture">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-96 md:h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Sparkles & Hearts Accents */}
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 md:left-24 text-sky-400 pointer-events-none"
      >
        <Heart className="w-8 h-8 md:w-10 md:h-10 fill-sky-200/60 text-sky-400" />
      </motion.div>

      <motion.div
        animate={{ y: [5, -5, 5], rotate: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-8 md:right-28 text-blue-400 pointer-events-none"
      >
        <Sparkles className="w-7 h-7 md:w-9 md:h-9 text-sky-500 opacity-80" />
      </motion.div>

      {/* Hero Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 max-w-3xl mx-auto px-6 py-12 rounded-3xl backdrop-blur-xs bg-white/60 border border-sky-100/80 shadow-xl shadow-sky-900/5"
      >
        {/* Handwritten Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 text-[#0369A1] text-sm md:text-base font-handwritten tracking-wide mb-6 border border-sky-200"
        >
          <Sparkles className="w-4 h-4 text-sky-500 animate-spin" style={{ animationDuration: '6s' }} />
          <span>A special digital gift for you</span>
          <Heart className="w-4 h-4 fill-sky-500 text-sky-500 inline" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#0C4A6E] leading-tight md:leading-none tracking-tight mb-6"
        >
          {title}
        </motion.h1>

        {/* Decorative Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent mx-auto mb-6 rounded-full"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-base sm:text-lg md:text-xl text-[#0369A1]/90 font-sans font-light leading-relaxed max-w-xl mx-auto mb-10"
        >
          "{subtitle}"
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <motion.button
            onClick={onOpenSurprise}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(2, 132, 199, 0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#0C4A6E] text-white font-sans font-medium text-lg rounded-full shadow-lg shadow-sky-900/20 cursor-pointer overflow-hidden"
          >
            {/* Shimmer light effect inside button */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <span className="relative z-10 font-medium tracking-wide">{cta}</span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Down Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 1 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-1 text-[#0284C7]/70 hover:text-[#0C4A6E]"
        onClick={onOpenSurprise}
      >
        <span className="text-xs font-sans tracking-widest uppercase">Scroll Down</span>
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
