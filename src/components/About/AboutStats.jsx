import React from 'react';
import { Building2, Sparkles, Users, Compass } from 'lucide-react';

export default function AboutStats() {
  return (
    <section className="bg-brand-red-950 border-y border-gold-400/20 py-10 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient(circle_at_center,rgba(181,128,47,0.06)_0%,transparent_70%) pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Centered header with gold wings */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-gold-400" />
          <span className="font-serif text-xs tracking-[0.25em] text-gold-300 uppercase font-semibold">
            OUR JOURNEY IN NUMBERS
          </span>
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-gold-400" />
        </div>

        {/* Stats horizontal row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 justify-center lg:justify-start lg:border-r lg:border-gold-400/15 lg:last:border-r-0 lg:pr-6">
            <Building2 className="w-9 h-9 text-gold-400 flex-shrink-0" />
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-300 leading-none">
                15+
              </div>
              <div className="text-[10px] tracking-widest text-gold-100/60 uppercase font-sans mt-1">
                YEARS OF EXPERIENCE
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 justify-center lg:justify-start lg:border-r lg:border-gold-400/15 lg:last:border-r-0 lg:pr-6">
            <Sparkles className="w-9 h-9 text-gold-400 flex-shrink-0" />
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-300 leading-none">
                25+
              </div>
              <div className="text-[10px] tracking-widest text-gold-100/60 uppercase font-sans mt-1">
                SUCCESSFUL PROJECTS
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 justify-center lg:justify-start lg:border-r lg:border-gold-400/15 lg:last:border-r-0 lg:pr-6">
            <Users className="w-9 h-9 text-gold-400 flex-shrink-0" />
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-300 leading-none">
                5000+
              </div>
              <div className="text-[10px] tracking-widest text-gold-100/60 uppercase font-sans mt-1">
                HAPPY FAMILIES
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 justify-center lg:justify-start lg:pr-6">
            <Compass className="w-9 h-9 text-gold-400 flex-shrink-0" />
            <div>
              <div className="text-3xl md:text-4xl font-serif font-bold text-gold-300 leading-none">
                10+
              </div>
              <div className="text-[10px] tracking-widest text-gold-100/60 uppercase font-sans mt-1">
                PRIME LOCATIONS
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
