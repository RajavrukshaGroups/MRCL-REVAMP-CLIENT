import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export const BlogCard = ({ post, onReadMore }) => {
  return (
    <article
      id={`blog-card-${post.id}`}
      className="group flex flex-col h-full bg-white/70 rounded-xl overflow-hidden border border-[#eae3d5]/80 hover:border-[#dfb76c]/60 transition-all duration-300 hover:shadow-md cursor-pointer"
      onClick={() => onReadMore(post)}
    >
      {/* Card Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-100">
        <img
          src={post.image}
          alt={post.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Category Tag */}
          <span className="inline-block text-[11px] font-bold tracking-wider text-[#8b1522] uppercase mb-2">
            {post.category}
          </span>

          {/* Title */}
          <h2 className="font-garamond text-xl sm:text-[22px] font-bold leading-snug text-[#1f1d1d] group-hover:text-[#8b1522] transition-colors line-clamp-2 mb-2.5">
            {post.title}
          </h2>

          {/* Excerpt */}
          <p className="text-[13px] sm:text-sm text-neutral-600 leading-relaxed line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </div>

        {/* Footer Meta */}
        <div className="pt-4 border-t border-[#f0ece1] flex items-center justify-between text-xs mt-auto">
          {/* <div className="flex items-center gap-1.5 text-neutral-500">
            <Calendar className="w-3.5 h-3.5 text-[#8b1522]" />
            <span>{post.date}</span>
          </div> */}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onReadMore(post);
            }}
            className="flex items-center gap-1 font-bold tracking-wider uppercase text-[11px] text-[#8b1522] group-hover:text-[#500a12] transition-colors focus:outline-none"
            aria-label={`Read more about ${post.title}`}
          >
            <span>READ MORE</span>
            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
