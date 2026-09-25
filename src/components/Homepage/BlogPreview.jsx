import React from 'react';
import { motion } from 'motion/react';
import { FileText, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '../../data';

export default function BlogPreview() {
  const previewArticles = [
    {
      id: 'blog-1',
      title: 'The Rise of South Bangalore: The Prime Destination for Premium Residential Hubs',
      excerpt: 'Discover why affluent homebuyers and tech executives are moving to Electronic City, Begur, and Hosur Road for premium villa estates.',
      category: 'Market Insights',
      image: ASSETS.heroVilla,
      date: 'July 10, 2026',
      readTime: '6 min read',
    },
    {
      id: 'blog-2',
      title: 'Architectural Trends: Blending Modern Cubic Geometry with Bio-climatic Living',
      excerpt: 'How modern architects are designing villas to leverage natural light, double-height volumes, and native plants for sustainable wellness.',
      category: 'Architecture & Design',
      image: ASSETS.lobbyInterior,
      date: 'June 28, 2026',
      readTime: '8 min read',
    },
  ];

  return (
    <section id="blog-preview" className="py-24 bg-white text-neutral-900 overflow-hidden relative border-t border-gold-400/10">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-200/20 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gold-600">
              <FileText className="w-4 h-4 text-gold-600" />
              <span className="font-sans text-xs font-semibold tracking-[0.25em] uppercase">
                THE MRCL JOURNAL
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-red-950 leading-tight">
              Curated Insights & <span className="font-bold text-gold-600">Expert Perspectives</span>
            </h2>
            <div className="w-20 h-[1px] bg-gold-600/40" />
          </div>

          <Link
            to="/blogs"
            onClick={() => window.scrollTo(0, 0)}
            className="group flex items-center gap-2 text-xs font-bold tracking-widest text-gold-700 hover:text-gold-900 transition-colors"
          >
            <span>VIEW CENTRAL JOURNAL</span>
            <ArrowRight className="w-4 h-4 text-gold-600 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {previewArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group bg-gold-50/20 border border-gold-400/10 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col md:flex-row"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] md:w-2/5 shrink-0 overflow-hidden bg-brand-red-950">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-3 left-3 bg-brand-red-950/90 text-gold-300 text-[8px] font-bold tracking-widest px-2 py-0.5 rounded uppercase">
                  {article.category}
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-[10px] text-neutral-400 uppercase tracking-widest font-sans">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gold-500" />
                      {article.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold-500" />
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-md md:text-lg text-brand-red-950 font-bold group-hover:text-gold-600 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-500 leading-relaxed font-light line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <Link
                  to="/blogs"
                  onClick={() => window.scrollTo(0, 0)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red-950 hover:text-gold-600 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gold-500" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
