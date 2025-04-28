import { useState } from 'react';
import { PaymentBreakdown, AmortizationItem } from '../../types/calculator';
import { formatCurrency } from '../../utils/calculatorUtils';
import PaymentChart from './PaymentChart';
import AmortizationTable from './AmortizationTable';

interface MortgageResultsProps {
  breakdown: PaymentBreakdown;
  schedule: AmortizationItem[];
  loanAmount: number;
}

const MortgageResults = ({ breakdown, schedule, loanAmount }: MortgageResultsProps) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'schedule'>('summary');
  
  const totalInterest = schedule.reduce((sum, item) => sum + item.interest, 0);
  const totalPayments = schedule.reduce((sum, item) => sum + item.payment, 0);

  const tabs = [
    { id: 'summary', label: 'Payment Summary' },
    { id: 'schedule', label: 'Amortization Schedule' }
  ];

  return (
    <div className="animate-fade-in">
      <div className="bg-primary-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-medium text-gray-700 mb-2">Monthly Payment</h3>
        <div className="flex items-baseline flex-wrap">
          <span className="text-3xl md:text-4xl font-bold text-primary-700">
            {formatCurrency(breakdown.total)}
          </span>
          <span className="ml-2 text-sm text-gray-500">per month</span>
        </div>
      </div>

      <div className="mb-6 overflow-x-auto">
        <div className="flex border-b border-gray-200 min-w-full">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'summary' | 'schedule')}
              className={`py-2 px-4 font-medium text-sm focus:outline-none whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-primary-500 text-primary-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'summary' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Loan Amount</h4>
              <p className="text-xl font-semibold">{formatCurrency(loanAmount)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Total Interest</h4>
              <p className="text-xl font-semibold">{formatCurrency(totalInterest)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Total of All Payments</h4>
              <p className="text-xl font-semibold">{formatCurrency(totalPayments)}</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="text-sm font-medium text-gray-500 mb-1">Loan-to-Value Ratio</h4>
              <p className="text-xl font-semibold">
                {(loanAmount / (loanAmount + breakdown.principal) * 100).toFixed(1)}%
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="text-base font-medium mb-4">Monthly Payment Breakdown</h4>
            <div className="h-64 sm:h-72">
              <PaymentChart breakdown={breakdown} />
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h4 className="text-base font-medium mb-4">Payment Breakdown</h4>
            <div className="space-y-3">
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Principal & Interest</span>
                <span className="font-medium">{formatCurrency(breakdown.principal)}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Property Tax</span>
                <span className="font-medium">{formatCurrency(breakdown.propertyTax)}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-gray-100">
                <span className="text-gray-600">Home Insurance</span>
                <span className="font-medium">{formatCurrency(breakdown.homeInsurance)}</span>
              </div>
              {breakdown.pmi > 0 && (
                <div className="flex justify-between pb-2 border-b border-gray-100">
                  <span className="text-gray-600">PMI</span>
                  <span className="font-medium">{formatCurrency(breakdown.pmi)}</span>
                </div>
              )}
              <div className="flex justify-between pt-1 font-semibold">
                <span>Total Monthly Payment</span>
                <span className="text-primary-700">{formatCurrency(breakdown.total)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'schedule' && (
        <div className="overflow-hidden">
          <AmortizationTable schedule={schedule} />
        </div>
      )}
    </div>
  );
};

export default MortgageResults;