import React from "react";
import Logo from "../../assets/img/crypto.jpg";
import VisaImg from "../../assets/img/visa.png";
import MastercardImg from "../../assets/img/mastercard.png";
import BitcoinImg from "../../assets/img/bitcoin.png";

import {
  IoMdPaperPlane
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className="pt-0 lg:pt-24" data-aos="fade-up" data-aos-offset="400">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* logo */}
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="#/">
              <img
                src={Logo}
                alt="icons"
                draggable="false"
                className="mt-10 border shadow-xl rounded-2xl lg:mt-5"
              />
            </a>
          </div>
          {/* link group */}
          <div className="flex flex-col flex-1 gap-16 lg:flex-row">
            {/* link group */}
            <div className="w-full text-center lg:text-left">
              <div className="mb-6 text-xl font-medium">Quick Links</div>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Products
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    About
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Features
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            {/* link group */}
            <div className="w-full text-center lg:text-left">
              <div className="mb-6 text-xl font-medium">Resources Links</div>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Download Whitepaper
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="https://www.blockchainexplorer.com">
                    Blockchain Explore
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Crypto API
                  </a>
                </li>
                <li>
                  <a className="transition hover:text-blue" href="#/">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* payment */}
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="mb-10 font-medium text-center h3 lg:text-left">
                We accept following payment systems
              </h3>
              <div className="flex items-center justify-center gap-6">
                <img src={VisaImg} alt="" />
                <img src={MastercardImg} alt="" />
                <img src={BitcoinImg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* copy & social */}
      <div className="py-12">
        <div className="container flex flex-col items-center mx-auto gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 ">
          {/* copy text */}
          <div>&copy; 2025 Weismann Trading Growth Investments. All rights reserved.</div>
          {/* social icons */}
          <div className="flex text-2xl gap-x-1">
          <IoMdPaperPlane />
            <a className="text-sm transition hover:text-blue-900 hover:underline" href="https://t.me/Angeloweismannfx">
            Send us a message on Telegram
            </a>
            {/* <a className="transition hover:text-blue" href="#/">
              <IoLogoTwitter />
            </a>
            <a className="transition hover:text-blue" href="#/">
              <IoLogoLinkedin />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
