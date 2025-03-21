import React from "react";
//image
import Image1 from "../../assets/img/feature-1-img.png";

const FeatureSection1 = () => {
  return (
    <section className="pb-[30px] lg:pb-[120px] pt-0">
      <div className="flex flex-col lg:flex-row">
        {/*text section  */}
        <div
          className="max-w-[454px] mb-6 lg:mb-10"
          data-aos="fade-right"
          data-aos-offset="400"
        >
          <h3 className="mb-6 h3">Invest Smart</h3>
          <p className="mb-8 text-slate-700">
            Access full statistical information about the behaviour of the market while
            our price analysts and stock brokers will make smart trading and investment choices for you
          </p>
          <a href='https://portal.weismanntradingrowth.com'>
          <button className="px-8 mx-auto btn lg:mx-0">Start Investing</button>
          </a>
        </div>
        {/* image sections */}
        <div
          className="flex justify-end flex-1"
          data-aos="fade-left"
          data-aos-offset="400"
        >
          <img src={Image1} alt="banner" draggable="false" />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection1;
