import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/assets/hero.png')" }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* <Navbar /> */}

      <div className="text-center z-10 px-4 flex items-center justify-center h-full">
        <h1 
          className="font-[family-name:var(--font-inter-display)] font-[800] text-[130px] leading-[100%] lowercase"
          style={{ 
            letterSpacing: "-4px",
            textAlign: "center",
          }}
        >
          because of <br />
          uncertainty <br />
          ahead
        </h1>
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
    </section>
  );
}
