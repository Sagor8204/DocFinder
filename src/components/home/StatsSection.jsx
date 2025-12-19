import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      metric: "50+ Cities",
      description: "Active in Dhaka, Chittagong, Sylhet, and more."
    },
    {
      metric: "100,000+ Appointments",
      description: "Successfully scheduled appointments."
    },
    {
      metric: "5,000+ Active Doctors",
      description: "Trusted doctors on our platform."
    },
    {
      metric: "200,000+ Active Patients",
      description: "Patients connected to care."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-cyan-600 text-center mb-16">
          Leading the change in healthcare for Bangladesh.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-cyan-600 mb-3">{stat.metric}</div>
              <p className="text-lg text-[#667070]">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;