import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Gift } from 'lucide-react';
import { contentData } from '../data/content';

export default function CakeSurpriseSection() {
  const [wishMade, setWishMade] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const { heading, buttonText, wishMadeTitle, wishMadeSubtitle } = contentData.surprise;

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      colors: ['#38BDF8', '#0284C7', '#D4AF37', '#FFFFFF', '#0C4A6E']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleMakeWish = () => {
    setWishMade(true);
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    triggerConfetti();
  };

  return (
    <section className="py-28 px-4 md:px-8 bg-gradient-to-b from-[#0B192C] via-[#003161] to-[#0B192C] text-white relative overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        {!wishMade ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/70 text-sky-200 text-sm font-handwritten border border-sky-800">
              <Gift className="w-4 h-4 text-sky-400" />
              <span>The Grand Finale</span>
              <Heart className="w-3.5 h-3.5 fill-sky-400 text-sky-400" />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-sky-100 tracking-tight">
              {heading}
            </h2>

            <p className="text-sky-200/80 font-sans font-light text-base md:text-lg max-w-md mx-auto">
              Close your eyes, think of something beautiful, and make your birthday wish...
            </p>

            <motion.div>
              <motion.button
                onClick={handleMakeWish}
                whileHover={{ scale: 1.06, boxShadow: "0 0 35px rgba(56, 189, 248, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-9 py-4 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-600 text-white font-sans font-semibold text-lg rounded-full shadow-2xl shadow-sky-900/50 cursor-pointer overflow-hidden border border-sky-300/40"
              >
                <Sparkles className="w-5 h-5 text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
                <span>{buttonText}</span>
                <Sparkles className="w-5 h-5 text-amber-200" />
              </motion.button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 py-4"
          >
            {/* Cake Graphic Container */}
            <div className="relative max-w-xs mx-auto flex flex-col items-center">
              {/* Candles */}
              <div className="flex justify-center items-end gap-6 mb-1 relative z-20">
                {[1, 2, 3].map((candleIndex) => (
                  <div key={candleIndex} className="flex flex-col items-center relative">
                    {!candlesBlown ? (
                      <motion.div
                        animate={{ scale: [1, 1.15, 0.95, 1], rotate: [-2, 2, -1, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-6 bg-gradient-to-t from-amber-500 via-amber-300 to-white rounded-full flame-animation shadow-lg shadow-amber-400 cursor-pointer"
                        onClick={handleBlowCandles}
                        title="Click to blow out!"
                      />
                    ) : (
                      <motion.div
                        initial={{ opacity: 1, y: 0, scale: 0.5 }}
                        animate={{ opacity: 0, y: -25, scale: 1.5 }}
                        transition={{ duration: 1.2 }}
                        className="w-4 h-6 text-gray-400 font-sans text-xs flex justify-center"
                      >
                        💨
                      </motion.div>
                    )}
                    <div className="w-0.5 h-3 bg-neutral-700" />
                    <div className="w-3 h-14 bg-gradient-to-b from-sky-200 via-sky-300 to-sky-400 rounded-t-xs shadow-md border border-sky-200/40" />
                  </div>
                ))}
              </div>

              {/* 3-Tier Light Blue Cake */}
              <div className="w-full flex flex-col items-center shadow-2xl shadow-sky-950/80">
                {/* Top Tier */}
                <div className="w-36 h-12 bg-gradient-to-r from-sky-200 via-blue-100 to-sky-200 rounded-t-2xl border-b-2 border-sky-300/60 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-x-0 top-0 h-3 bg-white/70 rounded-t-2xl" />
                  <span className="text-xs font-handwritten text-sky-800 text-lg">Make a Wish</span>
                </div>
                {/* Middle Tier */}
                <div className="w-52 h-14 bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 rounded-t-lg border-b-2 border-sky-700 relative overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-x-0 top-0 h-3 bg-sky-200/40" />
                  <span className="text-xs font-serif tracking-widest text-sky-100 uppercase">With All My Heart</span>
                </div>
                {/* Bottom Tier */}
                <div className="w-68 h-16 bg-gradient-to-r from-[#003161] via-[#0284C7] to-[#003161] rounded-b-2xl border-t border-sky-400/40 relative flex items-center justify-center">
                  <div className="absolute inset-x-0 top-0 h-3 bg-sky-300/30" />
                  <div className="flex gap-2">
                    <Heart className="w-4 h-4 fill-sky-200 text-sky-200" />
                    <Heart className="w-4 h-4 fill-sky-200 text-sky-200" />
                    <Heart className="w-4 h-4 fill-sky-200 text-sky-200" />
                  </div>
                </div>
              </div>
            </div>

            {!candlesBlown ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-lg font-serif text-sky-200 italic">
                  The candles are burning brightly... 🕯️
                </p>

                <button
                  onClick={handleBlowCandles}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-sans font-medium rounded-full backdrop-blur-xs transition-all duration-300 border border-white/20 cursor-pointer shadow-md"
                >
                  Blow Out The Candles 🌬️✨
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 pt-4"
              >
                <motion.h3
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="text-4xl md:text-5xl font-serif font-bold text-sky-100 tracking-tight"
                >
                  {wishMadeTitle}
                </motion.h3>

                <p className="text-xl md:text-2xl font-handwritten text-sky-200">
                  "{wishMadeSubtitle}"
                </p>

                <div className="pt-2">
                  <button
                    onClick={triggerConfetti}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-sky-900/60 text-sky-200 text-sm hover:bg-sky-800/80 transition-colors border border-sky-700 cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" />
                    <span>Celebrate again 🎉</span>
                  </button>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
