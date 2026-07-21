// import { useState, useEffect } from 'react';
// import { motion } from 'motion/react';
// import { ChevronLeft, ChevronRight, Star, ShieldCheck, Crown } from 'lucide-react';
// import { TESTIMONIALS } from '../../data';

// export default function Testimonial() {
//   const [cards, setCards] = useState([0, 1, 2]);
//   const [swipingCard, setSwipingCard] = useState(null);
//   const [swipeDirection, setSwipeDirection] = useState('right');

//   // Specific community styling details for our premium residents
//   const testConfig = [
//     {
//       initials: 'RP',
//       color: 'bg-brand-red-950 text-gold-300',
//       community: 'MRCL Serenity',
//       tag: 'SERENITY VILLA 14',
//     },
//     {
//       initials: 'AS',
//       color: 'bg-amber-950 text-gold-200',
//       community: 'MRCL Prestige',
//       tag: 'PRESTIGE ESTATE 07',
//     },
//     {
//       initials: 'SP',
//       color: 'bg-neutral-900 text-gold-300',
//       community: 'MRCL Elite',
//       tag: 'ELITE MANOR 02',
//     },
//   ];

//   const handleNext = () => {
//     if (swipingCard !== null) return;
//     setSwipeDirection('right');
//     setSwipingCard(cards[0]);
//     setTimeout(() => {
//       setCards((prev) => [...prev.slice(1), prev[0]]);
//       setSwipingCard(null);
//     }, 350);
//   };

//   const handlePrev = () => {
//     if (swipingCard !== null) return;
//     setSwipeDirection('left');
//     setSwipingCard(cards[0]);
//     setTimeout(() => {
//       setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
//       setSwipingCard(null);
//     }, 350);
//   };

//   // Auto-slide every 9 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 9000);
//     return () => clearInterval(interval);
//   }, [cards, swipingCard]);

//   return (
//     <section id="testimonials" className="relative py-24 md:py-32 bg-gold-100/35 overflow-hidden border-y border-gold-300/20">
//       {/* High-luxury background blur ornaments */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-200/20 blur-[130px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-300/10 blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Curated Editorial Header */}
//         <div className="text-center space-y-4 mb-16">
//           <div className="flex items-center justify-center gap-2">
//             <Star className="w-4 h-4 fill-current text-gold-500" />
//             <span className="font-sans text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase">
//               TESTIMONIALS
//             </span>
//           </div>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-red-950 leading-none">
//             TRUSTED BY FOUNDERS <br />
//             <span className="font-bold text-gold-600 uppercase">BACKED BY RESULTS</span>
//           </h2>
//           <p className="text-neutral-500 text-xs sm:text-sm tracking-wide font-sans">
//             Results that speak through builder fidelity and genuine resident experiences.
//           </p>
//           <div className="w-20 h-[1px] bg-gold-600/30 mx-auto mt-4" />
//         </div>

//         {/* Central Deck Container */}
//         <div className="relative flex flex-col items-center justify-center">
          
//           {/* Card Stack Deck */}
//           <div className="relative w-full max-w-[480px] h-[360px] flex items-center justify-center select-none">
//             {cards.map((idx, position) => {
//               const testimonial = TESTIMONIALS[idx];
//               const config = testConfig[idx];
//               const isSwiping = idx === swipingCard;

//               // Compute stacking layers
//               // Position 0 = Top, Position 1 = Middle, Position 2 = Bottom
//               let zIndex = 30 - position * 10;
//               let scale = 1 - position * 0.05;
//               let yOffset = position * 18;
//               let xOffset = 0;
//               let rotate = 0;
//               let opacity = 1 - position * 0.15;

//               // Organic fan-out offsets to mimic physical cards piled on top
//               if (position === 1) {
//                 rotate = -3;
//                 xOffset = -8;
//               } else if (position === 2) {
//                 rotate = 3;
//                 xOffset = 8;
//               }

//               // Dynamic styles when swiping out of view
//               if (isSwiping) {
//                 zIndex = 40;
//                 opacity = 0;
//                 xOffset = swipeDirection === 'right' ? 380 : -380;
//                 yOffset = -10;
//                 rotate = swipeDirection === 'right' ? 12 : -12;
//               }

//               return (
//                 <motion.div
//                   key={testimonial.id}
//                   style={{ zIndex }}
//                   animate={{
//                     x: xOffset,
//                     y: yOffset,
//                     scale,
//                     rotate,
//                     opacity,
//                   }}
//                   transition={{
//                     type: 'spring',
//                     stiffness: 260,
//                     damping: 24,
//                     mass: 1,
//                   }}
//                   onClick={position === 0 ? handleNext : undefined}
//                   className={`absolute w-full max-w-[430px] sm:max-w-[460px] bg-white rounded-2xl p-6 sm:p-8 border border-gold-400/15 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col justify-between h-[310px] sm:h-[320px] ${
//                     position === 0 ? 'cursor-pointer' : 'pointer-events-none'
//                   }`}
//                 >
//                   {/* Badge Strap Slot Cutout */}
//                   <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-neutral-950/15 rounded-full z-20" />

//                   {/* Physical Clip & Strap Connector */}
//                   <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
//                     {/* Clear transparent loop */}
//                     <div className="w-5 h-10 bg-neutral-100/40 border border-neutral-300/50 rounded-b-md shadow-sm relative" />
//                     {/* Silver metallic snap button */}
//                     <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-400 absolute bottom-1 border border-gray-400 shadow-sm flex items-center justify-center">
//                       <div className="w-1 h-1 rounded-full bg-gray-600" />
//                     </div>
//                   </div>

//                   {/* Metal Badge Clip hanging at the very top */}
//                   <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-40 w-12 h-5 bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-500 border border-neutral-300/60 rounded-sm shadow-md flex items-center justify-center">
//                     <div className="w-8 h-[2px] bg-neutral-400/40 rounded-full" />
//                   </div>

//                   {/* Badge Header Area */}
//                   <div>
//                     <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-5 mt-1">
//                       <div className="flex items-center gap-1.5">
//                         <Crown className="w-3.5 h-3.5 text-gold-500" />
//                         <span className="font-serif text-[10px] font-bold tracking-widest text-brand-red-950 uppercase">
//                           {config.community}
//                         </span>
//                       </div>
//                       <div className="px-2.5 py-0.5 border border-gold-400/20 bg-gold-500/5 rounded-full">
//                         <span className="font-sans text-[8px] tracking-wider text-gold-700 font-bold uppercase">
//                           {config.tag}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Testimonial Quote body */}
//                     <div className="relative pl-3">
//                       <div className="absolute -top-2 -left-1 text-4xl text-gold-400/10 font-serif leading-none pointer-events-none select-none">
//                         “
//                       </div>
//                       <p className="font-serif text-xs sm:text-[13px] text-neutral-800 leading-relaxed italic relative z-10">
//                         "{testimonial.quote}"
//                       </p>
//                     </div>
//                   </div>

//                   {/* Badge Footer Area */}
//                   <div className="flex items-center justify-between border-t border-neutral-100 pt-4 mt-auto">
//                     <div className="flex items-center gap-3">
//                       {/* Monogram emblem avatar */}
//                       <div className={`w-11 h-11 rounded-full flex items-center justify-center font-serif text-sm font-bold shadow-md ${config.color}`}>
//                         {config.initials}
//                       </div>
                      
//                       <div className="text-left">
//                         <h4 className="font-serif text-xs font-bold text-neutral-900 tracking-wide uppercase">
//                           {testimonial.author}
//                         </h4>
//                         <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mt-0.5 font-medium">
//                           {testimonial.role}
//                         </span>
//                       </div>
//                     </div>

//                     {/* Quality Assurance emblem */}
//                     <div className="p-2 rounded-lg bg-gold-500/5 border border-gold-400/20">
//                       <ShieldCheck className="w-4 h-4 text-gold-600" />
//                     </div>
//                   </div>

//                 </motion.div>
//               );
//             })}
//           </div>

//           {/* Navigation Controls */}
//           <div className="flex items-center justify-center gap-6 mt-6 z-30">
//             <button
//               onClick={handlePrev}
//               className="cursor-pointer w-11 h-11 rounded-full border border-gold-500/30 hover:border-gold-500 flex items-center justify-center bg-white hover:bg-gold-500 hover:text-brand-red-950 text-gold-700 shadow-md active:scale-95 transition-all duration-300"
//               aria-label="Previous testimonial"
//             >
//               <ChevronLeft className="w-5 h-5" />
//             </button>

//             {/* Micro Dot Pagination */}
//             <div className="flex items-center gap-2">
//               {TESTIMONIALS.map((_, idx) => {
//                 const isActive = cards[0] === idx;
//                 return (
//                   <button
//                     key={idx}
//                     onClick={() => {
//                       if (swipingCard !== null) return;
//                       const currentTop = cards[0];
//                       if (currentTop === idx) return;
//                       setSwipeDirection(idx > currentTop ? 'right' : 'left');
//                       setSwipingCard(currentTop);
//                       setTimeout(() => {
//                         setCards((prev) => {
//                           const idxPos = prev.indexOf(idx);
//                           return [...prev.slice(idxPos), ...prev.slice(0, idxPos)];
//                         });
//                         setSwipingCard(null);
//                       }, 350);
//                     }}
//                     className={`cursor-pointer h-2 rounded-full transition-all duration-500 ${
//                       isActive ? 'w-8 bg-gold-600' : 'w-2 bg-neutral-300 hover:bg-gold-400'
//                     }`}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 );
//               })}
//             </div>

//             <button
//               onClick={handleNext}
//               className="cursor-pointer w-11 h-11 rounded-full border border-gold-500/30 hover:border-gold-500 flex items-center justify-center bg-white hover:bg-gold-500 hover:text-brand-red-950 text-gold-700 shadow-md active:scale-95 transition-all duration-300"
//               aria-label="Next testimonial"
//             >
//               <ChevronRight className="w-5 h-5" />
//             </button>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, Crown } from 'lucide-react';
import { TESTIMONIALS } from '../../data';

export default function Testimonial() {
  const [cards, setCards] = useState([0, 1, 2]);
  const [swipingCard, setSwipingCard] = useState(null);
  const [swipeDirection, setSwipeDirection] = useState('right');

  // Specific community styling details for our premium residents
  const testConfig = [
    {
      initials: 'RP',
      color: 'bg-brand-red-950 text-gold-300',
      community: 'MRCL Serenity',
      tag: 'SERENITY VILLA 14',
    },
    {
      initials: 'AS',
      color: 'bg-amber-950 text-gold-200',
      community: 'MRCL Prestige',
      tag: 'PRESTIGE ESTATE 07',
    },
    {
      initials: 'SP',
      color: 'bg-neutral-900 text-gold-300',
      community: 'MRCL Elite',
      tag: 'ELITE MANOR 02',
    },
  ];

  const handleNext = () => {
    if (swipingCard !== null) return;
    setSwipeDirection('right');
    setSwipingCard(cards[0]);
    setTimeout(() => {
      setCards((prev) => [...prev.slice(1), prev[0]]);
      setSwipingCard(null);
    }, 350);
  };

  const handlePrev = () => {
    if (swipingCard !== null) return;
    setSwipeDirection('left');
    setSwipingCard(cards[0]);
    setTimeout(() => {
      setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);
      setSwipingCard(null);
    }, 350);
  };

  // Auto-slide every 9 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 9000);
    return () => clearInterval(interval);
  }, [cards, swipingCard]);

  return (
    <section id="testimonials" className="relative py-24 md:py-32 bg-gradient-to-b from-[#fffdf9] via-[#FAF6F0] to-[#F4EFE6] overflow-hidden border-y border-[#c5a85c]/25">
      {/* Exquisite luxury diamond lattice pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.18] pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23c5a85c' stroke-width='1'/%3E%3Ccircle cx='30' cy='30' r='1.5' fill='%23c5a85c'/%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* High-luxury background blur ornaments */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c5a85c]/15 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8c1c24]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curated Editorial Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center gap-2">
            <Star className="w-4 h-4 fill-current text-gold-500" />
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-gold-600 uppercase">
              TESTIMONIALS
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-red-950 leading-none">
            TRUSTED BY FOUNDERS <br />
            <span className="font-bold text-gold-600 uppercase">BACKED BY RESULTS</span>
          </h2>
          <p className="text-neutral-500 text-xs sm:text-sm tracking-wide font-sans">
            Results that speak through builder fidelity and genuine resident experiences.
          </p>
          <div className="w-20 h-[1px] bg-gold-600/30 mx-auto mt-4" />
        </div>

        {/* Central Deck Container */}
        <div className="relative flex flex-col items-center justify-center">
          
          {/* Card Stack Deck */}
          <div className="relative w-full max-w-[480px] h-[360px] flex items-center justify-center select-none">
            {cards.map((idx, position) => {
              const testimonial = TESTIMONIALS[idx];
              const config = testConfig[idx];
              const isSwiping = idx === swipingCard;

              // Compute stacking layers
              // Position 0 = Top, Position 1 = Middle, Position 2 = Bottom
              let zIndex = 30 - position * 10;
              let scale = 1 - position * 0.05;
              let yOffset = position * 18;
              let xOffset = 0;
              let rotate = 0;
              let opacity = 1 - position * 0.15;

              // Organic fan-out offsets to mimic physical cards piled on top
              if (position === 1) {
                rotate = -3;
                xOffset = -8;
              } else if (position === 2) {
                rotate = 3;
                xOffset = 8;
              }

              // Dynamic styles when swiping out of view
              if (isSwiping) {
                zIndex = 40;
                opacity = 0;
                xOffset = swipeDirection === 'right' ? 380 : -380;
                yOffset = -10;
                rotate = swipeDirection === 'right' ? 12 : -12;
              }

              return (
                <motion.div
                  key={testimonial.id}
                  style={{ zIndex }}
                  animate={{
                    x: xOffset,
                    y: yOffset,
                    scale,
                    rotate,
                    opacity,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 260,
                    damping: 24,
                    mass: 1,
                  }}
                  onClick={position === 0 ? handleNext : undefined}
                  className={`absolute w-full max-w-[430px] sm:max-w-[460px] bg-white rounded-2xl p-6 sm:p-8 border border-gold-400/15 shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col justify-between h-[310px] sm:h-[320px] ${
                    position === 0 ? 'cursor-pointer' : 'pointer-events-none'
                  }`}
                >
                  {/* Badge Strap Slot Cutout */}
                  <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-8 h-2 bg-neutral-950/15 rounded-full z-20" />

                  {/* Physical Clip & Strap Connector */}
                  <div className="absolute -top-7 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
                    {/* Clear transparent loop */}
                    <div className="w-5 h-10 bg-neutral-100/40 border border-neutral-300/50 rounded-b-md shadow-sm relative" />
                    {/* Silver metallic snap button */}
                    <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-gray-500 via-gray-300 to-gray-400 absolute bottom-1 border border-gray-400 shadow-sm flex items-center justify-center">
                      <div className="w-1 h-1 rounded-full bg-gray-600" />
                    </div>
                  </div>

                  {/* Metal Badge Clip hanging at the very top */}
                  <div className="absolute -top-11 left-1/2 -translate-x-1/2 z-40 w-12 h-5 bg-gradient-to-r from-neutral-400 via-neutral-100 to-neutral-500 border border-neutral-300/60 rounded-sm shadow-md flex items-center justify-center">
                    <div className="w-8 h-[2px] bg-neutral-400/40 rounded-full" />
                  </div>

                  {/* Badge Header Area */}
                  <div>
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-3 mb-5 mt-1">
                      <div className="flex items-center gap-1.5">
                        <Crown className="w-3.5 h-3.5 text-gold-500" />
                        <span className="font-serif text-[10px] font-bold tracking-widest text-brand-red-950 uppercase">
                          {config.community}
                        </span>
                      </div>
                      <div className="px-2.5 py-0.5 border border-gold-400/20 bg-gold-500/5 rounded-full">
                        <span className="font-sans text-[8px] tracking-wider text-gold-700 font-bold uppercase">
                          {config.tag}
                        </span>
                      </div>
                    </div>

                    {/* Testimonial Quote body */}
                    <div className="relative pl-3">
                      <div className="absolute -top-2 -left-1 text-4xl text-gold-400/10 font-serif leading-none pointer-events-none select-none">
                        “
                      </div>
                      <p className="font-serif text-xs sm:text-[13px] text-neutral-800 leading-relaxed italic relative z-10">
                        "{testimonial.quote}"
                      </p>
                    </div>
                  </div>

                  {/* Badge Footer Area */}
                  <div className="flex items-center justify-between border-t border-neutral-100 pt-4 mt-auto">
                    <div className="flex items-center gap-3">
                      {/* Monogram emblem avatar */}
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center font-serif text-sm font-bold shadow-md ${config.color}`}>
                        {config.initials}
                      </div>
                      
                      <div className="text-left">
                        <h4 className="font-serif text-xs font-bold text-neutral-900 tracking-wide uppercase">
                          {testimonial.author}
                        </h4>
                        <span className="text-[10px] text-neutral-500 uppercase tracking-widest block mt-0.5 font-medium">
                          {testimonial.role}
                        </span>
                      </div>
                    </div>

                    {/* Quality Assurance emblem */}
                    <div className="p-2 rounded-lg bg-gold-500/5 border border-gold-400/20">
                      <ShieldCheck className="w-4 h-4 text-gold-600" />
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-6 z-30">
            <button
              onClick={handlePrev}
              className="cursor-pointer w-11 h-11 rounded-full border border-gold-500/30 hover:border-gold-500 flex items-center justify-center bg-white hover:bg-gold-500 hover:text-brand-red-950 text-gold-700 shadow-md active:scale-95 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Micro Dot Pagination */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => {
                const isActive = cards[0] === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (swipingCard !== null) return;
                      const currentTop = cards[0];
                      if (currentTop === idx) return;
                      setSwipeDirection(idx > currentTop ? 'right' : 'left');
                      setSwipingCard(currentTop);
                      setTimeout(() => {
                        setCards((prev) => {
                          const idxPos = prev.indexOf(idx);
                          return [...prev.slice(idxPos), ...prev.slice(0, idxPos)];
                        });
                        setSwipingCard(null);
                      }, 350);
                    }}
                    className={`cursor-pointer h-2 rounded-full transition-all duration-500 ${
                      isActive ? 'w-8 bg-gold-600' : 'w-2 bg-neutral-300 hover:bg-gold-400'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                );
              })}
            </div>

            <button
              onClick={handleNext}
              className="cursor-pointer w-11 h-11 rounded-full border border-gold-500/30 hover:border-gold-500 flex items-center justify-center bg-white hover:bg-gold-500 hover:text-brand-red-950 text-gold-700 shadow-md active:scale-95 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
