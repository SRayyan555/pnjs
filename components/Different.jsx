export default function Different() {
  return (
    <section id="different" className="bg-white py-[50px] md:py-[100px]">
      <div className="flex flex-col items-center">

        <div className="w-full flex flex-col">
          {/* First Principles Row */}
          <div className="flex justify-center">
            <div className="md:px-[40px] w-full  md:mx-[60px] mx-[10px] justify-between  flex border-b border-[#E8BEC1] md:pb-[60px] pb-[20px]  items-center">
              {/* Left Side: Title */}
              <div className="flex justify-between md:justify-end items-center md:w-[308px] w-[120px]">
                <span className="font-serif italic text-[18px] md:text-[45px] text-[#A3A3A3] leading-none">
                  First
                </span>
                <span className="font-serif font-bold text-[18px] md:text-[45px] text-[#E31E24] leading-none">
                  Principles
                </span>
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col md:gap-8 gap-[8px] items-start max-w-[650px] w-[220px] md:w-[650px]">
                <p className="font-inter italic md:text-[32px] text-[12px] leading-[160%] text-black ">
                  A series of <span className="font-bold italic">problem solving</span> workshops held by the worlds best professors
                </p>

                <div className="flex items-center md:gap-4 gap-[8px] text-[#A3A3A3]">
                  <img src="/assets/Group.svg" alt="Calendar" className="md:w-[27px] md:h-[27px] w-[16px] h-[16px]" />
                  <span className="font-display text-[#656A6B] font-medium leading-[120%] tracking-[0px] text-[14px] md:text-[28px]">
                    <span className="text-[14px] md:text-[28px] font-bold">#6</span>/year
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional features can be added as similar rows here */}
        </div>
      </div>
    </section>
  );
}
