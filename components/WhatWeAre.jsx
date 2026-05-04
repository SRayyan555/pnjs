export default function WhatWeAre() {
  const headingStyle = "font-display font-semibold text-[72px] leading-[120%] tracking-[-2.6px] text-[#333333] text-center";
  const paragraphStyle = "font-inter font-medium text-[32px] leading-[130%] tracking-[0px] text-[#333333] text-center max-w-[540px] mx-auto";

  return (
    <section id="what-we-are" className="pb-[100px] bg-white flex flex-col items-center gap-[100px] border-b border-[#67686B]">
      {/* What we are Section */}
      <div className="w-full max-w-[1280px] px-8 flex flex-col gap-[40px]">
        <h2 className={headingStyle}>What we are</h2>
        
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-24 items-start">
          <div className="flex flex-col">
            <p className={paragraphStyle}>
              A network of professionals from the best companies. You are who you spend time with - fueling motivation.
            </p>
          </div>
          <div className="flex flex-col gap-[40px]">
            <p className={paragraphStyle}>
              We are focused on solving problems, so the DNA of everything we do revolves around it.
            </p>
            <p className={paragraphStyle}>
              Stay relevant, The future belongs to those who keep up - because change doesn't wait.
            </p>
          </div>
        </div>
      </div>

      {/* What we are not Section */}
      <div className="w-full max-w-[1280px] px-8 flex flex-col gap-[40px]">
        <h2 className={headingStyle}>
          What we are <span className="text-[#E31E24]">not</span>
        </h2>

        <div className="flex justify-between items-center px-[40px]">
          <div className=" ">
            <h3 className=" font-display font-semibold text-[40px] leading-[120%] tracking-[-1.5px] text-[#333333] text-left max-w-[400px]">
              Not executive education
            </h3>
          </div>
          <div className="flex md:pl-20">
            <p className="font-sans md:w-[650px]  font-medium text-[32px] leading-[120%] tracking-[0px] text-[#333333] ">
              Anyone can organise executive education,<br/> its the peer group that matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
