import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, Building2, TrendingUp, Compass, Leaf, Users, Trees, Landmark
} from 'lucide-react';
import { ASSETS } from '../data';
import sugarlandAerialImg from "../assets/images/india_map_presence_1784265017083.jpg"

export default function OurPresence() {
  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 overflow-x-hidden">
      
      {/* ================= 1. CORPORATE HERO SECTION ================= */}
      <section className="relative w-full h-[280px] sm:h-[340px] flex items-center justify-center bg-gradient-to-r from-[#4a0105] via-[#2c0104] to-[#120002] overflow-hidden border-b-2 border-[#c5a85c]">
        
        {/* Silhouette background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.09] mix-blend-overlay pointer-events-none" 
          style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} 
        />

        {/* Decorative corner dots */}
        <div className="absolute right-4 top-8 sm:right-10 sm:top-12 opacity-40 flex gap-1 items-center justify-center pointer-events-none">
          <div className="grid grid-cols-5 gap-1.5">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-[#c5a85c]" />
            ))}
          </div>
        </div>

        {/* Top-left Swoop Golden Wave Curve */}
        <div className="absolute left-0 top-0 w-[24%] h-full opacity-20 pointer-events-none scale-x-[-1] z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroPresenceGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroPresenceGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        </div>
        
        {/* Bottom-right Swoop Golden Wave Curve */}
        <div className="absolute right-0 top-0 w-[24%] h-full opacity-20 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroPresenceGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroPresenceGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="heroPresenceGoldGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c5a85c" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Content Wrapper */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* MRCL Brand Logo Badge on Top Left Area */}
          <div className="flex flex-col items-center gap-0.5 mb-5 scale-95 sm:scale-100">
            <svg className="w-11 h-11 text-[#c5a85c] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.18)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-white text-xs font-black tracking-[0.28em] leading-none uppercase mt-1">MRCL</span>
            <span className="font-sans text-[6.5px] tracking-[0.32em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#e2c58a] to-[#b5802f] tracking-[0.1em] uppercase leading-tight filter drop-shadow">
            OUR PRESENCE
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
            BUILDING LANDMARKS. CREATING LEGACIES.
          </p>
        </div>
      </section>

      {/* ================= 2. CONTENT CONTAINER ================= */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Intro Block with Vertical Accent Line */}
        <section className="bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#c5a85c]/10 shadow-sm max-w-5xl mx-auto">
          <div className="border-l-4 border-[#8c1c24] pl-6 sm:pl-8 space-y-4">
            <p className="text-stone-700 font-sans text-[14px] sm:text-[15px] leading-relaxed tracking-wide">
              MRCL Infrastructure Pvt Ltd has established a strong presence in both <strong className="text-[#8c1c24] font-bold">Bengaluru</strong> and <strong className="text-[#8c1c24] font-bold">Shimoga</strong>, 
              offering premium real estate solutions that cater to diverse market needs. In Bengaluru, the company 
              specializes in high-end residential developments, commercial spaces, and investment-driven properties, 
              strategically located in prime areas to ensure excellent connectivity and value appreciation.
            </p>
            <p className="text-stone-700 font-sans text-[14px] sm:text-[15px] leading-relaxed tracking-wide">
              In Shimoga, MRCL Infrastructure Pvt Ltd focuses on sustainable and community-centric developments, 
              blending modern infrastructure with the city's rich cultural and natural heritage.
            </p>
            <p className="text-stone-700 font-sans text-[14px] sm:text-[15px] leading-relaxed tracking-wide">
              By combining innovation, quality, and customer-centric services, MRCL Infrastructure Pvt Ltd continues 
              to redefine real estate experiences in these key locations, meeting the evolving demands of 
              homebuyers and investors alike.
            </p>
          </div>
        </section>

        {/* ================= 3. MAP & STRATEGIC LOCATIONS SECTION ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Beautiful interactive India Map with Absolute Pulsing Hotspots */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-[3/4] bg-white rounded-3xl border-2 border-[#c5a85c]/30 shadow-xl overflow-hidden p-3 group">
              
              {/* Subtle background graphics */}
              <div className="absolute inset-0 bg-[#FAF6F0]/20 pointer-events-none" />
              
              {/* The high-quality generated map of India */}
              <img 
                src={ASSETS.indiaMapPresence} 
                alt="MRCL Presence India Map" 
                className="w-full h-full object-cover rounded-2xl opacity-95 transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />

              {/* ================= BENGALURU PIN OVERLAY ================= */}
              {/* Pin location positioned relative to the map (Karnataka region is located in South West India) */}
              <div 
                className="absolute bottom-[16%] left-[38%] z-20 flex flex-col items-center cursor-pointer group/pin"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                {/* Concentric radar pulses */}
                <div className="absolute w-16 h-16 rounded-full bg-red-600/10 border border-red-600/30 -translate-y-4 animate-[ping_2.5s_infinite_linear] pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full bg-[#c5a85c]/5 border border-[#c5a85c]/20 -translate-y-4 animate-[ping_4s_infinite_linear] delay-1000 pointer-events-none" />
                <div className="absolute w-8 h-8 rounded-full bg-red-600/20 -translate-y-4 animate-[ping_1.5s_infinite_linear] pointer-events-none" />

                {/* Animated Teardrop Drop-Pin containing Home SVG */}
                <div className="relative flex items-center justify-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] transform transition-transform duration-300 group-hover/pin:-translate-y-1.5">
                  {/* Pin Body */}
                  <svg className="w-12 h-12 text-[#8c1c24] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {/* Inner Gold Home Icon circle */}
                  <div className="absolute top-[8.5px] w-5 h-5 rounded-full bg-[#FAF6F0] flex items-center justify-center border border-[#c5a85c]/50">
                    <Landmark className="w-3 h-3 text-[#8c1c24] fill-current stroke-[1.5]" />
                  </div>
                </div>

                {/* Pin Label with glowing card */}
                <div className="bg-gradient-to-r from-[#4a0105] to-[#250205] text-white border border-[#c5a85c]/50 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mt-1.5 shadow-lg group-hover/pin:scale-105 transition-transform duration-300 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a85c] animate-pulse" />
                  <span>BENGALURU</span>
                </div>
              </div>

              {/* ================= SHIMOGA PIN OVERLAY ================= */}
              {/* Located slightly north-west of Bengaluru */}
              <div 
                className="absolute bottom-[19%] left-[34%] z-20 flex flex-col items-center cursor-pointer group/pin"
                style={{ transform: 'translate(-50%, -50%)' }}
              >
                {/* Concentric radar pulses */}
                <div className="absolute w-16 h-16 rounded-full bg-red-600/10 border border-red-600/30 -translate-y-4 animate-[ping_3s_infinite_linear] pointer-events-none" />
                <div className="absolute w-24 h-24 rounded-full bg-[#c5a85c]/5 border border-[#c5a85c]/20 -translate-y-4 animate-[ping_4.5s_infinite_linear] delay-1500 pointer-events-none" />

                {/* Animated Teardrop Drop-Pin containing Home SVG */}
                <div className="relative flex items-center justify-center drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)] transform transition-transform duration-300 group-hover/pin:-translate-y-1.5">
                  {/* Pin Body */}
                  <svg className="w-12 h-12 text-[#8c1c24] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  {/* Inner Gold Home Icon circle */}
                  <div className="absolute top-[8.5px] w-5 h-5 rounded-full bg-[#FAF6F0] flex items-center justify-center border border-[#c5a85c]/50">
                    <Landmark className="w-3 h-3 text-[#8c1c24] fill-current stroke-[1.5]" />
                  </div>
                </div>

                {/* Pin Label with glowing card */}
                <div className="bg-gradient-to-r from-[#4a0105] to-[#250205] text-white border border-[#c5a85c]/50 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase mt-1.5 shadow-lg group-hover/pin:scale-105 transition-transform duration-300 flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#c5a85c] animate-pulse" />
                  <span>SHIMOGA</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Elegant strategic copy with gold flourishes */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <div className="space-y-1">
              <span className="font-sans text-[11px] font-black tracking-[0.25em] text-[#8c1c24] uppercase block">
                REGIONAL DEVELOPMENT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#500003] tracking-wider leading-tight uppercase">
                STRATEGIC LOCATIONS.<br />
                <span className="text-stone-900">STRONGER COMMUNITIES.</span>
              </h2>
            </div>

            {/* Custom ornate line motif */}
            <div className="w-36 h-5 text-[#c5a85c] flex items-center justify-center lg:justify-start mx-auto lg:mx-0">
              <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
                <path d="M 0,12 L 140,12 Q 150,2 160,12 T 170,12 L 200,12" strokeWidth="1" />
                <circle cx="160" cy="12" r="2.5" fill="currentColor" />
              </svg>
            </div>

            <p className="text-stone-600 font-sans text-[15px] leading-relaxed max-w-lg mx-auto lg:mx-0">
              Our presence reflects our commitment to delivering excellence and creating value in the cities that matter. By targeting regions with substantial economic prospects, we construct real estate landmarks that enrich lives and establish robust, high-yielding legacies.
            </p>

            {/* Slogan pill display */}
            <div className="inline-flex items-center gap-3 bg-white border border-[#c5a85c]/40 rounded-2xl px-5 py-3 shadow-md">
              <Compass className="w-5 h-5 text-[#8c1c24]" />
              <span className="font-serif text-[11px] sm:text-xs font-bold text-[#8c1c24] tracking-widest uppercase">
                COMMITTED TO KARNATAKA'S APPRECIATION
              </span>
            </div>
          </div>

        </section>

        {/* ================= 4. DETAILED REGIONAL BENTO CARDS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-6">
          
          {/* ================= BENGALURU HIGH-CONTRAST CARD ================= */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#380104] via-[#210002] to-[#120001] border-2 border-[#c5a85c]/45 p-8 sm:p-10 shadow-2xl flex flex-col justify-between group min-h-[460px]">
            
            {/* Background vector glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#c5a85c]/5 blur-[60px] pointer-events-none" />

            <div className="space-y-8">
              
              {/* Card top row with circular city thumbnail & Title */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-[#c5a85c]/25">
                
                {/* Circular image thumbnail with elegant frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-[3.5px] border-[#c5a85c] shadow-lg flex-shrink-0 bg-stone-900">
                  <img 
                    src={sugarlandAerialImg} 
                    alt="Bengaluru skyline representation" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="text-center sm:text-left space-y-1.5">
                  <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-[0.12em] text-[#e5c78a] uppercase leading-none">
                    BENGALURU
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    <div className="h-[1px] w-8 bg-[#c5a85c]/60" />
                    <span className="text-[#c5a85c] font-sans text-[9px] font-black tracking-[0.25em] uppercase">METROPOLIS</span>
                    <div className="h-[1px] w-8 bg-[#c5a85c]/60" />
                  </div>
                </div>

              </div>

              {/* Bullet Features Grid */}
              <div className="space-y-5">
                
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Premium Residential Projects
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      Gated luxury estates and high-end row houses designed with elite class.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Commercial Spaces
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      Strategically integrated community centers, shops, and business sectors.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Investment Opportunities
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      High-growth land plots and houses appreciating continuously in elite zones.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Prime Locations with Excellent Connectivity
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      Strategically positioned next to national highways, ring roads, and rapid metros.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Ornate Sketch Overlay - City Skyline vector drawing style */}
            <div className="w-full h-16 opacity-30 mt-6 text-[#c5a85c]">
              <svg className="w-full h-full" viewBox="0 0 400 60" fill="none" stroke="currentColor" strokeWidth="1">
                {/* Linear bridge & skyline silhouettes */}
                <path d="M 0,55 H 400" />
                <path d="M 20,55 V 30 H 40 V 55 M 30,30 V 55" />
                <path d="M 45,55 V 20 H 75 V 55 M 60,20 V 55" />
                <path d="M 80,55 Q 110,15 140,55" />
                <path d="M 90,55 Q 110,25 130,55" strokeWidth="0.75" />
                <path d="M 145,55 V 35 H 165 V 15 H 185 V 35 H 205 V 55" />
                <path d="M 215,55 L 235,15 L 255,55" />
                <path d="M 260,55 V 25 H 295 V 55 M 270,25 V 55 M 285,25 V 55" />
                <path d="M 305,55 H 395" />
                <path d="M 315,55 C 330,25 350,25 365,55" strokeDasharray="3 3" />
                <circle cx="110" cy="25" r="1.5" fill="currentColor" />
                <circle cx="340" cy="20" r="1" fill="currentColor" />
              </svg>
            </div>

          </div>

          {/* ================= SHIMOGA HIGH-CONTRAST CARD ================= */}
          <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#380104] via-[#210002] to-[#120001] border-2 border-[#c5a85c]/45 p-8 sm:p-10 shadow-2xl flex flex-col justify-between group min-h-[460px]">
            
            {/* Background vector glow */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#c5a85c]/5 blur-[60px] pointer-events-none" />

            <div className="space-y-8">
              
              {/* Card top row with circular nature thumbnail & Title */}
              <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-[#c5a85c]/25">
                
                {/* Circular Jog Falls image thumbnail with elegant frame */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-[3.5px] border-[#c5a85c] shadow-lg flex-shrink-0 bg-stone-900">
                  <img 
                    src={ASSETS.shimogaFalls} 
                    alt="Shimoga waterfall Jog Falls" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                <div className="text-center sm:text-left space-y-1.5">
                  <h3 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-[0.12em] text-[#e5c78a] uppercase leading-none">
                    SHIMOGA
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-1">
                    <div className="h-[1px] w-8 bg-[#c5a85c]/60" />
                    <span className="text-[#c5a85c] font-sans text-[9px] font-black tracking-[0.25em] uppercase">HERITAGE ZONE</span>
                    <div className="h-[1px] w-8 bg-[#c5a85c]/60" />
                  </div>
                </div>

              </div>

              {/* Bullet Features Grid */}
              <div className="space-y-5">
                
                {/* Feature 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Sustainable Developments
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      Environmentally-safe plotting layouts conserving local trees and water.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Community-Centric Projects
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      Common relaxation parks, walking paths, and community festival avenues.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <Trees className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Green & Serene Environment
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      Vast open areas free from metropolitan traffic noise, designed for long peaceful living.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#c5a85c]/15 border border-[#c5a85c]/40 flex items-center justify-center text-[#e5c78a] flex-shrink-0 mt-0.5 shadow-inner">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-stone-100 font-serif text-[14px] sm:text-[15px] font-bold tracking-wide uppercase leading-tight">
                      Rich Cultural & Natural Heritage
                    </h4>
                    <p className="text-stone-300 font-sans text-[11px] leading-relaxed mt-0.5">
                      Beautiful design aesthetics honoring local historical monuments and temples.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Ornate Sketch Overlay - Temple and Hill nature drawing style */}
            <div className="w-full h-16 opacity-30 mt-6 text-[#c5a85c]">
              <svg className="w-full h-full" viewBox="0 0 400 60" fill="none" stroke="currentColor" strokeWidth="1">
                {/* Scenic nature mountains and temple towers */}
                <path d="M 0,55 H 400" />
                {/* Mountain ranges */}
                <path d="M 10,55 Q 60,25 110,55" />
                <path d="M 70,55 Q 120,15 170,55" />
                {/* Temple spires */}
                <path d="M 210,55 V 35 H 220 V 55" />
                <path d="M 225,55 V 25 H 245 V 55 M 235,25 V 55" />
                <path d="M 250,55 V 10 L 265,22 L 280,10 V 55 M 265,22 V 55" />
                <path d="M 285,55 V 30 H 300 V 55" />
                {/* More nature hills */}
                <path d="M 310,55 Q 350,30 390,55" strokeDasharray="3 3" />
                <path d="M 340,55 Q 370,35 400,55" />
                {/* Birds in flight */}
                <path d="M 110,25 Q 115,20 120,25 Q 125,20 130,25" strokeWidth="0.75" />
                <path d="M 140,18 Q 143,15 146,18 Q 149,15 152,18" strokeWidth="0.75" />
              </svg>
            </div>

          </div>

        </section>

      </main>

      {/* ================= 5. FOOTER SLOGAN STRIP ================= */}
      <section className="bg-[#250205] py-14 text-[#FAF6F0] border-t-2 border-[#c5a85c] relative text-center">
        
        {/* Subtle lobby pattern overlay inside banner */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none" 
          style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} 
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          
          {/* Ornate gold scrollwork header */}
          <div className="w-32 h-5 text-[#c5a85c]/85 flex items-center justify-center my-1 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="3" fill="currentColor" />
              <polygon points="96,12 100,8 104,12 100,16" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <h3 className="font-serif text-base sm:text-lg font-bold text-[#c5a85c] tracking-[0.25em] uppercase leading-relaxed">
            BUILDING TODAY FOR A BETTER TOMORROW
          </h3>
          
          {/* Micro gold scroll */}
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c]/50 to-transparent mx-auto relative mt-2.5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c5a85c] rotate-45" />
          </div>

        </div>
      </section>

    </div>
  );
}
