// import React from 'react';
// import { motion } from 'motion/react';
// import { MapPin, Shield, Compass, TrendingUp, Calendar, Clock, Sparkles } from 'lucide-react';
// import { ASSETS } from '../data';

// export default function UpcomingProjects() {
//   return (
//     <div className="bg-[#0a0001] min-h-screen pt-20 overflow-x-hidden text-white font-sans">
      
//       {/* 1. HERO HEADER BANNER SECTION */}
//       <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center bg-gradient-to-b from-[#140103] via-[#2a0307] to-[#0a0001] overflow-hidden border-b border-gold-500/15">
        
//         {/* Dynamic Dark Architectural Image Overlay with Gold/Maroon grading */}
//         <div className="absolute inset-0 z-0">
//           <img 
//             src={ASSETS.heroVilla} 
//             alt="Architectural city model" 
//             className="w-full h-full object-cover opacity-15 filter brightness-[0.25] contrast-[1.2] sepia-[0.35] saturate-[1.5]"
//             referrerPolicy="no-referrer"
//           />
//           {/* Rich maroon-wine radial gradients */}
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,4,10,0.55)_0%,rgba(10,0,1,0.95)_95%)]" />
//           {/* Subtle gold particles overlay */}
//           <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#b5802f_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
//         </div>

//         {/* Center content wrapper */}
//         <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-6">
          
//           {/* Top Divider with Diamond Motif */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="flex items-center justify-center gap-3"
//           >
//             <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400" />
//             <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
//             <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400" />
//           </motion.div>

//           {/* Title block with generous tracking and elegant serif */}
//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             className="space-y-1 sm:space-y-2"
//           >
//             <h1 className="font-serif text-4xl sm:text-5.5xl lg:text-7xl font-bold tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#d4b673] to-[#b5802f] drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)] ml-[0.18em] leading-tight uppercase">
//               UPCOMING
//             </h1>
//             <h1 className="font-serif text-4xl sm:text-5.5xl lg:text-7xl font-bold tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#d4b673] to-[#b5802f] drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)] ml-[0.18em] leading-tight uppercase">
//               PROJECTS
//             </h1>
//           </motion.div>

//           {/* Bottom Divider with Diamond Motif */}
//           <motion.div 
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="flex items-center justify-center gap-3"
//           >
//             <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400" />
//             <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
//             <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400" />
//           </motion.div>

//           {/* Subtitle / Tagline */}
//           <motion.p
//             initial={{ opacity: 0, y: 15 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//             className="font-serif text-stone-200/90 italic font-light text-sm sm:text-base md:text-lg tracking-wider"
//           >
//             Building tomorrow's landmarks today.
//           </motion.p>
//         </div>

//         {/* 3. Decorative Golden Curved Ribbon Swoop Underneath Header Banner */}
//         <div className="absolute bottom-0 left-0 right-0 h-16 w-full z-10 pointer-events-none select-none">
//           <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
//             <path d="M0,90 Q360,130 720,70 T1440,90 L1440,120 L0,120 Z" fill="#0a0001" />
//             <path d="M0,90 Q360,130 720,70 T1440,90" fill="none" stroke="url(#heroSwoopGoldGradient)" strokeWidth="3.5" />
//             <defs>
//               <linearGradient id="heroSwoopGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                 <stop offset="0%" stopColor="#faf7f0" stopOpacity="0.2" />
//                 <stop offset="35%" stopColor="#d4b673" />
//                 <stop offset="65%" stopColor="#b5802f" />
//                 <stop offset="100%" stopColor="#7b4e1b" stopOpacity="0.2" />
//               </linearGradient>
//             </defs>
//           </svg>
//         </div>
//       </section>

//       {/* 2. MAIN PROJECTS CONTENT AREA */}
//       <section className="py-16 sm:py-24 bg-[#0a0001] px-4 sm:px-6 lg:px-8 relative min-h-screen">
        
//         {/* Background radial accent highlights */}
//         <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gold-500/2 blur-[150px] rounded-full pointer-events-none" />
//         <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-[#35040a]/15 blur-[160px] rounded-full pointer-events-none" />

//         <div className="max-w-7xl mx-auto relative z-10">
          
//           {/* Grid Container for the 2 Gorgeous Project Cards */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            
//             {/* ================= CARD 1: MRCL AYANUR ENCLAVE ================= */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="relative bg-gradient-to-b from-[#1a0305]/95 to-[#110002]/95 border border-gold-400/25 rounded-2xl shadow-3xl overflow-hidden flex flex-col justify-between group"
//             >
//               {/* Corner COMING SOON gold badge */}
//               <div className="absolute top-0 left-0 w-36 h-36 overflow-hidden pointer-events-none z-20">
//                 <div className="absolute top-6 -left-10 w-44 bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 text-[10px] font-bold font-sans tracking-widest text-center py-1.5 -rotate-45 shadow-lg border-b border-gold-300/30">
//                   COMING SOON
//                 </div>
//               </div>

//               {/* CARD BRANDING TOP AREA */}
//               <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
                
//                 {/* Gold Brand Prefix */}
//                 <span className="font-serif text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 uppercase ml-[0.2em]">
//                   MRCL
//                 </span>

//                 {/* Styled Box Frame around AYANUR ENCLAVE */}
//                 <div className="border border-gold-400/40 px-6 sm:px-8 py-4 sm:py-5 relative w-full max-w-sm flex flex-col items-center justify-center">
//                   {/* Outer corner accents for a premium architectural blueprint touch */}
//                   <div className="absolute -top-[1.5px] -left-[1.5px] w-2.5 h-2.5 border-t-2 border-l-2 border-gold-400" />
//                   <div className="absolute -top-[1.5px] -right-[1.5px] w-2.5 h-2.5 border-t-2 border-r-2 border-gold-400" />
//                   <div className="absolute -bottom-[1.5px] -left-[1.5px] w-2.5 h-2.5 border-b-2 border-l-2 border-gold-400" />
//                   <div className="absolute -bottom-[1.5px] -right-[1.5px] w-2.5 h-2.5 border-b-2 border-r-2 border-gold-400" />

//                   {/* Cultured customized title using lambda "Λ" instead of "A" */}
//                   <h2 className="font-serif text-4xl sm:text-[42px] font-light tracking-[0.05em] text-white leading-none mb-1">
//                     AY<span className="text-gold-300 font-normal">Λ</span>NUR
//                   </h2>
                  
//                   <span className="font-sans text-sm sm:text-base font-bold tracking-[0.35em] text-gold-400 uppercase mt-1">
//                     ENCLAVE
//                   </span>
//                 </div>

//                 {/* Golden banner bar */}
//                 <div className="w-full max-w-[260px] bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 py-1.5 px-4 font-sans text-xs font-black tracking-[0.2em] text-center shadow-md">
//                   PREMIUM VILLA PLOTS
//                 </div>

//                 {/* Location */}
//                 <h3 className="font-serif text-sm sm:text-base font-bold tracking-[0.25em] text-stone-200 uppercase ml-[0.25em]">
//                   SHIMOGGA
//                 </h3>
//               </div>

//               {/* RENDERED IMAGE AREA */}
//               <div className="px-6 sm:px-8 relative">
//                 <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gold-400/15 bg-[#0a0001] shadow-2xl">
//                   <img 
//                     src={ASSETS.prestigeVilla} 
//                     alt="MRCL Ayanur Enclave Night Render" 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
//                     referrerPolicy="no-referrer"
//                   />
//                   {/* Soft bottom vignette shadow */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                 </div>
//               </div>

//               {/* BOTTOM 4-COLUMN ICON GRID */}
//               <div className="p-6 sm:p-8 mt-6 sm:mt-8 border-t border-gold-500/15 bg-black/30">
//                 <div className="grid grid-cols-4 gap-2 text-center items-stretch divide-x divide-gold-500/10">
                  
//                   {/* Feature 1 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <MapPin className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       Prime Location
//                     </span>
//                   </div>

//                   {/* Feature 2 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <Compass className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       Premium Villa Plots
//                     </span>
//                   </div>

//                   {/* Feature 3 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <Shield className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       Secure Community
//                     </span>
//                   </div>

//                   {/* Feature 4 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <TrendingUp className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       High Investment Potential
//                     </span>
//                   </div>

//                 </div>
//               </div>

//             </motion.div>


//             {/* ================= CARD 2: MRCL JAGRUTHI ================= */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: 0.15 }}
//               className="relative bg-gradient-to-b from-[#1a0305]/95 to-[#110002]/95 border border-gold-400/25 rounded-2xl shadow-3xl overflow-hidden flex flex-col justify-between group"
//             >
//               {/* Corner COMING SOON gold badge */}
//               <div className="absolute top-0 left-0 w-36 h-36 overflow-hidden pointer-events-none z-20">
//                 <div className="absolute top-6 -left-10 w-44 bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 text-[10px] font-bold font-sans tracking-widest text-center py-1.5 -rotate-45 shadow-lg border-b border-gold-300/30">
//                   COMING SOON
//                 </div>
//               </div>

//               {/* CARD BRANDING TOP AREA */}
//               <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
                
//                 {/* Gold Brand Prefix */}
//                 <span className="font-serif text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 uppercase ml-[0.2em]">
//                   MRCL
//                 </span>

//                 {/* Side-by-side Spiral Logo and Name */}
//                 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-2">
//                   {/* Concentric spiral green-gold plant/mandala vector outline drawn beautifully in SVG */}
//                   <div className="w-14 h-14 rounded-full flex items-center justify-center text-gold-400 flex-shrink-0">
//                     <svg className="w-12 h-12 text-gold-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
//                       {/* Geometric tree pattern outline */}
//                       <circle cx="50" cy="50" r="45" stroke="#d4b673" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                      
//                       {/* Spiral nested lines matching picture exactly */}
//                       <path d="M 50,50 Q 30,30 50,10 Q 70,30 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
//                       <path d="M 50,50 Q 70,70 50,90 Q 30,70 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
//                       <path d="M 50,50 Q 30,70 10,50 Q 30,30 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
//                       <path d="M 50,50 Q 70,30 90,50 Q 70,70 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
                      
//                       {/* Rotating leaf veins loops */}
//                       <path d="M 50,50 Q 40,30 25,25 Q 30,40 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />
//                       <path d="M 50,50 Q 60,70 75,75 Q 70,60 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />
//                       <path d="M 50,50 Q 30,60 25,75 Q 40,70 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />
//                       <path d="M 50,50 Q 70,40 75,25 Q 60,30 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />

//                       {/* Small center core */}
//                       <circle cx="50" cy="50" r="4" fill="#f2e9d3" stroke="#b5802f" strokeWidth="1" />
//                     </svg>
//                   </div>

//                   {/* Elegant Title */}
//                   <h2 className="font-serif text-4xl sm:text-[46px] font-light tracking-[0.03em] text-white leading-tight">
//                     Jagruthi
//                   </h2>
//                 </div>

//                 {/* Tagline Subtitle */}
//                 <div className="font-serif text-sm sm:text-md font-light text-stone-200 max-w-sm tracking-wide">
//                   Premium Villa Plots In Sarjapur
//                 </div>

//                 {/* Spacing alignment helper so both cards match exact height */}
//                 <div className="h-6 hidden sm:block" />
//               </div>

//               {/* RENDERED IMAGE AREA */}
//               <div className="px-6 sm:px-8 relative">
//                 <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gold-400/15 bg-[#0a0001] shadow-2xl">
//                   <img 
//                     src={ASSETS.serenityVilla} 
//                     alt="MRCL Jagruthi Night Render" 
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
//                     referrerPolicy="no-referrer"
//                   />
//                   {/* Soft bottom vignette shadow */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//                 </div>
//               </div>

//               {/* BOTTOM 4-COLUMN ICON GRID */}
//               <div className="p-6 sm:p-8 mt-6 sm:mt-8 border-t border-gold-500/15 bg-black/30">
//                 <div className="grid grid-cols-4 gap-2 text-center items-stretch divide-x divide-gold-500/10">
                  
//                   {/* Feature 1 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <MapPin className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       Prime Location
//                     </span>
//                   </div>

//                   {/* Feature 2 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <Compass className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       Premium Villa Plots
//                     </span>
//                   </div>

//                   {/* Feature 3 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <Shield className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       Secure Community
//                     </span>
//                   </div>

//                   {/* Feature 4 */}
//                   <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
//                     <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
//                       <TrendingUp className="w-4 h-4 text-gold-400" />
//                     </div>
//                     <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
//                       High Investment Potential
//                     </span>
//                   </div>

//                 </div>
//               </div>

//             </motion.div>

//           </div>


//           {/* 3. FOOTER STAY TUNED CARD */}
//           <div className="mt-20 flex flex-col items-center justify-center">
            
//             <motion.div 
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="flex items-center gap-4 bg-[#140103] border border-gold-400/20 px-8 py-4 rounded-xl shadow-xl max-w-lg w-full justify-center"
//             >
//               {/* Calendar & Clock Dual Icon inside high-end gold motif */}
//               <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0 text-gold-400">
//                 <Calendar className="w-9 h-9 stroke-[1.5]" />
//                 <Clock className="w-4 h-4 absolute bottom-1.5 right-1.5 text-gold-300 stroke-[2] bg-[#140103] rounded-full p-0.5" />
//               </div>

//               {/* Stay tuned messaging */}
//               <div className="flex flex-col text-left space-y-0.5">
//                 <span className="text-stone-300 font-serif text-sm italic font-light">
//                   Stay tuned for more updates.
//                 </span>
//                 <span className="text-gold-300 font-serif text-lg font-bold tracking-wider uppercase">
//                   Excellence is on the way!
//                 </span>
//               </div>
//             </motion.div>

//             {/* Bottom Flower / Diamond Emblem */}
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.5 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="flex items-center gap-3 mt-12 py-1"
//             >
//               <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
//               <div className="w-2 h-2 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
//               <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
//             </motion.div>

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// }








import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Shield, Compass, TrendingUp, Calendar, Clock, Sparkles } from 'lucide-react';
import { ASSETS } from '../data';

export default function UpcomingProjects() {
  return (
    <div className="bg-[#0a0001] min-h-screen pt-20 overflow-x-hidden text-white font-sans">
      
      {/* 1. HERO HEADER BANNER SECTION */}
      <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center justify-center bg-gradient-to-b from-[#140103] via-[#2a0307] to-[#0a0001] overflow-hidden border-b border-gold-500/15">
        
        {/* Dynamic Dark Architectural Image Overlay with Gold/Maroon grading */}
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.heroVilla} 
            alt="Architectural city model" 
            className="w-full h-full object-cover opacity-15 filter brightness-[0.25] contrast-[1.2] sepia-[0.35] saturate-[1.5]"
            referrerPolicy="no-referrer"
          />
          {/* Rich maroon-wine radial gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(53,4,10,0.55)_0%,rgba(10,0,1,0.95)_95%)]" />
          {/* Subtle gold particles overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#b5802f_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
        </div>

        {/* Center content wrapper */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 space-y-6">
          
          {/* Top Divider with Diamond Motif */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>

          {/* Title block with generous tracking and elegant serif */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-1 sm:space-y-2"
          >
            <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#d4b673] to-[#b5802f] drop-shadow-[0_4px_16px_rgba(0,0,0,0.75)] ml-[0.18em] leading-tight uppercase">
              UPCOMING PROJECTS
            </h1>
          </motion.div>

          {/* Bottom Divider with Diamond Motif */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3"
          >
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold-400" />
            <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold-400" />
          </motion.div>

          {/* Subtitle / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-stone-200/90 italic font-light text-sm sm:text-base md:text-lg tracking-wider"
          >
            Building tomorrow's landmarks today.
          </motion.p>
        </div>

        {/* 3. Decorative Golden Curved Ribbon Swoop Underneath Header Banner */}
        <div className="absolute bottom-0 left-0 right-0 h-16 w-full z-10 pointer-events-none select-none">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path d="M0,90 Q360,130 720,70 T1440,90 L1440,120 L0,120 Z" fill="#0a0001" />
            <path d="M0,90 Q360,130 720,70 T1440,90" fill="none" stroke="url(#heroSwoopGoldGradient)" strokeWidth="3.5" />
            <defs>
              <linearGradient id="heroSwoopGoldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#faf7f0" stopOpacity="0.2" />
                <stop offset="35%" stopColor="#d4b673" />
                <stop offset="65%" stopColor="#b5802f" />
                <stop offset="100%" stopColor="#7b4e1b" stopOpacity="0.2" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* 2. MAIN PROJECTS CONTENT AREA */}
      <section className="py-16 sm:py-24  bg-gradient-to-b from-[#0d0101ff] via-[#7A1C1C] to-[#7A1C1C] px-4 sm:px-6 lg:px-8 relative min-h-screen">
        
        {/* Background radial accent highlights */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gold-500/2 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 right-10 w-[500px] h-[500px] bg-[#35040a]/15 blur-[160px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Grid Container for the 2 Gorgeous Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            
            {/* ================= CARD 1: MRCL AYANUR ENCLAVE ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative bg-gradient-to-b from-[#610000ff]/95 to-[#110002]/95 border border-gold-400/25 rounded-2xl shadow-3xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Corner COMING SOON gold badge */}
              <div className="absolute top-0 left-0 w-36 h-36 overflow-hidden pointer-events-none z-20">
                <div className="absolute top-6 -left-10 w-44 bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 text-[10px] font-bold font-sans tracking-widest text-center py-1.5 -rotate-45 shadow-lg border-b border-gold-300/30">
                  COMING SOON
                </div>
              </div>

              {/* CARD BRANDING TOP AREA */}
              <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
                
                {/* Gold Brand Prefix */}
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 uppercase ml-[0.2em]">
                  MRCL
                </span>

                {/* Styled Box Frame around AYANUR ENCLAVE */}
                <div className="border border-gold-400/40 px-6 sm:px-8 py-4 sm:py-5 relative w-full max-w-sm flex flex-col items-center justify-center">
                  {/* Outer corner accents for a premium architectural blueprint touch */}
                  <div className="absolute -top-[1.5px] -left-[1.5px] w-2.5 h-2.5 border-t-2 border-l-2 border-gold-400" />
                  <div className="absolute -top-[1.5px] -right-[1.5px] w-2.5 h-2.5 border-t-2 border-r-2 border-gold-400" />
                  <div className="absolute -bottom-[1.5px] -left-[1.5px] w-2.5 h-2.5 border-b-2 border-l-2 border-gold-400" />
                  <div className="absolute -bottom-[1.5px] -right-[1.5px] w-2.5 h-2.5 border-b-2 border-r-2 border-gold-400" />

                  {/* Cultured customized title using lambda "Λ" instead of "A" */}
                  <h2 className="font-serif text-4xl sm:text-[42px] font-light tracking-[0.05em] text-white leading-none mb-1">
                    AY<span className="text-gold-300 font-normal">Λ</span>NUR
                  </h2>
                  
                  <span className="font-sans text-sm sm:text-base font-bold tracking-[0.35em] text-gold-400 uppercase mt-1">
                    ENCLAVE
                  </span>
                </div>

                {/* Golden banner bar */}
                <div className="w-full max-w-[260px] bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 py-1.5 px-4 font-sans text-xs font-black tracking-[0.2em] text-center shadow-md">
                  PREMIUM VILLA PLOTS
                </div>

                {/* Location */}
                <h3 className="font-serif text-sm sm:text-base font-bold tracking-[0.25em] text-stone-200 uppercase ml-[0.25em]">
                  SHIMOGGA
                </h3>
              </div>

              {/* RENDERED IMAGE AREA */}
              <div className="px-6 sm:px-8 relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gold-400/15 bg-[#0a0001] shadow-2xl">
                  <img 
                    src={ASSETS.prestigeVilla} 
                    alt="MRCL Ayanur Enclave Night Render" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {/* Soft bottom vignette shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* BOTTOM 4-COLUMN ICON GRID */}
              <div className="p-6 sm:p-8 mt-6 sm:mt-8 border-t border-gold-500/15 bg-black/30">
                <div className="grid grid-cols-4 gap-2 text-center items-stretch divide-x divide-gold-500/10">
                  
                  {/* Feature 1 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <MapPin className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      Prime Location
                    </span>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <Compass className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      Premium Villa Plots
                    </span>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <Shield className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      Secure Community
                    </span>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <TrendingUp className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      High Investment Potential
                    </span>
                  </div>

                </div>
              </div>

            </motion.div>


            {/* ================= CARD 2: MRCL JAGRUTHI ================= */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="relative bg-gradient-to-b from-[#610000ff]/95 to-[#110002]/95 border border-gold-400/25 rounded-2xl shadow-3xl overflow-hidden flex flex-col justify-between group"
            >
              {/* Corner COMING SOON gold badge */}
              <div className="absolute top-0 left-0 w-36 h-36 overflow-hidden pointer-events-none z-20">
                <div className="absolute top-6 -left-10 w-44 bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 text-[10px] font-bold font-sans tracking-widest text-center py-1.5 -rotate-45 shadow-lg border-b border-gold-300/30">
                  COMING SOON
                </div>
              </div>

              {/* CARD BRANDING TOP AREA */}
              <div className="p-8 sm:p-10 flex flex-col items-center justify-center text-center space-y-4">
                
                {/* Gold Brand Prefix */}
                <span className="font-serif text-2xl font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500 uppercase ml-[0.2em]">
                  MRCL
                </span>

                {/* Side-by-side Spiral Logo and Name */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-2">
                  {/* Concentric spiral green-gold plant/mandala vector outline drawn beautifully in SVG */}
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-gold-400 flex-shrink-0">
                    <svg className="w-12 h-12 text-gold-400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Geometric tree pattern outline */}
                      <circle cx="50" cy="50" r="45" stroke="#d4b673" strokeWidth="1" strokeDasharray="2 2" opacity="0.3" />
                      
                      {/* Spiral nested lines matching picture exactly */}
                      <path d="M 50,50 Q 30,30 50,10 Q 70,30 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M 50,50 Q 70,70 50,90 Q 30,70 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M 50,50 Q 30,70 10,50 Q 30,30 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
                      <path d="M 50,50 Q 70,30 90,50 Q 70,70 50,50" stroke="#b5802f" strokeWidth="1.8" strokeLinecap="round" />
                      
                      {/* Rotating leaf veins loops */}
                      <path d="M 50,50 Q 40,30 25,25 Q 30,40 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />
                      <path d="M 50,50 Q 60,70 75,75 Q 70,60 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />
                      <path d="M 50,50 Q 30,60 25,75 Q 40,70 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />
                      <path d="M 50,50 Q 70,40 75,25 Q 60,30 50,50" stroke="#d4b673" strokeWidth="1.2" opacity="0.8" />

                      {/* Small center core */}
                      <circle cx="50" cy="50" r="4" fill="#f2e9d3" stroke="#b5802f" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Elegant Title */}
                  <h2 className="font-serif text-4xl sm:text-[46px] font-light tracking-[0.03em] text-white leading-tight">
                    Jagruthi
                  </h2>
                </div>

                {/* Tagline Subtitle */}
                <div className="font-serif text-sm sm:text-md font-light text-stone-200 max-w-sm tracking-wide">
                  Premium Villa Plots In Sarjapur
                </div>

                {/* Spacing alignment helper so both cards match exact height */}
                <div className="h-6 hidden sm:block" />
              </div>

              {/* RENDERED IMAGE AREA */}
              <div className="px-6 sm:px-8 relative">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-gold-400/15 bg-[#0a0001] shadow-2xl">
                  <img 
                    src={ASSETS.serenityVilla} 
                    alt="MRCL Jagruthi Night Render" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                  {/* Soft bottom vignette shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </div>

              {/* BOTTOM 4-COLUMN ICON GRID */}
              <div className="p-6 sm:p-8 mt-6 sm:mt-8 border-t border-gold-500/15 bg-black/30">
                <div className="grid grid-cols-4 gap-2 text-center items-stretch divide-x divide-gold-500/10">
                  
                  {/* Feature 1 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <MapPin className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      Prime Location
                    </span>
                  </div>

                  {/* Feature 2 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <Compass className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      Premium Villa Plots
                    </span>
                  </div>

                  {/* Feature 3 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <Shield className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      Secure Community
                    </span>
                  </div>

                  {/* Feature 4 */}
                  <div className="flex flex-col items-center justify-center space-y-1.5 px-1.5">
                    <div className="w-8 h-8 rounded-full bg-gold-400/5 border border-gold-400/20 flex items-center justify-center text-gold-400 shadow-md">
                      <TrendingUp className="w-4 h-4 text-gold-400" />
                    </div>
                    <span className="font-sans text-[9px] sm:text-[10.5px] font-bold text-gold-300 leading-tight">
                      High Investment Potential
                    </span>
                  </div>

                </div>
              </div>

            </motion.div>

          </div>


          {/* 3. FOOTER STAY TUNED CARD */}
          <div className="mt-20 flex flex-col items-center justify-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 bg-[#140103] border border-gold-400/20 px-8 py-4 rounded-xl shadow-xl max-w-lg w-full justify-center"
            >
              {/* Calendar & Clock Dual Icon inside high-end gold motif */}
              <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0 text-gold-400">
                <Calendar className="w-9 h-9 stroke-[1.5]" />
                <Clock className="w-4 h-4 absolute bottom-1.5 right-1.5 text-gold-300 stroke-[2] bg-[#140103] rounded-full p-0.5" />
              </div>

              {/* Stay tuned messaging */}
              <div className="flex flex-col text-left space-y-0.5">
                <span className="text-stone-300 font-serif text-sm italic font-light">
                  Stay tuned for more updates.
                </span>
                <span className="text-gold-300 font-serif text-lg font-bold tracking-wider uppercase">
                  Excellence is on the way!
                </span>
              </div>
            </motion.div>

            {/* Bottom Flower / Diamond Emblem */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mt-12 py-1"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400/70" />
              <div className="w-2 h-2 rotate-45 border border-gold-400 bg-gold-500 shadow-[0_0_8px_rgba(212,182,115,0.6)]" />
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400/70" />
            </motion.div>

          </div>

        </div>

      </section>

    </div>
  );
}
