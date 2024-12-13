import React from 'react';
import Image from 'next/image';
import Line from "/public/Line 2.png";
import Logo from "/public/Logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-[#043873] py-10 px-4 sm:px-8 lg:px-20">
      {/* Content */}
      <div className="max-w-[1480px] mx-auto">
        {/* Main Content */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Whitepace */}
          <div className="w-full sm:w-[48%] md:w-[295px]">
            <div className="w-[191px] h-[34px]">
              <Image src={Logo} alt="Whitepace Logo" />
            </div>
            <p className="mt-5 text-white text-sm sm:text-base leading-6">
              Whitepace was created for the new ways we live and work. We make a better workspace around the world.
            </p>
          </div>

          {/* Product */}
          <div className="w-full sm:w-[48%] md:w-[295px] text-white">
            <p className="font-semibold text-lg mb-4">Product</p>
            <ul className="space-y-2">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="w-full sm:w-[48%] md:w-[295px] text-white">
            <p className="font-semibold text-lg mb-4">Resources</p>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>

          {/* Company */}
          <div className="w-full sm:w-[48%] md:w-[295px] text-white">
            <p className="font-semibold text-lg mb-4">Company</p>
            <ul className="space-y-2">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>
        </div>

        {/* Line */}
        <div className="mt-10">
          <Image src={Line} alt="Separator Line" className="w-full" />
        </div>

        {/* CopyRight */}
        <div className="mt-6 text-center">
          <h1 className="text-white text-sm sm:text-base">
            ©2021 Whitepace LLC.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
