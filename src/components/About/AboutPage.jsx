import React from 'react';
import { useOutletContext } from 'react-router-dom';
import AboutHero from './AboutHero';
import AboutStory from './AboutStory';
import AboutAwards from './AboutAwards';
import AboutStats from './AboutStats';
import AboutValues from './AboutValues';
import AboutCTA from './AboutCTA';

export default function AboutPage() {
  const { onOpenContact } = useOutletContext();

  return (
    <div className="bg-[#faf7f0] min-h-screen pt-20 overflow-x-hidden">
      <AboutHero />
      <AboutStory onOpenContact={onOpenContact} />
      <AboutAwards />
      <AboutStats />
      <AboutValues />
      <AboutCTA />
    </div>
  );
}
