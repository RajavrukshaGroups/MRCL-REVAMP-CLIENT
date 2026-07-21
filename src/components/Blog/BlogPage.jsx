import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calendar, Clock, ArrowRight, X, Share2, Bookmark, FileText } from 'lucide-react';
import { ASSETS } from '../../data';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 'blog-1',
      title: 'The Rise of South Bangalore: The Prime Destination for Premium Residential Hubs',
      excerpt: 'Discover why affluent homebuyers and tech executives are moving to Electronic City, Begur, and Hosur Road for premium villa estates.',
      category: 'market',
      categoryLabel: 'Market Insights',
      image: ASSETS.heroVilla,
      date: 'July 10, 2026',
      readTime: '6 min read',
      author: {
        name: 'Madhusudhan R. Rao',
        role: 'Managing Director, MRCL Infra',
      },
      content: [
        'South Bangalore has emerged as the premier epicenter for luxury living in Karnataka. Historically renowned for its beautiful foliage and calm neighborhoods, the rapid infrastructure expansion—namely the Namma Metro Phase 2, modern expressways, and high-tech corporate corridors—has transformed areas like Electronic City, Begur, and Hosur Road into prime residential hubs.',
        'Tech entrepreneurs and multinational executives are demanding larger volumes, high security, and clean personal airspace away from dense apartment clusters. A bespoke villa offers the perfect solution, combining solid land-ownership with custom architectural blueprints and low-density communal spacing.',
        'At MRCL Infrastructure, our selection of South Bangalore strategic nodes is highly deliberate. We ensure that our residents enjoy top-tier connectivity to major workspace zones, premium healthcare units, and distinguished international schools, while still maintaining absolute personal tranquility behind our gated borders.'
      ]
    },
    {
      id: 'blog-2',
      title: 'Architectural Trends: Blending Modern Cubic Geometry with Bio-climatic Living',
      excerpt: 'How modern architects are designing villas to leverage natural light, double-height volumes, and native plants for sustainable wellness.',
      category: 'architecture',
      categoryLabel: 'Architecture & Design',
      image: ASSETS.lobbyInterior,
      date: 'June 28, 2026',
      readTime: '8 min read',
      author: {
        name: 'Pranitha Kumar',
        role: 'Principal Architect, MRCL Studio',
      },
      content: [
        'True luxury is defined by light, air, and volume. Modern luxury villa styling is moving away from cramped heavy partitions towards open structural layouts, featuring double-height ceiling voids, massive floor-to-ceiling glass panel sliders, and integration with natural surrounding foliage.',
        'By utilizing passive cooling structures and bio-climatic architectural design, we optimize cross-ventilation and thermal regulation. This eliminates excess air-conditioning dependence, creating an organic ecosystem that regulates temperature naturally.',
        'Incorporating interior double-height foyers allows light to pool into the dining and living quarters, generating positive environmental psychology. The boundary between the private backyard lawn and the internal family seating area becomes transparent, extending your visual living space into nature.'
      ]
    },
    {
      id: 'blog-3',
      title: 'Incorporating Complete Smart Home Automation in Premium Gated Estates',
      excerpt: 'From biometric touchpads to climate scheduling and solar tracking, learn how luxury homes are evolving into responsive digital ecosystems.',
      category: 'technology',
      categoryLabel: 'Smart Living',
      image: ASSETS.eliteVilla,
      date: 'May 15, 2026',
      readTime: '5 min read',
      author: {
        name: 'Rajesh Varma',
        role: 'Head of Home Systems, MRCL',
      },
      content: [
        'The modern home is no longer just a passive shelter; it is a highly responsive, smart living ecosystem. Complete automation integrates your security grids, custom entertainment hubs, environmental climate controllers, and renewable energy storage into a single unified workspace.',
        'Biometric access keys, remote camera feeds, and automated gate triggers ensure absolute security for families. Simultaneously, predictive climate systems track outdoor sunlight levels to dynamically adjust glass louvers, smart drapery, and variable speed HVAC fans for optimal wellness and cost-efficiency.',
        'At MRCL Elite, our smart villas combine high-capacity solar arrays with smart energy metering. This means your private luxury runs on clean, self-harvested power, automatically switching to off-grid batteries during peak load periods for zero interruption.'
      ]
    },
    {
      id: 'blog-4',
      title: 'The Art of Landscaping: Designing Private Zen Gardens and Natural Boundary Screens',
      excerpt: 'Discover how native trees, water features, and multi-layered foliage design can create natural barriers for absolute privacy and peace.',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle & Wellness',
      image: ASSETS.serenityVilla,
      date: 'April 02, 2026',
      readTime: '4 min read',
      author: {
        name: 'Nandini Das',
        role: 'Landscape Consultant',
      },
      content: [
        'A great home extends far beyond its concrete walls. The landscaping surrounding a luxury villa forms its living skin, establishing sensory filters for noise, dust, and visual privacy.',
        'Instead of tall cold boundary masonry, we specialize in multi-layered planting systems. By pairing fragrant flowering plants, dense green hedges, and native broad-leaf canopy trees, we block external sightlines naturally while creating dynamic wind patterns.',
        'Adding subtle stone waterways and recirculating pebble streams brings sound therapy to your private courtyard, completely masking municipal city noise. The result is a calm, personal sanctuary where you can recharge with absolute privacy.'
      ]
    }
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', name: 'ALL ARTICLES' },
    { id: 'architecture', name: 'DESIGN' },
    { id: 'market', name: 'MARKET' },
    { id: 'lifestyle', name: 'LIFESTYLE' },
    { id: 'technology', name: 'TECH' },
  ];

  return (
    <div className="bg-gold-50/50 min-h-screen py-12">
      {/* Page Title Header */}
      <div className="relative py-20 bg-brand-red-950 text-gold-50 border-b border-gold-400/20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(181,128,47,0.08)_0%,transparent_50%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-center gap-2 text-gold-400">
              <FileText className="w-4 h-4 text-gold-400" />
              <span className="text-xs font-semibold tracking-[0.3em] uppercase">MRCL Journal</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif tracking-tight text-gold-200">
              LIFESTYLE & ESTATE JOURNAL
            </h1>
            <p className="max-w-2xl mx-auto text-sm text-gold-100/60 font-light leading-relaxed">
              Curated perspectives on high-end real estate investments, modern architecture, and smart sustainable design in Bangalore.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filters Bar */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 order-2 md:order-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`cursor-pointer px-4 py-2 rounded text-xs font-semibold tracking-widest transition-all duration-300 ${
                  activeCategory === cat.id
                    ? 'bg-brand-red-950 text-gold-300 border border-gold-400/30'
                    : 'bg-white hover:bg-gold-100 text-neutral-600 border border-neutral-200/50'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80 order-1 md:order-2">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-neutral-200 rounded-md text-xs font-sans text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-gold-500 focus:border-gold-500"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-neutral-400" />
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredArticles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group bg-white border border-gold-400/10 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-red-950">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute bottom-4 left-4 bg-brand-red-950/90 backdrop-blur-sm border border-gold-400/20 text-gold-300 text-[9px] font-bold tracking-widest px-2.5 py-1 rounded uppercase">
                      {article.categoryLabel}
                    </span>
                  </div>

                  {/* Text details */}
                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-4 text-[10px] text-neutral-400 uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gold-500" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gold-500" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif text-brand-red-950 font-bold group-hover:text-gold-600 transition-colors line-clamp-2 leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-neutral-500 leading-relaxed font-light line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer panel with action */}
                <div className="px-8 pb-8 pt-4 border-t border-gold-400/5 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-neutral-800">{article.author.name}</span>
                    <span className="text-[10px] text-neutral-400">{article.author.role}</span>
                  </div>

                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="cursor-pointer text-xs font-semibold tracking-wider text-brand-red-950 hover:text-gold-500 flex items-center gap-1.5 transition-colors group/btn"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 text-gold-500 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-neutral-100 rounded-lg shadow-sm">
            <p className="text-neutral-500 text-sm">No articles match your search or filter parameters.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-4 py-2 bg-brand-red-950 text-gold-300 text-xs font-semibold tracking-widest rounded hover:bg-gold-500 hover:text-brand-red-950 transition-colors"
            >
              RESET FILTER
            </button>
          </div>
        )}
      </div>

      {/* Reading Modal/Drawer Sheet */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-end">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedArticle(null)}
              className="absolute inset-0 bg-black/75 backdrop-blur-sm cursor-pointer"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.4 }}
              className="relative w-full max-w-2xl h-full bg-white border-l border-gold-400/20 shadow-2xl flex flex-col z-10"
            >
              {/* Drawer Sticky Header */}
              <div className="sticky top-0 bg-brand-red-950 text-gold-50 px-6 py-4 border-b border-gold-400/20 flex items-center justify-between z-10">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-gold-400 uppercase">
                    {selectedArticle.categoryLabel}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="p-1.5 hover:bg-gold-500 hover:text-brand-red-950 text-gold-200 border border-gold-400/10 rounded-full transition-all"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Scrollable Area */}
              <div className="flex-grow overflow-y-auto p-6 md:p-8 space-y-6">
                {/* Image */}
                <div className="relative aspect-video rounded-lg overflow-hidden border border-gold-400/10">
                  <img
                    src={selectedArticle.image}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article Meta */}
                <div className="flex items-center gap-4 text-xs text-neutral-400">
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-serif text-brand-red-950 font-bold leading-tight">
                  {selectedArticle.title}
                </h2>

                {/* Author card */}
                <div className="flex items-center gap-3 p-4 bg-gold-50/50 rounded-lg border border-gold-400/10">
                  <div className="w-10 h-10 rounded-full bg-brand-red-950 text-gold-300 font-bold font-serif flex items-center justify-center text-sm">
                    {selectedArticle.author.name[0]}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-semibold text-neutral-800">{selectedArticle.author.name}</span>
                    <span className="text-[10px] text-neutral-500">{selectedArticle.author.role}</span>
                  </div>
                </div>

                {/* Content paragraphs */}
                <div className="space-y-4 text-sm text-neutral-600 leading-relaxed font-light">
                  {selectedArticle.content.map((p, idx) => (
                    <p key={idx} className="first-letter:text-2xl first-letter:font-serif first-letter:text-gold-600 first-letter:mr-1">
                      {p}
                    </p>
                  ))}
                </div>

                {/* Share/Actions */}
                <div className="pt-6 border-t border-neutral-100 flex items-center justify-between">
                  <p className="text-[11px] text-neutral-400 italic">MRCL Infrastructure © 2026. All rights reserved.</p>
                  <div className="flex items-center gap-2">
                    <button className="p-2 border border-neutral-200 text-neutral-500 hover:text-gold-500 rounded-full hover:bg-neutral-50 transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                    <button className="p-2 border border-neutral-200 text-neutral-500 hover:text-gold-500 rounded-full hover:bg-neutral-50 transition-colors">
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
