import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';
import { contentData } from '../data/content';

export default function StorySection() {
  const { title, line1, line2 } = contentData.story;

  return (
    <section id="story-section" className="relative py-24 md:py-32 px-6 bg-[#F0F7FF] text-[#0F172A] overflow-hidden border-t border-b border-sky-100">
      {/* Background Decorative SVG Doodles */}
      <div className="absolute top-12 left-6 md:left-16 opacity-30 text-sky-400 pointer-events-none">
        <svg width="64" height="64" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10,50 Q25,25 50,50 T90,50" />
          <path d="M20,60 Q35,45 60,60 T80,60" />
        </svg>
      </div>

      <div className="absolute bottom-10 right-6 md:right-20 opacity-30 text-sky-400 pointer-events-none">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M30,10 C20,40 80,40 70,90" />
          <circle cx="70" cy="90" r="3" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Section Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="h-px w-8 bg-sky-300"></span>
          <span className="font-handwritten text-xl text-[#0284C7]">Chapter 01</span>
          <span className="h-px w-8 bg-sky-300"></span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0C4A6E] mb-12 tracking-tight"
        >
          {title}
        </motion.h2>

        {/* Story Quotes Box */}
        <div className="space-y-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#E0F2FE] to-[#F0F7FF] border border-sky-100 shadow-md shadow-sky-900/5 relative"
          >
            {/* Top quote icon */}
            <div className="text-3xl text-sky-400 font-serif leading-none absolute -top-4 left-8 bg-[#F0F7FF] px-2">
              “
            </div>

            <p className="text-xl md:text-2xl font-serif text-[#0284C7] italic leading-relaxed">
              "{line1}"
            </p>

            <div className="mt-4 flex justify-center text-sky-400">
              <Heart className="w-5 h-5 fill-sky-300 text-sky-400 inline" />
            </div>
          </motion.div>

          {line2 && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-[#F0F7FF] to-[#E0F2FE] border border-sky-100 shadow-md shadow-sky-900/5 relative"
            >
              <p className="text-xl md:text-2xl font-serif text-[#0C4A6E] leading-relaxed">
                "{line2}"
              </p>

              <div className="mt-4 flex justify-center items-center gap-2">
                <svg className="w-32 h-4 text-sky-400" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5,10 Q25,18 50,10 T95,12" />
                </svg>
              </div>
            </motion.div>
          )}
        </div>

        {/* Small Doodle Note */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 inline-flex items-center gap-2 font-handwritten text-2xl text-[#0284C7]"
        >
          <Sparkles className="w-5 h-5 text-sky-500 inline" />
          <span>Dan bagian terindahnya bukan tentang bagaimana semuanya bermula, tapi tentang bagaimana kita masih memilih untuk menulis kelanjutannya... bersama..</span>
          <Star className="w-4 h-4 fill-amber-300 text-amber-400 inline" />
        </motion.div>
      </div>
    </section>
  );
}
