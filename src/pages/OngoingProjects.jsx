import React from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  MapPin, Trees, ShieldCheck, TrendingUp, Calendar, ArrowRight 
} from 'lucide-react';
import { ASSETS } from '../data';

export default function OngoingProjects() {
  const navigate = useNavigate();
  const context = useOutletContext();
  const onOpenContact = context?.onOpenContact || (() => {});

  const handleSylvanWoodsClick = () => {
    navigate('/ongoing-projects/sylvan-woods');
  };

  const handleUniconSugarlandClick = () => {
    navigate('/ongoing-projects/unicon-sugarland');
  };

  return (
    <div id="ongoing-projects-showcase" className="bg-[#1e0104] min-h-screen text-[#faf6f0] font-sans selection:bg-[#8c1c24] selection:text-white pb-16 relative overflow-hidden">
      
      {/* Decorative Golden Ambient Sparks & Waves (Match visual theme of screenshot) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Subtle grid background overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#c5a85c_1px,transparent_1px)] [background-size:16px_16px]" />
        
        {/* Glowing Top-Left Golden Swoosh */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#c5a85c]/10 to-transparent blur-[120px]" />
        
        {/* Glowing Top-Right Golden Swoosh */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#c5a85c]/10 to-transparent blur-[120px]" />
      </div>

      {/* 1. HERO HEADER BANNER (Exactly as Screenshot) */}
      <section className="relative w-full pt-32 pb-12 px-4 sm:px-6 md:px-12 z-10 border-b border-[#c5a85c]/20">
        
        {/* Faint Reddish Silhouette of Construction in Background */}
        <div className="absolute inset-0 bg-cover bg-center opacity-[0.12] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />
        
        {/* Gold waves overlays (faint golden graphic sweeps) */}
        <div className="absolute right-0 bottom-0 w-[45%] h-full opacity-40 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
            <path d="M400,300 C300,280 200,200 150,100 C120,40 130,10 150,0" stroke="url(#sweepGoldGrad)" strokeWidth="1.5" />
            <path d="M400,290 C320,275 230,205 180,120 C155,70 160,35 180,0" stroke="url(#sweepGoldGrad)" strokeWidth="1" opacity="0.6" strokeDasharray="3 3" />
            <defs>
              <linearGradient id="sweepGoldGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c5a85c" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute left-0 bottom-0 w-[45%] h-full opacity-40 pointer-events-none scale-x-[-1]">
          <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
            <path d="M400,300 C300,280 200,200 150,100 C120,40 130,10 150,0" stroke="url(#sweepGoldGrad)" strokeWidth="1.5" />
            <path d="M400,290 C320,275 230,205 180,120 C155,70 160,35 180,0" stroke="url(#sweepGoldGrad)" strokeWidth="1" opacity="0.6" strokeDasharray="3 3" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto w-full flex flex-col items-center text-center">
          
          {/* Logo on top-left of the screen area (visual matching) */}
          <div className="flex flex-col items-center gap-1 mb-6">
            {/* Elegant stylized building outlines in gold */}
            <svg className="w-14 h-14 text-[#c5a85c]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.1)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
              {/* Internal building lines */}
              <line x1="45" y1="30" x2="45" y2="70" stroke="#c5a85c" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="55" y1="30" x2="55" y2="70" stroke="#c5a85c" strokeWidth="1" strokeDasharray="2 2" />
              <line x1="65" y1="30" x2="65" y2="70" stroke="#c5a85c" strokeWidth="1" strokeDasharray="2 2" />
            </svg>
            <span className="font-serif text-white text-base font-bold tracking-[0.2em] leading-none uppercase">MRCL</span>
            <span className="font-sans text-[7px] tracking-[0.3em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-black text-[#c5a85c] tracking-[0.08em] uppercase drop-shadow-md leading-tight mb-2">
            ONGOING PROJECTS
          </h1>
          
          {/* Ornate Divider */}
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#c5a85c]" />
            <div className="w-2.5 h-2.5 rotate-45 border border-[#c5a85c] bg-[#1e0104] flex items-center justify-center">
              <div className="w-1 h-1 rotate-45 bg-[#c5a85c]" />
            </div>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#c5a85c]" />
          </div>

          {/* Subtitle */}
          <p className="font-serif italic text-stone-300 text-sm sm:text-base md:text-lg tracking-wider">
            Building today for a better tomorrow.
          </p>

        </div>
      </section>

      {/* 2. CORE CARDS CONTENT */}
      <section className="relative bg-gradient-to-b from-[#260505ff] via-[#7A1C1C] to-[#7A1C1C] z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* ================= LEFT CARD: THE LOGO DESIGN BRAND CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleSylvanWoodsClick}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-[#3a0409] to-[#250104] border border-[#c5a85c]/40 hover:border-[#c5a85c] shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#c5a85c]/5 flex flex-col justify-between"
          >
            {/* Diagonal Ribbon: ONGOING */}
            <div className="absolute top-0 left-0 overflow-hidden w-28 h-28 pointer-events-none z-20">
              <div className="absolute top-4 -left-9 w-32 bg-gradient-to-r from-[#b5802f] via-[#c5a85c] to-[#b5802f] text-stone-950 font-sans text-[9px] font-black tracking-[0.2em] text-center py-1 rotate-[-45deg] shadow-lg border-y border-[#fff]/20 uppercase">
                ONGOING
              </div>
            </div>

            {/* Subtle botanical leaves background behind text */}
            <div className="absolute right-4 bottom-12 w-44 h-44 opacity-10 pointer-events-none mix-blend-overlay">
              <svg className="w-full h-full text-red-700" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,90 Q40,50 90,10 M90,10 Q80,40 50,70" />
                <path d="M30,70 Q50,40 70,30" />
                <path d="M20,80 Q35,60 55,50" />
              </svg>
            </div>

            <div className="absolute left-4 bottom-12 w-44 h-44 opacity-10 pointer-events-none mix-blend-overlay scale-x-[-1]">
              <svg className="w-full h-full text-red-700" viewBox="0 0 100 100" fill="currentColor">
                <path d="M10,90 Q40,50 90,10 M90,10 Q80,40 50,70" />
                <path d="M30,70 Q50,40 70,30" />
                <path d="M20,80 Q35,60 55,50" />
              </svg>
            </div>

            {/* Inner Content Area */}
            <div className="p-8 sm:p-12 flex-grow flex flex-col justify-center items-center text-center space-y-6 pt-16">
              
              {/* Brand Prefix */}
              <div className="space-y-1">
                <span className="font-serif text-[#c5a85c] text-xl sm:text-2xl font-black tracking-[0.25em] block">
                  MRCL
                </span>
                
                {/* Elegant Twig/Leaf SVG Curve exactly like screenshot */}
                <div className="flex justify-center items-center py-1">
                  <svg className="w-32 h-6 text-[#c5a85c]" viewBox="0 0 120 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Main branch curve */}
                    <path d="M 10,12 C 40,3 80,3 110,12" stroke="#c5a85c" strokeWidth="1.2" strokeLinecap="round" />
                    {/* Small detailed leaves branching off */}
                    <path d="M 25,9 C 24,5 28,4 30,7 C 32,4 35,5 34,9 Z" fill="#c5a85c" />
                    <path d="M 45,7 C 43,3 47,2 49,5 C 51,2 54,3 53,7 Z" fill="#c5a85c" />
                    <path d="M 65,7 C 63,3 67,2 69,5 C 71,2 74,3 73,7 Z" fill="#c5a85c" />
                    <path d="M 85,8 C 84,4 88,3 90,6 C 92,3 95,4 94,8 Z" fill="#c5a85c" />
                    <path d="M 100,10 C 99,6 103,5 105,8 C 107,5 110,6 109,10 Z" fill="#c5a85c" />
                    {/* Central elegant diamond bud */}
                    <path d="M 60,7 L 62,5 L 60,3 L 58,5 Z" fill="#c5a85c" />
                  </svg>
                </div>
              </div>

              {/* Sylvan Woods Display Titles */}
              <div className="space-y-2">
                <h2 className="font-serif text-5xl sm:text-6xl font-extrabold text-[#75aa3c] tracking-[0.08em] uppercase drop-shadow">
                  SYLVAN
                </h2>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="h-[1px] w-8 bg-[#c5a85c]/40" />
                  <span className="font-serif text-[#c5a85c] text-xl sm:text-2xl font-medium tracking-[0.4em] uppercase ml-[0.4em]">
                    WOODS
                  </span>
                  <div className="h-[1px] w-8 bg-[#c5a85c]/40" />
                </div>
              </div>

              {/* Location Specification Block */}
              <div className="space-y-1.5 pt-4">
                <p className="font-sans text-stone-200 text-xs sm:text-sm font-black tracking-[0.25em] uppercase">
                  RAMOHALLI
                </p>
                <p className="font-sans text-[#c5a85c] text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                  MYSORE ROAD
                </p>
              </div>

            </div>

            {/* Bottom 4 parameters section */}
            <div className="border-t border-[#c5a85c]/25 bg-black/20 p-6">
              <div className="grid grid-cols-4 gap-2 text-center divide-x divide-[#c5a85c]/20">
                
                {/* Param 1: Prime Location */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <MapPin className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    Prime Location
                  </span>
                </div>

                {/* Param 2: Lush Green Surroundings */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <Trees className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    Lush Green Surroundings
                  </span>
                </div>

                {/* Param 3: Secure Community */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <ShieldCheck className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    Secure Community
                  </span>
                </div>

                {/* Param 4: High Investment Potential */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <TrendingUp className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    High Investment Potential
                  </span>
                </div>

              </div>

              {/* Know More Button */}
              <div className="pt-5 flex justify-center">
                <button className="px-8 py-2.5 border border-[#c5a85c] hover:bg-[#c5a85c] hover:text-stone-950 text-[#c5a85c] font-sans text-xs font-black tracking-[0.25em] rounded-lg transition-all duration-300 flex items-center gap-2 group-hover:scale-103 cursor-pointer">
                  <span>KNOW MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </motion.div>

          {/* ================= RIGHT CARD: MRCL UNICON SUGARLAND PROJECT CARD ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onClick={handleUniconSugarlandClick}
            className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-b from-[#3a0409] to-[#250104] border border-[#c5a85c]/40 hover:border-[#c5a85c] shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-[#c5a85c]/5 flex flex-col justify-between"
          >
            {/* Diagonal Ribbon: ONGOING */}
            <div className="absolute top-0 left-0 overflow-hidden w-28 h-28 pointer-events-none z-20">
              <div className="absolute top-4 -left-9 w-32 bg-gradient-to-r from-[#b5802f] via-[#c5a85c] to-[#b5802f] text-stone-950 font-sans text-[9px] font-black tracking-[0.2em] text-center py-1 rotate-[-45deg] shadow-lg border-y border-[#fff]/20 uppercase">
                ONGOING
              </div>
            </div>

            {/* Realistic Villa Render Showcase Image */}
            <div className="relative aspect-[16/10] w-full bg-stone-900 overflow-hidden">
              <img 
                src={ASSETS.serenityVilla} 
                alt="MRCL Unicon Sugarland Elegant Villa Exterior View" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              {/* Soft overlay gradient with exquisite title content on top of image */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-left">
                <span className="font-sans text-[9px] tracking-[0.25em] text-[#c5a85c] font-black uppercase mb-1">
                  MRCL INFRASTRUCTURE
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-wide uppercase leading-tight">
                  UNICON SUGARLAND
                </h3>
                <p className="font-sans text-stone-300 text-[11px] tracking-wider uppercase mt-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#c5a85c] shrink-0" />
                  MYSORE ROAD, BANGALORE
                </p>
              </div>
            </div>

            {/* Inner Details Container (Align perfectly with left card bottom parameters) */}
            <div className="border-t border-[#c5a85c]/25 bg-black/20 p-6 flex-grow flex flex-col justify-between">
              
              <div className="grid grid-cols-4 gap-2 text-center divide-x divide-[#c5a85c]/20">
                
                {/* Param 1: Prime Location */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <MapPin className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    Prime Location
                  </span>
                </div>

                {/* Param 2: Lush Green Surroundings */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <Trees className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    Lush Green Surroundings
                  </span>
                </div>

                {/* Param 3: Secure Community */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <ShieldCheck className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    Secure Community
                  </span>
                </div>

                {/* Param 4: High Investment Potential */}
                <div className="flex flex-col items-center justify-between min-h-[55px] px-1">
                  <TrendingUp className="w-5 h-5 text-[#c5a85c] shrink-0" />
                  <span className="text-[8px] sm:text-[9px] font-sans font-bold tracking-wider text-[#c5a85c] uppercase leading-tight mt-1">
                    High Investment Potential
                  </span>
                </div>

              </div>

              {/* Know More Button */}
              <div className="pt-5 flex justify-center">
                <button className="px-8 py-2.5 border border-[#c5a85c] hover:bg-[#c5a85c] hover:text-stone-950 text-[#c5a85c] font-sans text-xs font-black tracking-[0.25em] rounded-lg transition-all duration-300 flex items-center gap-2 group-hover:scale-103 cursor-pointer">
                  <span>KNOW MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* 3. BOTTOM PRECISE BANNER STRIP (Exactly as Screenshot) */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-6 pb-8">
        
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-[#310408] to-[#1e0104] border border-[#c5a85c]/40 rounded-xl p-5 md:p-6 shadow-xl flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          
          {/* Left Block with Calendar Icon & Promise Text */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <div className="w-12 h-12 rounded-lg bg-[#c5a85c]/10 border border-[#c5a85c]/35 flex items-center justify-center text-[#c5a85c] shrink-0">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <p className="font-serif text-[#faf6f0] text-xs sm:text-sm md:text-base font-bold tracking-wide uppercase">
                EXCELLENCE IN CONSTRUCTION. COMMITMENT IN EVERY PROJECT.
              </p>
            </div>
          </div>

          {/* Right Block with Division line, gold italics text, and golden building logo */}
          <div className="flex items-center gap-4">
            {/* Horizontal line on mobile, Vertical line on desktop */}
            <div className="hidden md:block h-10 w-[1px] bg-[#c5a85c]/30" />
            
            <div className="text-center md:text-left">
              <p className="font-serif italic text-[#c5a85c] text-xs sm:text-sm leading-relaxed max-w-[280px]">
                Delivering quality spaces that stand the test of time.
              </p>
            </div>

            {/* Small Gold Logo */}
            <div className="w-10 h-10 text-[#c5a85c] shrink-0 opacity-80 hidden sm:block">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25,80 V50 L35,42 V80" stroke="#c5a85c" strokeWidth="1.5" />
                <path d="M35,80 V32 L50,22 L65,32 V80" stroke="#c5a85c" strokeWidth="2" fill="rgba(197,168,92,0.1)" />
                <path d="M65,80 V52 L75,46 V80" stroke="#c5a85c" strokeWidth="1.5" />
                <line x1="15" y1="80" x2="85" y2="80" stroke="#c5a85c" strokeWidth="2.5" />
              </svg>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
