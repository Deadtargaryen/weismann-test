import React, { useState } from "react";
import Logo from "../../assets/img/crypto.jpg";
import VisaImg from "../../assets/img/visa.png";
import MastercardImg from "../../assets/img/mastercard.png";
import BitcoinImg from "../../assets/img/bitcoin.png";
import { IoMdPaperPlane } from "react-icons/io";

const Footer = () => {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <footer className="pt-0 lg:pt-24" data-aos="fade-up" data-aos-offset="400">
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
            <a href="/">
              <img
                src={Logo}
                alt="icons"
                draggable="false"
                className="mt-10 border shadow-xl rounded-2xl lg:mt-5"
              />
            </a>
          </div>
          <div className="flex flex-col flex-1 gap-16 lg:flex-row">
            <div className="w-full text-center lg:text-left">
              <div className="mb-6 text-xl font-medium">Quick Links</div>
              <ul className="space-y-4 text-gray-500">
                <li><a className="transition hover:text-blue" href="#/">Home</a></li>
                {/* <li><a className="transition hover:text-blue" href="#/">Products</a></li> */}
                <li><a className="transition hover:text-blue" href="#/">About</a></li>
                {/* <li><a className="transition hover:text-blue" href="#/">Features</a></li> */}
                {/* <li><a className="transition hover:text-blue" href="#/">Contact</a></li> */}
              </ul>
            </div>
            <div className="w-full text-center lg:text-left">
              <div className="mb-6 text-xl font-medium">Resources Links</div>
              <ul className="space-y-4 text-gray-500">
                <li>
                  <a className="transition cursor-pointer hover:text-blue" onClick={() => openModal("whitepaper")}>Whitepaper</a>
                </li>
                <li>
                  <a className="transition cursor-pointer hover:text-blue" onClick={() => openModal("privacy")}>Privacy Policy</a>
                </li>
                <li><a className="transition hover:text-blue" href="https://www.blockchain.com/explorer">Blockchain Explorer</a></li>
                {/* <li><a className="transition hover:text-blue" href="#/">Terms & Conditions</a></li> */}
              </ul>
            </div>
          </div>
          <div className="flex flex-col flex-1">
            <div className="lg:ml-[80px]">
              <h3 className="mb-10 font-medium text-center h3 lg:text-left">
                We accept the following payment systems
              </h3>
              <div className="flex items-center justify-center gap-6">
                <img src={VisaImg} alt="Visa" />
                <img src={MastercardImg} alt="Mastercard" />
                <img src={BitcoinImg} alt="Bitcoin" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="container flex flex-col items-center mx-auto gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 ">
          <div>&copy; 2025 Weismann Trading Growth Investments. All rights reserved.</div>
          <div className="flex text-2xl gap-x-1">
            <IoMdPaperPlane />
            <a className="text-sm transition hover:text-blue-900 hover:underline" href="https://t.me/Angeloweismannfx">
              Join our Telegram channel
            </a>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-2xl max-h-[80vh] p-6 bg-white rounded-lg shadow-lg overflow-y-auto">
            <h2 className="mb-4 text-xl font-bold">
              {modalContent === "whitepaper" ? "Whitepaper" : "Privacy Policy"}
            </h2>
            <p className="text-gray-600">
              {modalContent === "whitepaper" ? (
                <p className="text-gray-700">Weismann Trading Growth Investments<br/>

                  <b>WHITEPAPER</b><br/>
                  Version 1.0 | 2025<br/>

                <br/>

                  <b>1. Introduction</b><br/>
                  <strong>1.1 Executive Summary</strong><br/>
                  Weismann Trading Growth Investments (WTGI) is a 
                  next-generation crypto investment brokerage firm 
                  designed to provide a cutting-edge trading platform, <br/>
                  algorithmic investment strategies, and institutional-grade 
                  portfolio management for both retail and institutional investors.<br/>
                   Through proprietary AI-driven analytics, WTGI ensures risk-optimized returns by 
                   leveraging both fundamental and quantitative trading strategies.<br/>
<br/>
                  <strong>1.2 Vision Statement</strong><br/>
                  To be the leading AI-powered cryptocurrency investment firm,<br/>
                  offering transparent, high-yield investment opportunities through <br/>
                  automated and decentralized trading infrastructure.<br/>

                  <strong>1.3 Mission Statement</strong><br/>
                  - To democratize access to institutional-grade crypto investments.<br/>
                  - To utilize AI-driven analytics for optimal trading strategies.<br/>
                  - To create a secure, seamless, and high-frequency trading ecosystem.<br/>
                  - To provide a structured and diversified approach to digital asset management.<br/>
<br/>
                  <b>2. Market Analysis</b><br/>
                  <strong>2.1 Crypto Investment Landscape</strong>
                  With over $2 trillion in global cryptocurrency market capitalization and <br/>
                  growing institutional adoption, digital assets are at the <br/>
                  forefront of the next financial revolution. WTGI capitalizes on these <br/>
                  opportunities by implementing data-driven trading and investment methodologies.<br/>

                  <strong>2.2 Competitive Advantage</strong><br/>
                  Key Differentiators:<br/>
                  - AI-Driven Trading: WTGI employs deep learning models and reinforcement learning techniques to maximize market efficiency.<br/>
                  - High-Frequency Trading (HFT) Strategies: Ultra-low latency execution ensures rapid arbitrage opportunities.<br/>
                  - Multi-Asset Portfolio Diversification: WTGI provides exposure to Bitcoin, Ethereum, DeFi assets, and NFT-related tokens.<br/>
                  - Regulated & Compliant: WTGI follows international compliance standards, including KYC/AML regulations.<br/>
<br/>
                  <strong>2.3 Institutional vs. Retail Market Opportunity</strong><br/>
                  WTGI bridges the gap between retail investors and institutional-grade investment vehicles. <br/>
                  With the increasing institutional interest in crypto assets (e.g., BlackRock, Grayscale), <br/>
                  WTGI provides structured investment products with risk-adjusted returns.<br/>
<br/>
                  <b>3. Investment Strategy</b><br/>
                  <strong>3.1 Algorithmic Trading Strategies</strong><br/>
                  WTGI deploys multiple quantitative trading models, including:<br/>
                  - Market Making: Liquidity provisioning across various exchanges.<br/>
                  - Arbitrage: Cross-exchange and triangular arbitrage.<br/>
                  - Momentum Trading: Trend-following AI strategies.<br/>
                  - Mean Reversion: Statistical arbitrage leveraging Bollinger bands and RSI.<br/>
<br/>
                   <strong>3.2 Risk Management</strong><br/>
                  - Dynamic Stop-Loss Algorithms: AI-driven exit strategies based on volatility.<br/>
                  - Portfolio Hedging: Use of derivatives such as futures and options.<br/>
                  - Stablecoin Reserves: A portion of assets is kept in USDT, USDC, and DAI for volatility mitigation.<br/>
<br/>
                  <strong>3.3 Staking & Yield Farming</strong><br/>
                  WTGI integrates staking and liquidity mining strategies to <br/>
                  generate passive income streams, offering investors diversified yield opportunities.<br/>
<br/>
                  4. <b>Tokenomics & WTGI Token</b><br/>
                  <strong>4.1 WTGI Utility Token</strong><br/>
                  - Symbol: WTGI<br/>
                  - Total Supply: 500,000,000 WTGI<br/>
                  - Blockchain: Ethereum (ERC-20) & Solana (SPL)<br/>
                  <br/>
                  <strong>4.2 Token Utility</strong><br/>
                  - Governance Voting: WTGI holders can participate in governance decisions.<br/>
                  - Reduced Trading Fees: Holding WTGI grants users discounted transaction fees.<br/>
                  - Staking Rewards: Locking WTGI tokens yields APY rewards.<br/>
                  - Exclusive Investment Tiers: Token holders gain access to higher-yield investment pools.<br/>
                  <br/>
                  <strong>4.3 Token Distribution</strong><br/>
                  | Allocation | Percentage |<br/>
                  |------------|-----------|<br/>
                  | Private Sale | 20% |<br/>
                  | Public Sale | 30% |<br/>
                  | Team & Advisors | 15% |<br/>
                  | Liquidity Pool | 10% |<br/>
                  | Ecosystem Development | 15% |<br/>
                  | Staking & Rewards | 10% |<br/>
                  <br/>
                  <b>5. Regulatory Compliance</b><br/>
                  <strong>5.1 KYC/AML Procedures</strong><br/>
                  WTGI adheres to global financial compliance, including:<br/>
                  - Identity verification for all users.<br/>
                  - Anti-money laundering (AML) risk assessment.<br/>
                  - Transaction monitoring and suspicious activity reporting.<br/>
                    <br/>
                  <strong>5.2 Licensed Brokerage Model</strong><br/>
                  WTGI operates under regulatory frameworks such as:<br/>
                  - SEC & FINRA (U.S.)<br/>
                  - FCA (UK)<br/>
                  - BaFin (Germany)<br/>
                  - MAS (Singapore)<br/>
                    <br/>
                    <b>6. Technology & Security</b><br/>
                    <strong>6.1 Trading Engine</strong><br/>
                  - Latency under 5ms<br/>
                  - Integration with Binance, Coinbase, Kraken, and Uniswap<br/>
                  - Institutional-grade APIs for trading execution<br/>
                    <br/>
                  <strong>6.2 Security Measures</strong><br/>
                  - Cold Storage for Asset Custody<br/>
                  - Multi-Signature Wallet Authentication<br/>
                  - End-to-End Encryption & Two-Factor Authentication (2FA)<br/>
                    <br/>
                  <b>7. Roadmap</b><br/>
                  <strong>7.1 2025 Roadmap</strong><br/>
                  | Milestone | Date |<br/>
                  |------------|-----------|<br/>
                  | Platform Beta Release | Q1 2025 |<br/>
                  | WTGI Token Launch | Q2 2025 |<br/>
                  | Institutional Partnerships | Q3 2025 |<br/>
                  | AI-Trading Expansion | Q4 2025 |<br/>
                  <br/>
                  <b>8. Conclusion</b><br/>
                  WTGI is positioned as a market leader in AI-driven crypto investments,<br/> 
                  offering innovative solutions that cater to both retail and institutional investors.<br/>
                  With its robust technology, compliance measures, and strategic investment<br/> methodologies,
                  WTGI aims to redefine digital asset trading and wealth management.<br/>

                  <br/>

                  <b>Contact Information</b><br/>
                  - Website: www.weismanntradingrowth.com<br/>
                  - Email: info@weismanntradingrowth.com<br/>
                  - Telegram: @AngeloWeismannTrades<br/>
                </p>
              ) : (
                <p className="text-gray-600">Privacy Policy for {""}
                  <strong>Weismann Trading Growth Investments</strong><br />
                  Effective Date: 17th January 2021<br />

                  <b>1. Introduction</b><br />
                  Welcome to Weismann Trading Growth Investments ("Company," "we," "our," or "us"). Your privacy is important to us. This Privacy Policy explains how we collect,
                  use, disclose, and protect your personal information when you use our services,
                  visit our website, or engage with our platform.<br />

                  <b>2. Information We Collect</b><br />
                  We may collect the following types of information:<br />

                  a) Personal Information<br />
                  - Name, email address, phone number, and mailing address<br />
                  - Government-issued identification (if required for compliance purposes)<br />
                  - Payment details for transactions and withdrawals<br />

                  b) Financial Information<br />
                  - Cryptocurrency wallet addresses<br />
                  - Transaction history, including deposits and withdrawals<br />
                  - Investment details and trading activity<br />

                  c) Technical Information<br />
                  - IP address, browser type, and operating system<br />
                  - Cookies and tracking technologies for analytics and security purposes<br />

                  <b>3. How We Use Your Information</b><br />
                  We use the information we collect for the following purposes:<br />
                  - To provide, operate, and improve our trading platform<br />
                  - To process transactions and investment activities<br />
                  - To comply with legal and regulatory obligations (including anti-money laundering and fraud prevention)<br />
                  - To personalize user experience and provide customer support<br />
                  - To send updates, promotions, and service-related notifications<br />

                  <b>4. Data Sharing and Disclosure</b><br />
                  We do not sell your personal data. However, we may share your information with:<br />
                  - Regulatory authorities to comply with legal obligations<br />
                  - Third-party service providers for payment processing, analytics, and security<br />
                  - Business partners and affiliates for platform functionality<br />
                  - Law enforcement agencies when required by applicable laws<br />

                  <b>5. Data Security</b><br />
                  We implement industry-standard security measures to protect your personal and financial information.
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.<br />

                  <b>6. Your Rights and Choices</b><br />
                  You may have the right to:<br />
                  - Access, update, or delete your personal data<br />
                  - Opt-out of marketing communications<br />
                  - Request data portability or restriction of processing<br />
                  - Withdraw consent where applicable<br />

                  To exercise these rights, please contact us at [Insert Contact Email].<br />

                  <b>7. Cookies and Tracking Technologies</b><br />
                  We use cookies and similar tracking technologies to enhance user experience, analyze trends, and ensure security. <br />
                  You can manage your cookie preferences through your browser settings.<br />

                  <b>8. International Data Transfers</b><br />
                  If you are accessing our services from outside [Insert Country], please note that your data may be
                  transferred, stored, and processed in jurisdictions with different data protection laws.<br />

                  <b>9. Retention Policy</b><br />
                  We retain personal data for as long as necessary to fulfill legal, regulatory, and
                  business obligations. Once no longer needed, we securely delete or anonymize the information.<br />

                  <b>10. Updates to This Privacy Policy</b><br />
                  We may update this Privacy Policy periodically. Any changes will be posted on our website with an
                  updated "Effective Date."<br />

                  <b>11. Contact Information</b><br />
                  If you have any questions about this Privacy Policy or your data rights, please contact us at:<br />

                  <b>Weismann Trading Growth Investments</b><br />
                  Email: info@weismanntradingrowth.com<br />
                  Address: [Insert Office Address]<br />

                  By using our services, you agree to the terms of this Privacy Policy.<br />
                  Please review it carefully and reach out to us with any concerns.<br />

                </p>
              )}
            </p>
            <button onClick={closeModal} className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700">
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
