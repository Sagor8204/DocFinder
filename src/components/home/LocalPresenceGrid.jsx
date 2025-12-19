import React from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';

const LocalPresenceGrid = () => {
  const cities = [
    {
      name: "Dhaka",
      image: "/images/dhaka.jpg",
      alt: "Dhaka city skyline"
    },
    {
      name: "Chittagong",
      image: "/images/chittagong.jpg",
      alt: "Chittagong port city"
    },
    {
      name: "Sylhet",
      image: "/images/sylhet.jpg",
      alt: "Sylhet tea gardens"
    },
    {
      name: "Khulna",
      image: "/images/khulna.jpg",
      alt: "Khulna mangrove forest"
    },
    {
      name: "Rajshahi",
      image: "/images/rajshahi.jpg",
      alt: "Rajshahi mango orchards"
    },
    {
      name: "Barisal",
      image: "/images/barisal.jpg",
      alt: "Barisal river city"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#667070]">
          Improving lives in Bangladeshi cities.
        </h2>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cities.map((city, index) => (
          <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg group">
            <div className="relative h-64 w-full">
              <Image
                src={city.image}
                alt={city.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{city.name}</h3>
                <Button variant="primary">Find a doctor</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocalPresenceGrid;