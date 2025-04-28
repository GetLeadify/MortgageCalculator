import { useEffect, useState, useRef } from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { PaymentBreakdown } from '../../types/calculator';
import { formatCurrency } from '../../utils/calculatorUtils';

// Register the required chart.js components
Chart.register(ArcElement, Tooltip, Legend);

interface PaymentChartProps {
  breakdown: PaymentBreakdown;
}

const PaymentChart = ({ breakdown }: PaymentChartProps) => {
  const chartRef = useRef<Chart<"doughnut", number[], string> | null>(null);
  const [chartData, setChartData] = useState({
    labels: [] as string[],
    datasets: [] as any[]
  });

  useEffect(() => {
    const labels = [];
    const data = [];
    const backgroundColor = [];
    
    // Principal & Interest (combined for chart simplicity)
    labels.push('Principal & Interest');
    data.push(breakdown.principal);
    backgroundColor.push('#3B82F6'); // blue
    
    // Property Tax
    if (breakdown.propertyTax > 0) {
      labels.push('Property Tax');
      data.push(breakdown.propertyTax);
      backgroundColor.push('#10B981'); // green
    }
    
    // Home Insurance
    if (breakdown.homeInsurance > 0) {
      labels.push('Home Insurance');
      data.push(breakdown.homeInsurance);
      backgroundColor.push('#F59E0B'); // amber
    }
    
    // PMI
    if (breakdown.pmi > 0) {
      labels.push('PMI');
      data.push(breakdown.pmi);
      backgroundColor.push('#EF4444'); // red
    }
    
    setChartData({
      labels,
      datasets: [
        {
          data,
          backgroundColor,
          borderWidth: 0,
          hoverOffset: 4
        }
      ]
    });
  }, [breakdown]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            size: 12
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = formatCurrency(context.raw);
            const percentage = Math.round(context.raw / breakdown.total * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '70%'
  };

  return <Doughnut data={chartData} options={options} ref={chartRef} />;
};

export default PaymentChart;