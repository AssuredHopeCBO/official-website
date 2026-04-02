import React from 'react';

const Success = () => {
    // Function to go back home
    const goHome = () => { window.location.href = '/'; };

    return (
        <section className="py-20 px-6 bg-[#f8faf8] min-h-screen font-sans flex items-center justify-center">
            <div className="max-w-2xl w-full bg-white rounded-[2rem] shadow-2xl p-10 md:p-16 text-center border border-gray-50">
                
                {/* Success Icon */}
                <div className="w-20 h-20 bg-[#e8f5e9] rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg className="w-10 h-10 text-[#2e7d32]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                </div>

                <h1 className="text-4xl font-black text-gray-800 mb-4">Thank You!</h1>
                <p className="text-[#2e7d32] font-black uppercase tracking-widest text-xs mb-8">Donation Received Successfully</p>
                
                <div className="text-gray-600 leading-relaxed mb-10 space-y-4">
                    <p>Your generosity has a direct impact. These funds will be immediately directed towards our <b>Education Support</b> and <b>Community Empowerment</b> programs.</p>
                    <p className="text-sm italic">"Mentoring and Empowering the Vulnerable in Society."</p>
                </div>

                <div className="bg-[#fff9c4] p-6 rounded-2xl mb-10 text-left border-l-4 border-[#1565c0]">
                    <p className="text-[10px] font-black text-[#1565c0] uppercase tracking-widest mb-1">Receipt Information</p>
                    <p className="text-xs text-gray-700 font-medium">A confirmation receipt has been sent to your email via <b>Pesapal</b>. Please keep it for your tax records.</p>
                </div>

                <button 
                    onClick={goHome}
                    className="w-full bg-[#2e7d32] text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-[#1b5e20] transition-all shadow-lg active:scale-95"
                >
                    Back to Home
                </button>

                <p className="mt-8 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                    Assured Hope and Destiny Outreach • Nairobi, Kenya
                </p>
            </div>
        </section>
    );
};

export default Success;