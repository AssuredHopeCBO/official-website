import React from 'react'; // ADD THIS LINE
import LegalPage from './LegalPage';

const RefundPolicy = () => (
    <LegalPage title="Refund & Cancellation" lastUpdated="March 2026">
        <h3 className="text-lg font-bold text-gray-800">1. No Refund Policy</h3>
        <p>As a non-profit foundation, donations are generally non-refundable. They are immediately allocated to community projects.</p>
        
        <h3 className="text-lg font-bold text-gray-800">2. Error Corrections</h3>
        <p>If a technical error or accidental duplicate payment occurs, please contact <b>assuredhopeanddestinyoutreach@gmail.com</b> within 7 days for a review.</p>
    </LegalPage>
);

export default RefundPolicy; // ENSURE THIS IS HERE
