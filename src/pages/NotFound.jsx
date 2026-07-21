import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Compass, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-red-950 text-gold-50 flex flex-col items-center justify-center p-4 text-center overflow-hidden relative">
      {/* Background elegant circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-red-900/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-md space-y-6">
        <motion.div
          initial={{ rotate: -15, scale: 0.8 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ type: 'spring', damping: 15 }}
          className="w-20 h-20 bg-gold-500 text-brand-red-950 rounded-full flex items-center justify-center mx-auto shadow-2xl"
        >
          <Compass className="w-10 h-10 animate-spin" style={{ animationDuration: '15s' }} />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-8xl font-serif font-light tracking-widest text-gold-400">404</h1>
          <h2 className="text-xl tracking-widest uppercase font-serif text-gold-100">PAGE NOT FOUND</h2>
          <div className="w-12 h-[1px] bg-gold-400/40 mx-auto my-3" />
          <p className="text-xs text-gold-100/60 leading-relaxed font-sans font-light">
            The estate portfolio or counsel sheet you are searching for does not exist or has been shifted. Return to our central pavilion.
          </p>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-400 text-brand-red-950 font-bold text-xs tracking-widest rounded-md transition-all duration-300 shadow-xl"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
