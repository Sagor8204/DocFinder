"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import DepartmentsDropdown from "@/components/header/DepartmentsDropdown";

export default function Header() {
  const [showDepartments, setShowDepartments] = useState(false);
  const pathname = usePathname();

  const handleMouseEnter = () => setShowDepartments(true);
  const handleMouseLeave = () => setShowDepartments(false);

  return (
    <header className="max-w-253.75 px-5 mx-auto bg-white backdrop-blur-md flex justify-between items-center">
      <Link href="/" className="shrink-0">
        <Image
          src="/images/logo.png"
          width={120}
          height={100}
          alt="Company Logo"
        />
      </Link>

      <nav className="ml-auto">
        <ul className="flex space-x-8 items-center text-sm">
          <li className="py-5">
            <Link
              href="/"
              className={`hover:text-cyan-600 transition-colors ${
                pathname === "/" ? "text-cyan-600" : "text-[#667070]"
              }`}
            >
              About Us
            </Link>
          </li>

          <li className="py-5">
            <Link
              href="/career"
              className={`hover:text-cyan-600 transition-colors ${
                pathname === "/career" ? "text-cyan-600" : "text-[#667070]"
              }`}
            >
              Career
            </Link>
          </li>

          <li
            className="relative py-5"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="#"
              className={`hover:text-cyan-600 transition-colors ${
                pathname.startsWith("/department") ? "text-cyan-600" : "text-[#667070]"
              }`}
            >
              Departments
            </Link>

            <DepartmentsDropdown
              isOpen={showDepartments}
              onClose={() => setShowDepartments(false)}
            />
          </li>

          <li className="py-5">
            <Link
              href="/trust-transparency"
              className={`hover:text-cyan-600 transition-colors ${
                pathname === "/trust-transparency"
                  ? "text-cyan-600"
                  : "text-[#667070]"
              }`}
            >
              Trust & Transparency
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}