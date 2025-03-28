import React from "react";
import Image from "../../assets/img/hero-img.png";
// import icons
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Hero = () => {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col items-center lg:flex-row">
        {/* Hero text */}
        <div className="flex-1">
          {/* badge test */}
          <div
            className="bg-slate-200 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className="flex items-center justify-between text-sm lg:text-base">
              <div className="p-1 px-4 font-medium bg-white rounded-full text-darkblue">
                75% SAVE
              </div>
              <div>For the Black Friday weekend</div>
            </div>
          </div>
          {/* title */}
          <h1
            className="text-[32px] lg:text-[64px] leading-tight mb-6 "
            data-aos="fade-down"
            data-aos-delay="500"
          >
            Fastest & secure platform to invest in crypto.
          </h1>
          <p
            className="max-w-[440px] leading-relaxed mb-8"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Trade cryptocurrency, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <a href="https://portal.weismanntradingrowth.com/auth/register">
          <button
            className="px-6 py-2 text-sm font-bold text-white bg-blue-500 rounded-full lg:h-16 lg:text-base gap-x-6"
          >
            <div className="flex items-center gap-2 justify-betweeen">
              Get Started
              <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl" />
            </div>
          </button></a>
        </div>
        {/* Hero image flex-col2nd element */}
        <div className="flex-1">
          <img
            src={Image}
            alt="banner"
            data-aos="fade-up"
            data-aos-delay="600"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
