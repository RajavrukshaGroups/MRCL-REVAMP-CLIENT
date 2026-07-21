import React from 'react';
import { motion } from 'motion/react';
import FounderPortraitImg from '../../assets/images/founder_portrait_1784185299375.png';

export default function FounderProfile() {
  return (
    <section className="py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Portrait & Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative group p-4 border border-gold-400/25 rounded-2xl bg-[#140204]/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-sm sm:max-w-md w-full"
            >
              {/* Thin internal gold line card border */}
              <div className="absolute inset-2 border border-gold-400/10 rounded-xl pointer-events-none" />
              
              {/* Photo container with dual border */}
              <div className="relative border border-gold-500/35 p-1 rounded-xl bg-black overflow-hidden aspect-[3/4]">
                <img
                  src={FounderPortraitImg}
                  alt="Mohan Kumar S R, Founder of MRCL Infrastructure"
                  className="w-full h-full object-cover object-top rounded-lg transition-transform duration-700 group-hover:scale-[1.03]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Elegant Golden-Red Gradient Tag at bottom of photo */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[85%] bg-gradient-to-r from-[#180205]/95 via-[#2d070b]/95 to-[#180205]/95 border-t border-b border-gold-400/40 py-3.5 px-4 text-center rounded-lg shadow-2xl backdrop-blur-md">
                  <h3 className="font-serif text-base sm:text-lg font-bold tracking-[0.12em] text-gold-300">
                    MOHAN KUMAR S R
                  </h3>
                  <p className="font-sans text-[10px] tracking-[0.25em] text-gold-400 uppercase mt-0.5 font-bold">
                    FOUNDER
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Diamond and Line Motif Under the Portrait */}
            <div className="flex items-center justify-center gap-2.5 mt-8 w-full max-w-xs">
              <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold-400/45" />
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rotate-45 border border-gold-400/40 bg-transparent" />
                <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-md" />
                <div className="w-1.5 h-1.5 rotate-45 border border-gold-400/40 bg-transparent" />
              </div>
              <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold-400/45" />
            </div>
          </div>

          {/* Right Column: Founder Details */}
          <div className="lg:col-span-7 space-y-10 self-center">
            
            {/* Section 1 */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-400 uppercase block">
                  REDEFINING REAL ESTATE
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold tracking-wide text-white leading-tight">
                  WITH VISION & EXCELLENCE
                </h2>
              </div>
              {/* Accent thin line */}
              <div className="h-[1.5px] w-14 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent" />
              <p className="text-stone-300 font-sans font-light text-[15px] leading-relaxed tracking-wide">
                In the ever-evolving world of real estate, true success belongs to visionaries—those who anticipate trends, embrace innovation, and create developments that redefine urban landscapes. A real estate pioneer is more than just a builder; they are a changemaker, shaping cities and communities that stand the test of time. They don't just construct buildings—they craft lifestyles, transform cityscapes, and leave behind a legacy of progress and innovation.
              </p>
            </div>

            {/* Section 2 */}
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-gold-400 uppercase block">
                  MOHAN KUMAR S R – A NAME
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-wide text-white leading-tight">
                  SYNONYMOUS WITH TRUST & EXCELLENCE
                </h2>
              </div>
              {/* Accent thin line */}
              <div className="h-[1.5px] w-14 bg-gradient-to-r from-gold-500 via-gold-400 to-transparent" />
              <p className="text-stone-300 font-sans font-light text-[15px] leading-relaxed tracking-wide">
                With over 13 years of expertise in real estate development, Mohan Kumar S R has built a reputation for delivering high-quality, well-designed, and durable projects. His strong focus on client satisfaction, innovative architecture, and modern home technologies has set new benchmarks in the industry.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
