import React from 'react';
import { motion } from 'motion/react';

export default function FounderCTA() {
  return (
    <>
      {/* 4. TRANSITION / ACCENT MIDDLE SECTION */}
      <section className="py-20 relative px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 border-l-[3px] border-gold-400 pl-6 lg:pl-8 py-2">
              <p className="text-stone-200 font-sans font-light text-base sm:text-lg leading-relaxed tracking-wide">
                From residential and commercial spaces to large-scale industrial developments, Mohan Kumar S R has consistently delivered projects that are aesthetically stunning, structurally sound, and built to last. His unwavering commitment to excellence and innovation continues to shape the future of real estate, setting new standards in the industry.
              </p>
            </div>

            {/* Right Illustration Column */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end overflow-hidden h-36">
              <svg className="w-full max-w-[280px] h-full text-gold-400/20" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="0.8">
                {/* Skyline wireframe illustration */}
                <path d="M 160,120 V 50 L 168,42 L 176,50 V 120" />
                <path d="M 168,42 V 32 M 168,32 L 168,26" />
                <line x1="164" y1="60" x2="164" y2="110" strokeDasharray="1 2" />
                <line x1="172" y1="60" x2="172" y2="110" strokeDasharray="1 2" />

                <path d="M 120,120 V 40 L 128,30 L 136,40 V 120" />
                <line x1="128" y1="30" x2="128" y2="10" strokeWidth="1" />
                <circle cx="128" cy="10" r="1" fill="currentColor" />
                <line x1="124" y1="50" x2="124" y2="110" strokeDasharray="1 3" />
                <line x1="128" y1="50" x2="128" y2="110" strokeDasharray="1 3" />
                <line x1="132" y1="50" x2="132" y2="110" strokeDasharray="1 3" />

                <path d="M 85,120 V 70 H 91 V 65 H 97 V 70 H 103 V 120" />
                <path d="M 94,65 V 58 L 94,52" />
                <line x1="89" y1="78" x2="89" y2="115" strokeDasharray="2 2" />
                <line x1="94" y1="78" x2="94" y2="115" strokeDasharray="2 2" />
                <line x1="99" y1="78" x2="99" y2="115" strokeDasharray="2 2" />

                <path d="M 50,120 V 90 H 62 V 120" />
                <path d="M 66,120 V 85 H 78 V 120" />
                <line x1="56" y1="96" x2="56" y2="115" strokeDasharray="1 1" />
                <line x1="72" y1="92" x2="72" y2="115" strokeDasharray="1 1" />

                <path d="M 185,120 V 80 H 198 V 120" />
                <line x1="191" y1="86" x2="191" y2="115" strokeDasharray="1 2" />
                <line x1="10" y1="120" x2="198" y2="120" strokeWidth="1.2" />
              </svg>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION FOOTER BANNER */}
      <section className="py-12 bg-gradient-to-r from-[#100102] via-[#1c0205] to-[#100102] border-t border-gold-400/25 relative px-4 sm:px-6 lg:px-8">
        {/* Soft background ambiance */}
        <div className="absolute -top-16 left-1/4 w-80 h-80 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Quote Block (8 columns) */}
            <div className="lg:col-span-8 flex items-start gap-4">
              <span className="font-serif text-7xl text-gold-400/30 font-bold leading-none select-none">
                “
              </span>
              <div className="space-y-3.5">
                <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-light tracking-[0.16em] text-gold-200 uppercase leading-snug">
                  BUILDING MORE THAN JUST STRUCTURES—<br />
                  <span className="font-semibold text-gold-400">CREATING LEGACIES THAT INSPIRE GENERATIONS.</span>
                </h2>
                
                {/* Deluxe Gold Motif Line */}
                <div className="flex items-center gap-3 max-w-xs">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-gold-400/50 to-transparent" />
                  <div className="flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/60" />
                    <div className="w-2 h-2 rotate-45 bg-gold-500" />
                    <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/60" />
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Block (4 columns) */}
            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="flex flex-col items-center lg:items-end text-center lg:text-right group">
                {/* Styled architectural gold outline logo */}
               
                <span className="font-serif text-3xl font-extrabold tracking-widest text-gold-300 leading-none group-hover:text-gold-200 transition-colors">
                  MRCL
                </span>
                <span className="font-sans text-[9px] tracking-[0.35em] text-gold-400/80 uppercase mt-1.5 font-bold">
                  INFRASTRUCTURE
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
