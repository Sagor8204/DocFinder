import Image from 'next/image';

const HeroCareerSection = () => {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/career-hero.jpg"
          alt="DocFinder office environment"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 md:p-12 bg-white rounded-lg shadow-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cyan-600">
          Shape the Future of Healthcare in Bangladesh!
        </h1>
        
        <p className="text-[#667070] text-lg mb-4">
          Our team is a mix of passionate individuals dedicated to innovation. We foster a collaborative and dynamic atmosphere where your contributions truly make a difference.
        </p>
        
        <p className="text-[#667070] text-lg mb-8">
          If you're eager to build meaningful solutions and grow your career, you've found your place. We're always looking for talent across all domains!
        </p>
        
        <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
          See All Openings
        </button>
      </div>
    </div>
  );
};

export default HeroCareerSection;