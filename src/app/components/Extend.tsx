import React from 'react';
import Image from 'next/image';
import Arrow from '/public/Group 212.png';

const Extension = () => {
  return (
    // Main Div
    <div className="w-full h-auto md:h-[759px] bg-[#043873] px-4 sm:px-8 lg:px-20 py-10 md:py-[140px] flex flex-col md:flex-row items-center gap-10">
      {/* Left Section */}
      <div className="w-full md:w-[697px] h-auto">
        <div className="text-white mt-6 md:mt-24">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-snug">
            Use as Extension
          </h1>
          <p className="mt-5 text-sm sm:text-base lg:text-lg leading-6 sm:leading-8">
            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
          </p>

          {/* Button */}
          <div className="mt-8">
            <button className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#4F9CF9] flex items-center gap-2 hover:bg-[#3a86db] transition">
              Let’s Go
              <Image className="text-white" src={Arrow} alt="Arrow Icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[686px] h-[300px] md:h-[479px] bg-[#C4DEFD] rounded-lg"></div>
    </div>
  );
};

export default Extension;
