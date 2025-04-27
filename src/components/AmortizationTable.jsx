import React, { useState } from 'react';
import { formatCurrency } from '../utils/formatters';

function AmortizationTable({ schedule, theme }) {
  const [viewMode, setViewMode] = useState('annual');
  const [expandedYear, setExpandedYear] = useState(null);
  
  // Group by year for annual view
  const groupByYear = () => {
    const years = {};
    
    schedule.forEach(payment => {
      const year = payment.year;
      
      if (!years[year]) {
        years[year] = {
          year,
          totalPrincipal: 0,
          totalInterest: 0,
          totalPayment: 0,
          finalBalance: payment.remainingBalance,
          payments: []
        };
      }
      
      years[year].totalPrincipal += payment.principalPayment;
      years[year].totalInterest += payment.interestPayment;
      years[year].totalPayment += payment.totalPayment;
      years[year].finalBalance = payment.remainingBalance;
      years[year].payments.push(payment);
    });
    
    return Object.values(years);
  };
  
  const annualData = groupByYear();

  const toggleYear = (year) => {
    if (expandedYear === year) {
      setExpandedYear(null);
    } else {
      setExpandedYear(year);
    }
  };
  
  return (
    <div className="card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">Amortization Schedule</h3>
        
        <div className="flex rounded-md">
          <button
            className={`btn ${
              viewMode === 'annual' ? 'btn-primary' : 'btn-secondary'
            } rounded-r-none`}
            onClick={() => setViewMode('annual')}
          >
            Annual
          </button>
          <button
            className={`btn ${
              viewMode === 'monthly' ? 'btn-primary' : 'btn-secondary'
            } rounded-l-none`}
            onClick={() => setViewMode('monthly')}
          >
            Monthly
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        {viewMode === 'annual' ? (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="pb-2 pl-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">Year</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Principal</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Interest</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Total Payment</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Remaining Balance</th>
              </tr>
            </thead>
            <tbody>
              {annualData.map((yearData) => (
                <React.Fragment key={yearData.year}>
                  <tr 
                    className="cursor-pointer border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50"
                    onClick={() => toggleYear(yearData.year)}
                  >
                    <td className="py-3 pl-2 pr-4 font-medium text-gray-900 dark:text-white">{yearData.year}</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(yearData.totalPrincipal)}</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(yearData.totalInterest)}</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(yearData.totalPayment)}</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(yearData.finalBalance)}</td>
                  </tr>
                  
                  {expandedYear === yearData.year && (
                    <tr>
                      <td colSpan="5" className="p-0">
                        <div className="bg-gray-50 p-4 dark:bg-gray-700/30">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-gray-200 dark:border-gray-600">
                                <th className="pb-2 pl-2 pr-4 text-xs font-medium text-gray-600 dark:text-gray-300">Month</th>
                                <th className="pb-2 px-4 text-xs font-medium text-gray-600 dark:text-gray-300">Principal</th>
                                <th className="pb-2 px-4 text-xs font-medium text-gray-600 dark:text-gray-300">Interest</th>
                                <th className="pb-2 px-4 text-xs font-medium text-gray-600 dark:text-gray-300">Payment</th>
                                <th className="pb-2 px-4 text-xs font-medium text-gray-600 dark:text-gray-300">Balance</th>
                              </tr>
                            </thead>
                            <tbody>
                              {yearData.payments.map((payment) => (
                                <tr key={payment.paymentNumber} className="border-b border-gray-100 dark:border-gray-700">
                                  <td className="py-2 pl-2 pr-4 text-gray-700 dark:text-gray-300">{payment.date}</td>
                                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.principalPayment)}</td>
                                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.interestPayment)}</td>
                                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.totalPayment)}</td>
                                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.remainingBalance)}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="pb-2 pl-2 pr-4 text-sm font-medium text-gray-600 dark:text-gray-300">#</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Date</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Principal</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Interest</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Payment</th>
                <th className="pb-2 px-4 text-sm font-medium text-gray-600 dark:text-gray-300">Balance</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((payment) => (
                <tr key={payment.paymentNumber} className="border-b border-gray-100 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-700/50">
                  <td className="py-2 pl-2 pr-4 font-medium text-gray-900 dark:text-white">{payment.paymentNumber}</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{payment.date}</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.principalPayment)}</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.interestPayment)}</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.totalPayment)}</td>
                  <td className="py-2 px-4 text-gray-700 dark:text-gray-300">{formatCurrency(payment.remainingBalance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default AmortizationTable;