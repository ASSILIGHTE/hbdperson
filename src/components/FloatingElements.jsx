import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingElements() {
  const [clickHearts, setClickHearts] = useState([]);

  // Handle click anywhere on page to produce a small floating blue heart
  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now() + Math.random();
      const newHeart = {
        id,
        x: e.clientX,
        y: e.clientY,
        size: Math.floor(Math.random() * 16) + 14,
        rotation: Math.floor(Math.random() * 60) - 30,
        symbol: ['🩵', '💙', '✨', '☁️', '🤍'][Math.floor(Math.random() * 5)]
      };

      setClickHearts((prev) => [...prev.slice(-12), newHeart]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  // Ambient floating background hearts & clouds
  const ambientHearts = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: `${(i * 8.5 + 4) % 95}%`,
    duration: 12 + (i % 5) * 3,
    delay: (i % 4) * 2,
    size: 14 + (i % 3) * 6,
    symbol: i % 3 === 0 ? '✨' : i % 2 === 0 ? '🩵' : '💙'
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden">
      {/* Background ambient floating elements */}
      {ambientHearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-sky-400/20 select-none opacity-40"
          style={{
            left: heart.left,
            fontSize: `${heart.size}px`,
            bottom: '-40px'
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: ['0px', heart.id % 2 === 0 ? '25px' : '-25px', '0px'],
            opacity: [0, 0.4, 0.6, 0.2, 0],
            rotate: [0, 15, -15, 0]
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear'
          }}
        >
          {heart.symbol}
        </motion.div>
      ))}

      {/* Interactive tap floating hearts */}
      <AnimatePresence>
        {clickHearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 1, scale: 0.5, x: heart.x - 12, y: heart.y - 12 }}
            animate={{
              opacity: 0,
              scale: 1.4,
              y: heart.y - 100,
              x: heart.x + (Math.random() * 40 - 20)
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="fixed select-none text-sky-500 font-bold z-50 pointer-events-none drop-shadow-md"
            style={{ fontSize: `${heart.size}px` }}
          >
            {heart.symbol}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
