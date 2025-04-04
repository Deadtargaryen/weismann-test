import React from "react";
import Image from "../../assets/img/why-img.png";

const Learn = () => {
    return (
        <section className="section">
            <div className="container mx-auto">
                <div className="flex flex-col items-center lg:flex-row gap-x-8">
                    {/* image */}
                    <div
                        className="order-2 lg:order-1"
                        data-aos="fade-right"
                        data-aos-offset="400"
                    >
                        <img src={Image} alt="casset" />
                    </div>
                    {/* text */}
                    <div
                        className="order-1 lg:order-2 max-w-[480px]"
                        data-aos="fade-left"
                        data-aos-offset="400"
                    >
                        <h2 className="section-title">Trading Growth investments - smart crypto invests</h2>
                        <p className="section-subtitle">
                            The trading strategies listed and available for copying via the trading applications are developed and managed by third parties. Weismann disclaims any liability for the performance of the strategies made available via its social trading applications. Past performance is not a guarantee of future results. The statistics and indicators provided by Weismann for each strategy have inherent limitations. No guarantee is given as to the likelihood that the strategies will generate profits or losses in accordance with the statistics and indicators presented.
                            General Risk Warning: CFDs are leveraged products. Trading them carries a high level of risk and may therefore not be suitable for all investors. The value of the investment may fluctuate, and investors may lose their entire invested capital. Under no circumstances shall the Company be liable to any person for any loss or damage, in whole or in part, caused by, resulting from, or related to transactions related to CFDs.
                        </p>
                        <a href="https://portal.weismanntradingrowth.com/auth/register">
                        <button className="px-6 btn">Start Investing</button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learn;
