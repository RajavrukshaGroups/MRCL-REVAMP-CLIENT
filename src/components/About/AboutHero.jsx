// import React from 'react';
// import { motion } from 'motion/react';
// import Herobanner from "../../assets/images/about-us-background-image.png";

// export default function AboutHero() {
//   return (
//     <section className="relative w-full h-[550px] lg:h-[650px] overflow-hidden bg-brand-red-950">
      
//       {/* Right side image - full cover background */}
//       <div className="absolute inset-0 z-0 hidden lg:block">
//         <img
//           src={Herobanner}
//           alt="MRCL Premium Luxury Real Estate Building"
//           className="w-full h-full object-cover object-center"
//           referrerPolicy="no-referrer"
//         />
//         {/* Subtle overlay to enhance readability */}
//         <div className="absolute inset-0 bg-neutral-900/10" />
//       </div>

//       {/* Left side content panel with diagonal clipping path on desktop */}
//       <div className="absolute inset-y-0 left-0 w-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:pl-20 lg:pr-16 [clip-path:none] lg:[clip-path:polygon(0_0,_100%_0,_80%_100%,_0_100%)]">
        
//         {/* Gold skyline illustration at bottom left of panel */}
//         <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-20 z-0 overflow-hidden">
//           <svg className="w-full h-full text-gold-400" viewBox="0 0 400 120" fill="none" stroke="currentColor" strokeWidth="0.8">
//             <path d="M 10,120 V 90 H 22 V 120 M 22,120 V 102 H 34 V 120 M 38,120 V 70 H 52 V 120 M 56,120 V 85 H 72 V 120 M 76,120 V 55 H 94 V 120 M 98,120 V 98 H 110 V 120 M 114,120 V 40 H 134 V 120 M 138,120 V 88 H 150 V 120 M 154,120 V 75 H 170 V 120 M 174,120 V 48 H 194 V 120 M 198,120 V 92 H 214 V 120 M 218,120 V 60 H 234 V 120 M 238,120 V 78 H 250 V 120 M 254,120 V 42 H 274 V 120 M 278,120 V 96 H 290 V 120 M 294,120 V 65 H 310 V 120 M 314,120 V 120" />
//             <path d="M 40,120 V 95 H 48 M 80,120 V 75 H 88 M 120,120 V 60 H 128 M 160,120 V 85 H 168 M 220,120 V 70 H 228 M 260,120 V 55 H 268" strokeDasharray="2 2" />
//           </svg>
//         </div>

//         <div className="relative z-10 -top-15 max-w-xl space-y-4">
//           <motion.div
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-1"
//           >
//             <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-widest text-gold-400">
//               ABOUT
//             </h2>
//             <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider text-white">
//               MRCL INFRASTRUCTURE
//             </h1>
//           </motion.div>

//           {/* Premium Gold Divider with Diamond Emblem */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex items-center gap-3 py-1"
//           >
//             <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
//             <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500/80" />
//             <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
//           </motion.div>

//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="text-gold-300 font-serif text-lg md:text-xl font-medium tracking-wide italic"
//           >
//             Building Spaces. Creating Legacies.
//           </motion.p>

//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="text-gold-100/85 font-sans font-light text-sm md:text-base leading-relaxed max-w-lg"
//           >
//             With a strong foundation of trust, quality, and innovation, MRCL Infrastructure has been at the forefront of delivering premium real estate solutions that redefine modern living.
//           </motion.p>
//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'motion/react';
import Herobanner from "../../assets/images/about-us-background-image.png";

export default function AboutHero() {
  return (
    <section className="relative w-full h-[550px] lg:h-[650px] overflow-hidden bg-brand-red-950">
      
      {/* Right side image - full cover background */}
      <motion.div 
        className="absolute inset-0 z-0 hidden lg:block"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={Herobanner}
          alt="MRCL Premium Luxury Real Estate Building"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Subtle overlay to enhance readability */}
        <div className="absolute inset-0 bg-neutral-900/10" />
      </motion.div>

      {/* Left side content panel with diagonal clipping path on desktop */}
      <motion.div 
        className="absolute inset-y-0 left-0 w-full flex flex-col justify-center px-6 py-12 sm:px-12 lg:pl-20 lg:pr-16 [clip-path:none] lg:[clip-path:polygon(0_0,_100%_0,_80%_100%,_0_100%)]"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        
        {/* Gold skyline illustration at bottom left of panel */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none opacity-20 z-0 overflow-hidden">
          <svg className="w-full h-full text-gold-400" viewBox="0 0 400 120" fill="none" stroke="currentColor" strokeWidth="0.8">
            <path d="M 10,120 V 90 H 22 V 120 M 22,120 V 102 H 34 V 120 M 38,120 V 70 H 52 V 120 M 56,120 V 85 H 72 V 120 M 76,120 V 55 H 94 V 120 M 98,120 V 98 H 110 V 120 M 114,120 V 40 H 134 V 120 M 138,120 V 88 H 150 V 120 M 154,120 V 75 H 170 V 120 M 174,120 V 48 H 194 V 120 M 198,120 V 92 H 214 V 120 M 218,120 V 60 H 234 V 120 M 238,120 V 78 H 250 V 120 M 254,120 V 42 H 274 V 120 M 278,120 V 96 H 290 V 120 M 294,120 V 65 H 310 V 120 M 314,120 V 120" />
            <path d="M 40,120 V 95 H 48 M 80,120 V 75 H 88 M 120,120 V 60 H 128 M 160,120 V 85 H 168 M 220,120 V 70 H 228 M 260,120 V 55 H 268" strokeDasharray="2 2" />
          </svg>
        </div>

        <div className="relative z-10 -top-15 max-w-xl space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-1"
          >
            <h2 className="font-serif text-5xl md:text-7xl font-bold tracking-widest text-gold-400">
              ABOUT
            </h2>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider text-white">
              MRCL INFRASTRUCTURE
            </h1>
          </motion.div>

          {/* Premium Gold Divider with Diamond Emblem */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, width: 0 }}
            whileInView={{ opacity: 1, scale: 1, width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="flex items-center gap-3 py-1"
          >
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500/80 flex-shrink-0" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
            className="text-gold-300 font-serif text-lg md:text-xl font-medium tracking-wide italic"
          >
            Building Spaces. Creating Legacies.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="text-gold-100/85 font-sans font-light text-sm md:text-base leading-relaxed max-w-lg"
          >
            With a strong foundation of trust, quality, and innovation, MRCL Infrastructure has been at the forefront of delivering premium real estate solutions that redefine modern living.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}