"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showDepartments, setShowDepartments] = useState(false);

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
              href="/about"
              className="text-[#667070] hover:text-cyan-600 transition-colors"
            >
              About Us
            </Link>
          </li>

          <li className="py-5">
            <Link
              href="/career"
              className="text-[#667070] hover:text-cyan-600 transition-colors"
            >
              Career
            </Link>
          </li>

          <li
            className="relative py-5"
            onMouseEnter={() => setShowDepartments(true)}
            onMouseLeave={() => setShowDepartments(false)}
          >
            <Link
              href="/departments"
              className="text-[#667070] hover:text-cyan-600 transition-colors"
            >
              Departments
            </Link>

            {showDepartments && (
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 z-10 border">
                <ul>
                  <li>
                    <Link
                      href="/departments/cardiology"
                      className="block px-4 py-2 text-[#667070] hover:bg-gray-100"
                    >
                      Cardiology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/neurology"
                      className="block px-4 py-2 text-[#667070] hover:bg-gray-100"
                    >
                      Neurology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/orthopedics"
                      className="block px-4 py-2 text-[#667070] hover:bg-gray-100"
                    >
                      Orthopedics
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/departments/pediatrics"
                      className="block px-4 py-2 text-[#667070] hover:bg-gray-100"
                    >
                      Pediatrics
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          <li className="py-5">
            <Link
              href="/trust-transparency"
              className="text-[#667070] hover:text-cyan-600 transition-colors"
            >
              Trust & Transparency
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}