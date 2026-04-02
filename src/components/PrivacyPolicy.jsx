import React from 'react';
import LegalPage from './LegalPage';

const PrivacyPolicy = () => {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="March 2026">
      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">1. Information We Collect</h3>
          <p>We collect personal information that you voluntarily provide to us when you make a donation. This includes your name, email address, and phone number. We use this information solely to process your gift and provide tax receipts.</p>
        </div>
        
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">2. Payment Security</h3>
          <p>Assured Hope does not store or process your credit card or bank details on our servers. All payments are securely handled by <b>Pesapal</b>, a PCI-DSS compliant payment provider. Your data is encrypted using industry-standard SSL technology.</p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">3. Data Usage</h3>
          <p>Your information is never sold, rented, or traded to third parties. We may use your email to send updates about our impact, which you can opt-out of at any time.</p>
        </div>
      </div>
    </LegalPage>
  );
};

export default PrivacyPolicy;