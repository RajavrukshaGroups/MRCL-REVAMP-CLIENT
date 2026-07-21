import { motion } from 'motion/react';
import { Gem, MapPin, Award, Sparkles } from 'lucide-react';
import { FEATURES } from '../../data';

export default function Features() {
  // Map string icon names to Lucide icon components
  const renderIcon = (name) => {
    switch (name) {
      case 'Gem':
        return <Gem className="w-8 h-8 text-gold-400" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-gold-400" />;
      case 'Award':
        return <Award className="w-8 h-8 text-gold-400" />;
      case 'Sparkles':
        return <Sparkles className="w-8 h-8 text-gold-400" />;
      default:
        return <Gem className="w-8 h-8 text-gold-400" />;
    }
  };

  return (
    <div id="features" className="relative z-25 -mt-16 sm:-mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Outer Glow container with golden border-trim */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="rounded-2xl overflow-hidden border border-gold-300/30 p-[1px] bg-gradient-to-b from-gold-300/40 via-gold-500/10 to-gold-600/30 shadow-2xl shadow-brand-red-950/40"
      >
        <div className="bg-gradient-to-br from-brand-red-900 to-brand-red-950 text-gold-100 rounded-[15px] p-6 sm:p-8 md:py-10 md:px-6 xl:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-gold-400/10 gap-6 md:gap-y-8 lg:gap-0">
            {FEATURES.map((feat, index) => (
              <motion.div
                key={feat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="flex items-start sm:items-center lg:items-start gap-4 p-4 lg:px-6 transition-all group cursor-default first:pt-0 last:pb-0 md:pt-4 md:pb-4 lg:py-0"
              >
                {/* Gold Embossed Icon Container */}
                <div className="flex-shrink-0 p-3 rounded-xl bg-brand-red-950/60 border border-gold-400/10 group-hover:border-gold-300/30 group-hover:bg-gold-500/10 transition-all duration-300 shadow-md">
                  {renderIcon(feat.iconName)}
                </div>

                {/* Text Description */}
                <div className="space-y-1">
                  <h3 className="font-serif text-xs font-semibold tracking-wider text-gold-300 group-hover:text-gold-200 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-50 font-medium tracking-wide">
                    {feat.subtitle}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
