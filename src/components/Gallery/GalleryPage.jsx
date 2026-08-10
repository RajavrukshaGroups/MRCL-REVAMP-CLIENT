import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, ChevronLeft, ChevronRight, ZoomIn, LayoutGrid, 
  Building2, Sparkles, Route, Smile
} from 'lucide-react';
import { ASSETS } from '../../data';

import sugarLandImg1 from "../../assets/sugarland-unicorn/real-images/1.png"
import sugarLandImg2 from "../../assets/sugarland-unicorn/real-images/2.png"
import sugarLandImg3 from "../../assets/sugarland-unicorn/real-images/3.png"
//import sugarLandImg4 from "../../assets/sugarland-unicorn/real-images/4.png"
import sugarLandImg5 from "../../assets/sugarland-unicorn/real-images/5.png"
//import sugarLandImg6 from "../../assets/sugarland-unicorn/real-images/6.png"
import sugarLandImg7 from "../../assets/sugarland-unicorn/real-images/7.jpeg"
import sugarLandImg8 from "../../assets/sugarland-unicorn/real-images/8.jpeg"
import sugarLandImg9 from "../../assets/sugarland-unicorn/real-images/9.jpeg"
import sugarLandImg10 from "../../assets/sugarland-unicorn/real-images/10.png"
import sugarLandImg11 from "../../assets/sugarland-unicorn/real-images/11.png"
import sugarLandImg12 from "../../assets/sugarland-unicorn/real-images/12.png"
import sugarLandImg13 from "../../assets/sugarland-unicorn/real-images/13.png"
import sugarLandImg14 from "../../assets/sugarland-unicorn/real-images/14.png"
import sugarLandImg15 from "../../assets/sugarland-unicorn/real-images/15.jpeg"
import sugarLandImg16 from "../../assets/sugarland-unicorn/real-images/16.png"
import sugarLandImg17 from "../../assets/sugarland-unicorn/real-images/17.png"
import sugarLandImg18 from "../../assets/sugarland-unicorn/real-images/18.png"
import sugarLandImg19 from "../../assets/sugarland-unicorn/real-images/19.png"
import sugarLandImg20 from "../../assets/sugarland-unicorn/real-images/20.png"
import sugarLandImg21 from "../../assets/sugarland-unicorn/real-images/21.png"
import sugarLandImg22 from "../../assets/sugarland-unicorn/real-images/22.jpg"
import sugarLandImg23 from "../../assets/sugarland-unicorn/real-images/23.jpg"
import sugarLandImg24 from "../../assets/sugarland-unicorn/real-images/24.jpg"
import sugarLandImg25 from "../../assets/sugarland-unicorn/real-images/25.jpg"
import sugarLandImg26 from "../../assets/sugarland-unicorn/real-images/26.jpg"
import sugarLandImg27 from "../../assets/sugarland-unicorn/real-images/27.jpg"
import sugarLandImg28 from "../../assets/sugarland-unicorn/real-images/28.jpg"
import sugarLandImg29 from "../../assets/sugarland-unicorn/real-images/29.jpg"
import sugarLandImg30 from "../../assets/sugarland-unicorn/real-images/30.jpg"


const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 bg-[#e8dec7]/40 animate-pulse flex items-center justify-center z-0">
          <div className="w-8 h-8 border-2 border-[#c5a85c]/30 border-t-[#c5a85c] rounded-full animate-spin"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500 relative z-10`}
        referrerPolicy="no-referrer"
      />
    </>
  );
};

export default function GalleryPage() {
  // Independent filters for each project section
  const [activeFilterSugarland, setActiveFilterSugarland] = useState('all');
  const [activeFilterSylvan, setActiveFilterSylvan] = useState('all');

  // Lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [lightboxProject, setLightboxProject] = useState(null); // 'sugarland' or 'sylvan'

  // Filter tabs schema with custom icons
  const filterTabs = [
    { id: 'all', name: 'All Images', icon: LayoutGrid },
    { id: 'architecture', name: 'Architecture', icon: Building2 },
    { id: 'amenities', name: 'Amenities', icon: Sparkles },
    { id: 'development', name: 'Development', icon: Route },
    { id: 'lifestyle', name: 'Lifestyle', icon: Smile },
  ];

  // Gallery items for Unicon Sugarland (14 items as shown in screenshot)
  const sugarlandItems = [
    {
      id: 'sug-1',
      title: 'Bespoke Modern Villa',
      category: 'architecture',
      categoryLabel: 'Architecture',
      image: sugarLandImg1,
      description: 'Elegant contemporary villa exterior with warm lighting and tropical landscaping.',
    },
    {
      id: 'sug-2',
      title: 'Architectural Side-Elevation',
      category: 'architecture',
      categoryLabel: 'Architecture',
      image: sugarLandImg2,
      description: 'Linear facade balancing wooden finishes, concrete panels, and double-glazing.',
    },
    {
      id: 'sug-3',
      title: 'Contemporary Luxury Villa',
      category: 'architecture',
      categoryLabel: 'Architecture',
      image: sugarLandImg3,
      description: 'Triple-story statement estate showcasing premium natural stone columns.',
    },
    // {
    //   id: 'sug-4',
    //   title: 'Symmetrical Frontage',
    //   category: 'architecture',
    //   categoryLabel: 'Architecture',
    //   image: sugarLandImg4,
    //   description: 'Bespoke cubic geometry framing private yards and ambient lighting lines.',
    // },
    {
      id: 'sug-5',
      title: 'Security Entrance Portal',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368888/5_brcwbo.jpg",
      description: 'Actual photograph of the secure main entry arch and gated community security cabin.',
    },
    {
      id: 'sug-6',
      title: 'Gated Community Pathways',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368889/6_hgqrfb.jpg",
      description: 'Finished internal pathways lined with landscaped border trees and fences.',
    },
    {
      id: 'sug-7',
      title: 'Community Landmark Signage',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368886/7_l2cc5h.jpg",
      description: 'Pristine compound sidewalk presenting the elegant community hallmark monument.',
    },
    {
      id: 'sug-8',
      title: 'Row Villa Street View',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368886/8_mrudl3.jpg",
      description: 'An actual photograph showing row houses layout and manicured green reserves.',
    },
    {
      id: 'sug-9',
      title: 'Entrance Gate House',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368887/9_l7kenq.jpg",
      description: 'Sturdy grand entrance portal built to ensure comprehensive security.',
    },
    {
      id: 'sug-10',
      title: 'Lush Vertical Garden',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368889/10_no2grd.jpg",
      description: 'Intricately designed live foliage screens promoting an eco-friendly neighborhood.',
    },
    {
      id: 'sug-11',
      title: 'Landscaped Internal Corridors',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368890/11_fxvr92.jpg",
      description: 'Lush greenbelt corridors crafted for evening walks and outdoor relaxation.',
    },
    {
      id: 'sug-12',
      title: 'Premium Entry Archway',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784368891/12_hkiend.jpg",
      description: 'Modern entrance portal design with luxury compound masonry walls.',
    },
    {
      id: 'sug-13',
      title: 'Clubhouse Swimming Pool',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg5,
      description: 'Shimmering blue waters in the central recreation pavilion for premium residents.',
    },
    // {
    //   id: 'sug-14',
    //   title: 'Gated Villa Masterplan',
    //   category: 'lifestyle',
    //   categoryLabel: 'Lifestyle',
    //   image: sugarLandImg6,
    //   description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    // },
    {
      id: 'sug-15',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg7,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-16',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg8,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-17',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg9,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-18',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg10,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-19',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg11,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-20',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg12,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-21',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg13,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg14,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg15,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg16,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg17,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg18,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg19,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg20,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: sugarLandImg21,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-22',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg22,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-23',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg23,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-24',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg24,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-25',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg25,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-26',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg26,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-27',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg27,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-28',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg28,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-29',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg29,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
    {
      id: 'sug-30',
      title: 'Gated Villa Masterplan',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: sugarLandImg30,
      description: 'Aerial layout rendering demonstrating beautifully planned villa neighborhoods.',
    },
  ];

  // Gallery items for Sylvan Woods (9 items as shown in screenshot)
  const sylvanItems = [
    {
      id: 'syl-1',
      title: 'Grand Welcome Arch',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367733/1_vtwqio.jpg",
      description: 'The Sylvan Woods entrance portal fully decorated for the grand real estate launching event.',
    },
    {
      id: 'syl-2',
      title: 'Signature Community Lawn',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367732/2_rcjfya.jpg",
      description: 'Premium green turf displaying the grand white MRCL project landmark letterings.',
    },
    {
      id: 'syl-3',
      title: ' Kannada Compound Wall Art',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367732/3_htfwlo.jpg",
      description: 'Artistic compound walls with beautifully carved Kannada language project typography.',
    },
    {
      id: 'syl-4',
      title: 'Red Carpet Launchway',
      category: 'development',
      categoryLabel: 'Development',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367731/4_ktnmdl.jpg",
      description: 'A beautiful carpet line laid along the wide paved avenues for launching celebrations.',
    },
    {
      id: 'syl-5',
      title: 'Infrastructure Levelling Site',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367732/5_u1isr9.jpg",
      description: 'Comprehensive earth leveling work underway for creating clean residential plots.',
    },
    {
      id: 'syl-6',
      title: 'Layout Orientation Board',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367731/6_agmo5q.jpg",
      description: 'Professional black layout map board placed amidst fresh landscape shrubs.',
    },
    {
      id: 'syl-7',
      title: 'Actual Site Layout Development',
      category: 'amenities',
      categoryLabel: 'Amenities',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367731/7_o4nyrb.jpg",
      description: 'Wide panoramic view of Sylvan Woods red earth plot preparation and planning.',
    },
    {
      id: 'syl-8',
      title: 'Event Celebration Canopy',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367731/8_uwvibl.jpg",
      description: 'Premium decorated layout tent and stage arranged during the launching gala.',
    },
    {
      id: 'syl-9',
      title: 'Roadside Signature Billboard',
      category: 'lifestyle',
      categoryLabel: 'Lifestyle',
      image: "https://res.cloudinary.com/rot5ausf/image/upload/v1784367731/9_qyexqq.jpg",
      description: 'Prominent marketing billboard for Sylvan Woods highlighting modern site progress.',
    }
  ];

  // Filtering Logic
  const filteredSugarlandItems = activeFilterSugarland === 'all'
    ? sugarlandItems
    : sugarlandItems.filter(item => item.category === activeFilterSugarland);

  const filteredSylvanItems = activeFilterSylvan === 'all'
    ? sylvanItems
    : sylvanItems.filter(item => item.category === activeFilterSylvan);

  // Lightbox navigation helpers
  const handleNext = (e) => {
    e.stopPropagation();
    const items = lightboxProject === 'sugarland' ? filteredSugarlandItems : filteredSylvanItems;
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % items.length);
    }
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    const items = lightboxProject === 'sugarland' ? filteredSugarlandItems : filteredSylvanItems;
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
    }
  };

  const handleImageClick = (projectType, index) => {
    setLightboxProject(projectType);
    setLightboxIndex(index);
  };

  const getLightboxActiveItem = () => {
    if (lightboxIndex === null || !lightboxProject) return null;
    const items = lightboxProject === 'sugarland' ? filteredSugarlandItems : filteredSylvanItems;
    return items[lightboxIndex];
  };

  const activeLightboxItem = getLightboxActiveItem();

  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 overflow-x-hidden">
      
      {/* 1. HERO BANNER - MATCHING THE SITE AESTHETIC */}
      <section className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center bg-gradient-to-r from-[#4a0105] via-[#2c0104] to-[#120002] overflow-hidden border-b border-[#c5a85c]/30">
        
        {/* Silhouette background */}
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.12] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />

        {/* Brand visual box on the right: "Building Better Communities" */}
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 w-48 sm:w-56 h-[75%] rounded-2xl overflow-hidden border border-[#c5a85c]/40 hidden md:flex flex-col items-center justify-center p-6 text-center bg-black/45 backdrop-blur-sm pointer-events-none z-10">
          <svg className="w-12 h-12 text-[#c5a85c] mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-serif text-[10px] text-[#c5a85c] tracking-[0.2em] font-bold uppercase block">BUILDING</span>
          <span className="font-serif text-[10px] text-white tracking-[0.2em] font-bold uppercase block mt-1">BETTER</span>
          <span className="font-serif text-[10px] text-[#c5a85c] tracking-[0.2em] font-bold uppercase block mt-1">COMMUNITIES</span>
        </div>

        {/* Left curves decoration */}
        <div className="absolute left-0 top-0 w-[30%] h-full opacity-25 pointer-events-none scale-x-[-1] z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="2" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-[30%] h-full opacity-25 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="2" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="1" strokeDasharray="4 4" />
            <defs>
              <linearGradient id="heroDharithriGoldGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c5a85c" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* Logo Brand Title */}
          <div className="flex flex-col items-center gap-0.5 mb-5 opacity-95 scale-90 sm:scale-100">
            <svg className="w-10 h-10 text-[#c5a85c] filter drop-shadow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.15)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-white text-xs font-bold tracking-[0.25em] leading-none uppercase mt-1">MRCL</span>
            <span className="font-sans text-[6px] tracking-[0.3em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#d4b673] to-[#b5802f] tracking-[0.1em] uppercase text-center leading-tight">
            IMAGE GALLERY
          </h1>

          {/* Ornate custom line */}
          <div className="w-44 sm:w-56 h-5 text-[#c5a85c]/80 flex items-center justify-center my-1.5">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>

          <p className="font-serif text-stone-200 text-xs sm:text-sm font-light italic tracking-widest mt-1">
            Moments of Excellence. Built to Inspire.
          </p>
        </div>
      </section>

      {/* 2. GALLERY SECTIONS MAIN CONTAINER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 space-y-20 max-w-7xl mx-auto">
        
        {/* ================= SECTION A: MRCL UNICON SUGARLAND ================= */}
        <div className="space-y-8">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-[#250205] tracking-[0.15em] uppercase">
              MRCL UNICON SUGARLAND
            </h2>
            
            {/* Ornate line */}
            <div className="w-32 h-5 text-[#c5a85c]/80 flex items-center justify-center my-1.5 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
                <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
                <circle cx="100" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Elegant Gold-Bordered Pill Dropdown / Horizontal Tab Container */}
          <div className="flex justify-center w-full">
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center bg-white border border-[#c5a85c]/50 rounded-full px-2 py-1.5 shadow-md gap-1 max-w-full overflow-hidden">
              {filterTabs.map((tab, idx) => {
                const IconComp = tab.icon;
                const isActive = activeFilterSugarland === tab.id;
                return (
                  <React.Fragment key={tab.id}>
                    {idx > 0 && (
                      <span className="hidden sm:inline text-[#c5a85c]/40 font-light select-none">|</span>
                    )}
                    <button
                      onClick={() => setActiveFilterSugarland(tab.id)}
                      className={`cursor-pointer px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                        isActive
                          ? 'bg-[#6a0105] text-white border border-[#c5a85c] shadow-md scale-102'
                          : 'bg-transparent text-[#b5802f] hover:text-[#6a0105] hover:bg-stone-50'
                      }`}
                    >
                      <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#c5a85c]'}`} />
                      <span>{tab.name}</span>
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Grid Layout (exactly 4-cols on desktop, 2-cols on mobile) */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSugarlandItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleImageClick('sugarland', index)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#c5a85c]/35 hover:border-[#6a0105] cursor-pointer shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:scale-102"
                >
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105"
                  />
                  
                  {/* Subtle caption bottom panel (matches look of row houses grids) */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-3 pt-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <span className="font-sans text-[8px] tracking-[0.2em] text-[#c5a85c] font-black uppercase">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif text-white text-xs font-bold uppercase tracking-wider leading-none mt-0.5">
                      {item.title}
                    </h4>
                  </div>

                  {/* Absolute zoom hover icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-lg">
                    <ZoomIn className="w-4.5 h-4.5" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Separator Ornament line */}
        <div className="w-full flex justify-center py-2">
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c] to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAF6F0] border border-[#c5a85c] rotate-45" />
          </div>
        </div>

        {/* ================= SECTION B: MRCL SYLVAN WOODS ================= */}
        <div className="space-y-8">
          
          {/* Header */}
          <div className="text-center">
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-extrabold text-[#250205] tracking-[0.15em] uppercase">
              MRCL SYLVAN WOODS
            </h2>
            
            {/* Ornate line */}
            <div className="w-32 h-5 text-[#c5a85c]/80 flex items-center justify-center my-1.5 mx-auto">
              <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
                <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
                <circle cx="100" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Elegant Gold-Bordered Pill Dropdown / Horizontal Tab Container */}
          <div className="flex justify-center w-full">
            <div className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center bg-white border border-[#c5a85c]/50 rounded-full px-2 py-1.5 shadow-md gap-1 max-w-full overflow-hidden">
              {filterTabs.map((tab, idx) => {
                const IconComp = tab.icon;
                const isActive = activeFilterSylvan === tab.id;
                return (
                  <React.Fragment key={tab.id}>
                    {idx > 0 && (
                      <span className="hidden sm:inline text-[#c5a85c]/40 font-light select-none">|</span>
                    )}
                    <button
                      onClick={() => setActiveFilterSylvan(tab.id)}
                      className={`cursor-pointer px-3 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 focus:outline-none ${
                        isActive
                          ? 'bg-[#6a0105] text-white border border-[#c5a85c] shadow-md scale-102'
                          : 'bg-transparent text-[#b5802f] hover:text-[#6a0105] hover:bg-stone-50'
                      }`}
                    >
                      <IconComp className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#c5a85c]'}`} />
                      <span>{tab.name}</span>
                    </button>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          {/* Grid Layout (exactly 4-cols on desktop, 2-cols on mobile) */}
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSylvanItems.map((item, index) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => handleImageClick('sylvan', index)}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#c5a85c]/35 hover:border-[#6a0105] cursor-pointer shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:scale-102"
                >
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105"
                  />
                  
                  {/* Subtle caption bottom panel */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent p-3 pt-6 text-left opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end">
                    <span className="font-sans text-[8px] tracking-[0.2em] text-[#c5a85c] font-black uppercase">
                      {item.categoryLabel}
                    </span>
                    <h4 className="font-serif text-white text-xs font-bold uppercase tracking-wider leading-none mt-0.5">
                      {item.title}
                    </h4>
                  </div>

                  {/* Absolute zoom hover icon */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white shadow-lg">
                    <ZoomIn className="w-4.5 h-4.5" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

      </section>

      {/* 3. BOTTOM SLOGAN STRIP */}
      <section className="bg-[#250205] py-14 text-[#FAF6F0] border-t-2 border-[#c5a85c] relative text-center">
        <div className="absolute inset-0 opacity-[0.03] bg-cover bg-center" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          
          {/* Ornate gold scroll */}
          <div className="w-32 h-5 text-[#c5a85c]/80 flex items-center justify-center my-1 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#c5a85c] tracking-[0.25em] uppercase">
            CRAFTING LANDMARKS. CREATING LEGACIES.
          </h3>
          
          {/* Micro gold scroll */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c]/50 to-transparent mx-auto relative mt-2">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c5a85c] rotate-45" />
          </div>
        </div>
      </section>

      {/* 4. DYNAMIC INTERACTIVE LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && activeLightboxItem && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 z-50 overflow-y-auto bg-[#000]/95 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-10 select-none"
          >
            
            {/* Dark close trigger area */}
            <div className="absolute inset-0" onClick={() => { setLightboxIndex(null); setLightboxProject(null); }} />

            {/* Stage */}
            <div className="relative max-w-4xl w-full my-auto z-10 flex flex-col space-y-4 px-2 sm:px-4">
              
              {/* Elegant Header Bar */}
              <div className="flex items-center justify-between w-full pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-serif text-[10px] sm:text-xs font-bold text-[#c5a85c] tracking-[0.2em] uppercase">
                    Viewing Image
                  </span>
                </div>
                <button
                  onClick={() => { setLightboxIndex(null); setLightboxProject(null); }}
                  className="cursor-pointer group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#8c1c24] border border-white/20 text-stone-200 hover:text-white transition-all duration-200"
                  aria-label="Close Lightbox"
                >
                  <span className="text-[9px] font-sans font-bold tracking-wider uppercase">Close</span>
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              <div className="relative aspect-[16/10] w-full max-h-[75vh] rounded-2xl overflow-hidden border border-white/20 bg-stone-950 shadow-2xl">
                <img 
                  src={activeLightboxItem.image} 
                  alt={activeLightboxItem.title} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left Switcher arrow */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#8c1c24] border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Switcher arrow */}
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#8c1c24] border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Text caption footer */}
              <div className="w-full text-center space-y-1">
                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-[#c5a85c] uppercase">
                  {lightboxProject === 'sugarland' ? 'MRCL UNICON SUGARLAND' : 'MRCL SYLVAN WOODS'} • {activeLightboxItem.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-white font-bold tracking-wide uppercase">
                  {activeLightboxItem.title}
                </h3>
                <p className="max-w-xl mx-auto text-xs sm:text-sm text-stone-300 font-light font-sans">
                  {activeLightboxItem.description}
                </p>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
