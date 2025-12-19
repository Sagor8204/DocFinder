import React from 'react';

const GlobalPresenceSection = () => {
  const cities = [
    { name: "Dhaka", abbreviation: "DHK" },
    { name: "Chittagong", abbreviation: "CTG" },
    { name: "Sylhet", abbreviation: "SYL" },
    { name: "Khulna", abbreviation: "KHL" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#667070] mb-4">
          We are building a healthier future in Bangladesh.
        </h2>
        <p className="text-xl text-[#667070] max-w-3xl mx-auto mb-12">
          Committed to connecting patients with trusted healthcare providers across the nation.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          {cities.map((city, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mb-4">
                <span className="text-cyan-600 font-bold text-lg">{city.abbreviation}</span>
              </div>
              <span className="text-[#667070] font-medium">{city.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;