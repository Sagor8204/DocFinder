import Image from 'next/image';

const HeroDepartmentSection = ({ departmentData }) => {
  return (
    <section className="bg-gradient-to-r from-cyan-50 to-blue-50 py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {departmentData.name}
            </h1>
            {departmentData.introParagraphs.map((paragraph, index) => (
              <p 
                key={index} 
                className="text-lg text-[#667070] mb-6 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <a 
              href="#openings" 
              className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              See All Openings
            </a>
          </div>
          <div className="relative h-96 rounded-xl overflow-hidden">
            <Image
              src={departmentData.heroBackground}
              alt={`${departmentData.name} department`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDepartmentSection;