import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 font-inter">
      <div className="max-w-7xl mx-auto px-6 md:py-12 pt-[20px] md:pt-0 md:py-20 text-[#333336]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Links Section - 2 Columns on Mobile */}
          <div className="md:col-span-7 grid grid-cols-2 gap-8 md:pl-[115px]">
            {/* Left Navigation */}
            <div className="space-y-4">
              <FooterLink text="Home" />
              <FooterLink text="About" />
              <FooterLink text="Apply" />
              <FooterLink text="FAQ" />
            </div>

            {/* Middle Navigation */}
            <div className="space-y-4">
              <FooterLink text="Privacy Policy" />
              <FooterLink text="Terms of Service" />
              <FooterLink text="Disclaimer" />
            </div>
          </div>

          {/* Right Social Links */}
          <div className="md:col-span-5 flex flex-col w-full md:w-[280px] md:ml-auto md:mr-[76px]">
            <SocialLink text="X" />
            <SocialLink text="Linkedin" />
            <SocialLink text="Instagram" />
            <SocialLink text="Email" />
          </div>
        </div>
      </div>

      {/* Office Section */}
      <div className="border-t border-[#E6E6E6] bg-[#FCFCFC]/50">
        <div className="max-w-7xl mx-auto px-6 py-10 md:py-0 md:grid md:grid-cols-3 items-stretch">
          {/* Office Address */}
          <div className="py-2 md:pt-[42px] md:pb-[42px] md:pl-[24px] md:border-r border-[#E6E6E6] font-inter-display text-[#8a8a91]">
            <span className="block text-[15px] font-regular leading-[120%] tracking-[-0.3px] mb-3">Office</span>
            <p className="text-[17px] font-regular leading-[120%] tracking-[-1px] text-[#8a8a91]">
              16, Yashodham Center, Film City Road, Goregaon (E),<br className="hidden md:block" />
              Mumbai 400063, Maharashtra, India.
            </p>
          </div>

          {/* Trademark Info */}
          <div className="mt-10 md:mt-0 p-0 md:p-10 py-2 md:border-r border-[#E6E6E6] flex flex-col justify-center font-inter-display">
            <div className="mb-2 text-[17px]">
              <span className="font-bold text-[#c01823]">Privé</span>{" "}
              <span className="font-bold text-black">Network</span>
              <span className="text-[#8a8a91]"> is one amongst many networks</span>
            </div>
            <p className="text-[17px] tracking-[-1px] leading-[120%] text-[#8a8a91]">
              trademarked and operated by <span className="underline text-[#67686B] font-medium cursor-pointer">Rextone Digital</span> Pvt. Ltd.
            </p>
          </div>

          {/* Copyright */}
          <div className="mt-10 md:mt-0 md:p-[24px] flex flex-col justify-center font-inter-display">
            <p className="text-[17px] font-regular leading-[120%] tracking-[-1px] text-[#8a8a91] mb-2 md:mb-4">2026 Rex-Tone Digital Pvt. Ltd.</p>
            <p className="text-[17px] leading-[120%] font-medium text-black tracking-[-1px]">Designed in-house</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }) => {
  const firstLetter = text.charAt(0);
  const restOfText = text.slice(1);
  
  return (
    <div className="group cursor-pointer">
      <div className="flex flex-col items-start">
        <span className="text-[18px] md:text-[24px] font-medium leading-[120%] tracking-tight text-[#333336]">
          <span className="relative">
            {firstLetter}
            <span className="absolute -bottom-1 left-0 w-full h-[1.5px] bg-[#c01823]"></span>
          </span>
          {restOfText}
        </span>
      </div>
    </div>
  );
};

const SocialLink = ({ text }) => (
  <div className="flex items-center justify-between py-8 md:py-4 border-t border-[#E6E6E6] last:border-b cursor-pointer group hover:bg-zinc-50 transition-colors">
    <span className="text-[24px] md:text-[28px] font-medium leading-[120%] tracking-tight text-[#333336]">{text}</span>
    <span className="text-[#c01823]">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  </div>
);

export default Footer;
