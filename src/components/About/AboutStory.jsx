// import React from 'react';
// import { motion } from 'motion/react';
// import { ChevronRight, Award, HeartHandshake, Compass, Clock } from 'lucide-react';
// import {useNavigate} from 'react-router-dom';

// export default function AboutStory({ onOpenContact }) {

//     const navigate = useNavigate();
//     const handleNavigate = () => {
//         navigate('/about');
//     }
//   return (
//     <section className="py-20 bg-[#faf7f0]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left text block */}
//           <div className="lg:col-span-6 space-y-6">
            
//             <div className="flex items-center gap-2">
//               <div className="h-[1px] w-6 bg-gold-500" />
//               <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
//                 OUR STORY
//               </span>
//               <div className="h-[1px] w-6 bg-gold-500" />
//             </div>

//             <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
//               Built on Trust.<br />
//               Driven by <span className="font-semibold text-brand-red-800">Excellence.</span>
//             </h2>

//             <p className="text-neutral-700 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl">
//               MRCL Infrastructure was founded with a vision to create world-class living spaces that blend luxury, comfort, and functionality. Over the years, we have grown into a trusted name in real estate, delivering outstanding projects that stand the test of time.
//             </p>

//             {/* Special custom button matching mockup */}
//             <div className="pt-4 flex justify-start">
//               <button
//                 onClick={() => navigate('/contact')}
//                 className="group cursor-pointer flex items-center justify-between bg-brand-red-900 hover:bg-brand-red-950 text-white font-sans text-xs font-bold tracking-[0.15em] pl-6 pr-2 py-2 rounded-md transition-all duration-300 shadow-xl hover:shadow-brand-red-900/10 active:scale-95"
//               >
//                 <span>KNOW MORE ABOUT US</span>
//                 <div className="ml-4 p-2 bg-gold-400 group-hover:bg-gold-500 text-brand-red-950 rounded-md transition-colors duration-300">
//                   <ChevronRight className="w-4 h-4" />
//                 </div>
//               </button>
//             </div>
//           </div>

//           {/* Right dark-red card with 2x2 pillars */}
//           <div className="lg:col-span-6">
//             <motion.div
//               initial={{ opacity: 0, scale: 0.95 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="relative bg-brand-red-950 border border-gold-400/30 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
//             >
//               {/* Arch architectural backdrop SVG */}
//               <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex justify-center items-center">
//                 <svg className="w-4/5 h-4/5 text-gold-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
//                   <path d="M 10,90 A 40,40 0 0,1 90,90 Z" />
//                   <path d="M 20,90 A 30,30 0 0,1 80,90 Z" />
//                   <path d="M 30,90 A 20,20 0 0,1 70,90 Z" />
//                   <line x1="50" y1="10" x2="50" y2="90" />
//                 </svg>
//               </div>

//               {/* Grid divider lines and diamond intersection */}
//               <div className="absolute top-8 bottom-8 left-1/2 w-[1px] bg-gold-400/15 pointer-events-none" />
//               <div className="absolute left-8 right-8 top-1/2 h-[1px] bg-gold-400/15 pointer-events-none" />
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 border border-gold-400/40 bg-brand-red-950 z-10" />

//               {/* 2x2 Grid */}
//               <div className="grid grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                
//                 {/* Pillar 1 */}
//                 <div className="space-y-2 pr-2 pb-2">
//                   <Award className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     QUALITY FIRST
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     We never compromise on quality and craftsmanship.
//                   </p>
//                 </div>

//                 {/* Pillar 2 */}
//                 <div className="space-y-2 pl-2 pb-2">
//                   <HeartHandshake className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     CUSTOMER TRUST
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     Our commitment to transparency has earned us lasting relationships.
//                   </p>
//                 </div>

//                 {/* Pillar 3 */}
//                 <div className="space-y-2 pr-2 pt-2">
//                   <Compass className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     INNOVATIVE DESIGNS
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     Modern architecture that meets future living standards.
//                   </p>
//                 </div>

//                 {/* Pillar 4 */}
//                 <div className="space-y-2 pl-2 pt-2">
//                   <Clock className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     TIMELY DELIVERY
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     We value your time and deliver what we promise.
//                   </p>
//                 </div>

//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// import React from 'react';
// import { motion } from 'motion/react';
// import { ChevronRight, Award, HeartHandshake, Compass, Clock } from 'lucide-react';
// import {useNavigate} from 'react-router-dom';

// export default function AboutStory({ onOpenContact }) {

//     const navigate = useNavigate();
//     const handleNavigate = () => {
//         navigate('/about');
//     }
//   return (
//     <section className="py-20 bg-[#faf7f0] overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left text block - slides in from left */}
//           <motion.div 
//             className="lg:col-span-6 space-y-6"
//             initial={{ opacity: 0, x: -100 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//           >
            
//             <div className="flex items-center gap-2">
//               <div className="h-[1px] w-6 bg-gold-500" />
//               <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
//                 OUR STORY
//               </span>
//               <div className="h-[1px] w-6 bg-gold-500" />
//             </div>

//             <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
//               Built on Trust.<br />
//               Driven by <span className="font-semibold text-brand-red-800">Excellence.</span>
//             </h2>

//             <p className="text-neutral-700 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl">
//               MRCL Infrastructure was founded with a vision to create world-class living spaces that blend luxury, comfort, and functionality. Over the years, we have grown into a trusted name in real estate, delivering outstanding projects that stand the test of time.
//             </p>

//             {/* Special custom button matching mockup */}
//             <div className="pt-4 flex justify-start">
//               <button
//                 onClick={() => navigate('/contact')}
//                 className="group cursor-pointer flex items-center justify-between bg-brand-red-900 hover:bg-brand-red-950 text-white font-sans text-xs font-bold tracking-[0.15em] pl-6 pr-2 py-2 rounded-md transition-all duration-300 shadow-xl hover:shadow-brand-red-900/10 active:scale-95"
//               >
//                 <span>KNOW MORE ABOUT US</span>
//                 <div className="ml-4 p-2 bg-gold-400 group-hover:bg-gold-500 text-brand-red-950 rounded-md transition-colors duration-300">
//                   <ChevronRight className="w-4 h-4" />
//                 </div>
//               </button>
//             </div>
//           </motion.div>

//           {/* Right dark-red card - slides in from right */}
//           <div className="lg:col-span-6">
//             <motion.div
//               initial={{ opacity: 0, x: 100 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//               className="relative bg-brand-red-950 border border-gold-400/30 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
//             >
//               {/* Arch architectural backdrop SVG */}
//               <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex justify-center items-center">
//                 <svg className="w-4/5 h-4/5 text-gold-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
//                   <path d="M 10,90 A 40,40 0 0,1 90,90 Z" />
//                   <path d="M 20,90 A 30,30 0 0,1 80,90 Z" />
//                   <path d="M 30,90 A 20,20 0 0,1 70,90 Z" />
//                   <line x1="50" y1="10" x2="50" y2="90" />
//                 </svg>
//               </div>

//               {/* Grid divider lines and diamond intersection */}
//               <div className="absolute top-8 bottom-8 left-1/2 w-[1px] bg-gold-400/15 pointer-events-none" />
//               <div className="absolute left-8 right-8 top-1/2 h-[1px] bg-gold-400/15 pointer-events-none" />
//               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 border border-gold-400/40 bg-brand-red-950 z-10" />

//               {/* 2x2 Grid */}
//               <div className="grid grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                
//                 {/* Pillar 1 */}
//                 <div className="space-y-2 pr-2 pb-2">
//                   <Award className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     QUALITY FIRST
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     We never compromise on quality and craftsmanship.
//                   </p>
//                 </div>

//                 {/* Pillar 2 */}
//                 <div className="space-y-2 pl-2 pb-2">
//                   <HeartHandshake className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     CUSTOMER TRUST
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     Our commitment to transparency has earned us lasting relationships.
//                   </p>
//                 </div>

//                 {/* Pillar 3 */}
//                 <div className="space-y-2 pr-2 pt-2">
//                   <Compass className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     INNOVATIVE DESIGNS
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     Modern architecture that meets future living standards.
//                   </p>
//                 </div>

//                 {/* Pillar 4 */}
//                 <div className="space-y-2 pl-2 pt-2">
//                   <Clock className="w-7 h-7 text-gold-400" />
//                   <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
//                     TIMELY DELIVERY
//                   </h3>
//                   <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
//                     We value your time and deliver what we promise.
//                   </p>
//                 </div>

//               </div>
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Award, HeartHandshake, Compass, Clock } from 'lucide-react';
import {useNavigate} from 'react-router-dom';

export default function AboutStory({ onOpenContact }) {

    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate('/about');
    }
  return (
    <section className="py-20 bg-[#faf7f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left text block - slides in from left */}
          <motion.div 
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ 
              once: true, 
              amount: 0.2,
              margin: "-50px" // Triggers slightly before element enters viewport
            }}
            transition={{ 
              duration: 0.8, 
              ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smoother scroll feel
            }}
          >
            
            <div className="flex items-center gap-2">
              <div className="h-[1px] w-6 bg-gold-500" />
              <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
                OUR STORY
              </span>
              <div className="h-[1px] w-6 bg-gold-500" />
            </div>

            <h2 className="font-serif text-3.5xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-900 leading-tight">
              Built on Trust.<br />
              Driven by <span className="font-semibold text-brand-red-800">Excellence.</span>
            </h2>

            <p className="text-neutral-700 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl">
              MRCL Infrastructure was founded with a vision to create world-class living spaces that blend luxury, comfort, and functionality. Over the years, we have grown into a trusted name in real estate, delivering outstanding projects that stand the test of time.
            </p>

            {/* Special custom button matching mockup */}
            <div className="pt-4 flex justify-start">
              <button
                onClick={() => navigate('/contact')}
                className="group cursor-pointer flex items-center justify-between bg-brand-red-900 hover:bg-brand-red-950 text-white font-sans text-xs font-bold tracking-[0.15em] pl-6 pr-2 py-2 rounded-md transition-all duration-300 shadow-xl hover:shadow-brand-red-900/10 active:scale-95"
              >
                <span>KNOW MORE ABOUT US</span>
                <div className="ml-4 p-2 bg-gold-400 group-hover:bg-gold-500 text-brand-red-950 rounded-md transition-colors duration-300">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </motion.div>

          {/* Right dark-red card - slides in from right */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ 
                once: true, 
                amount: 0.2,
                margin: "-50px"
              }}
              transition={{ 
                duration: 0.8, 
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2 
              }}
              className="relative bg-brand-red-950 border border-gold-400/30 rounded-2xl p-8 sm:p-10 lg:p-12 shadow-2xl overflow-hidden"
            >
              {/* Arch architectural backdrop SVG */}
              <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex justify-center items-center">
                <svg className="w-4/5 h-4/5 text-gold-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
                  <path d="M 10,90 A 40,40 0 0,1 90,90 Z" />
                  <path d="M 20,90 A 30,30 0 0,1 80,90 Z" />
                  <path d="M 30,90 A 20,20 0 0,1 70,90 Z" />
                  <line x1="50" y1="10" x2="50" y2="90" />
                </svg>
              </div>

              {/* Grid divider lines and diamond intersection */}
              <div className="absolute top-8 bottom-8 left-1/2 w-[1px] bg-gold-400/15 pointer-events-none" />
              <div className="absolute left-8 right-8 top-1/2 h-[1px] bg-gold-400/15 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rotate-45 border border-gold-400/40 bg-brand-red-950 z-10" />

              {/* 2x2 Grid */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-10 relative z-10">
                
                {/* Pillar 1 */}
                <motion.div 
                  className="space-y-2 pr-2 pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Award className="w-7 h-7 text-gold-400" />
                  <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
                    QUALITY FIRST
                  </h3>
                  <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
                    We never compromise on quality and craftsmanship.
                  </p>
                </motion.div>

                {/* Pillar 2 */}
                <motion.div 
                  className="space-y-2 pl-2 pb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <HeartHandshake className="w-7 h-7 text-gold-400" />
                  <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
                    CUSTOMER TRUST
                  </h3>
                  <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
                    Our commitment to transparency has earned us lasting relationships.
                  </p>
                </motion.div>

                {/* Pillar 3 */}
                <motion.div 
                  className="space-y-2 pr-2 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Compass className="w-7 h-7 text-gold-400" />
                  <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
                    INNOVATIVE DESIGNS
                  </h3>
                  <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
                    Modern architecture that meets future living standards.
                  </p>
                </motion.div>

                {/* Pillar 4 */}
                <motion.div 
                  className="space-y-2 pl-2 pt-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Clock className="w-7 h-7 text-gold-400" />
                  <h3 className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-gold-300 uppercase">
                    TIMELY DELIVERY
                  </h3>
                  <p className="text-gold-100/70 text-[11px] leading-relaxed font-light">
                    We value your time and deliver what we promise.
                  </p>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}