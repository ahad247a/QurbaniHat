// app/components/Navbar.jsx
"use client"; // যেহেতু আমরা ইন্টারঅ্যাকশন ব্যবহার করবো
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-green-600 flex items-center">
              <span className="mr-2">🐄</span> QurbaniHat
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium transition">Home</Link>
            <Link href="/animals" className="text-gray-700 hover:text-green-600 font-medium transition">All Animals</Link>
            <Link href="/login" className="text-gray-700 hover:text-green-600 font-medium">Login</Link>
            <Link href="/register" className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition shadow-md">
              Register
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block px-3 py-2 text-gray-700 font-medium">Home</Link>
            <Link href="/animals" className="block px-3 py-2 text-gray-700 font-medium">All Animals</Link>
            <Link href="/login" className="block px-3 py-2 text-gray-700 font-medium">Login</Link>
            <Link href="/register" className="block px-3 py-2 text-green-600 font-bold">Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}