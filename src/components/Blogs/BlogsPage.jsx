import React, { useState, useEffect } from 'react';
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Sparkles,
  Quote,
  Mail,
  Send,
  CheckCircle2,
  Phone,
  Home,
  Leaf,
  MapPin,
  Users,
  TrendingUp,
  Lightbulb,
  X,
  Share2,
  BookOpen,
  Filter
} from 'lucide-react';
import {
  companyInfo,
  heroData,
  sectionHeaderData,
  quoteData,
  newsletterData,
  categories,
  blogPosts,
  featuredBlogDetail
} from '../../data.js';
import { BlogCard } from './BlogCard.jsx';
import { ArticleModal } from './ArticleModal.jsx';
import { ContactModal } from './ContactModal.jsx';
import { BlogDetailsPage } from '../BlogsDetails/BlogDetailsPage.jsx';
import { useNavigate } from 'react-router-dom';

// Map icon names from categories data to Lucide components
const iconMap = {
  Home,
  Leaf,
  MapPin,
  Users,
  TrendingUp,
  Lightbulb,
};

export default function BlogsPage() {
  const navigate = useNavigate();  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [previewPost, setPreviewPost] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [activeSubtitleIdx, setActiveSubtitleIdx] = useState(0);

  // Cycle through hero subtitles
  useEffect(() => {
    if (!heroData?.subtitles?.length) return;
    const interval = setInterval(() => {
      setActiveSubtitleIdx((prev) => (prev + 1) % heroData.subtitles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'all' ||
      post.categorySlug === selectedCategory ||
      post.category?.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      !searchQuery.trim() ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.author?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  // Handle click to view full blog details
  const handleOpenBlog = (post) => {
    setSelectedBlog(post);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle selecting a related blog from within BlogDetailsPage
  const handleSelectRelatedBlog = (relatedItem) => {
    const found = blogPosts.find(
      (p) => p.id === relatedItem.id || p.title.toLowerCase() === relatedItem.title.toLowerCase()
    );
    if (found) {
      setSelectedBlog(found);
    } else {
      setSelectedBlog({
        ...relatedItem,
        category: 'INSIGHTS',
        categorySlug: 'real-estate',
        excerpt: relatedItem.title,
        introParagraphs: [{ id: 'p1', text: relatedItem.title }],
        numberedPoints: []
      });
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Newsletter submission handler
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
      setIsSubscribed(false);
    }, 4000);
  };

  // Share handler
  const handleShare = async (post) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        // Share cancelled or failed silently
      }
    } else {
      navigator.clipboard?.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#2d2926] font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#2d050a] via-[#3c040d] to-[#1f0206] text-white pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#dfb76c]/30">
        {/* Decorative ambient lighting elements */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#dfb76c]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-[#8b1522]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center space-y-5">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#dfb76c]/10 border border-[#dfb76c]/40 text-[#f5e2b8] text-xs font-semibold uppercase tracking-[0.25em]">
            <Sparkles className="w-3.5 h-3.5 text-[#dfb76c]" />
            <span>{heroData.badge || 'MRCL INFRASTRUCTURE'}</span>
          </div>

          {/* Main Title */}
          <h1 className="font-garamond text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#fbf9f5]">
            {heroData.title || 'BLOGS'}
          </h1>

          {/* Subtitle Rotator */}
          {heroData.subtitles && heroData.subtitles.length > 0 && (
            <div className="h-8 flex items-center justify-center">
              <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base font-medium tracking-widest text-[#dfb76c] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c] animate-pulse" />
                <span className="transition-all duration-500 transform inline-block">
                  {heroData.subtitles[activeSubtitleIdx]}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#dfb76c] animate-pulse" />
              </div>
            </div>
          )}

          {/* Tagline */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-300 leading-relaxed font-light">
            Insights, market trends, and architectural inspirations crafted by Bangalore's premier infrastructure developers.
          </p>

          {/* Header Quick CTA */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-2.5 rounded-full bg-[#dfb76c] hover:bg-[#c79d4c] text-[#2d050a] font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
            >
              <span>Connect With Advisors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href="#blogs-catalog"
              className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-xs uppercase tracking-wider transition-all duration-200"
            >
              Browse Articles
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT WRAPPER */}
      <main id="blogs-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* CONDITIONAL: If a specific blog is active, show the detailed reading page */}
        {selectedBlog ? (
          <div className="bg-white rounded-2xl p-6 sm:p-10 lg:p-12 border border-[#eae3d5] shadow-xs">
            <BlogDetailsPage
              blog={selectedBlog}
              onBackToBlogs={() => setSelectedBlog(null)}
              onShare={handleShare}
              onSelectCategory={(catSlug) => {
                setSelectedCategory(catSlug);
                setSelectedBlog(null);
              }}
              onSelectRelatedBlog={handleSelectRelatedBlog}
              onSubscribe={() => {
                const newsletterElem = document.getElementById('newsletter-section');
                newsletterElem?.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </div>
        ) : (
          /* OTHERWISE: Show the catalog with search, categories, and card grid */
          <div className="space-y-12">
            {/* Section Header & Search Bar */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#eae3d5]">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#8b1522] uppercase">
                  {sectionHeaderData.tag || 'LATEST BLOGS'}
                </span>
                <h2 className="font-garamond text-3xl sm:text-4xl font-bold text-[#1f1a1c] leading-tight">
                  {sectionHeaderData.title || 'Insights for a Better Tomorrow'}
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {sectionHeaderData.description}
                </p>
              </div>

              {/* Live Search Input */}
              <div className="relative w-full md:w-80 shrink-0">
                <div className="relative flex items-center">
                  <Search className="w-4 h-4 text-[#8b1522] absolute left-3.5 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={sectionHeaderData.searchPlaceholder || 'Search blogs...'}
                    className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-white border border-[#eae3d5] rounded-full focus:outline-none focus:border-[#8b1522] focus:ring-1 focus:ring-[#8b1522] transition-colors shadow-xs"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 text-neutral-400 hover:text-neutral-700"
                      aria-label="Clear search"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Category Filter Pills */}
            

            {/* Results Count & Reset Filter */}
            <div className="flex items-center justify-between text-xs text-neutral-500 pt-2">
              <span>
                Showing <strong className="text-neutral-800">{filteredPosts.length}</strong> of{' '}
                <strong className="text-neutral-800">{blogPosts.length}</strong> articles
              </span>
              {(selectedCategory !== 'all' || searchQuery) && (
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-[#8b1522] hover:underline font-semibold text-xs flex items-center gap-1 cursor-pointer"
                >
                  <span>Reset filters</span>
                </button>
              )}
            </div>

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {filteredPosts.map((post) => (
                  <div key={post.id} className="h-full">
                    <BlogCard
                      post={post}
                      onReadMore={(p) => handleOpenBlog(p)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="text-center py-16 px-4 bg-white rounded-2xl border border-[#eae3d5] space-y-4">
                <BookOpen className="w-12 h-12 text-[#dfb76c] mx-auto" />
                <h3 className="font-garamond text-2xl font-bold text-[#1f1a1c]">No Articles Found</h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto">
                  We couldn't find any articles matching "{searchQuery}". Try selecting another category or resetting your search.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="px-6 py-2 rounded-full bg-[#3c040d] text-[#f7e8c3] text-xs font-semibold uppercase tracking-wider hover:bg-[#250207] transition-colors"
                >
                  View All Articles
                </button>
              </div>
            )}

            {/* 3. EDITORIAL QUOTE SECTION */}
            {quoteData?.quote && (
              <section className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#f5efe2] via-[#faf7f0] to-[#f5efe2] border border-[#dfb76c]/50 p-8 sm:p-12 text-center shadow-xs my-12">
                <Quote className="w-10 h-10 text-[#dfb76c] mx-auto mb-4 opacity-80" />
                <blockquote className="font-garamond text-xl sm:text-2xl md:text-3xl font-bold text-[#2d050a] italic max-w-2xl mx-auto leading-snug">
                  "{quoteData.quote}"
                </blockquote>
                <div className="mt-4 flex items-center justify-center gap-2">
                  <div className="w-8 h-[1px] bg-[#dfb76c]" />
                  <span className="text-xs font-bold tracking-widest uppercase text-[#8b1522]">
                    MRCL Infrastructure Research Desk
                  </span>
                  <div className="w-8 h-[1px] bg-[#dfb76c]" />
                </div>
              </section>
            )}

            {/* 4. NEWSLETTER SUBSCRIPTION SECTION */}
          
          </div>
        )}
      </main>

      {/* 5. MODALS */}
      {/* Quick Article Preview Modal */}
      {previewPost && (
        <ArticleModal
          post={previewPost}
          onClose={() => setPreviewPost(null)}
          onShare={handleShare}
        />
      )}

      {/* Contact Advisor Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
