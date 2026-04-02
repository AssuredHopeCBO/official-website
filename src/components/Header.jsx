import React, { useState } from 'react';
import logo from '../assets/logo.jpg'; 

const Header = ({ setIsTeamTab, setIsSupportTab }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const navigateToDonate = () => {
    setIsMenuOpen(false);
    window.location.pathname = '/donate';
  };

  return (
    <nav className="bg-[#fff9c4] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          <div className="flex items-center space-x-3 shrink-0">
            <img src={logo} alt="Logo" className="h-12 md:h-16 w-auto object-contain rounded-full shadow-sm" />
            <div className="text-sm md:text-2xl font-black text-gray-700 tracking-tight leading-none">
              Assured Hope and Destiny Outreach
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-6 font-bold text-gray-700">
              <a href="/" className="hover:text-[#2e7d32] transition">Home</a>
              
              <div className="relative group h-24 flex items-center whitespace-nowrap">
                <button className="flex items-center gap-1 hover:text-[#2e7d32] transition">
                  About Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-[85px] left-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="/#about" onClick={() => {setIsTeamTab(false); setIsSupportTab(false);}} className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold text-[#1565c0]">Vision & Mission</a>
                  <a href="#team-view" onClick={() => {setIsTeamTab(true); setIsSupportTab(false);}} className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">Dedicated Team</a>
                  <a href="#partnerships" onClick={() => {setIsSupportTab(true); setIsTeamTab(false);}} className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">Partnerships & Support</a>
                </div>
              </div>

              <div className="relative group h-24 flex items-center whitespace-nowrap">
                <button className="flex items-center gap-1 hover:text-[#2e7d32] transition">
                  Our Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-[85px] left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="#prog-1" className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold text-[#1565c0]">Education Support</a>
                  <a href="#prog-2" className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">Youth Empowerment</a>
                  <a href="#prog-3" className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">Mentorship & Guidance</a>
                  <a href="#prog-4" className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">Women Empowerment</a>
                  <a href="#prog-5" className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">Community Development</a>
                  <a href="#prog-6" className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">AHDO Impact</a>
                  <a href="#prog-7" className="block px-4 py-3 text-sm hover:bg-[#fff9c4] font-bold border-t text-[#1565c0]">Target Beneficiaries</a>
                </div>
              </div>

              <a href="#contact" className="hover:text-[#2e7d32] transition">Contact Us</a>
            </div>
            <button onClick={navigateToDonate} className="bg-[#2e7d32] text-white px-6 py-2 rounded font-bold uppercase text-sm hover:bg-[#1565c0] transition shadow-md shrink-0">Donate</button>
          </div>
          
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} strokeLinecap="round" /> : <path d="M4 6h16M4 12h16m-7 6h7" strokeWidth={2} strokeLinecap="round" />}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="lg:hidden bg-[#fff9c4] border-t border-[#1565c0] px-6 py-4 shadow-xl">
          <div className="flex flex-col items-start">
            <a href="/" onClick={() => setIsMenuOpen(false)} className="w-full py-3 font-bold text-gray-700">Home</a>
            
            <button onClick={() => setMobileAboutOpen(!mobileAboutOpen)} className="flex justify-between items-center w-full py-3 font-bold text-gray-700">
              About Us
              <svg className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileAboutOpen && (
              <div className="pl-4 pb-2 flex flex-col space-y-3 border-l-2 border-[#1565c0] ml-1">
                <a href="/#about" onClick={() => {setIsMenuOpen(false); setIsTeamTab(false); setIsSupportTab(false);}} className="text-[#1565c0] font-bold">Vision & Mission</a>
                <a href="#team-view" onClick={() => {setIsMenuOpen(false); setIsTeamTab(true); setIsSupportTab(false);}} className="text-[#1565c0] font-bold">Dedicated Team</a>
                <a href="#partnerships" onClick={() => {setIsMenuOpen(false); setIsSupportTab(true); setIsTeamTab(false);}} className="text-[#1565c0] font-bold">Support & Partnerships</a>
              </div>
            )}

            <button onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)} className="flex justify-between items-center w-full py-3 font-bold text-gray-700">
              Our Projects
              <svg className={`w-4 h-4 transition-transform ${mobileProjectsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileProjectsOpen && (
               <div className="pl-4 pb-2 flex flex-col space-y-3 border-l-2 border-[#1565c0] ml-1">
                 <a href="#prog-1" onClick={() => setIsMenuOpen(false)} className="text-[#1565c0] font-bold">Education Support</a>
                 <a href="#prog-2" onClick={() => setIsMenuOpen(false)} className="text-[#1565c0] font-bold">Youth Empowerment</a>
                 <a href="#prog-3" onClick={() => setIsMenuOpen(false)} className="text-[#1565c0] font-bold">Mentorship & Guidance</a>
                 <a href="#prog-4" onClick={() => setIsMenuOpen(false)} className="text-[#1565c0] font-bold">Women Empowerment</a>
                 <a href="#prog-5" onClick={() => setIsMenuOpen(false)} className="text-[#1565c0] font-bold">Community Development</a>
                 <a href="#prog-6" onClick={() => setIsMenuOpen(false)} className="text-[#1565c0] font-bold">AHDO Impact</a>
                 <a href="#prog-7" onClick={() => setIsMenuOpen(false)} className="text-[#1565c0] font-bold">Target Beneficiaries</a>
               </div>
            )}

            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="w-full py-3 font-bold text-gray-700">Contact Us</a>
            {/* MOBILE DONATE BUTTON */}
            <button onClick={navigateToDonate} className="w-full text-left py-3 font-bold text-[#2e7d32] uppercase tracking-widest border-t border-[#2e7d32]/20 mt-2">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;