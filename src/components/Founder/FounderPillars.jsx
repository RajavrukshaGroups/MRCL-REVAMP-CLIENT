import React from 'react';
import { motion } from 'motion/react';
import { Users, Leaf, ShieldCheck, Sparkles } from 'lucide-react';

export default function FounderPillars() {
  return (
    <section className="py-20 bg-[#120103]/60 border-t border-b border-gold-400/10 relative px-4 sm:px-6 lg:px-8">
      
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(181,128,47,0.04)_0%,transparent_75%) pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Centered Heading */}
        <div className="text-center space-y-3 mb-16">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-gold-400 tracking-[0.15em] uppercase">
            KEY PILLARS OF HIS SUCCESS
          </h2>
          
          {/* Elegant Motif underneath */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gold-400/50" />
            <div className="flex items-center gap-1 text-gold-400">
              <div className="w-1.5 h-1.5 rotate-45 border border-gold-400/40 bg-transparent" />
              <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500 shadow-sm" />
              <div className="w-1.5 h-1.5 rotate-45 border border-gold-400/40 bg-transparent" />
            </div>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gold-400/50" />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          
          {/* Pillar Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[#180205] border border-gold-500/20 hover:border-gold-400/40 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 group shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(181,128,47,0.08)]"
          >
            <div className="w-16 h-16 rounded-full border border-gold-400/50 flex items-center justify-center mx-auto text-gold-300 bg-[#120002] mb-6 shadow-[0_0_15px_rgba(212,182,115,0.15)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
              <div className="relative">
                <Users className="w-7 h-7" />
                <div className="absolute -bottom-1.5 -right-1.5 flex items-center justify-center bg-[#180205] text-gold-400 text-[8px] rounded-full p-0.5 border border-gold-400/30">
                  <Sparkles className="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
            <h3 className="font-serif text-sm sm:text-base font-bold tracking-[0.12em] text-gold-300 uppercase mb-3">
              CUSTOMER-CENTRIC APPROACH
            </h3>
            <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed font-light">
              Understanding client needs and providing exceptional after-sales service.
            </p>
          </motion.div>

          {/* Pillar Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#180205] border border-gold-500/20 hover:border-gold-400/40 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 group shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(181,128,47,0.08)]"
          >
            <div className="w-16 h-16 rounded-full border border-gold-400/50 flex items-center justify-center mx-auto text-gold-300 bg-[#120002] mb-6 shadow-[0_0_15px_rgba(212,182,115,0.15)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
              <Leaf className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="font-serif text-sm sm:text-base font-bold tracking-[0.12em] text-gold-300 uppercase mb-3">
              INNOVATION & SUSTAINABILITY
            </h3>
            <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed font-light">
              Implementing smart home technologies, eco-friendly practices, and cutting-edge architecture.
            </p>
          </motion.div>

          {/* Pillar Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-[#180205] border border-gold-500/20 hover:border-gold-400/40 rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 group shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_15px_35px_rgba(181,128,47,0.08)]"
          >
            <div className="w-16 h-16 rounded-full border border-gold-400/50 flex items-center justify-center mx-auto text-gold-300 bg-[#120002] mb-6 shadow-[0_0_15px_rgba(212,182,115,0.15)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
              <ShieldCheck className="w-7 h-7 text-gold-400" />
            </div>
            <h3 className="font-serif text-sm sm:text-base font-bold tracking-[0.12em] text-gold-300 uppercase mb-3">
              RELIABILITY & COMPLIANCE
            </h3>
            <p className="text-stone-300 text-xs sm:text-[13px] leading-relaxed font-light">
              Ensuring proper certifications, government approvals, and strict adherence to building regulations.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
