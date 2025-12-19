import React from 'react';
import Button from '@/components/common/Button';

const BenefitsGrid = () => {
  const benefits = [
    {
      title: "For patients",
      description: "Find a doctor by specialist, location, or symptom. Book and manage appointments effortlessly in Bangladesh.",
      actionText: "Choose a doctor",
      bgColor: "bg-cyan-600"
    },
    {
      title: "For doctors",
      description: "Connect with patients who need your expertise. Manage your schedule and grow your practice.",
      actionText: "Register now",
      bgColor: "bg-blue-600"
    },
    {
      title: "For clinics",
      description: "Streamline operations and efficiently manage patient appointments and resources.",
      actionText: "Get listed",
      bgColor: "bg-teal-600"
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`${benefit.bgColor} rounded-2xl p-8 text-white shadow-lg`}
            >
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="mb-6 opacity-90">{benefit.description}</p>
              <Button variant="secondary" className="bg-white text-cyan-600 hover:bg-gray-100">
                {benefit.actionText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;