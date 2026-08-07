// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { ArrowRight, Play, X, Volume2, VolumeX, Crown } from 'lucide-react';
// import { ASSETS } from '../../data';

// export default function Hero({ onOpenContact, onExploreVillas, onViewProjects }) {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const [isMuted, setIsMuted] = useState(true);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto scroll beautiful visuals inside the video modal if opened
//   const videoSlides = [
//     {
//       title: "Majestic Architectural Exteriors",
//       desc: "Perfect geometry, rich stone cladding, and floor-to-ceiling glass paneling.",
//       img: ASSETS.heroVilla
//     },
//     {
//       title: "Double-Height Interior Foyers",
//       desc: "Polished Italian marble and custom-crafted chandeliers suspended in air.",
//       img: ASSETS.lobbyInterior
//     },
//     {
//       title: "Sovereign Master Suites",
//       desc: "Expansive private bedrooms attached with walk-in dressers and private terraces.",
//       img: ASSETS.grandeurVilla
//     }
//   ];

//   useEffect(() => {
//     if (isVideoOpen) {
//       const interval = setInterval(() => {
//         setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
//       }, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [isVideoOpen]);

//   return (
//     <>
//       <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//         {/* Background Image with parallax and high-luxury dark gold overlay */}
//         <div className="absolute inset-0 z-0">
//           <img
//             src={ASSETS.heroVilla}
//             alt="MRCL Luxury Villa Twilight"
//             className="w-full h-full object-cover scale-105"
//             referrerPolicy="no-referrer"
//           />
//           {/* Multi-layered dark luxury gradient overlay to ensure perfect contrast */}
//           <div className="absolute inset-0 bg-gradient-to-r from-brand-red-950/95 via-brand-red-950/80 to-transparent" />
//           <div className="absolute inset-0 bg-gradient-to-t from-brand-red-950 via-transparent to-brand-red-950/40" />
//           {/* Subtle gold dust/shimmer effect */}
//           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(181,128,47,0.08)_0%,transparent_70%)]" />
//         </div>

//         {/* Content Container */}
//         <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
//             {/* Left Content Column */}
//             <div className="lg:col-span-8 space-y-6 md:space-y-8">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8 }}
//                 className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-400/20 rounded-full"
//               >
//                 <Crown className="w-3.5 h-3.5 text-gold-400" />
//                 <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-gold-300 uppercase">
//                   BUILDING MORE THAN HOMES
//                 </span>
//               </motion.div>

//               {/* Majestic Editorial Typography */}
//               <motion.h1
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1, delay: 0.2 }}
//                 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-light tracking-tight text-white leading-[1.1]"
//               >
//                 CRAFTING <br />
//                 <span className="font-bold text-gold-300 bg-gradient-to-r from-gold-100 via-gold-300 to-gold-600 bg-clip-text text-transparent">
//                   LUXURY.
//                 </span>{' '}
//                 <br />
//                 BUILDING <br />
//                 <span className="font-medium text-gold-400">LIFESTYLES.</span>
//               </motion.h1>

//               {/* Decorative Line divider */}
//               <motion.div
//                 initial={{ opacity: 0, width: 0 }}
//                 animate={{ opacity: 1, width: '120px' }}
//                 transition={{ duration: 1, delay: 0.4 }}
//                 className="flex items-center gap-3"
//               >
//                 <div className="h-[1px] bg-gold-400 flex-1" />
//                 <Crown className="w-3 h-3 text-gold-400" />
//                 <div className="h-[1px] bg-gold-400 flex-1" />
//               </motion.div>

//               {/* Sub-text */}
//               <motion.p
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.5 }}
//                 className="max-w-xl text-sm sm:text-base md:text-lg text-gold-100/90 font-light leading-relaxed font-sans"
//               >
//                 Experience the perfect blend of elegance, comfort, and modern living with our premium 4 BHK villas in South Bangalore. Designed for those who appreciate fine architectural craftsmanship.
//               </motion.p>

//               {/* Interactive Call to Action buttons */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="flex flex-wrap gap-4 pt-2"
//               >
//                 <button
//                   onClick={onExploreVillas}
//                   className="cursor-pointer group flex items-center gap-3 px-6 sm:px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-brand-red-950 font-bold text-xs sm:text-sm tracking-widest rounded-md transition-all duration-300 shadow-xl hover:shadow-gold-500/20 active:scale-95"
//                 >
//                   <span>EXPLORE VILLAS</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
//                 </button>

//                 <button
//                   onClick={onViewProjects}
//                   className="cursor-pointer flex items-center gap-2 px-6 sm:px-8 py-3.5 bg-transparent hover:bg-white/5 border border-gold-400/40 hover:border-gold-300 text-gold-200 hover:text-gold-100 font-bold text-xs sm:text-sm tracking-widest rounded-md transition-all duration-300 active:scale-95"
//                 >
//                   <span>VIEW PROJECTS</span>
//                 </button>
//               </motion.div>
//             </div>

//             {/* Right Interactive Discovery Column */}
//             <div className="lg:col-span-4 flex justify-center lg:justify-end pt-8 lg:pt-0">
//               <motion.button
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 1, delay: 0.8 }}
//                 onClick={() => setIsVideoOpen(true)}
//                 className="cursor-pointer group flex items-center gap-4 bg-brand-red-950/40 hover:bg-brand-red-900/60 p-4 sm:p-5 rounded-full border border-gold-400/20 hover:border-gold-400/50 backdrop-blur-md transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95"
//               >
//                 {/* Pulsing Play Button */}
//                 <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gold-500 text-brand-red-950 shadow-lg group-hover:bg-gold-400 transition-colors">
//                   <Play className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 fill-current ml-1" />
//                   <div className="absolute inset-0 rounded-full border border-gold-400 animate-ping opacity-30" />
//                 </div>
                
//                 {/* Labels */}
//                 <div className="text-left pr-4">
//                   <span className="block text-xs sm:text-sm font-semibold tracking-widest text-gold-100 group-hover:text-gold-300 transition-colors">
//                     WATCH VIDEO
//                   </span>
//                   <span className="block text-[10px] sm:text-xs text-gold-300/70 font-serif italic mt-0.5">
//                     Discover luxury living
//                   </span>
//                 </div>
//               </motion.button>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Cinematic Modal Video Player */}
//       <AnimatePresence>
//         {isVideoOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl">
//             {/* Backdrop Close Click */}
//             <div className="absolute inset-0" onClick={() => setIsVideoOpen(false)} />

//             {/* Main Interactive Player Container */}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.95 }}
//               className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-gold-300/25 bg-neutral-950 aspect-video shadow-2xl z-10 flex flex-col justify-between"
//             >
//               {/* Virtual Luxury Video Background Loop */}
//               <div className="absolute inset-0 w-full h-full">
//                 <AnimatePresence mode="wait">
//                   <motion.img
//                     key={currentSlide}
//                     src={videoSlides[currentSlide].img}
//                     alt="Luxury cinematic tour frame"
//                     initial={{ opacity: 0, scale: 1.1 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     exit={{ opacity: 0, scale: 0.95 }}
//                     transition={{ duration: 1.5 }}
//                     className="w-full h-full object-cover filter brightness-[0.4]"
//                     referrerPolicy="no-referrer"
//                   />
//                 </AnimatePresence>
//                 {/* Scanning line filter */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80" />
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,rgba(0,0,0,0.8)_100%)]" />
//               </div>

//               {/* Top Controls Bar */}
//               <div className="relative p-6 flex justify-between items-center text-white z-20 bg-gradient-to-b from-black/80 to-transparent">
//                 <div className="flex items-center gap-3">
//                   <Crown className="w-5 h-5 text-gold-400 animate-spin" style={{ animationDuration: '8s' }} />
//                   <div>
//                     <h4 className="font-serif text-sm tracking-widest text-gold-200">MRCL VIRTUAL FLIGHT</h4>
//                     <span className="text-[10px] text-gold-300/60 uppercase font-mono">Drone Cinematic Mode active</span>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   {/* Mute toggle button */}
//                   <button
//                     onClick={() => setIsMuted(!isMuted)}
//                     className="p-2 rounded-full hover:bg-white/10 text-gold-300 hover:text-gold-100 transition-colors"
//                     title={isMuted ? "Unmute Ambient Music" : "Mute Music"}
//                   >
//                     {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 animate-pulse" />}
//                   </button>

//                   {/* Close Player */}
//                   <button
//                     onClick={() => setIsVideoOpen(false)}
//                     className="p-2 rounded-full hover:bg-white/10 text-gold-300 hover:text-gold-100 transition-all duration-300 hover:rotate-90"
//                   >
//                     <X className="w-5 h-5" />
//                   </button>
//                 </div>
//               </div>

//               {/* Ambient Audio Player (Simulated but fully active if unmuted!) */}
//               {!isMuted && isVideoOpen && (
//                 <iframe
//                   src="https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1&mute=0&controls=0&loop=1&playlist=5qap5aO4i9A"
//                   title="Ambient Luxury background track"
//                   className="hidden w-0 h-0"
//                   allow="autoplay"
//                 />
//               )}

//               {/* Slide indicators in center */}
//               <div className="relative flex items-center justify-center gap-12 z-20 pointer-events-none">
//                 <Play className="w-12 h-12 text-gold-400/40 animate-ping absolute" />
//                 <div className="w-14 h-14 rounded-full border border-gold-300/20 flex items-center justify-center bg-black/40 backdrop-blur-md">
//                   <Play className="w-6 h-6 text-gold-300 fill-current ml-0.5 animate-pulse" />
//                 </div>
//               </div>

//               {/* Bottom Info bar */}
//               <div className="relative p-6 md:p-8 z-20 bg-gradient-to-t from-black via-black/40 to-transparent">
//                 <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
//                   <div className="md:col-span-8 text-left">
//                     <span className="text-xs font-mono text-gold-400 uppercase tracking-widest block mb-1">
//                       SCENE 0{currentSlide + 1} // {videoSlides[currentSlide].title}
//                     </span>
//                     <h5 className="font-serif text-lg md:text-xl text-gold-50">
//                       {videoSlides[currentSlide].title}
//                     </h5>
//                     <p className="text-xs md:text-sm text-gold-100/70 mt-1 max-w-xl">
//                       {videoSlides[currentSlide].desc}
//                     </p>
//                   </div>

//                   <div className="md:col-span-4 flex justify-end gap-1.5 pb-2">
//                     {videoSlides.map((_, idx) => (
//                       <button
//                         key={idx}
//                         onClick={() => setCurrentSlide(idx)}
//                         className={`cursor-pointer h-1.5 rounded-full transition-all duration-500 ${
//                           currentSlide === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/20'
//                         }`}
//                         aria-label={`Go to scene ${idx + 1}`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </div>

//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }


// import { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { Crown, Play, ArrowRight } from 'lucide-react';

// const carouselSlides = [
//   {
//     id: 1,
//     numberStr: '01',
//     subtitle: 'ONGOING MASTERWORKS',
//     titlePart1: 'SYLVAN WOODS.',
//     titlePart2: 'ECO-LUXURY LIVING.',
//     description: 'A breathtaking forest-facing residential sanctuary where deep majestic evergreens meet state-of-the-art bespoke villa construction.',
//     image: '/src/assets/images/sylvan_woods_1784530512722.jpg',
//     accentColor: '#cfa86b'
//   },
//   {
//     id: 2,
//     numberStr: '02',
//     subtitle: 'PREMIUM TOWNSHIP CONCEPT',
//     titlePart1: 'UNICON SUGARLAND.',
//     titlePart2: 'UNMATCHED GRANDEUR.',
//     description: 'A magnificent master-planned urban premium gated township featuring spectacular architectural design and curated elite lifestyles.',
//     image: '/src/assets/images/unicon_sugarland_1784530533374.jpg',
//     accentColor: '#dfb776'
//   },
//   {
//     id: 3,
//     numberStr: '03',
//     subtitle: 'COMPLETED CLASSICS',
//     titlePart1: 'TIMELESS ENCLAVES.',
//     titlePart2: 'PRISTINE GREENS.',
//     description: 'Experience pure architectural sincerity ready to move-in at Ayanur Enclave and Dharithri Greens—meticulously crafted to stand for generations.',
//     image: '/src/assets/images/ayanur_enclave_1784530552100.jpg',
//     accentColor: '#9e753b'
//   }
// ];

// export default function HeroSection({
//   onExploreProjects,
//   onDiscoverMore,
//   onWatchVideo
// }) {
//   const [activeSlide, setActiveSlide] = useState(0);

//   // Auto-slide carousel every 7 seconds unless interacted
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
//     }, 7000);
//     return () => clearInterval(timer);
//   }, []);

//   const currentAccent = carouselSlides[activeSlide].accentColor;

//   return (
//     <main 
//       id="hero-core-container" 
//       className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-6 relative z-10 flex flex-col justify-center bg-red-900"
//       style={{
//         '--accent': currentAccent,
//         '--accent-80': `${currentAccent}cc`,
//         '--accent-50': `${currentAccent}80`,
//         '--accent-40': `${currentAccent}66`,
//         '--accent-20': `${currentAccent}33`,
//         '--accent-10': `${currentAccent}1a`,
//       }}
//     >
      
//       <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
//         {/* Left Hero Text Block (Col-span 5) */}
//         <div id="hero-text-block" className="lg:col-span-5 space-y-6 sm:space-y-8 relative">
          
//           {/* Slide Indicator Bar & Bullet system on Left margin */}
//           <div className="absolute left-[-24px] sm:left-[-40px] top-[15%] h-[70%] hidden md:flex flex-col items-center justify-between">
//             <div className="text-[10px] font-mono font-bold tracking-widest text-stone-500">MRCL</div>
//             <div className="flex flex-col items-center space-y-4 my-4">
//               {carouselSlides.map((slide, index) => (
//                 <button
//                   key={slide.id}
//                   onClick={() => setActiveSlide(index)}
//                   className="group flex flex-col items-center focus:outline-none cursor-pointer"
//                 >
//                   <span 
//                     className="text-[10px] font-mono font-bold tracking-widest transition-colors duration-300"
//                     style={{
//                       color: activeSlide === index ? 'var(--accent)' : '#78716c'
//                     }}
//                   >
//                     {slide.numberStr}
//                   </span>
//                   <div 
//                     className="w-[2px] transition-all duration-300"
//                     style={{
//                       height: activeSlide === index ? '40px' : '32px',
//                       backgroundColor: activeSlide === index ? 'var(--accent)' : '#292524',
//                       marginTop: '6px',
//                       marginBottom: '6px'
//                     }}
//                   />
//                 </button>
//               ))}
//             </div>
//             <div className="text-[10px] font-mono font-bold text-stone-500">2026</div>
//           </div>

//           {/* Slide Content */}
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeSlide}
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               exit={{ opacity: 0, x: 20 }}
//               transition={{ duration: 0.55, ease: 'easeOut' }}
//               className="space-y-4 sm:space-y-5"
//             >
//               {/* Crown badge */}
//               <div className="flex items-center space-x-2 text-[var(--accent)]">
//                 <Crown 
//                   className="w-5 h-5"
//                   style={{ filter: `drop-shadow(0 0 8px ${currentAccent}80)` }}
//                 />
//                 <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] font-bold uppercase text-[var(--accent)]">
//                   {carouselSlides[activeSlide].subtitle}
//                 </span>
//               </div>

//               {/* Main Heading (Luxury Serif paired with golden gradient) */}
//               <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-serif leading-[1.12] tracking-normal">
//                 <span 
//                   className="block font-semibold transition-colors duration-500"
//                   style={{ color: 'var(--accent)' }}
//                 >
//                   {carouselSlides[activeSlide].titlePart1}
//                 </span>
//                 <span className="text-white block mt-1 font-medium tracking-tight">
//                   {carouselSlides[activeSlide].titlePart2}
//                 </span>
//               </h1>

//               {/* Golden horizontal ornament accent line */}
//               <div className="flex items-center space-x-3 py-1">
//                 <div 
//                   className="h-[1px] w-12 bg-gradient-to-r" 
//                   style={{ backgroundImage: `linear-gradient(to right, ${currentAccent}, transparent)` }}
//                 />
//                 <div 
//                   className="w-1.5 h-1.5 rounded-full" 
//                   style={{ backgroundColor: currentAccent }}
//                 />
//                 <div 
//                   className="h-[1px] w-12 bg-gradient-to-l" 
//                   style={{ backgroundImage: `linear-gradient(to left, ${currentAccent}, transparent)` }}
//                 />
//               </div>

//               {/* Subtitle / Description */}
//               <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans max-w-lg">
//                 {carouselSlides[activeSlide].description}
//               </p>

//               {/* Interactive Action Buttons */}
//               <div className="flex flex-wrap gap-4 pt-2">
//                 <button
//                   onClick={onExploreProjects}
//                   className="px-6 py-3.5 rounded-lg text-stone-950 text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2.5 group cursor-pointer"
//                   style={{
//                     backgroundImage: `linear-gradient(to right, ${currentAccent}, ${currentAccent}dd)`,
//                     boxShadow: `0 4px 20px ${currentAccent}40`
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.boxShadow = `0 4px 30px ${currentAccent}80`;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.boxShadow = `0 4px 20px ${currentAccent}40`;
//                   }}
//                 >
//                   <span>EXPLORE PROJECTS</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>

//                 <button
//                   onClick={onDiscoverMore}
//                   className="px-6 py-3.5 rounded-lg bg-transparent text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 group cursor-pointer"
//                   style={{
//                     border: `1px solid ${currentAccent}80`,
//                     color: currentAccent
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.borderColor = currentAccent;
//                     e.currentTarget.style.color = '#ffffff';
//                     e.currentTarget.style.backgroundColor = `${currentAccent}1a`;
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.borderColor = `${currentAccent}80`;
//                     e.currentTarget.style.color = currentAccent;
//                     e.currentTarget.style.backgroundColor = 'transparent';
//                   }}
//                 >
//                   <span>DISCOVER MORE</span>
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//                 </button>
//               </div>
//             </motion.div>
//           </AnimatePresence>

//         </div>

//         {/* Right Hero Image Frame (Col-span 7) */}
//         <div id="hero-image-frame" className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[520px] xl:h-[560px] flex items-center justify-end">
          
//           {/* The sweeping curved decorative outline border behind image */}
//           <div 
//             className="absolute inset-0 right-[-5%] w-[105%] h-full rounded-l-[200px] sm:rounded-l-[300px] lg:rounded-l-[380px] xl:rounded-l-[440px] border-l-4 border-t-2 border-b-2 pointer-events-none z-10 transition-colors duration-500" 
//             style={{
//               borderColor: `${currentAccent}66`,
//               boxShadow: `0 0 50px ${currentAccent}22`
//             }}
//           />
          
//           {/* Golden glowing arc light */}
//           <div 
//             className="absolute top-[5%] left-[2%] w-[2px] h-[90%] z-15 blur-[1px] transition-all duration-500" 
//             style={{
//               backgroundImage: `linear-gradient(to bottom, transparent, ${currentAccent}99, transparent)`
//             }}
//           />

//           {/* Inner frame containing image carousel with luxury crossfade and zoom */}
//           <div className="relative w-[95%] lg:w-[100%] h-full overflow-hidden rounded-l-[180px] sm:rounded-l-[280px] lg:rounded-l-[360px] xl:rounded-l-[420px] bg-[#120204] z-0 shadow-2xl">
            
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSlide}
//                 initial={{ opacity: 0, scale: 1.05 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 1.05 }}
//                 transition={{ duration: 0.8, ease: 'easeInOut' }}
//                 className="w-full h-full relative"
//               >
//                 <img
//                   src={carouselSlides[activeSlide].image}
//                   alt="MRCL Premium Luxury Real Estate Landmark"
//                   referrerPolicy="no-referrer"
//                   className="w-full h-full object-cover select-none"
//                 />
//                 {/* Dark warm vignette shadows */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-[#120204]/80 via-[#120204]/10 to-transparent z-10" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#120204] via-transparent to-transparent opacity-80 z-10" />
//               </motion.div>
//             </AnimatePresence>

//             {/* Watch Video CTA overlaid on image */}
//             <div className="absolute top-10 right-10 sm:top-16 sm:right-16 z-25 flex items-center space-x-4">
//               <button
//                 onClick={onWatchVideo}
//                 className="relative group cursor-pointer flex items-center justify-center"
//                 aria-label="Watch Cinematic Tour Video"
//               >
//                 {/* Glowing pulses */}
//                 <div 
//                   className="absolute w-14 h-14 rounded-full border animate-ping group-hover:scale-125 duration-1000" 
//                   style={{ borderColor: `${currentAccent}66` }}
//                 />
//                 <div 
//                   className="absolute w-16 h-16 rounded-full border animate-pulse" 
//                   style={{ borderColor: `${currentAccent}33` }}
//                 />
                
//                 {/* Golden Play Container */}
//                 <div 
//                   className="relative w-14 h-14 rounded-full text-stone-950 flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all"
//                   style={{
//                     backgroundImage: `linear-gradient(to bottom right, ${currentAccent}, ${currentAccent}bb)`
//                   }}
//                 >
//                   <Play className="w-5 h-5 fill-current ml-1" />
//                 </div>
//               </button>

//               {/* Caption text */}
//               <div className="flex flex-col text-left">
//                 <span 
//                   className="font-sans text-xs tracking-wider font-bold"
//                   style={{ color: currentAccent }}
//                 >
//                   WATCH VIDEO
//                 </span>
//                 <span className="text-stone-300 font-serif text-[10px] sm:text-xs tracking-wide leading-tight mt-0.5">
//                   Experience Luxury Living
//                 </span>
//               </div>
//             </div>

//           </div>

//         </div>

//       </div>

//     </main>
//   );
// }

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Play, ArrowRight } from 'lucide-react';
import SugarlandImg from "../../assets/sugarland-unicorn/12.jpg"
import SylvanImg from "../../assets/sylvan-woods/banner2.webp"
import SugarlandImg2 from "../../assets/sugarland-unicorn/14.jpg"

const carouselSlides = [
  {
    id: 1,
    numberStr: '01',
    subtitle: 'PREMIUM TOWNSHIP CONCEPT',
    titlePart1: 'UNICON SUGARLAND.',
    titlePart2: 'UNMATCHED GRANDEUR.',
    description: 'A magnificent master-planned urban premium gated township featuring spectacular architectural design and curated elite lifestyles.',
    //image: '/src/assets/images/unicon_sugarland_1784530533374.jpg',
    image: SugarlandImg,
    accentColor: '#dfb776'
  },
  {
    id: 2,
    numberStr: '02',
    subtitle: 'ONGOING MASTERWORKS',
    titlePart1: 'SYLVAN WOODS.',
    titlePart2: 'ECO-LUXURY LIVING.',
    description: 'A breathtaking forest-facing residential sanctuary where deep majestic evergreens meet state-of-the-art bespoke villa construction.',
    //image: '/src/assets/images/sylvan_woods_1784530512722.jpg',
    image: SylvanImg,
    accentColor: '#cfa86b'
  },
  
  {
    id: 3,
    numberStr: '03',
    subtitle: 'COMPLETED CLASSICS',
    titlePart1: 'TIMELESS ENCLAVES.',
    titlePart2: 'DHARITHRI GREENS.',
    description: 'Experience pure architectural sincerity ready to move-in at Ayanur Enclave and Dharithri Greens—meticulously crafted to stand for generations.',
    //image: '/src/assets/images/ayanur_enclave_1784530552100.jpg',
    image: SugarlandImg2,
    accentColor: '#9e753b'
  }
];

export default function HeroSection({
  onExploreProjects,
  onDiscoverMore,
  onWatchVideo
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide carousel every 7 seconds unless interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentAccent = carouselSlides[activeSlide].accentColor;

  // Custom luxury metallic text gradients for each slide
  const getAccentGradient = (color) => {
    if (color === '#cfa86b') {
      return 'linear-gradient(135deg, #f5ecd7 0%, #dfb776 30%, #cfa86b 70%, #9e753b 100%)';
    } else if (color === '#dfb776') {
      return 'linear-gradient(135deg, #fff7ed 0%, #fcd34d 30%, #dfb776 70%, #b45309 100%)';
    } else {
      return 'linear-gradient(135deg, #f3dcb3 0%, #d5a35c 30%, #9e753b 70%, #634316 100%)';
    }
  };

  // Custom primary action button gradients matching each theme
  const getButtonGradient = (color) => {
    if (color === '#cfa86b') {
      return 'linear-gradient(to right, #dfb776, #cfa86b)';
    } else if (color === '#dfb776') {
      return 'linear-gradient(to right, #fcd34d, #dfb776)';
    } else {
      return 'linear-gradient(to right, #d5a35c, #9e753b)';
    }
  };

  return (
    <main 
      id="hero-core-container" 
      className="flex-1 w-full pt-32 pb-6 relative z-10 flex flex-col justify-center overflow-hidden bg-burgundy-glow"
      style={{
        '--accent': currentAccent,
        '--accent-80': `${currentAccent}cc`,
        '--accent-50': `${currentAccent}80`,
        '--accent-40': `${currentAccent}66`,
        '--accent-20': `${currentAccent}33`,
        '--accent-10': `${currentAccent}1a`,
      }}
    >
      {/* Dynamic luxury background glow that updates as slides transition */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[120px] sm:blur-[160px] opacity-[0.12] pointer-events-none transition-all duration-[1200ms] ease-in-out z-0"
        style={{
          background: `radial-gradient(circle, ${currentAccent} 0%, transparent 70%)`
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Hero Text Block (Col-span 5) */}
        <div id="hero-text-block" className="lg:col-span-5 space-y-6 sm:space-y-8 relative ml-4">
          
          {/* Slide Indicator Bar & Bullet system on Left margin */}
          <div className="absolute left-[-24px] sm:left-[-40px] top-[15%] h-[70%] hidden md:flex flex-col items-center justify-between">
            <div className="text-[10px] font-mono font-bold tracking-widest text-stone-500">MRCL</div>
            <div className="flex flex-col items-center space-y-4 my-4">
              {carouselSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  className="group flex flex-col items-center focus:outline-none cursor-pointer"
                >
                  <span 
                    className="text-[10px] font-mono font-bold tracking-widest transition-colors duration-300"
                    style={{
                      color: activeSlide === index ? 'var(--accent)' : '#78716c'
                    }}
                  >
                    {slide.numberStr}
                  </span>
                  <div 
                    className="w-[2px] transition-all duration-300"
                    style={{
                      height: activeSlide === index ? '40px' : '32px',
                      backgroundColor: activeSlide === index ? 'var(--accent)' : '#292524',
                      marginTop: '6px',
                      marginBottom: '6px'
                    }}
                  />
                </button>
              ))}
            </div>
            <div className="text-[10px] font-mono font-bold text-stone-500">2026</div>
          </div>

          {/* Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Crown badge */}
              <div className="flex items-center space-x-2 text-[var(--accent)]">
                <Crown 
                  className="w-5 h-5"
                  style={{ filter: `drop-shadow(0 0 8px ${currentAccent}80)` }}
                />
                <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] font-bold uppercase text-[var(--accent)]">
                  {carouselSlides[activeSlide].subtitle}
                </span>
              </div>

              {/* Main Heading (Luxury Serif paired with golden gradient) */}
              <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-serif leading-[1.12] tracking-normal">
                <span 
                  className="block font-semibold transition-all duration-500"
                  style={{ 
                    background: getAccentGradient(currentAccent),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  {carouselSlides[activeSlide].titlePart1}
                </span>
                <span className="text-white block mt-1 font-medium tracking-tight">
                  {carouselSlides[activeSlide].titlePart2}
                </span>
              </h1>

              {/* Golden horizontal ornament accent line */}
              <div className="flex items-center space-x-3 py-1">
                <div 
                  className="h-[1px] w-12 bg-gradient-to-r" 
                  style={{ backgroundImage: `linear-gradient(to right, ${currentAccent}, transparent)` }}
                />
                <div 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: currentAccent }}
                />
                <div 
                  className="h-[1px] w-12 bg-gradient-to-l" 
                  style={{ backgroundImage: `linear-gradient(to left, ${currentAccent}, transparent)` }}
                />
              </div>

              {/* Subtitle / Description */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans max-w-lg">
                {carouselSlides[activeSlide].description}
              </p>

              {/* Interactive Action Buttons */}
              {/* <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onExploreProjects}
                  className="px-6 py-3.5 rounded-lg text-stone-950 text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2.5 group cursor-pointer"
                  style={{
                    backgroundImage: getButtonGradient(currentAccent),
                    boxShadow: `0 4px 20px ${currentAccent}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 30px ${currentAccent}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 20px ${currentAccent}40`;
                  }}
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onDiscoverMore}
                  className="px-6 py-3.5 rounded-lg bg-transparent text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 group cursor-pointer"
                  style={{
                    border: `1px solid ${currentAccent}80`,
                    color: currentAccent
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = currentAccent;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.backgroundColor = `${currentAccent}1a`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${currentAccent}80`;
                    e.currentTarget.style.color = currentAccent;
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div> */}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Right Hero Image Frame (Col-span 7) */}
        <div id="hero-image-frame" className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[520px] xl:h-[560px] flex items-center justify-end">
          
          {/* The sweeping curved decorative outline border behind image */}
          <div 
            className="absolute inset-0 right-[-5%] w-[105%] h-full rounded-l-[200px] sm:rounded-l-[300px] lg:rounded-l-[380px] xl:rounded-l-[440px] border-l-4 border-t-2 border-b-2 pointer-events-none z-10 transition-colors duration-500" 
            style={{
              borderColor: `${currentAccent}66`,
              boxShadow: `0 0 50px ${currentAccent}22`
            }}
          />
          
          {/* Golden glowing arc light */}
          <div 
            className="absolute top-[5%] left-[2%] w-[2px] h-[90%] z-15 blur-[1px] transition-all duration-500" 
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, ${currentAccent}99, transparent)`
            }}
          />

          {/* Inner frame containing image carousel with luxury crossfade and zoom */}
          <div className="relative w-[95%] lg:w-[100%] h-full overflow-hidden rounded-l-[180px] sm:rounded-l-[280px] lg:rounded-l-[360px] xl:rounded-l-[420px] bg-[#120204] z-0 shadow-2xl">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="w-full h-full relative"
              >
                <img
                  src={carouselSlides[activeSlide].image}
                  alt="MRCL Premium Luxury Real Estate Landmark"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
                {/* Dark warm vignette shadows */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#120204]/80 via-[#120204]/10 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120204] via-transparent to-transparent opacity-80 z-10" />
              </motion.div>
            </AnimatePresence>

            
          </div>

        </div>

      </div>
      </div>

    </main>
  );
}
