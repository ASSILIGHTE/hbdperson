import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar } from 'lucide-react';
import { contentData } from '../data/content';

export default function FinalFooterSection() {
  const { quote, heading, date, footer } = contentData.final;

  return (
    <footer className="py-20 px-6 bg-[#F0F7FF] text-[#0F172A] relative overflow-hidden text-center border-t border-sky-100 paper-texture">
      <div className="max-w-2xl mx-auto space-y-8 relative z-10">
        {/* Heart Icon Accent */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sky-100 text-[#0284C7] shadow-sm mb-2"
        >
          <Heart className="w-7 h-7 fill-[#0284C7]" />
        </motion.div>

        {/* Quote */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xl sm:text-2xl md:text-3xl font-serif italic text-[#0284C7] font-medium"
        >
          "{quote}"
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0C4A6E] tracking-tight"
        >
          {heading}
        </motion.h2>

        {/* Date Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white text-[#0284C7] text-sm md:text-base font-sans tracking-widest border border-sky-200 shadow-xs"
        >
          <Calendar className="w-4 h-4 text-sky-500" />
          <span>{date}</span>
        </motion.div>

        {/* Footer line */}
        <div className="pt-10 border-t border-sky-200/60 text-xs md:text-sm text-sky-600 font-sans tracking-wide">
          <p className="flex items-center justify-center gap-1.5 font-handwritten text-xl text-[#0284C7]/80">
            {footer} <Heart className="w-4 h-4 fill-sky-500 text-sky-500 inline" />
          </p>
        </div>
      </div>
    </footer>
  );
}
