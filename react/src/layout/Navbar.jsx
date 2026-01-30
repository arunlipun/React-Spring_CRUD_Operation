import React, { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <div className="text-xl font-semibold text-gray-900">
            React +Spring CRUD<span className="text-blue-600">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <Link to="/adduser" className="hover:text-blue-600 transition">
              Add User
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-800 text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600"
            >
              Home
            </Link>
            <Link
              to="/adduser"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600"
            >
              Add User
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
