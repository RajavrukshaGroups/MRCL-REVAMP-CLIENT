import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Maximize2, LayoutGrid, CheckCircle2, Award, 
  Droplet, Zap, Compass, Smile, Target, Shield, 
  Dumbbell, Sparkles, Trees, Leaf, Timer, Sun, 
  Phone, Check, ChevronDown, ChevronLeft, ChevronRight, 
  Mail, User, Eye, ArrowRight, Download, FileText, Send,
  X, ZoomIn
} from 'lucide-react';
import { ASSETS } from '../data';
import { submitProjectEnquiryForm } from '../api';
import mrclSylvanWoodsPlanImg from "../assets/images/mrcl-sylvan-woods-plan-img.webp"
import banner1Img from "../assets/images/banner1.webp"
import banner2Img from "../assets/images/banner2.webp"

export default function SylvanWoods() {
  const context = useOutletContext();
  const onOpenContact = context?.onOpenContact || (() => {});

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'MRCL Sylvan Woods - Bengaluru',
    message: ''
  });
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [recaptchaVerifying, setRecaptchaVerifying] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Accordion States
  const [openAccordion, setOpenAccordion] = useState('strategic');

  // Interactive Layout Plan Hover State
  const [hoveredZone, setHoveredZone] = useState(null);

  // Actual Photographs Carousel State
  const actualCarouselImages = [
    { src: banner1Img, caption: "The Sylvan Grand Social Clubhouse", tag: "ACTUAL PHOTOGRAPH" },
    { src: banner2Img, caption: "Exquisite Double-Height Club Foyer & Waiting Lounge", tag: "ACTUAL INTERIOR PHOTOGRAPH" },
    // { src: ASSETS.serenityVilla, caption: "Lush Gated Community Villa Street View", tag: "ACTUAL ELEVATION" },
    // { src: ASSETS.prestigeVilla, caption: "Modern Premium 4 BHK Villa Living Space", tag: "ACTUAL ENTRANCE" },
    // { src: ASSETS.eliteVilla, caption: "Grand Guardhouse Entrance & Landscaped Arches", tag: "ACTUAL ENTRY PORTAL" }
  ];
  const [activeActualCarouselIdx, setActiveActualCarouselIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveActualCarouselIdx((prev) => (prev + 1) % actualCarouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Gallery States
  const galleryImages = [
    { src: ASSETS.heroVilla, caption: "Clubhouse Grand Pavilion - Evening View" },
    { src: ASSETS.lobbyInterior, caption: "Luxury Clubhouse Lounge & Lobby" },
    { src: ASSETS.serenityVilla, caption: "Signature Villa Design & Private Yard" },
    { src: ASSETS.prestigeVilla, caption: "Double-Height Living Foyer & Exterior" },
    { src: ASSETS.eliteVilla, caption: "Gated Enclave Tree-lined Roads & Archway" },
    { src: ASSETS.grandeurVilla, caption: "Exquisite Triple-Level Luxury Facade" }
  ];
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleNextImage = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const handlePrevImage = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isLightboxOpen) return;
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePrevImage();
      } else if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  // Mock reCAPTCHA handler
  const handleRecaptchaClick = () => {
    if (recaptchaChecked) {
      setRecaptchaChecked(false);
      return;
    }
    setRecaptchaVerifying(true);
    setTimeout(() => {
      setRecaptchaVerifying(false);
      setRecaptchaChecked(true);
    }, 1200);
  };

  // Form submit handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Your name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errors.email = 'Valid email is required';
    if (!formData.phone.trim() || formData.phone.length < 10) errors.phone = 'Valid contact number is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    try {
      const response = await submitProjectEnquiryForm(formData);
      if (response.ok) {
        setFormSubmitted(true);
      } else {
        alert("Failed to submit enquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting enquiry.");
    }
  };

  // Quick info fields (matching top-right box)
  const quickInfo = [
    {
      id: 'loc',
      icon: <MapPin className="w-5 h-5 text-[#8c1c24]" />,
      label: "Location",
      value: "Ramohalli, Bengaluru"
    },
    {
      id: 'area',
      icon: <Maximize2 className="w-5 h-5 text-[#8c1c24]" />,
      label: "Project Area",
      value: "7 Acres 17 Guntas"
    },
    {
      id: 'plots',
      icon: <LayoutGrid className="w-5 h-5 text-[#8c1c24]" />,
      label: "Total Plots",
      value: "117 Signature Plots"
    },
    {
      id: 'bmrda',
      icon: <CheckCircle2 className="w-5 h-5 text-[#8c1c24]" />,
      label: "BMRDA Approved",
      value: "Yes, Ready for Registration"
    },
    {
      id: 'rera',
      icon: <Award className="w-5 h-5 text-[#8c1c24]" />,
      label: "Rera Approved",
      value: "PRM/KA/RERA/1251/310/PR/191124/007241"
    }
  ];

  // Amenities list (with beautifully colored custom matching icons)
  const amenities = [
    { name: 'Underground Drainage', icon: <Droplet className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Underground Electricity', icon: <Zap className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Grand Entrance Arch', icon: <Compass className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Therapeutic Pathway', icon: <Compass className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Organic Fruit & Vegetable Garden', icon: <Leaf className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Kids Play Area', icon: <Smile className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Yoga Garden', icon: <Sun className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Cricket Pitch', icon: <Target className="w-6 h-6 text-[#c5a85c]" /> },
    { name: '24/7 Security', icon: <Shield className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Out Door Gym', icon: <Dumbbell className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Butterfly Garden', icon: <Sparkles className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Beach Volley Ball', icon: <Target className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Mini Forest', icon: <Trees className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Bamboo Grove', icon: <Leaf className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Jogging Track', icon: <Timer className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Lotus Courtyard', icon: <Sun className="w-6 h-6 text-[#c5a85c]" /> },
    { name: 'Tree Lined Boulevard', icon: <Trees className="w-6 h-6 text-[#c5a85c]" />, fullWidth: true }
  ];

  // Accordion list details
  const accordionData = {
    strategic: {
      title: "STRATEGIC LOCATION & SEAMLESS CONNECTIVITY",
      content: (
        <div className="space-y-3 pt-2 text-stone-700 font-sans">
          <p className="text-sm leading-relaxed">
            Mysore Road connects central Bangalore to Mysore and other key locations via major highways and road networks:
          </p>
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span><strong>NICE Road :</strong> Ensures smooth access to Electronic City, Kanakapura Road, and Tumkur Road.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span><strong>Outer Ring Road (ORR) :</strong> Enhances connectivity to IT corridors like Whitefield and Marathahalli.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span><strong>Namma Metro (Purple Line Extension) :</strong> The ongoing metro expansion further boosts accessibility, significantly cutting down travel time.</span>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-4 h-4 text-emerald-600 mt-1 shrink-0" />
              <span><strong>BMTC & Rail Network :</strong> Well-connected public transport options make commuting easier for residents.</span>
            </div>
          </div>
        </div>
      )
    },
    growth: {
      title: "RESIDENTIAL REAL ESTATE GROWTH",
      content: (
        <div className="space-y-2 pt-2 text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
          <p>
            Mysore Road has experienced exponential development over the past few years, transforming into one of Bangalore’s top residential expansion sectors. Proximity to major industrial hubs, state universities, and commercial zones has driven massive housing demand.
          </p>
          <p>
            With the widening of the Bangalore-Mysore Expressway, residential land prices are growing steadily at 12-15% annually, ensuring excellent property value appreciation for plot owners in Sylvan Woods.
          </p>
        </div>
      )
    },
    amenities: {
      title: "SOCIAL & LIFESTYLE AMENITIES",
      content: (
        <div className="space-y-2 pt-2 text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
          <p>
            MRCL Sylvan Woods is surrounded by premium social infrastructure that ensures a highly comfortable and elite lifestyle:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Education:</strong> Christ University (Kengeri Campus), RV College of Engineering, and various leading international schools.</li>
            <li><strong>Healthcare:</strong> Rajarajeshwari Medical College & Hospital, and BGS Gleneagles Global Hospitals.</li>
            <li><strong>Leisure & Retail:</strong> Decathlon Mysore Road, Gopalan Arcade Mall, and a plethora of luxury dining outlets.</li>
          </ul>
        </div>
      )
    },
    investment: {
      title: "INVESTMENT POTENTIAL & FUTURE GROWTH",
      content: (
        <div className="space-y-2 pt-2 text-stone-700 font-sans text-xs sm:text-sm leading-relaxed">
          <p>
            Acquiring land on Mysore Road is a secure and highly lucrative investment opportunity. Major upcoming government infrastructures, including the Bidadi Smart City project and suburban rail integrations, are set to double connectivity.
          </p>
          <p>
            As a fully authorized, BMRDA-approved community with complete modern underground networks, MRCL Sylvan Woods guarantees clear titles, hassle-free registrations, and long-term security.
          </p>
        </div>
      )
    }
  };

  // Layout Plan Legend
  const legendItems = [
    { num: 1, name: "Entrance Gate", zone: "gate", color: "bg-amber-500" },
    { num: 2, name: "Clubhouse", zone: "clubhouse", color: "bg-yellow-400" },
    { num: 3, name: "Children's Play Area", zone: "play", color: "bg-orange-500" },
    { num: 4, name: "Park & Open Space", zone: "parks", color: "bg-emerald-500" },
    { num: 5, name: "Avenue Plantation", zone: "trees", color: "bg-green-600" },
    { num: 6, name: "Services", zone: "services", color: "bg-cyan-500" },
    { num: 7, name: "Future Development", zone: "future", color: "bg-purple-400" }
  ];

  return (
    <div id="sylvan-woods-landing" className="bg-[#faf6f0] min-h-screen text-stone-900 font-sans selection:bg-[#8c1c24] selection:text-white">
      
      {/* 1. HERO HEADER BANNER SECTION - PIXEL PERFECT SCREENSHOT REPLICATED FRAME */}
      <section className="relative w-full min-h-[380px] md:min-h-[460px] flex flex-col justify-between bg-cover bg-center overflow-hidden border-b-4 border-[#c5a85c] pt-24 pb-8 px-4 sm:px-6 md:px-12" style={{ backgroundImage: `linear-gradient(rgba(18, 0, 2, 0.90), rgba(49, 2, 7, 0.85)), url(${ASSETS.heroVilla})` }}>
        
        {/* Curved Golden Framing SVGs on Left & Right to match screenshot exact curves */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {/* Top Left Golden Curved Wing */}
          <svg className="absolute top-0 left-0 w-[45%] h-[90%] opacity-20 md:opacity-30" viewBox="0 0 350 400" preserveAspectRatio="none">
            <path d="M0,0 C120,50 200,150 220,400 L0,400 Z" fill="url(#heroWingGold)" />
            <path d="M0,0 C120,50 200,150 220,400" stroke="#c5a85c" strokeWidth="2" fill="none" />
            <defs>
              <linearGradient id="heroWingGold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#c5a85c" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Top Right Golden Curved Wing */}
          <svg className="absolute top-0 right-0 w-[45%] h-[90%] opacity-20 md:opacity-30" viewBox="0 0 350 400" preserveAspectRatio="none">
            <path d="M350,0 C230,50 150,150 130,400 L350,400 Z" fill="url(#heroWingGoldRight)" />
            <path d="M350,0 C230,50 150,150 130,400" stroke="#c5a85c" strokeWidth="2" fill="none" />
            <defs>
              <linearGradient id="heroWingGoldRight" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#c5a85c" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 flex-grow">
          
          {/* TOP LEFT BRANDING LOGO & NAME */}
          <div className="flex items-center gap-3 self-start md:self-center">
            <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0">
              <svg className="w-full h-full text-[#c5a85c] filter drop-shadow-lg" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="sylvanLogoGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff" />
                    <stop offset="40%" stopColor="#c5a85c" />
                    <stop offset="100%" stopColor="#7b4e1b" />
                  </linearGradient>
                </defs>
                <path d="M 25,85 V 65 L 30,62 V 85 Z" fill="url(#sylvanLogoGold)" />
                <path d="M 33,85 V 50 L 41,45 V 85 Z" fill="url(#sylvanLogoGold)" />
                <path d="M 44,85 V 35 L 56,28 L 68,35 V 85 Z" fill="url(#sylvanLogoGold)" />
                <path d="M 71,85 V 50 L 79,45 V 85 Z" fill="url(#sylvanLogoGold)" />
                <path d="M 82,85 V 65 L 87,62 V 85 Z" fill="url(#sylvanLogoGold)" />
                <path d="M 46,85 V 72 L 56,66 L 66,72 V 85 H 61 V 76 H 51 V 85 Z" fill="#120002" stroke="url(#sylvanLogoGold)" strokeWidth="1.2" />
                <path d="M 15,82 Q 56,65 97,82" stroke="url(#sylvanLogoGold)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-serif text-2xl md:text-3xl font-black tracking-widest text-[#fff] leading-none">
                MRCL
              </span>
              <span className="font-sans text-[7.5px] md:text-[8px] tracking-[0.35em] text-[#c5a85c] uppercase font-bold mt-1.5">
                INFRASTRUCTURE
              </span>
            </div>
          </div>

          {/* MAIN CENTER TITLE BLOCK */}
          <div className="text-center space-y-3 md:space-y-4 max-w-xl">
            <span className="font-serif text-[#c5a85c] text-xs sm:text-sm tracking-[0.4em] font-extrabold uppercase ml-[0.4em]">
              MRCL SYLVAN WOODS
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black tracking-[0.05em] text-[#fff] uppercase leading-tight drop-shadow-md">
              MRCL SYLVAN WOODS
            </h1>
            
            {/* framed subtitle line */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-8 sm:w-16 bg-[#c5a85c]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a85c]" />
              <span className="font-sans text-[9px] sm:text-[11px] font-black tracking-[0.25em] text-[#fff] uppercase whitespace-nowrap">
                NATURE. LUXURY. CONNECTIVITY.
              </span>
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a85c]" />
              <div className="h-[1px] w-8 sm:w-16 bg-[#c5a85c]" />
            </div>
          </div>

          {/* TOP RIGHT BADGE CARD */}
          <div className="flex items-center justify-center bg-[#8c1c24] border border-[#c5a85c] rounded-xl p-3 text-center text-white font-sans max-w-[170px] self-end md:self-center shadow-lg z-10 hover:scale-103 transition-transform">
            <div className="space-y-1">
              <div className="flex justify-center text-[#c5a85c]">
                <Sparkles className="w-5 h-5 fill-current animate-pulse" />
              </div>
              <p className="text-[10px] tracking-widest font-black uppercase text-[#faf6f0]">
                BUILDING
              </p>
              <p className="text-[9px] tracking-widest text-[#c5a85c] font-bold uppercase">
                BETTER
              </p>
              <p className="text-[8px] tracking-widest font-black uppercase text-[#faf6f0]">
                COMMUNITIES
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* 2. MAIN CORE DETAILS TWO-COLUMN CONTAINER */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          
          {/* ================= LEFT 2/3 COLUMN: IMAGE & DESCRIPTION ================= */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Interactive Multi-Image Actual Photo Carousel */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden border border-stone-300 shadow-xl bg-stone-900 group">
              
              {/* Image Transition Stage */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeActualCarouselIdx}
                  src={actualCarouselImages[activeActualCarouselIdx].src}
                  alt={actualCarouselImages[activeActualCarouselIdx].caption}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Dynamic Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent pointer-events-none" />

              {/* Caption details aligned bottom-left */}
              {/* <div className="absolute bottom-4 left-6 right-16 text-white text-left select-none pointer-events-none">
                <span className="text-[10px] tracking-widest font-black text-[#c5a85c] uppercase bg-stone-900/60 backdrop-blur-sm px-2.5 py-1 rounded-md border border-[#c5a85c]/20 inline-block mb-1.5">
                  {actualCarouselImages[activeActualCarouselIdx].tag}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold drop-shadow-md leading-snug">
                  {actualCarouselImages[activeActualCarouselIdx].caption}
                </h3>
              </div> */}

              {/* Carousel Left Navigation Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveActualCarouselIdx((prev) => (prev - 1 + actualCarouselImages.length) % actualCarouselImages.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/60 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none animate-fade-in"
                title="Previous Slide"
              >
                <ChevronLeft className="w-5.5 h-5.5" />
              </button>

              {/* Carousel Right Navigation Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveActualCarouselIdx((prev) => (prev + 1) % actualCarouselImages.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/60 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none animate-fade-in"
                title="Next Slide"
              >
                <ChevronRight className="w-5.5 h-5.5" />
              </button>

              {/* Indicator Bullets / Dots */}
              <div className="absolute bottom-4 right-6 flex items-center gap-1.5 z-10">
                {actualCarouselImages.map((_, idx) => {
                  const isActive = idx === activeActualCarouselIdx;
                  return (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveActualCarouselIdx(idx);
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                        isActive 
                          ? 'bg-[#c5a85c] w-5' 
                          : 'bg-white/40 hover:bg-white/75'
                      }`}
                      title={`Go to slide ${idx + 1}`}
                    />
                  );
                })}
              </div>

            </div>

            {/* Paragraph Description & Brochure/Map Buttons */}
            <div className="space-y-6">
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed text-left">
                Mysore Road, a major arterial stretch in Bangalore, has transformed into a real estate hotspot with rapid infrastructure developments and growing residential demand. The area offers a perfect blend of affordability, connectivity, and modern amenities, making it an ideal choice for homebuyers and investors alike.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                {/* <button 
                  onClick={() => onOpenContact("Download Sylvan Woods Brochure")}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8c1c24] hover:bg-[#a6242e] text-white font-sans text-xs sm:text-sm font-bold tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>DOWNLOAD BROCHURE</span>
                </button> */}
                <button 
                  onClick={() => {
                    const el = document.getElementById('layout-plan-section');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#8c1c24] hover:bg-[#8c1c24]/5 text-[#8c1c24] font-sans text-xs sm:text-sm font-bold tracking-wider rounded-lg transition-all active:scale-[0.98] cursor-pointer"
                >
                  <MapPin className="w-4 h-4" />
                  <span>VIEW LOCATION MAP</span>
                </button>
              </div>
            </div>

            {/* AMENITIES SECTION GRID */}
            <div className="pt-8 border-t border-stone-200">
              <div className="text-center space-y-2 mb-10">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] w-12 sm:w-20 bg-[#c5a85c]" />
                  <span className="font-serif text-2xl sm:text-3xl text-[#8c1c24] tracking-widest font-black uppercase">
                    AMENITIES
                  </span>
                  <div className="h-[1px] w-12 sm:w-20 bg-[#c5a85c]" />
                </div>
                <div className="flex justify-center">
                  <div className="w-2.5 h-2.5 rotate-45 border border-[#c5a85c] bg-white" />
                </div>
              </div>

              {/* Grid Layout of Amenities Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {amenities.map((item, idx) => (
                  <div 
                    key={idx} 
                    className={`bg-white border border-stone-200 hover:border-[#c5a85c] rounded-xl p-4 flex flex-col items-center justify-center text-center space-y-3 shadow-sm hover:shadow-md transition-all duration-300 group ${
                      item.fullWidth ? 'col-span-2 sm:col-span-4' : ''
                    }`}
                  >
                    <div className="w-12 h-12 rounded-full bg-[#faf6f0] border border-stone-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                      {item.icon}
                    </div>
                    <span className="font-sans text-xs sm:text-sm font-bold text-stone-800 leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ACCORDIONS SECTIONS */}
            <div className="pt-12 border-t border-stone-200 text-left">
              <div className="space-y-4">
                {Object.keys(accordionData).map((key) => {
                  const item = accordionData[key];
                  const isOpen = openAccordion === key;

                  return (
                    <div key={key} className="border border-stone-200 rounded-xl overflow-hidden shadow-sm bg-white">
                      <button
                        onClick={() => setOpenAccordion(isOpen ? null : key)}
                        className={`w-full px-5 py-4 flex items-center justify-between text-left transition-colors cursor-pointer ${
                          isOpen ? 'bg-[#8c1c24] text-white' : 'hover:bg-stone-50 text-[#8c1c24]'
                        }`}
                      >
                        <span className="font-sans text-xs sm:text-sm font-black tracking-widest uppercase">
                          {item.title}
                        </span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-white' : 'text-[#8c1c24]'}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="p-5 border-t border-stone-150 bg-stone-50/50">
                              {item.content}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* ================= RIGHT 1/3 COLUMN: QUICK STATS, CONTACT, ENQUIRY FORM ================= */}
          <div className="space-y-8">
            
            {/* Quick Details Table Box */}
            <div className="bg-white border-2 border-stone-200 rounded-2xl p-6 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none">
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#c5a85c]" />
                <div className="absolute top-2 right-4 w-1.5 h-1.5 rounded-full bg-stone-200" />
              </div>
              <h3 className="font-serif text-lg font-extrabold text-[#8c1c24] border-b border-stone-150 pb-3 mb-4 tracking-wider uppercase text-left">
                Key Parameters
              </h3>

              <div className="space-y-5 text-left">
                {quickInfo.map((info) => (
                  <div key={info.id} className="flex gap-3.5 items-start">
                    <div className="mt-0.5 w-10 h-10 shrink-0 rounded-lg bg-[#faf6f0] border border-stone-150 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-stone-400 tracking-wider uppercase font-sans">
                        {info.label}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-stone-800 font-sans mt-0.5 leading-snug">
                        {info.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Advice Card (Deep Wine background) */}
            <div className="bg-gradient-to-br from-[#1c0305] to-[#45050c] border border-[#c5a85c] rounded-2xl p-6 text-center text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(197,168,92,0.08)_0%,transparent_50%)] pointer-events-none" />
              <div className="absolute top-2 left-2 w-2 h-2 rotate-45 border border-[#c5a85c]" />
              <div className="absolute top-2 right-2 w-2 h-2 rotate-45 border border-[#c5a85c]" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rotate-45 border border-[#c5a85c]" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rotate-45 border border-[#c5a85c]" />

              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-black text-[#c5a85c] tracking-widest uppercase">
                  CONTACT US FOR ANY ADVICE
                </h3>
                <p className="text-xs text-stone-300 font-sans font-medium tracking-wider">
                  Need help? Talk to an expert
                </p>

                {/* Big glowing Phone display */}
                <a 
                  href="tel:+918989399889"
                  className="inline-flex items-center gap-3 bg-black/30 border border-[#c5a85c]/30 hover:border-[#c5a85c] rounded-xl px-5 py-3 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full bg-[#c5a85c]/10 border border-[#c5a85c]/30 flex items-center justify-center text-[#c5a85c] group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-serif text-lg sm:text-xl font-extrabold text-[#faf6f0] tracking-wider">
                    +91 898 939 9889
                  </span>
                </a>
              </div>
            </div>

            {/* ENQUIRY FORM CARD */}
            <div className="bg-white border border-[#c5a85c]/30 rounded-2xl p-6 sm:p-8 shadow-xl text-left relative">
              
              <div className="text-center space-y-2 mb-6">
                <h3 className="font-serif text-xl font-black text-[#8c1c24] tracking-widest uppercase">
                  ENQUIRY FORM
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[1.5px] w-10 bg-[#c5a85c]" />
                  <div className="w-1 h-1 rounded-full bg-[#c5a85c]" />
                  <div className="h-[1.5px] w-10 bg-[#c5a85c]" />
                </div>
              </div>

              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-400 flex items-center justify-center text-emerald-600 mx-auto">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-stone-800">
                    Enquiry Submitted!
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                    Thank you <strong>{formData.name}</strong> for choosing MRCL Sylvan Woods. An executive has been assigned and will contact you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <button 
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', project: 'MRCL Sylvan Woods', message: '' });
                      setRecaptchaChecked(false);
                    }}
                    className="cursor-pointer font-sans text-xs text-[#8c1c24] font-bold underline uppercase tracking-widest"
                  >
                    Submit another response
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-sans">
                  
                  {/* Name field */}
                  <div className="space-y-1">
                    <div className="relative">
                      <User className="absolute left-3.5 top-[50%] -translate-y-[50%] w-4 h-4 text-stone-400" />
                      <input 
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className={`w-full pl-10 pr-4 py-2.5 bg-stone-50 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8c1c24]/20 transition-all ${
                          formErrors.name ? 'border-red-500 bg-red-50/20' : 'border-stone-200 focus:border-[#8c1c24]'
                        }`}
                      />
                    </div>
                    {formErrors.name && <p className="text-[10px] text-red-500 font-bold text-left pl-1">{formErrors.name}</p>}
                  </div>

                  {/* Email field */}
                  <div className="space-y-1">
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-[50%] -translate-y-[50%] w-4 h-4 text-stone-400" />
                      <input 
                        type="email"
                        placeholder="Email id"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className={`w-full pl-10 pr-4 py-2.5 bg-stone-50 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8c1c24]/20 transition-all ${
                          formErrors.email ? 'border-red-500 bg-red-50/20' : 'border-stone-200 focus:border-[#8c1c24]'
                        }`}
                      />
                    </div>
                    {formErrors.email && <p className="text-[10px] text-red-500 font-bold text-left pl-1">{formErrors.email}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1">
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-[50%] -translate-y-[50%] w-4 h-4 text-stone-400" />
                      <input 
                        type="tel"
                        placeholder="Contact Number"
                        value={formData.phone}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, '');
                          if (val.startsWith('0')) val = val.substring(1);
                          val = val.slice(0, 10);
                          setFormData({...formData, phone: val});
                        }}
                        maxLength={10}
                        minLength={10}
                        className={`w-full pl-10 pr-4 py-2.5 bg-stone-50 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#8c1c24]/20 transition-all ${
                          formErrors.phone ? 'border-red-500 bg-red-50/20' : 'border-stone-200 focus:border-[#8c1c24]'
                        }`}
                      />
                    </div>
                    {formErrors.phone && <p className="text-[10px] text-red-500 font-bold text-left pl-1">{formErrors.phone}</p>}
                  </div>

                  {/* Project Selector field */}
                  <div className="space-y-1">
                    <select 
                      value={formData.project}
                      onChange={(e) => setFormData({...formData, project: e.target.value})}
                      className="w-full px-3 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#8c1c24] focus:ring-2 focus:ring-[#8c1c24]/20 transition-all"
                    >
                      {/* <option value="MRCL Sylvan Woods">-- Select Project Name --</option> */}
                      <option value="MRCL Sylvan Woods">MRCL Sylvan Woods (Ramohalli)</option>
                      <option value="MRCL Serenity">MRCL Serenity (Electronic City)</option>
                    </select>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <textarea 
                      rows={3}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-200 rounded-lg text-sm focus:outline-none focus:border-[#8c1c24] focus:ring-2 focus:ring-[#8c1c24]/20 transition-all"
                    />
                  </div>



                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#8c1c24] hover:bg-[#a6242e] text-white font-black py-3 rounded-lg text-xs tracking-[0.2em] transition-all uppercase shadow-md active:scale-[0.98] cursor-pointer inline-flex items-center justify-center gap-2 hover:shadow-lg focus:outline-none"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SUBMIT ENQUIRY</span>
                  </button>

                </form>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE LAYOUT PLAN & WHO SHOULD INVEST SECTIONS */}
      <section id="layout-plan-section" className="py-12 bg-white border-t border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            
            {/* LEFT COLUMN: INTERACTIVE LAYOUT PLAN */}
            <div className="space-y-6 text-left">
              <div className="text-center sm:text-left space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="h-[1px] w-8 bg-[#c5a85c]" />
                  <span className="font-serif text-xl sm:text-2xl text-[#8c1c24] tracking-widest font-black uppercase">
                    LAYOUT PLAN
                  </span>
                  <div className="h-[1px] w-8 bg-[#c5a85c]" />
                </div>
              </div>

              {/* High-Fidelity Interactive SVG Map */}
             <img src={mrclSylvanWoodsPlanImg} alt="MRCL Sylvan Woods Layout Plan" className='w-full h-auto object-contain mt-5'/>

              {/* Grid Layout of Legend List Below Layout Plan */}
              {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {legendItems.map((item) => {
                  const isHovered = hoveredZone === item.zone;

                  return (
                    <div 
                      key={item.num}
                      onMouseEnter={() => setHoveredZone(item.zone)}
                      onMouseLeave={() => setHoveredZone(null)}
                      className={`p-2.5 rounded-lg border text-left flex items-center gap-2.5 transition-all duration-300 cursor-pointer ${
                        isHovered 
                          ? 'border-[#8c1c24] bg-[#8c1c24]/5 translate-y-[-2px] shadow-sm' 
                          : 'border-stone-200 bg-white hover:border-[#c5a85c]'
                      }`}
                    >
                      <div className={`w-6 h-6 shrink-0 rounded-full flex items-center justify-center text-white font-sans text-xs font-black ${item.color}`}>
                        {item.num}
                      </div>
                      <span className="font-sans text-xs font-bold text-stone-700 leading-none">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div> */}

            </div>

            {/* RIGHT COLUMN: WHO SHOULD INVEST IN MYSORE ROAD */}
            <div className="space-y-6 text-left">
              <div className="text-center sm:text-left space-y-2">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <div className="h-[1px] w-8 bg-[#c5a85c]" />
                  <span className="font-serif text-xl sm:text-2xl text-[#8c1c24] tracking-widest font-black uppercase">
                    WHO SHOULD CONSIDER?
                  </span>
                  <div className="h-[1px] w-8 bg-[#c5a85c]" />
                </div>
                <p className="text-xs sm:text-sm text-stone-500 italic">
                  Mysore Road is the absolute ideal choice for premium seekers
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Item 1 */}
                <div className="bg-[#faf6f0] border border-[#c5a85c]/30 rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#8c1c24] text-white flex items-center justify-center shadow-lg">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-[#8c1c24] font-bold text-sm sm:text-base leading-snug">
                      Working Professionals
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      Proximity to premier IT parks, global tech centers, and rapid Purple Line metro connectivity makes daily travel extremely comfortable and stress-free.
                    </p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="bg-[#faf6f0] border border-[#c5a85c]/30 rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#8c1c24] text-white flex items-center justify-center shadow-lg">
                    <Smile className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-[#8c1c24] font-bold text-sm sm:text-base leading-snug">
                      Families
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      Availability of major hospitals, accredited international colleges, recreational malls, and secure gated community facilities ensures a high standard of living.
                    </p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="bg-[#faf6f0] border border-[#c5a85c]/30 rounded-2xl p-5 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-[#8c1c24] text-white flex items-center justify-center shadow-lg">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-[#8c1c24] font-bold text-sm sm:text-base leading-snug">
                      Investors
                    </h4>
                    <p className="text-xs sm:text-sm text-stone-600 font-sans leading-relaxed">
                      TIMELY entry into Mysore Road's rapid development cycle guarantees high rental demand, massive capital appreciation, and secure high return on investments.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. GALLERY GRID SECTION */}
      <section className="py-16 bg-[#faf6f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 sm:w-20 bg-[#c5a85c]" />
              <span className="font-serif text-2xl sm:text-3xl text-[#8c1c24] tracking-widest font-black uppercase">
                GALLERY
              </span>
              <div className="h-[1px] w-12 sm:w-20 bg-[#c5a85c]" />
            </div>
            <div className="flex justify-center">
              <div className="w-2.5 h-2.5 rotate-45 border border-[#c5a85c] bg-[#faf6f0]" />
            </div>
            <p className="max-w-2xl mx-auto text-stone-600 text-sm font-sans leading-relaxed pt-1">
              Explore our master-planned layout renders, active villa designs, and premium clubhouse pavilions. Click on any render to expand into high-definition viewing mode.
            </p>
          </div>

          {/* Premium Gallery Carousel */}
          <div className="relative max-w-5xl mx-auto space-y-4">
            
            {/* Main Stage Frame */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-900 border-2 border-stone-200 hover:border-[#c5a85c] shadow-xl group transition-all duration-300">
              
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentGalleryIndex}
                  src={galleryImages[currentGalleryIndex].src}
                  alt={galleryImages[currentGalleryIndex].caption || `Gallery Render ${currentGalleryIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setIsLightboxOpen(true)}
                  referrerPolicy="no-referrer"
                />
              </AnimatePresence>

              {/* Click to expand hover layer */}
              <div 
                onClick={() => setIsLightboxOpen(true)}
                className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-[#c5a85c] text-stone-950 flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-all duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Left Navigation Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-950/70 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none"
                title="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Right Navigation Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-stone-950/70 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none"
                title="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Premium Interactive Thumbnails */}
            <div className="flex justify-center items-center gap-2.5 sm:gap-4 overflow-x-auto py-2 px-1 max-w-full">
              {galleryImages.map((img, idx) => {
                const isActive = idx === currentGalleryIndex;
                return (
                  <button
                    key={idx}
                    onClick={() => setCurrentGalleryIndex(idx)}
                    className={`relative w-20 sm:w-28 aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer shrink-0 ${
                      isActive 
                        ? 'border-[#8c1c24] scale-105 shadow-md ring-2 ring-[#8c1c24]/20' 
                        : 'border-stone-200 hover:border-[#c5a85c] opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img.src} 
                      alt={`Thumbnail ${idx + 1}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    {!isActive && (
                      <div className="absolute inset-0 bg-stone-950/20 transition-colors duration-300" />
                    )}
                  </button>
                );
              })}
            </div>

          </div>

          {/* Premium Media Lightbox Modal */}
          <AnimatePresence>
            {isLightboxOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/96 backdrop-blur-md p-4 sm:p-6 select-none"
                onClick={() => setIsLightboxOpen(false)}
              >
                
                {/* Modal main content wrapper */}
                <div 
                  className="relative max-w-5xl w-full flex flex-col items-center justify-center"
                  onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the content
                >
                  
                  {/* Image container frame */}
                  <div className="relative w-full flex items-center justify-center overflow-hidden min-h-[300px] max-h-[72vh]">
                    
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentGalleryIndex}
                        src={galleryImages[currentGalleryIndex].src}
                        alt={galleryImages[currentGalleryIndex].caption}
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="max-h-[70vh] max-w-full object-contain rounded-xl border border-white/10 shadow-2xl bg-stone-900"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>

                    {/* Left arrow navigation inside frame */}
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 w-12 h-12 rounded-full bg-stone-950/70 hover:bg-[#8c1c24] border border-white/15 hover:border-[#c5a85c] text-white hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none z-40 shadow-lg hover:scale-105"
                      title="Previous (Left Arrow)"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    {/* Right arrow navigation inside frame */}
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 w-12 h-12 rounded-full bg-stone-950/70 hover:bg-[#8c1c24] border border-white/15 hover:border-[#c5a85c] text-white hover:text-white flex items-center justify-center transition-all cursor-pointer focus:outline-none z-40 shadow-lg hover:scale-105"
                      title="Next (Right Arrow)"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                  </div>

                  {/* Exquisite captions box */}
                  <div className="mt-5 text-center max-w-2xl px-6 py-4 bg-stone-900/80 border border-white/10 rounded-2xl shadow-xl space-y-1">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-[#c5a85c] font-black uppercase">
                      IMAGE {currentGalleryIndex + 1} OF {galleryImages.length}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                      {galleryImages[currentGalleryIndex].caption}
                    </h3>
                    <p className="font-sans text-[10px] text-stone-400 tracking-wider">
                      Use Left / Right arrow keys to navigate. Press ESC to exit.
                    </p>
                  </div>

                </div>

                {/* Highly visible close trigger button in top right with >44px touch target */}
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 rounded-full bg-stone-900/80 hover:bg-[#8c1c24] border border-white/15 hover:border-white text-stone-300 hover:text-white transition-all shadow-lg z-50 flex items-center justify-center cursor-pointer hover:scale-105"
                  title="Close (Escape)"
                >
                  <X className="w-6 h-6" />
                </button>

              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </section>

      {/* 5. GRAND FOOTER BRAND SLOGAN */}
      <footer className="py-12 border-t border-stone-200 text-center relative overflow-hidden" style={{ backgroundColor: '#faf6f0' }}>
        
        {/* Subtle Decorative Floral/Leaves Motif SVG elements */}
        <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none opacity-10">
          <svg className="w-full h-full text-[#8c1c24]" viewBox="0 0 100 100">
            <path d="M 0,100 C 30,80 80,80 100,100" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M 20,85 C 10,70 15,60 30,75 Z" fill="currentColor" />
            <path d="M 45,82 C 35,65 40,55 55,72 Z" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-10">
          <svg className="w-full h-full text-[#8c1c24]" viewBox="0 0 100 100">
            <path d="M 100,100 C 70,80 20,80 0,100" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M 80,85 C 90,70 85,60 70,75 Z" fill="currentColor" />
            <path d="M 55,82 C 65,65 60,55 45,72 Z" fill="currentColor" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="font-serif text-sm sm:text-base md:text-lg font-black text-[#8c1c24] tracking-[0.2em] uppercase leading-relaxed">
            MRCL SYLVAN WOODS – WHERE NATURE MEETS LUXURY LIVING
          </h3>
          
          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-[#c5a85c]/60" />
            <div className="relative w-4 h-4 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rotate-45 border border-[#c5a85c] bg-white" />
              <div className="w-1 h-1 rotate-45 bg-[#c5a85c] absolute" />
            </div>
            <div className="h-[1px] w-12 bg-[#c5a85c]/60" />
          </div>
          
          <p className="text-[10px] font-bold text-stone-400 tracking-widest uppercase">
            © 2026 MRCL Infrastructure. All Rights Reserved.
          </p>
        </div>

      </footer>

    </div>
  );
}
