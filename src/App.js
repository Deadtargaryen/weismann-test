import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Hero from './components/hero/Hero';
import Header from './components/header/Header';
import NavMobile from './components/nav/NavMobile';
import Stats from './components/stats/Stats';
import Why from './components/stats/Why';
import Trade from './components/sections/Trade';
import Features from './components/sections/Features';
import NewsLetter from './components/sections/NewsLetter';
import Footer from './components/sections/Footer';
import About from './components/About'; // Import the new About page

import { useEffect, useState } from 'react';

function App() {
  // State management
  const [navMobile, setNavMobile] = useState(false);

  // AOS initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  }, []);

  return (
    <Router>
      <div className='overflow-hidden'>
        <Header setNavMobile={setNavMobile} />
        {/* Mobile Nav */}
        <div className={`${navMobile ? 'right-0' : '-right-full'} fixed z-10 top-0 h-full transition-all duration-200`}>
          <NavMobile setNavMobile={setNavMobile} />
        </div>

        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Stats />
              <Why />
              <Trade />
              <Features />
              <NewsLetter />
            </>
          } />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
