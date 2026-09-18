import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Heart, Sparkles } from 'lucide-react';
import { contentData } from '../data/content';

export default function LetterSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { title, salutation, paragraphs, closing } = contentData.letter;

  return (
    <section id="letter-section" className="py-24 px-4 md:px-8 bg-gradient-to-b from-[#F0F7FF] via-[#E0F2FE] to-[#F0F7FF] text-[#0F172A] relative overflow-hidden paper-texture">
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 text-[#0284C7] text-sm font-handwritten mb-3 shadow-xs border border-sky-100"
        >
          <Mail className="w-4 h-4 text-sky-500" />
          <span>A Special Letter</span>
          <Heart className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0C4A6E] tracking-tight mb-4"
        >
          {title}
        </motion.h2>

        <p className="text-base text-[#0369A1]/90 font-sans font-light mb-10">
          {!isOpen ? "Tap the envelope below to open your birthday letter ✉️" : "Read with love ❤️"}
        </p>

        <div className="max-w-2xl mx-auto min-h-[400px] flex items-center justify-center relative perspective-1000">
          {!isOpen ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsOpen(true)}
              className="relative w-full max-w-md bg-gradient-to-br from-[#0284C7] to-[#0C4A6E] rounded-3xl p-8 shadow-2xl shadow-sky-900/30 cursor-pointer border border-sky-600 text-white overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-32 bg-white/10 [clip-path:polygon(0_0,50%_75%,100%_0)]" />

              <div className="relative z-10 my-8 flex flex-col items-center justify-center gap-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-200 flex items-center justify-center shadow-lg shadow-sky-950/60 ring-4 ring-sky-300/40 group-hover:scale-110 transition-transform duration-300">
                  <Heart className="w-8 h-8 fill-white text-white" />
                </div>
                <span className="font-serif text-xl tracking-wide font-medium mt-2">For My Love</span>
                <span className="text-xs font-sans text-sky-200 tracking-widest uppercase">Click to open 💌</span>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full bg-[#F8FAFC] rounded-3xl p-8 md:p-12 shadow-2xl shadow-sky-900/10 border border-sky-200 text-left relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 text-sky-300/50 pointer-events-none">
                <Sparkles className="w-12 h-12" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-serif text-2xl md:text-3xl text-[#0284C7] font-bold mb-6"
              >
                {salutation}
              </motion.div>

              <div className="space-y-5 font-serif text-lg md:text-xl text-[#0F172A]/90 leading-relaxed">
                {paragraphs.map((p, idx) => (
                  <motion.p
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 + idx * 0.2 }}
                  >
                    {p}
                  </motion.p>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.4 }}
                className="mt-10 pt-6 border-t border-sky-200 flex flex-col md:flex-row md:items-center justify-between gap-4 font-handwritten text-3xl text-[#0284C7]"
              >
                <span>{closing}</span>
                <span className="text-xl text-sky-600 font-sans">Forever Yours 🩵</span>
              </motion.div>

              <div className="mt-8 text-center md:text-right">
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs font-sans text-sky-600 hover:text-[#0C4A6E] underline cursor-pointer"
                >
                  Fold letter back ✉️
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
