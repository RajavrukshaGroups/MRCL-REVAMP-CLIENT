import { motion } from 'motion/react';
import { Shield, Sparkles, Trophy, Smile, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenContact }) {
  const statGrid = [
    {
      id: 'stat-1',
      icon: <Shield className="w-6 h-6 text-gold-400" />,
      num: '10+',
      label: 'Years of Experience',
    },
    {
      id: 'stat-2',
      icon: <Trophy className="w-6 h-6 text-gold-400" />,
      num: '25+',
      label: 'Projects Completed',
    },
    {
      id: 'stat-3',
      icon: <Smile className="w-6 h-6 text-gold-400" />,
      num: '500+',
      label: 'Happy Families',
    },
    {
      id: 'stat-4',
      icon: <Sparkles className="w-6 h-6 text-gold-400" />,
      num: '100%',
      label: 'Customer Satisfaction',
    },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 md:py-32 bg-neutral-950 text-gold-50 overflow-hidden">
      {/* Dynamic light sources */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-brand-red-900/10 blur-[130px] rounded-full pointer-events-none"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-gold-600/5 blur-[120px] rounded-full pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Sheet Column */}
          <motion.div 
            className="lg:col-span-5 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="space-y-3">
              <motion.span 
                className="font-sans text-xs font-bold tracking-[0.25em] text-gold-400 uppercase block"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                WHY CHOOSE MRCL?
              </motion.span>
              <motion.h2 
                className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                Commitment. <br />
                Quality. <br />
                <span className="font-bold text-gold-300">Trust.</span>
              </motion.h2>
            </div>

            <motion.p 
              className="text-neutral-400 text-sm md:text-base font-sans font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              From prime locations to exceptional design and top-grade quality construction, we ensure every MRCL villa is a masterpiece. We control every facet of the development lifecycle to guarantee an flawless experience.
            </motion.p>

            <motion.p 
              className="text-neutral-500 text-xs sm:text-sm font-sans font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              Our structures utilize high-tensile steel, luxury marble fittings, certified eco-friendly landscaping, and modular smart panels. We build homes that are generational assets.
            </motion.p>

            {/* <div className="pt-2 flex justify-center sm:justify-start">
              <button
                onClick={() => onOpenContact('Inquire for Premium Counsel')}
                className="cursor-pointer group flex items-center gap-3 px-6 py-3 bg-transparent hover:bg-gold-500/5 border border-gold-400/40 hover:border-gold-300 text-gold-200 hover:text-gold-100 font-bold text-xs tracking-widest rounded-md transition-all duration-300"
              >
                <span>LEARN MORE</span>
                <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div> */}
          </motion.div>

          {/* Right Stats Bento Grid Column */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 80, rotateY: 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.9, type: 'spring', damping: 25, delay: 0.2 }}
              className="rounded-2xl p-[1px] bg-gradient-to-b from-gold-400/30 via-transparent to-gold-400/10"
            >
              <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 rounded-[15px] p-6 sm:p-8 md:p-12">
                <div className="grid grid-cols-2 gap-px bg-gold-400/10">
                  {statGrid.map((stat, idx) => (
                    <motion.div
                      key={stat.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.4 + (idx * 0.1),
                        ease: "easeOut"
                      }}
                      whileHover={{ 
                        y: -5,
                        transition: { duration: 0.2 }
                      }}
                      className={`p-6 sm:p-8 md:p-10 flex flex-col items-center text-center space-y-3 bg-neutral-900/60 hover:bg-neutral-900 transition-colors duration-300 ${
                        idx === 0 ? 'rounded-tl-lg' : ''
                      } ${idx === 1 ? 'rounded-tr-lg' : ''} ${idx === 2 ? 'rounded-bl-lg' : ''} ${
                        idx === 3 ? 'rounded-br-lg' : ''
                      }`}
                    >
                      {/* Stat Icon */}
                      <motion.div 
                        className="p-3 rounded-xl bg-neutral-950 border border-gold-400/10 text-gold-400 shadow-md"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        {stat.icon}
                      </motion.div>

                      {/* Stat Number */}
                      <motion.span 
                        className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gold-300 bg-gradient-to-r from-gold-100 to-gold-400 bg-clip-text text-transparent"
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.5 + (idx * 0.1),
                          type: 'spring',
                          stiffness: 200
                        }}
                      >
                        {stat.num}
                      </motion.span>

                      {/* Label */}
                      <motion.span 
                        className="text-[10px] sm:text-xs font-semibold tracking-wider text-neutral-400 uppercase"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.6 + (idx * 0.1) }}
                      >
                        {stat.label}
                      </motion.span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}