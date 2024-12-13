'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Logo from '/public/Logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-[92px] px-4 sm:px-8 lg:px-20 bg-[#043873] relative">
      {/* Logo */}
      <div>
        <Image src={Logo} alt="Logo" width={191} height={34} />
      </div>

      {/* Navigation for Desktop */}
      <div className="hidden md:flex w-auto h-auto justify-between items-center gap-8">
        <ul className="flex gap-6 text-white text-sm sm:text-base md:text-lg font-semibold">
          <li className="cursor-pointer hover:text-[#FFE492] transition">Products</li>
          <li className="cursor-pointer hover:text-[#FFE492] transition">Solutions</li>
          <li className="cursor-pointer hover:text-[#FFE492] transition">Resources</li>
          <li className="cursor-pointer hover:text-[#FFE492] transition">Pricing</li>
        </ul>
        {/* Login Button */}
        <button className="py-2 px-6 sm:py-3 sm:px-8 rounded-lg font-semibold bg-[#FFE492] hover:bg-[#e6d07d] transition">
          Login
        </button>
      </div>

      {/* Burger Menu for Mobile */}
      <div className="md:hidden flex items-center">
        <button
          className="text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#043873] text-white flex flex-col items-center gap-4 py-6 z-50 shadow-lg">
          <ul className="text-center text-sm sm:text-base font-semibold space-y-4">
            <li className="cursor-pointer hover:text-[#FFE492] transition">Products</li>
            <li className="cursor-pointer hover:text-[#FFE492] transition">Solutions</li>
            <li className="cursor-pointer hover:text-[#FFE492] transition">Resources</li>
            <li className="cursor-pointer hover:text-[#FFE492] transition">Pricing</li>
          </ul>
          {/* Login Button */}
          <button className="py-2 px-6 sm:py-3 sm:px-8 rounded-lg font-semibold bg-[#FFE492] hover:bg-[#e6d07d] transition">
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
