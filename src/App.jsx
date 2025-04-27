import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Calculator from './components/Calculator';
import SEOContent from './components/SEOContent';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function App() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Remove dark mode class if present
    document.documentElement.classList.remove('dark');
  }, []);

  const HomePage = () => (
    <>
      <Header theme={theme} />
      <main className="container mx-auto px-4 py-8">
        <Calculator theme={theme} />
        <SEOContent theme={theme} />
      </main>
      <Footer />
    </>
  );

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;