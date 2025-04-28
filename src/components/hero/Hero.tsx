import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const handleScrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-primary-700 to-primary-900 text-white py-20 md:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Calculate Your Mortgage Payments With Confidence
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 md:mb-10">
            Our free mortgage calculator helps you estimate monthly payments, understand amortization schedules,
            and find the right loan for your budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleScrollToCalculator}
              className="px-6 py-3 bg-white text-primary-700 rounded-lg font-medium shadow-md hover:shadow-lg transition-all flex items-center justify-center group"
            >
              Try Calculator
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#guide"
              className="px-6 py-3 border border-white/30 bg-transparent hover:bg-white/10 rounded-lg font-medium transition-colors"
            >
              Learn About Mortgages
            </a>
          </div>
        </div>
      </div>

      {/* Wave-shaped divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-16 text-white"
          fill="currentColor"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,141.89,111.27,221.93,104.09Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;