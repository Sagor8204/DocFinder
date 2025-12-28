'use client';
import { useState } from 'react';

const OpenPositionsSection = () => {
  // Mock job data
  const mockJobs = [
    {
      id: 1,
      title: "Senior Software Engineer - Backend",
      department: "Engineering",
      location: "Dhaka, Bangladesh",
      description: "Develop and maintain scalable backend services for our healthcare platform."
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      description: "Build responsive and accessible user interfaces for our healthcare applications."
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "Dhaka, Bangladesh",
      description: "Drive product strategy and roadmap for our healthcare solutions."
    },
    {
      id: 4,
      title: "UI/UX Designer",
      department: "Product",
      location: "Chittagong, Bangladesh",
      description: "Design intuitive user experiences for our healthcare platform users."
    },
    {
      id: 5,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Dhaka, Bangladesh",
      description: "Execute marketing campaigns to promote our healthcare services."
    },
    {
      id: 6,
      title: "Data Analyst",
      department: "Operations",
      location: "Remote",
      description: "Analyze healthcare data to drive insights and improve patient outcomes."
    }
  ];

  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');

  // Get unique locations and departments
  const locations = ['All Locations', 'Dhaka', 'Chittagong', 'Remote'];
  const departments = ['All Departments', ...new Set(mockJobs.map(job => job.department))];

  // Filter jobs based on selections
  const filteredJobs = mockJobs.filter(job => {
    const locationMatch = selectedLocation === 'All Locations' || job.location.includes(selectedLocation);
    const departmentMatch = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
    return locationMatch && departmentMatch;
  });

  // Group jobs by department
  const groupedJobs = filteredJobs.reduce((acc, job) => {
    if (!acc[job.department]) {
      acc[job.department] = [];
    }
    acc[job.department].push(job);
    return acc;
  }, {});

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-cyan-600 text-center">
          Explore Open Positions at DocFinder
        </h2>
        
        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="flex-1">
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              {locations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <select 
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-600 focus:border-transparent"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map(department => (
                <option key={department} value={department}>{department}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="space-y-10">
          {Object.entries(groupedJobs).map(([dept, jobs]) => (
            <div key={dept}>
              <h3 className="text-2xl font-semibold mb-6 text-[#667070]">
                {dept} ({jobs.length})
              </h3>
              
              <div className="space-y-4">
                {jobs.map(job => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div className="mb-2 md:mb-0 md:mr-4">
                        <h4 className="text-xl font-semibold text-[#667070]">{job.title}</h4>
                        <p className="text-[#667070]">{job.location}</p>
                      </div>
                      <button className="border border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 whitespace-nowrap">
                        Details
                      </button>
                    </div>
                    <p className="mt-3 text-[#667070]">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* No matches message */}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-[#667070]">
                No positions match your current filters. Try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
        
        {/* Final CTA */}
        <div className="mt-16 text-center py-8">
          <p className="text-lg text-[#667070]">
            Didn't find the position you're looking for? We'd still love to{' '}
            <a href="/contact" className="text-cyan-600 underline hover:text-cyan-800">hear from you</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpenPositionsSection;