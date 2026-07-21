import React from 'react';
import FounderHero from './FounderHero';
import FounderProfile from './FounderProfile';
import FounderPillars from './FounderPillars';
import FounderCTA from './FounderCTA';

export default function FounderPage() {
  return (
    <div className="bg-gradient-to-b from-[#180205] via-[#100102] to-[#120002] text-white min-h-screen pt-20 overflow-x-hidden">
      <FounderHero />
      <FounderProfile />
      <FounderPillars />
      <FounderCTA />
    </div>
  );
}
