// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 bg-black bg-opacity-40 px-4 md:px-10 py-4 flex items-center justify-between">
        <h1 className="text-primary text-2xl font-bold">Ratnagiri Tourism</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-neutral font-semibold">
          <NavLink to="/" className="hover:text-accent hover:underline underline-offset-4 transition">
            Home
          </NavLink>
          <NavLink to="/destinations" className="hover:text-accent hover:underline underline-offset-4 transition">
            Destinations
          </NavLink>
          <NavLink to="/book" className="hover:text-accent hover:underline underline-offset-4 transition">
            Book Tour
          </NavLink>
          <NavLink to="/contact" className="hover:text-accent hover:underline underline-offset-4 transition">
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-neutral text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>
      </nav>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-90 text-neutral flex flex-col items-center space-y-4 py-6 z-40 md:hidden">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">
            Home
          </NavLink>
          <NavLink to="/destinations" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">
            Destinations
          </NavLink>
          <NavLink to="/book" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">
            Book Tour
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className="text-lg hover:text-accent hover:underline underline-offset-4 transition">
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
