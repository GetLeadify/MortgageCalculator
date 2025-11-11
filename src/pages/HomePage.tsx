import Hero from '../components/hero/Hero';
import FeatureSection from '../components/features/FeatureSection';
import MortgageCalculator from '../components/calculator/MortgageCalculator';
import MortgageGuide from '../components/guide/MortgageGuide';
import CallToAction from '../components/cta/CallToAction';
import AdComponent from '../components/ads/AdComponent';
import { useEffect } from 'react';

const HomePage = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = "Mortgage Calculator - Calculate Your Home Loan Payments";
  }, []);

  return (
    <div>
      <Hero />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <MortgageCalculator />
      </div>
      <AdComponent />
      <FeatureSection />
      <AdComponent />
      <MortgageGuide />
      <CallToAction />
    </div>
  );
};

export default HomePage;