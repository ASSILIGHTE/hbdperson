import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Smile, Sun, Wand2 } from 'lucide-react';
import { contentData } from '../data/content';

export default function ReasonsSection() {
  const reasons = contentData.reasons;

  const getIcon = (index) => {
    const icons = [
      <Smile key="1" className="w-6 h-6 text-sky-500" />,
      <Wand2 key="2" className="w-6 h-6 text-sky-500" />,
      <Heart key="3" className="w-6 h-6 text-sky-500 fill-sky-100" />,
      <Sun key="4" className="w-6 h-6 text-amber-500" />,
      <Sparkles key="5" className="w-6 h-6 text-sky-500" />
    ];
    return icons[index] || <Heart className="w-6 h-6 text-sky-500" />;
  };

  return (
    <section className="py-24 px-6 bg-[#F0F7FF] text-[#0F172A] relative overflow-hidden border-b border-sky-100">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-100/80 text-[#0284C7] text-sm font-handwritten mb-3 border border-sky-200"
          >
            <Sparkles className="w-4 h-4 text-sky-500" />
            <span>5 Reasons & Counting</span>
            <Heart className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0C4A6E] tracking-tight mb-4"
          >
            5 Little Things I Love About You
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.12 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`p-7 rounded-3xl bg-gradient-to-br from-white to-[#E0F2FE]/50 border border-sky-100 shadow-lg shadow-sky-900/5 hover:shadow-xl hover:shadow-sky-900/10 hover:border-sky-200 transition-all duration-300 relative group flex flex-col justify-between ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-3xl font-serif font-bold text-sky-300 group-hover:text-[#0284C7] transition-colors duration-300">
                  {reason.number}
                </span>
                <div className="p-2.5 rounded-2xl bg-sky-100 text-sky-500 group-hover:scale-110 transition-transform duration-300">
                  {getIcon(index)}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-[#0C4A6E] mb-2 group-hover:text-[#0284C7] transition-colors duration-200">
                  {reason.title}
                </h3>
                <p className="text-base text-[#0369A1]/90 font-sans font-light leading-relaxed">
                  "{reason.description}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between text-xs text-sky-500 font-handwritten text-lg">
                <span>Made me fall for you</span>
                <Heart className="w-4 h-4 fill-sky-200 text-sky-400 opacity-60 group-hover:opacity-100 group-hover:fill-sky-400 transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
