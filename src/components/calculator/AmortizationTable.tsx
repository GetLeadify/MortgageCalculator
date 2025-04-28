import { useState } from 'react';
import { AmortizationItem } from '../../types/calculator';
import { formatCurrency } from '../../utils/calculatorUtils';

interface AmortizationTableProps {
  schedule: AmortizationItem[];
}

const AmortizationTable = ({ schedule }: AmortizationTableProps) => {
  const [visibleYears, setVisibleYears] = useState(5);
  const yearsTotal = Math.ceil(schedule.length / 12);

  // Filter schedule to show only the visible years
  const visibleSchedule = schedule.slice(0, visibleYears * 12);

  // Group by year for annual summary view
  const annualSummary = [];
  for (let year = 0; year < yearsTotal; year++) {
    const yearlyPayments = schedule.slice(year * 12, (year + 1) * 12);
    if (yearlyPayments.length === 0) break;
    
    const totalPrincipal = yearlyPayments.reduce((sum, item) => sum + item.principal, 0);
    const totalInterest = yearlyPayments.reduce((sum, item) => sum + item.interest, 0);
    const totalPayment = yearlyPayments.reduce((sum, item) => sum + item.payment, 0);
    const endingBalance = yearlyPayments[yearlyPayments.length - 1].balance;
    
    annualSummary.push({
      year: year + 1,
      principal: totalPrincipal,
      interest: totalInterest,
      payment: totalPayment,
      balance: endingBalance
    });
  }

  // Show only visible years in the annual summary
  const visibleAnnualSummary = annualSummary.slice(0, visibleYears);

  const handleShowMore = () => {
    setVisibleYears(prev => Math.min(prev + 5, yearsTotal));
  };

  const handleShowAll = () => {
    setVisibleYears(yearsTotal);
  };

  return (
    <div className="-mx-4 sm:mx-0">
      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2 px-4 sm:px-0">Annual Summary</h3>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Payment</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining Balance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {visibleAnnualSummary.map((year, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{year.year}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(year.principal)}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(year.interest)}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(year.payment)}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(year.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800 mb-2 px-4 sm:px-0">Monthly Amortization Schedule</h3>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Principal</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Interest</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Remaining Balance</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {visibleSchedule.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-2 whitespace-nowrap text-sm font-medium text-gray-900">{item.month}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(item.payment)}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(item.principal)}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(item.interest)}</td>
                    <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-500">{formatCurrency(item.balance)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {visibleYears < yearsTotal && (
        <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-4 mt-4 px-4 sm:px-0">
          <button
            onClick={handleShowMore}
            className="px-4 py-2 border border-primary-300 text-primary-600 rounded-md hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm font-medium"
          >
            Show 5 More Years
          </button>
          <button
            onClick={handleShowAll}
            className="px-4 py-2 border border-primary-300 text-primary-600 rounded-md hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm font-medium"
          >
            Show All Years
          </button>
        </div>
      )}
    </div>
  );
};

export default AmortizationTable;