import React from 'react';
import Button from '@/components/common/Button';

const CtaSection = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#667070] mb-4">
          Ready to find your doctor?
        </h2>
        <p className="text-xl text-[#667070] mb-8">
          Join DocFinder today and experience seamless healthcare in Bangladesh.
        </p>
        <Button variant="primary" className="px-8 py-4 text-lg">
          Find a Doctor Now
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;