import React from 'react';
import logo from '../assets/logo.jpg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa6'; 

const Footer = ({ setIsTeamTab, setIsSupportTab }) => {
  
  // Smart Navigation: Goes home first if you're on a legal page
  const goToSection = (hash, isTeam = false, isSupport = false) => {
    if (window.location.pathname !== '/') {
      // If we are on /privacy or /refund, go home + add the hash
      window.location.href = `/${hash}`;
    } else {
      // If we are already home, just update the state/hash
      setIsTeamTab(isTeam);
      setIsSupportTab(isSupport);
      window.location.hash = hash;
    }
  };

  return (
    <footer className="bg-[#fff9c4] pt-10 pb-4 border-t-4 border-[#1565c0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-left">
          
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Logo" className="h-12 w-auto object-contain rounded-full" />
              <div className="text-md font-black text-gray-800 leading-tight">
                Assured Hope and <br /> Destiny Outreach
              </div>
            </div>
            <p className="text-gray-700 text-xs font-medium leading-relaxed">
              Empowering vulnerable children, youth, and women through education and community development.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1CmQYq9xuc/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-[#1565c0] hover:bg-[#1565c0] hover:text-white transition shadow-sm">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/assur_edhope" target="_blank" rel="noopener noreferrer" className="p-3 bg-white rounded-full text-[#1565c0] hover:bg-[#1565c0] hover:text-white transition shadow-sm">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: About Us (FIXED BUTTONS) */}
          <div>
            <h4 className="text-[#1565c0] text-sm font-black uppercase tracking-wider mb-4">About Us</h4>
            <ul className="space-y-2 text-sm font-bold text-gray-700">
              <li><button onClick={() => window.location.href = '/'} className="hover:text-[#2e7d32]">Home</button></li>
              <li><button onClick={() => goToSection('#about')} className="hover:text-[#2e7d32]">Vision & Mission</button></li>
              <li><button onClick={() => goToSection('#team-view', true, false)} className="hover:text-[#2e7d32]">Dedicated Team</button></li>
              <li><button onClick={() => goToSection('#partnerships', false, true)} className="hover:text-[#2e7d32]">Partnerships & Support</button></li>
              
              <li className="pt-2 mt-2 border-t border-yellow-300">
                <a href="/privacy" className="text-[10px] text-gray-500 hover:text-black font-bold uppercase">Privacy Policy</a>
              </li>
              <li>
                <a href="/refund" className="text-[10px] text-gray-500 hover:text-black font-bold uppercase">Refund Policy</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h4 className="text-[#1565c0] text-sm font-black uppercase tracking-wider mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm font-bold text-gray-700">
              <li><button onClick={() => goToSection('#prog-1')} className="hover:text-[#2e7d32]">Education Support</button></li>
              <li><button onClick={() => goToSection('#prog-2')} className="hover:text-[#2e7d32]">Youth Empowerment</button></li>
              <li><button onClick={() => goToSection('#prog-3')} className="hover:text-[#2e7d32]">Mentorship & Guidance</button></li>
              <li><button onClick={() => goToSection('#prog-4')} className="hover:text-[#2e7d32]">Women Empowerment</button></li>
              <li><button onClick={() => goToSection('#prog-5')} className="hover:text-[#2e7d32]">Community Development</button></li>
              <li><button onClick={() => goToSection('#prog-6')} className="hover:text-[#2e7d32]">AHDO Impact</button></li>
              <li><button onClick={() => goToSection('#prog-7')} className="hover:text-[#2e7d32]">Target Beneficiaries</button></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div id="contact">
            <h4 className="text-[#1565c0] text-sm font-black uppercase tracking-wider mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm font-bold text-gray-700">
              <p>📍 Nairobi, Kenya</p>
              <p>📞 0722981224</p>
              <p className="break-all text-[11px]">assuredhopeanddestinyoutreach@gmail.com</p>
            </div>
          </div>

        </div>

        <div className="pt-4 border-t border-yellow-200 text-center">
          <p className="text-gray-600 text-[10px] md:text-xs font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Assured Hope. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;