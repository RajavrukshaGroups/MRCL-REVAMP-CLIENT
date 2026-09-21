import React from 'react';
import { X, Calendar, Clock, User, Share2, Tag } from 'lucide-react';

export const ArticleModal = ({
  post,
  onClose,
  onShare,
}) => {
  if (!post) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        id="article-reader-modal"
        className="relative w-full max-w-3xl bg-[#fbf9f5] rounded-2xl shadow-2xl overflow-hidden border border-[#dfb76c]/40 my-8 text-neutral-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-article-modal"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 hover:bg-[#8b1522] text-white flex items-center justify-center transition-colors shadow-md focus:outline-none"
          aria-label="Close article preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-neutral-900 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block text-xs font-bold tracking-widest text-[#f5e2b8] uppercase bg-[#3c040d]/80 px-2.5 py-1 rounded border border-[#dfb76c]/40 mb-2">
              {post.category}
            </span>
            <h1 className="font-garamond text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight drop-shadow-sm">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Article Meta Bar */}
        <div className="px-6 py-3.5 bg-[#f5efe2] border-b border-[#eae3d5] flex flex-wrap items-center justify-between gap-4 text-xs text-neutral-600">
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#8b1522]" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#8b1522]" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-[#8b1522]" />
              <span>{post.author}</span>
            </div>
          </div>

          <button
            onClick={() => onShare(post)}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#8b1522] hover:text-[#520814] px-2.5 py-1 rounded border border-[#dfb76c]/50 bg-white hover:bg-[#faf7f2] transition-colors"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share</span>
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-5 max-h-[55vh] overflow-y-auto leading-relaxed text-sm sm:text-base text-neutral-700">
          <p className="font-medium text-neutral-800 text-base sm:text-lg italic border-l-4 border-[#dfb76c] pl-4 py-1 bg-[#f9f5ec]/70 rounded-r">
            {post.excerpt}
          </p>

          <div className="whitespace-pre-line space-y-4">
            {post.content}
          </div>

          {post.tags && post.tags.length > 0 && (
            <div className="pt-6 border-t border-[#eae3d5] flex flex-wrap items-center gap-2">
              <Tag className="w-3.5 h-3.5 text-[#8b1522]" />
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Tags:
              </span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white border border-[#eae3d5] px-2.5 py-0.5 rounded-full text-neutral-600 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Footer info in Modal */}
        <div className="px-6 py-4 bg-[#f5efe2] border-t border-[#eae3d5] flex items-center justify-between text-xs text-neutral-500">
          <span>Published by MRCL Infrastructure Media Desk</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-md bg-[#3c040d] text-[#f7e8c3] hover:bg-[#260207] transition-colors font-medium"
          >
            Close Reader
          </button>
        </div>
      </div>
    </div>
  );
};
