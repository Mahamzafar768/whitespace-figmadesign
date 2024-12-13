import React from 'react';
import Image from 'next/image';
import Arrow from '/public/Group 212.png';

const Customize = () => {
  return (
    // Main div
    <div className="w-full h-auto md:h-[812.09px] px-4 sm:px-8 lg:px-20 py-10 md:py-[140px] flex flex-col md:flex-row items-center gap-10 md:gap-24">
      {/* Left Section */}
      <div className="w-full md:w-[714px] h-[300px] md:h-[532.09px] bg-[#C4DEFD] rounded-lg"></div>

      {/* Right Section */}
      <div className="w-full md:w-[669px] h-auto flex flex-col items-start mt-6 md:mt-20">
        <div className="w-full">
          <h1 className="font-inter font-semibold text-3xl sm:text-4xl lg:text-5xl leading-snug text-[#212529]">
            Customise it to <br />
            your needs
          </h1>
          <p className="mt-4 text-sm sm:text-base lg:text-lg font-inter leading-6 sm:leading-8 text-[#212529]">
            Customise the app with plugins, custom themes, and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg bg-[#4F9CF9] flex items-center gap-2 hover:bg-[#3a86db] transition">
            Let’s Go
            <Image className="text-white" src={Arrow} alt="Arrow Icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
