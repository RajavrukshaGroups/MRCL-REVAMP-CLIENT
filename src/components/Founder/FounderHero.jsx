import React from 'react';
import { motion } from 'motion/react';
import FounderHeroBgImg from '../../assets/images/founder_hero_bg_1784185316871.jpg';
import FounderBgImg from '../../assets/images/founder-bg-img.png';

export default function FounderHero() {
  return (
    <section className="relative w-full h-[450px] lg:h-[520px] overflow-hidden bg-[#180205] border-b border-gold-500/10">
      
      {/* Background Decorative Grid */}
      <img src={FounderBgImg} alt="Founder Background Image" className="w-full h-[80%] object-cover object-center filter brightness-[0.85] contrast-[1.05] hidden lg:block" />

      {/* Left side content panel */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[50%] z-30 flex flex-col  px-6 py-12 sm:px-12 lg:pl-20 lg:pr-12">
        <div className="max-w-xl space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-1.5 "
          >
            <h1 className="font-serif text-5xl md:text-6xl font-bold tracking-[0.06em] text-gold-400 uppercase drop-shadow-md ">
              FOUNDER
            </h1>
            <h2 className="font-sans text-xs md:text-sm font-bold tracking-[0.3em] text-stone-300 uppercase">
              VISIONARY. LEADER. PIONEER.
            </h2>
          </motion.div>

          {/* Premium Gold Divider with Diamond Emblem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 py-1"
          >
            <div className="h-[1px] w-14 bg-gradient-to-r from-transparent via-gold-400 to-gold-400" />
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rotate-45 border border-gold-400 bg-gold-400/20" />
              <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold-400 bg-gold-400/20" />
            </div>
            <div className="h-[1px] w-14 bg-gradient-to-l from-transparent via-gold-400 to-gold-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3"
          >
            <p className="text-gold-200 font-serif text-lg md:text-xl font-medium tracking-wide italic leading-relaxed">
              "Leading with vision. Building with trust.<br />
              Creating a better tomorrow."
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
