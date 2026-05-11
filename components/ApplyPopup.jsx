"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";

const ApplyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openApplyPopup', handleOpen);
    return () => window.removeEventListener('openApplyPopup', handleOpen);
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

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Popup Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-[740px] h-[calc(100%-1rem)] my-2 rounded-[30px] p-4 flex flex-col shadow-2xl z-10 overflow-hidden"
            style={{ 
                backgroundImage: "url('/applybg.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
          >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70 z-0" />

            {/* Inner Border Container */}
            <div className="relative z-10 w-full h-full border border-[#999999] rounded-[24px] p-[30px] flex flex-col overflow-hidden">
                {/* Close Button */}
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute top-6 right-6 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group hover:bg-white/30 transition-colors z-20 cursor-pointer"
                >
                  <RxCross2 className="text-white w-4 h-4 opacity-70" />
                </button>

                <div className="flex-grow overflow-y-auto pr-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex flex-col">
                    {/* Header */}
                    <div className="mb-12 mt-4 text-center">
                        <h2 className="font-inter-display text-[40px] font-medium text-white leading-[110%] tracking-[-2px]">
                            Apply
                        </h2>
                    </div>

                    {/* Form content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <FormField label="First Name*" placeholder="First Name" />
                        <FormField label="Last Name*" placeholder="Last Name" />
                        <FormField label="Email*" placeholder="Email" />
                        <FormField label="Linkedin Profile" placeholder="Linkedin Profile" />
                        <FormField label="Contact Number*" placeholder="Contact Number" />
                        <FormField label="City*" placeholder="City" />
                        <FormField label="Company Name" placeholder="Company Name" />
                        <FormField label="Your title in the company" placeholder="Your title in the company" />
                        <FormField label="Years of cumulative experience*" placeholder="Years of cumulative experience" isSelect={true} />
                        <FormField label="Company website" placeholder="Company website" />
                    </div>
                    
                    {/* Submit Button Section */}
                    <div className="mt-auto pt-12 flex justify-center">
                        <button className="px-12 py-3 border border-white rounded-full text-[#CCCCCC] text-[20px] leading-[140%] font-inter font-medium hover:bg-white hover:text-black transition-all transform active:scale-[0.98]">
                            Submit request
                        </button>
                    </div>
                </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const FormField = ({ label, placeholder, isSelect = false }) => (
    <div className="border-b border-white/40 pb-2 group transition-colors flex flex-col">
        <div className="relative flex items-center">
            <input 
                type="text" 
                placeholder={label} 
                className="w-full text-[18px] font-inter-display font-light outline-none placeholder:text-zinc-400 bg-transparent text-white leading-[130%]" 
            />
            {isSelect && (
                <span className="absolute right-0 pointer-events-none">
                    <svg width="14" height="9" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="rotate-90">
                        <path d="M0 20V16H4V20H0ZM4 16V12H8V16H4ZM8 12V8H12V12H8ZM4 8V4H8V8H4ZM0 4V0H4V4H0Z" fill="#FF4400" />
                    </svg>
                </span>
            )}
        </div>
    </div>
);

export default ApplyPopup;
