import { Calculator } from 'lucide-react';

const CallToAction = () => {
  const handleScrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-primary-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Calculate Your Mortgage?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Use our free mortgage calculator to estimate monthly payments, see amortization schedules, and find the best loan option for your needs.
          </p>
          <button
            onClick={handleScrollToCalculator}
            className="inline-flex items-center px-6 py-3 bg-white text-primary-700 rounded-lg font-medium shadow-lg hover:bg-gray-100 transition-colors"
          >
            <Calculator className="mr-2 h-5 w-5" />
            Try the Calculator
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;