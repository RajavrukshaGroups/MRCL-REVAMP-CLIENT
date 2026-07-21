import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactModal from '../components/Contact/ContactModal';

export default function MainLayout() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [preselectedProject, setPreselectedProject] = useState('');

  const handleOpenContact = (project = '') => {
    setPreselectedProject(project);
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
    setPreselectedProject('');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main navigation Header */}
      <Header onOpenContact={handleOpenContact} />

      {/* Main page content area */}
      <main className="flex-grow">
        <Outlet context={{ onOpenContact: handleOpenContact }} />
      </main>

      {/* Global client-booking Footer */}
      <Footer onOpenContact={handleOpenContact} />

      {/* Global Booking Dialog Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={handleCloseContact}
        preselectedProject={preselectedProject}
      />
    </div>
  );
}
