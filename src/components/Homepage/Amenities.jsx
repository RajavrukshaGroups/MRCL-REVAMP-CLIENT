// import { motion } from 'motion/react';
// import { Crown, Building2, Waves, Flower2, Smile, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
// import { AMENITIES } from '../../data';

// export default function Amenities({ onOpenContact }) {
//   // Map string icon names to Lucide icons
//   const renderIcon = (name) => {
//     switch (name) {
//       case 'Building2':
//         return <Building2 className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" />;
//       case 'Waves':
//         return <Waves className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" />;
//       case 'Flower2':
//         return <Flower2 className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" />;
//       case 'Smile':
//         return <Smile className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" />;
//       case 'ShieldCheck':
//         return <ShieldCheck className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" />;
//       case 'Zap':
//         return <Zap className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-transform duration-300" />;
//       default:
//         return <Building2 className="w-8 h-8 text-gold-500" />;
//     }
//   };

//   return (
//     <section id="amenities" className="relative py-24 md:py-32 bg-gold-50/50 overflow-hidden">
//       {/* Accent blobs */}
//       <div className="absolute top-0 left-0 w-96 h-96 bg-gold-200/10 blur-[130px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
//         {/* Header Title Section */}
//         <div className="text-center space-y-2 mb-16 md:mb-24">
//           <span className="font-sans text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase block">
//             WORLD CLASS
//           </span>
//           <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gold-700 tracking-wide">
//             Amenities
//           </h2>
//           <div className="flex items-center justify-center gap-3 mt-4">
//             <div className="w-12 h-[1px] bg-gold-500/40" />
//             <Crown className="w-3.5 h-3.5 text-gold-500" />
//             <div className="w-12 h-[1px] bg-gold-500/40" />
//           </div>
//         </div>

//         {/* Grid of 6 Amenity Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
//           {AMENITIES.map((amen, idx) => (
//             <motion.div
//               key={amen.id}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: idx * 0.1 }}
//               whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(181, 128, 47, 0.12)' }}
//               className="group cursor-default bg-white border border-gold-300/20 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden"
//             >
//               {/* Inner subtle glow */}
//               <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
//               {/* Line ornament inside card on hover */}
//               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

//               {/* Icon Container with elegant frame */}
//               <div className="p-4 rounded-full bg-gold-50 border border-gold-200/40 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-colors duration-300 shadow-sm mb-6 flex items-center justify-center">
//                 {renderIcon(amen.iconName)}
//               </div>

//               {/* Text */}
//               <h3 className="font-serif text-sm font-semibold tracking-wider text-neutral-950 mb-2 group-hover:text-gold-700 transition-colors">
//                 {amen.name}
//               </h3>
//               <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed">
//                 {amen.description}
//               </p>
//             </motion.div>
//           ))}
//         </div>

//         {/* Explore Amenities Button */}
//         {/* <div className="pt-16 flex justify-center">
//           <button
//             onClick={() => onOpenContact('Request Amenities Booklet')}
//             className="cursor-pointer group flex items-center gap-3 px-8 py-3.5 bg-brand-red-950 hover:bg-brand-red-900 text-gold-200 font-bold text-xs tracking-widest rounded-md transition-all duration-300 shadow-xl hover:shadow-brand-red-950/10 active:scale-95"
//           >
//             <span>EXPLORE AMENITIES</span>
//             <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300" />
//           </button>
//         </div> */}

//       </div>
//     </section>
//   );
// }


import { motion } from 'motion/react';
import { Crown, ArrowRight } from 'lucide-react';
import { AMENITIES } from '../../data';

// --- Animated SVG Components ---

const AnimatedBuilding = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      d="M12 56V16L32 4L52 16V56" 
      stroke="#650707ff" strokeWidth="2" strokeLinejoin="round" fill="white"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 1.5 }} 
    />
    <motion.rect 
      x="24" y="28" width="6" height="8" 
      stroke="#b5802f" strokeWidth="1.5" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ delay: 0.8 }}
    />
    <motion.rect 
      x="34" y="28" width="6" height="8" 
      stroke="#b5802f" strokeWidth="1.5" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ delay: 1 }}
    />
    <motion.rect 
      x="24" y="44" width="6" height="12" 
      stroke="#b5802f" strokeWidth="1.5" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ delay: 1.2 }}
    />
    <motion.rect 
      x="34" y="44" width="6" height="12" 
      stroke="#b5802f" strokeWidth="1.5" 
      initial={{ opacity: 0 }} 
      whileInView={{ opacity: 1 }} 
      transition={{ delay: 1.4 }}
    />
    {/* Windows glow animation */}
    <motion.rect 
      x="26" y="30" width="2" height="4" 
      fill="#b5802f" 
      animate={{ opacity: [0.3, 0.8, 0.3] }} 
      transition={{ repeat: Infinity, duration: 2 }}
    />
    <motion.rect 
      x="36" y="30" width="2" height="4" 
      fill="#b5802f" 
      animate={{ opacity: [0.3, 0.8, 0.3] }} 
      transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
    />
  </svg>
);

const AnimatedPool = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      d="M8 28H56V48C56 52.4 52.4 56 48 56H16C11.6 56 8 52.4 8 48V28Z" 
      stroke="#650707ff" strokeWidth="2" fill="white"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 1 }} 
    />
    {/* Active Waves */}
    <motion.path 
      d="M10 38 C15 34, 20 42, 25 38 C30 34, 35 42, 40 38 C45 34, 50 42, 54 38" 
      stroke="#b5802f" strokeWidth="2" strokeLinecap="round" fill="none"
      initial={{ x: -2 }}
      animate={{ x: [0, -6, 0] }}
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    />
    <motion.path 
      d="M10 46 C15 42, 20 50, 25 46 C30 42, 35 50, 40 46 C45 42, 50 50, 54 46" 
      stroke="#b5802f" strokeWidth="2" strokeLinecap="round" fill="none"
      initial={{ x: 2 }}
      animate={{ x: [0, 6, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    />
    {/* Sparkles */}
    <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}>
      <path d="M48 32L49 34L51 35L49 36L48 38L47 36L45 35L47 34L48 32Z" fill="#650707ff"/>
    </motion.g>
    <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2.5, delay: 1.5 }}>
      <path d="M18 50L19 52L21 53L19 54L18 56L17 54L15 53L17 52L18 50Z" fill="#650707ff"/>
    </motion.g>
  </svg>
);

const AnimatedGarden = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Sun */}
    <motion.circle 
      cx="50" cy="14" r="5" 
      fill="#650707ff" 
      initial={{ opacity: 0, scale: 0.5 }} 
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        opacity: { duration: 1 },
        scale: { 
          repeat: Infinity, 
          duration: 3, 
          ease: "easeInOut",
          delay: 1 
        }
      }}
    />
    {/* Hills */}
    <motion.path 
      d="M4 56L20 40L36 56" 
      stroke="#650707ff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 1 }} 
    />
    <motion.path 
      d="M28 56L44 34L60 56" 
      stroke="#b5802f" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 1, delay: 0.3 }} 
    />
    {/* Trees with swaying */}
    <motion.g>
      <line x1="20" y1="40" x2="20" y2="30" stroke="#b5802f" strokeWidth="2" />
      <motion.circle 
        cx="20" cy="26" r="5" stroke="#b5802f" strokeWidth="2" fill="white" 
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }} 
        animate={{ rotate: [0, 5, -5, 0] }}
        transition={{ 
          scale: { duration: 0.5, delay: 0.6 },
          rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ originX: "20px", originY: "30px" }}
      />
    </motion.g>
    <motion.g>
      <line x1="44" y1="34" x2="44" y2="24" stroke="#b5802f" strokeWidth="2" />
      <motion.circle 
        cx="44" cy="20" r="5" stroke="#b5802f" strokeWidth="2" fill="white" 
        initial={{ scale: 0 }} 
        whileInView={{ scale: 1 }} 
        animate={{ rotate: [0, -5, 5, 0] }}
        transition={{ 
          scale: { duration: 0.5, delay: 0.8 },
          rotate: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }
        }}
        style={{ originX: "44px", originY: "24px" }}
      />
    </motion.g>
  </svg>
);

const AnimatedPlayground = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path 
      d="M16 56L24 16H40L48 56" 
      stroke="#650707ff" strokeWidth="2" strokeLinecap="round" 
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 1 }} 
    />
    {/* Swing */}
    <motion.g 
      style={{ originX: "32px", originY: "16px" }} 
      animate={{ rotate: [15, -15, 15] }} 
      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
    >
      <line x1="26" y1="16" x2="26" y2="44" stroke="#b5802f" strokeWidth="1.5" />
      <line x1="38" y1="16" x2="38" y2="44" stroke="#b5802f" strokeWidth="1.5" />
      <rect x="24" y="44" width="16" height="4" rx="2" fill="#b5802f" />
    </motion.g>
    {/* Slide */}
    <motion.path 
      d="M10 56L18 36L26 56" 
      stroke="#b5802f" strokeWidth="1.5" strokeLinecap="round" fill="none"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 0.8, delay: 0.5 }}
    />
  </svg>
);

const AnimatedSecurity = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path d="M32 56V32" stroke="#650707ff" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} />
    <motion.path d="M24 56H40" stroke="#650707ff" strokeWidth="2" strokeLinecap="round" initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} />
    {/* Camera head */}
    <motion.g
      initial={{ rotate: -15 }}
      animate={{ rotate: 15 }}
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 2.5, ease: "easeInOut" }}
      style={{ originX: "32px", originY: "32px" }}
    >
      <motion.path 
        d="M32 27 L10 5 L54 5 Z" 
        fill="url(#beamGradient)"
        opacity="0.2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <defs>
        <linearGradient id="beamGradient" x1="32" y1="27" x2="32" y2="5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b5802f" stopOpacity="0"/>
          <stop offset="1" stopColor="#b5802f" stopOpacity="0.8"/>
        </linearGradient>
      </defs>
      <rect x="20" y="20" width="24" height="14" rx="2" stroke="#650707ff" strokeWidth="2" fill="white" />
      <circle cx="38" cy="27" r="3" fill="#b5802f" />
    </motion.g>
    {/* Blinking light */}
    <motion.circle cx="24" cy="24" r="1.5" fill="#b5802f" animate={{ opacity: [1, 0.2, 1] }} transition={{ repeat: Infinity, duration: 0.8 }} />
    {/* Shield symbol */}
    <motion.path 
      d="M48 48L52 52L58 46" 
      stroke="#b5802f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      initial={{ pathLength: 0 }} 
      whileInView={{ pathLength: 1 }} 
      transition={{ duration: 0.5, delay: 1 }}
    />
  </svg>
);

const AnimatedElectricity = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.circle 
      cx="32" cy="32" r="24" 
      stroke="#650707ff" strokeWidth="1.5" strokeDasharray="4 4" 
      animate={{ rotate: 360 }} 
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }} 
    />
    <motion.path
      d="M36 14L24 32H40L28 50"
      stroke="#650707ff"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      animate={{ opacity: [1, 0.5, 1] }}
    />
    {/* Sparks */}
    <motion.g animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
      <path d="M48 24 L52 20" stroke="#b5802f" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 40 L12 44" stroke="#b5802f" strokeWidth="2" strokeLinecap="round"/>
    </motion.g>
  </svg>
);

export default function Amenities({ onOpenContact }) {
  // Map string icon names to animated SVG components
  const renderIcon = (name) => {
    switch (name) {
      case 'Building2':
        return <AnimatedBuilding />;
      case 'Waves':
        return <AnimatedPool />;
      case 'Flower2':
        return <AnimatedGarden />;
      case 'Smile':
        return <AnimatedPlayground />;
      case 'ShieldCheck':
        return <AnimatedSecurity />;
      case 'Zap':
        return <AnimatedElectricity />;
      default:
        return <AnimatedBuilding />;
    }
  };

  return (
    <section id="amenities" className="relative py-24 md:py-32 bg-gold-50/50 overflow-hidden">
      {/* Accent blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold-200/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Section */}
        <div className="text-center space-y-2 mb-16 md:mb-24">
          <span className="font-sans text-xs font-bold tracking-[0.25em] text-neutral-500 uppercase block">
            WORLD CLASS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-gold-700 tracking-wide">
            Amenities
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-12 h-[1px] bg-gold-500/40" />
            <Crown className="w-3.5 h-3.5 text-gold-500" />
            <div className="w-12 h-[1px] bg-gold-500/40" />
          </div>
        </div>

        {/* Grid of 6 Amenity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {AMENITIES.map((amen, idx) => (
            <motion.div
              key={amen.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 20px 40px -15px rgba(181, 128, 47, 0.12)' }}
              className="group cursor-default bg-white border border-gold-300/20 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 relative overflow-hidden"
            >
              {/* Inner subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Line ornament inside card on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container with elegant frame */}
              <div className="p-4 rounded-full bg-gold-50 border border-gold-200/40 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-colors duration-300 shadow-sm mb-6 flex items-center justify-center">
                {renderIcon(amen.iconName)}
              </div>

              {/* Text */}
              <h3 className="font-serif text-sm font-semibold tracking-wider text-neutral-950 mb-2 group-hover:text-gold-700 transition-colors">
                {amen.name}
              </h3>
              <p className="text-xs md:text-sm text-neutral-600 font-sans leading-relaxed">
                {amen.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}