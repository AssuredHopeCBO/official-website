import React from 'react';

const Support = () => {
  const barriers = [
    { title: "Lack of sustainable funding", text: "Without financial backing, our programs are limited in scale and continuity. We rely on volunteer time and personal sacrifices, which limits our ability to reach more women or provide consistent, structured services." },
    { title: "High poverty levels", text: "Beneficiaries often need long term support, stretching the organizations limited." },
    { title: "Youth unemployment", text: "Few employment opportunities reduce the lasting impact of training programs that Assured Hope Organization is offering to the youths." },
    { title: "Cultural and gender inequalities", text: "Social norms sometimes hinder full participation of women, girls and vulnerable groups." },
    { title: "Low awareness and participation", text: "Some of the community members and especially in our area of operation lack interest, reducing program uptake." },
    { title: "Resource constraints", text: "Limited and unpredictable funding restricts the growth and consistency our program." },
    { title: "Poverty in the community", text: "Widespread economic hardship makes it difficult for families to sustain education, health and livelihoods." },
    { title: "Youth of funding after training", text: "Lack of job opportunities leaves many young people vulnerable to crime, drugs and hopelessness, even after training." },
    { title: "Cultural and gender norms", text: "Deep rooted practices continue to limit opportunities for women and girls." }
  ];

  const supportNeeds = [
    "Seed and operational funding; to cover, training materials, venue hire transport and coordination cost",
    "Skills training and jobs access; market linked vocational training and partnerships with ethical employers",
    "Training equipment's, tools and skills development resources",
    "Strengthening mentorship and psychosocial support programs",
    "Community development and awareness initiatives",
    "Safe spaces for women; a permanent urban women's center for meetings, counselling and skills-building",
    "Networking and partnership opportunities"
  ];

  return (
    <section id="support" className="pt-4 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- SECTION 1: PARTNERSHIP & NETWORK (NOW AT TOP) --- */}
        <div id="networks" className="mb-16">
          <h2 className="text-4xl font-black text-[#1565c0] mb-2 inline-block border-b-4 border-[#fff9c4]">
            Partnership & Network
          </h2>
          <p className="mt-4 text-gray-700 mb-8 font-medium italic text-lg">
            We recognize that lasting impact requires collaboration. Assured Hope CBO Partners with:
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#2e7d32]">
              <span className="text-[#2e7d32] font-black text-2xl mb-1 block">a.</span>
              <p className="font-bold text-gray-800 uppercase text-sm tracking-wide leading-tight">Local government offices</p>
              <p className="text-gray-600 text-sm mt-1">for compliance and support.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#2e7d32]">
              <span className="text-[#2e7d32] font-black text-2xl mb-1 block">b.</span>
              <p className="font-bold text-gray-800 uppercase text-sm tracking-wide leading-tight">Schools and training institutions</p>
              <p className="text-gray-600 text-sm mt-1">for education and skills development.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#2e7d32]">
              <span className="text-[#2e7d32] font-black text-2xl mb-1 block">c.</span>
              <p className="font-bold text-gray-800 uppercase text-sm tracking-wide leading-tight">Other CBOs and NGOs</p>
              <p className="text-gray-600 text-sm mt-1">to share resources and knowledge.</p>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: KEY BARRIERS --- */}
        <div className="mb-8">
          <h2 className="text-4xl font-black text-[#1565c0] mb-2 inline-block border-b-4 border-[#fff9c4]">
            Key Barriers
          </h2>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed font-medium">
            Despite the progress, Assured Hope CBO continues to face barriers that limit the scale and sustainability of its impact. Understanding these challenges helps us refine our approach and identify opportunities for stronger partnerships and solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {barriers.map((item, idx) => (
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

        {/* --- SECTION 3: CURRENT NEEDS & OPPORTUNITIES --- */}
        <div className="mb-12 pt-4">
          <h2 className="text-4xl font-black text-[#1565c0] mb-2 inline-block border-b-4 border-[#fff9c4]">
            Current Needs & Opportunities
          </h2>
          <p className="mt-4 text-gray-700 font-bold text-xl">
            To expand and sustain our work, Assured hope CBO seeks support in:
          </p>
          <div className="mt-6 space-y-4 text-gray-700 font-medium">
            <p><span className="text-[#1565c0] font-black">1. Education support expansion:</span> We require more resources for education, youth skills, mentorship and community awareness, with strong opportunities for partnership to expand impact and sustainability.</p>
            <p><span className="text-[#1565c0] font-black">2. Training equipment's and tools:</span> (e.g. sewing machines, baking Ovens, Hairdressing Kits & computers). The organization requires support for education, training equipment and tools, mentorship and community awareness with strong opportunities for partnerships to expand impact and sustainability.</p>
            <p><span className="text-[#1565c0] font-black">3. Seed funding</span> to strengthen women's economic groups and youth enterprises.</p>
            <p><span className="text-[#1565c0] font-black">4. Networking and partnerships</span> – the organization seeks to build strong networks and partnerships with Donors, NGOs, and Private sector and government agencies.</p>
            <p><span className="text-[#1565c0] font-black">5. Capacity building</span> for staff and volunteers to deliver impactful programs.</p>
          </div>
        </div>

        {/* --- SECTION 4: SUPPORT REQUIRED --- */}
        <div className="mb-16 border-t border-gray-200 pt-12">
          <div className="mb-8">
            <h2 className="text-4xl font-black text-[#1565c0] mb-2 inline-block border-b-4 border-[#fff9c4]">
              Support Required
            </h2>
            <p className="mt-4 text-gray-700 font-bold text-xl">To break these barriers and expand our impact, AHO urgently needs:</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-4">
            {supportNeeds.map((need, idx) => (
              <div key={idx} className="flex items-start gap-3 py-2 border-b border-gray-100">
                <span className="text-[#2e7d32] text-xl">✔</span>
                <p className="font-medium text-sm md:text-base leading-snug text-gray-700">{need}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Support;