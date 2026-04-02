import React, { useState, useEffect } from 'react';

// --- IMAGE IMPORTS ---
import youth1 from '../assets/projects/youth-1.jpg';
import youth2 from '../assets/projects/youth-2.jpg';
import youth3 from '../assets/projects/youth-3.jpg';
import youth4 from '../assets/projects/youth-4.jpg';
import youth5 from '../assets/projects/youth-5.jpg';
import youth6 from '../assets/projects/youth-6.jpg';

import education1 from '../assets/projects/education-1.jpg';
import education2 from '../assets/projects/education-2.jpg';

import mentorship1 from '../assets/projects/mentorship-1.jpg';

import women1 from '../assets/projects/women-1.png';

import community1 from '../assets/projects/community-1.jpg';
import community2 from '../assets/projects/community-2.jpg';

const placeholder = "https://via.placeholder.com/1200x800?text=Image+Coming+Soon";

const Projects = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const youthImages = [youth1, youth2, youth3, youth4, youth5, youth6];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % youthImages.length);
    }, 4000); 
    return () => clearInterval(interval);
  }, [youthImages.length]);

  const projectData = [
    {
      id: 1,
      title: "Educational support program for vulnerable children.",
      description: "We believe education is the foundation for breaking cycles of poverty. This program ensures access to education for disadvantaged children and reduces school dropouts. We support vulnerable children by paying school fees, providing uniforms, books and other learning materials. We also partner with schools and guardians to ensure learners remain in school and achieve their full potential.",
      impact: "Children, who would otherwise drop out, stay in school, complete their education and build a foundation for breaking the cycle of poverty.",
      isEducation: true,
      isGallery: false,
      successStories: [
        {
          name: "Kamau's Journey",
          img: education1,
          text: "Kamau is one of the beneficiaries of Assured Hope CBO’s Education Support Program. Coming from a vulnerable background, his chances of completing school were very slim. Through the commitment of Hope CBO, well-wishers, and friends of the organization, Kamau received consistent support from primary school through secondary and now into college. The organization covered his school fees, provided learning materials such as stationery, and ensured he had the basic necessities needed to stay in school. This consistent support allowed Kamau to focus fully on his education without the burden of financial struggles. Today, Kamau is pursuing his studies at the college level, becoming a role model to his peers and a symbol of what community support and empowerment can achieve. His journey demonstrates the power of education sponsorship in breaking cycles of poverty and giving vulnerable children a chance to build a brighter future."
        },
        {
  name: "Njoroge's Transformation",
  img: education2,
  text: `Growing up in a vulnerable environment, Njoroge faced a future where the classroom door was slowly closing. Without intervention, financial barriers made completing even basic schooling a near impossibility.

Assured Hope and Destiny Outreach (AHDO) stepped in to bridge the gap. Alongside our dedicated well-wishers, we committed to a long-term investment in Njoroge’s potential. We provided full tuition support from Primary through Secondary school, essential learning tools like stationery and textbooks, and ensured his basic needs were met so his only job was to learn.

Today, the boy who once lacked a pen is a College Student. Njoroge has transitioned from a beneficiary to a role model, proving that consistent community support can break the cycle of poverty. His journey is a living testament to our mission: that with the right tools, every vulnerable child can build a brighter, independent future.`
}
      ]
    },
    {
      id: 2,
      title: "Youth Empowerment",
      description: "This program addresses unemployment and lack of opportunities among young people:",
      points: [
        "a) We provide hands-on vocational training (catering, pastry, tailoring, hairdressing etc).",
        "b) We train youth in entrepreneurship and financial literacy, preparing them to start businesses or manage income.",
        "c) We build life skills such as resilience, teamwork and confidence, which are critical for long-term success."
      ],
      impact: "This program transforms idle or vulnerable youths into self-reliant individuals who can earn and sustain livelihoods.",
      images: youthImages,
      isGallery: true,
      caption: "pastry training by our economic empowerment cordinator"
    },
    {
      id: 3,
      title: "Mentorship & Guidance Program",
      description: "We mentor school dropouts, teenage mothers and others at-risk by offering guidance, counseling and life skills training to help them rebuild their lives:",
      points: [
        "a) Through mentorship, we connect them with role models and community leaders.",
        "b) We provide life coaching and counselling, helping them rebuild self-esteem and set goals.",
        "c) We also address critical issues like drug abuse, crime prevention, and early pregnancy through awareness sessions."
      ],
      impact: "This prevents young people from falling into cycles of hopelessness, crime or substance abuse. They regain confidence and set life goals.",
      image: mentorship1,
      isGallery: false
    },
    {
      id: 4,
      title: "Women Empowerment Program",
      description: "AHDO manages women's savings and contribution project, offering training in financial literacy, providing self-reliance and entrepreneurship skills that promote sustainable growth for women and their families. We support table banking and merry-go-round, enabling women to save and access loans.",
      impact: "Women access savings and credit, grow businesses, and improve household welfare, while gaining leadership roles and financial independence.",
      image: women1,
      isGallery: false
    },
    {
      id: 5,
      title: "Community Development & Awareness",
      description: "This program promotes unity, peace and shared responsibility across the community. We organize dialogue and sensitization meetings on issues such as education, gender equality and peacebuilding. We also encourage community solidarity and resource mobilization to support local initiatives.",
      impact: "Encourages community solidarity and resource mobilization to support local initiatives.",
      isCommunity: true,
      isGallery: false,
      communityImages: [community1, community2],
      caption: "during the group training by the social development officer"
    },
    {
      id: 6,
      title: "AHDO Impact",
      description: "Since its establishment, Assured Hope Organization has made notable achievements:",
      isImpact: true,
      gridItems: [
        { title: "Educational Support", text: "Assured Hope has supported over 30 students through our program, providing financial assistance for fees and essential supplies to empower their academic goals." },
        { title: "Skills Training", text: "Over 125 youth and women trained in catering and pastry under the youth & women empowerment program." },
        { title: "Support for Teenage Mothers", text: "AHDO has mentored a significant number of teenage mothers and integrated them into self-reliance initiatives." },
        { title: "Financial Independence", text: "AHDO has established over 19 women's savings groups that promote financial independence and stability." },
        { title: "Job Creation", text: "As our graduates establish their businesses, they find personal economic success and create jobs for others in the community." },
        { title: "Empowerment of Women", text: "Over 60% of female participants have gained employment or started their own ventures through post-training." },
        { title: "Youth Workshops", text: "Hosted numerous workshops reaching over 500 young people, focusing on financial literacy and personal development." },
        { title: "Follow-up Programs", text: "Implementation of tracking programs led to actionable insights, helping the organization continually improve training offerings." }
      ],
      impact: "Through these accomplishments, the Assured Hope Organization has demonstrated its commitment to empowering youth, reducing unemployment, and fostering growth."
    },
    {
      id: 7,
      title: "Target Beneficiaries",
      description: "Our work primarily serves:",
      isBeneficiaries: true,
      gridItems: [
        { title: "Vulnerable Children", text: "Orphans and those from disadvantaged backgrounds lacking access to education." },
        { title: "Youths", text: "School dropouts, unemployed youth, and teenage mothers seeking opportunities for skills development and employment." },
        { title: "School Dropouts", text: "Youths that have left the formal education system but are eager to acquire vocational skills for economic success." },
        { title: "Women", text: "Particularly those facing economic hardships, gender-based challenges, and limited opportunities." },
        { title: "Underprivileged Communities", text: "Families from low-income backgrounds who lack access to vocational training or educational resources." }
      ],
      impact: "By identifying and targeting these specific beneficiary groups, the Assured Hope Organization aims to create inclusive, impactful training programs."
    }
  ];

  return (
    <section id="projects" className="pt-4 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-black text-[#1565c0] mb-2 inline-block border-b-4 border-[#fff9c4]">
            Our Key Programs
          </h2>
        </div>

        <div className="space-y-16">
          {projectData.map((project) => (
            <div 
              key={project.id} 
              id={`prog-${project.id}`} 
              className={`w-full scroll-mt-24 ${project.isImpact || project.isBeneficiaries ? 'pt-2' : ''}`}
            >
              <div className={`${project.isImpact || project.isBeneficiaries ? 'mb-4' : 'mb-8'}`}>
                <h3 className="text-3xl font-bold text-[#1565c0] mb-3">
                  {project.isImpact || project.isBeneficiaries ? "" : `${project.id}. `}
                  {project.title}
                </h3>
                <div className="space-y-3 text-gray-700 text-lg leading-relaxed font-medium">
                  <p>{project.description}</p>
                  
                  {project.points && (
                    <div className="space-y-2 mt-2">
                      {project.points.map((p, i) => (
                        <p key={i} className="pl-4 border-l-4 border-gray-100 italic text-gray-600">{p}</p>
                      ))}
                    </div>
                  )}

                  {project.gridItems && (
                    <div className="grid md:grid-cols-3 gap-6 mb-8 mt-6">
                      {project.gridItems.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                          <h4 className="font-black text-[#2e7d32] mb-2 text-lg uppercase tracking-tight">
                            {idx + 1}. {item.title}
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed font-medium">
                            {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className={`p-6 bg-[#fff9c4] rounded-xl border-l-8 border-[#2e7d32] shadow-sm ${project.isImpact || project.isBeneficiaries ? 'mt-4' : 'mt-6'}`}>
                    <span className="font-black uppercase text-xs block mb-1 tracking-widest text-[#1565c0]">
                      {project.isImpact ? "Achievement Summary" : project.isBeneficiaries ? "Our Goal" : "Impact"}
                    </span>
                    <p className="text-gray-800 leading-relaxed font-medium">
                      {project.impact}
                    </p>
                  </div>
                </div>
              </div>

              {project.isEducation && (
                <div className="space-y-8 mt-8">
                  {project.successStories.map((story, sIdx) => (
                    <div key={sIdx} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row group w-full">
                      <div className="md:w-[350px] h-64 md:h-auto overflow-hidden flex-shrink-0 bg-gray-50 border-r border-gray-100">
                        <img src={story.img} alt={story.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <h4 className="text-2xl font-black text-gray-800 mb-4">{story.name}</h4>
                        <div className="relative">
                          <span className="text-4xl text-[#fff9c4] font-serif absolute -top-4 -left-2 opacity-60">“</span>
                          <p className="text-gray-600 leading-relaxed font-medium italic text-sm md:text-base relative z-10 pl-5">{story.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {!project.isImpact && !project.isBeneficiaries && (
                <div className="w-full mt-6">
                  {project.isGallery ? (
                    <div>
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg bg-gray-100">
                        {project.images.map((img, i) => (
                          <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === activeIdx ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={img} alt="Training" className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                      {project.caption && (
                         <p className="mt-4 text-center italic text-gray-500 font-semibold">{project.caption}</p>
                      )}
                    </div>
                  ) : project.isCommunity ? (
                    <div>
                      <div className="grid md:grid-cols-2 gap-6 items-start">
                        {project.communityImages.map((img, i) => (
                          <div key={i} className="w-full">
                            <img src={img} alt="Community" className="w-full h-auto rounded-xl shadow-lg" />
                          </div>
                        ))}
                      </div>
                      {project.caption && (
                        <p className="mt-4 text-center italic text-gray-500 font-semibold">{project.caption}</p>
                      )}
                    </div>
                  ) : !project.isEducation ? (
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-lg bg-gray-100">
                      <img src={project.image} alt="Project" className="w-full h-full object-cover" />
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;