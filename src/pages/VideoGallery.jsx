import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, X, Building2, Home, MessageSquare, Award, Trophy, Sparkles, 
  Smile, Heart, Eye, Clock, ThumbsUp, Bell, Check, Film, ArrowRight
} from 'lucide-react';
import { ASSETS } from '../data';

const getYouTubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
};

export default function VideoGallery() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeVideo, setActiveVideo] = useState(null);
  
  // Subscription states
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [subSuccess, setSubSuccess] = useState(false);

  // Filter Tabs Schema
  const filterTabs = [
    { id: 'all', name: 'ALL VIDEOS', icon: Film },
    { id: 'projects', name: 'PROJECTS', icon: Building2 },
    { id: 'villas', name: 'VILLAS', icon: Home },
    { id: 'testimonials', name: 'TESTIMONIALS', icon: MessageSquare },
    { id: 'events', name: 'EVENTS', icon: Sparkles },
    { id: 'awards', name: 'AWARDS', icon: Trophy },
    { id: 'lifestyle', name: 'LIFESTYLE', icon: Smile },
  ];

  // 13 video items from the screenshot with correct title, subtitle, duration, rating, and category.
  // We match each with a beautiful real-estate video and a high-resolution thumbnail from our ASSETS.
  const videoItems = [
    {
      id: 'vid-1',
      title: 'Times Business Awards 2025',
      subtitle: 'MRCL Infrastructure Pvt Ltd',
      duration: '2:45',
      image: ASSETS.timesAward2025 || ASSETS.lobbyInterior,
      videoUrl: 'https://youtu.be/xWez3mhmt-I?si=WiTH_Fsjy6giGdIl',
      categories: ['events', 'awards'],
      views: '1,420',
      likes: '345',
    },
    {
      id: 'vid-2',
      title: 'Welcome to MRCL Infrastructure',
      subtitle: 'Building Better Communities',
      duration: '3:12',
      image: ASSETS.sugarlandStreet || ASSETS.ayanurStreet,
      videoUrl: 'https://youtu.be/hcK7r5_4Y3M?si=YFycY2IyumblF08s',
      categories: ['projects'],
      views: '2,890',
      likes: '612',
    },
    {
      id: 'vid-3',
      title: 'Luxury 4BHK Villas',
      subtitle: 'Premium Living Redefined',
      duration: '2:35',
      image: ASSETS.sugarlandVillaFront || ASSETS.prestigeVilla,
      videoUrl: 'https://youtu.be/bqy0jsfYsBE?si=OEmjyDYhxDYVFBp4',
      categories: ['villas'],
      views: '3,110',
      likes: '820',
      overlayText: 'OWN A LUXURY 4BHK VILLA • STARTING FROM 1.79 CR* • ALL THE VALUE OF IT!',
    },
    {
      id: 'vid-4',
      title: 'MRCL Unicon Sugarland',
      subtitle: 'The Perfect Address',
      duration: '1:58',
      image: ASSETS.sugarlandAerial || ASSETS.ayanurLayoutAerial,
      videoUrl: 'https://youtu.be/bqy0jsfYsBE?si=98UbpjUCKMdYX5I-',
      categories: ['projects'],
      views: '1,780',
      likes: '410',
      overlayText: 'Seamless Connectivity • Friendly • Well Planned Gated Projects • Shop. Dine. Unwind',
    },
    {
      id: 'vid-5',
      title: 'Why Families Choose MRCL',
      subtitle: 'Happy Families. Happy Living',
      duration: '2:01',
      image: ASSETS.ayanurStreet || ASSETS.dharithriStreet,
      videoUrl: 'https://youtu.be/78PfC0tJ_Gc?si=uBofgW_1qNL6_njb',
      categories: ['testimonials', 'lifestyle'],
      views: '1,950',
      likes: '390',
    },
    {
      id: 'vid-6',
      title: 'MRCL Luxury Villas Review',
      subtitle: 'A Home Beyond Expectations',
      duration: '1:46',
      image: ASSETS.prestigeVilla,
      videoUrl: 'https://youtu.be/JHHyQVrZhew?si=4fxOOv2M3Q4hk7JS',
      categories: ['testimonials'],
      rating: 5,
      views: '2,130',
      likes: '512',
    },
    {
      id: 'vid-7',
      title: 'Discover Elite Villa Living',
      subtitle: 'Crafted for Excellence',
      duration: '2:28',
      image: ASSETS.lobbyInterior,
      videoUrl: 'https://youtube.com/shorts/JHHyQVrZhew?si=ZAy7UxxpWTmKuHk8',
      categories: ['villas', 'lifestyle'],
      views: '1,660',
      likes: '488',
    },
    {
      id: 'vid-8',
      title: 'Real Words from a Resident',
      subtitle: 'Stories of Satisfaction',
      duration: '1:53',
      image: ASSETS.eliteVilla || ASSETS.serenityVilla,
      videoUrl: 'https://youtu.be/ESyy4BLoE8Q?si=7Ofwi9OSvXCG7ydq',
      categories: ['testimonials', 'lifestyle'],
      rating: 5,
      views: '1,540',
      likes: '392',
    },
    {
      id: 'vid-9',
      title: 'Times Business Awards',
      subtitle: 'Celebrating Our Journey',
      duration: '2:31',
      image: ASSETS.timesAward2025 || ASSETS.lobbyInterior,
      videoUrl: 'https://youtu.be/qabU_Yw0Ong?si=xxKRc9FqOS2jmxEG',
      categories: ['events', 'awards'],
      views: '2,400',
      likes: '510',
    },
    {
      id: 'vid-10',
      title: 'Celebrate This Sankranti',
      subtitle: 'Special Offers & Joy',
      duration: '1:59',
      image: ASSETS.sylvanEventEntrance || ASSETS.ayanurEnclave,
      videoUrl: 'https://youtu.be/qabU_Yw0Ong?si=xxKRc9FqOS2jmxEG',
      categories: ['events'],
      views: '1,250',
      likes: '298',
      overlayText: 'KOPPA GATE • BANNERGHATTA ROAD BENGALURU',
    },
    {
      id: 'vid-11',
      title: 'Luxury 4BHK Villas in Bangalore',
      subtitle: 'Spacious. Elegant. Exclusive',
      duration: '2:16',
      image: ASSETS.grandeurVilla || ASSETS.lobbyInterior,
      videoUrl: 'https://youtu.be/qabU_Yw0Ong?si=xxKRc9FqOS2jmxEG',
      categories: ['villas'],
      views: '3,540',
      likes: '915',
    },
    {
      id: 'vid-12',
      title: 'Best Villas in South Bangalore',
      subtitle: 'Live the Premium Life',
      duration: '1:47',
      image: ASSETS.serenityVilla || ASSETS.sugarlandVillaFront,
      videoUrl: 'https://youtu.be/qabU_Yw0Ong?si=xxKRc9FqOS2jmxEG',
      categories: ['projects', 'villas'],
      views: '2,010',
      likes: '495',
    },
    {
      id: 'vid-13',
      title: 'Affordable Luxury Villas',
      subtitle: 'Find Your Dream Home',
      duration: '1:52',
      image: ASSETS.sylvanPlotLayout || ASSETS.dharithriStreet,
      videoUrl: 'https://youtu.be/8FmE3V9z-Aw?si=pPN4F0-S2k1q8X-t',
      categories: ['villas'],
      views: '1,890',
      likes: '412',
    }
  ];

  // Filtering Logic
  const filteredVideos = activeTab === 'all'
    ? videoItems
    : videoItems.filter(item => item.categories.includes(activeTab));

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    if (subName && subEmail) {
      setSubSuccess(true);
      setTimeout(() => {
        setSubSuccess(false);
        setSubscribeModalOpen(false);
        setSubName('');
        setSubEmail('');
      }, 2500);
    }
  };

  return (
    <div className="bg-[#fcf8f2] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 overflow-x-hidden">
      
      {/* 1. LUXURY CUSTOM HERO BANNER - MATCHING THE SCREENSHOT */}
      <section className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center bg-gradient-to-r from-[#420105] via-[#240003] to-[#120002] overflow-hidden border-b-2 border-[#c5a85c]">
        
        {/* Faint pillar outlines & classical motif layer */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.09] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />

        {/* Floating background glowing circles for premium mood */}
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#8a1a24] opacity-[0.15] blur-[80px]" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#c5a85c] opacity-[0.12] blur-[85px]" />

        {/* Corner dots decoration */}
        <div className="absolute right-4 top-8 sm:right-10 sm:top-12 opacity-60 flex gap-1 items-center justify-center">
          <div className="grid grid-cols-5 gap-1.5">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#c5a85c]" />
            ))}
          </div>
        </div>

        {/* Film Reel decorative icon on the right side */}
        <div className="absolute right-6 sm:right-16 top-1/2 -translate-y-1/2 hidden md:flex items-center justify-center z-10 pointer-events-none">
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Film circle ring */}
            <svg className="w-full h-full text-[#c5a85c]/25 animate-[spin_25s_linear_infinite]" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />
              <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.75" fill="none" />
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const cx = 50 + 20 * Math.cos(angle);
                const cy = 50 + 20 * Math.sin(angle);
                return <circle key={i} cx={cx} cy={cy} r="5" fill="currentColor" opacity="0.4" />;
              })}
            </svg>
            {/* Inner glowing core with play button */}
            <div className="absolute w-14 h-14 rounded-full bg-gradient-to-br from-[#c5a85c] to-[#b5802f] flex items-center justify-center text-white shadow-[0_0_20px_rgba(197,168,92,0.5)] scale-90 sm:scale-100">
              <Play className="w-6 h-6 fill-white stroke-none ml-1 animate-[pulse_1.5s_infinite]" />
            </div>
          </div>
        </div>

        {/* Ornate custom left curve decoration */}
        <div className="absolute left-0 top-0 w-[24%] h-full opacity-20 pointer-events-none scale-x-[-1] z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        </div>
        
        {/* Right curves */}
        <div className="absolute right-0 top-0 w-[24%] h-full opacity-20 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroDharithriGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="heroDharithriGoldGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c5a85c" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Header Title & Subtitle Wrapper */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* MRCL Brand Logo Badge on Top Left Area of the Header */}
          <div className="flex flex-col items-center gap-0.5 mb-6 scale-95 sm:scale-100">
            <svg className="w-11 h-11 text-[#c5a85c] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.18)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-white text-xs font-black tracking-[0.28em] leading-none uppercase mt-1">MRCL</span>
            <span className="font-sans text-[6.5px] tracking-[0.32em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#e2c58a] to-[#b5802f] tracking-[0.08em] uppercase leading-tight filter drop-shadow">
            VIDEO GALLERY
          </h1>

          {/* Ornate Gold Dividers */}
          <div className="w-48 sm:w-60 h-6 text-[#c5a85c]/85 flex items-center justify-center my-2.5">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="3" fill="currentColor" />
              <polygon points="96,12 100,8 104,12 100,16" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <p className="font-serif text-stone-300 text-xs sm:text-sm tracking-[0.16em] uppercase font-light italic mt-1 bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
            Experience Our Projects in Motion
          </p>
        </div>
      </section>

      {/* Main Container - Curving inside to look incredibly neat and professional */}
      <section className="relative z-30 -mt-8 sm:-mt-10 bg-[#FAF6F0] rounded-t-[32px] border-t border-[#c5a85c]/30 shadow-2xl py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* ================= 2. FILTER PILLS NAVIGATION BAR ================= */}
        <div className="flex justify-center w-full">
          <div className="inline-flex flex-wrap items-center justify-center bg-[#FFFdfa] border border-[#c5a85c]/40 rounded-full px-2 py-1.5 shadow-md gap-0.5 sm:gap-1 max-w-full overflow-hidden">
            {filterTabs.map((tab, idx) => {
              const IconComp = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <React.Fragment key={tab.id}>
                  {idx > 0 && (
                    <span className="hidden md:inline text-[#c5a85c]/30 font-light text-sm select-none mx-0.5">|</span>
                  )}
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className={`cursor-pointer px-4 sm:px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 flex items-center gap-2 focus:outline-none ${
                      isActive
                        ? 'bg-[#4a0105] text-white border border-[#c5a85c] shadow-lg scale-103 font-black'
                        : 'bg-transparent text-[#9a7635] hover:text-[#4a0105] hover:bg-[#c5a85c]/10'
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

        {/* ================= 3. VIDEOS GRID ================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => (
              <motion.div
                layout
                key={video.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setActiveVideo(video)}
                className="group relative flex flex-col rounded-2xl overflow-hidden border-2 border-[#c5a85c]/25 hover:border-[#6a0105] cursor-pointer shadow-md bg-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                
                {/* Thumbnail Stage */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-900 border-b border-[#c5a85c]/20">
                  <img
                    src={video.image}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 transition-opacity duration-300 group-hover:from-black/90" />

                  {/* MRCL Brand Stamp / Badge top-left */}
                  <div className="absolute top-3 left-3 bg-[#4a0105] border border-[#c5a85c]/70 px-2 py-1.5 rounded-md flex items-center gap-1 shadow-md">
                    <svg className="w-3.5 h-3.5 text-[#c5a85c]" viewBox="0 0 100 100" fill="none">
                      <path d="M35,80 V25 L55,15 L75,25 V80" stroke="currentColor" strokeWidth="5" />
                      <line x1="10" y1="80" x2="90" y2="80" stroke="currentColor" strokeWidth="7" />
                    </svg>
                    <span className="font-serif text-[7.5px] font-black text-white tracking-widest leading-none">MRCL</span>
                  </div>

                  {/* Play Trigger Circle in Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 rounded-full bg-red-600 hover:bg-red-700 border border-white/20 flex items-center justify-center text-white shadow-lg transform transition-all duration-300 group-hover:scale-115 group-hover:bg-red-500">
                      <Play className="w-6 h-6 fill-white stroke-none ml-0.5" />
                    </div>
                  </div>

                  {/* 5-Star Overlay on specific reviews */}
                  {video.rating && (
                    <div className="absolute bottom-3 left-3 flex items-center gap-0.5 bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded">
                      {[...Array(video.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-[10px]">★</span>
                      ))}
                    </div>
                  )}

                  {/* Floating specific banner graphics for Unicon Sugarland or Custom Text overlay cards */}
                  {video.overlayText && (
                    <div className="absolute inset-x-2 bottom-3 pointer-events-none text-center">
                      <div className="bg-black/65 backdrop-blur-xs py-1 px-1.5 rounded border border-[#c5a85c]/20">
                        <p className="text-[8.5px] sm:text-[9.5px] font-serif text-[#e5c78a] tracking-wider leading-tight">
                          {video.overlayText}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Duration stamp bottom-right */}
                  <div className="absolute bottom-3 right-3 bg-black/75 px-2 py-0.5 rounded text-[10px] font-mono text-white tracking-wider border border-white/10">
                    {video.duration}
                  </div>
                </div>

                {/* Info Footer Block */}
                <div className="bg-[#240104] p-4 text-left flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-white text-sm font-bold uppercase tracking-wider line-clamp-1 group-hover:text-[#c5a85c] transition-colors leading-snug">
                      {video.title}
                    </h3>
                    <p className="text-[#c5a85c] font-sans text-[11px] font-medium tracking-wide mt-1 opacity-90 line-clamp-1">
                      {video.subtitle}
                    </p>
                  </div>
                  
                  {/* Subtle views info */}
                  <div className="flex items-center justify-between text-[9px] text-stone-400 tracking-wider font-mono uppercase mt-3 pt-2 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3 h-3 text-[#c5a85c]/60" />
                      {video.views} Views
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-2.5 h-2.5 text-[#c5a85c]/60" />
                      {video.likes} Likes
                    </span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Separator Line */}
        <div className="w-full flex justify-center py-4">
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c] to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAF6F0] border border-[#c5a85c] rotate-45" />
          </div>
        </div>

        {/* ================= 4. PREMIUM RED SUBSCRIBE BANNER ================= */}
        <div className="w-full px-1 sm:px-4">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#4d0106] via-[#2d0004] to-[#140003] border-2 border-[#c5a85c] shadow-xl px-6 py-8 sm:px-10 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Ambient gold/red decorative glows inside banner */}
            <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-[#c5a85c] opacity-[0.08] blur-3xl pointer-events-none" />
            <div className="absolute right-10 top-10 w-40 h-40 rounded-full bg-[#8a1a24] opacity-[0.1] blur-3xl pointer-events-none" />

            {/* Left/Center Text & Icon */}
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left z-10">
              
              {/* Glowing Video Reel Icon */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#c5a85c] to-[#b5802f] flex items-center justify-center text-white shadow-lg shadow-[#c5a85c]/25 transform transition-transform duration-500 hover:rotate-12 flex-shrink-0">
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a7 7 0 1 0 10 10" strokeDasharray="3 3" />
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
                </svg>
              </div>

              <div>
                <h2 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-[#e5c78a] tracking-wider uppercase">
                  Experience the Elegance. Watch Our Story.
                </h2>
                <p className="text-stone-300 font-sans text-xs sm:text-sm tracking-wide mt-1">
                  Subscribe to our channel for the latest walkthroughs, launches, and project announcements.
                </p>
              </div>
            </div>

            {/* Right Side Subscribe Action Button */}
            <div className="z-10 flex-shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setSubscribeModalOpen(true)}
                className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 bg-[#1b0002] hover:bg-[#c5a85c] text-[#e5c78a] hover:text-[#1b0002] border border-[#c5a85c] rounded-xl font-bold tracking-[0.12em] text-xs uppercase shadow-lg transition-all duration-300 hover:scale-103 group focus:outline-none"
              >
                <span>SUBSCRIBE NOW</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

          </div>
        </div>

      </section>

      {/* ================= 5. DYNAMIC LIGHTBOX VIDEO PLAYER MODAL ================= */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-[#000]/95 backdrop-blur-md flex justify-center items-start p-4 sm:p-6 md:p-10">
            
            {/* Click backdrop to exit */}
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />

            {/* Modal Stage */}
            <div className="relative max-w-4xl w-full my-auto z-10 flex flex-col space-y-4 px-2 sm:px-4">

              {/* Elegant Header Bar */}
              <div className="flex items-center justify-between w-full pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-serif text-[10px] sm:text-xs font-bold text-[#c5a85c] tracking-[0.2em] uppercase">
                    Now Playing
                  </span>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="cursor-pointer group flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-[#8c1c24] border border-white/20 text-stone-200 hover:text-white transition-all duration-200"
                  aria-label="Close Lightbox"
                >
                  <span className="text-[9px] font-sans font-bold tracking-wider uppercase">Close</span>
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Video container */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/20 bg-stone-950 shadow-2xl">
                {getYouTubeId(activeVideo.videoUrl) ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo.videoUrl)}?autoplay=1&rel=0`}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <video
                    src={activeVideo.videoUrl}
                    poster={activeVideo.image}
                    autoPlay
                    controls
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>

              {/* Video Information below video player */}
              <div className="w-full text-center space-y-1 px-4">
                <span className="text-[10px] sm:text-xs font-black tracking-[0.3em] text-[#c5a85c] uppercase block">
                  MRCL PRESENTATION • {activeVideo.duration} • {activeVideo.views} VIEWS
                </span>
                <h3 className="text-lg sm:text-2xl font-serif text-white font-bold tracking-wide uppercase">
                  {activeVideo.title}
                </h3>
                <p className="max-w-xl mx-auto text-xs sm:text-sm text-stone-300 font-light font-sans">
                  {activeVideo.subtitle} - Indulge in premium architectural blueprints, scenic gated community avenues, and premium client testimonials.
                </p>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

      {/* ================= 6. SUBSCRIBE POPUP DIALOG ================= */}
      <AnimatePresence>
        {subscribeModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]/80 backdrop-blur-sm px-4">
            <div className="absolute inset-0" onClick={() => setSubscribeModalOpen(false)} />
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-md bg-[#FAF6F0] border-2 border-[#c5a85c] rounded-3xl p-6 sm:p-8 z-10 shadow-2xl text-center overflow-hidden"
            >
              <button
                onClick={() => setSubscribeModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-stone-200 text-stone-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Decorative Header elements */}
              <div className="w-12 h-12 rounded-full bg-[#4a0105]/10 flex items-center justify-center mx-auto mb-4 text-[#c5a85c]">
                <Bell className="w-6 h-6 animate-[bounce_2s_infinite]" />
              </div>

              <h3 className="font-serif text-xl font-bold text-[#4a0105] uppercase tracking-wide">
                Join the Circle
              </h3>
              <p className="text-stone-600 font-sans text-xs sm:text-sm mt-1.5 mb-6">
                Receive instant project catalogs, premium villa launches, and exclusive early pricing deals directly to your inbox.
              </p>

              {subSuccess ? (
                <div className="py-8 space-y-3 flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Check className="w-6 h-6 stroke-[3]" />
                  </div>
                  <h4 className="text-md font-bold text-emerald-700">Subscribed Successfully!</h4>
                  <p className="text-xs text-stone-500">Thank you for connecting with MRCL Infrastructure.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribeSubmit} className="space-y-4">
                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={subName}
                      onChange={(e) => setSubName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#c5a85c]/45 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#4a0105] text-sm text-stone-900"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-bold text-stone-600 uppercase tracking-widest mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={subEmail}
                      onChange={(e) => setSubEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-[#c5a85c]/45 rounded-xl focus:outline-none focus:ring-1 focus:ring-[#4a0105] text-sm text-stone-900"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full py-3.5 bg-[#4a0105] hover:bg-[#6a0105] text-white rounded-xl font-bold tracking-widest text-xs uppercase shadow-md transition-all duration-300 mt-2"
                  >
                    CONFIRM SUBSCRIPTION
                  </button>
                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
