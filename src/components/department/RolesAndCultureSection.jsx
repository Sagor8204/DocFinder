import Image from 'next/image';

const RolesAndCultureSection = ({ departmentData }) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Our {departmentData.name} Roles &amp; Responsibilities
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departmentData.rolesAndCulture.map((role, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {role.icon ? (
                  <Image 
                    src={role.icon} 
                    alt={role.title} 
                    width={40} 
                    height={40} 
                    className="mx-auto"
                  />
                ) : (
                  <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mx-auto">
                    <span className="text-cyan-600 font-bold">+</span>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">
                {role.title}
              </h3>
              <p className="text-[#667070] text-center">
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolesAndCultureSection;