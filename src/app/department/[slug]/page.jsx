// src/app/department/[slug]/page.jsx
import HeroDepartmentSection from '@/components/department/HeroDepartmentSection';
import RolesAndCultureSection from '@/components/department/RolesAndCultureSection';
import TeamPhotosGallery from '@/components/department/TeamPhotosGallery';
import TestimonialSection from '@/components/department/TestimonialSection';
import DepartmentPositionsSection from '@/components/department/DepartmentPositionsSection';
import { getDepartmentBySlug } from '@/data/departments'; // Import your mock data helper

export async function generateMetadata({ params }) {
  const { slug } = params;
  const departmentData = getDepartmentBySlug(slug);

  if (!departmentData) {
    return {
      title: 'Department not found',
    };
  }

  return {
    title: `${departmentData.name} | DocFinder`,
    description: `Explore career opportunities in ${departmentData.name} at DocFinder`,
  };
}

export default function DepartmentPage({ params }) {
  const { slug } = params;
  const departmentData = getDepartmentBySlug(slug);

  if (!departmentData) {
    // Handle case where department is not found (e.g., show 404 or redirect)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Department not found</h1>
          <p className="text-gray-600">The department you're looking for doesn't exist.</p>
          <a 
            href="/career" 
            className="mt-4 inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
          >
            Browse All Departments
          </a>
        </div>
      </div>
    );
  }

  return (
    <main>
      <HeroDepartmentSection departmentData={departmentData} />
      <RolesAndCultureSection departmentData={departmentData} />
      <TeamPhotosGallery departmentData={departmentData} />
      <TestimonialSection departmentData={departmentData} />
      <DepartmentPositionsSection departmentData={departmentData} />
    </main>
  );
}