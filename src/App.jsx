import React, { useState } from 'react';
import WelcomeEnvelopeModal from './components/WelcomeEnvelopeModal';
import FloatingElements from './components/FloatingElements';
import AudioPlayer from './components/AudioPlayer';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import PhotoGallery from './components/PhotoGallery';
import ReasonsSection from './components/ReasonsSection';
import QuizSection from './components/QuizSection';
import LetterSection from './components/LetterSection';
import CakeSurpriseSection from './components/CakeSurpriseSection';
import FinalFooterSection from './components/FinalFooterSection';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleStartExperience = () => {
    setShowWelcome(false);
  };

  const handleOpenSurprise = () => {
    const storySection = document.getElementById('story-section');
    if (storySection) {
      storySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#F0F7FF] text-[#0F172A] font-sans selection:bg-[#E0F2FE] selection:text-[#0284C7]">
      {/* Welcome Envelope Modal Intro Screen */}
      {showWelcome && (
        <WelcomeEnvelopeModal onStartExperience={handleStartExperience} />
      )}

      {/* Interactive & Ambient Floating Hearts / Sparkles */}
      <FloatingElements />

      {/* Background Audio Player Toggle */}
      <AudioPlayer />

      {/* Main Layout Sections */}
      <main>
        {/* Section 1: HERO */}
        <HeroSection onOpenSurprise={handleOpenSurprise} />

        {/* Section 2: OUR LITTLE STORY */}
        <StorySection />

        {/* Section 3: 5 FOTO KENANGAN GALLERY & LIGHTBOX */}
        <PhotoGallery />

        {/* Section 4: 5 REASONS */}
        <ReasonsSection />

        {/* Section 5: FUN BIRTHDAY QUIZ */}
        <QuizSection />

        {/* Section 6: A LITTLE LETTER */}
        <LetterSection />

        {/* Section 7: BIRTHDAY SURPRISE (CAKE, CANDLES & CONFETTI) */}
        <CakeSurpriseSection />

        {/* Section 8: FINAL CLOSING & FOOTER */}
        <FinalFooterSection />
      </main>
    </div>
  );
}
