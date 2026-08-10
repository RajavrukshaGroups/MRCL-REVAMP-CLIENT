import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Crown, Play, ArrowRight } from 'lucide-react';
import SugarlandImg from "../../assets/sugarland-unicorn/12.jpg"
import SylvanImg from "../../assets/sylvan-woods/banner2.webp"
import SugarlandImg2 from "../../assets/sugarland-unicorn/14.jpg"
import DharitriArchImg from "../../assets/images/dharithri_greens_entrance_1784204684620.jpg"

const carouselSlides = [
  {
    id: 1,
    numberStr: '01',
    subtitle: 'PREMIUM TOWNSHIP CONCEPT',
    titlePart1: 'UNICON SUGARLAND.',
    titlePart2: 'UNMATCHED GRANDEUR.',
    description: 'A magnificent master-planned urban premium gated township featuring spectacular architectural design and curated elite lifestyles.',
    //image: '/src/assets/images/unicon_sugarland_1784530533374.jpg',
    image: SugarlandImg,
    accentColor: '#dfb776'
  },
  {
    id: 2,
    numberStr: '02',
    subtitle: 'ONGOING MASTERWORKS',
    titlePart1: 'SYLVAN WOODS.',
    titlePart2: 'ECO-LUXURY LIVING.',
    description: 'A breathtaking forest-facing residential sanctuary where deep majestic evergreens meet state-of-the-art bespoke villa construction.',
    //image: '/src/assets/images/sylvan_woods_1784530512722.jpg',
    image: SylvanImg,
    accentColor: '#cfa86b'
  },
  
  {
    id: 3,
    numberStr: '03',
    subtitle: 'COMPLETED CLASSICS',
    titlePart1: 'TIMELESS ENCLAVES.',
    titlePart2: 'DHARITHRI GREENS.',
    description: 'Experience pure architectural sincerity ready to move-in at Ayanur Enclave and Dharithri Greens—meticulously crafted to stand for generations.',
    //image: '/src/assets/images/ayanur_enclave_1784530552100.jpg',
    image: DharitriArchImg,
    accentColor: '#9e753b'
  }
];

export default function HeroSection({
  onExploreProjects,
  onDiscoverMore,
  onWatchVideo
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide carousel every 7 seconds unless interacted
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentAccent = carouselSlides[activeSlide].accentColor;

  // Custom luxury metallic text gradients for each slide
  const getAccentGradient = (color) => {
    if (color === '#cfa86b') {
      return 'linear-gradient(135deg, #f5ecd7 0%, #dfb776 30%, #cfa86b 70%, #9e753b 100%)';
    } else if (color === '#dfb776') {
      return 'linear-gradient(135deg, #fff7ed 0%, #fcd34d 30%, #dfb776 70%, #b45309 100%)';
    } else {
      return 'linear-gradient(135deg, #f3dcb3 0%, #d5a35c 30%, #9e753b 70%, #634316 100%)';
    }
  };

  // Custom primary action button gradients matching each theme
  const getButtonGradient = (color) => {
    if (color === '#cfa86b') {
      return 'linear-gradient(to right, #dfb776, #cfa86b)';
    } else if (color === '#dfb776') {
      return 'linear-gradient(to right, #fcd34d, #dfb776)';
    } else {
      return 'linear-gradient(to right, #d5a35c, #9e753b)';
    }
  };

  return (
    <main 
      id="hero-core-container" 
      className="flex-1 w-full pt-32 pb-6 relative z-10 flex flex-col justify-center overflow-hidden bg-burgundy-glow"
      style={{
        '--accent': currentAccent,
        '--accent-80': `${currentAccent}cc`,
        '--accent-50': `${currentAccent}80`,
        '--accent-40': `${currentAccent}66`,
        '--accent-20': `${currentAccent}33`,
        '--accent-10': `${currentAccent}1a`,
      }}
    >
      {/* Dynamic luxury background glow that updates as slides transition */}
      <div 
        className="absolute top-[10%] left-[-10%] w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] rounded-full blur-[120px] sm:blur-[160px] opacity-[0.12] pointer-events-none transition-all duration-[1200ms] ease-in-out z-0"
        style={{
          background: `radial-gradient(circle, ${currentAccent} 0%, transparent 70%)`
        }}
      />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Hero Text Block (Col-span 5) */}
        <div id="hero-text-block" className="lg:col-span-5 space-y-6 sm:space-y-8 relative ml-4">
          
          {/* Slide Indicator Bar & Bullet system on Left margin */}
          <div className="absolute left-[-24px] sm:left-[-40px] top-[15%] h-[70%] hidden md:flex flex-col items-center justify-between">
            <div className="text-[10px] font-mono font-bold tracking-widest text-stone-500">MRCL</div>
            <div className="flex flex-col items-center space-y-4 my-4">
              {carouselSlides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => setActiveSlide(index)}
                  className="group flex flex-col items-center focus:outline-none cursor-pointer"
                >
                  <span 
                    className="text-[10px] font-mono font-bold tracking-widest transition-colors duration-300"
                    style={{
                      color: activeSlide === index ? 'var(--accent)' : '#78716c'
                    }}
                  >
                    {slide.numberStr}
                  </span>
                  <div 
                    className="w-[2px] transition-all duration-300"
                    style={{
                      height: activeSlide === index ? '40px' : '32px',
                      backgroundColor: activeSlide === index ? 'var(--accent)' : '#292524',
                      marginTop: '6px',
                      marginBottom: '6px'
                    }}
                  />
                </button>
              ))}
            </div>
            <div className="text-[10px] font-mono font-bold text-stone-500">2026</div>
          </div>

          {/* Slide Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="space-y-4 sm:space-y-5"
            >
              {/* Crown badge */}
              <div className="flex items-center space-x-2 text-[var(--accent)]">
                <Crown 
                  className="w-5 h-5"
                  style={{ filter: `drop-shadow(0 0 8px ${currentAccent}80)` }}
                />
                <span className="text-[10px] sm:text-xs font-sans tracking-[0.25em] font-bold uppercase text-[var(--accent)]">
                  {carouselSlides[activeSlide].subtitle}
                </span>
              </div>

              {/* Main Heading (Luxury Serif paired with golden gradient) */}
              <h1 className="text-4xl sm:text-5xl xl:text-[3.5rem] font-serif leading-[1.12] tracking-normal">
                <span 
                  className="block font-semibold transition-all duration-500"
                  style={{ 
                    background: getAccentGradient(currentAccent),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    textShadow: '0 1px 2px rgba(0,0,0,0.4)'
                  }}
                >
                  {carouselSlides[activeSlide].titlePart1}
                </span>
                <span className="text-white block mt-1 font-medium tracking-tight">
                  {carouselSlides[activeSlide].titlePart2}
                </span>
              </h1>

              {/* Golden horizontal ornament accent line */}
              <div className="flex items-center space-x-3 py-1">
                <div 
                  className="h-[1px] w-12 bg-gradient-to-r" 
                  style={{ backgroundImage: `linear-gradient(to right, ${currentAccent}, transparent)` }}
                />
                <div 
                  className="w-1.5 h-1.5 rounded-full" 
                  style={{ backgroundColor: currentAccent }}
                />
                <div 
                  className="h-[1px] w-12 bg-gradient-to-l" 
                  style={{ backgroundImage: `linear-gradient(to left, ${currentAccent}, transparent)` }}
                />
              </div>

              {/* Subtitle / Description */}
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-sans max-w-lg">
                {carouselSlides[activeSlide].description}
              </p>

              {/* Interactive Action Buttons */}
              {/* <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onExploreProjects}
                  className="px-6 py-3.5 rounded-lg text-stone-950 text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2.5 group cursor-pointer"
                  style={{
                    backgroundImage: getButtonGradient(currentAccent),
                    boxShadow: `0 4px 20px ${currentAccent}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 30px ${currentAccent}80`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 20px ${currentAccent}40`;
                  }}
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={onDiscoverMore}
                  className="px-6 py-3.5 rounded-lg bg-transparent text-xs font-sans font-bold tracking-widest uppercase transition-all duration-300 flex items-center space-x-2 group cursor-pointer"
                  style={{
                    border: `1px solid ${currentAccent}80`,
                    color: currentAccent
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = currentAccent;
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.backgroundColor = `${currentAccent}1a`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${currentAccent}80`;
                    e.currentTarget.style.color = currentAccent;
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <span>DISCOVER MORE</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div> */}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Right Hero Image Frame (Col-span 7) */}
        <div id="hero-image-frame" className="lg:col-span-7 relative h-[380px] sm:h-[480px] lg:h-[520px] xl:h-[560px] flex items-center justify-end">
          
          {/* The sweeping curved decorative outline border behind image */}
          <div 
            className="absolute inset-0 right-[-5%] w-[105%] h-full rounded-l-[200px] sm:rounded-l-[300px] lg:rounded-l-[380px] xl:rounded-l-[440px] border-l-4 border-t-2 border-b-2 pointer-events-none z-10 transition-colors duration-500" 
            style={{
              borderColor: `${currentAccent}66`,
              boxShadow: `0 0 50px ${currentAccent}22`
            }}
          />
          
          {/* Golden glowing arc light */}
          <div 
            className="absolute top-[5%] left-[2%] w-[2px] h-[90%] z-15 blur-[1px] transition-all duration-500" 
            style={{
              backgroundImage: `linear-gradient(to bottom, transparent, ${currentAccent}99, transparent)`
            }}
          />

          {/* Inner frame containing image carousel with luxury crossfade and zoom */}
          <div className="relative w-[95%] lg:w-[100%] h-full overflow-hidden rounded-l-[180px] sm:rounded-l-[280px] lg:rounded-l-[360px] xl:rounded-l-[420px] bg-[#120204] z-0 shadow-2xl">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
                className="w-full h-full relative"
              >
                <img
                  src={carouselSlides[activeSlide].image}
                  alt="MRCL Premium Luxury Real Estate Landmark"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none"
                />
                {/* Dark warm vignette shadows */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#120204]/80 via-[#120204]/10 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120204] via-transparent to-transparent opacity-80 z-10" />
              </motion.div>
            </AnimatePresence>

            
          </div>

        </div>

      </div>
      </div>

    </main>
  );
}
