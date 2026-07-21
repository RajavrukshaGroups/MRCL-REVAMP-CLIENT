import { PhoneCall, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CTA({ onOpenContact }) {
  const navigate = useNavigate();
  return (
    <section id="cta" className="relative py-16 md:py-20 overflow-hidden bg-brand-red-950">
      {/* Dynamic light effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-red-900/60 to-brand-red-950/90" />
      <div className="absolute -top-1/2 left-1/3 w-[500px] h-[500px] bg-gold-400/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-1 rounded-2xl bg-gradient-to-r from-gold-300/30 via-gold-500/10 to-gold-600/30">
          
          <div className="bg-gradient-to-br from-brand-red-900 to-brand-red-950 rounded-[15px] p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Telephone Pulsing Icon & Text */}
              <div className="lg:col-span-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                
                {/* Gold telephone pulsing circle */}
                <div className="relative flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-gold-500 text-brand-red-950 shadow-2xl">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                  <span className="absolute inset-0 rounded-full border-2 border-gold-400 animate-ping opacity-25" />
                  <span className="absolute -inset-2 rounded-full border border-gold-400/20" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span className="font-sans text-[10px] tracking-[0.2em] text-gold-300 font-bold uppercase">
                      LIMITED EXCLUSIVE ESTATES
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                    Ready to Own Your Dream Home?
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gold-100/75 font-sans font-light">
                    Book a site visit today and experience luxury like never before.
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <button
                  onClick={() => navigate('/contact')}
                  className="cursor-pointer group flex items-center gap-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-brand-red-950 font-bold text-xs sm:text-sm tracking-widest rounded-md transition-all duration-300 shadow-xl hover:shadow-gold-500/20 active:scale-95"
                >
                  <span>BOOK A SITE VISIT</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
