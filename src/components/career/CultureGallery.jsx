import Image from 'next/image';

const CultureGallery = () => {
  const galleryImages = [
    { id: 1, src: '/images/dhaka-office.jpg', alt: 'Office environment' },
    { id: 2, src: '/images/team-event.jpg', alt: 'Team event' },
    { id: 3, src: '/images/collaboration.jpg', alt: 'Team collaboration' },
    { id: 4, src: '/images/workplace.jpg', alt: 'Workplace' },
    { id: 5, src: '/images/meeting.jpg', alt: 'Team meeting' },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-[#667070]">Together at DocFinder</h2>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
          {galleryImages.map((image) => (
            <div key={image.id} className="aspect-square overflow-hidden rounded-lg shadow-md">
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        
        {/* Text Box */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-xl text-[#667070] mb-6">
            A picture is worth a thousand words, so instead of reading about us, watch what life at DocFinder looks like.
          </p>
          <button className="border border-gray-300 text-[#667070] hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-300">
            View on Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default CultureGallery;