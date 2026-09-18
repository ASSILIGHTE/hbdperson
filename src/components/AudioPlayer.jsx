import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setHasInteracted(true);
      }).catch((err) => {
        console.log("Audio play error:", err);
      });
    }
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasInteracted(true);
        }).catch(() => { });
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [hasInteracted]);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      <motion.button
        onClick={toggleAudio}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full shadow-xl backdrop-blur-md border border-sky-200/80 transition-all duration-300 cursor-pointer ${isPlaying
          ? 'bg-[#0284C7] text-white shadow-sky-900/30 ring-2 ring-sky-300/40'
          : 'bg-white/95 text-[#0C4A6E] hover:bg-sky-50 shadow-sky-900/10'
          }`}
        title={isPlaying ? 'Pause Music' : 'Play Music - Backstreet Boys: Shape of My Heart'}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-4 w-4">
              <span className="w-1 bg-sky-200 animate-[bounce_0.8s_infinite_100ms] rounded-full h-full"></span>
              <span className="w-1 bg-sky-200 animate-[bounce_0.8s_infinite_300ms] rounded-full h-2/3"></span>
              <span className="w-1 bg-sky-200 animate-[bounce_0.8s_infinite_200ms] rounded-full h-4/5"></span>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-sans font-semibold tracking-wide flex items-center gap-1">
                you! <Heart className="w-3 h-3 fill-sky-200 text-sky-200 inline" />
              </span>
              <span className="text-[10px] text-sky-100 font-sans opacity-80">lany</span>
            </div>
          </>
        ) : (
          <>
            <div className="p-1 rounded-full bg-sky-100 text-sky-600">
              <Music className="w-4 h-4" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs font-sans font-semibold tracking-wide">Play Song 🎵</span>
              <span className="text-[10px] text-sky-700/70 font-sans">you!</span>
            </div>
          </>
        )}
      </motion.button>
    </div>
  );
}
