import React from 'react';
import { motion } from 'motion/react';
import { FileText, Award, Gavel, Scale, AlertTriangle, CheckSquare, ChevronRight, Home as HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TermsConditions() {
  const lastUpdated = "July 18, 2026";

  const terms = [
    {
      icon: Gavel,
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this platform. All interactions, bookings, or requests made through the portal are governed by these policies."
    },
    {
      icon: Award,
      title: "2. Intellectual Property Rights",
      content: "All material, design concepts, plotted layouts, luxury blueprints, 3D renders, video walk-throughs, custom logos, and typographical structures displayed on this website are the intellectual property of MRCL Infrastructure Pvt Ltd. No content may be reproduced, copied, or modified without prior written authorization."
    },
    {
      icon: CheckSquare,
      title: "3. Booking & Site Visit Agreements",
      content: "Submitting a booking request, contacting our agents, or requesting a physical site visit does not constitute a legally binding property allocation or transaction. Formal allocations, price commitments, and site bookings are only valid upon signing our official Bilateral Builder-Buyer Agreement and paying the prescribed advance booking amount."
    },
    {
      icon: AlertTriangle,
      title: "4. Disclaimer of Representations",
      content: "While we make every effort to display highly accurate, up-to-date project blueprints, photographs, and aerial plot boundaries, please note that some graphics are artistic conceptualizations. Actual construction configurations, materials, and infrastructure amenities may be adjusted in compliance with local governmental approvals and RERA guidelines."
    },
    {
      icon: Scale,
      title: "5. Jurisdiction & Disputes",
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of India. Any dispute, claim, or controversy arising out of or relating to these terms or using our online/offline facilities shall be subject to the exclusive jurisdiction of the competent courts in Bengaluru, Karnataka."
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
            TERMS & CONDITIONS
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
        <span className="text-stone-700 font-medium">Terms & Conditions</span>
      </div>

      {/* Main Content Layout */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 mt-8">
        <div className="bg-[#fffdf9] border border-[#c5a85c]/30 rounded-3xl p-6 sm:p-10 shadow-xl space-y-8">
          
          {/* Welcome note */}
          <div className="border-b border-stone-100 pb-6">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#4a0105] mb-3">
              Standard Corporate Terms of Use
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify font-sans">
              Welcome to the digital portal of MRCL Infrastructure Pvt Ltd. These Terms and Conditions outline the rules, obligations, and legal boundaries of our relationship as you explore our premium gated communities, high-end layouts, and signature villas. By navigating our content or submitting enquiry forms, you fully consent to these conditions.
            </p>
          </div>

          {/* Core Sections */}
          <div className="space-y-6">
            {terms.map((term, idx) => {
              const IconComp = term.icon;
              return (
                <div key={idx} className="flex gap-4 items-start p-4 rounded-2xl hover:bg-stone-50/50 transition-colors">
                  <div className="p-2.5 rounded-xl bg-[#4a0105]/5 text-[#8c1c24] flex-shrink-0 border border-[#8c1c24]/10">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 mb-1.5">
                      {term.title}
                    </h3>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed text-justify font-sans">
                      {term.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slogan strip */}
          <div className="bg-gradient-to-br from-[#4d0206] to-[#2c0104] p-6 rounded-2xl text-center border border-[#c5a85c]/30 shadow-md">
            <h4 className="font-serif text-[#c5a85c] text-xs sm:text-sm tracking-[0.2em] font-bold uppercase mb-2">
              BEYOND LUXURY. ABSOLUTE COMPLIANCE.
            </h4>
            <p className="text-stone-300 text-[11px] sm:text-xs leading-relaxed max-w-xl mx-auto">
              Any questions, requests for clarification, or formal inquiries regarding our digital conditions can be directed to our administrative desk.
            </p>
            <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono font-bold text-white">
              <span>Email: legal@mrclinfrastructure.com</span>
              <span className="opacity-30">|</span>
              <span>Headquarters: Bengaluru, Karnataka</span>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}
