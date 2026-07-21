import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ChevronRight } from 'lucide-react';
import AwardImg from "../../assets/images/award.png"
 
export default function AboutAwards() {
  const [showAwardModal, setShowAwardModal] = useState(false);

  return (
    <>
      <section className="py-16 bg-[#1a0507] border-t border-b border-gold-400/20 relative overflow-hidden">
        {/* Subtle glowing sparks background */}
        <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(181,128,47,0.08)_0%,transparent_80%) pointer-events-none" />
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#b5802f_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left side: Award trophy and certificate */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div 
                initial={{ opacity: 0, x: -80, rotateY: 15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative group p-1 bg-gradient-to-b from-gold-300 via-gold-500 to-gold-700 rounded-xl shadow-2xl overflow-hidden max-w-sm sm:max-w-md"
              >
                {/* Glow effect */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.25 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="absolute -inset-1 bg-gradient-to-r from-gold-400 to-gold-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"
                />
                
                <div className="relative bg-[#1a0507] rounded-lg overflow-hidden p-2">
                  <img 
                    src="/src/assets/images/mrcl_times_award_2025_1784176578893.jpg" 
                    alt="Times Business Awards 2025 MRCL Infrastructure"
                    className="w-full h-auto object-cover rounded-md transform transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle gold line highlights */}
                  <div className="absolute inset-4 border border-gold-400/20 pointer-events-none rounded" />
                </div>
              </motion.div>
            </div>

            {/* Right side: Recognition text */}
            <motion.div 
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            >
              
              <div className="flex flex-col items-center lg:items-start space-y-3">
                {/* Recognition of Excellence header with gold laurel wings */}
                <motion.div 
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Left laurel branch SVG */}
                  <svg className="w-8 h-8 text-gold-400/80 transform scale-x-[-1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14a2 2 0 1 0 0-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 10a2 2 0 1 0 0-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 7a2 2 0 1 0 0-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  
                  <span className="font-serif text-xs sm:text-sm font-semibold tracking-[0.25em] text-gold-300 uppercase">
                    RECOGNITION OF EXCELLENCE
                  </span>

                  {/* Right laurel branch SVG */}
                  <svg className="w-8 h-8 text-gold-400/80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 21a9 9 0 0 1-9-9 9 9 0 0 1 9-9" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 14a2 2 0 1 0 0-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 10a2 2 0 1 0 0-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 7a2 2 0 1 0 0-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.div>
                
                <motion.h2 
                  className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-wide leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  TIMES BUSINESS <span className="font-bold text-gold-400">AWARDS 2025</span>
                </motion.h2>
              </div>

              {/* Deluxe Divider */}
              <motion.div 
                className="flex items-center justify-center lg:justify-start gap-3"
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{ transformOrigin: "left" }}
              >
                <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400" />
                <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
                <div className="h-[1px] w-16 bg-gold-500" />
              </motion.div>

              <motion.div 
                className="border border-gold-400/30 rounded-lg overflow-hidden max-h-[70vh] bg-neutral-950 flex items-center justify-center"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.55 }}
              >
                <img 
                  src={AwardImg}
                  alt="High Resolution Times Business Awards Certificate"
                  className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <motion.p 
                className="text-gold-100/80 text-sm sm:text-base font-sans font-light leading-relaxed max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                MRCL Infrastructure was proudly recognized at the Times Business Awards 2025, reflecting our unwavering commitment to quality, innovation, and excellence in the real estate industry. This prestigious recognition reinforces the trust our customers place in us and inspires us to continue creating landmark developments that redefine luxury living.
              </motion.p>

              {/* Button matching the style in mockup image */}
              {/* <div className="flex justify-center lg:justify-start pt-2">
                <button
                  onClick={() => setShowAwardModal(true)}
                  className="group cursor-pointer flex items-center justify-between bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-brand-red-950 font-sans text-xs font-bold tracking-[0.15em] pl-6 pr-2 py-2.5 rounded-md transition-all duration-300 shadow-xl shadow-gold-500/10 active:scale-95"
                >
                  <span>VIEW OUR ACHIEVEMENT</span>
                  <div className="ml-4 p-1.5 bg-brand-red-950 text-gold-300 rounded-md transition-colors duration-300 group-hover:text-white">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              </div> */}

            </motion.div>

          </div>
        </div>
      </section>

      {/* Award zoom-in Modal */}
      {showAwardModal && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="relative max-w-3xl w-full bg-[#1a0507] border border-gold-400/40 rounded-2xl p-6 shadow-2xl"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button 
              onClick={() => setShowAwardModal(false)}
              className="absolute top-4 right-4 text-gold-200 hover:text-white text-2xl font-bold bg-brand-red-950/80 w-8 h-8 rounded-full flex items-center justify-center border border-gold-400/30 cursor-pointer transition-colors duration-200"
            >
              &times;
            </button>
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2">
                <Award className="w-6 h-6 text-gold-400" />
                <h3 className="font-serif text-lg text-gold-300 font-bold tracking-widest uppercase">
                  Times Business Awards 2025
                </h3>
              </div>
              <div className="border border-gold-400/30 rounded-lg overflow-hidden max-h-[70vh] bg-neutral-950 flex items-center justify-center">
                <img 
                  src="/src/assets/images/mrcl_times_award_2025_1784176578893.jpg" 
                  alt="High Resolution Times Business Awards Certificate"
                  className="w-full h-auto max-h-[65vh] object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gold-100/70 text-xs font-sans font-light">
                Awarded to MRCL Infrastructure for Excellence in Real Estate Development.
              </p>
            </div>
           
          </motion.div>
          
        </motion.div>
      )}
    </>
  );
}