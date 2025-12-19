import React from 'react';

const HeroSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-cyan-600 mb-6 leading-tight">
          Helping people live longer, healthier lives.
        </h1>
        <p className="text-xl text-[#667070] max-w-3xl mx-auto leading-relaxed">
          DocFinder connects patients with the right doctors quickly and efficiently across Bangladesh. 
          Our platform streamlines the healthcare journey, making it easier for you to find the care you need when you need it.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;