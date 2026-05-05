"use client";
import React, { useState, useEffect } from 'react';

const FaqPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openFaqPopup', handleOpen);
    return () => window.removeEventListener('openFaqPopup', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white w-[1200px] h-[90vh] rounded-[30px] p-10 flex flex-col shadow-2xl overflow-hidden z-10">
        {/* Close Button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 w-10 h-10 bg-[#EEEEEE] rounded-full flex items-center justify-center group hover:bg-[#E0E0E0] transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#333333]">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <h2 className="text-4xl font-black text-black uppercase italic mb-8">FAQs</h2>
        
        <div className="flex-grow overflow-y-auto pr-4">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">What is CSuite Network?</h3>
              <p className="text-zinc-600">A network for ambitious professionals coming together to learn and solve complex problems.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">How do I join?</h3>
              <p className="text-zinc-600">You can apply for membership through our membership section on the home page.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPopup;
