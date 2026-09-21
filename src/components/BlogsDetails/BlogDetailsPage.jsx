import React, { useState } from 'react';
import { Calendar, Clock, Share2, ArrowRight, ChevronRight, Tag } from 'lucide-react';
import { featuredBlogDetail } from '../../data.js';

export const BlogDetailsPage = ({
  blog = featuredBlogDetail,
  onBackToBlogs,
  onShare,
  onSelectCategory,
  onSelectRelatedBlog,
  onSubscribe,
}) => {
  // Track which numbered item has expanded "read more" text
  const [expandedPoints, setExpandedPoints] = useState({});
  // Track bottom "Read More" button toggle
  const [allExpanded, setAllExpanded] = useState(false);

  const togglePoint = (id) => {
    setExpandedPoints((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleToggleAll = () => {
    setAllExpanded(!allExpanded);
  };

  // Helper to render text with an inline link for highlighted keywords
  const renderContentWithLink = (text, highlight, highlightLink) => {
    if (!text) return null;
    if (!highlight || !highlightLink || !text.includes(highlight)) {
      return text;
    }
    const parts = text.split(highlight);
    return (
      <>
        {parts.map((part, index) => (
          <React.Fragment key={index}>
            {part}
            {index < parts.length - 1 && (
              <a
                href={highlightLink}
                target={highlightLink.startsWith('http') ? '_blank' : undefined}
                rel={highlightLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-[#9d6928] font-semibold underline hover:text-[#794e18] transition-colors cursor-pointer"
              >
                {highlight}
              </a>
            )}
          </React.Fragment>
        ))}
      </>
    );
  };

  // Breadcrumb items from data or fallback
  const breadcrumbItems = blog.breadcrumb || [
    { label: "Home", href: "#" },
    { label: "Blogs", href: "#" },
    { label: blog.title, href: "#", current: true }
  ];

  return (
    <article className="w-full">
      {/* 1. Breadcrumb Navigation from data */}
      <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-neutral-500">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            return (
              <React.Fragment key={index}>
                {index > 0 && (
                  <li className="text-neutral-400" aria-hidden="true">
                    <ChevronRight className="w-3 h-3 inline-block" />
                  </li>
                )}
                <li>
                  {isLast ? (
                    <span className="text-neutral-700 font-medium truncate max-w-xs sm:max-w-md md:max-w-lg inline-block">
                      {item.label}
                    </span>
                  ) : (
                    <button
                      onClick={onBackToBlogs}
                      className="hover:text-[#8b1522] transition-colors focus:outline-none"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </nav>

      {/* 2. Hero Panoramic Image from data */}
      <div className="relative w-full aspect-[2.1/1] sm:aspect-[2.3/1] max-h-[460px] rounded-xl sm:rounded-2xl overflow-hidden bg-neutral-900 mb-6 sm:mb-8 shadow-sm border border-[#eae3d5]">
        <img
          src={blog.heroImage || blog.image}
          alt={blog.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* 3. Category & Main Title from data */}
      <div className="mb-4">
        {blog.category && (
          <span className="inline-block text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#8b1522] uppercase mb-2 font-sans">
            {blog.category}
          </span>
        )}
        <h1 className="font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.18] text-[#1c1819] mb-3">
          {blog.title}
        </h1>

        {/* Meta Bar: Date | Read Time | Share from data */}
        {/* <div className="flex items-center gap-3 sm:gap-4 text-xs text-neutral-500 pb-5 border-b border-[#ece6d9]">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#8b1522]" />
            <span>{blog.date}</span>
          </div>
          <span className="text-neutral-300">|</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#8b1522]" />
            <span>{blog.readTime || '7 min read'}</span>
          </div>
          <span className="text-neutral-300">|</span>
          <button
            onClick={() => onShare?.(blog)}
            className="flex items-center gap-1.5 text-neutral-600 hover:text-[#8b1522] transition-colors focus:outline-none"
            aria-label="Share article"
          >
            <Share2 className="w-3.5 h-3.5 text-[#8b1522]" />
            <span>Share</span>
          </button>
        </div> */}
      </div>

      {/* 4. Introductory Paragraphs - 100% data-driven from data.js */}
      <div className="space-y-3.5 sm:space-y-4 text-[13px] sm:text-[14px] text-neutral-700 leading-relaxed mb-8">
        {blog.introParagraphs && blog.introParagraphs.map((para, idx) => {
          if (typeof para === 'string') {
            return (
              <p
                key={idx}
                className={idx === blog.introParagraphs.length - 1 ? "font-medium text-neutral-800" : ""}
              >
                {para}
              </p>
            );
          }
          return (
            <p
              key={para.id || idx}
              className={para.isBold ? "font-medium text-neutral-800" : ""}
            >
              {para.text}
              {para.highlight && (
                <>
                  {' '}
                  {para.highlightLink ? (
                    <a
                      href={para.highlightLink}
                      target={para.highlightLink.startsWith('http') ? '_blank' : undefined}
                      rel={para.highlightLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[#9d6928] font-semibold underline hover:text-[#794e18] transition-colors cursor-pointer"
                    >
                      {para.highlight}
                    </a>
                  ) : (
                    <strong className="text-[#9d6928] font-semibold cursor-pointer hover:underline">
                      {para.highlight}
                    </strong>
                  )}
                </>
              )}
              {para.postHighlight && (
                <>
                  {' '}
                  {para.postHighlight}
                </>
              )}
            </p>
          );
        })}
      </div>

      {/* 5. Numbered Points - 100% data-driven from data.js */}
      {blog.numberedPoints && blog.numberedPoints.length > 0 && (
        <div className="space-y-6 sm:space-y-7 mb-10">
          {blog.numberedPoints.map((point) => {
            const isExpanded = expandedPoints[point.id] || allExpanded;

            return (
              <div
                key={point.id}
                className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-2 sm:p-0 rounded-xl transition-all"
              >
                {/* Thumbnail Image on the Left */}
                {/* {point.image && (
                  <div className="relative w-full sm:w-[210px] md:w-[220px] aspect-[16/10] shrink-0 rounded-xl overflow-hidden bg-neutral-100 border border-[#eae3d5] shadow-xs">
                    <img
                      src={point.image}
                      alt={point.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                )} */}

                {/* Content on the Right with Gold Number Circle & Title */}
                <div className="flex-1 flex flex-col justify-start">
                  <div className="flex items-start gap-3 mb-1.5">
                    {/* Gold Number Circle */}
                    <span className="w-7 h-7 sm:w-7 sm:h-7 rounded-full bg-[#c79d4c] text-white font-bold text-xs sm:text-sm flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                      {point.number}
                    </span>

                    {/* Title */}
                    <h3 className="font-garamond text-lg sm:text-[20px] font-bold text-[#1f1a1c] leading-snug">
                      {point.title}
                    </h3>
                  </div>

                  {/* Body Text */}
                  <p className="text-[13px] sm:text-sm text-neutral-600 leading-relaxed mb-2 pl-10 sm:pl-10">
                    {point.description}
                  </p>

                  {/* Extended Content if expanded */}
                  {isExpanded && point.moreContent && (
                    <div className="pl-10 sm:pl-10 mb-2 py-2 px-3 bg-[#f6f2e9]/70 rounded-lg border-l-2 border-[#c79d4c] text-xs sm:text-[13px] text-neutral-700 leading-relaxed animate-in fade-in duration-200">
                      {renderContentWithLink(point.moreContent, point.highlight, point.highlightLink)}
                    </div>
                  )}

                  {/* Read More Link */}
                  {point.moreContent && (
                    <div className="pl-10 sm:pl-10">
                      <button
                        onClick={() => togglePoint(point.id)}
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#9d6928] hover:text-[#794e18] transition-colors focus:outline-none"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? 'Read Less ←' : 'Read More →'}</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 6. Centered Warm Bronze Button: Read More - text from data.js */}
      {blog.numberedPoints && blog.numberedPoints.length > 0 && (
        <div className="flex justify-center pb-8 pt-2">
          <button
            id="btn-expand-all-details"
            onClick={handleToggleAll}
            className="px-8 py-2.5 rounded-full bg-[#9d6928] hover:bg-[#83551e] text-white text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>
              {allExpanded
                ? (blog.readMoreButton?.expandedText || 'Show Less Insights')
                : (blog.readMoreButton?.defaultText || 'Read More')}
            </span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* 7. Final Thoughts Section from data.js */}
      {blog.finalThoughts && (
        <div className="mt-8 pt-6 border-t border-[#ece6d9] space-y-4">
          {blog.finalThoughts.title && (
            <h3 className="font-garamond text-xl sm:text-2xl font-bold text-[#1f1a1c]">
              {blog.finalThoughts.title}
            </h3>
          )}
          <div className="space-y-3.5 text-[13px] sm:text-[14px] text-neutral-700 leading-relaxed">
            {blog.finalThoughts.paragraphs?.map((para, pIdx) => (
              <p
                key={pIdx}
                className={para.isBold ? "font-bold text-neutral-800" : ""}
              >
                {para.text}
                {para.highlight && (
                  <>
                    {' '}
                    {para.highlightLink ? (
                      <a
                        href={para.highlightLink}
                        target={para.highlightLink.startsWith('http') ? '_blank' : undefined}
                        rel={para.highlightLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-[#9d6928] font-semibold underline hover:text-[#794e18] transition-colors cursor-pointer"
                      >
                        {para.highlight}
                      </a>
                    ) : (
                      <strong className="text-[#9d6928] font-semibold hover:underline">
                        {para.highlight}
                      </strong>
                    )}
                  </>
                )}
                {para.postHighlight && <> {para.postHighlight}</>}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* 8. Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8 pt-5 border-t border-[#ece6d9] flex flex-wrap items-center gap-2">
          <Tag className="w-3.5 h-3.5 text-[#8b1522]" />
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            Tags:
          </span>
          {blog.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs bg-[#f6f2e9] border border-[#eae3d5] px-3 py-1 rounded-full text-neutral-700 font-medium"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* 9. Related Blogs */}
      {/* {blog.relatedBlogs && blog.relatedBlogs.length > 0 && (
        <div className="mt-12 pt-8 border-t border-[#ece6d9]">
          <h3 className="font-garamond text-2xl font-bold text-[#1f1a1c] mb-6">
            Related Articles
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {blog.relatedBlogs.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectRelatedBlog?.(item)}
                className="group cursor-pointer bg-[#fcfaf6] rounded-xl overflow-hidden border border-[#eae3d5] hover:border-[#dfb76c] transition-all hover:shadow-md flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden bg-neutral-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <h4 className="font-garamond text-base font-bold text-neutral-800 group-hover:text-[#8b1522] transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs text-neutral-500 mt-2 pt-2 border-t border-[#f0ece1]">
                    <span>{item.date}</span>
                    <span className="text-[#8b1522] font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )} */}
    </article>
  );
};
