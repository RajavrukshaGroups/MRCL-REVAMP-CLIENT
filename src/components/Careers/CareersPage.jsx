import React from 'react';
import CareersHeader from './CareersHeader';
import CareersContent from './CareersContent';

export default function CareersPage() {
  return (
    <div className="bg-[#0a0001] min-h-screen pt-20 overflow-x-hidden">
      <CareersHeader />
      <CareersContent />
    </div>
  );
}
