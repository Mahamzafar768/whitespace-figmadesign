import React from 'react';
import Image from 'next/image';
import Arrow from '/public/Group 212.png';
import Works from '/public/Work Together Image.png';

const Work = () => {
  return (
    // Main Div
    <div className="w-full h-auto px-4 sm:px-8 lg:px-20 py-10 md:py-[140px] space-y-20">
      {/* Upper Section */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-[#212529] leading-tight">
            Project Management
          </h1>
          <p className="text-base md:text-lg text-[#212529]">
            Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
          </p>
          <button className="text-white bg-[#4F9CF9] py-3 px-6 rounded-lg flex items-center space-x-2">
            <span>Get Started</span>
            <Image src={Arrow} alt="" />
          </button>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#C4DEFD] h-60 md:h-auto"></div>
      </div>

      {/* Lower Section */}
      <div className="flex flex-wrap md:flex-nowrap items-center gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <Image src={Works} alt="Work Together" className="w-full h-auto" />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-semibold text-[#212529]">
            Work together
          </h1>
          <p className="text-base md:text-lg text-[#212529]">
            With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>
          <button className="text-white bg-[#4F9CF9] py-3 px-6 rounded-lg flex items-center space-x-2">
            <span>Try it now</span>
            <Image src={Arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Work;
