import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-zinc-100 ">
      <div className="max-w-7xl mx-auto px-4 text-[#333336]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Left Navigation */}
          <div className="md:col-span-3 space-y-[12px] w-auto pt-[32px] pl-[115px]">
            <FooterLink text="Home" />
            <FooterLink text="About" />
            <FooterLink text="Apply" />
            <FooterLink text="FAQ" />
            <FooterLink text="Contact" />
          </div>

          {/* Middle Navigation */}
          <div className="md:col-span-4 space-y-[12px] w-auto pt-[32px]">
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Terms of Service" />
            <FooterLink text="Disclaimer" />
          </div>

          {/* Right Social Links */}
          <div className="md:col-span-5 flex flex-col w-[280px] h-[312px] ml-auto mr-[76px]">
            <SocialLink text="X" />
            <SocialLink text="LinkedIn" />
            <SocialLink text="Instagram" />
            <SocialLink text="Email" />
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="border-t border-[#E6E6E6]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">
          {/* Office Address */}
          <div className="pt-[42px] pl-[24px] border-r border-[#E6E6E6] font-inter-display text-[#8a8a91]">
            <span className="block text-[15px] font-regular leading-[120%]  tracking-[-0.3px] mb-[12px]">Office</span>
            <p className="text-[17px] font-regular leading-[120%] tracking-[-1px] ">
              16, Yashodham Center, Film City Road, Goregaon (E),<br />
              Mumbai 400063, Maharashtra, India.
            </p>
          </div>

          {/* Trademark Info */}
          <div className="p-10 border-r border-zinc-200 flex flex-col justify-center items-center text-left font-inter-display">
            <div className="mb-2 inline-block">
              <span className="font-bold text-[#c01823]">CSuite</span>{" "}
              <span className="font-bold text-black">Network</span>
            </div>
            <p className="text-[17px] tracking-[-1px] leading-[120%] text-[#8a8a91] max-w-[280px]">
              is one amongst many networks trademarked and operated by <span className="underline text-[#67686B] font-medium cursor-pointer">Rextone Digital</span> Pvt. Ltd.
            </p>
          </div>

          {/* Copyright */}
          <div className="p-[24px] flex flex-col justify-center font-inter-display">
            <p className="text-[17px] font-regular leading-[120%] tracking-[-1px] text-[#8a8a91] mb-[16px]">2026 Rex-Tone Digital Pvt. Ltd.</p>
            <p className="text-[17px] leading-[120%] font-medium text-black tracking-[-1px]">Designed in-house</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ text }) => (
  <div className="group cursor-pointer ">
    <span className="text-[28px] font-medium block leading-[120%] tracking-[-1.3px]">{text}</span>
    <div className="w-[14px] h-[1px] bg-[#c01823]"></div>
  </div>
);

const SocialLink = ({ text }) => (
  <div className="flex items-center justify-between flex-grow border-t border-[#E6E6E6] last:border-b cursor-pointer group hover:bg-zinc-50 transition-colors px-2">
    <span className="text-[28px] font-medium leading-[120%] tracking-[-1.3px]">{text}</span>
    <span className="text-[#c01823] text-2xl font-light transform group-hover:translate-x-1 transition-transform">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18l6-6-6-6" />
      </svg>
    </span>
  </div>
);

export default Footer;
