import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Send,
  ChevronUp,
  Building2,
  Check,
} from 'lucide-react';
import Logo from "../assets/images/logo.png"

export default function Footer({ onOpenContact }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setSubscribed(true);
      setEmail('');
    }, 1000);
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Founder Profile', href: '/founder' },
    { name: 'Careers', href: '/careers' },
    { name: 'Our Presence', href: '/our-presence' },
    { name: 'News & Events', href: '/news-events' },
    { name: 'Image Gallery', href: '/gallery' },
    { name: 'Video Gallery', href: '/video-gallery' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const projects = [
    { name: 'Sylvan Woods', href: '/ongoing-projects/sylvan-woods', status: 'Ongoing' },
    { name: 'Unicon Sugarland', href: '/ongoing-projects/unicon-sugarland', status: 'Ongoing' },
    { name: 'Ayanur Enclave', href: '/completed-projects/ayanur-enclave', status: 'Completed' },
    { name: 'Dharithri Greens', href: '/completed-projects/dharithri-greens', status: 'Completed' },
  ];

  return (
    <footer className="relative bg-neutral-950 text-neutral-400 pt-20 pb-8 overflow-hidden border-t border-gold-300/10">
      {/* Background radial overlays */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-red-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/5">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-2 group">
              <img src={Logo} className="w-[70%] h-13" alt="Logo" />
            </Link>

            <p className="text-xs sm:text-sm text-neutral-400 font-light leading-relaxed font-sans">
              Building more than homes, we craft luxury lifestyles. Experience the perfect blend of elegance, comfort, and modern living with our signature plotted developments and premium villa estates.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/MrclInfrastructure/" },
                { icon: <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.2 9.4 7.68 11.07-.1-.94-.2-2.38.04-3.41.22-.93 1.4-5.91 1.4-5.91s-.36-.72-.36-1.78c0-1.66.96-2.91 2.17-2.91 1.02 0 1.51.77 1.51 1.69 0 1.03-.66 2.56-.99 3.99-.28 1.19.6 2.16 1.77 2.16 2.12 0 3.76-2.24 3.76-5.47 0-2.86-2.06-4.86-5-4.86-3.4 0-5.4 2.56-5.4 5.2 0 1.03.4 2.14.89 2.74.1.12.11.23.08.35-.09.37-.29 1.18-.33 1.34-.05.22-.17.27-.4.16-1.5-.7-2.43-2.9-2.43-4.66 0-3.79 2.75-7.27 7.94-7.27 4.16 0 7.4 2.97 7.4 6.94 0 4.14-2.61 7.47-6.24 7.47-1.22 0-2.37-.63-2.76-1.38 0 0-.6 2.3-.75 2.87-.27 1.05-1 2.37-1.49 3.17C8.91 23.88 10.42 24 12 24c6.63 0 12-5.37 12-12S18.63 0 12 0z" /></svg>, href: "https://www.pinterest.com/mrclinfrastructurepvtltd/" },
                { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/mrcl.infrastructure/" },
                { icon: <Linkedin className="w-4 h-4" />, href: "https://www.linkedin.com/company/mrcl-properties/" },
                { icon: <Youtube className="w-4 h-4" />, href: "https://www.youtube.com/@MrclInfrastructure" },
              ].map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-900 hover:bg-gold-500 border border-white/5 hover:border-gold-400 flex items-center justify-center text-neutral-400 hover:text-brand-red-950 transition-all duration-300 shadow-md"
                >
                  {soc.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-gold-400 transition-colors font-sans hover:pl-1 transition-all block text-neutral-400"
                  >
                    • {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Projects */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              OUR PROJECTS
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {projects.map((proj, idx) => (
                <li key={idx}>
                  <Link
                    to={proj.href}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="hover:text-gold-400 transition-colors font-sans hover:pl-1 transition-all block text-neutral-400"
                  >
                    • {proj.name} <span className="text-[9px] text-neutral-500 font-bold tracking-wider uppercase ml-1">({proj.status})</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() =>navigate('/contact')}
                  className="cursor-pointer text-left hover:text-gold-400 font-semibold text-gold-300 transition-colors font-sans block bg-transparent border-0 p-0"
                >
                  • Book Site Visit
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact details */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              CONTACT US
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm font-sans">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="leading-tight text-neutral-400 font-light text-[11px] sm:text-xs">
                  #164, 1st Floor, 5th Main, 7th Cross, Kengeri Satellite Town, Bengaluru - 560060
                </span>
              </li>
              <li className="flex flex-col gap-1.5 pl-6 relative">
                <Phone className="w-4 h-4 text-gold-500 absolute left-0 top-0.5" />
                <a href="tel:+918989399899" className="hover:text-gold-400 transition-colors font-light block text-[11px] sm:text-xs">
                  +91 89893 99899
                </a>
                <a href="tel:+919071415999" className="hover:text-gold-400 transition-colors font-light block text-[11px] sm:text-xs">
                  +91 90714 15999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:info@mrclinfrastructure.com" className="hover:text-gold-400 transition-colors font-light text-[11px] sm:text-xs truncate">
                  info@mrclinfrastructure.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
              NEWSLETTER
            </h4>
            <p className="text-xs text-neutral-400 font-sans leading-relaxed">
              Subscribe to get the latest updates about our projects and offers.
            </p>

            {/* Subscription Form */}
            <AnimatePresence mode="wait">
              {!subscribed ? (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full bg-neutral-900 border border-white/10 rounded-md py-2.5 pl-3 pr-10 text-xs text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-all"
                    />
                    <button
                      type="submit"
                      disabled={subscribing}
                      className="cursor-pointer absolute inset-y-0 right-0 flex items-center justify-center w-10 text-gold-400 hover:text-gold-300"
                      aria-label="Subscribe"
                    >
                      {subscribing ? (
                        <div className="w-4 h-4 border border-gold-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Send className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-2.5 rounded-md text-xs font-sans mt-2"
                >
                  <Check className="w-4 h-4 flex-shrink-0" />
                  <span>Subscribed Successfully</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] sm:text-xs text-neutral-500 font-sans text-center sm:text-left">
            © 2026 MRCL Infrastructure. All Rights Reserved.
          </p>

          {/* Privacy and Policy */}
          <div className="flex items-center gap-6 text-[11px] sm:text-xs text-neutral-500 font-sans">
            <a href="/privacy-policy" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="/terms-conditions" className="hover:text-gold-400 transition-colors">Terms & Conditions</a>
          </div>

          {/* Floating-ish Scroll up action */}
          <button
            onClick={handleScrollToTop}
            className="cursor-pointer p-2 rounded-md border border-neutral-800 hover:border-gold-500 bg-neutral-900 hover:bg-gold-500 text-neutral-500 hover:text-brand-red-950 transition-all duration-300 shadow-lg active:scale-90"
            aria-label="Back to top"
          >
            <ChevronUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
