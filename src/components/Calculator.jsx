import React, { useState, useEffect } from 'react';
import { format, addMonths } from 'date-fns';
import CalculatorForm from './CalculatorForm';
import PaymentSummary from './PaymentSummary';
import AmortizationTable from './AmortizationTable';
import Charts from './Charts';

function Calculator({ theme }) {
  const [inputs, setInputs] = useState({
    homePrice: 400000,
    downPaymentType: 'percentage',
    downPaymentValue: 20,
    loanTerm: 30,
    interestRate: 5.5,
    startDate: format(new Date(), 'yyyy-MM'),
    includeTaxesAndCosts: false,
    propertyTax: 1.2,
    homeInsurance: 1200,
    pmiInsurance: 0,
    hoaFees: 0,
    otherCosts: 0
  });
  
  const [results, setResults] = useState({
    monthlyPayment: 0,
    monthlyPrincipalInterest: 0,
    monthlyTaxes: 0,
    monthlyInsurance: 0,
    monthlyPMI: 0,
    monthlyHOA: 0,
    monthlyOther: 0,
    totalPaid: 0,
    payoffDate: '',
    amortizationSchedule: [],
    loanAmount: 0,
    downPaymentAmount: 0
  });

  // Calculate mortgage details when inputs change
  useEffect(() => {
    calculateMortgage();
  }, [inputs]);

  const calculateMortgage = () => {
    // Calculate down payment amount
    let downPaymentAmount = 0;
    if (inputs.downPaymentType === 'percentage') {
      downPaymentAmount = inputs.homePrice * (inputs.downPaymentValue / 100);
    } else {
      downPaymentAmount = Number(inputs.downPaymentValue);
    }

    // Calculate loan amount
    const loanAmount = inputs.homePrice - downPaymentAmount;
    
    // Calculate monthly principal and interest payment
    const monthlyInterestRate = inputs.interestRate / 100 / 12;
    const numberOfPayments = inputs.loanTerm * 12;
    
    let monthlyPrincipalInterest = 0;
    if (monthlyInterestRate > 0) {
      monthlyPrincipalInterest = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      monthlyPrincipalInterest = loanAmount / numberOfPayments;
    }
    
    // Calculate additional monthly costs
    const monthlyTaxes = inputs.includeTaxesAndCosts ? 
      (inputs.homePrice * (inputs.propertyTax / 100)) / 12 : 0;
      
    const monthlyInsurance = inputs.includeTaxesAndCosts ? 
      inputs.homeInsurance / 12 : 0;
      
    const monthlyPMI = inputs.includeTaxesAndCosts ? 
      inputs.pmiInsurance / 12 : 0;
      
    const monthlyHOA = inputs.includeTaxesAndCosts ? 
      inputs.hoaFees : 0;
      
    const monthlyOther = inputs.includeTaxesAndCosts ? 
      inputs.otherCosts : 0;
    
    // Calculate total monthly payment
    const monthlyPayment = monthlyPrincipalInterest + 
      monthlyTaxes + 
      monthlyInsurance + 
      monthlyPMI + 
      monthlyHOA + 
      monthlyOther;
    
    // Calculate total amount paid over the life of the loan
    const totalPaid = monthlyPayment * numberOfPayments;
    
    // Calculate payoff date
    const [year, month] = inputs.startDate.split('-').map(Number);
    const startDate = new Date(year, month - 1); // JS months are 0-indexed
    const payoffDate = format(addMonths(startDate, numberOfPayments), 'MMMM yyyy');
    
    // Generate amortization schedule
    const amortizationSchedule = generateAmortizationSchedule(
      loanAmount,
      monthlyInterestRate,
      numberOfPayments,
      new Date(year, month - 1),
      monthlyTaxes + monthlyInsurance + monthlyPMI + monthlyHOA + monthlyOther
    );
    
    setResults({
      monthlyPayment,
      monthlyPrincipalInterest,
      monthlyTaxes,
      monthlyInsurance,
      monthlyPMI,
      monthlyHOA,
      monthlyOther,
      totalPaid,
      payoffDate,
      amortizationSchedule,
      loanAmount,
      downPaymentAmount
    });
  };

  const generateAmortizationSchedule = (
    loanAmount,
    monthlyInterestRate,
    numberOfPayments,
    startDate,
    additionalMonthlyPayment
  ) => {
    let balance = loanAmount;
    let schedule = [];
    
    let remainingBalance = loanAmount;
    let monthlyPayment = 0;
    
    if (monthlyInterestRate > 0) {
      monthlyPayment = loanAmount * 
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / 
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    } else {
      monthlyPayment = loanAmount / numberOfPayments;
    }
    
    for (let i = 1; i <= numberOfPayments; i++) {
      const interestPayment = remainingBalance * monthlyInterestRate;
      const principalPayment = monthlyPayment - interestPayment;
      
      remainingBalance -= principalPayment;
      
      if (remainingBalance < 0) remainingBalance = 0;
      
      const currentDate = addMonths(startDate, i - 1);
      
      schedule.push({
        paymentNumber: i,
        date: format(currentDate, 'MMM yyyy'),
        year: currentDate.getFullYear(),
        month: currentDate.getMonth(),
        principalPayment,
        interestPayment,
        totalPayment: monthlyPayment + additionalMonthlyPayment,
        additionalPayment: additionalMonthlyPayment,
        remainingBalance,
        totalPrincipalPaid: loanAmount - remainingBalance,
        totalInterestPaid: (monthlyPayment * i) - (loanAmount - remainingBalance)
      });
    }
    
    return schedule;
  };

  return (
    <div id="calculator" className="animate-fade-in px-4 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl lg:text-4xl dark:text-white">
          Mortgage Calculator
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Estimate your monthly mortgage payment and see a detailed breakdown
        </p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <div className="sticky top-4">
            <CalculatorForm inputs={inputs} setInputs={setInputs} theme={theme} />
          </div>
        </div>
        
        <div className="space-y-6 lg:col-span-7 lg:space-y-8">
          <PaymentSummary results={results} inputs={inputs} theme={theme} />
          <Charts results={results} theme={theme} />
          <AmortizationTable schedule={results.amortizationSchedule} theme={theme} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;