import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Play, Pause, ChevronRight, Crown, Eye, EyeOff, Navigation, Sparkles } from 'lucide-react';

const CHAPTERS = [
  {
    id: 'home',
    num: 'CH. I',
    name: 'The Genesis',
    poetic: 'A vision born of stone and sky, crafted for those who seek uncompromising perfection.',
    quote: 'Our descent into absolute architectural majesty begins here.',
  },
  {
    id: 'features',
    num: 'CH. II',
    name: 'The Foundation',
    poetic: 'Forged in raw structural honesty and refined with quiet, bespoke elegance.',
    quote: 'Quality is never an afterthought; it is our foundation block.',
  },
  {
    id: 'about',
    num: 'CH. III',
    name: 'The Philosophy',
    poetic: 'Carving a legacy of premium craftsmanship into the elite soil of South Bangalore.',
    quote: 'We build not just for the transient present, but for generations to come.',
  },
  {
    id: 'projects',
    num: 'CH. IV',
    name: 'The Masterpieces',
    poetic: 'Behold our 4 BHK architectural landmarks, where space and symmetry align.',
    quote: 'Every brick carries the weight of a meticulously executed masterpiece.',
  },
  {
    id: 'amenities',
    num: 'CH. V',
    name: 'The Sanctuary',
    poetic: 'Step into a secured garden sanctuary with private decks and open pool waters.',
    quote: 'Your home remains a secure, serene escape from the rushing world.',
  },
  {
    id: 'gallery-preview',
    num: 'CH. VI',
    name: 'The Canvas',
    poetic: 'A beautiful visual reflection of modern cubic geometry and high-end design lines.',
    quote: 'True luxury whispers. Witness the timeless grandeur in every angle.',
  },
  {
    id: 'why-choose-us',
    num: 'CH. VII',
    name: 'The Pillars',
    poetic: 'Pristine professional credibility, backed by over 500 happy elite families.',
    quote: 'Trust is the only concrete that hardens permanently under pressure.',
  },
  {
    id: 'testimonials',
    num: 'CH. VIII',
    name: 'The Voices',
    poetic: 'Genuine builder fidelity, voiced by South Bangalore\'s most affluent residents.',
    quote: 'Hear the authentic stories from the founders of our community.',
  },
  {
    id: 'blog-preview',
    num: 'CH. IX',
    name: 'The Journal',
    poetic: 'Editorial perspectives on bioclimatic trends and market-leading villa metrics.',
    quote: 'Insights curated by our experts, dedicated to informed property acquisition.',
  },
  {
    id: 'cta',
    num: 'CH. X',
    name: 'The Invitation',
    poetic: 'The key to your sovereign legacy in South Bangalore is prepared. Your move.',
    quote: 'A sanctuary of your own making waits. Book your private estate walkthrough.',
  }
];

export default function Storyteller() {
  const [activeChapter, setActiveChapter] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollRef = useRef(null);

  // Intersection Observer to detect current active section/chapter
  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate overall scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // 2. Find which section occupies the viewport center
      const viewportCenter = window.scrollY + window.innerHeight * 0.4;
      
      let currentIdx = 0;
      for (let i = 0; i < CHAPTERS.length; i++) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (viewportCenter >= top && viewportCenter <= top + height) {
            currentIdx = i;
            break;
          } else if (viewportCenter < top && i === 0) {
            currentIdx = 0;
          } else if (viewportCenter > top + height && i === CHAPTERS.length - 1) {
            currentIdx = CHAPTERS.length - 1;
          }
        }
      }
      setActiveChapter(currentIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial calculation
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle smooth scroll navigation to chapter
  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      // Cancel active auto scroll if user manual navigates
      if (isAutoScrolling) setIsAutoScrolling(false);
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Auto scroll effect
  useEffect(() => {
    if (isAutoScrolling) {
      const scrollSpeed = 1; // Pixels per interval step
      const intervalMs = 20;  // Frame interval

      autoScrollRef.current = setInterval(() => {
        const currentScroll = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

        if (currentScroll >= maxScroll - 2) {
          // Reached end of story
          setIsAutoScrolling(false);
          clearInterval(autoScrollRef.current);
        } else {
          window.scrollBy(0, scrollSpeed);
        }
      }, intervalMs);
    } else {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling]);

  const current = CHAPTERS[activeChapter];

  return (
    <>
      {/* 1. Desktop Vertical Narrative Timeline (Fixed on left of screen) */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-4 bg-brand-red-950/30 border border-gold-400/10 py-6 px-3 rounded-full backdrop-blur-sm shadow-xl shadow-brand-red-950/25">
        {/* Progress rail */}
        <div className="relative w-[4px] h-64 bg-brand-red-900/40 rounded-full overflow-hidden flex items-start">
          {/* Scroll active indicator trail */}
          <div 
            className="w-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600 transition-all duration-100 rounded-full shadow-[0_0_8px_rgba(212,182,115,0.8)]"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Chapters Dots list */}
        <div className="flex flex-col items-center gap-3">
          {CHAPTERS.map((ch, idx) => {
            const isActive = idx === activeChapter;
            return (
              <div key={ch.id} className="relative group flex items-center justify-center">
                <button
                  onClick={() => scrollToChapter(ch.id)}
                  className={`cursor-pointer transition-all duration-300 rounded-full relative z-10 ${
                    isActive 
                      ? 'w-3.5 h-3.5 bg-gold-400 ring-4 ring-brand-red-500/60 shadow-[0_0_12px_rgba(181,128,29,1)]' 
                      : 'w-2 h-2 bg-brand-red-800/80 hover:bg-gold-300 border border-gold-400/30 group-hover:scale-125'
                  }`}
                  aria-label={`Go to ${ch.name}`}
                />
                
                {/* Floating Chapter details on hover */}
                <div className="absolute left-7 bg-brand-red-950 border border-gold-400/20 px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-xl flex flex-col w-44 text-left">
                  <span className="text-[9px] font-mono tracking-widest text-gold-400 uppercase font-bold">{ch.num}</span>
                  <span className="text-[11px] font-serif font-semibold text-white tracking-wide">{ch.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 2. Floating Frosted "Narrator's Journal" (Positioned at bottom right) */}
      <AnimatePresence>
        {!isMinimized ? (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-40 w-[360px] max-w-[90vw] bg-gradient-to-br from-brand-red-950 via-[#250204] to-brand-red-900 border border-gold-400/40 rounded-2xl p-5 sm:p-6 shadow-[0_25px_60px_rgba(37,2,4,0.6)] backdrop-blur-md overflow-hidden"
          >
            {/* Soft inner glow gradient */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gold-400/20 blur-[40px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-red-500/20 blur-[40px] pointer-events-none rounded-full" />

            {/* Header / Meta Bar */}
            <div className="flex items-center justify-between border-b border-gold-400/10 pb-3 mb-3">
              <div className="flex items-center gap-2 text-left">
                <BookOpen className="w-4 h-4 text-gold-300 animate-pulse" />
                <span className="font-serif text-[10px] font-bold tracking-[0.2em] text-gold-300 uppercase">
                  THE NARRATIVE JOURNEY
                </span>
              </div>

              <div className="flex items-center gap-2">
                {/* Close/Minimize button */}
                <button
                  onClick={() => setIsMinimized(true)}
                  className="cursor-pointer p-1.5 rounded-full bg-brand-red-900/60 border border-gold-400/10 hover:border-gold-400/40 text-gold-400 hover:text-gold-200 transition-colors"
                  title="Hide Narration"
                >
                  <EyeOff className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Chapter details & Poetic Storyline */}
            <div className="space-y-3.5 text-left min-h-[105px]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-gold-300 font-bold bg-brand-red-950 border border-gold-400/30 px-2 py-0.5 rounded-md shadow-inner">
                  {current.num}
                </span>
                <h4 className="font-serif text-[11px] font-extrabold text-gold-200 tracking-widest uppercase">
                  {current.name}
                </h4>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChapter}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-2"
                >
                  <p className="font-serif text-sm text-white font-medium leading-relaxed italic border-l-2 border-gold-400/50 pl-3">
                    "{current.quote}"
                  </p>
                  <p className="font-sans text-[11px] text-gold-100/70 leading-relaxed font-light tracking-wide">
                    {current.poetic}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls Panel */}
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-gold-400/15">
              
              {/* Cinematic Guided Auto Scroll Tour */}
              <button
                onClick={() => setIsAutoScrolling(!isAutoScrolling)}
                className={`cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[10px] font-bold tracking-widest transition-all duration-300 ${
                  isAutoScrolling
                    ? 'bg-gradient-to-r from-gold-300 to-gold-500 text-brand-red-950 border-gold-400 shadow-[0_0_12px_rgba(181,128,47,0.4)] font-extrabold'
                    : 'bg-brand-red-950/80 text-gold-300 border-gold-400/30 hover:border-gold-400/60 hover:bg-brand-red-900/40'
                }`}
              >
                {isAutoScrolling ? (
                  <>
                    <Pause className="w-3 h-3 fill-current" />
                    <span>PAUSE AUTO-WALK</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3 h-3 fill-current animate-pulse text-gold-400" />
                    <span>HANDS-FREE TOUR</span>
                  </>
                )}
              </button>

              {/* Progress indicator */}
              <div className="flex items-center gap-2">
                <div className="text-right">
                  <span className="text-[8px] text-gold-400/60 block font-mono">SCROLL PROGRESS</span>
                  <span className="text-[10px] text-gold-300 font-mono font-bold">{Math.round(scrollProgress)}%</span>
                </div>
                {/* Small circular track */}
                <div className="w-6 h-6 relative flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="rgba(136, 26, 30, 0.4)"
                      strokeWidth="2"
                      fill="transparent"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="9"
                      stroke="#c5a85c"
                      strokeWidth="2"
                      fill="transparent"
                      strokeDasharray={2 * Math.PI * 9}
                      strokeDashoffset={2 * Math.PI * 9 * (1 - scrollProgress / 100)}
                    />
                  </svg>
                </div>
              </div>

            </div>

          </motion.div>
        ) : (
          /* Small minimized float activator badge */
          <motion.button
            key="minimized-badge"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            onClick={() => setIsMinimized(false)}
            className="cursor-pointer fixed bottom-6 right-6 z-40 bg-gradient-to-br from-brand-red-900 to-brand-red-950 border-2 border-gold-400 p-3.5 rounded-full text-gold-300 hover:text-gold-100 shadow-[0_10px_35px_rgba(136,26,30,0.45)] hover:scale-105 active:scale-95 transition-all group"
            title="Restore Storyteller Journal"
          >
            <Crown className="w-5 h-5 animate-spin" style={{ animationDuration: '10s' }} />
            <span className="absolute right-12 top-1/2 -translate-y-1/2 bg-brand-red-950 border border-gold-400/20 px-2.5 py-1 text-[9px] font-bold text-gold-300 rounded-md tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
              RESTORE STORY JOURNAL
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
