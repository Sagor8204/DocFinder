const DepartmentPositionsSection = ({ departmentData }) => {
  return (
    <section className="py-20 bg-white" id="openings">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Explore Open {departmentData.name} Positions at DocFinder
        </h2>
        
        <div className="space-y-6 max-w-3xl mx-auto">
          {departmentData.openPositions?.map((position) => (
            <div 
              key={position.id} 
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <p className="text-cyan-600 font-medium mt-1">{position.location}</p>
                </div>
                <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300 whitespace-nowrap">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentPositionsSection;