import React from "react";
//import image
import Image2 from "../../assets/img/feature-2-img.png";

const FeatureSection2 = () => {
  return (
    <section className="py-[30px] lg:py-[120px]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-end lg:flex-row">
          {/* images */}
          <div
            className="flex-1 order-2 lg:absolute lg:left-0 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <img src={Image2} alt="image2" draggable="false" />
          </div>
          {/* text */}
          <div
            className="flex-1 max-w-[500px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <h3 className="mb-6 h3">Detailed Statistics</h3>
            <p className="mb-8 text-slate-700">
              View all trading related information in realtime, at any point at
              any location.
            </p>
            <button className="px-8 mx-auto mb-6 btn lg:mb-0 lg:mx-0">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection2;
