import { useState, useEffect } from 'react';
import MortgageForm from './MortgageForm';
import MortgageResults from './MortgageResults';
import { MortgageFormData, PaymentBreakdown, AmortizationItem } from '../../types/calculator';
import { calculatePaymentBreakdown, calculateAmortizationSchedule } from '../../utils/calculatorUtils';

const defaultFormData: MortgageFormData = {
  loanAmount: 300000,
  interestRate: 6.5,
  loanTerm: 30,
  downPayment: 60000,
  propertyTax: 2400,
  homeInsurance: 1200,
  pmi: 0.5
};

const MortgageCalculator = () => {
  const [formData, setFormData] = useState<MortgageFormData>(defaultFormData);
  const [breakdown, setBreakdown] = useState<PaymentBreakdown | null>(null);
  const [schedule, setSchedule] = useState<AmortizationItem[]>([]);
  const [isCalculated, setIsCalculated] = useState(false);

  useEffect(() => {
    if (isCalculated) {
      const newBreakdown = calculatePaymentBreakdown(formData);
      const newSchedule = calculateAmortizationSchedule(formData);
      
      setBreakdown(newBreakdown);
      setSchedule(newSchedule);
    }
  }, [formData, isCalculated]);

  const handleInputChange = (name: string, value: number) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCalculate = () => {
    const newBreakdown = calculatePaymentBreakdown(formData);
    const newSchedule = calculateAmortizationSchedule(formData);
    
    setBreakdown(newBreakdown);
    setSchedule(newSchedule);
    setIsCalculated(true);

    // Smooth scroll to results with offset for mobile
    setTimeout(() => {
      const resultsElement = document.getElementById('results');
      if (resultsElement) {
        const offset = window.innerWidth < 768 ? -20 : 0; // Add offset for mobile
        const elementPosition = resultsElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform" id="calculator">
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Mortgage Calculator</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div className="lg:col-span-5">
            <MortgageForm 
              formData={formData} 
              onInputChange={handleInputChange} 
              onCalculate={handleCalculate}
            />
          </div>
          
          <div className="lg:col-span-7" id="results">
            {isCalculated && breakdown && (
              <MortgageResults 
                breakdown={breakdown} 
                schedule={schedule}
                loanAmount={formData.loanAmount - formData.downPayment}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;