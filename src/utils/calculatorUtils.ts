import { MortgageFormData, PaymentBreakdown, AmortizationItem } from '../types/calculator';

export const calculateMonthlyPayment = (
  principal: number,
  annualRate: number,
  termYears: number
): number => {
  // Convert annual rate to monthly rate (and percentage to decimal)
  const monthlyRate = annualRate / 100 / 12;
  // Convert term in years to term in months
  const termMonths = termYears * 12;

  // If rate is 0, it's a simple division
  if (monthlyRate === 0) return principal / termMonths;

  // Calculate monthly payment using the mortgage formula
  const x = Math.pow(1 + monthlyRate, termMonths);
  const monthly = (principal * monthlyRate * x) / (x - 1);

  return monthly;
};

export const calculatePaymentBreakdown = (formData: MortgageFormData): PaymentBreakdown => {
  const {
    loanAmount,
    interestRate,
    loanTerm,
    downPayment,
    propertyTax,
    homeInsurance,
    pmi
  } = formData;

  // Calculate loan principal after down payment
  const principal = loanAmount - downPayment;
  
  // Calculate monthly principal and interest payment
  const monthlyPrincipalAndInterest = calculateMonthlyPayment(principal, interestRate, loanTerm);
  
  // Calculate monthly property tax
  const monthlyPropertyTax = (propertyTax / 12);
  
  // Calculate monthly home insurance
  const monthlyHomeInsurance = (homeInsurance / 12);
  
  // Calculate PMI (typically applies if down payment is less than 20%)
  const monthlyPMI = downPayment / loanAmount < 0.2 ? (principal * (pmi / 100)) / 12 : 0;
  
  // Calculate total monthly payment
  const totalMonthlyPayment = 
    monthlyPrincipalAndInterest + 
    monthlyPropertyTax + 
    monthlyHomeInsurance + 
    monthlyPMI;
  
  return {
    principal: monthlyPrincipalAndInterest,
    interest: monthlyPrincipalAndInterest - (principal / (loanTerm * 12)),
    propertyTax: monthlyPropertyTax,
    homeInsurance: monthlyHomeInsurance,
    pmi: monthlyPMI,
    total: totalMonthlyPayment
  };
};

export const calculateAmortizationSchedule = (
  formData: MortgageFormData
): AmortizationItem[] => {
  const { loanAmount, interestRate, loanTerm, downPayment } = formData;
  
  // Calculate loan principal after down payment
  const principal = loanAmount - downPayment;
  
  // Convert annual rate to monthly rate (and percentage to decimal)
  const monthlyRate = interestRate / 100 / 12;
  
  // Convert term in years to term in months
  const termMonths = loanTerm * 12;
  
  // Calculate monthly principal and interest payment
  const monthlyPayment = calculateMonthlyPayment(principal, interestRate, loanTerm);
  
  const schedule: AmortizationItem[] = [];
  let remainingBalance = principal;
  
  for (let month = 1; month <= termMonths; month++) {
    // Calculate interest for this month
    const interestPayment = remainingBalance * monthlyRate;
    
    // Calculate principal for this month
    const principalPayment = monthlyPayment - interestPayment;
    
    // Update remaining balance
    remainingBalance -= principalPayment;
    
    // Add to schedule
    schedule.push({
      month,
      payment: monthlyPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance: remainingBalance > 0 ? remainingBalance : 0
    });
  }
  
  return schedule;
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatPercentage = (value: number): string => {
  return `${value.toFixed(2)}%`;
};

export const calculateTotalInterest = (schedule: AmortizationItem[]): number => {
  return schedule.reduce((total, item) => total + item.interest, 0);
};

export const calculateTotalPayments = (schedule: AmortizationItem[]): number => {
  return schedule.reduce((total, item) => total + item.payment, 0);
};