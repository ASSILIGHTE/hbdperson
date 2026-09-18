import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, ZoomIn, Camera } from 'lucide-react';
import { contentData } from '../data/content';
import LightboxModal from './LightboxModal';

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const photos = contentData.photos;

  const mainPhoto = photos[0];
  const otherPhotos = photos.slice(1);

  return (
    <section className="py-24 px-4 md:px-8 bg-[#E0F2FE]/40 text-[#0F172A] relative overflow-hidden paper-texture">
      {/* Background Subtle Blobs */}
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/80 text-[#0284C7] text-sm font-handwritten mb-3 shadow-xs border border-sky-100"
          >
            <Camera className="w-4 h-4 text-sky-500" />
            <span>Memories Captured</span>
            <Heart className="w-3.5 h-3.5 fill-sky-500 text-sky-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#0C4A6E] tracking-tight mb-4"
          >
            Moments I Hold Close
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-[#0284C7]/80 font-sans font-light"
          >
            Semua yang ada kamunya sangat berharga, but this is a very tiny collection of my favorite memories of and with you. Wajib klik tiap foto 😗
          </motion.p>
        </div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-12 gap-6 items-center my-8">
          {/* Main Featured Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="col-span-5 relative group cursor-pointer"
            onClick={() => setSelectedPhoto(mainPhoto)}
          >
            <div className="bg-white p-4 pb-6 rounded-2xl shadow-xl shadow-sky-900/10 border border-sky-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500 group-hover:shadow-2xl">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-sky-100/90 border border-sky-200/70 rounded-xs shadow-xs rotate-2 z-20 pointer-events-none" />

              <div className="relative overflow-hidden rounded-xl bg-neutral-100 aspect-4/5">
                <img
                  src={mainPhoto.url}
                  alt={mainPhoto.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="p-3 bg-white/90 rounded-full text-[#0284C7] shadow-lg">
                    <ZoomIn className="w-6 h-6" />
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="font-handwritten text-2xl text-[#0284C7] font-medium">
                  {mainPhoto.caption}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Surrounding 4 Photos */}
          <div className="col-span-7 grid grid-cols-2 gap-6">
            {otherPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className={`bg-white p-3.5 pb-5 rounded-2xl shadow-lg shadow-sky-900/5 border border-sky-100 transform ${photo.rotation} hover:rotate-0 transition-transform duration-500 group-hover:shadow-xl`}>
                  <div className="absolute -top-2.5 left-1/3 -translate-x-1/2 w-20 h-6 bg-sky-100/80 border border-sky-200/60 rounded-xs -rotate-3 z-20 pointer-events-none" />

                  <div className="relative overflow-hidden rounded-xl bg-neutral-100 aspect-4/3">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="p-2.5 bg-white/90 rounded-full text-[#0284C7] shadow-md">
                        <ZoomIn className="w-5 h-5" />
                      </span>
                    </div>
                  </div>

                  <div className="mt-3 text-center">
                    <p className="font-handwritten text-xl text-[#0284C7]">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden space-y-8 my-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              onClick={() => setSelectedPhoto(photo)}
              className="bg-white p-4 pb-6 rounded-2xl shadow-xl shadow-sky-900/10 border border-sky-100 relative group cursor-pointer"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-sky-100/90 border border-sky-200/60 rounded-xs shadow-xs rotate-1 z-20 pointer-events-none" />

              <div className="relative overflow-hidden rounded-xl bg-neutral-100 aspect-4/5 w-full">
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs p-2 rounded-full text-[#0284C7] shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="font-handwritten text-2xl text-[#0284C7] font-medium">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <LightboxModal photo={selectedPhoto} onClose={() => setSelectedPhoto(null)} />
    </section>
  );
}
