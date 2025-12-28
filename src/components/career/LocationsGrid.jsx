import { FaBuilding } from 'react-icons/fa';

const LocationsGrid = () => {
  const locations = [
    { id: 1, name: 'Dhaka', icon: <FaBuilding /> },
    { id: 2, name: 'Chittagong', icon: <FaBuilding /> },
    { id: 3, name: 'Sylhet', icon: <FaBuilding /> },
    { id: 4, name: 'Khulna', icon: <FaBuilding /> },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#667070]">
          Find your dream role across Bangladesh
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {locations.map((location) => (
            <div 
              key={location.id} 
              className="bg-white rounded-lg shadow-md p-6 text-center border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="text-cyan-600 text-3xl">
                  {location.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#667070]">{location.name}</h3>
              <button className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                See Openings
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsGrid;