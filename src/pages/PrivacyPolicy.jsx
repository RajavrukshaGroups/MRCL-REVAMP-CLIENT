import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Lock, FileText, CheckCircle2, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  const lastUpdated = "July 18, 2026";

  const sections = [
    {
      icon: Eye,
      title: "1. Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our premium real estate projects, subscribe to our newsletter, or contact us. This may include your name, phone number, email address, mailing address, and preferred project details."
    },
    {
      icon: Lock,
      title: "2. How We Use Your Information",
      content: "Your information is used strictly to facilitate our booking services, organize site visits, respond to user inquiries, send corporate newsletters, and improve the customized luxury experience of our developments. We never sell, rent, or lease your personal data to third parties."
    },
    {
      icon: Shield,
      title: "3. Information Security & Storage",
      content: "We implement advanced technical and organizational security measures to protect your personal data from unauthorized access, loss, or alteration. All customer lead information is stored in highly secure environments with restricted access control protocols."
    },
    {
      icon: FileText,
      title: "4. Cookies & Tracking Technologies",
      content: "We may use cookies and similar tracking technologies to analyze web traffic, optimize your browsing experience, and understand which luxury villa styles or plotted layout configurations generate the most interest. You can manage your cookie preferences through your individual browser settings."
    },
    {
      icon: CheckCircle2,
      title: "5. Your Privacy Rights",
      content: "Depending on your location, you have the right to request access to the personal data we hold about you, request corrections to inaccurate details, or demand the complete erasure of your record from our lead database. Contact us at info@mrclinfrastructure.com to execute these rights."
    }
  ];

  return (
    <div className="bg-[#FAF6F0] min-h-screen text-[#1a0002] font-sans selection:bg-[#8c1c24] selection:text-white pt-20 pb-16 overflow-x-hidden">
      
      {/* Ornate Header Banner */}
      <section className="relative w-full h-[260px] flex items-center justify-center bg-gradient-to-r from-[#4a0105] via-[#2c0104] to-[#120002] overflow-hidden border-b-2 border-[#c5a85c]">
        {/* Decorative corner accents */}
        <div className="absolute right-10 top-10 opacity-30 flex gap-1 pointer-events-none">
          <div className="grid grid-cols-4 gap-1">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#c5a85c]" />
            ))}
          </div>
        </div>

        {/* Subtle background glow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#8a1a24] opacity-[0.15] blur-[80px]" />

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <span className="font-sans text-[10px] tracking-[0.3em] text-[#c5a85c] font-bold uppercase block mb-2">
            LEGAL INFORMATION CENTER
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-[#faf7f0] via-[#e2c58a] to-[#b5802f] tracking-[0.08em] uppercase leading-tight filter drop-shadow">
            PRIVACY POLICY
          </h1>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c5a85c] to-transparent mx-auto my-3" />
          <p className="font-serif text-stone-300 text-xs tracking-wider uppercase font-light italic">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 flex items-center gap-2 text-xs text-stone-500 font-sans">
        <Link to="/" className="hover:text-[#8c1c24] transition-colors flex items-center gap-1">
          <HomeIcon className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-stone-700 font-medium">Privacy Policy</span>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        <div className="bg-[#fffdf9] border border-[#c5a85c]/30 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Welcome note */}
          <div className="border-b border-stone-100 pb-6">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4a0105] mb-3">
              Commitment to Confidentiality
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify font-sans">
              At MRCL Infrastructure, we believe that trust and transparency are the foundational cornerstones of luxury real estate development. We are committed to safeguarding the privacy of our visitors and customers. This Privacy Policy details the policies and procedures governing how your personal data is collected, processed, stored, and protected during your interactions with our corporate digital platforms.
            </p>
          </div>

          {/* Core Sections */}
          <div className="space-y-6">
            {sections.map((sec, idx) => {
              const IconComp = sec.icon;
              return (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-stone-50/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-[#4a0105]/5 text-[#8c1c24] flex-shrink-0 border border-[#8c1c24]/10">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-1.5">
                      {sec.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify">
                      {sec.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slogan strip */}
          <div className="bg-gradient-to-br from-[#4d0206] to-[#2c0104] p-6 rounded-2xl text-center border border-[#c5a85c]/30 shadow-md">
            <h4 className="font-serif text-[#c5a85c] text-xs sm:text-sm tracking-[0.2em] font-bold uppercase mb-2">
              BUILDING TRUST FOR GENERATIONS
            </h4>
            <p className="text-stone-300 text-[11px] sm:text-xs leading-relaxed max-w-xl mx-auto">
              If you have any queries, comments, or data removal requests regarding this Privacy Policy, please feel free to reach our dedicated compliance officer.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono font-bold text-white">
              <span>Email: info@mrclinfrastructure.com</span>
              <span className="opacity-30">|</span>
              <span>Phone: +91 89893 99899</span>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
