import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-15xl mx-auto px-200 sm:px-6 lg:px-300">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          
          {/* Links */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/books"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              Books
            </Link>
           
            <Link
              to="/profile"
              className="text-gray-600 hover:text-blue-600 font-medium"
            >
              profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                menu.classList.toggle("hidden");
              }}
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-gray-50 shadow-lg">
        <div className="px-4 py-2 space-y-2">
          <Link
            to="/"
            className="block text-gray-600 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="block text-gray-600 hover:text-blue-600 font-medium"
          >
            Books
          </Link>
          
          <Link
            to="/profile"
            className="block text-gray-600 hover:text-blue-600 font-medium"
          >
            profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
