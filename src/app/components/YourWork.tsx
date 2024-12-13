import React from 'react';
import Image from 'next/image';
import Arrow from '/public/Group 212.png';

const YourWork = () => {
  return (
    // Main div
    <div className="w-full bg-[#043873] px-4 sm:px-8 lg:px-20 py-10 md:py-[140px] text-white flex justify-center items-center">
      <div className="max-w-6xl flex flex-col items-center text-center space-y-8">
        {/* Title and Description */}
        <div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
            Your work, everywhere you are
          </h1>
          <p className="mt-4 text-base md:text-lg leading-relaxed">
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
          </p>
        </div>

        {/* Button */}
        <div>
          <button className="text-white bg-[#4F9CF9] py-3 px-6 md:py-4 md:px-10 rounded-lg flex items-center space-x-2">
            <span>Try Taskey</span>
            <Image src={Arrow} alt="Arrow icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourWork;
