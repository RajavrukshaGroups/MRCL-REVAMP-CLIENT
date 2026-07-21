import React from 'react';
import { motion } from 'motion/react';
import { Image as ImageIcon, ArrowRight, Maximize2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../data';

export default function GalleryPreview() {
  const previewItems = [
    {
      title: 'Bespoke Architectural Exterior',
      category: 'Villa Exterior',
      image: ASSETS.heroVilla,
    },
    {
      title: 'Double-Height Grand Lobby',
      category: 'Lobby & Interior',
      image: ASSETS.lobbyInterior,
    },
    {
      title: 'MRCL Serenity Modern Facade',
      category: 'Villa Exterior',
      image: ASSETS.serenityVilla,
    },
  ];

  return (
    <section id="gallery-preview" className="py-24 bg-neutral-950 text-gold-50 overflow-hidden relative border-t border-gold-400/10">
      {/* Background Ornaments */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-brand-red-900/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gold-400">
              <ImageIcon className="w-4 h-4 text-gold-400" />
              <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase">
                ESTATE SHOWCASE
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
              A Glimpse of <span className="font-bold text-gold-300">Timeless Grandeur</span>
            </h2>
            <div className="w-20 h-[1px] bg-gold-400/40" />
          </div>

          <Link
            to="/gallery"
            onClick={() => window.scrollTo(0, 0)}
            className="group flex items-center gap-2 text-xs font-bold tracking-widest text-gold-300 hover:text-gold-100 transition-colors"
          >
            <span>EXPLORE ESTATE GALLERY</span>
            <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative aspect-[16/10] rounded-xl overflow-hidden border border-gold-400/10 hover:border-gold-400/30 shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Text / Overlay details */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end space-y-1.5 text-left">
                <span className="text-[10px] font-bold tracking-[0.25em] text-gold-400 uppercase">
                  {item.category}
                </span>
                <h3 className="font-serif text-md md:text-lg text-white font-medium group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Hover icon */}
              <div className="absolute top-4 right-4 p-2 bg-brand-red-950/80 border border-gold-400/20 rounded-full text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
