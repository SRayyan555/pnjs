export default function VisionSection() {
    return (
      <section className="bg-[#E40000] flex items-center justify-center h-screen text-white sticky top-0 -z-10">
        <div className=" mx-auto px-10 py-20 lg:py-28">
  
          {/* Content Wrapper */}
          <div className="h-full">
  
            {/* Paragraph 1 */}
            <p className="font-inter text-3xl sm:text-4xl lg:text-[56px] font-semibold leading-[110%] tracking-[-3px]">
              Our vision is to bring top academic and business minds together to
              solve problems, generate ideas, and collaborate with intent.
            </p>
  
            {/* Paragraph 2 */}
            <p className="mt-10 lg:mt-14 font-display text-3xl sm:text-4xl lg:text-[56px] font-semibold leading-[110%] tracking-[-3px]">
              We aim to create structured frameworks where insights turn into
              action and collective intelligence drives better decisions.
            </p>
  
            {/* Signature Block */}
            <div className="mt-16 lg:mt-24">
              
              {/* Signature (script style) */}
              <p className="text-2xl sm:text-3xl font-brittany signature">
                Saurabh Goswamy
              </p>
  
              {/* Name */}
              <p className="mt-7 text-sm sm:text-[17px] font-medium font-inter text-white tracking-[-1px]">
                Saurabh Goswamy
              </p>
  
            </div>
          </div>
  
        </div>
      </section>
    );
  }