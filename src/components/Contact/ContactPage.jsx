import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Mail, Send, User, Tag, MessageSquare, 
  Shield, Check, Globe, HelpCircle, ArrowUpRight, X, Heart
} from 'lucide-react';
import { ASSETS } from '../../data';
import { submitContactForm } from '../../api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isRobotVerified, setIsRobotVerified] = useState(false);
  const [recaptchaLoading, setRecaptchaLoading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mapMode, setMapMode] = useState('interactive'); // 'interactive' (real Google Maps iframe) or 'landmark' (custom vector/SVG map)
  const [submissionError, setSubmissionError] = useState('');

  // Interactive Zoom Controls for the Kengeri Satellite Town Map
  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 0.15, 1.6));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 0.15, 0.7));
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionError('');
    
    try {
      const response = await submitContactForm(formData);

      if (response.ok) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
        }, 4500);
      } else {
        setSubmissionError('Failed to submit form.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionError('An error occurred while submitting the form.');
    }
  };

  // Simulate reCAPTCHA dynamic checkmark animation
  const handleRecaptchaClick = () => {
    if (isRobotVerified) {
      setIsRobotVerified(false);
      return;
    }
    setRecaptchaLoading(true);
    setTimeout(() => {
      setRecaptchaLoading(false);
      setIsRobotVerified(true);
      setSubmissionError('');
    }, 900);
  };

  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pb-0">
      
      {/* ================= 1. PREMIUM HEADER HERO BANNER ================= */}
      <section className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center bg-gradient-to-r from-[#3d0105] via-[#220002] to-[#0c0001] overflow-hidden border-b-2 border-[#c5a85c]">
        
        {/* World Network Map Backdrop graphic matching screenshot */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-[0.07] mix-blend-overlay pointer-events-none" 
          style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} 
        />

        {/* Dynamic ambient glowing spheres */}
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-[#8a1a24] opacity-[0.14] blur-[80px]" />
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#c5a85c] opacity-[0.12] blur-[85px]" />

        {/* Brand Logo & Title on Left side of header */}
        <div className="absolute left-6 sm:left-14 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-start gap-1 z-20">
          <div className="flex flex-col items-center gap-0.5 scale-95">
            <svg className="w-12 h-12 text-[#c5a85c] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2.2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.18)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2.2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-white text-[13px] font-black tracking-[0.25em] leading-none uppercase mt-1.5">MRCL</span>
            <span className="font-sans text-[7px] tracking-[0.3em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>
        </div>

        {/* Golden premium curves layered on left */}
        <div className="absolute left-0 top-0 w-[24%] h-full opacity-20 pointer-events-none scale-x-[-1] z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroContactGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroContactGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
          </svg>
        </div>

        {/* Right curves */}
        <div className="absolute right-0 top-0 w-[24%] h-full opacity-20 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#heroContactGoldGrad)" strokeWidth="2.5" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#heroContactGoldGrad)" strokeWidth="1" strokeDasharray="5 5" />
            <defs>
              <linearGradient id="heroContactGoldGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c5a85c" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Right side floating glowing icons column as seen on screenshot */}
        <div className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-25">
          {[
            { icon: MapPin, label: 'Location' },
            { icon: Mail, label: 'Email' },
            { icon: Phone, label: 'Phone' },
            { icon: Globe, label: 'Web' }
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className="group relative w-10 h-10 rounded-full bg-gradient-to-br from-[#c5a85c] via-[#a3802b] to-[#735111] p-[1px] flex items-center justify-center shadow-md cursor-pointer transition-transform duration-300 hover:scale-110"
              >
                <div className="w-full h-full bg-gradient-to-br from-[#200002] to-[#0c0001] rounded-full flex items-center justify-center text-[#c5a85c] group-hover:text-white transition-colors">
                  <IconComponent className="w-4 h-4 stroke-[1.8]" />
                </div>
                {/* Micro tooltip */}
                <span className="absolute right-12 scale-0 group-hover:scale-100 transition-all duration-300 bg-[#4d0206] text-white text-[9px] font-bold tracking-widest uppercase py-1 px-2.5 rounded-md shadow-lg border border-[#c5a85c] whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Center Title Layout Block */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#e2c58a] to-[#b5802f] tracking-[0.12em] uppercase leading-tight filter drop-shadow">
            CONTACT US
          </h1>

          {/* Golden ornate horizontal floral scroll dividers matching screenshot */}
          <div className="w-48 sm:w-60 h-6 text-[#c5a85c]/85 flex items-center justify-center my-2.5">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="3" fill="currentColor" />
              <polygon points="96,12 100,8 104,12 100,16" fill="currentColor" stroke="none" />
            </svg>
          </div>

          <p className="font-serif text-stone-300 text-xs sm:text-sm tracking-[0.16em] uppercase font-light italic mt-1 bg-black/20 px-5 py-1.5 rounded-full backdrop-blur-sm">
            We're Here To Help You
          </p>
        </div>
      </section>

      {/* Main Container Layer pushing content nicely onto grid */}
      <section className="relative z-30 -mt-8 sm:-mt-10 bg-[#FAF6F0] rounded-t-[32px] border-t border-[#c5a85c]/30 shadow-2xl py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        
        {/* ================= 2. OUR LOCATION TITLE & VECTOR GRAPHIC MAP ================= */}
        <div className="space-y-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3">
              {/* Gold flourish left */}
              <svg className="w-12 h-3 text-[#c5a85c]" viewBox="0 0 100 12" fill="none" stroke="currentColor">
                <path d="M 100,6 L 10,6 C 25,12 25,0 40,6" strokeWidth="1" />
                <polygon points="100,6 94,3 94,9" fill="currentColor" stroke="none" />
              </svg>
              <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#4a0105] tracking-widest uppercase">
                OUR LOCATION
              </h2>
              {/* Gold flourish right */}
              <svg className="w-12 h-3 text-[#c5a85c] scale-x-[-1]" viewBox="0 0 100 12" fill="none" stroke="currentColor">
                <path d="M 100,6 L 10,6 C 25,12 25,0 40,6" strokeWidth="1" />
                <polygon points="100,6 94,3 94,9" fill="currentColor" stroke="none" />
              </svg>
            </div>
            <p className="text-stone-500 font-sans text-[10px] tracking-widest uppercase mt-1">
              Interactive Map of Kengeri Satellite Town
            </p>
          </div>

          {/* Map View Toggle Button Tabs */}
          <div className="flex justify-center mt-1">
            <div className="inline-flex p-1 bg-stone-200/60 border border-stone-300/30 rounded-xl shadow-inner gap-1">
              <button
                type="button"
                onClick={() => setMapMode('interactive')}
                className={`cursor-pointer flex items-center gap-2 px-5 py-2 text-[10px] font-black tracking-[0.12em] uppercase rounded-lg transition-all duration-300 ${
                  mapMode === 'interactive'
                    ? 'bg-[#8c1c24] text-white shadow-md scale-100'
                    : 'text-stone-600 hover:text-[#8c1c24] hover:bg-stone-300/40'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Google Map</span>
              </button>
              <button
                type="button"
                onClick={() => setMapMode('landmark')}
                className={`cursor-pointer flex items-center gap-2 px-5 py-2 text-[10px] font-black tracking-[0.12em] uppercase rounded-lg transition-all duration-300 ${
                  mapMode === 'landmark'
                    ? 'bg-[#8c1c24] text-white shadow-md scale-100'
                    : 'text-stone-600 hover:text-[#8c1c24] hover:bg-stone-300/40'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Landmark Vector Map</span>
              </button>
            </div>
          </div>

          {/* Styled Google Maps Layout Vector Component */}
          <div 
            id="map-canvas-container"
            className={`transition-all duration-500 relative bg-[#e5ecf4] border-2 border-[#c5a85c] rounded-3xl overflow-hidden shadow-md ${
              isFullscreen ? 'fixed inset-4 z-50 h-[calc(100vh-32px)]' : 'h-[380px] sm:h-[460px]'
            }`}
          >
            {/* Map Frame Area Zoomable */}
            {mapMode === 'interactive' ? (
              <div className="w-full h-full relative bg-[#FAF6F0]">
                {/* Embedded Live Google Maps Iframe */}
                <iframe
                  title="MRCL Corporate Headquarters Live Map"
                  src="https://maps.google.com/maps?q=%23164%2C%201st%20Floor%2C%205th%20Main%2C%207th%20Cross%20Kengeri%20Satellite%20Town%2C%20Bengaluru-560%20060&t=&z=17&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 relative z-10"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Map loader backdrop */}
                <div className="absolute inset-0 bg-[#FAF6F0] flex flex-col items-center justify-center text-stone-400 gap-2 pointer-events-none z-0">
                  <div className="w-8 h-8 border-4 border-stone-200 border-t-[#8c1c24] rounded-full animate-spin" />
                  <span className="text-[10px] tracking-widest uppercase font-black">Loading Live Google Map...</span>
                </div>
              </div>
            ) : (
              <div 
                className="absolute inset-0 transition-transform duration-300 origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                
                {/* Beautiful custom vector elements simulating Google Map precisely */}
                <svg className="w-full h-full min-w-[1000px]" viewBox="0 0 1000 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 1. Lake Reservoir Top Left */}
                <path d="M-10,0 C120,40 180,110 160,180 C140,245 40,260 -10,250 Z" fill="#aacbe5" opacity="0.85" />
                <text x="50" y="110" className="fill-[#597ba5] font-sans font-black text-[11px] tracking-wider italic">Kengeri Lake</text>

                {/* 2. Parks & Gardens Greens */}
                <rect x="180" y="240" width="130" height="150" rx="10" fill="#d0ebd2" opacity="0.7" />
                <circle cx="240" cy="310" r="45" fill="#c3e4c6" opacity="0.6" />
                <text x="200" y="320" className="fill-[#457c4c] font-sans font-bold text-[9px] tracking-wider text-center">Kengeri Park</text>

                {/* 3. National Public School green zone */}
                <rect x="750" y="350" width="220" height="130" rx="12" fill="#d0ebd2" opacity="0.6" />

                {/* 4. Grid System - Road Network layout matching screenshot */}
                {/* 80 Feet Road (Diagonal main) */}
                <line x1="600" y1="0" x2="1000" y2="200" stroke="#ffffff" strokeWidth="22" strokeLinecap="round" />
                <line x1="600" y1="0" x2="1000" y2="200" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="4 4" />

                {/* 3rd Main Road */}
                <line x1="450" y1="0" x2="450" y2="500" stroke="#ffffff" strokeWidth="16" />
                {/* 2nd Main Road */}
                <line x1="530" y1="0" x2="530" y2="500" stroke="#ffffff" strokeWidth="14" />
                {/* 1st Main Road */}
                <line x1="610" y1="0" x2="610" y2="500" stroke="#ffffff" strokeWidth="12" />

                {/* 7th Cross Road */}
                <line x1="200" y1="210" x2="1000" y2="400" stroke="#ffffff" strokeWidth="16" />
                {/* 6th Cross Road */}
                <line x1="200" y1="270" x2="1000" y2="460" stroke="#ffffff" strokeWidth="14" />

                {/* 7th Main Road */}
                <line x1="300" y1="0" x2="250" y2="500" stroke="#ffffff" strokeWidth="14" />
                {/* 6th Main Road */}
                <line x1="380" y1="0" x2="330" y2="500" stroke="#ffffff" strokeWidth="12" />
                {/* 5th Main Road */}
                <line x1="415" y1="0" x2="390" y2="500" stroke="#ffffff" strokeWidth="13" />

                {/* Vidhya Peeta Road */}
                <line x1="680" y1="120" x2="900" y2="220" stroke="#ffffff" strokeWidth="14" />

                {/* 5. Custom Fine Grid Borders for Roads */}
                {/* 3rd Main Rd side border */}
                <line x1="442" y1="0" x2="442" y2="500" stroke="#d5dee8" strokeWidth="1.5" />
                <line x1="458" y1="0" x2="458" y2="500" stroke="#d5dee8" strokeWidth="1.5" />

                {/* 5th Main Rd side borders */}
                <line x1="408" y1="0" x2="383" y2="500" stroke="#d5dee8" strokeWidth="1.2" />
                <line x1="422" y1="0" x2="397" y2="500" stroke="#d5dee8" strokeWidth="1.2" />

                <line x1="523" y1="0" x2="523" y2="500" stroke="#d5dee8" strokeWidth="1.2" />
                <line x1="537" y1="0" x2="537" y2="500" stroke="#d5dee8" strokeWidth="1.2" />

                {/* Labels for Road Names exactly matching screenshot */}
                <g className="fill-stone-500 font-sans font-bold text-[8.5px] tracking-wide">
                  <text x="690" y="80" transform="rotate(26, 690, 80)">80 Feet Rd</text>
                  <text x="444" y="100" transform="rotate(90, 444, 100)">3rd Main Rd</text>
                  <text x="444" y="240" transform="rotate(90, 444, 240)">3rd Main Rd</text>
                  <text x="524" y="110" transform="rotate(90, 524, 110)">2nd Main Rd</text>
                  <text x="604" y="120" transform="rotate(90, 604, 120)">1st Main Rd</text>

                  <text x="718" y="152" transform="rotate(13, 718, 152)">Vidhya Peeta Rd</text>

                  <text x="274" y="180" transform="rotate(101, 274, 180)">7th Main Rd</text>
                  <text x="360" y="160" transform="rotate(101, 360, 160)">6th Main Rd</text>
                  <text x="390" y="100" transform="rotate(101, 390, 100)">5th Main Rd</text>
                  <text x="375" y="310" transform="rotate(101, 375, 310)">5th Main Rd</text>

                  <text x="575" y="325" transform="rotate(13, 575, 325)">7th Cross Rd</text>
                  <text x="575" y="385" transform="rotate(13, 575, 385)">6th Cross Rd</text>
                  <text x="382" y="445" transform="rotate(13, 382, 445)">7th Cross Rd</text>
                </g>

                {/* Secondary structures / building shapes */}
                <g fill="#d9e1ea" stroke="#cdd5df" strokeWidth="1" opacity="0.9">
                  <rect x="220" y="80" width="40" height="30" rx="3" />
                  <rect x="280" y="90" width="35" height="25" rx="3" />
                  <rect x="475" y="140" width="28" height="40" rx="4" />
                  <rect x="475" y="220" width="28" height="40" rx="4" fill="#a4c4e8" stroke="#87aedb" /> {/* Overhead tank reservoir */}
                  <rect x="475" y="300" width="28" height="50" rx="4" />
                  <rect x="800" y="110" width="45" height="30" rx="3" />
                  <rect x="840" y="240" width="60" height="40" rx="4" />
                </g>

                {/* Golden Red Pointer Map Pin centered right at our property zone */}
                <g transform="translate(402, 258)">
                  {/* Glowing Radar pulse rings behind pin */}
                  <circle cx="0" cy="-14" r="24" fill="#c5a85c" opacity="0.1" className="animate-ping" style={{ transformOrigin: '0px -14px' }} />
                  <circle cx="0" cy="-14" r="14" fill="#ef4444" opacity="0.2" />
                  {/* Pin Drop shadow */}
                  <ellipse cx="0" cy="2" rx="5" ry="2" fill="black" opacity="0.25" />
                  {/* Real map pin vector with gold outline */}
                  <path d="M0,0 C-10,-12 -12,-20 -12,-28 C-12,-35 -6,-40 0,-40 C6,-40 12,-35 12,-28 C12,-20 10,-12 0,0 Z" fill="#8c1c24" stroke="#c5a85c" strokeWidth="2.5" />
                  <circle cx="0" cy="-28" r="4.5" fill="#e5c78a" />
                </g>

              </svg>

              {/* OVERLAID INTERACTIVE LANDMARK LABELS WITH BRAND ICONS */}
              
              {/* 1. Masjid e Zainab (Left Side) */}
              <div className="absolute top-[10%] left-[12%] flex items-center gap-1.5 bg-white py-1 px-2.5 rounded-md shadow-sm border border-stone-200 pointer-events-auto">
                <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Globe className="w-2.5 h-2.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-black text-stone-700 leading-tight">Masjid e Zainab</span>
                </div>
              </div>

              {/* 2. Balaji flowers decoration KS TOWN */}
              <div className="absolute top-[28%] left-[24%] flex items-center gap-1.5 bg-white py-1.5 px-2.5 rounded-md shadow-sm border border-stone-200 pointer-events-auto">
                <div className="w-4.5 h-4.5 rounded-full bg-blue-600 flex items-center justify-center text-white">
                  <Heart className="w-2.5 h-2.5 fill-white stroke-none" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-black text-blue-700 leading-tight">Balaji flowers</span>
                  <span className="text-[7px] font-medium text-stone-500 leading-none">decoration KS TOWN</span>
                </div>
              </div>

              {/* 3. MRCL INFRASTRUCTURE HQ Premium Pin & Address Card */}
              <div className="absolute top-[34%] left-[40.2%] -translate-x-1/2 flex flex-col items-center pointer-events-auto z-20 group">
                <div className="bg-gradient-to-br from-[#4d0206] via-[#2d0104] to-[#1c0002] text-white border-2 border-[#c5a85c] py-2 px-3.5 rounded-xl shadow-xl text-center max-w-[210px] transition-all duration-300 group-hover:scale-105">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {/* Tiny gold building emblem */}
                    <svg className="w-3.5 h-3.5 text-[#c5a85c] flex-shrink-0" viewBox="0 0 100 100" fill="none">
                      <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="5" strokeLinejoin="round" />
                      <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="5" strokeLinejoin="round" fill="rgba(197,168,92,0.18)" />
                      <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="5" strokeLinejoin="round" />
                      <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="6" strokeLinecap="round" />
                    </svg>
                    <span className="text-[8.5px] font-black tracking-[0.08em] text-transparent bg-clip-text bg-gradient-to-r from-white to-[#e5c78a] uppercase leading-none">MRCL INFRASTRUCTURE</span>
                  </div>
                  <span className="text-[7.5px] font-extrabold text-stone-200 leading-tight block uppercase tracking-wide">Corporate Head Office</span>
                  <span className="text-[7.5px] font-medium text-[#e5c78a] leading-tight block mt-0.5">
                    #164, 1st Floor, 5th Main, 7th Cross
                  </span>
                  <span className="text-[7px] font-bold text-stone-300 uppercase leading-none block mt-0.5">
                    Kengeri Satellite Town, Bengaluru-560 060
                  </span>
                </div>
                {/* Down little tail pointer */}
                <div className="w-2.5 h-2.5 bg-[#1c0002] rotate-45 -mt-1.5 border-r-2 border-b-2 border-[#c5a85c]" />
              </div>

              {/* 4. Overhead Water Tank Landmark (Moved slightly to prevent overlap) */}
              <div className="absolute top-[23%] left-[49%] -translate-x-1/2 flex flex-col items-center pointer-events-auto">
                <div className="bg-[#4d0206] text-white border border-[#c5a85c] py-1 px-2 rounded-md shadow-md text-center">
                  <span className="text-[7.5px] font-black tracking-wide uppercase block">Overhead</span>
                  <span className="text-[7px] font-bold text-[#c5a85c] uppercase leading-tight block">Water Tank</span>
                </div>
                {/* Down little tail pointer */}
                <div className="w-2 h-2 bg-[#4d0206] rotate-45 -mt-1 border-r border-b border-[#c5a85c]" />
              </div>

              {/* 5. Kengeri Satellite Town Water Tank (Moved slightly to prevent overlap) */}
              <div className="absolute top-[56%] left-[46.5%] -translate-x-1/2 flex flex-col items-center pointer-events-auto">
                <div className="bg-white border-2 border-red-500 py-1 px-2.5 rounded-lg shadow-md text-center max-w-[120px]">
                  <span className="text-[8px] font-black text-red-600 leading-tight block">Kengeri</span>
                  <span className="text-[7.5px] font-black text-stone-800 leading-tight block">Satellite Town</span>
                  <span className="text-[7px] font-bold text-stone-500 leading-none block">Water Tank</span>
                </div>
              </div>

              {/* 5. JMJ Interiors (Top Right) */}
              <div className="absolute top-[16%] right-[16%] flex items-center gap-1.5 bg-white py-1 px-2 rounded-md shadow-sm border border-stone-200 pointer-events-auto">
                <div className="w-4 h-4 rounded-full bg-stone-100 flex items-center justify-center text-stone-500">
                  <MapPin className="w-2.5 h-2.5" />
                </div>
                <span className="text-[8px] font-black text-stone-700 leading-tight">JMJ interiors</span>
              </div>

              {/* 6. National Public School Kengeri (Bottom Right) */}
              <div className="absolute bottom-[24%] right-[10%] flex items-center gap-1.5 bg-white py-1.5 px-2.5 rounded-md shadow-sm border border-stone-200 pointer-events-auto">
                <div className="w-4.5 h-4.5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <Globe className="w-2.5 h-2.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-black text-stone-800 leading-tight">National Public</span>
                  <span className="text-[7.5px] font-bold text-stone-500 leading-none">School Kengeri</span>
                </div>
              </div>

            </div>
          )}

            {/* FRONT LAYER STICKY ELEMENTS (Zoom control bar, Fullscreen, Google Logo) */}
            
            {/* Top-Right: Fullscreen Toggle */}
            <button
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 p-2.5 bg-white hover:bg-stone-100 text-stone-700 rounded-lg shadow-md border border-stone-200 cursor-pointer transition-transform duration-200 hover:scale-105 z-10"
              title="Toggle Fullscreen Map View"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isFullscreen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 9L4 4m0 0l3.5 0M4 4v3.5M15 9l5-5m0 0h-3.5M20 4v3.5M9 15l-5 5m0 0h3.5M4 20v-3.5M15 15l5 5m0 0h-3.5M20 20v-3.5" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 20h4m-4 0v-4m0 4l5-5m11 5h-4m4 0v-4m0 4l-5-5" />
                )}
              </svg>
            </button>

            {/* Bottom-Right: Zoom In / Zoom Out Controls */}
            {mapMode === 'landmark' && (
              <div className="absolute bottom-4 right-4 flex flex-col bg-white border border-stone-200 rounded-lg shadow-md overflow-hidden z-10">
                <button 
                  onClick={handleZoomIn}
                  className="cursor-pointer p-2.5 hover:bg-stone-50 text-stone-800 text-base font-black border-b border-stone-200 text-center w-9 h-9 leading-none focus:outline-none transition-colors"
                  title="Zoom In"
                >
                  +
                </button>
                <button 
                  onClick={handleZoomOut}
                  className="cursor-pointer p-2.5 hover:bg-stone-50 text-stone-800 text-base font-black text-center w-9 h-9 leading-none focus:outline-none transition-colors"
                  title="Zoom Out"
                >
                  −
                </button>
              </div>
            )}

            {/* Bottom-Left: Google Logo Stamp & Legal info */}
            {mapMode === 'landmark' && (
              <div className="absolute bottom-3 left-4 flex items-center gap-1.5 select-none pointer-events-none z-10">
                {/* Fake Google branding */}
                <div className="flex font-sans font-black text-xs">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <span className="text-[7.5px] font-sans text-stone-500 font-bold tracking-wide">
                  Map data ©2026 • Terms of Use
                </span>
              </div>
            )}

          </div>
        </div>

        {/* Separator flourish */}
        <div className="w-full flex justify-center py-2">
          <div className="w-48 h-[1.5px] bg-gradient-to-r from-transparent via-[#c5a85c] to-transparent relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#FAF6F0] border border-[#c5a85c] rotate-45" />
          </div>
        </div>

        {/* ================= 3. GET IN TOUCH CARDS & CONTACT FORM SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10">
          
          {/* LEFT COLUMN: GET IN TOUCH CARDS (4/12 or 5/12 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Header */}
            <div className="text-left space-y-1">
              <div className="flex items-center gap-3">
                <h3 className="font-serif text-xl sm:text-2xl font-black text-[#4d0206] tracking-wider uppercase">
                  GET IN TOUCH
                </h3>
                {/* Horizontal simple gold line with center dot */}
                <div className="flex-grow h-[1px] bg-[#c5a85c]/40 relative">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c5a85c] rounded-full" />
                </div>
              </div>
              <p className="text-stone-500 font-sans text-[9px] tracking-widest uppercase font-bold">
                Connect directly with our executive estate sales team
              </p>
            </div>

            {/* 4 Premium Cards as shown in the screenshot */}
            <div className="space-y-4">
              
              {/* CARD 1: PHONE NO */}
              <div className="group bg-[#FFFDF9] border border-[#e5d5be]/80 hover:border-[#8c1c24] rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                {/* Large circular circular brown/maroon badge with solid telephone icon inside */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8a151b] via-[#4d0206] to-[#220002] flex items-center justify-center shadow-md text-[#e5c78a] group-hover:text-white transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                </div>
                <div className="text-left space-y-1">
                  <span className="font-serif text-xs font-black tracking-widest text-[#8c1c24] uppercase block">
                    PHONE NO
                  </span>
                  <div className="font-mono text-xs sm:text-sm font-bold text-stone-800 leading-snug space-y-0.5">
                    <p className="hover:text-[#8c1c24] transition-colors">+91 898 939 9899</p>
                    <p className="hover:text-[#8c1c24] transition-colors">+91 907 141 5999</p>
                  </div>
                </div>
              </div>

              {/* CARD 2: WHATSAPP */}
              <div className="group bg-[#FFFDF9] border border-[#e5d5be]/80 hover:border-[#8c1c24] rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                {/* Large circular WhatsApp logo badge */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8a151b] via-[#4d0206] to-[#220002] flex items-center justify-center shadow-md text-[#e5c78a] group-hover:text-white transition-colors flex-shrink-0">
                  {/* WhatsApp Custom Vector Icon inside */}
                  <svg className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 1.975 14.064.95 11.468.95c-5.44 0-9.866 4.372-9.87 9.802 0 1.714.463 3.39 1.337 4.875L1.9 21.062l5.747-1.485c-1.56.967-1.12.69-1.001.577zM17.13 14.17c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.27-.69.9-.85 1.08-.16.18-.32.2-.6.06-1.16-.58-1.93-1.02-2.69-2.33-.2-.35.2-.32.57-1.07.06-.12.03-.23-.01-.32-.05-.09-.43-1.03-.59-1.41-.15-.38-.32-.33-.43-.33h-.37c-.13 0-.34.05-.52.24-.18.2-.68.66-.68 1.6 0 .94.69 1.85.78 1.98.09.13 1.36 2.08 3.29 2.91.46.2 1.03.32 1.39.24.4-.06 1.65-.67 1.88-1.32.23-.66.23-1.22.16-1.34-.07-.12-.25-.18-.53-.32z"/>
                  </svg>
                </div>
                <div className="text-left space-y-1">
                  <span className="font-serif text-xs font-black tracking-widest text-[#8c1c24] uppercase block">
                    WHATSAPP
                  </span>
                  <div className="font-mono text-xs sm:text-sm font-bold text-stone-800 leading-snug space-y-0.5">
                    <p className="hover:text-[#8c1c24] transition-colors">+91 898 939 9899</p>
                    <p className="hover:text-[#8c1c24] transition-colors">+91 907 141 5999</p>
                  </div>
                </div>
              </div>

              {/* CARD 3: EMAIL ADDRESS */}
              <div className="group bg-[#FFFDF9] border border-[#e5d5be]/80 hover:border-[#8c1c24] rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8a151b] via-[#4d0206] to-[#220002] flex items-center justify-center shadow-md text-[#e5c78a] group-hover:text-white transition-colors flex-shrink-0">
                  <Mail className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 stroke-[1.8]" />
                </div>
                <div className="text-left space-y-1">
                  <span className="font-serif text-xs font-black tracking-widest text-[#8c1c24] uppercase block">
                    EMAIL ADDRESS
                  </span>
                  <div className="font-mono text-xs sm:text-sm font-bold text-stone-800 hover:text-[#8c1c24] transition-colors leading-tight">
                    info@mrclinfrastructure.com
                  </div>
                </div>
              </div>

              {/* CARD 4: OFFICE ADDRESS */}
              <div className="group bg-[#FFFDF9] border border-[#e5d5be]/80 hover:border-[#8c1c24] rounded-2xl p-4 sm:p-5 flex items-center gap-4 sm:gap-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#8a151b] via-[#4d0206] to-[#220002] flex items-center justify-center shadow-md text-[#e5c78a] group-hover:text-white transition-colors flex-shrink-0">
                  <MapPin className="w-5.5 h-5.5 sm:w-6.5 sm:h-6.5 stroke-[1.8]" />
                </div>
                <div className="text-left space-y-1">
                  <span className="font-serif text-xs font-black tracking-widest text-[#8c1c24] uppercase block">
                    OFFICE ADDRESS
                  </span>
                  <div className="font-sans text-[11px] sm:text-xs font-semibold text-stone-600 leading-relaxed max-w-xs">
                    #164, 1st Floor, 5th Main, 7th Cross Kengeri Satellite Town, Bengaluru-560 060
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM (7/12 cols) */}
          <div className="lg:col-span-7">
            
            {/* Main Maroon Card framed with high-precision gold border */}
            <div className="relative bg-gradient-to-b from-[#4d0206] via-[#2d0104] to-[#1a0002] border-3 border-[#c5a85c] rounded-[28px] shadow-2xl p-6 sm:p-8 md:p-10 text-white overflow-hidden">
              
              {/* Glossy background pattern */}
              <div className="absolute inset-0 bg-cover bg-center opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />
              
              {/* Submission State overlay block */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-[#2d0104]/98 backdrop-blur-md z-30 flex flex-col items-center justify-center text-center p-6 sm:p-10"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      className="space-y-4 max-w-md"
                    >
                      {/* Spinning golden circle success checkmark */}
                      <div className="relative w-20 h-20 mx-auto bg-gradient-to-br from-[#c5a85c] to-[#735111] rounded-full p-[1.5px] flex items-center justify-center shadow-lg">
                        <div className="w-full h-full bg-[#2d0104] rounded-full flex items-center justify-center text-[#c5a85c]">
                          <Check className="w-10 h-10 stroke-[2.5]" />
                        </div>
                      </div>

                      <h4 className="font-serif text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] to-[#e2c58a] tracking-wider uppercase">
                        INQUIRY LOGGED
                      </h4>
                      
                      {/* Ornate Gold line */}
                      <div className="w-24 h-[1px] bg-[#c5a85c]/40 mx-auto" />

                      <p className="text-stone-300 font-sans text-xs sm:text-sm leading-relaxed">
                        Thank you, <strong className="text-white">{formData.name}</strong>. Your premium real estate inquiry has been successfully transmitted directly to our Kengeri Corporate Desk.
                      </p>
                      
                      <p className="text-[#e2c58a] font-serif text-[10px] tracking-widest uppercase italic bg-black/30 py-2 px-4 rounded-full inline-block">
                        An Agent will contact you at {formData.phone}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Form Content */}
              <div className="space-y-6 relative z-10 text-center sm:text-left">
                
                {/* Headers */}
                <div className="space-y-1 text-center">
                  <span className="font-serif text-xs font-black tracking-[0.25em] text-[#c5a85c] uppercase">
                    CONTACT US
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-stone-200 tracking-wide leading-snug">
                    Want To Ask Anything? Send Us A Mail Anytime
                  </h3>
                  
                  {/* Ornate Gold horizontal dividing ornament */}
                  <div className="w-40 h-5 text-[#c5a85c]/70 flex items-center justify-center mx-auto my-1.5">
                    <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
                      <path d="M 30,12 L 85,12 Q 95,5 100,12 T 105,12 L 170,12" strokeWidth="1" />
                      <circle cx="100" cy="12" r="2.5" fill="currentColor" />
                    </svg>
                  </div>
                </div>

                {/* Main Form Fields */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Field Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Your Name */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a85c]/70">
                        <User className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <input 
                        type="text"
                        required
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#380104]/80 border border-[#c5a85c]/30 hover:border-[#c5a85c]/60 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#c5a85c] transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Email id */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a85c]/70">
                        <Mail className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <input 
                        type="email"
                        required
                        placeholder="Email id*"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#380104]/80 border border-[#c5a85c]/30 hover:border-[#c5a85c]/60 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#c5a85c] transition-all duration-300 font-sans"
                      />
                    </div>

                  </div>

                  {/* Field Row 2: Contact Number and Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Contact Number */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a85c]/70">
                        <Phone className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <input 
                        type="tel"
                        required
                        placeholder="Contact Number*"
                        value={formData.phone}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, '');
                          if (val.startsWith('0')) val = val.substring(1);
                          val = val.slice(0, 10);
                          setFormData({ ...formData, phone: val });
                        }}
                        maxLength={10}
                        minLength={10}
                        className="w-full pl-10 pr-4 py-3 bg-[#380104]/80 border border-[#c5a85c]/30 hover:border-[#c5a85c]/60 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#c5a85c] transition-all duration-300 font-sans"
                      />
                    </div>

                    {/* Subject */}
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#c5a85c]/70">
                        <Tag className="w-4 h-4 stroke-[1.8]" />
                      </div>
                      <input 
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-[#380104]/80 border border-[#c5a85c]/30 hover:border-[#c5a85c]/60 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#c5a85c] transition-all duration-300 font-sans"
                      />
                    </div>

                  </div>

                  {/* Message box */}
                  <div className="relative">
                    <div className="absolute top-3.5 left-3.5 pointer-events-none text-[#c5a85c]/70">
                      <MessageSquare className="w-4 h-4 stroke-[1.8]" />
                    </div>
                    <textarea 
                      required
                      rows={4.5}
                      placeholder="Message Here*"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-[#380104]/80 border border-[#c5a85c]/30 hover:border-[#c5a85c]/60 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm text-white placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#c5a85c] transition-all duration-300 resize-none font-sans"
                    />
                  </div>

                  {/* Error Notification Alert */}
                  {submissionError && (
                    <div className="p-3 bg-red-950/60 border border-red-500 rounded-xl text-left text-xs text-red-300 font-sans tracking-wide">
                      ⚠ {submissionError}
                    </div>
                  )}

                  {/* Submit Button container */}
                  <div className="pt-2 flex justify-end">
                    {/* Gradient Golden-Yellow Submit button */}
                    <button
                      type="submit"
                      className="cursor-pointer bg-gradient-to-r from-[#e5c78a] via-[#c5a85c] to-[#a3802b] hover:from-[#c5a85c] hover:to-[#735111] text-[#220002] hover:text-white border border-[#c5a85c]/40 font-serif font-black px-8 py-3.5 rounded-xl shadow-md uppercase tracking-[0.15em] text-xs transition-all duration-300 flex items-center justify-center gap-2.5 hover:scale-103 focus:outline-none w-full sm:w-auto"
                    >
                      <span>SUBMIT</span>
                      <Send className="w-4 h-4 stroke-[2]" />
                    </button>
                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= 4. BOTTOM SUPPORT SLOGAN STRIP ================= */}
      <section className="bg-[#1c0002] text-white py-14 border-t-2 border-[#c5a85c] relative overflow-hidden">
        
        {/* Subtle architectural overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Slogan columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
            
            {/* item 1 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#c5a85c]/40 flex items-center justify-center text-[#c5a85c]">
                {/* Custom Headphone Icon */}
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                </svg>
              </div>
              <h4 className="font-serif text-sm font-black tracking-widest uppercase text-[#c5a85c]">
                24/7 SUPPORT
              </h4>
              <p className="text-stone-400 font-sans text-xs max-w-[200px] leading-relaxed">
                Our team is always ready to assist you.
              </p>
            </div>

            {/* item 2 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#c5a85c]/40 flex items-center justify-center text-[#c5a85c]">
                {/* Custom Lock Shield */}
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0110.153 21A3.746 3.746 0 017 18.244a3.745 3.745 0 01-1.043-3.296 3.745 3.745 0 01-3.296-1.043A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.746 3.746 0 0113.847 3A3.746 3.746 0 0117 5.756a3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
              </div>
              <h4 className="font-serif text-sm font-black tracking-widest uppercase text-[#c5a85c]">
                TRUST & RELIABILITY
              </h4>
              <p className="text-stone-400 font-sans text-xs max-w-[200px] leading-relaxed">
                Committed to quality and transparent deals.
              </p>
            </div>

            {/* item 3 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#c5a85c]/40 flex items-center justify-center text-[#c5a85c]">
                {/* Shaking Hands icon */}
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h4 className="font-serif text-sm font-black tracking-widest uppercase text-[#c5a85c]">
                CUSTOMER FIRST
              </h4>
              <p className="text-stone-400 font-sans text-xs max-w-[200px] leading-relaxed">
                Your satisfaction is our top priority.
              </p>
            </div>

            {/* item 4 */}
            <div className="space-y-3 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border border-[#c5a85c]/40 flex items-center justify-center text-[#c5a85c]">
                {/* Clock / Quick Response */}
                <svg className="w-6 h-6 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-serif text-sm font-black tracking-widest uppercase text-[#c5a85c]">
                QUICK RESPONSE
              </h4>
              <p className="text-stone-400 font-sans text-xs max-w-[200px] leading-relaxed">
                We value your time and respond fast.
              </p>
            </div>

          </div>

          {/* Social Follow US Row */}
          <div className="pt-8 border-t border-stone-800 flex flex-col items-center gap-4">
            
            <div className="flex items-center gap-3">
              <div className="w-4 h-[1px] bg-[#c5a85c]" />
              <span className="font-serif text-xs font-black tracking-[0.25em] text-[#c5a85c] uppercase">
                FOLLOW US
              </span>
              <div className="w-4 h-[1px] bg-[#c5a85c]" />
            </div>

            {/* Circle Outline Social Buttons */}
            <div className="flex gap-4">
              {[
                { name: 'Facebook', url: 'https://www.facebook.com/MrclInfrastructure/', path: 'M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z' },
                { name: 'Pinterest', url: 'https://www.pinterest.com/mrclinfrastructurepvtltd/', path: 'M12 0C5.37 0 0 5.37 0 12c0 5.08 3.2 9.4 7.68 11.07-.1-.94-.2-2.38.04-3.41.22-.93 1.4-5.91 1.4-5.91s-.36-.72-.36-1.78c0-1.66.96-2.91 2.17-2.91 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.99-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.4 2.56-5.4 5.2 0 1.03.4 2.14.89 2.74.1.12.11.23.08.35-.09.37-.29 1.18-.33 1.34-.05.22-.17.27-.4.16-1.5-.7-2.43-2.9-2.43-4.66 0-3.79 2.75-7.27 7.94-7.27 4.16 0 7.4 2.97 7.4 6.94 0 4.14-2.61 7.47-6.24 7.47-1.22 0-2.37-.63-2.76-1.38 0 0-.6 2.3-.75 2.87-.27 1.05-1 2.37-1.49 3.17C8.91 23.88 10.42 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z' },
                { name: 'Instagram', url: 'https://www.instagram.com/mrcl.infrastructure/', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { name: 'LinkedIn', url: 'https://www.linkedin.com/company/mrcl-properties/', path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                { name: 'YouTube', url: 'https://www.youtube.com/@MrclInfrastructure', path: 'M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 00-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 002.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 002.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-[#c5a85c] hover:bg-[#c5a85c] hover:text-[#1c0002] flex items-center justify-center text-[#c5a85c] transition-all duration-300 transform hover:scale-105"
                  title={`Follow us on ${item.name}`}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
