// import React from 'react';
// import { motion } from 'motion/react';
// import { Phone, Globe } from 'lucide-react';

// export default function AboutCTA() {
//   return (
//     <section className="py-12 bg-[#faf7f0] pb-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="relative rounded-xl bg-brand-red-950 p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden border border-gold-400/20"
//         >
//           {/* Top and Bottom Gold Framed Accent Bars */}
//           <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
//           <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

//           {/* Subtle background ambiance */}
//           <div className="absolute -top-24 left-1/4 w-80 h-80 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
//             {/* Logo block (3 columns) */}
//             <div className="lg:col-span-3 flex items-center justify-center lg:justify-start lg:border-r lg:border-gold-400/15 lg:pr-8">
//               <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
//                 {/* Styled architectural gold outline logo */}
//                 <div className="relative w-16 h-16 flex items-center justify-center mb-1">
//                   <svg className="w-14 h-14 text-gold-400" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
//                     <path d="M 10,40 V 22 L 16,18 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
//                     <path d="M 16,40 V 14 L 22,10 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
//                     <path d="M 22,40 V 10 L 28,14 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
//                     <path d="M 28,40 V 18 L 34,22 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
//                     <path d="M 6,36 Q 22,24 38,36" stroke="url(#goldLogoBorder)" strokeWidth="1.5" />
//                     <defs>
//                       <linearGradient id="goldLogoGrad" x1="0" y1="0" x2="0" y2="1">
//                         <stop offset="0%" stopColor="#faf7f0" stopOpacity="0.3" />
//                         <stop offset="100%" stopColor="#b5802f" stopOpacity="0.1" />
//                       </linearGradient>
//                       <linearGradient id="goldLogoBorder" x1="0" y1="0" x2="1" y2="1">
//                         <stop offset="0%" stopColor="#faf7f0" />
//                         <stop offset="50%" stopColor="#b5802f" />
//                         <stop offset="100%" stopColor="#7b4e1b" />
//                       </linearGradient>
//                     </defs>
//                   </svg>
//                 </div>
//                 <span className="font-serif text-3xl font-extrabold tracking-widest text-gold-300 leading-none">
//                   MRCL
//                 </span>
//                 <span className="font-sans text-[9px] tracking-[0.35em] text-gold-400/80 uppercase mt-1 font-bold">
//                   INFRASTRUCTURE
//                 </span>
//               </div>
//             </div>

//             {/* Slogan & Contact Pill center column (6 columns) */}
//             <div className="lg:col-span-6 flex flex-col items-center justify-center text-center px-4">
//               <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-light tracking-[0.18em] text-gold-200 uppercase leading-snug">
//                 BUILDING SPACES. CREATING LEGACIES.
//               </h2>
              
//               {/* Deluxe Gold Motif Line */}
//               <div className="flex items-center justify-center gap-3 w-full max-w-xs my-3">
//                 <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-400/40 to-gold-400/70" />
//                 <div className="flex items-center gap-1.5">
//                   <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/80" />
//                   <div className="w-2.5 h-2.5 rotate-45 bg-gold-500 border border-gold-300 shadow" />
//                   <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/80" />
//                 </div>
//                 <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-400/40 to-gold-400/70" />
//               </div>

//               {/* Elegant Solid Gold Pill Container with Contact Details */}
//               <div className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 px-6 py-2.5 rounded shadow-xl border border-gold-300/40 max-w-full">
//                 <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 font-sans text-xs sm:text-sm font-semibold tracking-wider">
//                   <a href="tel:+911234567890" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//                     <Phone className="w-4 h-4 text-brand-red-950 flex-shrink-0 fill-brand-red-950/10" />
//                     <span>+91 12345 67890</span>
//                   </a>
//                   <div className="hidden sm:block w-[1px] h-4 bg-brand-red-950/20" />
//                   <a href="https://www.mrclinfra.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
//                     <Globe className="w-4 h-4 text-brand-red-950 flex-shrink-0" />
//                     <span>www.mrclinfra.com</span>
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Skyline wireframe illustration (3 columns) */}
//             <div className="lg:col-span-3 flex items-center justify-center lg:justify-end lg:border-l lg:border-gold-400/15 lg:pl-8 overflow-hidden">
//               <svg className="w-full max-w-[200px] h-32 text-gold-400/35" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="0.8">
//                 {/* Rightmost skyscraper with pointed roof */}
//                 <path d="M 160,120 V 50 L 168,42 L 176,50 V 120" />
//                 <path d="M 168,42 V 32 M 168,32 L 168,26" />
//                 <line x1="164" y1="60" x2="164" y2="110" strokeDasharray="1 2" />
//                 <line x1="172" y1="60" x2="172" y2="110" strokeDasharray="1 2" />

//                 {/* Tallest central tower */}
//                 <path d="M 120,120 V 40 L 128,30 L 136,40 V 120" />
//                 <line x1="128" y1="30" x2="128" y2="10" strokeWidth="1" />
//                 <circle cx="128" cy="10" r="1" fill="currentColor" />
//                 <line x1="124" y1="50" x2="124" y2="110" strokeDasharray="1 3" />
//                 <line x1="128" y1="50" x2="128" y2="110" strokeDasharray="1 3" />
//                 <line x1="132" y1="50" x2="132" y2="110" strokeDasharray="1 3" />

//                 {/* Medium left-center tower with domes/tiers */}
//                 <path d="M 85,120 V 70 H 91 V 65 H 97 V 70 H 103 V 120" />
//                 <path d="M 94,65 V 58 L 94,52" />
//                 <line x1="89" y1="78" x2="89" y2="115" strokeDasharray="2 2" />
//                 <line x1="94" y1="78" x2="94" y2="115" strokeDasharray="2 2" />
//                 <line x1="99" y1="78" x2="99" y2="115" strokeDasharray="2 2" />

//                 {/* Leftmost structures */}
//                 <path d="M 50,120 V 90 H 62 V 120" />
//                 <path d="M 66,120 V 85 H 78 V 120" />
//                 <line x1="56" y1="96" x2="56" y2="115" strokeDasharray="1 1" />
//                 <line x1="72" y1="92" x2="72" y2="115" strokeDasharray="1 1" />

//                 {/* Far right wide residential tower */}
//                 <path d="M 185,120 V 80 H 198 V 120" />
//                 <line x1="191" y1="86" x2="191" y2="115" strokeDasharray="1 2" />

//                 {/* Additional structural accents and grids */}
//                 <line x1="10" y1="120" x2="198" y2="120" strokeWidth="1.2" />
//               </svg>
//             </div>

//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }




import React from 'react';
import { motion } from 'motion/react';
import { Phone, Globe } from 'lucide-react';

export default function AboutCTA() {
  return (
    <section className="py-12 bg-[#faf7f0] pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl bg-brand-red-950 p-6 sm:p-10 md:p-12 shadow-2xl overflow-hidden border border-gold-400/20"
        >
          {/* Top and Bottom Gold Framed Accent Bars */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

          {/* Subtle background ambiance */}
          <div className="absolute -top-24 left-1/4 w-80 h-80 bg-gold-500/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Logo block (3 columns) */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-start lg:border-r lg:border-gold-400/15 lg:pr-8">
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                {/* Styled architectural gold outline logo */}
                {/* <div className="relative w-16 h-16 flex items-center justify-center mb-1">
                  <svg className="w-14 h-14 text-gold-400" viewBox="0 0 44 44" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d="M 10,40 V 22 L 16,18 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
                    <path d="M 16,40 V 14 L 22,10 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
                    <path d="M 22,40 V 10 L 28,14 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
                    <path d="M 28,40 V 18 L 34,22 V 40" fill="url(#goldLogoGrad)" stroke="url(#goldLogoBorder)" />
                    <path d="M 6,36 Q 22,24 38,36" stroke="url(#goldLogoBorder)" strokeWidth="1.5" />
                    <defs>
                      <linearGradient id="goldLogoGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#faf7f0" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#b5802f" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient id="goldLogoBorder" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#faf7f0" />
                        <stop offset="50%" stopColor="#b5802f" />
                        <stop offset="100%" stopColor="#7b4e1b" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div> */}
                <span className="font-serif text-3xl font-extrabold tracking-widest text-gold-300 leading-none">
                  MRCL
                </span>
                <span className="font-sans text-[9px] tracking-[0.35em] text-gold-400/80 uppercase mt-1 font-bold">
                  INFRASTRUCTURE
                </span>
              </div>
            </div>

            {/* Slogan & Contact Pill center column (6 columns) */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center text-center px-4">
              <h2 className="font-serif text-lg sm:text-xl lg:text-2xl font-light tracking-[0.18em] text-gold-200 uppercase leading-snug">
                BUILDING SPACES. CREATING LEGACIES.
              </h2>
              
              {/* Deluxe Gold Motif Line */}
              <div className="flex items-center justify-center gap-3 w-full max-w-xs my-3">
                <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-400/40 to-gold-400/70" />
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/80" />
                  <div className="w-2.5 h-2.5 rotate-45 bg-gold-500 border border-gold-300 shadow" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-gold-400/80" />
                </div>
                <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-400/40 to-gold-400/70" />
              </div>

              {/* Elegant Solid Gold Pill Container with Contact Details */}
              <div className="mt-2 inline-flex items-center justify-center bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 px-6 py-2.5 rounded shadow-xl border border-gold-300/40 max-w-full">
                <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 font-sans text-xs sm:text-sm font-semibold tracking-wider">
                  <a href="tel:+919071415999" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Phone className="w-4 h-4 text-brand-red-950 flex-shrink-0 fill-brand-red-950/10" />
                    <span>+91 9071415999</span>
                  </a>
                  <div className="hidden sm:block w-[1px] h-4 bg-brand-red-950/20" />
                  <a href="https://www.mrclinfrastructure.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <Globe className="w-4 h-4 text-brand-red-950 flex-shrink-0" />
                    <span>www.mrclinfrastructure.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Skyline wireframe illustration (3 columns) */}
            <div className="lg:col-span-3 flex items-center justify-center lg:justify-end lg:border-l lg:border-gold-400/15 lg:pl-8 overflow-hidden">
              <svg className="w-full max-w-[200px] h-32 text-gold-400/35" viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth="0.8">
                {/* Rightmost skyscraper with pointed roof */}
                <path d="M 160,120 V 50 L 168,42 L 176,50 V 120" />
                <path d="M 168,42 V 32 M 168,32 L 168,26" />
                <line x1="164" y1="60" x2="164" y2="110" strokeDasharray="1 2" />
                <line x1="172" y1="60" x2="172" y2="110" strokeDasharray="1 2" />

                {/* Tallest central tower */}
                <path d="M 120,120 V 40 L 128,30 L 136,40 V 120" />
                <line x1="128" y1="30" x2="128" y2="10" strokeWidth="1" />
                <circle cx="128" cy="10" r="1" fill="currentColor" />
                <line x1="124" y1="50" x2="124" y2="110" strokeDasharray="1 3" />
                <line x1="128" y1="50" x2="128" y2="110" strokeDasharray="1 3" />
                <line x1="132" y1="50" x2="132" y2="110" strokeDasharray="1 3" />

                {/* Medium left-center tower with domes/tiers */}
                <path d="M 85,120 V 70 H 91 V 65 H 97 V 70 H 103 V 120" />
                <path d="M 94,65 V 58 L 94,52" />
                <line x1="89" y1="78" x2="89" y2="115" strokeDasharray="2 2" />
                <line x1="94" y1="78" x2="94" y2="115" strokeDasharray="2 2" />
                <line x1="99" y1="78" x2="99" y2="115" strokeDasharray="2 2" />

                {/* Leftmost structures */}
                <path d="M 50,120 V 90 H 62 V 120" />
                <path d="M 66,120 V 85 H 78 V 120" />
                <line x1="56" y1="96" x2="56" y2="115" strokeDasharray="1 1" />
                <line x1="72" y1="92" x2="72" y2="115" strokeDasharray="1 1" />

                {/* Far right wide residential tower */}
                <path d="M 185,120 V 80 H 198 V 120" />
                <line x1="191" y1="86" x2="191" y2="115" strokeDasharray="1 2" />

                {/* Additional structural accents and grids */}
                <line x1="10" y1="120" x2="198" y2="120" strokeWidth="1.2" />
              </svg>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
