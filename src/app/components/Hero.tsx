import React from 'react';
import Image from 'next/image';
import group from '/public/Group 212.png';

const Hero = () => {
  return (
    // Main div
    <div className="w-full h-auto md:h-[829px] bg-[#043873] top-[92px] left-[1px] px-4 sm:px-8 lg:px-20 py-10 md:py-[140px] flex flex-col md:flex-row items-center">
      {/* Left Section */}
      <div className="w-full md:w-[656px] gap-6 mt-10 md:mt-28 flex flex-col">
        <div className="w-full">
          <h1 className="font-inter text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-left text-white">
            Get More Done with Whitepace
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg font-inter leading-6 sm:leading-8 text-left text-white">
            Project management software that enables your teams to collaborate, plan, analyze, and manage everyday tasks.
          </p>
        </div>

        <div className="mt-6">
          <button className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#4F9CF9] flex items-center gap-2 hover:bg-[#3a86db] transition">
            Try Whitepace free
            <Image className="text-white" src={group} alt="Icon" />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[824px] h-[300px] md:h-[549px] bg-[#C4DEFD] mt-10 md:mt-0 rounded-lg"></div>
    </div>
  );
};

export default Hero;
