export default function Tagline() {
  return (
    <section className="relative min-h-screen h-auto flex flex-col items-center justify-center text-white text-center px-[40px] overflow-hidden pt-[240px] pb-[100px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/tagline.png')" }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className=" relative z-10 flex flex-col gap-[163px]">
        {/* Upper Tagline */}
        <h2 
          className="font-[family-name:var(--font-inter)] font-[700] md:text-[66px] text-[35px] leading-[120%] tracking-[-1.46px] text-center"
        >
          a network for ambitious professionals <br />
          who are coming together to <br />
          learn & solve problems
        </h2>

        {/* Lower Section Text */}
        <div 
          className="font-[family-name:var(--font-inter-display)] text-center tracking-[-0.5px]  font-[400] text-[20px] md:text-[50px] leading-[100%] flex items-center justify-center gap-4"
        >
          <span>Learn. Solve.</span>
          <span className="bg-red-600 font-bold px-4 py-1 inline-block">
            Actionable intelligence
          </span>
        </div>
      </div>
    </section>
  );
}
