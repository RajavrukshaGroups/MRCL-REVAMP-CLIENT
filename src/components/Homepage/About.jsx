// import { useState, useEffect, useRef } from 'react';
// import { motion, useInView } from 'motion/react';
// import { Crown, ArrowRight, Award, Shield, Compass } from 'lucide-react';
// import { ASSETS } from '../../data';
// import aboutBanner from "../../assets/images/about-us-background-image.png"
// import { useNavigate } from 'react-router-dom';

// function StatCounter({ end, suffix, label, delay = 0 }) {
//   const [count, setCount] = useState(0);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: '-50px' });

//   useEffect(() => {
//     if (isInView) {
//       let startTime = null;
//       const duration = 2000; // 2 seconds

//       const animate = (timestamp) => {
//         if (!startTime) startTime = timestamp;
//         const progress = Math.min((timestamp - startTime) / duration, 1);
//         setCount(Math.floor(progress * end));

//         if (progress < 1) {
//           requestAnimationFrame(animate);
//         }
//       };

//       const timer = setTimeout(() => {
//         requestAnimationFrame(animate);
//       }, delay);

//       return () => clearTimeout(timer);
//     }
//   }, [isInView, end, delay]);

//   return (
//     <div ref={ref} className="text-center md:text-left space-y-1 group">
//       <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-600 group-hover:text-gold-500 transition-colors">
//         {count}
//         {suffix}
//       </div>
//       <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold font-sans">
//         {label}
//       </div>
//     </div>
//   );
// }

// export default function About({ onOpenContact = () => {} }) {
//   const navigate = useNavigate();
//   return (
//     <section id="about" className="relative py-20 md:py-32 bg-gold-50 overflow-hidden">
//       {/* Background patterns */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 blur-[120px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/10 blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
//           {/* Left Text Column */}
//           <div className="lg:col-span-6 space-y-6 md:space-y-8">
//             <div className="space-y-3">
//               <div className="flex items-center gap-2">
//                 <Crown className="w-4 h-4 text-gold-500" />
//                 <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
                
//                 </span>
//               </div>
//               <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-950 leading-tight">
//                 Your Vision. <br />
//                 Our Expertise. <br />
//                 <span className="font-bold text-gold-700">Timeless Creations.</span>
//               </h2>
//             </div>

//             <p className="text-neutral-700 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl">
//               At MRCL Infrastructure, we believe in creating spaces that reflect your dreams and elevate your lifestyle. Our villas are thoughtfully designed to offer the perfect balance of luxury, comfort, and functionality.
//             </p>

//             <p className="text-neutral-600 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-xl">
//               With a legacy of premium craftsmanship, each MRCL home features top-tier construction standards, smart automation, and bespoke architectural aesthetics suited for modern elite living in South Bangalore.
//             </p>

//             {/* Accent Pillars */}
//             <div className="grid grid-cols-3 gap-4 pt-2">
//               <div className="flex flex-col items-center md:items-start gap-1 p-3 bg-white rounded-lg border border-gold-200/30 shadow-sm">
//                 <Award className="w-5 h-5 text-gold-500 mb-1" />
//                 <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Unmatched Quality</span>
//               </div>
//               <div className="flex flex-col items-center md:items-start gap-1 p-3 bg-white rounded-lg border border-gold-200/30 shadow-sm">
//                 <Shield className="w-5 h-5 text-gold-500 mb-1" />
//                 <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Complete Trust</span>
//               </div>
//               <div className="flex flex-col items-center md:items-start gap-1 p-3 bg-white rounded-lg border border-gold-200/30 shadow-sm">
//                 <Compass className="w-5 h-5 text-gold-500 mb-1" />
//                 <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Prime Locations</span>
//               </div>
//             </div>

//             {/* Action Trigger */}
//             <div className="pt-2 flex justify-center md:justify-start">
//               <button
//                 onClick={() => navigate('/about')}
//                 className="cursor-pointer group flex items-center gap-3 px-6 py-3.5 bg-brand-red-950 hover:bg-brand-red-900 text-gold-200 font-bold text-xs tracking-widest rounded-md transition-all duration-300 shadow-xl hover:shadow-brand-red-950/20 active:scale-95"
//               >
//                 <span>KNOW MORE ABOUT US</span>
//                 <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300" />
//               </button>
//             </div>

//             {/* Counter/Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gold-300/30">
//               <StatCounter end={10} suffix="+" label="Years of Experience" delay={0} />
//               <StatCounter end={25} suffix="+" label="Projects Completed" delay={200} />
//               <StatCounter end={500} suffix="+" label="Happy Families" delay={400} />
//             </div>
//           </div>

//           {/* Right Image Frame Column */}
//           <div className="lg:col-span-6 flex justify-center">
//             <motion.div
//               initial={{ opacity: 0, x: 40 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 1, type: 'spring', damping: 25 }}
//               className="relative group p-4 bg-white/40 border border-gold-300/20 rounded-2xl max-w-lg w-full shadow-2xl"
//             >
//               {/* Luxury gold frame container */}
//               <div className="relative rounded-xl overflow-hidden aspect-[4/3] border-[12px] border-white shadow-xl">
//                 <img
//                   src={ASSETS.lobbyInterior}
//                   alt="MRCL Luxury Interior Lobby"
//                   className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
//                   referrerPolicy="no-referrer"
//                 />
                
//                 {/* Image Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
//               </div>

//               {/* Float badge of certification */}
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: 0.6, duration: 0.5 }}
//                 className="absolute -bottom-6 -left-4 md:-left-8 bg-brand-red-950 text-gold-200 border border-gold-400/30 p-4 rounded-xl shadow-2xl max-w-[200px]"
//               >
//                 <span className="block font-serif text-xs font-bold uppercase tracking-widest text-gold-400">
//                   ISO 9001:2015
//                 </span>
//                 <span className="block text-[10px] text-gold-100/70 mt-1 font-sans">
//                   Certified Construction Excellence & Design Governance
//                 </span>
//               </motion.div>

//               {/* Float decorative wireframes */}
//               <div className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold-400/40 pointer-events-none rounded-tr-md" />
//               <div className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-gold-400/40 pointer-events-none rounded-bl-md" />
//             </motion.div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Crown, ArrowRight, Award, Shield, Compass } from 'lucide-react';
import { ASSETS } from '../../data';
import aboutBanner from "../../assets/images/about-us-background-image.png"
import { useNavigate } from 'react-router-dom';
import SugarlandImg from "../../assets/sugarland-unicorn/3.jpg"


function StatCounter({ end, suffix, label, delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const duration = 2000; // 2 seconds

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      const timer = setTimeout(() => {
        requestAnimationFrame(animate);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, end, delay]);

  return (
    <motion.div 
      ref={ref} 
      className="text-center md:text-left space-y-1 group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 + 0.6 }}
    >
      <div className="font-serif text-3xl sm:text-4xl font-bold text-gold-600 group-hover:text-gold-500 transition-colors">
        {count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-neutral-500 font-semibold font-sans">
        {label}
      </div>
    </motion.div>
  );
}

export default function About({ onOpenContact = () => {} }) {
  const navigate = useNavigate();
  return (
    <section id="about" className="relative py-20 md:py-32 bg-gold-50 overflow-hidden">
      {/* Background patterns */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-gold-200/20 blur-[120px] rounded-full pointer-events-none"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-gold-300/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-6 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Crown className="w-4 h-4 text-gold-500" />
                <span className="font-sans text-xs font-bold tracking-[0.25em] text-gold-600 uppercase">
                  
                </span>
              </motion.div>
              <motion.h2 
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-neutral-950 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Your Vision. <br />
                Our Expertise. <br />
                <span className="font-bold text-gold-700">Timeless Creations.</span>
              </motion.h2>
            </div>

            <motion.p 
              className="text-neutral-700 text-sm sm:text-base font-sans font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              At MRCL Infrastructure, we believe in creating spaces that reflect your dreams and elevate your lifestyle. Our villas are thoughtfully designed to offer the perfect balance of luxury, comfort, and functionality.
            </motion.p>

            <motion.p 
              className="text-neutral-600 text-xs sm:text-sm font-sans font-light leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              With a legacy of premium craftsmanship, each MRCL home features top-tier construction standards, smart automation, and bespoke architectural aesthetics suited for modern elite living in South Bangalore.
            </motion.p>

            {/* Accent Pillars */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <motion.div 
                className="flex flex-col items-center md:items-start gap-1 p-3 bg-white rounded-lg border border-gold-200/30 shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Award className="w-5 h-5 text-gold-500 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Unmatched Quality</span>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center md:items-start gap-1 p-3 bg-white rounded-lg border border-gold-200/30 shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Shield className="w-5 h-5 text-gold-500 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Complete Trust</span>
              </motion.div>
              <motion.div 
                className="flex flex-col items-center md:items-start gap-1 p-3 bg-white rounded-lg border border-gold-200/30 shadow-sm"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <Compass className="w-5 h-5 text-gold-500 mb-1" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-800">Prime Locations</span>
              </motion.div>
            </motion.div>

            {/* Action Trigger */}
            <motion.div 
              className="pt-2 flex justify-center md:justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <button
                onClick={() => navigate('/about')}
                className="cursor-pointer group flex items-center gap-3 px-6 py-3.5 bg-brand-red-950 hover:bg-brand-red-900 text-gold-200 font-bold text-xs tracking-widest rounded-md transition-all duration-300 shadow-xl hover:shadow-brand-red-950/20 active:scale-95"
              >
                <span>KNOW MORE ABOUT US</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </motion.div>

            {/* Counter/Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-6 border-t border-gold-300/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <StatCounter end={10} suffix="+" label="Years of Experience" delay={0} />
              <StatCounter end={25} suffix="+" label="Projects Completed" delay={200} />
              <StatCounter end={500} suffix="+" label="Happy Families" delay={400} />
            </motion.div>
          </motion.div>

          {/* Right Image Frame Column */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: 10 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, type: 'spring', damping: 25, delay: 0.2 }}
              className="relative group p-4 bg-white/40 border border-gold-300/20 rounded-2xl max-w-lg w-full shadow-2xl"
            >
              {/* Luxury gold frame container */}
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] border-[12px] border-white shadow-xl">
                <img
                  //src={ASSETS.lobbyInterior}
                  src={SugarlandImg}
                  alt="MRCL Luxury Interior Lobby"
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Float badge of certification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6, type: 'spring' }}
                className="absolute -bottom-6 -left-4 md:-left-8 bg-brand-red-950 text-gold-200 border border-gold-400/30 p-4 rounded-xl shadow-2xl max-w-[200px]"
              >
                <span className="block font-serif text-xs font-bold uppercase tracking-widest text-gold-400">
                  ISO 9001:2015
                </span>
                <span className="block text-[10px] text-gold-100/70 mt-1 font-sans">
                  Certified Construction Excellence & Design Governance
                </span>
              </motion.div>

              {/* Float decorative wireframes */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -top-3 -right-3 w-24 h-24 border-t-2 border-r-2 border-gold-400/40 pointer-events-none rounded-tr-md"
              />
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.5 }}
                className="absolute -bottom-3 -left-3 w-24 h-24 border-b-2 border-l-2 border-gold-400/40 pointer-events-none rounded-bl-md"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}