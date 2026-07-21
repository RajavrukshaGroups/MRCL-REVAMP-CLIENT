// import React, { useState, useRef } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { 
//   Users, 
//   Award, 
//   Wrench, 
//   Puzzle, 
//   Handshake, 
//   Mail, 
//   User, 
//   Phone, 
//   Upload, 
//   MessageSquare, 
//   ArrowRight,
//   Check,
//   ShieldAlert,
//   Sparkles
// } from 'lucide-react';

// export default function CareersContent() {
//   // Form state
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });
//   const [file, setFile] = useState(null);
//   const [fileName, setFileName] = useState('No file chosen');
//   const fileInputRef = useRef(null);

//   // Custom reCAPTCHA state
//   const [recaptchaState, setRecaptchaState] = useState('unchecked'); // 'unchecked', 'loading', 'checked'
  
//   // Submission state
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
//   const [formErrors, setFormErrors] = useState({});

//   // Form input handlers
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//     if (formErrors[name]) {
//       setFormErrors(prev => ({ ...prev, [name]: '' }));
//     }
//   };

//   const handleFileChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       const selectedFile = e.target.files[0];
//       setFile(selectedFile);
//       setFileName(selectedFile.name);
//       if (formErrors.file) {
//         setFormErrors(prev => ({ ...prev, file: '' }));
//       }
//     }
//   };

//   const triggerFileSelect = () => {
//     fileInputRef.current?.click();
//   };

//   // Click handler for interactive custom reCAPTCHA
//   const handleRecaptchaClick = () => {
//     if (recaptchaState !== 'unchecked') return;
    
//     setRecaptchaState('loading');
//     setTimeout(() => {
//       setRecaptchaState('checked');
//       if (formErrors.recaptcha) {
//         setFormErrors(prev => ({ ...prev, recaptcha: '' }));
//       }
//     }, 1500);
//   };

//   // Validation & Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = {};

//     if (!formData.name.trim()) errors.name = 'Your name is required';
//     if (!formData.email.trim()) {
//       errors.email = 'Email address is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       errors.email = 'Please enter a valid email';
//     }
//     if (!formData.phone.trim()) errors.phone = 'Phone number is required';
//     if (!file) errors.file = 'Please upload your resume';
//     if (recaptchaState !== 'checked') errors.recaptcha = 'Please verify that you are not a robot';

//     if (Object.keys(errors).length > 0) {
//       setFormErrors(errors);
//       return;
//     }

//     // Submit mock loader
//     setIsSubmitting(true);
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSuccessModalOpen(true);
//       // Reset form
//       setFormData({ name: '', email: '', phone: '', message: '' });
//       setFile(null);
//       setFileName('No file chosen');
//       setRecaptchaState('unchecked');
//     }, 2000);
//   };

//   return (
//     <section className="py-16 bg-[#0a0001] px-4 sm:px-6 lg:px-8 relative min-h-screen">
//       {/* Background radial accent highlights */}
//       <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/3 blur-[140px] rounded-full pointer-events-none" />
//       <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-brand-red-950/20 blur-[150px] rounded-full pointer-events-none" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
//           {/* LEFT COLUMN: WHY JOIN US & DETAILS */}
//           <div className="lg:col-span-7 flex flex-col">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//               className="bg-[#0e0204]/95 border border-gold-400/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-grow flex flex-col justify-between"
//             >
//               <div className="space-y-8">
//                 {/* Header Row with Circle Icon and Intro Paragraph */}
//                 <div className="flex flex-col sm:flex-row gap-5 items-start">
//                   <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red-950 to-[#120002] border-2 border-gold-400 flex flex-shrink-0 items-center justify-center text-gold-300 shadow-[0_0_15px_rgba(181,128,47,0.3)]">
//                     <Users className="w-7 h-7" />
//                   </div>
//                   <p className="text-gold-100/90 font-sans font-light text-xs sm:text-sm md:text-[14px] leading-relaxed">
//                     At MRCL Infrastructure Pvt Ltd, we believe that our success is driven by the talent and dedication of our team. With over 13 years of experience in transforming visions into reality, we specialize in residential, commercial, and industrial construction projects. Our commitment to excellence, innovation, and customer satisfaction sets us apart in the industry.
//                   </p>
//                 </div>

//                 {/* WHY JOIN US Section */}
//                 <div className="space-y-6">
//                   <div className="space-y-2">
//                     <h3 className="font-serif text-lg sm:text-xl text-gold-300 tracking-[0.12em] font-bold uppercase">
//                       Why Join Us?
//                     </h3>
//                     <div className="flex items-center gap-2">
//                       <div className="h-[1px] w-8 bg-gold-400/85" />
//                       <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
//                       <div className="h-[1px] w-8 bg-gold-400/85" />
//                     </div>
//                   </div>

//                   {/* List of 4 Pillars */}
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    
//                     {/* Pillar 1: PROVEN EXPERTISE */}
//                     <div className="flex gap-4 items-start group">
//                       <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#160205] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
//                         <Award className="w-5.5 h-5.5" />
//                       </div>
//                       <div className="space-y-1">
//                         <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-300 uppercase">
//                           PROVEN EXPERTISE
//                         </h4>
//                         <p className="text-stone-300 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
//                           Be part of a team with a strong track record of successfully completed projects that bring structures to life with passion and precision.
//                         </p>
//                       </div>
//                     </div>

//                     {/* Pillar 2: UNMATCHED CRAFTSMANSHIP */}
//                     <div className="flex gap-4 items-start group">
//                       <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#160205] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
//                         <Wrench className="w-5.5 h-5.5" />
//                       </div>
//                       <div className="space-y-1">
//                         <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-300 uppercase">
//                           UNMATCHED CRAFTSMANSHIP
//                         </h4>
//                         <p className="text-stone-300 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
//                           Work with superior materials and meticulous attention to detail, ensuring quality in every project we undertake.
//                         </p>
//                       </div>
//                     </div>

//                     {/* Pillar 3: TAILORED TO PERFECTION */}
//                     <div className="flex gap-4 items-start group">
//                       <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#160205] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
//                         <Puzzle className="w-5.5 h-5.5" />
//                       </div>
//                       <div className="space-y-1">
//                         <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-300 uppercase">
//                           TAILORED TO PERFECTION
//                         </h4>
//                         <p className="text-stone-300 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
//                           Contribute to customized solutions that turn unique ideas into stunning realities.
//                         </p>
//                       </div>
//                     </div>

//                     {/* Pillar 4: INTEGRITY & TRANSPARENCY */}
//                     <div className="flex gap-4 items-start group">
//                       <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#160205] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
//                         <Handshake className="w-5.5 h-5.5" />
//                       </div>
//                       <div className="space-y-1">
//                         <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-300 uppercase">
//                           INTEGRITY & TRANSPARENCY
//                         </h4>
//                         <p className="text-stone-300 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
//                           Experience clear, honest, and seamless communication from the first consultation to project completion.
//                         </p>
//                       </div>
//                     </div>

//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Info Row with Divider */}
//               <div className="space-y-6 pt-10 mt-auto border-t border-gold-400/10">
//                 <div className="flex items-center justify-center gap-3">
//                   <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold-400/40" />
//                   <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-400/10 flex items-center justify-center">
//                     <div className="w-1 h-1 rotate-45 bg-gold-400" />
//                   </div>
//                   <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold-400/40" />
//                 </div>

//                 <div className="space-y-4">
//                   <p className="text-stone-300 font-sans font-light text-xs sm:text-sm leading-relaxed">
//                     We are always on the lookout for talented individuals who share our passion for building excellence. If you are interested in joining our team, please send your resume and cover letter to
//                   </p>
                  
//                   <a 
//                     href="mailto:info@mrclinfrastructure.com" 
//                     className="inline-flex items-center gap-3 bg-gold-500/10 hover:bg-gold-500/25 border border-gold-400/30 text-gold-300 hover:text-gold-200 font-sans font-semibold text-xs tracking-wider px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg"
//                   >
//                     <Mail className="w-4.5 h-4.5 text-gold-400" />
//                     <span>info@mrclinfrastructure.com</span>
//                   </a>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* RIGHT COLUMN: UPLOAD RESUME FORM */}
//           <div className="lg:col-span-5 flex flex-col mt-6 lg:mt-0">
//             <motion.div 
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: 0.1 }}
//               className="relative bg-[#1a0305]/95 border border-gold-400/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-grow flex flex-col justify-center"
//             >
              
//               {/* Briefcase overlap icon */}
//               <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-brand-red-900 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-[0_10px_25px_rgba(181,128,47,0.35)] z-20">
//                 <div className="flex items-center justify-center">
//                   {/* Styled solid briefcase look */}
//                   <svg className="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
//                     <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
//                   </svg>
//                 </div>
//               </div>

//               {/* Form Title & Decorative Motif */}
//               <div className="text-center space-y-2 pt-4 mb-8">
//                 <h3 className="font-serif text-lg sm:text-xl text-gold-300 font-bold tracking-[0.18em] uppercase">
//                   UPLOAD YOUR RESUME
//                 </h3>
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="h-[1px] w-12 bg-gold-400/70" />
//                   <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
//                   <div className="h-[1px] w-12 bg-gold-400/70" />
//                 </div>
//               </div>

//               {/* Form */}
//               <form onSubmit={handleSubmit} className="space-y-4">
                
//                 {/* Field 1: Your Name */}
//                 <div className="space-y-1">
//                   <div className={`flex items-center gap-3.5 bg-[#0c0001] border ${formErrors.name ? 'border-red-500/55' : 'border-gold-500/10 focus-within:border-gold-400/50'} rounded-lg px-4 py-3 transition-colors`}>
//                     <User className="w-5 h-5 text-gold-400 flex-shrink-0" />
//                     <input 
//                       type="text" 
//                       name="name"
//                       value={formData.name}
//                       onChange={handleInputChange}
//                       placeholder="Your Name" 
//                       className="bg-transparent text-stone-200 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500"
//                     />
//                   </div>
//                   {formErrors.name && (
//                     <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
//                       <ShieldAlert className="w-3 h-3" /> {formErrors.name}
//                     </p>
//                   )}
//                 </div>

//                 {/* Field 2: Email */}
//                 <div className="space-y-1">
//                   <div className={`flex items-center gap-3.5 bg-[#0c0001] border ${formErrors.email ? 'border-red-500/55' : 'border-gold-500/10 focus-within:border-gold-400/50'} rounded-lg px-4 py-3 transition-colors`}>
//                     <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
//                     <input 
//                       type="email" 
//                       name="email"
//                       value={formData.email}
//                       onChange={handleInputChange}
//                       placeholder="Email" 
//                       className="bg-transparent text-stone-200 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500"
//                     />
//                   </div>
//                   {formErrors.email && (
//                     <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
//                       <ShieldAlert className="w-3 h-3" /> {formErrors.email}
//                     </p>
//                   )}
//                 </div>

//                 {/* Field 3: Phone No. */}
//                 <div className="space-y-1">
//                   <div className={`flex items-center gap-3.5 bg-[#0c0001] border ${formErrors.phone ? 'border-red-500/55' : 'border-gold-500/10 focus-within:border-gold-400/50'} rounded-lg px-4 py-3 transition-colors`}>
//                     <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
//                     <input 
//                       type="tel" 
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleInputChange}
//                       placeholder="Phone No." 
//                       className="bg-transparent text-stone-200 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500"
//                     />
//                   </div>
//                   {formErrors.phone && (
//                     <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
//                       <ShieldAlert className="w-3 h-3" /> {formErrors.phone}
//                     </p>
//                   )}
//                 </div>

//                 {/* Field 4: Choose File */}
//                 <div className="space-y-1">
//                   <div className={`flex items-center justify-between bg-[#0c0001] border ${formErrors.file ? 'border-red-500/55' : 'border-gold-500/10'} rounded-lg px-4 py-2.5 transition-colors`}>
//                     <div className="flex items-center gap-3.5 w-full overflow-hidden mr-2">
//                       <Upload className="w-5 h-5 text-gold-400 flex-shrink-0" />
//                       <button 
//                         type="button"
//                         onClick={triggerFileSelect}
//                         className="bg-[#1a0305] hover:bg-gold-500 border border-gold-500/25 text-gold-400 hover:text-brand-red-950 px-3.5 py-1.5 rounded text-[11px] font-bold font-sans tracking-wider transition-colors cursor-pointer flex-shrink-0"
//                       >
//                         CHOOSE FILE
//                       </button>
//                       <span className="text-stone-400 text-xs truncate">
//                         {fileName}
//                       </span>
//                     </div>
                    
//                     <input 
//                       type="file" 
//                       ref={fileInputRef}
//                       onChange={handleFileChange}
//                       accept=".pdf,.doc,.docx"
//                       className="hidden"
//                     />
//                   </div>
//                   {formErrors.file && (
//                     <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
//                       <ShieldAlert className="w-3 h-3" /> {formErrors.file}
//                     </p>
//                   )}
//                 </div>

//                 {/* Field 5: Your Message */}
//                 <div className="space-y-1">
//                   <div className="flex gap-3.5 bg-[#0c0001] border border-gold-500/10 focus-within:border-gold-400/50 rounded-lg px-4 py-3 transition-colors items-start">
//                     <MessageSquare className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
//                     <textarea 
//                       name="message"
//                       value={formData.message}
//                       onChange={handleInputChange}
//                       placeholder="Your Message" 
//                       rows="4"
//                       className="bg-transparent text-stone-200 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500 resize-none"
//                     />
//                   </div>
//                 </div>

//                 {/* Interactive Custom reCAPTCHA v2 (Matches picture exactly!) */}
//                 <div className="space-y-1 py-1.5 flex justify-center">
//                   <div className="w-full max-w-[320px] bg-[#0c0001] border border-neutral-800 p-2.5 rounded-md flex items-center justify-between shadow-lg">
//                     <div className="flex items-center">
//                       {/* Checkbox button */}
//                       <div 
//                         onClick={handleRecaptchaClick}
//                         className={`w-6 h-6 border-2 rounded flex items-center justify-center cursor-pointer transition-all duration-300 ${
//                           recaptchaState === 'checked' 
//                             ? 'border-green-500 bg-green-500/15 text-green-500' 
//                             : recaptchaState === 'loading'
//                               ? 'border-gold-400 bg-transparent'
//                               : 'border-neutral-700 hover:border-neutral-500 bg-transparent'
//                         }`}
//                       >
//                         {recaptchaState === 'checked' && (
//                           <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
//                             <Check className="w-4 h-4 stroke-[3]" />
//                           </motion.div>
//                         )}
//                         {recaptchaState === 'loading' && (
//                           <div className="w-3.5 h-3.5 border-2 border-gold-400 border-t-transparent rounded-full animate-spin" />
//                         )}
//                       </div>
                      
//                       <span className="text-stone-300 text-[11px] sm:text-xs pl-3.5 font-sans select-none">
//                         I'm not a robot
//                       </span>
//                     </div>

//                     {/* Logo & privacy details */}
//                     <div className="flex flex-col items-center justify-center text-center">
//                       <svg className="w-6 h-6 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
//                         <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
//                       </svg>
//                       <span className="text-[7.5px] font-sans text-stone-500 tracking-wider uppercase mt-0.5 leading-none font-bold">reCAPTCHA</span>
//                       <span className="text-[6.5px] font-sans text-stone-500/80 leading-none mt-0.5">Privacy - Terms</span>
//                     </div>
//                   </div>
//                 </div>
//                 {formErrors.recaptcha && (
//                   <p className="text-red-400 text-[10px] font-sans text-center flex items-center justify-center gap-1">
//                     <ShieldAlert className="w-3 h-3" /> {formErrors.recaptcha}
//                   </p>
//                 )}

//                 {/* Submit button with yellow gold gradient */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="group relative cursor-pointer w-full bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 font-sans text-xs sm:text-sm font-bold tracking-[0.15em] py-3.5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-gold-500/10 active:scale-98 flex items-center justify-center gap-2"
//                 >
//                   {isSubmitting ? (
//                     <div className="w-5 h-5 border-2 border-brand-red-950 border-t-transparent rounded-full animate-spin" />
//                   ) : (
//                     <>
//                       <span>SUBMIT APPLICATION</span>
//                       <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
//                     </>
//                   )}
//                 </button>

//               </form>

//             </motion.div>
//           </div>

//         </div>
//       </div>

//       {/* SUCCESS DIALOG MODAL */}
//       <AnimatePresence>
//         {isSuccessModalOpen && (
//           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
//             <motion.div 
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               className="relative max-w-md w-full bg-[#1c0205] border border-gold-400/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl space-y-5"
//             >
//               {/* Gold double line border highlights */}
//               <div className="absolute inset-2 border border-gold-400/10 rounded-xl pointer-events-none" />

//               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-brand-red-950 mx-auto shadow-2xl">
//                 <Check className="w-8 h-8 stroke-[3]" />
//               </div>

//               <div className="space-y-2">
//                 <h3 className="font-serif text-lg sm:text-xl text-gold-300 font-bold tracking-widest uppercase">
//                   Application Submitted
//                 </h3>
//                 <div className="flex items-center justify-center gap-2">
//                   <div className="h-[1px] w-8 bg-gold-400" />
//                   <div className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
//                   <div className="h-[1px] w-8 bg-gold-400" />
//                 </div>
//               </div>

//               <p className="text-gold-100/80 font-sans font-light text-xs sm:text-sm leading-relaxed">
//                 Thank you for applying to MRCL Infrastructure. Your resume and application details have been received successfully. Our human resource team will review your profile and get back to you shortly.
//               </p>

//               <button 
//                 onClick={() => setIsSuccessModalOpen(false)}
//                 className="w-full bg-[#0c0001] hover:bg-gold-500 border border-gold-500/25 text-gold-400 hover:text-brand-red-950 transition-all py-2.5 rounded-lg text-xs font-bold font-sans tracking-widest cursor-pointer"
//               >
//                 CLOSE WINDOW
//               </button>
//             </motion.div>
//           </div>
//         )}
//       </AnimatePresence>

//     </section>
//   );
// }


import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Award, 
  Wrench, 
  Puzzle, 
  Handshake, 
  Mail, 
  User, 
  Phone, 
  Upload, 
  MessageSquare, 
  ArrowRight,
  Check,
  ShieldAlert,
  Sparkles
} from 'lucide-react';
import { submitCareerForm } from '../../api';

export default function CareersContent() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('No file chosen');
  const fileInputRef = useRef(null);

  // Custom reCAPTCHA state
  const [recaptchaState, setRecaptchaState] = useState('unchecked'); // 'unchecked', 'loading', 'checked'
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  // Form input handlers
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
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setFileName(selectedFile.name);
      if (formErrors.file) {
        setFormErrors(prev => ({ ...prev, file: '' }));
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  // Click handler for interactive custom reCAPTCHA
  const handleRecaptchaClick = () => {
    if (recaptchaState !== 'unchecked') return;
    
    setRecaptchaState('loading');
    setTimeout(() => {
      setRecaptchaState('checked');
      if (formErrors.recaptcha) {
        setFormErrors(prev => ({ ...prev, recaptcha: '' }));
      }
    }, 1500);
  };

  // Validation & Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (!formData.name.trim()) errors.name = 'Your name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!file) errors.file = 'Please upload your resume';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Submit form
    setIsSubmitting(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("message", formData.message);
      data.append("resume", file);

      const response = await submitCareerForm(data);

      if (response.ok) {
        setIsSuccessModalOpen(true);
        // Reset form
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFile(null);
        setFileName('No file chosen');
        setRecaptchaState('unchecked');
      } else {
        console.error("Failed to submit career application");
      }
    } catch (error) {
      console.error("Error submitting career application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-[#0d0101ff] via-[#7A1C1C] to-[#5b1010ff] px-4 sm:px-6 lg:px-8 relative min-h-screen">
      {/* Background radial accent highlights */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-gold-500/3 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-brand-red-950/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* LEFT COLUMN: WHY JOIN US & DETAILS */}
          <div className="lg:col-span-7 flex flex-col">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#e3dedfff]/95 border border-gold-400/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-grow flex flex-col justify-between"
            >
              <div className="space-y-8">
                {/* Header Row with Circle Icon and Intro Paragraph */}
                <div className="flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-red-950 to-[#750010ff] border-2 border-gold-400 flex flex-shrink-0 items-center justify-center text-gold-300 shadow-[0_0_15px_rgba(181,128,47,0.3)]">
                    <Users className="w-7 h-7" />
                  </div>
                  <p className="text-gold-950/90 font-sans font-light text-xs sm:text-sm md:text-[14px] leading-relaxed">
                    At MRCL Infrastructure Pvt Ltd, we believe that our success is driven by the talent and dedication of our team. With over 13 years of experience in transforming visions into reality, we specialize in residential, commercial, and industrial construction projects. Our commitment to excellence, innovation, and customer satisfaction sets us apart in the industry.
                  </p>
                </div>

                {/* WHY JOIN US Section */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg sm:text-xl text-gold-800 tracking-[0.12em] font-bold uppercase">
                      Why Join Us?
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="h-[1px] w-8 bg-gold-400/85" />
                      <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
                      <div className="h-[1px] w-8 bg-gold-400/85" />
                    </div>
                  </div>

                  {/* List of 4 Pillars */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                    
                    {/* Pillar 1: PROVEN EXPERTISE */}
                    <div className="flex gap-4 items-start group">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-red-950 to-[#750010ff] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
                        <Award className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-600 uppercase">
                          PROVEN EXPERTISE
                        </h4>
                        <p className="text-stone-950 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
                          Be part of a team with a strong track record of successfully completed projects that bring structures to life with passion and precision.
                        </p>
                      </div>
                    </div>

                    {/* Pillar 2: UNMATCHED CRAFTSMANSHIP */}
                    <div className="flex gap-4 items-start group">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-red-950 to-[#750010ff] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
                        <Wrench className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-600 uppercase">
                          UNMATCHED CRAFTSMANSHIP
                        </h4>
                        <p className="text-stone-950 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
                          Work with superior materials and meticulous attention to detail, ensuring quality in every project we undertake.
                        </p>
                      </div>
                    </div>

                    {/* Pillar 3: TAILORED TO PERFECTION */}
                    <div className="flex gap-4 items-start group">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-red-950 to-[#750010ff] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
                        <Puzzle className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-600 uppercase">
                          TAILORED TO PERFECTION
                        </h4>
                        <p className="text-stone-950 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
                          Contribute to customized solutions that turn unique ideas into stunning realities.
                        </p>
                      </div>
                    </div>

                    {/* Pillar 4: INTEGRITY & TRANSPARENCY */}
                    <div className="flex gap-4 items-start group">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-brand-red-950 to-[#750010ff] border border-gold-400/50 flex items-center justify-center flex-shrink-0 text-gold-300 shadow-[0_4px_10px_rgba(0,0,0,0.4)] group-hover:border-gold-300 group-hover:text-gold-200 transition-colors">
                        <Handshake className="w-5.5 h-5.5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-serif text-[11px] sm:text-xs font-bold tracking-widest text-gold-600 uppercase">
                          INTEGRITY & TRANSPARENCY
                        </h4>
                        <p className="text-stone-950 font-sans font-light text-[11px] sm:text-xs leading-relaxed">
                          Experience clear, honest, and seamless communication from the first consultation to project completion.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Bottom Info Row with Divider */}
              <div className="space-y-6 pt-10 mt-auto border-t border-gold-600/20">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-gold-900/90" />
                  <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-400/10 flex items-center justify-center">
                    <div className="w-1 h-1 rotate-45 bg-gold-400" />
                  </div>
                  <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-gold-900/90" />
                </div>

                <div className="space-y-4">
                  <p className="text-stone-950 font-sans font-light text-xs sm:text-sm leading-relaxed">
                    We are always on the lookout for talented individuals who share our passion for building excellence. If you are interested in joining our team, please send your resume and cover letter to
                  </p>
                  
                  <a 
                    href="mailto:info@mrclinfrastructure.com" 
                    className="inline-flex items-center gap-3 bg-gradient-to-br from-brand-red-950 to-[#750010ff] hover:bg-gold-500/25 border border-gold-400/30 text-gold-300 hover:text-gold-200 font-sans font-semibold text-xs tracking-wider px-5 py-2.5 rounded-lg transition-all duration-300 shadow-lg"
                  >
                    <Mail className="w-4.5 h-4.5 text-gold-400" />
                    <span>info@mrclinfrastructure.com</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: UPLOAD RESUME FORM */}
          <div className="lg:col-span-5 flex flex-col mt-6 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative bg-[#1a0305]/95 border border-gold-400/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl flex-grow flex flex-col justify-center"
            >
              
              {/* Briefcase overlap icon */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-brand-red-900 border-2 border-gold-400 flex items-center justify-center text-gold-300 shadow-[0_10px_25px_rgba(181,128,47,0.35)] z-20">
                <div className="flex items-center justify-center">
                  {/* Styled solid briefcase look */}
                  <svg className="w-6 h-6 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
              </div>

              {/* Form Title & Decorative Motif */}
              <div className="text-center space-y-2 pt-4 mb-8">
                <h3 className="font-serif text-lg sm:text-xl text-gold-300 font-bold tracking-[0.18em] uppercase">
                  UPLOAD YOUR RESUME
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[1px] w-12 bg-gold-400/70" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-gold-400" />
                  <div className="h-[1px] w-12 bg-gold-400/70" />
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Field 1: Your Name */}
                <div className="space-y-1">
                  <div className={`flex items-center gap-3.5 bg-[#f5eeefff] border ${formErrors.name ? 'border-red-500/55' : 'border-gold-500/10 focus-within:border-gold-400/50'} rounded-lg px-4 py-3 transition-colors`}>
                    <User className="w-5 h-5 text-gold-600 flex-shrink-0" />
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name" 
                      className="bg-transparent text-stone-900 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500"
                    />
                  </div>
                  {formErrors.name && (
                    <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" /> {formErrors.name}
                    </p>
                  )}
                </div>

                {/* Field 2: Email */}
                <div className="space-y-1">
                  <div className={`flex items-center gap-3.5 bg-[#f5eeefff] border ${formErrors.email ? 'border-red-500/55' : 'border-gold-500/10 focus-within:border-gold-400/50'} rounded-lg px-4 py-3 transition-colors`}>
                    <Mail className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email" 
                      className="bg-transparent text-stone-900 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500"
                    />
                  </div>
                  {formErrors.email && (
                    <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" /> {formErrors.email}
                    </p>
                  )}
                </div>

                {/* Field 3: Phone No. */}
                <div className="space-y-1">
                  <div className={`flex items-center gap-3.5 bg-[#f5eeefff] border ${formErrors.phone ? 'border-red-500/55' : 'border-gold-500/10 focus-within:border-gold-400/50'} rounded-lg px-4 py-3 transition-colors`}>
                    <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                    <input 
                      type="tel" 
                      maxLength={10}
                      minLength={10}
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone No." 
                      className="bg-transparent text-stone-900 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500"
                    />
                  </div>
                  {formErrors.phone && (
                    <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" /> {formErrors.phone}
                    </p>
                  )}
                </div>

                {/* Field 4: Choose File */}
                <div className="space-y-1">
                  <div className={`flex items-center justify-between bg-[#f5eeefff] border ${formErrors.file ? 'border-red-500/55' : 'border-gold-500/10'} rounded-lg px-4 py-2.5 transition-colors`}>
                    <div className="flex items-center gap-3.5 w-full overflow-hidden mr-2">
                      <Upload className="w-5 h-5 text-gold-400 flex-shrink-0" />
                      <button 
                        type="button"
                        onClick={triggerFileSelect}
                        className="bg-gradient-to-br from-brand-red-950 to-[#750010ff] border border-gold-500/25 text-gold-100 hover:bg-gold-400/75 hover:text-gold-300 px-3.5 py-1.5 rounded text-[11px] font-bold font-sans tracking-wider transition-colors cursor-pointer flex-shrink-0"
                      >
                        CHOOSE FILE
                      </button>
                      <span className="text-stone-900 text-xs truncate">
                        {fileName}
                      </span>
                    </div>
                    
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                    />
                  </div>
                  {formErrors.file && (
                    <p className="text-red-400 text-[10px] font-sans pl-1 flex items-center gap-1">
                      <ShieldAlert className="w-3 h-3" /> {formErrors.file}
                    </p>
                  )}
                </div>

                {/* Field 5: Your Message */}
                <div className="space-y-1">
                  <div className="flex gap-3.5 bg-[#f5eeefff] border border-gold-500/10 focus-within:border-gold-400/50 rounded-lg px-4 py-3 transition-colors items-start">
                    <MessageSquare className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Your Message" 
                      rows="4"
                      className="bg-transparent text-stone-900 font-sans text-xs sm:text-sm tracking-wide focus:outline-none w-full placeholder-stone-500 resize-none"
                    />
                  </div>
                </div>

                {/* Interactive Custom reCAPTCHA v2 (Matches picture exactly!) */}
                
                {formErrors.recaptcha && (
                  <p className="text-red-400 text-[10px] font-sans text-center flex items-center justify-center gap-1">
                    <ShieldAlert className="w-3 h-3" /> {formErrors.recaptcha}
                  </p>
                )}

                {/* Submit button with yellow gold gradient */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative mt-20 cursor-pointer w-full bg-gradient-to-r from-[#d4b673] via-[#f2e9d3] to-[#c59b4c] text-brand-red-950 font-sans text-xs sm:text-sm font-bold tracking-[0.15em] py-3.5 rounded-lg transition-all duration-300 shadow-xl hover:shadow-gold-500/10 active:scale-98 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-brand-red-950 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>SUBMIT APPLICATION</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </>
                  )}
                </button>

              </form>

            </motion.div>
          </div>

        </div>
      </div>

      {/* SUCCESS DIALOG MODAL */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-md w-full bg-[#1c0205] border border-gold-400/40 rounded-2xl p-6 sm:p-8 text-center shadow-2xl space-y-5"
            >
              {/* Gold double line border highlights */}
              <div className="absolute inset-2 border border-gold-400/10 rounded-xl pointer-events-none" />

              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-500 to-gold-400 flex items-center justify-center text-brand-red-950 mx-auto shadow-2xl">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>

              <div className="space-y-2">
                <h3 className="font-serif text-lg sm:text-xl text-gold-300 font-bold tracking-widest uppercase">
                  Application Submitted
                </h3>
                <div className="flex items-center justify-center gap-2">
                  <div className="h-[1px] w-8 bg-gold-400" />
                  <div className="w-1.5 h-1.5 rotate-45 bg-gold-500" />
                  <div className="h-[1px] w-8 bg-gold-400" />
                </div>
              </div>

              <p className="text-gold-100/80 font-sans font-light text-xs sm:text-sm leading-relaxed">
                Thank you for applying to MRCL Infrastructure. Your resume and application details have been received successfully. Our human resource team will review your profile and get back to you shortly.
              </p>

              <button 
                onClick={() => setIsSuccessModalOpen(false)}
                className="w-full bg-[#0c0001] hover:bg-gold-500 border border-gold-500/25 text-gold-400 hover:text-brand-red-950 transition-all py-2.5 rounded-lg text-xs font-bold font-sans tracking-widest cursor-pointer"
              >
                CLOSE WINDOW
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}






