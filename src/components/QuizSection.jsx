import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, HelpCircle, Trophy, RefreshCw, ArrowRight, CheckCircle2, Award } from 'lucide-react';
import { contentData } from '../data/content';

export default function QuizSection() {
  const quiz = contentData.quiz;
  const questions = quiz.questions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [activeReaction, setActiveReaction] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const triggerMiniConfetti = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#38BDF8', '#0284C7', '#F472B6', '#E0F2FE']
    });
  };

  const triggerBigConfetti = () => {
    const duration = 2.5 * 1000;
    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#38BDF8', '#0284C7', '#F472B6', '#FBBF24', '#34D399']
      });
    }, 250);
  };

  const handleSelectOption = (option) => {
    triggerMiniConfetti();
    setActiveReaction({
      optionText: option.text,
      reactionText: option.reaction
    });

    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    setActiveReaction(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsCompleted(true);
      triggerBigConfetti();
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setActiveReaction(null);
    setIsCompleted(false);
  };

  const handleScrollToLetter = () => {
    const letterSection = document.getElementById('letter-section');
    if (letterSection) {
      letterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentQ = questions[currentIndex];

  return (
    <section id="quiz-section" className="py-24 px-6 bg-[#F0F7FF] text-[#0F172A] relative overflow-hidden border-b border-sky-100">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-pink-200/30 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/90 text-[#0284C7] text-sm font-handwritten mb-3 border border-sky-200 shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-sky-500" />
            <span>{quiz.badge}</span>
            <Sparkles className="w-4 h-4 text-amber-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0C4A6E] tracking-tight mb-4"
          >
            {quiz.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#0369A1]/80 text-base sm:text-lg font-light max-w-xl mx-auto"
          >
            {quiz.subtitle}
          </motion.p>
        </div>

        {/* Main Quiz Card Area */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md border border-sky-100 rounded-3xl p-6 sm:p-10 shadow-xl shadow-sky-900/5 relative"
        >
          {!isCompleted ? (
            <div>
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs sm:text-sm font-medium text-sky-700 mb-2">
                  <span className="flex items-center gap-1.5 font-handwritten text-base">
                    <Sparkles className="w-4 h-4 text-sky-500" />
                    Pertanyaan {currentIndex + 1} dari {questions.length}
                  </span>
                  <span className="bg-sky-100 text-sky-700 px-3 py-0.5 rounded-full text-xs font-bold">
                    {Math.round(((currentIndex + 1) / questions.length) * 100)}% Complete
                  </span>
                </div>
                <div className="w-full h-2.5 bg-sky-100 rounded-full overflow-hidden p-0.5">
                  <motion.div
                    className="h-full bg-gradient-to-r from-sky-400 to-[#0284C7] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>

              {/* Question & Options */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0C4A6E] mb-6 leading-relaxed">
                    {currentQ.question}
                  </h3>

                  <div className="grid grid-cols-1 gap-3.5 sm:gap-4 mb-6">
                    {currentQ.options.map((option, idx) => {
                      const isSelected = selectedAnswers[currentIndex]?.label === option.label;
                      return (
                        <motion.button
                          key={idx}
                          whileHover={{ scale: 1.01, x: 4 }}
                          whileTap={{ scale: 0.99 }}
                          onClick={() => handleSelectOption(option)}
                          className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                            isSelected
                              ? 'bg-gradient-to-r from-sky-500 to-[#0284C7] text-white border-transparent shadow-md shadow-sky-500/20'
                              : 'bg-white hover:bg-sky-50/80 border-sky-100 text-[#0C4A6E] shadow-sm'
                          }`}
                        >
                          <div className="flex items-center gap-3.5">
                            <span
                              className={`w-8 h-8 rounded-xl font-bold flex items-center justify-center text-sm transition-colors ${
                                isSelected
                                  ? 'bg-white/20 text-white'
                                  : 'bg-sky-100 text-sky-600 group-hover:bg-sky-200'
                              }`}
                            >
                              {option.label}
                            </span>
                            <span className="text-base sm:text-lg font-medium pr-2">{option.text}</span>
                          </div>
                          {isSelected && (
                            <CheckCircle2 className="w-5 h-5 text-white shrink-0 ml-2 animate-bounce" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Cute Modal/Reaction Popover */}
              <AnimatePresence>
                {activeReaction && (
                  <motion.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="p-5 rounded-2xl bg-gradient-to-r from-sky-50 to-pink-50 border border-sky-200 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2.5 bg-white rounded-xl text-sky-500 shadow-sm shrink-0 mt-0.5">
                        <Heart className="w-5 h-5 fill-sky-500 text-sky-500" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-sky-600 uppercase tracking-wider mb-0.5">Reaksi Kasih Sayang:</p>
                        <p className="text-base font-serif font-bold text-[#0C4A6E]">
                          "{activeReaction.reactionText}"
                        </p>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleNext}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-medium flex items-center justify-center gap-2 shadow-md shadow-sky-600/20 text-sm whitespace-nowrap"
                    >
                      <span>{currentIndex < questions.length - 1 ? 'Lanjut Pertanyaan' : 'Lihat Hasil Kuis ✨'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            /* Results Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-4"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-handwritten mb-4 border border-amber-200 shadow-sm">
                <Award className="w-4 h-4 text-amber-500" />
                <span>{quiz.result.badge}</span>
              </div>

              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-tr from-sky-400 to-pink-400 rounded-3xl mx-auto flex items-center justify-center text-white shadow-lg shadow-sky-500/30 mb-6"
              >
                <Trophy className="w-10 h-10 text-amber-200" />
              </motion.div>

              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0C4A6E] mb-2">
                {quiz.result.title}
              </h3>
              <p className="text-sky-600 font-semibold text-sm sm:text-base mb-4">
                {quiz.result.subtitle}
              </p>

              <div className="bg-sky-50/80 border border-sky-100 rounded-2xl p-5 mb-8 max-w-lg mx-auto">
                <p className="text-[#0369A1] font-serif text-lg leading-relaxed mb-3">
                  "{quiz.result.description}"
                </p>
                <p className="text-xs text-sky-500 font-sans">
                  {quiz.result.footerMessage}
                </p>
              </div>

              {/* Answers Summary */}
              <div className="mb-8 text-left max-w-lg mx-auto bg-white border border-sky-100 rounded-2xl p-4 shadow-sm">
                <p className="text-xs font-bold text-sky-500 uppercase tracking-wider mb-3 px-1">Ringkasan Jawaban Kamu:</p>
                <div className="space-y-2">
                  {questions.map((q, idx) => (
                    <div key={q.id} className="text-xs sm:text-sm text-slate-700 flex items-start gap-2">
                      <span className="font-bold text-sky-600 shrink-0">#{idx + 1}</span>
                      <span className="text-slate-600 line-clamp-1 flex-1">{q.question}</span>
                      <span className="font-bold text-[#0284C7] shrink-0">
                        {selectedAnswers[idx]?.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-2xl border border-sky-200 bg-white hover:bg-sky-50 text-[#0284C7] font-medium flex items-center justify-center gap-2 shadow-sm text-sm"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Main Lagi 🔄</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleScrollToLetter}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-[#0284C7] hover:from-sky-600 hover:to-[#0369A1] text-white font-medium flex items-center justify-center gap-2 shadow-lg shadow-sky-600/20 text-sm"
                >
                  <span>Lanjut Baca Surat Cinta 💌</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
