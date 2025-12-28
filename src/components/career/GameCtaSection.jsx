import Image from 'next/image';

const GameCtaSection = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden my-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/game-cta.png"
          alt="Gamified work environment"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-800 opacity-90"></div>
      </div>
      
      {/* Text Overlay */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          WHAT IF YOUR JOB WAS AN ADVENTURE?
        </h2>
        <button className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
          JOIN THE TEAM!
        </button>
      </div>
    </div>
  );
};

export default GameCtaSection;