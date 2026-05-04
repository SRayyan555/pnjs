export default function Different() {
  return (
    <section id="different" className="bg-white py-[100px]">
      <div className="flex flex-col items-center">

        <div className="w-full flex flex-col">
          {/* First Principles Row */}
          <div className="w-full flex justify-center">
            <div className="w-full md:px-[40px] px-[10px] mx-[60px] justify-between  flex border border-[#E8BEC1] md:pb-[60px] pb-[20px]  items-center">
              {/* Left Side: Title */}
              <div className="flex justify-center md:justify-end items-center w-[308px]">
                <span className="font-serif italic text-[18px] md:text-[45px] text-[#A3A3A3] leading-none">
                  First
                </span>
                <span className="font-serif font-bold text-[18px] md:text-[45px] text-[#E31E24] leading-none">
                  Principles
                </span>
              </div>

              {/* Right Side: Content */}
              <div className="flex flex-col gap-8 items-start max-w-[650px] w-[220px] md:w-[650px]">
                <p className="font-inter italic md:text-[32px] text-[12px] leading-[160%] text-black ">
                  A series of <span className="font-bold italic">problem solving</span> workshops held by the worlds best professors
                </p>

                <div className="flex items-center md:gap-4 gap-[8px] text-[#A3A3A3]">
                <img src="/assets/Group.svg" alt="Calendar" className="md:w-[27px] md:h-[27px] w-[16px] h-[16px]" />
                  <span className="font-display text-[#656A6B] font-medium leading-[120%] tracking-[0px] text-[14px] md:text-[28px]">
                    <span className=" font-bold">#6</span>/year
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
