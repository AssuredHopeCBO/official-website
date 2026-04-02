import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [donations, setDonations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // 1. Grab the secret token from browser memory
            const token = localStorage.getItem('ahdo_token');

            if (!token) {
                window.location.href = '/'; // No token? Boot them out!
                return;
            }

            try {
                // 2. Call the protected records route with the Bearer Token
                const response = await axios.get('http://localhost:5000/api/v1_secure_gate_hope/records', {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setDonations(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Unauthorized access or expired session");
                localStorage.removeItem('ahdo_token');
                window.location.href = '/v1_secure_gate_hope';
            }
        };

        fetchData();
    }, []);

    const logout = () => {
        localStorage.removeItem('ahdo_token');
        window.location.href = '/';
    };

    if (loading) return <div style={{padding: '50px', textAlign: 'center', color: '#1565c0'}}>Verifying Security Credentials...</div>;

    return (
        <div style={{ padding: '40px', fontFamily: 'sans-serif', backgroundColor: '#f4f7f6', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                <h1 style={{ color: '#1565c0', margin: 0 }}>Donation Registry</h1>
                <button onClick={logout} style={{ padding: '10px 20px', backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>
                    SECURE LOGOUT
                </button>
            </div>

            <div style={{ background: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead style={{ backgroundColor: '#fff9c4', color: '#1565c0' }}>
                        <tr>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Donor Name</th>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Amount (KES)</th>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Reference</th>
                            <th style={{ padding: '15px', textAlign: 'left' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {donations.length > 0 ? donations.map((item) => (
                            <tr key={item.id} style={{ borderBottom: '1px solid #eee' }}>
                                <td style={{ padding: '15px' }}>{item.donor_name}</td>
                                <td style={{ padding: '15px', fontWeight: 'bold', color: '#2e7d32' }}>{item.amount}</td>
                                <td style={{ padding: '15px', fontSize: '12px', color: '#666' }}>{item.bank_ref}</td>
                                <td style={{ padding: '15px', fontSize: '12px' }}>{new Date(item.date_received).toLocaleDateString()}</td>
                            </tr>
                        )) : (
                            <tr>
                                <td colSpan="4" style={{ padding: '30px', textAlign: 'center', color: '#999' }}>No donation records found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminDashboard;