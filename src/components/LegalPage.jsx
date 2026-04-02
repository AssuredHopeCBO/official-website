import React from 'react';

const LegalPage = ({ title, lastUpdated, children }) => {
    return (
        <section className="py-20 px-6 bg-[#f8faf8] min-h-screen font-sans text-left">
            <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-xl p-10 md:p-16">
                
                {/* Header */}
                <div className="mb-10 border-b border-gray-100 pb-8">
                    {/* Changed Link to a regular anchor tag to match your setup */}
                    <a href="/donate" className="text-xs font-black text-[#2e7d32] hover:opacity-70 transition tracking-widest uppercase mb-6 inline-block">
                        ← Back to Donate
                    </a>
                    <h1 className="text-4xl font-black text-gray-800 mb-2">{title}</h1>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                        Last Updated: {lastUpdated}
                    </p>
                </div>

                {/* Content Area */}
                <div className="text-gray-600 leading-relaxed space-y-6">
                    {children}
                </div>

                {/* Footer Note */}
                <div className="mt-16 pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Assured Hope and Destiny Outreach</p>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Secure Payments via Pesapal</p>
                </div>
            </div>
        </section>
    );
};

export default LegalPage;