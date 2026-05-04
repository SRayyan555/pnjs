export default function Membership() {
  return (
    <section id="membership" className="py-[70px] bg-white flex flex-col items-center text-center">
      <div className="max-w-[1280px] px-8 flex flex-col">
        {/* Label */}
        <span className="font-display font-medium text-[24px] md:text-[35px] text-[#A3A3A3] tracking-[-0.8px] leading-[110%] mb-[20px]">
          Membership
        </span>

        {/* Main Heading */}
        <h2 className="font-display font-semibold text-[42px] md:text-[72px] leading-[100%] tracking-[-1.5px] md:tracking-[-2.6px] text-[#333333] max-w-[1100px] mx-auto mb-[70px]">
          A network of those professionals,<br className="hidden md:block" /> restless & eager to learn
        </h2>

        {/* Price and Note */}
        <div className="flex flex-col gap-4 md:gap-6">
          <h3 className="font-display font-medium text-[36px] md:text-[50px] leading-[100%] tracking-[-1px] md:tracking-[-2.6px] text-[#333333]">
            INR 2 lakhs + tax
          </h3>
          <p className="font-display font-medium text-[20px] md:text-[28px] leading-[100%] text-[#666666] max-w-[850px] mx-auto">
            Invoice can be issued to enterprise or individual, as preferred
          </p>
        </div>

        {/* Footer info */}
        <div className="mt-[70px]">
          <p className="font-inter font-medium text-[16px] md:text-[20px] text-[#333333] leading-[140%]">
            Most events will be held in Mumbai <span className=" text-[#333333]">|</span> The year is 1st April to 31st March
          </p>
        </div>
      </div>
    </section>
  );
}
