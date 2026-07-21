import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Homepage/Hero';
import Features from '../components/Homepage/Features';
import Projects from '../components/Homepage/Projects';
import About from '../components/Homepage/About';
import Amenities from '../components/Homepage/Amenities';
import GalleryPreview from '../components/Homepage/GalleryPreview';
import WhyChooseUs from '../components/Homepage/WhyChooseUs';
import Testimonial from '../components/Homepage/Testimonial';
import BlogPreview from '../components/Homepage/BlogPreview';
import CTA from '../components/Homepage/CTA';

export default function Home() {
  const { onOpenContact } = useOutletContext();

  const handleExploreVillas = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewProjects = () => {
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* 0. Cinematic Scroll Storytelling Engine */}
      

      {/* 1. Cinematic Hero visual with watch video modal */}
      <Hero 
        onOpenContact={onOpenContact} 
        onExploreVillas={handleExploreVillas}
        onViewProjects={handleViewProjects}
      />

      {/* 2. Floating embossed features card list */}
      <Features />
       <About onOpenContact={onOpenContact} />

      {/* 3. Luxurious 4 BHK Villa Projects Grid with Details drawer */}
      <Projects onOpenContact={onOpenContact} />

      {/* 4. Elegant Brand Philosophy About Section */}
     

      {/* 5. Gated Estate Amenities Grid & Highlight Section */}
      <Amenities onOpenContact={onOpenContact} />

      {/* 5b. Curated Estate Showcase Gallery Preview */}
      <GalleryPreview />

      {/* 6. Professional Credibility Stats & Bento Grid */}
      <WhyChooseUs onOpenContact={onOpenContact} />

      {/* 7. Client Success Stories quote slider */}
      <Testimonial />

      {/* 7b. Editorial Insight & Perspective Journal Preview */}
      {/* <BlogPreview /> */}

      {/* 8. Call To Action Visit Booking Section */}
      <CTA onOpenContact={onOpenContact} />
    </div>
  );
}
