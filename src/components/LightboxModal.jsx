import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';

export default function LightboxModal({ photo, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!photo) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/85 backdrop-blur-md cursor-pointer overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 z-50 cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-6 h-6" />
        </button>

        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-2xl w-full bg-white rounded-2xl p-4 md:p-6 shadow-2xl shadow-black/50 cursor-default"
        >
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-sky-100/90 border border-sky-200/60 shadow-xs rotate-1 pointer-events-none rounded-xs" />

          <div className="relative overflow-hidden rounded-xl bg-neutral-900 aspect-4/5 max-h-[70vh] flex items-center justify-center">
            <img
              src={photo.url}
              alt={photo.caption}
              className="w-full h-full object-contain md:object-cover rounded-lg"
            />
          </div>

          <div className="mt-5 text-center px-2">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Heart className="w-5 h-5 fill-sky-500 text-sky-500 inline" />
              <h3 className="text-2xl md:text-3xl font-serif text-[#0C4A6E] font-semibold">
                {photo.caption}
              </h3>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs md:text-sm text-gray-500 font-sans mt-2">
              {photo.date && (
                <span>
                  {photo.date}
                </span>
              )}
              {photo.location && (
                <>
                  <span>•</span>
                  <span>
                    {photo.location}
                  </span>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
