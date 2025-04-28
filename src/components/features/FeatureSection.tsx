import { DollarSign, PieChart, RefreshCw, TrendingUp, Clock, Percent } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    {
      icon: <DollarSign className="h-6 w-6 text-primary-600" />,
      title: 'Monthly Payment Calculation',
      description: 'Calculate your monthly mortgage payment including principal, interest, taxes, and insurance.'
    },
    {
      icon: <PieChart className="h-6 w-6 text-primary-600" />,
      title: 'Payment Breakdown',
      description: 'See a detailed breakdown of where your money goes each month and over the life of your loan.'
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-primary-600" />,
      title: 'Scenario Comparison',
      description: 'Compare different loan terms, interest rates, and down payment amounts to find your optimal mortgage.'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary-600" />,
      title: 'Amortization Schedule',
      description: 'View your complete amortization schedule showing how your balance decreases over time.'
    },
    {
      icon: <Clock className="h-6 w-6 text-primary-600" />,
      title: 'Early Payoff Analysis',
      description: 'See how making extra payments can reduce your loan term and save you thousands in interest.'
    },
    {
      icon: <Percent className="h-6 w-6 text-primary-600" />,
      title: 'PMI Estimation',
      description: 'Calculate when you\'ll reach 20% equity and can remove private mortgage insurance.'
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Make Informed Decisions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive mortgage calculator provides all the tools you need to understand your home loan options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-4 bg-primary-50 w-12 h-12 flex items-center justify-center rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;