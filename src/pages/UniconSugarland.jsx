import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, Phone, Check, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, 
  Mail, User, Eye, ArrowRight, Download, FileText, Send, X, ZoomIn,
  Building2, Dumbbell, ShieldCheck, Waves, Users, Sparkles, Heart, Footprints, Trophy, Award, Smile
} from 'lucide-react';
import { ASSETS } from '../data';
import { submitProjectEnquiryForm } from '../api';
import galleryImg1 from "../assets/images/sugarland-landing-page-imgs/gallery-img1.webp";
import galleryImg2 from "../assets/images/sugarland-landing-page-imgs/gallery-img2.webp";
import galleryImg3 from "../assets/images/sugarland-landing-page-imgs/gallery-img3.webp";
import galleryImg4 from "../assets/images/sugarland-landing-page-imgs/gallery-img4.webp";
import galleryImg5 from "../assets/images/sugarland-landing-page-imgs/gallery-img5.webp";
import galleryImg6 from "../assets/images/sugarland-landing-page-imgs/gallery-img6.webp";
import galleryImg7 from "../assets/images/sugarland-landing-page-imgs/gallery-img7.webp";
import galleryImg8 from "../assets/images/sugarland-landing-page-imgs/gallery-img8.webp";
import galleryImg9 from "../assets/images/sugarland-landing-page-imgs/gallery-img9.webp";
import galleryImg10 from "../assets/images/sugarland-landing-page-imgs/gallery-img10.webp";
import galleryImg11 from "../assets/images/sugarland-landing-page-imgs/gallery-img11.webp";
import galleryImg12 from "../assets/images/sugarland-landing-page-imgs/gallery-img12.webp";
import galleryImg13 from "../assets/images/sugarland-landing-page-imgs/gallery-img13.webp";
//import galleryImg14 from "../assets/images/sugarland-landing-page-imgs/gallery-img-14.jpg";
import galleryImg15 from "../assets/images/sugarland-landing-page-imgs/gallery-img15.webp";
import galleryImg16 from "../assets/images/sugarland-landing-page-imgs/gallery-img16.webp";
import galleryImg17 from "../assets/images/sugarland-landing-page-imgs/gallery-img17.webp";
import galleryImg18 from "../assets/images/sugarland-landing-page-imgs/gallery-img18.webp";
import galleryImg19 from "../assets/images/sugarland-landing-page-imgs/gallery-img19.webp";

export default function UniconSugarland() {
  const context = useOutletContext();
  const onOpenContact = context?.onOpenContact || (() => {});

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: 'MRCL Unicon Sugarland',
    message: ''
  });
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [recaptchaVerifying, setRecaptchaVerifying] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Accordion States
  const [openAccordion, setOpenAccordion] = useState('address');

  // Actual Photographs Carousel State
  const actualCarouselImages = [
    { src: galleryImg1, caption: "MRCL Unicon Sugarland Premium Villa Elevation", tag: "ACTUAL PHOTOGRAPH" },
    { src: galleryImg2, caption: "Spacious High-Ceiling Reception & Entrance Lounge", tag: "ACTUAL INTERIOR" },
    { src: galleryImg3, caption: "Exquisite Gated Row House Community Street", tag: "ACTUAL STREET VIEW" },
    { src: galleryImg4, caption: "Deluxe master Bedroom with Glass Openings", tag: "ACTUAL INTERIOR VIEW" },
    { src: galleryImg5, caption: "Beautiful Private Backyard Terrace & Sitout", tag: "ACTUAL BACKYARD" }
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
    { src: galleryImg1 , caption: "Premium Clubhouse Renders" },
    { src: galleryImg2, caption: "Luxury Clubhouse Lounge & Lobby" },
    { src: galleryImg3, caption: "Elegant Villa Facade Design" },
    { src: galleryImg4, caption: "Double-Height Living & Entrance Foyer" },
    { src: galleryImg5, caption: "Gated Enclave Tree-lined Roads & Access" },
    { src: galleryImg6, caption: "Exquisite Triple-Level Luxury Facade" },
    { src: galleryImg7, caption: "Opulent Internal Lounge Layout" },
    { src: galleryImg8, caption: "Stunning Clubhouse Swimming Pool" },
    { src: galleryImg9, caption: "Villa Backyard Deck & Greenery" },
    { src: galleryImg10, caption: "Signature High-End Foyer View" },
    { src: galleryImg11, caption: "Grand Entrance Portal Render" },
    { src: galleryImg12, caption: "Exclusive Modern Elevation" },
    { src: galleryImg13, caption: "Elite Resident Leisure Room" },
    { src: galleryImg15, caption: "Premium Kids Play Area" },
    { src: galleryImg16, caption: "Gated Community Landscape Garden" },
    { src: galleryImg17, caption: "Gated Community Landscape Garden" },
    { src: galleryImg18, caption: "Gated Community Landscape Garden" },
    { src: galleryImg19, caption: "Gated Community Landscape Garden" },
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
    }, 800);
  };

  // Submit Handler
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Your Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email id is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Contact Number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim().replace(/[-\s]/g, ''))) {
      errors.phone = 'Contact number must be 10 digits';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setFormSubmitted(true);
    
    try {
      const response = await submitProjectEnquiryForm(formData);
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          project: 'MRCL Unicon Sugarland',
          message: ''
        });
        setRecaptchaChecked(false);
        alert('Thank you! Your enquiry has been submitted successfully. Our premium relationship manager will contact you shortly.');
      } else {
        alert("Failed to submit enquiry.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting enquiry.");
    } finally {
      setFormSubmitted(false);
    }
  };

  return (
    <div id="unicon-sugarland-page" className="bg-[#faf6f0] min-h-screen font-sans text-stone-800 selection:bg-[#8c1c24] selection:text-white relative pt-20">
      
      {/* 1. EXQUISITE MAROON HEADER (Exact match with screenshot) */}
      <header className="bg-gradient-to-r from-[#2c0307] via-[#4a0810] to-[#2c0307] text-white py-6 px-4 md:px-12 border-b-2 border-[#c5a85c] relative shadow-lg">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo Container */}
          <div className="flex items-center gap-3">
            <svg className="w-12 h-12 text-[#c5a85c]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.1)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div>
              <span className="block font-serif text-lg font-bold tracking-[0.25em] leading-none text-white">MRCL</span>
              <span className="block font-sans text-[8px] tracking-[0.35em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
            </div>
          </div>

          {/* Heading Title Block */}
          <div className="text-center flex-grow max-w-2xl px-4">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c5a85c]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a85c]" />
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c5a85c]" />
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#c5a85c] tracking-[0.08em] uppercase leading-tight">
              MRCL UNICON SUGARLAND
            </h1>
            <div className="flex items-center justify-center gap-2 mt-1.5 mb-2.5">
              <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c5a85c]" />
              <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a85c]" />
              <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c5a85c]" />
            </div>
            <p className="font-sans text-[10px] sm:text-xs tracking-[0.3em] text-stone-200 uppercase font-medium">
              LUXURY VILLAS. SUPERIOR LIVING.
            </p>
          </div>

          {/* Right Emblem: Building Better Communities */}
          <div className="bg-[#c5a85c]/10 border border-[#c5a85c]/40 rounded-xl px-4 py-2.5 flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-full bg-[#c5a85c] flex items-center justify-center text-[#2c0307]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <span className="block text-[10px] font-black uppercase tracking-widest text-[#c5a85c]">BUILDING</span>
              <span className="block text-[9px] text-stone-300 font-sans tracking-wider uppercase">BETTER</span>
              <span className="block text-[9px] text-stone-300 font-sans tracking-wider uppercase">COMMUNITIES</span>
            </div>
          </div>

        </div>
      </header>

      {/* 2. BODY CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: HERO & KEY INFO SUMMARY FOR MOBILE + MAIN SPECS */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Interactive Multi-Image Actual Photo Carousel */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-2xl overflow-hidden bg-stone-900 border-2 border-stone-200 shadow-xl group transition-all duration-300">
              
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
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/60 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none"
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
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-stone-950/60 hover:bg-[#8c1c24] border border-white/10 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-105 z-10 focus:outline-none"
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

            {/* Project Overview Text & Download Button */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
              <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans text-justify">
                Unicon Sugarland is a premium residential project developed by Unicon Projects, located in Koppa Gate, off Jigani Road, Bangalore. The project offers 4 BHK villas with a saleable area of approximately 3000 square feet.
              </p>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans text-justify">
                The development is well-connected, with Bannerghatta Road nearby and the NICE Peripheral Ring Road approximately 8KM, providing residents with convenient access to various parts of Bangalore.
              </p>
              <p className="text-stone-700 text-sm md:text-base leading-relaxed font-sans text-justify">
                The project is registered under RERA with the ID <strong className="text-[#8c1c24]">PRM/KA/RERA/1251/308/PR/080824/006964</strong>, ensuring compliance with regulatory standards.
              </p>

              {/* <div className="pt-2 flex justify-center">
                <button 
                  onClick={() => alert('Brochure download initiated successfully!')}
                  className="bg-[#2c0307] hover:bg-[#8c1c24] text-white border border-[#c5a85c] rounded-xl px-8 py-3.5 font-sans text-xs sm:text-sm font-bold tracking-[0.2em] flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer hover:scale-103 uppercase"
                >
                  <Download className="w-4 h-4 text-[#c5a85c]" />
                  <span>Download Brochure</span>
                </button>
              </div> */}
            </div>

            {/* Amenities Grid Container */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 shadow-sm space-y-8">
              
              <div className="text-center">
                <div className="flex items-center justify-center gap-3 mb-1.5">
                  <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c5a85c]" />
                  <h2 className="font-serif text-lg sm:text-xl font-black text-stone-800 tracking-widest uppercase">
                    AMENITIES
                  </h2>
                  <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c5a85c]" />
                </div>
                <div className="flex justify-center mt-1">
                  <div className="w-2 h-2 rotate-45 border border-[#c5a85c] bg-[#faf6f0]" />
                </div>
              </div>

              {/* Grid of 10 amenities exactly like screenshot */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {[
                  { icon: Waves, name: 'Swimming Pool' },
                  { icon: Dumbbell, name: 'Gym' },
                  { icon: Smile, name: "Children's Play Area" },
                  { icon: Building2, name: 'Clubhouse' },
                  { icon: Utensils, name: 'Catering', overrideIcon: <span className="text-[#c5a85c] text-3xl font-extralight">🍽️</span> },
                  { icon: ShieldCheck, name: 'Gated Community' },
                  { icon: Heart, name: 'Spa' },
                  { icon: ShieldCheck, name: '24/7 Security' },
                  { icon: Footprints, name: 'Jogging Track' },
                  { icon: Trophy, name: 'Sports Court' }
                ].map((item, idx) => {
                  const IconComp = item.icon;
                  return (
                    <div 
                      key={idx}
                      className="border border-stone-100 hover:border-[#c5a85c] rounded-xl p-4 flex flex-col items-center justify-center text-center bg-stone-50/50 hover:bg-white transition-all duration-300 min-h-[110px] shadow-sm hover:shadow-md group cursor-default"
                    >
                      <div className="w-12 h-12 rounded-full bg-[#faf6f0] border border-stone-100 group-hover:border-[#c5a85c]/30 flex items-center justify-center text-[#c5a85c] transition-all mb-2">
                        {item.overrideIcon ? item.overrideIcon : <IconComp className="w-5 h-5 stroke-[1.5]" />}
                      </div>
                      <span className="text-[11px] sm:text-xs font-sans font-bold tracking-wide text-stone-700 leading-tight">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* Premium Accordions Accordions */}
            <div className="space-y-4">
              
              {/* Accordion 1: Luxury Villas */}
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'address' ? '' : 'address')}
                  className={`w-full py-4 px-6 flex items-center justify-between text-left transition-colors font-sans text-xs sm:text-sm font-black tracking-wider uppercase cursor-pointer ${
                    openAccordion === 'address' 
                      ? 'bg-[#2c0307] text-white' 
                      : 'bg-stone-100 hover:bg-stone-200/70 text-stone-800'
                  }`}
                >
                  <span>LUXURY VILLAS ON BANNERGHATTA ROAD - A DREAM ADDRESS FOR OPULENT LIVING</span>
                  {openAccordion === 'address' ? <ChevronUp className="w-4 h-4 text-[#c5a85c]" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence initial={false}>
                  {openAccordion === 'address' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 text-stone-600 text-sm leading-relaxed space-y-4">
                        <p>
                          Experience the pinnacle of luxury living with exquisitely designed <strong className="text-[#8c1c24]">villas on Bannerghatta Road</strong>, one of Bangalore's most sought-after locations. Nestled amidst lush greenery and offering world-class amenities, these villas provide the perfect blend of elegance, comfort, and modernity.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 2: Prime Location */}
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'location' ? '' : 'location')}
                  className={`w-full py-4 px-6 flex items-center justify-between text-left transition-colors font-sans text-xs sm:text-sm font-black tracking-wider uppercase cursor-pointer ${
                    openAccordion === 'location' 
                      ? 'bg-[#2c0307] text-white' 
                      : 'bg-stone-100 hover:bg-stone-200/70 text-stone-800'
                  }`}
                >
                  <span>PRIME LOCATION & CONNECTIVITY</span>
                  {openAccordion === 'location' ? <ChevronUp className="w-4 h-4 text-[#c5a85c]" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence initial={false}>
                  {openAccordion === 'location' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 text-stone-600 text-sm leading-relaxed space-y-4">
                        <p>
                          Perfectly positioned near major tech corridors, premium schools, and world-class healthcare centers. Bannerghatta Road and Jigani Road provide seamless signal-free connectivity to Electronic City and South Bangalore.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Accordion 3: Exquisite Features */}
              <div className="border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'features' ? '' : 'features')}
                  className={`w-full py-4 px-6 flex items-center justify-between text-left transition-colors font-sans text-xs sm:text-sm font-black tracking-wider uppercase cursor-pointer ${
                    openAccordion === 'features' 
                      ? 'bg-[#2c0307] text-white' 
                      : 'bg-stone-100 hover:bg-stone-200/70 text-stone-800'
                  }`}
                >
                  <span>EXQUISITE FEATURES & WORLD-CLASS AMENITIES</span>
                  {openAccordion === 'features' ? <ChevronUp className="w-4 h-4 text-[#c5a85c]" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                <AnimatePresence initial={false}>
                  {openAccordion === 'features' && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-white"
                    >
                      <div className="p-6 text-stone-600 text-sm leading-relaxed space-y-4">
                        <p>
                          Our 4 BHK villas feature premium modular kitchens, luxurious Italian marble floor options, massive private terraces, separate maid quarters, solar water systems, and complete smart-home enablement features.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>

            {/* Why Choose & Project Highlights Dual Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Why Choose Column */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-5">
                <h3 className="font-serif text-sm sm:text-base font-black text-stone-800 tracking-wide uppercase border-b border-stone-100 pb-3">
                  WHY CHOOSE A MRCL LUXURY VILLA ON BANNERGHATTA ROAD?
                </h3>
                <ul className="space-y-3.5">
                  {[
                    'Close to major IT and business hubs',
                    'Serene environment with abundant greenery',
                    'High appreciation value & investment potential',
                    'Unmatched privacy and exclusivity'
                  ].map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-stone-700 text-sm leading-normal">
                      <div className="w-5 h-5 rounded-full bg-[#8c1c24]/15 text-[#8c1c24] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Highlights Column */}
              <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm space-y-5">
                <h3 className="font-serif text-sm sm:text-base font-black text-stone-800 tracking-wide uppercase border-b border-stone-100 pb-3">
                  PROJECT HIGHLIGHTS
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: ShieldCheck, text: 'Gated Community with 24/7 Security' },
                    { icon: Building2, text: 'Spacious 4 BHK G + 2 Villas' },
                    { icon: Sparkles, text: 'Premium Construction & Elegant Design' },
                    { icon: Award, text: 'World-Class Lifestyle Amenities' }
                  ].map((item, idx) => {
                    const HighlightIcon = item.icon;
                    return (
                      <div key={idx} className="flex items-center gap-4 text-stone-700 text-sm">
                        <div className="w-10 h-10 rounded-xl bg-[#faf6f0] border border-stone-100 flex items-center justify-center text-[#c5a85c] shrink-0">
                          <HighlightIcon className="w-5 h-5 stroke-[1.5]" />
                        </div>
                        <span className="font-medium">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDEBAR: KEY DETAILS, CONTACT BOX, & ENQUIRY FORM */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* A. Key Details Card (Exactly matching screenshot layout and content) */}
            <div className="bg-white border border-stone-200 rounded-2xl shadow-sm overflow-hidden divide-y divide-stone-100">
              
              {/* Location Detail */}
              <div className="p-5 flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#faf6f0] border border-stone-100 flex items-center justify-center text-[#c5a85c] shrink-0 mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-stone-800 uppercase tracking-widest mb-1">Location</span>
                  <p className="text-stone-600 text-[12px] sm:text-xs leading-normal">
                    Koppa Gate, off Jigani Road, Bannerghatta, Bengaluru
                  </p>
                </div>
              </div>

              {/* Project Area Detail */}
              <div className="p-5 flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#faf6f0] border border-stone-100 flex items-center justify-center text-[#c5a85c] shrink-0 mt-1">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-stone-800 uppercase tracking-widest mb-1">Project Area</span>
                  <p className="text-stone-600 text-xs font-medium">
                    2 Acres
                  </p>
                </div>
              </div>

              {/* Total Row Houses Detail */}
              <div className="p-5 flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#faf6f0] border border-stone-100 flex items-center justify-center text-[#c5a85c] shrink-0 mt-1">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-stone-800 uppercase tracking-widest mb-1">Total Row Houses</span>
                  <p className="text-stone-600 text-xs font-medium">
                    38 Units
                  </p>
                </div>
              </div>

              {/* Villa Sizes Detail */}
              <div className="p-5 flex gap-4 text-left">
                <div className="w-10 h-10 rounded-full bg-[#faf6f0] border border-stone-100 flex items-center justify-center text-[#c5a85c] shrink-0 mt-1">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-black text-stone-800 uppercase tracking-widest mb-1">Villa Sizes</span>
                  <p className="text-stone-600 text-[12px] sm:text-xs leading-normal font-medium">
                    G + 2 Villas (4 BHK) <br />
                    approx 3000 sqft
                  </p>
                </div>
              </div>

            </div>

            {/* B. Contact Us For Advice Box (Exactly like screenshot) */}
            <div className="bg-gradient-to-br from-[#2c0307] to-[#50070e] border-2 border-[#c5a85c] rounded-2xl p-6 text-center text-white shadow-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="font-serif text-lg sm:text-xl font-black tracking-widest text-[#c5a85c] uppercase leading-tight mb-2">
                CONTACT US FOR ANY ADVICE
              </h3>
              <p className="text-stone-200 text-xs sm:text-sm font-medium tracking-wide mb-5">
                Need help? Talk to an expert
              </p>
              
              <a 
                href="tel:+918989399899"
                className="inline-flex items-center justify-center gap-3 bg-[#faf6f0]/10 hover:bg-[#faf6f0]/25 border border-[#c5a85c] rounded-xl px-5 py-3 text-white transition-all duration-300 w-full group"
              >
                <div className="w-8 h-8 rounded-full bg-[#c5a85c] text-stone-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 fill-current text-stone-950" />
                </div>
                <span className="font-sans text-base sm:text-lg font-black tracking-wider text-[#c5a85c]">
                  +91 898 939 9899
                </span>
              </a>
            </div>

            {/* C. Enquiry Form Container (Exactly like screenshot) */}
            <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-md space-y-5 text-left relative">
              
              <div className="text-center">
                <span className="block font-serif text-sm sm:text-base font-black text-stone-800 tracking-widest uppercase mb-1">
                  ENQUIRY FORM
                </span>
                <div className="flex justify-center mt-1">
                  <div className="w-1.5 h-1.5 rotate-45 border border-[#c5a85c] bg-white" />
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                
                {/* Your Name */}
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm font-medium outline-none transition-all placeholder-stone-400"
                  />
                  {formErrors.name && (
                    <p className="text-red-600 text-[10px] font-semibold mt-1 pl-1">{formErrors.name}</p>
                  )}
                </div>

                {/* Email Id */}
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email id"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm font-medium outline-none transition-all placeholder-stone-400"
                  />
                  {formErrors.email && (
                    <p className="text-red-600 text-[10px] font-semibold mt-1 pl-1">{formErrors.email}</p>
                  )}
                </div>

                {/* Contact Number */}
                <div className="relative">
                  <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, '');
                      if (val.startsWith('0')) val = val.substring(1);
                      val = val.slice(0, 10);
                      setFormData({ ...formData, phone: val });
                    }}
                    maxLength={10}
                    minLength={10}
                    className="w-full pl-10 pr-4 py-3 bg-stone-50 border border-stone-200 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm font-medium outline-none transition-all placeholder-stone-400"
                  />
                  {formErrors.phone && (
                    <p className="text-red-600 text-[10px] font-semibold mt-1 pl-1">{formErrors.phone}</p>
                  )}
                </div>

                {/* Dropdown Project Name */}
                <div className="relative">
                  <select
                    value={formData.project}
                    onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm font-medium text-stone-700 outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="MRCL Unicon Sugarland">MRCL Unicon Sugarland - Bengaluru</option>
                    <option value="MRCL Sylvan Woods">MRCL Sylvan Woods - Bengaluru</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-stone-50 border border-stone-200 focus:border-[#c5a85c] rounded-xl text-xs sm:text-sm font-medium outline-none transition-all placeholder-stone-400 resize-none"
                  />
                </div>



                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full bg-[#2c0307] hover:bg-[#8c1c24] text-white border border-[#c5a85c]/30 rounded-xl py-3.5 font-sans text-xs sm:text-sm font-black tracking-[0.25em] transition-all shadow-md hover:shadow-lg hover:scale-[1.01] cursor-pointer text-center uppercase"
                >
                  {formSubmitted ? 'SUBMITTING...' : 'SUBMIT'}
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* 3. GALLERY GRID SECTION (Exactly 15 beautiful thumbnails at the bottom like screenshot) */}
        <section className="mt-16 border-t border-stone-200 pt-12 space-y-8">
          
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-1.5">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c5a85c]" />
              <h2 className="font-serif text-xl sm:text-2xl font-black text-stone-800 tracking-widest uppercase">
                GALLERY
              </h2>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c5a85c]" />
            </div>
            <div className="flex justify-center mt-1">
              <div className="w-2.5 h-2.5 rotate-45 border border-[#c5a85c] bg-[#faf6f0]" />
            </div>
          </div>

          {/* Interactive Thumbnails Grid matching 15 item render shown in screenshot */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                onClick={() => {
                  setCurrentGalleryIndex(idx);
                  setIsLightboxOpen(true);
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group relative aspect-[16/10] overflow-hidden rounded-xl border border-stone-200 hover:border-[#c5a85c] bg-white shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro zoom indicator on hover */}
                <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#c5a85c] text-stone-950 flex items-center justify-center shadow-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </section>

      </main>

      {/* 4. FOOTER BANNER (Exactly matching screenshot) */}
      <footer className="bg-gradient-to-r from-[#2c0307] via-[#4a0810] to-[#2c0307] text-white py-6 px-4 border-t-2 border-[#c5a85c] text-center mt-12 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3">
          
          <svg className="w-8 h-8 text-[#c5a85c]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
            <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.1)" />
            <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
            <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
          </svg>

          <span className="font-serif text-sm sm:text-base md:text-lg font-black tracking-[0.2em] text-[#c5a85c] uppercase leading-tight">
            MRCL UNICON SUGARLAND – WHERE LUXURY MEETS LIFE
          </span>

        </div>
      </footer>

      {/* 5. PREMIUM LIGHTBOX MODAL */}
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
              onClick={(e) => e.stopPropagation()}
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
                  className="absolute left-3 w-12 h-12 rounded-full bg-stone-950/70 hover:bg-[#8c1c24] border border-white/15 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer z-40 shadow-lg hover:scale-105"
                  title="Previous (Left Arrow)"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Right arrow navigation inside frame */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-3 w-12 h-12 rounded-full bg-stone-950/70 hover:bg-[#8c1c24] border border-white/15 hover:border-[#c5a85c] text-white flex items-center justify-center transition-all cursor-pointer z-40 shadow-lg hover:scale-105"
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
                {/* <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                  {galleryImages[currentGalleryIndex].caption}
                </h3> */}
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
  );
}

// Custom simple icon component for cutlery/utensils (since it is not standard in lucide-react or was excluded)
function Utensils(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
      <path d="M7 2v20" />
      <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
    </svg>
  );
}
