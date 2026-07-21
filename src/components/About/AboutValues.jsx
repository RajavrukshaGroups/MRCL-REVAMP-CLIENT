import React from 'react';
import { motion } from 'motion/react';
import { Target, Users, Gem, HeartHandshake, Star } from 'lucide-react';

export default function AboutValues() {
  return (
    <section className="py-20 bg-[#faf7f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest text-gold-600 uppercase block">OUR PRINCIPLES</span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-red-950 uppercase tracking-wider">OUR VALUES</h2>
          <div className="flex items-center justify-center gap-2 mt-2">
            <div className="h-[1px] w-8 bg-gold-400" />
            <div className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
            <div className="h-[1px] w-8 bg-gold-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {/* Value 1: INTEGRITY */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0 }}
            className="text-center space-y-4 group"
          >
            <div className="w-18 h-18 rounded-full bg-brand-red-900 border-2 border-gold-400 flex items-center justify-center text-gold-200 mx-auto transition-transform duration-300 group-hover:scale-105 shadow-xl">
              <Target className="w-7 h-7 text-gold-300" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold tracking-widest text-brand-red-950 uppercase">
                INTEGRITY
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-light mt-2 max-w-[180px] mx-auto">
                We conduct our business with honesty and fairness.
              </p>
            </div>
          </motion.div>

          {/* Value 2: COMMITMENT */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center space-y-4 group"
          >
            <div className="w-18 h-18 rounded-full bg-brand-red-900 border-2 border-gold-400 flex items-center justify-center text-gold-200 mx-auto transition-transform duration-300 group-hover:scale-105 shadow-xl">
              <Users className="w-7 h-7 text-gold-300" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold tracking-widest text-brand-red-950 uppercase">
                COMMITMENT
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-light mt-2 max-w-[180px] mx-auto">
                We are committed to delivering excellence in every project.
              </p>
            </div>
          </motion.div>

          {/* Value 3: PASSION */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center space-y-4 group"
          >
            <div className="w-18 h-18 rounded-full bg-brand-red-900 border-2 border-gold-400 flex items-center justify-center text-gold-200 mx-auto transition-transform duration-300 group-hover:scale-105 shadow-xl">
              <Gem className="w-7 h-7 text-gold-300" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold tracking-widest text-brand-red-950 uppercase">
                PASSION
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-light mt-2 max-w-[180px] mx-auto">
                We are passionate about creating better lifestyles.
              </p>
            </div>
          </motion.div>

          {/* Value 4: RESPONSIBILITY */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center space-y-4 group"
          >
            <div className="w-18 h-18 rounded-full bg-brand-red-900 border-2 border-gold-400 flex items-center justify-center text-gold-200 mx-auto transition-transform duration-300 group-hover:scale-105 shadow-xl">
              <HeartHandshake className="w-7 h-7 text-gold-300" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold tracking-widest text-brand-red-950 uppercase">
                RESPONSIBILITY
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-light mt-2 max-w-[180px] mx-auto">
                We build responsibly for a better tomorrow.
              </p>
            </div>
          </motion.div>

          {/* Value 5: EXCELLENCE */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center space-y-4 group"
          >
            <div className="w-18 h-18 rounded-full bg-brand-red-900 border-2 border-gold-400 flex items-center justify-center text-gold-200 mx-auto transition-transform duration-300 group-hover:scale-105 shadow-xl">
              <Star className="w-7 h-7 text-gold-300" />
            </div>
            <div>
              <h3 className="font-serif text-sm font-bold tracking-widest text-brand-red-950 uppercase">
                EXCELLENCE
              </h3>
              <p className="text-neutral-500 text-xs leading-relaxed font-light mt-2 max-w-[180px] mx-auto">
                We strive for excellence in all that we do.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
