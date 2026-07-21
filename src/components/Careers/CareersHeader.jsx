import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function CareersHeader() {
  return (
    <section className="relative w-full h-[360px] sm:h-[420px] lg:h-[480px] bg-gradient-to-b from-[#140103] via-[#35040a] to-[#120002] overflow-hidden border-b border-gold-500/10">
      
      {/* Dynamic Gold Particles in the Background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#b5802f_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none z-0" />
      
      {/* Background radial gradient glow for skyscraper silhouette */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[65%] bg-[radial-gradient(circle_at_bottom_right,rgba(181,128,47,0.18)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* Skyscraper & People Silhouette illustration on the right */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-[60%] opacity-40 lg:opacity-75 z-0 pointer-events-none flex items-end justify-end select-none">
        <svg className="w-full max-w-[650px] h-full text-gold-400/25" viewBox="0 0 500 320" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          {/* Detailed skyline silhouette */}
          <path d="M 280,320 V 160 H 295 V 320" fill="#090001" opacity="0.3" />
          <path d="M 300,320 V 130 H 320 V 320" fill="#0c0002" opacity="0.4" />
          <path d="M 325,320 V 90 L 335,78 L 345,90 V 320" fill="#0d0002" opacity="0.5" />
          <path d="M 350,320 V 150 H 375 V 320" fill="#0e0002" opacity="0.6" />
          <path d="M 380,320 V 60 H 405 V 320" fill="#0f0003" opacity="0.7" />
          {/* Tallest tower on the right */}
          <path d="M 410,320 V 40 L 420,25 L 430,40 V 320" fill="#120004" opacity="0.85" />
          <line x1="420" y1="25" x2="420" y2="5" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />
          <circle cx="420" cy="5" r="1.5" fill="#d4b673" className="animate-pulse" />
          
          <path d="M 435,320 V 110 H 460 V 320" fill="#100003" opacity="0.7" />
          <path d="M 465,320 V 80 H 490 V 320" fill="#110003" opacity="0.8" />

          {/* Lit window details on the skyscrapers */}
          <g fill="#f2e9d3" opacity="0.15">
            <rect x="385" y="80" width="3" height="5" />
            <rect x="395" y="80" width="3" height="5" />
            <rect x="385" y="100" width="3" height="5" />
            <rect x="395" y="100" width="3" height="5" />
            <rect x="385" y="120" width="3" height="5" />
            <rect x="395" y="120" width="3" height="5" />
            
            <rect x="415" y="60" width="2" height="4" />
            <rect x="423" y="60" width="2" height="4" />
            <rect x="415" y="80" width="2" height="4" />
            <rect x="423" y="80" width="2" height="4" />
            <rect x="415" y="100" width="2" height="4" />
            <rect x="423" y="100" width="2" height="4" />
            <rect x="415" y="120" width="2" height="4" />
            <rect x="423" y="120" width="2" height="4" />
            <rect x="415" y="140" width="2" height="4" />
            <rect x="423" y="140" width="2" height="4" />
          </g>

          {/* Professional figures silhouettes standing/talking */}
          <g fill="#070001" opacity="0.85">
            {/* Person 1 - standing left side of group */}
            <path d="M 120,320 C 120,300 123,280 128,265 C 126,260 127,255 125,250 C 125,242 130,238 134,238 C 138,238 141,242 141,250 C 139,255 140,260 138,265 C 143,280 146,300 146,320 Z" />
            {/* Person 2 - leaning / gestured right */}
            <path d="M 160,320 C 158,302 161,285 166,270 C 164,264 165,258 163,253 C 162,244 167,240 171,240 C 175,240 178,244 178,253 C 176,258 177,264 175,270 C 180,285 183,302 181,320 Z" />
            {/* Person 3 - background figure */}
            <path d="M 85,320 C 85,305 87,290 91,278 C 89,274 90,270 88,266 C 88,260 92,256 95,256 C 98,256 100,260 100,266 C 99,270 99,274 98,278 C 102,290 104,305 104,320 Z" fill="#050001" opacity="0.6" />
            {/* Person 4 - right background figure */}
            <path d="M 210,320 C 209,303 211,288 215,275 C 213,270 214,265 212,261 C 212,255 216,251 220,251 C 224,251 227,255 227,261 C 225,270 226,270 224,275 C 228,288 230,303 229,320 Z" fill="#050001" opacity="0.6" />
          </g>
        </svg>
      </div>

      {/* Content wrapper with relative z-index */}
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between pt-24 pb-12">
        
        {/* Left text block */}
        <div className="w-full lg:w-[45%] text-left space-y-4 md:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-1 sm:space-y-2"
          >
            <span className="font-sans text-xs md:text-sm font-bold tracking-[0.25em] text-gold-400 uppercase block">
              BUILD YOUR FUTURE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              BUILD <span className="font-bold text-gold-300">LEGACIES</span><br />
              WITH US
            </h1>
          </motion.div>

          {/* Premium Gold Divider with Diamond Emblem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3 py-1"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2 h-2 rotate-45 border border-gold-400 bg-gold-500" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-1.5 text-stone-300 font-sans font-light text-sm sm:text-base max-w-md leading-relaxed"
          >
            <p>Great teams build great projects.</p>
            <p className="text-gold-200/90 font-medium">Be a part of something extraordinary.</p>
          </motion.div>
        </div>

        {/* Center: Large decorative CAREER title */}
        <div className="hidden lg:flex flex-col items-center justify-center text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl xl:text-6.5xl font-bold tracking-[0.3em] text-gold-400 uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] ml-[0.3em]"
          >
            CAREER
          </motion.h2>
          
          <div className="flex items-center justify-center gap-4 w-full mt-2">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400/80" />
            <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400/80" />
          </div>
        </div>

        {/* Right side: Architectural logo block matching picture */}
        <div className="hidden lg:flex flex-col items-center justify-end text-right h-full pb-6 z-10 self-end">
          <div className="flex flex-col items-center text-center group">
            {/* Beautiful gold outline logo */}
           
            <span className="font-serif text-3xl font-extrabold tracking-widest text-gold-300 leading-none">
              MRCL
            </span>
            <span className="font-sans text-[8px] tracking-[0.35em] text-gold-400/80 uppercase mt-1.5 font-bold">
              INFRASTRUCTURE
            </span>
          </div>
        </div>

      </div>

      {/* Decorative Golden Ribbon Swoop Underneath Header */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full z-10 pointer-events-none select-none">
        <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0,90 Q360,130 720,70 T1440,90 L1440,120 L0,120 Z" fill="#0a0001" />
          <path d="M0,90 Q360,130 720,70 T1440,90" fill="none" stroke="url(#headerSwoopGoldGradient)" strokeWidth="3.5" />
          <defs>
            <linearGradient id="headerSwoopGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#faf7f0" stopOpacity="0.2" />
              <stop offset="35%" stopColor="#d4b673" />
              <stop offset="65%" stopColor="#b5802f" />
              <stop offset="100%" stopColor="#7b4e1b" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </section>
  );
}
