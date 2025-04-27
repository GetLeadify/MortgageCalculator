import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
} from 'chart.js';
import { Pie, Line } from 'react-chartjs-2';
import { formatCurrency } from '../utils/formatters';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
);

function Charts({ results, theme }) {
  const [pieChartData, setPieChartData] = useState(null);
  const [lineChartData, setLineChartData] = useState(null);
  
  useEffect(() => {
    if (results.amortizationSchedule.length === 0) return;
    
    // Update pie chart data with higher contrast colors
    const pieData = {
      labels: [
        'Principal & Interest', 
        'Property Tax', 
        'Home Insurance', 
        'PMI', 
        'HOA', 
        'Other'
      ],
      datasets: [
        {
          data: [
            results.monthlyPrincipalInterest, 
            results.monthlyTaxes, 
            results.monthlyInsurance, 
            results.monthlyPMI, 
            results.monthlyHOA, 
            results.monthlyOther
          ],
          backgroundColor: [
            'rgba(37, 99, 235, 0.9)',   // Blue
            'rgba(5, 150, 105, 0.9)',    // Emerald
            'rgba(245, 158, 11, 0.9)',   // Amber
            'rgba(249, 115, 22, 0.9)',   // Orange
            'rgba(139, 92, 246, 0.9)',   // Violet
            'rgba(225, 29, 72, 0.9)',    // Rose
          ],
          borderColor: [
            'rgba(37, 99, 235, 1)',
            'rgba(5, 150, 105, 1)',
            'rgba(245, 158, 11, 1)',
            'rgba(249, 115, 22, 1)',
            'rgba(139, 92, 246, 1)',
            'rgba(225, 29, 72, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };
    
    // Filter out zero values
    pieData.datasets[0].data = pieData.datasets[0].data.map((value, index) => {
      if (value <= 0) {
        pieData.labels[index] = null;
        return null;
      }
      return value;
    });
    
    const filteredIndices = pieData.datasets[0].data
      .map((value, index) => value === null ? -1 : index)
      .filter(index => index !== -1);
      
    setPieChartData({
      labels: filteredIndices.map(index => pieData.labels[index]),
      datasets: [{
        data: filteredIndices.map(index => pieData.datasets[0].data[index]),
        backgroundColor: filteredIndices.map(index => pieData.datasets[0].backgroundColor[index]),
        borderColor: filteredIndices.map(index => pieData.datasets[0].borderColor[index]),
        borderWidth: 2
      }]
    });
    
    // Sample every 12th payment (yearly) to avoid cluttering
    const sampledSchedule = results.amortizationSchedule.filter((_, index) => index % 12 === 0);
    
    const labels = sampledSchedule.map(payment => payment.date);
    
    const lineData = {
      labels,
      datasets: [
        {
          label: 'Loan Balance',
          data: sampledSchedule.map(payment => payment.remainingBalance),
          borderColor: 'rgb(37, 99, 235)',
          backgroundColor: 'rgba(37, 99, 235, 0.1)',
          tension: 0.3,
          fill: true,
          borderWidth: 2
        },
        {
          label: 'Interest Paid',
          data: sampledSchedule.map(payment => payment.totalInterestPaid),
          borderColor: 'rgb(245, 158, 11)',
          backgroundColor: 'rgba(245, 158, 11, 0.0)',
          tension: 0.3,
          borderWidth: 2
        },
        {
          label: 'Principal Paid',
          data: sampledSchedule.map(payment => payment.totalPrincipalPaid),
          borderColor: 'rgb(5, 150, 105)',
          backgroundColor: 'rgba(5, 150, 105, 0.0)',
          tension: 0.3,
          borderWidth: 2
        }
      ]
    };
    
    setLineChartData(lineData);
    
  }, [results]);
  
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        bottom: 20
      }
    },
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 20,
          color: '#374151',
          font: {
            size: 12,
            weight: 500
          },
          generateLabels: function(chart) {
            const data = chart.data;
            if (data.labels.length && data.datasets.length) {
              return data.labels.map(function(label, i) {
                const value = data.datasets[0].data[i];
                return {
                  text: `${label}: ${formatCurrency(value)}`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  strokeStyle: data.datasets[0].borderColor[i],
                  lineWidth: 2,
                  hidden: false,
                  index: i
                };
              });
            }
            return [];
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            const label = context.label || '';
            const value = context.raw;
            return `${label}: ${formatCurrency(value)}`;
          }
        },
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#111827',
        bodyColor: '#111827',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      }
    }
  };
  
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          padding: 20,
          color: '#374151',
          font: {
            size: 12,
            weight: 500
          },
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.dataset.label || '';
            let value = context.parsed.y;
            return `${label}: ${formatCurrency(value)}`;
          }
        },
        padding: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#111827',
        bodyColor: '#111827',
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#374151',
          font: {
            size: 11
          },
          maxRotation: 45,
          minRotation: 45,
          padding: 8
        }
      },
      y: {
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
          drawBorder: false
        },
        ticks: {
          color: '#374151',
          font: {
            size: 11
          },
          padding: 8,
          callback: function(value) {
            return formatCurrency(value);
          }
        }
      }
    },
    elements: {
      point: {
        radius: 3,
        hoverRadius: 5
      },
      line: {
        borderWidth: 2
      }
    }
  };

  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {pieChartData && pieChartData.datasets[0].data.length > 0 && (
        <div className="card">
          <h3 className="mb-4 text-lg sm:text-xl font-bold">Payment Breakdown</h3>
          <div className="flex h-[300px] sm:h-[400px] items-center justify-center">
            <div className="h-full w-full max-w-[400px]">
              <Pie data={pieChartData} options={{
                ...pieOptions,
                plugins: {
                  ...pieOptions.plugins,
                  legend: {
                    ...pieOptions.plugins.legend,
                    position: window.innerWidth < 640 ? 'bottom' : 'right',
                    labels: {
                      ...pieOptions.plugins.legend.labels,
                      boxWidth: window.innerWidth < 640 ? 12 : 16,
                      padding: window.innerWidth < 640 ? 10 : 20,
                      font: {
                        size: window.innerWidth < 640 ? 10 : 12
                      }
                    }
                  }
                }
              }} />
            </div>
          </div>
        </div>
      )}
      
      {lineChartData && (
        <div className="card">
          <h3 className="mb-4 text-lg sm:text-xl font-bold">Loan Balance Over Time</h3>
          <div className="h-[300px] sm:h-[400px]">
            <Line data={lineChartData} options={{
              ...lineOptions,
              scales: {
                ...lineOptions.scales,
                x: {
                  ...lineOptions.scales.x,
                  ticks: {
                    ...lineOptions.scales.x.ticks,
                    maxRotation: window.innerWidth < 640 ? 45 : 0,
                    font: {
                      size: window.innerWidth < 640 ? 8 : 11
                    }
                  }
                }
              }
            }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Charts;