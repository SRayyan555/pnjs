import React from 'react';

const professors = [
  {
    name: "Oded Netzer",
    date: "2nd August, Sunday",
    topic: "Leadership Intelligence in an AI Era: Developing Quantitative Intuition",
    school: "Columbia Business School",
    image: "/professor-profile/oded.jpg",
    schoolLogo: "/professor-school/oded-school.png"
  },
  {
    name: "Niro Sivanathan",
    date: "6th September, Sunday",
    topic: "Negotiations, Influence, and Decision-making",
    school: "London Business School",
    image: "/professor-profile/niro.png",
    schoolLogo: "/professor-school/niro-school.png"
  },
  {
    name: "Jonathan Levav",
    date: "27th September, Sunday",
    topic: "Understanding consumer's judgments and choices",
    school: "Stanford Business School",
    image: "/professor-profile/jon.jpg",
    schoolLogo: "/professor-school/jon-school.png"
  },
  {
    name: "Dave Weiner",
    date: "End October",
    topic: "Customer discovery",
    school: "University California Berkeley",
    image: "/professor-profile/dave.jpg",
    schoolLogo: "/professor-school/dave-school.jpg"
  },
  {
    name: "Danny Warshay",
    date: "10th January, Sunday",
    topic: "Turn unsolved problems into entrepreneurial successes",
    school: "Brown University",
    image: "/professor-profile/danny.jpg",
    schoolLogo: "/professor-school/danny-school.jpg"
  }
];

const Firstprinciple = () => {
  return (
    <section className="py-20 px-4 bg-white font-inter flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto text-center mb-[50px]">
        <h2 className="text-[60px] md:text-[72px] font-serif mb-[30px] tracking-[-0.46px] ">
          <span className="italic font-medium text-[#656a6b] font-kepler text-[72px] leading-[110%] tracking-[-0.46px] align-middle">First</span>{" "}
          <span className="font-extrabold text-[#c01823] font-mencken text-[72px] leading-[110%] tracking-[-0.46px] align-middle">Principles</span>
        </h2>
        <p className="text-[24px] md:text-[25px] text-[#333333] md:w-[1080px] md:h-[62px]  leading-[120%] font-semibold font-inter">
          A series of problem solving workshops held by the worlds best professors. The workshops 
          are being designed to be a collaborative feedback loop and not a monologue
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-center gap-[15px]">
        {professors.map((prof, index) => (
          <ProfessorCard key={index} prof={prof} />
        ))}
      </div>

      <div className="mt-20 text-center">
        <p className="text-3xl md:text-4xl font-serif italic text-[#C41E3A]">
          More of the best professors being added soon
        </p>
      </div>
    </section>
  );
};

const ProfessorCard = ({ prof }) => {
  return (
    <div className="flex flex-col bg-white border-[1.91px] border-[#E5E5E5] overflow-hidden w-[350px] h-[470px]">
      {/* Image Area */}
      <div className="relative h-[360px] bg-zinc-100 overflow-hidden">
        {/* Logo Overlay */}
        <div className="absolute top-4 left-4 w-[45px] h-[45px] z-10 rounded-[4px] flex items-center justify-center">
           <img 
             src={prof.schoolLogo} 
             alt={`${prof.school} logo`}
             className="w-full h-full object-contain rounded-[4px]"
           />
        </div>
        
        {/* Background image */}
        <img 
          src={prof.image} 
          alt={prof.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Name and Date Overlay */}
        <div className="absolute bottom-2 left-0 right-0 text-center text-white font-inter">
          <h3 className="text-[24px] leading-[140%] font-semibold tracking-tight font-inter">{prof.name}</h3>
          <p className="text-[16px] leading-[120%] tracking-[-0.4px] font-medium font-inter">{prof.date}</p>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-5 flex flex-col items-center text-center flex-grow">
        <p className="text-[18px] font-medium leading-[1.2] text-[#333333] mb-[10px] font-inter-display tracking-[-0.5px]">
          {prof.topic}
        </p>
        
        {/* School Info */}
        <div className="mt-auto flex items-center gap-3 font-inter">
          <img 
            src={prof.schoolLogo} 
            alt="" 
            className="w-[30px] h-[30px] rounded-[4px] object-contain"
          />
          <span className="text-[19px] leading-[140%] font-regular text-black font-inter">{prof.school}</span>
        </div>
      </div>
    </div>
  );
};

export default Firstprinciple;
