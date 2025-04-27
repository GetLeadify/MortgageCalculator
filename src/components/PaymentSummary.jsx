import React from 'react';
import { formatCurrency } from '../utils/formatters';

function PaymentSummary({ results, inputs, theme }) {
  const costBreakdown = [
    {
      name: 'Principal & Interest',
      amount: results.monthlyPrincipalInterest,
      color: 'bg-blue-500',
    },
    {
      name: 'Property Tax',
      amount: results.monthlyTaxes,
      color: 'bg-emerald-500',
    },
    {
      name: 'Home Insurance',
      amount: results.monthlyInsurance,
      color: 'bg-amber-500',
    },
    {
      name: 'PMI',
      amount: results.monthlyPMI,
      color: 'bg-orange-500',
    },
    {
      name: 'HOA',
      amount: results.monthlyHOA,
      color: 'bg-violet-500',
    },
    {
      name: 'Other',
      amount: results.monthlyOther,
      color: 'bg-rose-500',
    },
  ];

  return (
    <div className="card">
      <h3 className="mb-4 text-lg sm:text-xl font-bold">Payment Summary</h3>
      
      <div className="mb-6 flex flex-col rounded-lg bg-blue-50 p-4 dark:bg-blue-900/30">
        <span className="mb-1 text-xs sm:text-sm text-blue-700 dark:text-blue-200">
          Estimated Monthly Payment
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-200">
          {formatCurrency(results.monthlyPayment)}
        </span>
      </div>
      
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Loan Amount
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {formatCurrency(results.loanAmount)}
          </span>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Down Payment
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {formatCurrency(results.downPaymentAmount)}
          </span>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Loan Term
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {inputs.loanTerm} years
          </span>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Interest Rate
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {inputs.interestRate}%
          </span>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Total Paid
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {formatCurrency(results.totalPaid)}
          </span>
        </div>
        
        <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-700/50">
          <span className="block text-xs text-gray-500 dark:text-gray-400">
            Payoff Date
          </span>
          <span className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
            {results.payoffDate}
          </span>
        </div>
      </div>
      
      {inputs.includeTaxesAndCosts && (
        <div>
          <h4 className="mb-2 text-base sm:text-lg font-semibold">Monthly Payment Breakdown</h4>
          <div className="space-y-2">
            {costBreakdown.map((item, index) => (
              item.amount > 0 && (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`mr-2 h-2 w-2 sm:h-3 sm:w-3 rounded-full ${item.color}`}></div>
                    <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
                    {formatCurrency(item.amount)}
                  </span>
                </div>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PaymentSummary;