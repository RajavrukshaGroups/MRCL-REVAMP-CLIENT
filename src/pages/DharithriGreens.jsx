import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useOutletContext, Link } from 'react-router-dom';
import { 
  MapPin, Phone, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, 
  Mail, User, Eye, ArrowRight, Download, FileText, Send, X, ZoomIn,
  Building2, Dumbbell, ShieldCheck, Waves, Users, Sparkles, Heart, Footprints, 
  Trophy, Award, Lightbulb, Droplets, Leaf, Route, Layers, Shield, Calendar, Maximize2, Map,
  Trees, Fence, Trees as ParkIcon, Smile
} from 'lucide-react';
import { ASSETS } from '../data';
import { submitProjectEnquiryForm } from '../api';

export default function DharithriGreens() {
  const context = useOutletContext();
  const onOpenContact = context?.onOpenContact || (() => {});

  // State for Accordions
  const [openAccordion, setOpenAccordion] = useState('mysore-road');

  // Interactive Carousel state
  const carouselImages = [
    { src: ASSETS.dharithriGreens, title: "Modern Premium Entrance Gate Arch", tag: "ACTUAL PHOTO" },
    { src: ASSETS.dharithriPark, title: "Lush Parks & Family Sitout Zones", tag: "COMMUNITY PARK" },
    { src: ASSETS.dharithriStreet, title: "Grand Tree-Lined Concrete Internal Avenues", tag: "INFRASTRUCTURE" },
    { src: ASSETS.dharithriLayout, title: "State-Of-The-Art Planned Plots Layout", tag: "LAYOUT MASTERPLAN" }
  ];
  const [activeCarouselIdx, setActiveCarouselIdx] = useState(0);

  // Gallery state
  const galleryItems = [
    { src: ASSETS.dharithriGreens, caption: "Exquisite Concrete Grand Entrance Archway" },
    { src: ASSETS.dharithriStreet, caption: "Grand tree-lined concrete internal avenues" },
    { src: ASSETS.dharithriPark, caption: "Lush landscaped parks and tree networks" },
    { src: ASSETS.dharithriLayout, caption: "Fully demarcated premium residential villa plots" }
  ];
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(null);

  // Auto scroll carousel every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCarouselIdx((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'MRCL Dharithri Greens',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      let val = value.replace(/\D/g, '');
      if (val.startsWith('0')) val = val.substring(1);
      val = val.slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: val }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    try {
      const response = await submitProjectEnquiryForm(formData);
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: 'MRCL Dharithri Greens',
          message: ''
        });
        alert("Thank you! Your inquiry has been submitted. Our team will contact you shortly.");
      } else {
        alert("Failed to submit inquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting inquiry.");
    } finally {
      setFormSubmitted(false);
    }
  };

  // Amenities list matching exactly the screenshot icons & titles for Dharithri Greens
  const amenities = [
    { title: 'Concreate Drains', icon: Layers },
    { title: 'Electricity with Street Lights', icon: Lightbulb },
    { title: 'Tar Roads', icon: Route },
    { title: '24hrs Water Supply', icon: Droplets },
    { title: 'Avenue Trees', icon: Trees },
    { title: 'Gated Community', icon: Shield },
    { title: 'Underground Drainage', icon: Layers },
    { title: 'Compound Wall', icon: Fence },
    { title: 'Parks & Green Spaces', icon: ParkIcon },
    { title: 'Children\'s Play Area', icon: Smile },
    { title: 'Security 24/7', icon: ShieldCheck },
    { title: 'Well Planned Layout', icon: Maximize2 }
  ];

  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 overflow-x-hidden">
      
      {/* 1. HERO BANNER - EXACTLY MATCHING THE LANDING PAGE AESTHETIC */}
      <section className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] flex items-center justify-center bg-gradient-to-r from-[#4a0105] via-[#2c0104] to-[#120002] overflow-hidden border-b border-[#c5a85c]/30">
        
        {/* Silhouette background */}
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.14] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />

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
          <Link to="/" className="flex flex-col items-center gap-0.5 mb-5 opacity-95 scale-90 sm:scale-100 hover:opacity-100 transition-opacity">
            <svg className="w-10 h-10 text-[#c5a85c] filter drop-shadow" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.15)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-white text-xs font-bold tracking-[0.25em] leading-none uppercase mt-1">MRCL</span>
            <span className="font-sans text-[6px] tracking-[0.3em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </Link>

          {/* Core Name */}
          <span className="text-white font-sans text-xs sm:text-sm font-black tracking-[0.4em] uppercase mb-1">MRCL</span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#d4b673] to-[#b5802f] tracking-[0.06em] uppercase text-center leading-tight">
            DHARITHRI GREENS
          </h1>

          {/* Ornate custom line */}
          <div className="w-44 sm:w-56 h-5 text-[#c5a85c]/80 flex items-center justify-center my-1.5">
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" />
              <circle cx="100" cy="12" r="2.5" fill="currentColor" />
            </svg>
          </div>

          <span className="font-sans text-xs sm:text-sm font-bold tracking-[0.35em] text-[#c5a85c] uppercase mb-4">
            RAMOHALLI, MYSORE ROAD, BENGALURU
          </span>

          <p className="font-serif text-stone-200 text-xs sm:text-sm md:text-base font-light italic tracking-widest mt-1">
            "Premium Villa Plots. Perfect Location. Prosperous Living."
          </p>
        </div>
      </section>

      {/* 2. TWO COLUMN LAYOUT (MAIN CONTENT AND SIDEBAR) */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* ================= LEFT MAIN COLUMN (lg:col-span-8) ================= */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* INTERACTIVE CAROUSEL STAGE */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-3xl overflow-hidden bg-stone-900 border-[3px] border-[#c5a85c]/60 shadow-2xl group">
                
                {/* Images Container */}
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCarouselIdx}
                    src={carouselImages[activeCarouselIdx].src}
                    alt={carouselImages[activeCarouselIdx].title}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.55 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Left side brand banner exactly in the bottom-left */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none" />
                
                {/* Title badge overlay (Matching layout image) */}
                <div className="absolute bottom-5 left-5 right-16 text-left select-none pointer-events-none">
                  <span className="text-[9px] tracking-[0.25em] font-black text-[#c5a85c] uppercase bg-stone-950/75 backdrop-blur-sm px-3 py-1 rounded-md border border-[#c5a85c]/20 inline-block mb-2">
                    {carouselImages[activeCarouselIdx].tag}
                  </span>
                  <div className="bg-black/75 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 max-w-sm sm:max-w-md shadow-lg">
                    <span className="font-sans text-[9px] sm:text-[10px] font-black text-[#c5a85c] tracking-[0.2em] uppercase block">
                      MRCL COMPLETED PORTFOLIO
                    </span>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white leading-snug uppercase mt-0.5">
                      {carouselImages[activeCarouselIdx].title}
                    </h3>
                  </div>
                </div>

                {/* Left Chevron arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCarouselIdx((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none"
                  title="Previous Image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right Chevron arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCarouselIdx((prev) => (prev + 1) % carouselImages.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none"
                  title="Next Image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Bullets indicator */}
                <div className="absolute bottom-5 right-5 flex items-center gap-1.5 z-10">
                  {carouselImages.map((_, idx) => {
                    const isActive = idx === activeCarouselIdx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveCarouselIdx(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                          isActive 
                            ? 'bg-[#c5a85c] w-5' 
                            : 'bg-white/40 hover:bg-white/80'
                        }`}
                        title={`Go to slide ${idx + 1}`}
                      />
                    );
                  })}
                </div>

              </div>

              {/* INTRODUCTION STATEMENT AND DOWNLOAD BUTTON */}
              <div className="space-y-6">
                <p className="font-sans text-sm sm:text-base text-[#1a0002]/90 leading-relaxed text-justify">
                  MRCL Dharithri Greens is a premium villa plots project located in Ramohalli, off Mysore Road, Bengaluru. Spread across 4 acres of prime land, this gated community offers the perfect blend of modern infrastructure, essential amenities, and excellent connectivity for a serene and luxurious lifestyle.
                </p>

                {/* <div>
                  <button 
                    onClick={() => onOpenContact('MRCL Dharithri Greens')}
                    className="cursor-pointer bg-[#6a0105] hover:bg-[#8c1c24] text-[#faf6f0] px-6 py-3 rounded-lg border border-[#c5a85c]/40 hover:border-[#c5a85c] text-xs font-bold tracking-[0.18em] uppercase transition-all shadow-md flex items-center gap-2"
                  >
                    <Download className="w-4 h-4 text-[#c5a85c]" />
                    <span>DOWNLOAD BROCHURE</span>
                  </button>
                </div> */}
              </div>

              {/* AMENITIES SECTION GRID (Specifically matches the 12 items in Dharithri Greens) */}
              <div className="space-y-6 pt-4">
                <div className="flex items-center justify-center gap-4 w-full text-center">
                  <div className="h-[1px] flex-grow max-w-[80px] bg-gradient-to-r from-transparent to-[#c5a85c]" />
                  <h2 className="font-serif text-xl sm:text-2xl font-black text-[#250205] tracking-[0.18em] uppercase">
                    AMENITIES
                  </h2>
                  <div className="h-[1px] flex-grow max-w-[80px] bg-gradient-to-l from-transparent to-[#c5a85c]" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {amenities.map((item, idx) => {
                    const IconComp = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="bg-[#FAF6F0] border border-[#c5a85c]/35 rounded-2xl p-4 flex flex-col items-center text-center justify-center min-h-[120px] transition-all duration-300 hover:border-[#8c1c24] hover:shadow-md hover:scale-102 group"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#6a0105]/5 group-hover:bg-[#6a0105]/10 border border-[#c5a85c]/30 flex items-center justify-center text-[#6a0105] mb-2.5 transition-colors">
                          <IconComp className="w-5 h-5 sm:w-6 sm:h-6 text-[#6a0105]" />
                        </div>
                        <span className="font-sans text-xs sm:text-sm font-semibold text-[#1a0002]/90 leading-tight">
                          {item.title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ACCORDIONS LIST PANEL */}
              <div className="space-y-3 pt-4">
                
                {/* Accordion Item 1 (Default Open / Active) */}
                <div className="border border-[#c5a85c]/35 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'mysore-road' ? '' : 'mysore-road')}
                    className="w-full px-5 py-4 bg-[#6a0105] text-[#FAF6F0] flex items-center justify-between font-serif text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase text-left transition-all hover:bg-[#8c1c24] focus:outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a85c]" />
                      <span>MYSORE ROAD: A THRIVING RESIDENTIAL HUB</span>
                    </div>
                    {openAccordion === 'mysore-road' ? (
                      <ChevronUp className="w-5 h-5 text-[#c5a85c]" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#c5a85c]" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openAccordion === 'mysore-road' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 bg-white space-y-4 text-xs sm:text-sm text-[#1a0002]/95 leading-relaxed">
                          <p>
                            Mysore Road, one of Bangalore's most rapidly developing corridors, has emerged as a sought-after residential destination. Blending urban convenience with scenic beauty, this stretch offers excellent connectivity, modern infrastructure, and promising real estate opportunities.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion Item 2 */}
                <div className="border border-[#c5a85c]/35 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'connectivity' ? '' : 'connectivity')}
                    className="w-full px-5 py-4 bg-white text-[#6a0105] flex items-center justify-between font-serif text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase text-left transition-all hover:bg-stone-50 focus:outline-none border-b border-[#c5a85c]/10"
                  >
                    <div className="flex items-center gap-3">
                      <Route className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a85c]" />
                      <span>CONNECTIVITY & INFRASTRUCTURE</span>
                    </div>
                    {openAccordion === 'connectivity' ? (
                      <ChevronUp className="w-5 h-5 text-[#c5a85c]" />
                    ) : (
                      <span className="text-xl text-[#c5a85c] font-black leading-none">+</span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openAccordion === 'connectivity' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 bg-white space-y-3 text-xs sm:text-sm text-[#1a0002]/95 leading-relaxed">
                          <p>
                            Enjoy seamless transport links to NICE Ring Road, Outer Ring Road, and Kengeri Metro Station. Highly developed infrastructure ensures top-tier convenience for daily commutes.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion Item 3 */}
                <div className="border border-[#c5a85c]/35 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'developments' ? '' : 'developments')}
                    className="w-full px-5 py-4 bg-white text-[#6a0105] flex items-center justify-between font-serif text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase text-left transition-all hover:bg-stone-50 focus:outline-none border-b border-[#c5a85c]/10"
                  >
                    <div className="flex items-center gap-3">
                      <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a85c]" />
                      <span>RESIDENTIAL DEVELOPMENTS</span>
                    </div>
                    {openAccordion === 'developments' ? (
                      <ChevronUp className="w-5 h-5 text-[#c5a85c]" />
                    ) : (
                      <span className="text-xl text-[#c5a85c] font-black leading-none">+</span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openAccordion === 'developments' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 bg-white space-y-3 text-xs sm:text-sm text-[#1a0002]/95 leading-relaxed">
                          <p>
                            Beautiful luxury plots ready for premium row villas or custom individual mansions. Fully demarcated boundaries with pre-installed plumbing, electrical lines, and concrete grand archways.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion Item 4 */}
                <div className="border border-[#c5a85c]/35 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'lifestyle' ? '' : 'lifestyle')}
                    className="w-full px-5 py-4 bg-white text-[#6a0105] flex items-center justify-between font-serif text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase text-left transition-all hover:bg-stone-50 focus:outline-none border-b border-[#c5a85c]/10"
                  >
                    <div className="flex items-center gap-3">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a85c]" />
                      <span>AMENITIES & LIFESTYLE</span>
                    </div>
                    {openAccordion === 'lifestyle' ? (
                      <ChevronUp className="w-5 h-5 text-[#c5a85c]" />
                    ) : (
                      <span className="text-xl text-[#c5a85c] font-black leading-none">+</span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openAccordion === 'lifestyle' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 bg-white space-y-3 text-xs sm:text-sm text-[#1a0002]/95 leading-relaxed">
                          <p>
                            Indulge in beautifully maintained landscaped lawns, walking corridors, dedicated play areas, compound wall gates, and round-the-clock security surveillance.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Accordion Item 5 */}
                <div className="border border-[#c5a85c]/35 rounded-xl overflow-hidden shadow-sm bg-white">
                  <button
                    onClick={() => setOpenAccordion(openAccordion === 'investment' ? '' : 'investment')}
                    className="w-full px-5 py-4 bg-white text-[#6a0105] flex items-center justify-between font-serif text-xs sm:text-sm md:text-base font-bold tracking-wider uppercase text-left transition-all hover:bg-stone-50 focus:outline-none border-b border-[#c5a85c]/10"
                  >
                    <div className="flex items-center gap-3">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a85c]" />
                      <span>INVESTMENT POTENTIAL</span>
                    </div>
                    {openAccordion === 'investment' ? (
                      <ChevronUp className="w-5 h-5 text-[#c5a85c]" />
                    ) : (
                      <span className="text-xl text-[#c5a85c] font-black leading-none">+</span>
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {openAccordion === 'investment' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-5 sm:p-6 bg-white space-y-3 text-xs sm:text-sm text-[#1a0002]/95 leading-relaxed">
                          <p>
                            As Kengeri and Mysore road expand rapidly with technological offices and new commercial parks, land values are poised for significant appreciation, yielding high returns on investments.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

              {/* WHY CHOOSE MYSORE ROAD LIST OF BULLETS */}
              <div className="space-y-4 pt-6">
                <div className="flex items-center justify-start gap-4 text-left">
                  <h2 className="font-serif text-lg sm:text-xl font-black text-[#250205] tracking-[0.18em] uppercase">
                    WHY CHOOSE MYSORE ROAD?
                  </h2>
                  <div className="h-[1px] flex-grow bg-[#c5a85c]/40" />
                </div>

                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1a0002]">
                    <div className="w-5 h-5 rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/45 flex items-center justify-center text-[#6a0105]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Excellent connectivity to Bangalore's prime locations</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1a0002]">
                    <div className="w-5 h-5 rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/45 flex items-center justify-center text-[#6a0105]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Affordable & luxury housing options</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1a0002]">
                    <div className="w-5 h-5 rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/45 flex items-center justify-center text-[#6a0105]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Well-developed social and civic infrastructure</span>
                  </div>

                  <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-[#1a0002]">
                    <div className="w-5 h-5 rounded-full bg-[#c5a85c]/20 border border-[#c5a85c]/45 flex items-center justify-center text-[#6a0105]">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Proximity to IT hubs and commercial centers</span>
                  </div>
                </div>
              </div>

            </div>

            {/* ================= RIGHT SIDEBAR COLUMN (lg:col-span-4) ================= */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* SPECIFICATIONS LIST CARD */}
              <div className="bg-[#FAF6F0] rounded-2xl border-[2px] border-[#c5a85c]/45 p-6 relative shadow-md">
                
                {/* Filigree corner touches */}
                <div className="absolute top-2 left-2 w-2.5 h-2.5 border-t border-l border-[#c5a85c]/50" />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 border-t border-r border-[#c5a85c]/50" />
                <div className="absolute bottom-2 left-2 w-2.5 h-2.5 border-b border-l border-[#c5a85c]/50" />
                <div className="absolute bottom-2 right-2 w-2.5 h-2.5 border-b border-r border-[#c5a85c]/50" />

                <div className="space-y-6">
                  
                  {/* Location spec */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6a0105]/5 border border-[#c5a85c]/35 flex items-center justify-center text-[#6a0105] flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] tracking-wider text-stone-500 font-bold uppercase block">
                        Location
                      </span>
                      <span className="font-serif text-base font-bold text-[#1a0002] block mt-0.5">
                        Ramohalli of Mysore road
                      </span>
                    </div>
                  </div>

                  {/* Project Area spec */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6a0105]/5 border border-[#c5a85c]/35 flex items-center justify-center text-[#6a0105] flex-shrink-0">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] tracking-wider text-stone-500 font-bold uppercase block">
                        Project Area
                      </span>
                      <span className="font-serif text-base font-bold text-[#1a0002] block mt-0.5">
                        4 Acres
                      </span>
                    </div>
                  </div>

                  {/* Total Plots spec */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6a0105]/5 border border-[#c5a85c]/35 flex items-center justify-center text-[#6a0105] flex-shrink-0">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] tracking-wider text-stone-500 font-bold uppercase block">
                        Total Plots
                      </span>
                      <span className="font-serif text-base font-bold text-[#1a0002] block mt-0.5">
                        118 Signature Plots
                      </span>
                    </div>
                  </div>

                  {/* Villa Sizes spec */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#6a0105]/5 border border-[#c5a85c]/35 flex items-center justify-center text-[#6a0105] flex-shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-sans text-[10px] tracking-wider text-stone-500 font-bold uppercase block">
                        Villa Sizes
                      </span>
                      <span className="font-serif text-base font-bold text-[#1a0002] block mt-0.5">
                        4 BHK Villas approx 3000 sqft
                      </span>
                    </div>
                  </div>

                </div>

                {/* Micro ornament centered */}
                <div className="w-full flex justify-center mt-5">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c]/50 to-transparent relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-[#c5a85c] rotate-45" />
                  </div>
                </div>

              </div>

              {/* CONTACT SUPPORT EXPERT CARD */}
              <div className="bg-[#250205] text-[#FAF6F0] rounded-2xl border-[2px] border-[#c5a85c] p-6 text-center shadow-lg relative overflow-hidden">
                <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#c5a85c]/40" />
                <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#c5a85c]/40" />

                <div className="space-y-4">
                  <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#c5a85c] tracking-wider uppercase leading-snug">
                    CONTACT US FOR <br /> ANY ADVICE
                  </h3>
                  <p className="font-sans text-xs text-stone-300 tracking-wide font-light">
                    Need help? Talk to an expert
                  </p>
                  
                  {/* Phone call row */}
                  <a 
                    href="tel:+918989399899" 
                    className="inline-flex items-center gap-2.5 bg-[#FAF6F0]/5 hover:bg-[#FAF6F0]/15 border border-[#c5a85c]/35 px-4.5 py-2.5 rounded-xl text-[#c5a85c] font-black tracking-widest text-sm transition-all shadow-md group mt-1"
                  >
                    <Phone className="w-4 h-4 text-[#c5a85c] animate-pulse" />
                    <span>+91 898 939 9899</span>
                  </a>
                </div>
              </div>

              {/* ENQUIRY FORM PANEL CARD */}
              <div className="bg-[#FAF6F0] rounded-2xl border-[2px] border-[#c5a85c] p-6 shadow-xl relative">
                
                <h3 className="font-serif text-lg sm:text-xl font-extrabold text-[#250205] tracking-widest text-center uppercase mb-1.5">
                  ENQUIRY FORM
                </h3>
                {/* Decorative gold ornament */}
                <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c] to-transparent mx-auto mb-6 relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-[#c5a85c] rotate-45" />
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#c5a85c]/40 rounded-xl text-sm placeholder-stone-400 text-stone-900 focus:outline-none focus:border-[#8c1c24] focus:ring-1 focus:ring-[#8c1c24] transition-all font-medium"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email id"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#c5a85c]/40 rounded-xl text-sm placeholder-stone-400 text-stone-900 focus:outline-none focus:border-[#8c1c24] focus:ring-1 focus:ring-[#8c1c24] transition-all font-medium"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      type="tel"
                      maxLength={10}
                      minLength={10}
                      name="phone"
                      required
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white border border-[#c5a85c]/40 rounded-xl text-sm placeholder-stone-400 text-stone-900 focus:outline-none focus:border-[#8c1c24] focus:ring-1 focus:ring-[#8c1c24] transition-all font-medium"
                    />
                  </div>

                  {/* Dropdown */}
                  <div className="relative">
                    <select
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-[#c5a85c]/40 rounded-xl text-sm text-stone-800 focus:outline-none focus:border-[#8c1c24] transition-all font-medium appearance-none cursor-pointer"
                    >
                      <option value="MRCL Dharithri Greens">MRCL Dharithri Greens</option>
                      <option value="MRCL Ayanur Enclave - Phase 1">MRCL Ayanur Enclave - Phase 1</option>
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-[#c5a85c]">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white border border-[#c5a85c]/40 rounded-xl text-sm placeholder-stone-400 text-stone-900 focus:outline-none focus:border-[#8c1c24] transition-all font-medium resize-none"
                    />
                  </div>



                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[#6a0105] hover:bg-[#8c1c24] text-white py-3.5 rounded-xl font-bold tracking-[0.2em] text-xs uppercase transition-all shadow-md active:scale-98 border border-[#c5a85c]/30 hover:border-[#c5a85c]"
                  >
                    SUBMIT ENQUIRY
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. GALLERY SECTION (At bottom of page exactly like the screenshot) */}
      <section className="py-16 bg-white border-t border-[#c5a85c]/25 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-4 w-full text-center mb-10">
            <div className="h-[1px] flex-grow max-w-[80px] bg-gradient-to-r from-transparent to-[#c5a85c]" />
            <h2 className="font-serif text-xl sm:text-2xl font-black text-[#250205] tracking-[0.18em] uppercase">
              GALLERY
            </h2>
            <div className="h-[1px] flex-grow max-w-[80px] bg-gradient-to-l from-transparent to-[#c5a85c]" />
          </div>

          {/* Grid list exactly matches 4-column layout */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {galleryItems.map((item, idx) => (
              <div 
                key={idx}
                onClick={() => setActiveGalleryIdx(idx)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-stone-200 hover:border-[#c5a85c] cursor-pointer shadow-md bg-stone-100 transition-all duration-300 hover:shadow-lg"
              >
                <img 
                  src={item.src} 
                  alt={item.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual hover search icon overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center text-white">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. BRAND FOOTER BANNER STRIP */}
      <section className="bg-[#250205] py-12 text-[#FAF6F0] border-t-2 border-[#c5a85c] relative text-center">
        <div className="absolute inset-0 opacity-[0.03] bg-cover bg-center" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 space-y-4">
          <div className="flex flex-col items-center gap-1 opacity-90">
            <span className="font-serif text-white text-lg font-bold tracking-[0.25em] leading-none uppercase">MRCL</span>
            <span className="font-sans text-[8px] tracking-[0.3em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#c5a85c] tracking-widest uppercase">
            MRCL DHARITHRI GREENS – BUILD VALUE FOR FUTURE
          </h3>
          <p className="font-sans text-xs text-stone-300 tracking-wider font-light max-w-xl mx-auto">
            Experience premium infrastructure, exquisite entrance gates, tree-lined avenues, structured drainage systems, and beautiful green sanctuaries.
          </p>
        </div>
      </section>

      {/* 5. DYNAMIC FULL SCREEN LIGHTBOX FOR GALLERY ITEMS */}
      <AnimatePresence>
        {activeGalleryIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000]/95 backdrop-blur-md px-4 select-none">
            
            {/* Dark close trigger area */}
            <div className="absolute inset-0" onClick={() => setActiveGalleryIdx(null)} />

            {/* Stage */}
            <div className="relative max-w-4xl w-full z-10 flex flex-col items-center space-y-4">
              
              {/* Close Button top-right */}
              <button
                onClick={() => setActiveGalleryIdx(null)}
                className="absolute -top-12 right-0 p-2.5 rounded-full bg-white/10 hover:bg-[#8c1c24] text-white transition-colors cursor-pointer border border-white/10"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative aspect-[16/10] w-full max-h-[75vh] rounded-2xl overflow-hidden border border-white/20 bg-stone-950 shadow-2xl">
                <img 
                  src={galleryItems[activeGalleryIdx].src} 
                  alt={galleryItems[activeGalleryIdx].caption} 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {/* Left Switcher arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveGalleryIdx((prev) => (prev - 1 + galleryItems.length) % galleryItems.length);
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#8c1c24] border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 z-10"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right Switcher arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveGalleryIdx((prev) => (prev + 1) % galleryItems.length);
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-[#8c1c24] border border-white/25 text-white flex items-center justify-center transition-all cursor-pointer hover:scale-105 z-10"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption panel below picture */}
              <div className="text-center text-white px-6">
                <span className="font-sans text-[10px] text-[#c5a85c] tracking-[0.25em] font-black uppercase">
                  GALLERY VIEW - IMAGE {activeGalleryIdx + 1} OF {galleryItems.length}
                </span>
                <p className="font-serif text-sm sm:text-base text-stone-200 mt-1">
                  {galleryItems[activeGalleryIdx].caption}
                </p>
              </div>

            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
