import React from "react";
import Image3 from "../../assets/img/feature-3-img.png";

const FeatureSection3 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="flex flex-col lg:flex-row">
        {/* text */}
        <div>
          <h3 className="mb-6 h3">
            Grow your <span className="text-blue-700">PROFIT</span> and track your investments
          </h3>
          <p className="text-slate-700 mb-10 max-w-[408px]">
            Use advance analytical tools. As part of our partnership, tradingview charts let you
            track current and historical profit investments.
          </p>
          <a href='https://portal.weismanntradingrowth.com/auth/login'>
          <button className="px-8 mx-auto mb-5 btn lg:mx-0">Get Started</button>
          </a>
        </div>
        {/* Image */}
        <div
          className="flex justify-end flex-1"
          data-aos="fade-left"
          data-aos-offset="450"
        >
          <img src={Image3} alt="layouts" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection3;
