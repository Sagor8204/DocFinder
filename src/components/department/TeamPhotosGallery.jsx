import Image from 'next/image';

const TeamPhotosGallery = ({ departmentData }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          People at DocFinder {departmentData.name}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <Image
                src={departmentData.teamGallery?.mainPhoto || '/images/default-team.jpg'}
                alt={`${departmentData.name} team`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {departmentData.teamGallery?.quotes?.map((quote, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md border-l-4 border-cyan-600"
              >
                <p className="text-lg italic text-[#667070] mb-4">
                  "{quote.text}"
                </p>
                <p className="text-cyan-600 font-semibold">
                  {quote.attribution}
                </p>
              </div>
            ))}
          </div>
          
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={departmentData.teamGallery?.officePhoto || '/images/default-office.jpg'}
                alt={`Office environment for ${departmentData.name}`}
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamPhotosGallery;