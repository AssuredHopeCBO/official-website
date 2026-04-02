import React, { useState } from 'react';
// Importing images from assets/team/
import Grace from '../assets/team/Grace.jpg';
import Hannah from '../assets/team/Hannah.jpg';
import Gladys from '../assets/team/Gladys.jpg';
import Esther from '../assets/team/Esther.jpg';
import Susan from '../assets/team/Susan.jpg';
import Rodwin from '../assets/team/Rodwin.jpg';
import Elizabeth from '../assets/team/Elizabeth.jpg';
import Titus from '../assets/team/Titus.jpg';

const About = ({ onlyTeam }) => {
  // State to handle the "hidden" toggle
  const [showTeam, setShowTeam] = useState(false);

  const team = [
    { name: "Grace Wanjiru", role: "Founder & Executive Director", img: Grace },
    { name: "Hannah Wambui", role: "Programs & Admin Coordinator", img: Hannah },
    { name: "Gladys Wanjiku", role: "Board Trustee", img: Gladys },
    { name: "Esther Mugo", role: "Education coordinator", img: Esther },
    { name: "Susan Gatune", role: "Environment & Health Officer", img: Susan },
    { name: "Rodwin Kinyanjui", role: "Head of Finance and Accounts", img: Rodwin },
    { name: "Elizabeth Wairimu", role: "Economic Empowerment coordinator", img: Elizabeth },
    { name: "Titus Ndegwa", role: "Head of Information Technology", img: Titus }
  ];

  return (
    /* Removed large padding-top to move content to the very top */
    <section id="about" className={`${onlyTeam ? 'pt-0' : 'pt-10 pb-0'} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {!onlyTeam && (
          <>
            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-12 mb-20">
              <div className="p-8 bg-[#fff9c4] rounded-xl border-l-8 border-[#2e7d32] shadow-sm">
                <h2 className="text-3xl font-black text-[#1565c0] mb-4 uppercase italic tracking-tighter">Vision Statement</h2>
                <p className="text-gray-800 leading-relaxed font-medium">
                  To empower communities through sustainable development and social inclusion, where every individual has the opportunities to thrive and create lasting change.
                </p>
              </div>
              <div className="p-8 bg-gray-50 rounded-xl border-l-8 border-[#1565c0] shadow-sm">
                <h2 className="text-3xl font-black text-[#2e7d32] mb-4 uppercase italic tracking-tighter">Mission</h2>
                <p className="text-gray-800 leading-relaxed font-medium">
                  To empower women, youth, and vulnerable children through comprehensive education and skills training programs. We are committed to fostering pathways to sustainable development, ensuring that every individual has the opportunity to thrive and contribute positively to the society. Together, we aim to create a more equitable and empowered future for all.
                </p>
              </div>
            </div>

            {/* Who We Are */}
            <div className="mb-12 text-left w-full">
              <h2 className="text-4xl font-black text-[#1565c0] mb-8 border-b-4 border-[#fff9c4] inline-block">Who We Are</h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-medium w-full">
                <p className="w-full">
                  <strong>Formed in March 2021</strong> and <strong>based in Komarock, Nairobi Kenya</strong>, Assured Hope Organization is a community-based, non-profit organization dedicated to promoting sustainable development and social empowerment.
                </p>
                <p className="w-full">
                  We are equally committed to improving the lives of vulnerable children and students by providing access to education, mentorship, and essential support services. Our work is rooted in partnership with local communities and guided by a deep belief in the power of opportunity, inclusion, and hope to transform lives. 
                </p>
                <div className="bg-[#2e7d32] text-white p-6 rounded-lg italic w-full">
                  "Our approach is people-centered, sustainable, and impact-driven, ensuring that beneficiaries not only receive immediate help but also build long-term resilience."
                </div>
              </div>
            </div>
          </>
        )}

        {/* Dedicated Team Section - Pulled even higher with negative margin */}
        {(onlyTeam || showTeam) && (
          <div className={`w-full ${onlyTeam ? 'mt-[-20px] pt-4' : 'py-6'}`}>
            <div className="text-left mb-6 w-full">
              <h2 className="text-4xl font-black text-[#1565c0] mb-4 inline-block border-b-4 border-[#fff9c4]">
                Our Dedicated Team
              </h2>
              <p className="text-gray-600 font-medium text-lg w-full leading-relaxed">
              Assured Hope Organization is governed by a team of dedicated leaders and professionals committed to community empowerment. The structure is designed to ensure transparency, accountability, and operational efficiency in all aspects of delivery and program implementation.  
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 w-full mt-6 animate-in fade-in slide-in-from-top-4 duration-700">
              {team.map((member, index) => (
                <div key={index} className="group text-left">
                  <div className="relative mb-4 w-36 h-36 md:w-52 md:h-52 rounded-full border-4 border-[#fff9c4] overflow-hidden bg-gray-50 group-hover:border-[#2e7d32] transition-all duration-300 shadow-md flex items-center justify-center">
                    <img 
                      src={member.img} 
                      alt={member.name} 
                      className={`w-full h-full object-cover ${
                        // Specifically centering Hannah and Gladys to move them up/down into view
                        (member.name.includes("Hannah") || member.name.includes("Gladys")) 
                        ? 'object-center' 
                        : 'object-top'
                      }`} 
                    />
                  </div>
                  <h3 className="text-[#1565c0] font-bold text-lg leading-tight">{member.name}</h3>
                  <p className="text-[#2e7d32] font-semibold text-sm uppercase mt-1 tracking-wide">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;