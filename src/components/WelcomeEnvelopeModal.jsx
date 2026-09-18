import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WelcomeEnvelopeModal({ onStartExperience }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenedFully, setIsOpenedFully] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpen) return;
    setIsOpen(true);

    setTimeout(() => {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38BDF8', '#0284C7', '#BAE6FD', '#FFFFFF', '#D4AF37']
      });
      setIsOpenedFully(true);
    }, 600);
  };

  const handleEnterSite = () => {
    setIsEntering(true);
    setTimeout(() => {
      onStartExperience();
    }, 600);
  };

  return (
    <AnimatePresence>
      {!isEntering && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gradient-to-b from-[#0B192C] via-[#003161] to-[#0B192C] text-white overflow-hidden select-none"
        >
          {/* Subtle Background Stars / Particles */}
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

          {/* Floating subtle ambient hearts */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-10 text-sky-300/40 text-3xl pointer-events-none"
          >
            🩵
          </motion.div>
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-16 right-12 text-sky-300/40 text-4xl pointer-events-none"
          >
            ✨
          </motion.div>

          <div className="relative max-w-lg w-full text-center flex flex-col items-center">
            {/* Top Intro Tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/80 text-sky-200 text-sm font-handwritten border border-sky-700/60 mb-8"
            >
              <Sparkles className="w-4 h-4 text-sky-400 animate-spin" style={{ animationDuration: '6s' }} />
              <span>A Birthday Gift Waiting For You</span>
              <Heart className="w-3.5 h-3.5 fill-sky-400 text-sky-400 inline" />
            </motion.div>

            {/* 3D Interactive Envelope Component */}
            <div className="w-full max-w-sm relative perspective-1000 my-4">
              {!isOpenedFully ? (
                /* CLOSED ENVELOPE STATE */
                <motion.div
                  onClick={handleOpenEnvelope}
                  whileHover={{ scale: 1.04, rotate: 1 }}
                  whileTap={{ scale: 0.96 }}
                  className="relative w-full aspect-4/3 bg-gradient-to-br from-[#0284C7] via-[#0369A1] to-[#0C4A6E] rounded-3xl p-6 shadow-2xl shadow-sky-950/80 cursor-pointer border border-sky-400/40 overflow-hidden flex flex-col items-center justify-center group"
                >
                  {/* Envelope Top Flap Triangle */}
                  <motion.div
                    animate={isOpen ? { rotateX: 180 } : { rotateX: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ transformOrigin: "top" }}
                    className="absolute top-0 left-0 right-0 h-32 bg-sky-300/20 border-b border-sky-200/30 [clip-path:polygon(0_0,50%_80%,100%_0)] z-20"
                  />

                  {/* Envelope Pocket Shadows */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Wax Seal Center Badge */}
                  <div className="relative z-30 flex flex-col items-center justify-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-400 to-blue-200 flex items-center justify-center shadow-xl shadow-sky-950/90 ring-4 ring-sky-300/50 group-hover:ring-sky-200 transition-all"
                    >
                      <Heart className="w-8 h-8 fill-white text-white" />
                    </motion.div>

                    <div className="space-y-1">
                      <p className="font-serif text-2xl font-bold tracking-wide text-white drop-shadow-md">
                        Teruntuk lelaki kebanggaanku 🩵
                      </p>
                      <p className="text-xs font-sans text-sky-200/90 tracking-widest uppercase flex items-center justify-center gap-1">
                        <span>Tap to open your surprise</span>
                        <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                /* OPENED WELCOME CARD STATE */
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.7, type: "spring", damping: 20 }}
                  className="w-full bg-[#F0F7FF] text-[#0F172A] rounded-3xl p-8 shadow-2xl shadow-sky-950/90 border border-sky-200 relative text-center space-y-6"
                >
                  <div className="w-12 h-12 mx-auto rounded-full bg-sky-100 flex items-center justify-center text-[#0284C7]">
                    <Sparkles className="w-6 h-6 text-sky-500" />
                  </div>

                  <div>
                    <h2 className="text-3xl font-serif font-bold text-[#0C4A6E] mb-2">
                      Selamat bertambah usia, Sayang!  🩵
                    </h2>
                    <p className="text-base text-[#0284C7] font-sans font-light leading-relaxed">
                      Jarak mungkin membuat kita tak bisa merayakan hari ini berdampingan, tapi kau terlalu berharga untuk tidak dirayakan.
                    </p>
                  </div>

                  <div className="pt-2">
                    <motion.button
                      onClick={handleEnterSite}
                      whileHover={{ scale: 1.05, boxShadow: "0 8px 25px -5px rgba(2, 132, 199, 0.5)" }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-gradient-to-r from-[#0284C7] via-[#0369A1] to-[#0C4A6E] text-white font-sans font-semibold text-lg rounded-full shadow-lg shadow-sky-900/30 cursor-pointer"
                    >
                      <span>Open Your Story ✨</span>
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Subtitle Note */}
            {!isOpenedFully && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-xs text-sky-300/70 font-sans tracking-wide"
              >
                Made with love, just for you.
              </motion.p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
