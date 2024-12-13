import React from 'react';
import Image from 'next/image';
import Apple from '/public/Apple.png';
import Google from '/public/Google.png';
import Microsoft from '/public/Microsoft.png';
import Slack from '/public/Slack.png';

const Sponsors = () => {
  return (
    // Main div
    <div className="w-full h-auto px-4 sm:px-8 lg:px-20 py-10 md:py-[140px]">
      {/* Title */}
      <h1 className="text-center text-2xl sm:text-4xl lg:text-5xl font-semibold text-[#212529] leading-tight tracking-wide">
        Our sponsors
      </h1>

      {/* Sponsors Logos */}
      <div className="w-full mt-10 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center justify-items-center">
        <div className="w-[60px] md:w-[80px]">
          <Image src={Apple} alt="Apple logo" className="w-full h-auto" />
        </div>

        <div className="w-[150px] md:w-[200px]">
          <Image src={Microsoft} alt="Microsoft logo" className="w-full h-auto" />
        </div>

        <div className="w-[140px] md:w-[180px]">
          <Image src={Slack} alt="Slack logo" className="w-full h-auto" />
        </div>

        <div className="w-[120px] md:w-[160px]">
          <Image src={Google} alt="Google logo" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
