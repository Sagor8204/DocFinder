import { useState, useEffect } from 'react';
import Link from 'next/link';
import { departments } from '@/data/departments';

const DepartmentsDropdown = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted || !isOpen) return null;

  return (
    <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md z-50 border border-gray-200">
      <div className="py-2">
        {departments.map((dept) => (
          <Link
            key={dept.slug}
            href={`/department/${dept.slug}`}
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors duration-200"
            onClick={onClose}
          >
            {dept.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DepartmentsDropdown;