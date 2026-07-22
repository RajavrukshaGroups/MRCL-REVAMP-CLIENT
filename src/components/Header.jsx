import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, Building2, ChevronDown } from 'lucide-react';
import { Link, useLocation , useNavigate } from 'react-router-dom';
import Logo from "../assets/images/logo.png"

export default function Header({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate()

  const navItems = [
    { name: 'HOME', href: '/' },
    { 
      name: 'ABOUT US', 
      href: '/about',
      subItems: [
        { name: 'COMPANY PROFILE', href: '/about' },
        { name: 'FOUNDER', href: '/founder' },
        { name: 'CAREERS', href: '/careers' },
      ]
    },
    { 
      name: 'PROJECTS', 
      href: '/ongoing-projects',
      subItems: [
        { name: 'COMPLETED PROJECTS', href: '/completed-projects' },
        { name: 'ONGOING PROJECTS', href: '/ongoing-projects' },
        { name: 'UPCOMING PROJECTS', href: '/upcoming-projects' },
      ]
    },
    { 
      name: 'GALLERY', 
      href: '/gallery',
      subItems: [
        { name: 'IMAGE GALLERY', href: '/gallery' },
        { name: 'VIDEO GALLERY', href: '/video-gallery' },
      ]
    },
    { name: 'OUR PRESENCE', href: '/our-presence' },
    { name: 'NEWS EVENTS', href: '/news-events' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getIsActive = (href, subItems) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (subItems) {
      return subItems.some(sub => location.pathname === sub.href);
    }
    return location.pathname === href;
  };

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-[#120002] border-b border-gold-400/20 ${
          isScrolled ? 'py-2.5 shadow-xl bg-opacity-98' : 'py-4 shadow-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center">
            <Link to="/">
             <img src={Logo} alt="Logo" className="w-full h-12 flex-shrink-0" />
            </Link>  
              {/* Vertical thin gold separator line */}
              <div className="hidden lg:block w-[1px] h-9 bg-gradient-to-b from-transparent via-gold-400/35 to-transparent mx-6 flex-shrink-0" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
              {/* Dynamic diagonal background pinned to nav to prevent overlapping */}
              <div 
                className={`absolute left-[-40px] xl:left-[-50px] w-[150vw] -z-10 skew-x-[-25deg] pointer-events-none transition-all duration-300`}
                style={{
                  top: '50%',
                  height: isScrolled ? '70px' : '82px',
                  transform: 'translateY(-50%) skewX(-25deg)',
                  background: 'linear-gradient(to right, #d4b673 0px, #b5802f 3px, #230104 4px, #120002 800px)'
                }}
              />
              {navItems.map((item) => {
                const hasSub = !!item.subItems;
                const isActive = getIsActive(item.href, item.subItems);

                if (hasSub) {
                  const isHovered = hoveredItem === item.name;
                  return (
                    <div
                      key={item.name}
                      className="relative py-3 group cursor-pointer"
                      onMouseEnter={() => setHoveredItem(item.name)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <button
                        className={`text-[11px] font-bold tracking-[0.18em] hover:text-gold-300 transition-colors flex items-center gap-1.5 focus:outline-none ${
                          isActive ? 'text-gold-300' : 'text-gold-100/95'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-3 h-3 text-gold-400/80 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Indicator Line */}
                      {isActive && (
                        <motion.div
                          layoutId="activeNavLine"
                          className="absolute -bottom-[16px] left-0 right-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 shadow-[0_-4px_12px_rgba(242,233,211,0.6)] z-20"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-[#180205] border border-gold-400/30 rounded-lg shadow-2xl p-1 z-50 overflow-hidden backdrop-blur-md"
                          >
                            {item.subItems.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.href}
                                onClick={() => {
                                  setHoveredItem(null);
                                  handleNavClick();
                                }}
                                className={`block py-2.5 px-4 text-[10.5px] font-bold tracking-[0.15em] rounded transition-all duration-200 border-b border-gold-500/5 last:border-b-0 ${
                                  location.pathname === sub.href
                                    ? 'text-gold-300 bg-gold-400/10'
                                    : 'text-gold-100/90 hover:text-gold-300 hover:bg-gold-500/10'
                                }`}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name + item.href}
                    to={item.href}
                    onClick={handleNavClick}
                    className={`text-[11px] font-bold tracking-[0.18em] hover:text-gold-300 transition-colors relative py-1 ${
                      isActive ? 'text-gold-300' : 'text-gold-100/95'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavLine"
                        className="absolute -bottom-[20px] left-0 right-0 h-[3px] bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500 shadow-[0_-4px_12px_rgba(242,233,211,0.6)] z-20"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Contact Action Button */}
            <div className="hidden sm:flex items-center flex-shrink-0">
              <button
                onClick={() => navigate("/contact")}
                className="cursor-pointer flex items-center justify-center px-6 py-2 border border-gold-400/50 hover:border-gold-300 bg-transparent hover:bg-gold-400 hover:text-brand-red-950 rounded text-[11px] font-bold tracking-[0.15em] text-gold-400 transition-all duration-300 shadow-lg active:scale-95"
              >
                <span>CONTACT US</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gold-200 hover:text-gold-400 transition-colors p-2"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Menu drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-brand-red-950 border-l border-gold-400/20 shadow-2xl flex flex-col p-6 z-50 justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-gold-400/10">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-7 h-7 text-gold-400" />
                    <span className="font-serif text-md font-bold tracking-wider text-gold-200">
                      MRCL INFRASTRUCTURE
                    </span>
                  </div>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gold-200 hover:text-gold-400 p-1"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-5 mt-8">
                  {navItems.map((item) => {
                    const hasSub = !!item.subItems;
                    const isActive = getIsActive(item.href, item.subItems);

                     if (hasSub) {
                      const isMobileDropdownOpen = openMobileDropdown === item.name;
                      return (
                        <div key={item.name} className="flex flex-col border-b border-white/5 pb-2">
                          <button
                            onClick={() => setOpenMobileDropdown(isMobileDropdownOpen ? null : item.name)}
                            className={`flex items-center justify-between text-sm font-medium tracking-widest py-2 text-left transition-colors focus:outline-none ${
                              isActive ? 'text-gold-400 font-bold' : 'text-gold-100/70'
                            }`}
                          >
                            <span>{item.name}</span>
                            <ChevronDown className={`w-4 h-4 text-gold-400 transition-transform duration-300 ${isMobileDropdownOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <AnimatePresence>
                            {isMobileDropdownOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden bg-[#120002]/40 rounded-lg pl-4 mt-1 flex flex-col gap-1"
                              >
                                {item.subItems.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    onClick={handleNavClick}
                                    className={`text-xs font-semibold tracking-widest py-2.5 transition-colors border-b border-white/5 last:border-b-0 ${
                                      location.pathname === sub.href
                                        ? 'text-gold-300 font-bold'
                                        : 'text-gold-100/60 hover:text-gold-400'
                                    }`}
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={item.name + item.href}
                        to={item.href}
                        onClick={handleNavClick}
                        className={`text-sm font-medium tracking-widest py-2 border-b border-white/5 transition-colors ${
                          isActive ? 'text-gold-400 pl-2 font-bold' : 'text-gold-100/70 hover:text-gold-300'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  
                  {/* Contact Us Mobile Nav Item */}
                  <Link
                    to="/contact"
                    onClick={handleNavClick}
                    className={`text-sm font-medium tracking-widest py-2 border-b border-white/5 transition-colors ${
                      location.pathname === '/contact' ? 'text-gold-400 pl-2 font-bold' : 'text-gold-100/70 hover:text-gold-300'
                    }`}
                  >
                    CONTACT US
                  </Link>
                </nav>
              </div>

              <div className="pt-6 border-t border-gold-400/10 space-y-4">
                {/* <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenContact();
                  }}
                  className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-gold-500 hover:bg-gold-400 text-brand-red-950 rounded-md font-bold text-xs tracking-widest shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9071415999</span>
                </button> */}
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    window.location.href = "tel:+919071415999";
                  }}
                  className="w-full flex items-center justify-center gap-3 px-5 py-3 bg-gold-500 hover:bg-gold-400 text-brand-red-950 rounded-md font-bold text-xs tracking-widest shadow-lg transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>+91 9071415999</span>
                </button>
                <p className="text-center text-[10px] text-gold-200/50 uppercase tracking-widest">
                  Crafting Luxury. Building Lifestyles.
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
