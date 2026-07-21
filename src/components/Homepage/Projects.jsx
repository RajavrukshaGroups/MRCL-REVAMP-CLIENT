import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, MapPin, Sparkles, Home, X, Check, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../../data';

export default function Projects({ onOpenContact }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleBookVisit = (projectName) => {
    setSelectedProject(null);
    onOpenContact(projectName);
  };

  return (
    <>
      <section id="projects" className="relative py-24 md:py-32 bg-brand-red-950 text-gold-50 overflow-hidden">
        {/* Background Ornaments */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(181,128,47,0.06)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute top-12 left-0 w-80 h-80 bg-gold-600/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Text */}
        <div className="text-center space-y-3 mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span className="font-sans text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
              OUR PORTFOLIO
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-white leading-tight">
            Our Premier Gated Communities & <span className="font-bold text-gold-300">Luxury Estates</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold-400/40 mx-auto mt-4" />
        </div>

        {/* Grid Layout of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => handleCardClick(project)}
              className="cursor-pointer group relative rounded-xl overflow-hidden border border-gold-300/10 hover:border-gold-300/40 bg-neutral-900/60 transition-all duration-500 shadow-2xl hover:shadow-gold-500/10"
            >
              {/* Image Container with Zoom effect */}
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80" />

                {/* New Launch Tag ribbon */}
                {project.isNew && (
                  <div className="absolute top-3 left-3 bg-red-600 text-white font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-md">
                    NEW LAUNCH
                  </div>
                )}
              </div>

              {/* Card Footer Content */}
              <div className="p-5 space-y-3">
                <div className="space-y-1">
                  <h3 className="font-serif text-base tracking-wider text-gold-100 group-hover:text-gold-300 transition-colors truncate">
                    {project.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <MapPin className="w-3.5 h-3.5 text-gold-500" />
                    <span className="text-xs font-sans tracking-wide truncate max-w-[200px]">
                      {project.location.split(',')[0]}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5">
                  <span className="font-sans text-xs font-semibold tracking-wider text-gold-400 truncate max-w-[150px]">
                    {project.type}
                  </span>
                  
                  {/* Circle Action Arrow */}
                  <div className="w-8 h-8 rounded-full border border-gold-400/20 group-hover:border-gold-400 flex items-center justify-center bg-transparent group-hover:bg-gold-500 text-gold-400 group-hover:text-brand-red-950 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Action bar */}
        {/* <div id="villas" className="pt-16 flex justify-center">
          <button
            onClick={() => onOpenContact('Request All Portfolios')}
            className="cursor-pointer flex items-center gap-3 px-8 py-3.5 bg-transparent hover:bg-gold-500/5 border border-gold-400/40 hover:border-gold-300 text-gold-200 hover:text-gold-100 font-bold text-xs tracking-widest rounded-md transition-all duration-300 active:scale-95"
          >
            <span>VIEW ALL PROJECTS</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div> */}

      </div>

      </section>

      {/* Interactive Project Details Drawer/Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Content Drawer Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl bg-brand-red-950 border border-gold-300/30 rounded-2xl overflow-hidden shadow-2xl z-10 p-[1px] bg-gradient-to-b from-gold-300/30 to-transparent"
            >
              <div className="bg-brand-red-950 rounded-[15px] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left Side Picture */}
                  <div className="relative aspect-[4/3] md:aspect-auto w-full md:h-full min-h-[250px] overflow-hidden bg-neutral-900">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-red-950 via-brand-red-950/10 to-transparent" />
                    
                    {/* Price and Details overlay */}
                    <div className="absolute bottom-6 left-6 right-6 space-y-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-gold-300 block">
                        ESTATE ESTIMATION
                      </span>
                      <h4 className="font-serif text-2xl md:text-3xl font-bold text-white leading-none">
                        {selectedProject.price}
                      </h4>
                      <p className="text-xs text-gold-100/70 font-sans tracking-wide">
                        *Inclusive of basic structural design & infrastructure layout.
                      </p>
                    </div>
                  </div>

                  {/* Right Side Info Sheet */}
                  <div className="p-6 md:p-8 space-y-6 flex flex-col justify-between max-h-[85vh] overflow-y-auto">
                    {/* Header */}
                    <div className="relative text-left">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute -top-2 -right-2 text-gold-200/60 hover:text-gold-400 p-1.5 transition-all hover:rotate-90 cursor-pointer"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-bold font-sans">
                        {selectedProject.type} // {selectedProject.sqft}
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl text-gold-200 mt-1">
                        {selectedProject.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-gold-100/60 text-xs mt-1">
                        <MapPin className="w-3.5 h-3.5 text-gold-500" />
                        <span>{selectedProject.location}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-gold-50/85 leading-relaxed font-sans font-light text-left">
                      {selectedProject.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2.5 text-left">
                      <h4 className="text-xs uppercase tracking-widest text-gold-300 font-bold">
                        Bespoke Luxury Highlights
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {selectedProject.highlights.map((high, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-[11px] text-gold-100/90 font-sans">
                            <Check className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                            <span>{high}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Specifications table */}
                    <div className="grid grid-cols-3 gap-4 border-y border-gold-300/10 py-3 text-center">
                      <div className="space-y-0.5">
                        <span className="block text-[9px] uppercase tracking-wider text-gold-400/70">CONFIGURATION</span>
                        <span className="font-semibold text-xs text-gold-100 font-serif">{selectedProject.bhk}</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[9px] uppercase tracking-wider text-gold-400/70">SUPER AREA</span>
                        <span className="font-semibold text-xs text-gold-100 font-serif">{selectedProject.sqft}</span>
                      </div>
                      <div className="space-y-0.5">
                        <span className="block text-[9px] uppercase tracking-wider text-gold-400/70">POSSESSION</span>
                        <span className="font-semibold text-xs text-gold-100 font-serif">
                          {selectedProject.isNew ? "Ready to Customize" : "Completed / Resale"}
                        </span>
                      </div>
                    </div>

                    {/* Call to action booking */}
                    <div className="pt-2 grid grid-cols-2 gap-4">
                      <button
                        onClick={() => {
                          setSelectedProject(null);
                          navigate(selectedProject.route);
                        }}
                        className="cursor-pointer flex items-center justify-center gap-1.5 py-3 bg-transparent hover:bg-white/5 border border-gold-400/50 hover:border-gold-400 text-gold-300 hover:text-white font-bold text-[10px] tracking-widest rounded-md transition-all duration-300"
                      >
                        <ArrowUpRight className="w-3.5 h-3.5" />
                        <span>FULL DETAILS</span>
                      </button>
                      <button
                        onClick={() => handleBookVisit(selectedProject.name)}
                        className="cursor-pointer flex items-center justify-center gap-1.5 py-3 bg-gold-500 hover:bg-gold-400 text-brand-red-950 font-bold text-[10px] tracking-widest rounded-md transition-all duration-300 shadow-xl"
                      >
                        <Home className="w-3.5 h-3.5" />
                        <span>BOOK VISIT</span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
