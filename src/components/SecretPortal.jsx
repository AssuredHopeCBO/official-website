import React, { useState } from 'react';
import axios from 'axios';

const SecretPortal = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // This calls the "Secret Gate" we tested in the terminal
            const response = await axios.post('http://localhost:5000/api/v1_secure_gate_hope/login', {
                user,
                pass
            });

            if (response.data.success) {
                // High-Tech Security: Save the token in the browser's memory
                localStorage.setItem('ahdo_token', response.data.token);
                
                // Send the admin to the private dashboard
                window.location.href = '/dashboard_private_view';
            }
        } catch (err) {
            setError('Access Denied: Invalid Credentials');
        }
    };

    return (
        <div style={{ backgroundColor: '#121212', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'sans-serif' }}>
            <form onSubmit={handleLogin} style={{ padding: '40px', background: '#1e1e1e', borderRadius: '8px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', width: '300px' }}>
                <h2 style={{ color: '#fff9c4', textAlign: 'center', marginBottom: '20px' }}>SECURE GATE</h2>
                
                {error && <p style={{ color: '#ff5252', fontSize: '12px', textAlign: 'center' }}>{error}</p>}
                
                <input 
                    type="text" 
                    placeholder="Admin ID" 
                    onChange={(e) => setUser(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '15px', background: '#333', border: 'none', color: 'white' }}
                />
                
                <input 
                    type="password" 
                    placeholder="Security Key" 
                    onChange={(e) => setPass(e.target.value)}
                    style={{ width: '100%', padding: '10px', marginBottom: '20px', background: '#333', border: 'none', color: 'white' }}
                />
                
                <button type="submit" style={{ width: '100%', padding: '10px', background: '#2e7d32', color: 'white', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                    AUTHENTICATE
                </button>
            </form>
        </div>
    );
};

export default SecretPortal;