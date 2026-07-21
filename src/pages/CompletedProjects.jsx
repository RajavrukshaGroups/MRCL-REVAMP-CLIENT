import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { 
  MapPin, Check, X, Shield, Layout, Sparkles, Compass, 
  Download, FileText, Send, Calendar, ArrowRight, Eye, Phone, Mail
} from 'lucide-react';
import { ASSETS } from '../data';

export default function CompletedProjects() {
  const context = useOutletContext();
  const onOpenContact = context?.onOpenContact || (() => {});
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState(null);

  const completedProjectsList = [
    {
      id: 'cp-1',
      name: 'MRCL Ayanur Enclave - Phase 1',
      location: 'SHIVAMOGGA',
      image: ASSETS.ayanurEnclave,
      tag: 'COMPLETED',
      highlights: [
        { label: 'Prime Location', icon: MapPin },
        { label: 'Well Planned Layout', icon: Layout },
        { label: 'Secure Community', icon: Shield },
        { label: 'Modern Amenities', icon: Sparkles }
      ],
      details: {
        totalArea: '18 Acres',
        totalPlots: '240 Plots',
        dimension: '30x40, 40x60 Sq.Ft.',
        approvals: 'SMUDA Approved & RERA Registered',
        features: [
          '40ft & 30ft Wide Asphalt Roads',
          'Underground Electricity & Cabling',
          'Overhead Water Tank with Connection to Every Plot',
          'Rainwater Harvesting & Stormwater Drains',
          '24/7 Gated Security with CCTV Surveillance',
          'Lush Green Parks & Children\'s Play Area',
          'Clubhouse with Indoor Games & Party Hall'
        ],
        description: 'MRCL Ayanur Enclave - Phase 1 stands as a landmark plotted development in Shivamogga. Crafted with meticulous engineering and premium infrastructure, this fully completed estate offers premium residential plots of multiple configurations in a lush, highly secure neighborhood, making it the perfect foundation for your dream home or a lucrative long-term investment.'
      }
    },
    {
      id: 'cp-2',
      name: 'MRCL Dharithri Greens',
      location: 'RAMOHALLI, BENGALURU',
      image: ASSETS.dharithriGreens,
      tag: 'COMPLETED',
      highlights: [
        { label: 'Prime Location', icon: MapPin },
        { label: 'Well Planned Layout', icon: Layout },
        { label: 'Secure Community', icon: Shield },
        { label: 'Modern Amenities', icon: Sparkles }
      ],
      details: {
        totalArea: '12 Acres',
        totalPlots: '165 Plots',
        dimension: '30x40, 30x50, 40x60 Sq.Ft.',
        approvals: 'BDA NOC & RERA Registered',
        features: [
          'Exquisite Concrete Grand Entrance Archway',
          'Grand tree-lined concrete internal avenues',
          'Sewage Treatment Plant (STP) & Underground Drains',
          'Dedicated children\'s playground & sitout zones',
          'Compound Wall with 24/7 Guarded Manned Entry',
          'LED Street Lighting & Landscaped Parks',
          'Jogging Track & Multipurpose Sports Court'
        ],
        description: 'MRCL Dharithri Greens is a premium completed plotted development located in Ramohalli, near Kengeri, Bengaluru. Featuring absolute state-of-the-art infrastructure, a grand gated entrance, and fully demarcated luxury villa plots, the community offers residents a serene sanctuary away from city hustle while retaining elite seamless connectivity to Nice Road and Metro lines.'
      }
    }
  ];

  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 overflow-x-hidden">
      
      {/* 1. HERO HEADER BANNER (Exactly matching the screenshot aesthetic) */}
      <section className="relative w-full h-[360px] sm:h-[400px] lg:h-[440px] flex items-center justify-center bg-gradient-to-r from-[#4a0105] via-[#2c0104] to-[#120002] overflow-hidden border-b border-[#c5a85c]/30">
        
        {/* Silhouette overlay of city architecture */}
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-[0.14] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url(${ASSETS.lobbyInterior})` }} />

        {/* Elegant gold geometric designs / decorative shapes on the right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-80 h-full hidden md:flex flex-col items-end justify-center pointer-events-none select-none z-10 space-y-6">
          {/* Dot Matrix (6 dots) */}
          <div className="grid grid-cols-3 gap-2 opacity-30 mr-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#c5a85c]" />
            ))}
          </div>
          {/* Gold circular visual overlays */}
          <div className="relative flex items-center gap-4">
            {/* Outline Circle */}
            <div className="w-12 h-12 rounded-full border border-[#c5a85c] opacity-40" />
            {/* Solid Gold Circle */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#d4b673] to-[#b5802f] shadow-lg opacity-80" />
          </div>
        </div>

        {/* Gold curved visual ribbon overlays */}
        <div className="absolute left-0 top-0 w-[35%] h-full opacity-30 pointer-events-none scale-x-[-1] z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#completedGoldGrad)" strokeWidth="2" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#completedGoldGrad)" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
        <div className="absolute right-0 top-0 w-[35%] h-full opacity-35 pointer-events-none z-10">
          <svg className="w-full h-full" viewBox="0 0 300 400" fill="none" preserveAspectRatio="none">
            <path d="M300,400 C200,380 120,300 80,200 C50,140 60,80 80,0" stroke="url(#completedGoldGrad)" strokeWidth="2" />
            <path d="M300,380 C220,360 150,280 110,180 C85,120 90,70 110,0" stroke="url(#completedGoldGrad)" strokeWidth="1" strokeDasharray="4 4" />
            <defs>
              <linearGradient id="completedGoldGrad" x1="1" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#c5a85c" />
                <stop offset="100%" stopColor="#b5802f" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 flex flex-col items-center">
          
          {/* Small Top Logo Branding */}
          <div className="flex flex-col items-center gap-0.5 mb-6 opacity-90 scale-95 sm:scale-100">
            <svg className="w-12 h-12 text-[#c5a85c] filter drop-shadow-md" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20,80 V45 L35,35 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <path d="M35,80 V25 L55,15 L75,25 V80" stroke="#c5a85c" strokeWidth="2.5" strokeLinejoin="round" fill="rgba(197,168,92,0.15)" />
              <path d="M75,80 V50 L85,45 V80" stroke="#c5a85c" strokeWidth="2" strokeLinejoin="round" />
              <line x1="10" y1="80" x2="90" y2="80" stroke="#c5a85c" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <span className="font-serif text-white text-sm font-bold tracking-[0.25em] leading-none uppercase mt-1">MRCL</span>
            <span className="font-sans text-[6.5px] tracking-[0.3em] text-[#c5a85c] font-black uppercase">INFRASTRUCTURE</span>
          </div>

          {/* Heading in grand serif gold */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#d4b673] to-[#b5802f] tracking-[0.05em] uppercase drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] text-center leading-tight mb-3"
          >
            COMPLETED PROJECTS
          </motion.h1>

          {/* Ornate swirly/filigree custom SVG divider */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-48 sm:w-64 h-6 text-[#c5a85c] flex items-center justify-center opacity-85 my-1"
          >
            <svg className="w-full h-full" viewBox="0 0 200 24" fill="none" stroke="currentColor">
              <path d="M 10,12 L 80,12 Q 90,2 100,12 T 110,12 L 190,12" strokeWidth="1" strokeLinecap="round" />
              <circle cx="100" cy="12" r="3" fill="currentColor" />
              <path d="M 85,12 Q 100,22 115,12" strokeWidth="0.75" />
            </svg>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-serif text-stone-200 text-sm sm:text-base md:text-lg font-light tracking-wider mt-2"
          >
            Built with Vision. Delivered with Pride.
          </motion.p>
        </div>
      </section>

      {/* 2. MAIN COMPLETED PROJECTS GRID */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative bg-[#FAF6F0]">
        
        {/* Soft background watermark design */}
        <div className="absolute inset-0 bg-[radial-gradient(#c5a85c_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.02] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-stretch">
            {completedProjectsList.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative bg-[#250205] border-[3px] border-[#c5a85c]/90 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col justify-between group transition-all duration-500 hover:shadow-shadow-xl hover:border-[#c5a85c]"
              >
                
                {/* Image Section on Top */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden p-3.5 bg-[#FAF6F0]">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-[#c5a85c]/35 relative group/img bg-stone-100">
                    
                    {/* Diagonal ribbon on the top-left */}
                    <div className="absolute top-0 left-0 w-32 h-32 overflow-hidden pointer-events-none z-10">
                      <div className="absolute top-5 -left-9 w-40 bg-gradient-to-r from-[#900] via-[#c00] to-[#900] text-white text-[9px] font-black font-sans tracking-widest text-center py-1.5 -rotate-45 shadow-md border-b border-[#c5a85c]/40 uppercase">
                        {project.tag}
                      </div>
                    </div>

                    <img 
                      src={project.image} 
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent pointer-events-none" />
                  </div>
                </div>

                {/* Dark Burgundy Lower Section */}
                <div className="relative flex-grow p-6 sm:p-8 flex flex-col justify-between text-center bg-gradient-to-b from-[#2e0307] to-[#120002] border-t border-[#c5a85c]/30">
                  
                  {/* Subtle Corner Filigree Accents (High craft touch) */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#c5a85c]/35 pointer-events-none" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#c5a85c]/35 pointer-events-none" />
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#c5a85c]/35 pointer-events-none" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#c5a85c]/35 pointer-events-none" />

                  <div className="space-y-4">
                    {/* Project Name */}
                    <h2 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#c5a85c] tracking-wide uppercase leading-tight drop-shadow">
                      {project.name}
                    </h2>

                    {/* Location with decorative diamond and horizontal bars */}
                    <div className="flex items-center justify-center gap-3 w-full">
                      <div className="h-[1px] flex-grow max-w-[60px] bg-gradient-to-r from-transparent to-[#c5a85c]/60" />
                      <span className="font-sans text-[11px] sm:text-xs font-black tracking-[0.3em] text-[#faf6f0]/80 uppercase">
                        {project.location}
                      </span>
                      <div className="h-[1px] flex-grow max-w-[60px] bg-gradient-to-l from-transparent to-[#c5a85c]/60" />
                    </div>

                    {/* Micro-diamond ornament underneath */}
                    <div className="w-1.5 h-1.5 rotate-45 border border-[#c5a85c]/60 bg-transparent mx-auto opacity-70" />

                    {/* Highlights Grid with custom icons and thin gold vertical dividers */}
                    <div className="grid grid-cols-4 gap-1 py-4 sm:py-6 items-center border-t border-b border-[#c5a85c]/15">
                      {project.highlights.map((hl, hIdx) => {
                        const Icon = hl.icon;
                        return (
                          <div key={hIdx} className="relative flex flex-col items-center justify-center text-center px-1">
                            {/* Vertical divider on all columns except first */}
                            {hIdx > 0 && (
                              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-9 bg-gradient-to-b from-transparent via-[#c5a85c]/30 to-transparent" />
                            )}
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-[#FAF6F0]/5 border border-[#c5a85c]/25 mb-1.5 group-hover:bg-[#FAF6F0]/10 transition-colors">
                              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#c5a85c]" />
                            </div>
                            <span className="font-sans text-[8px] sm:text-[10px] leading-tight text-[#faf6f0]/80 font-medium select-none">
                              {hl.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Button Wrapper */}
                  <div className="mt-8">
                    <button
                      onClick={() => {
                        if (project.id === 'cp-1') {
                          navigate('/completed-projects/ayanur-enclave');
                        } else if (project.id === 'cp-2') {
                          navigate('/completed-projects/dharithri-greens');
                        } else {
                          setSelectedProject(project);
                        }
                      }}
                      className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#b5802f] hover:from-[#f2e9d3] hover:to-[#d4b673] text-black text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 shadow-xl active:scale-95 border border-[#c5a85c] group/btn hover:scale-103"
                    >
                      <span>VIEW PROJECT</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </button>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. INTRIGUING DETAILS MODAL DIALOG DRAWER */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto">
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#000]/85 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="relative w-full max-w-4xl bg-[#FAF6F0] rounded-3xl overflow-hidden shadow-3xl border-[3px] border-[#c5a85c] z-10 max-h-[90vh] flex flex-col"
            >
              
              {/* Header inside the Modal */}
              <div className="relative bg-[#250205] text-[#faf6f0] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#c5a85c]">
                
                {/* Corner details */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#c5a85c]/40" />
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#c5a85c]/40" />

                <div>
                  <span className="font-sans text-[9px] font-black tracking-[0.2em] text-[#c5a85c] uppercase">
                    COMPLETED DEVELOPMENT PORTFOLIO
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-[#FAF6F0] leading-tight uppercase mt-1">
                    {selectedProject.name}
                  </h3>
                  <div className="flex items-center gap-1.5 mt-1 text-stone-300">
                    <MapPin className="w-3.5 h-3.5 text-[#c5a85c]" />
                    <span className="text-xs tracking-wider uppercase font-sans font-bold">{selectedProject.location}</span>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute sm:relative top-4 right-4 sm:top-0 sm:right-0 cursor-pointer p-2 rounded-full bg-[#FAF6F0]/10 hover:bg-[#8c1c24] text-[#faf6f0] border border-[#c5a85c]/20 hover:border-[#c5a85c] transition-all"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable details container */}
              <div className="overflow-y-auto p-6 sm:p-8 space-y-8 flex-grow">
                
                {/* Top split columns layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Left: Beautiful image stage & quick stats */}
                  <div className="space-y-6">
                    <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-[#c5a85c]/40 shadow-lg bg-stone-100">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Stats table card */}
                    <div className="bg-[#250205] text-[#faf6f0] p-5 rounded-2xl border border-[#c5a85c]/35 shadow-md relative">
                      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#c5a85c]/30" />
                      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#c5a85c]/30" />

                      <h4 className="font-serif text-sm font-bold text-[#c5a85c] tracking-wider border-b border-white/10 pb-2 mb-3 text-center uppercase">
                        DEVELOPMENT SPECIFICATIONS
                      </h4>
                      <div className="space-y-2.5 font-sans text-xs sm:text-sm">
                        <div className="flex justify-between pb-1.5 border-b border-white/5">
                          <span className="text-stone-400">Total Land Extent</span>
                          <span className="font-semibold text-[#faf6f0]">{selectedProject.details.totalArea}</span>
                        </div>
                        <div className="flex justify-between pb-1.5 border-b border-white/5">
                          <span className="text-stone-400">No. of Villa Plots</span>
                          <span className="font-semibold text-[#faf6f0]">{selectedProject.details.totalPlots}</span>
                        </div>
                        <div className="flex justify-between pb-1.5 border-b border-white/5">
                          <span className="text-stone-400">Standard Sizes</span>
                          <span className="font-semibold text-[#faf6f0]">{selectedProject.details.dimension}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-stone-400">Statutory Approvals</span>
                          <span className="font-semibold text-[#c5a85c] text-right max-w-[180px]">{selectedProject.details.approvals}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Rich textual description & amenities features list */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-serif text-lg font-bold text-[#1a0002] tracking-wide border-b border-stone-300 pb-1.5 uppercase">
                        PROJECT PROFILE
                      </h4>
                      <p className="font-sans text-sm text-[#250205]/85 leading-relaxed">
                        {selectedProject.details.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-serif text-lg font-bold text-[#1a0002] tracking-wide border-b border-stone-300 pb-1.5 uppercase">
                        COMPLETED PREMIUM INFRASTRUCTURE
                      </h4>
                      <ul className="space-y-2.5">
                        {selectedProject.details.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#250205]">
                            <div className="w-5 h-5 rounded-full flex items-center justify-center bg-[#8c1c24]/10 border border-[#8c1c24]/20 text-[#8c1c24] flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3" />
                            </div>
                            <span className="font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* Inquiry CTA row */}
                <div className="bg-[#2e0307] text-[#faf6f0] rounded-2xl p-6 border-2 border-[#c5a85c] flex flex-col md:flex-row items-center justify-between gap-6 relative shadow-lg">
                  <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#c5a85c]/45" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#c5a85c]/45" />

                  <div className="text-center md:text-left space-y-1">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-[#c5a85c]">
                      WANT TO EXPLORE RESALE OPPORTUNITIES?
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-stone-300 font-light max-w-xl leading-relaxed">
                      Reach out directly to our dedicated customer support team to get real-time availability of plots, resale portfolios, or immediate site visit schedules.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenContact(selectedProject.name);
                    }}
                    className="cursor-pointer whitespace-nowrap bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#b5802f] hover:from-[#f2e9d3] hover:to-[#d4b673] text-black text-xs font-bold tracking-[0.18em] px-6 py-3.5 rounded-lg uppercase shadow-md active:scale-95 transition-all"
                  >
                    INQUIRE NOW
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
