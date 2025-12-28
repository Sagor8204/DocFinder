import { FaBullseye, FaUserLock, FaHandshake, FaBook } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa6';

const ValuesAndPerksSection = () => {
  const values = [
    { 
      id: 1, 
      title: "Focus on Impact", 
      description: "Driven by results that genuinely improve patient lives and healthcare.",
      icon: <FaBullseye className="text-2xl text-cyan-600" />
    },
    { 
      id: 2, 
      title: "Think Like an Owner", 
      description: "Take initiative, manage with autonomy, and drive continuous improvement.",
      icon: <FaUserLock className="text-2xl text-cyan-600" />
    },
    { 
      id: 3, 
      title: "Be Respectful & Honest", 
      description: "Foster open dialogue, mutual respect, and ethical conduct.",
      icon: <FaHandshake className="text-2xl text-cyan-600" />
    },
    { 
      id: 4, 
      title: "Learn & Be Curious", 
      description: "Embrace growth, share knowledge, and continuously seek better solutions.",
      icon: <FaBook className="text-2xl text-cyan-600" />
    },
  ];

  const perks = [
    { 
      id: 1, 
      title: "Vibrant Atmosphere", 
      description: "Collaborative, friendly environment, team events, and a positive workspace.",
      icon: <FaCheck className="text-xl text-cyan-600" />
    },
    { 
      id: 2, 
      title: "Learning & Development", 
      description: "Opportunities for skill enhancement, workshops, and mentorship.",
      icon: <FaCheck className="text-xl text-cyan-600" />
    },
    { 
      id: 3, 
      title: "Health & Wellness", 
      description: "Comprehensive health benefits, ergonomic workspaces, and wellness programs.",
      icon: <FaCheck className="text-xl text-cyan-600" />
    },
    { 
      id: 4, 
      title: "Competitive Compensation", 
      description: "Attractive salaries and performance-based incentives.",
      icon: <FaCheck className="text-xl text-cyan-600" />
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Our Values Column */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-[#667070]">Our Values</h2>
            
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.id} className="flex items-start">
                  <div className="mr-4 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#667070] mb-1">{value.title}</h3>
                    <p className="text-[#667070]">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Our Perks Column */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-[#667070]">Perks</h2>
            
            <div className="space-y-6">
              {perks.map((perk) => (
                <div key={perk.id} className="flex items-start">
                  <div className="mr-4 mt-1">
                    {perk.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#667070] mb-1">{perk.title}</h3>
                    <p className="text-[#667070]">{perk.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValuesAndPerksSection;