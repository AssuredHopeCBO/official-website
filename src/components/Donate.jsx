import React, { useState } from 'react';
// Import your local image here. Ensure the file is in src/assets/donation.jpg
import donationPhoto from '../assets/donation.jpg'; 

const Donate = () => {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState('1000'); 
    const [currency, setCurrency] = useState('KES'); 
    const [coverFee, setCoverFee] = useState(false);
    const [loading, setLoading] = useState(false);

    // Comprehensive Currency Symbol Mapping (Kept exactly as yours)
    const symbols = { 
        // Global High Value
        'USD': '$', 'EUR': '€', 'GBP': '£', 'KWD': 'KD', 'CHF': 'Fr',
        // Africa
        'KES': 'Ksh', 'ZAR': 'R', 'NGN': '₦', 'EGP': 'E£', 'GHS': 'GH₵',
        // Asia
        'AED': 'DH', 'SAR': 'SR', 'INR': '₹', 'CNY': '¥', 'JPY': '¥', 'SGD': 'S$'
    };
    
    const s = symbols[currency] || '$';

    const baseAmount = parseFloat(amount || 0);
    const feeAmount = (baseAmount * 0.035);
    const totalAmount = coverFee ? (baseAmount + feeAmount) : baseAmount;

    const handlePesapalRedirect = () => {
        setLoading(true);
        setTimeout(() => {
            // Redirecting to the Live Pesapal Gateway (No localhost)
            window.location.href = 'https://pay.pesapal.com/v3'; 
        }, 600);
    };

    const renderStep = () => {
        switch(step) {
            case 1:
                return (
                    <div className="animate-fade-in text-left">
                        <h3 className="text-xl font-bold mb-6 text-gray-800">Select currency & amount</h3>
                        <div className="flex items-center border-2 border-gray-200 rounded-xl p-4 mb-8 focus-within:border-[#2e7d32] transition">
                            <select 
                                value={currency} 
                                onChange={(e) => setCurrency(e.target.value)} 
                                className="bg-transparent font-bold border-none outline-none mr-2 cursor-pointer text-gray-700 text-sm md:text-base"
                            >
                                <optgroup label="Global">
                                    <option value="USD">USD - US Dollar</option>
                                    <option value="EUR">EUR - Euro</option>
                                    <option value="GBP">GBP - British Pound</option>
                                    <option value="KWD">KWD - Kuwaiti Dinar</option>
                                </optgroup>
                                <optgroup label="Africa">
                                    <option value="KES">KES - Kenya Shilling</option>
                                    <option value="ZAR">ZAR - SA Rand</option>
                                    <option value="NGN">NGN - Nigeria Naira</option>
                                    <option value="EGP">EGP - Egypt Pound</option>
                                    <option value="GHS">GHS - Ghana Cedi</option>
                                </optgroup>
                                <optgroup label="Asia & Middle East">
                                    <option value="AED">AED - UAE Dirham</option>
                                    <option value="SAR">SAR - Saudi Riyal</option>
                                    <option value="INR">INR - India Rupee</option>
                                    <option value="CNY">CNY - China Yuan</option>
                                    <option value="JPY">JPY - Japan Yen</option>
                                    <option value="SGD">SGD - Singapore Dollar</option>
                                </optgroup>
                            </select>
                            <span className="font-bold text-gray-400 mr-2 border-l pl-3">{s}</span>
                            <input 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)} 
                                placeholder="0.00" 
                                className="w-full text-xl font-bold outline-none text-gray-800" 
                            />
                        </div>
                        <button onClick={() => setStep(2)} className="w-full bg-[#1e1e1e] text-white py-4 rounded-xl font-bold hover:bg-black transition-all shadow-lg">Continue</button>
                    </div>
                );
            case 2:
                return (
                    <div className="animate-fade-in text-left">
                        <button onClick={() => setStep(1)} className="text-sm text-gray-500 mb-4 hover:text-[#2e7d32] transition">← Back</button>
                        <h3 className="text-xl font-bold mb-2 text-gray-800">Secure Checkout</h3>
                        <p className="text-3xl font-black mb-8 text-[#2e7d32]">{s}{baseAmount.toLocaleString()}</p>
                        
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-8">
                            <div className="flex items-center justify-between mb-4">
                                <span className="font-bold text-gray-700 text-sm">Payment Gateway:</span>
                                <div className="flex gap-4 items-center">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-5 w-auto" alt="Mastercard" />
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 w-auto" alt="PayPal" />
                                </div>
                            </div>
                            <p className="text-[12px] text-gray-500 italic leading-snug">
                                Secure processing by Pesapal. Supports all global cards.
                            </p>
                        </div>

                        <div className="bg-[#e8f5e9] p-4 rounded-xl mb-8 flex items-center">
                            <input type="checkbox" id="fee" checked={coverFee} onChange={() => setCoverFee(!coverFee)} className="w-5 h-5 accent-[#2e7d32] cursor-pointer"/>
                            <label htmlFor="fee" className="ml-3 text-sm text-gray-700 cursor-pointer">
                                Cover the <b>{s}{feeAmount.toFixed(2)}</b> transaction fee.
                            </label>
                        </div>

                        <button onClick={handlePesapalRedirect} disabled={loading} className="w-full bg-[#2e7d32] text-white py-4 rounded-xl font-bold shadow-xl hover:bg-[#1b5e20] transition-all transform hover:scale-[1.01]">
                            {loading ? "Connecting..." : `Proceed to Secure Payment (${s}${totalAmount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})})`}
                        </button>
                    </div>
                );
            default: return null;
        }
    }

    return (
        <section className="py-10 md:py-20 px-4 bg-[#f0f2f0] min-h-screen flex justify-center items-center font-sans">
            {/* The min-h-[650px] here prevents the "jumping" effect */}
            <div className="max-w-5xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">
                
                {/* Image Section - Cleaned up (No Green Tint) */}
                <div className="w-full md:w-1/2 h-64 md:h-auto relative bg-gray-100">
                    <img 
                        src={donationPhoto} 
                        alt="Community Impact" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Darker subtle gradient for text readability without changing photo colors */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6 md:p-10">
                        <p className="text-white italic text-md md:text-lg font-medium drop-shadow-md">
                            "Transforming lives, one community at a time."
                        </p>
                    </div>
                </div>

                {/* Form Section */}
                <div className="flex-1 p-8 md:p-14 flex flex-col justify-center bg-white">
                    <div className="mb-8 text-left">
                        <h2 className="text-2xl font-black text-[#2e7d32] mb-3 leading-tight">Your Generosity Creates Lasting Hope.</h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Your gift has the power to transform lives. By supporting Assured Hope, you’re investing in communities and creating lasting change.
                        </p>
                    </div>
                    {renderStep()}
                </div>

            </div>
        </section>
    );
};

export default Donate;