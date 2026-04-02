import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer'; 
import Support from './components/Support'; 
import SecretPortal from './components/SecretPortal';
import AdminDashboard from './components/AdminDashboard';
import Donate from './components/Donate';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import Success from './components/Success'; // Added this import

const App = () => {
  const [isTeamTab, setIsTeamTab] = useState(false);
  const [isSupportTab, setIsSupportTab] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash;
      setIsTeamTab(currentHash === '#team-view');
      setIsSupportTab(currentHash === '#partnerships');
      
      if (currentHash === '#team-view' || currentHash === '#partnerships' || currentHash === '') {
        window.scrollTo(0, 0);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const currentPath = window.location.pathname;

  // 1. Admin/Portal Logic
  if (currentPath === '/v1_secure_gate_hope') return <SecretPortal />;
  if (currentPath === '/dashboard_private_view') return <AdminDashboard />;

  // 2. Legal Routes (Privacy/Refund)
  if (currentPath === '/privacy' || currentPath === '/refund') {
    return (
      <div className="min-h-screen bg-white font-sans text-left">
        <Header setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
        <main>
          {currentPath === '/privacy' ? <PrivacyPolicy /> : <RefundPolicy />}
        </main>
        <Footer setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
      </div>
    );
  }

  // 2b. NEW: Success Page Logic
  if (currentPath === '/success') {
    return (
      <div className="min-h-screen bg-white font-sans text-left">
        <Header setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
        <main>
          <Success />
        </main>
        <Footer setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
      </div>
    );
  }

  // 3. Donate Page Logic
  if (currentPath === '/donate') {
    return (
      <div className="min-h-screen bg-white font-sans text-left">
        <Header setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
        <main><Donate /></main>
        <Footer setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
      </div>
    );
  }

  // 4. Team or Support Views
  if (isTeamTab || isSupportTab) {
    return (
      <div className="min-h-screen bg-white font-sans text-left">
        <Header setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
        <main className="py-12">
          {isTeamTab ? <About onlyTeam={true} /> : <Support />}
        </main>
        <Footer setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
      </div>
    );
  }
  
  // 5. Default Home View
  return (
    <div className="min-h-screen bg-white font-sans text-left">
      <Header setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
      <main>
        {/* Changed min-h to md:min-h-[70vh] and py-20 to py-12 md:py-20 */}
        <section className="bg-[#2e7d32] md:min-h-[70vh] flex items-center px-6 md:px-16 py-12 md:py-20">
          <div className="max-w-4xl text-white">
            <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-[#fff9c4]">Mentoring and Empowering the Vulnerable In The Society.</span>
              <span className="text-xl md:text-3xl font-medium italic block mt-2 opacity-90">Creating Hope, Transforming lives</span>
            </h1>
            <a href="#about" className="border-2 border-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#2e7d32] transition inline-block">
              Explore Projects
            </a>
          </div>
        </section>
        <About onlyTeam={false} />
        <Projects />
      </main>
      <Footer setIsTeamTab={setIsTeamTab} setIsSupportTab={setIsSupportTab} />
    </div>
  );
};

export default App;
