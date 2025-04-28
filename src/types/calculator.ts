export interface MortgageFormData {
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  downPayment: number;
  propertyTax: number;
  homeInsurance: number;
  pmi: number;
}

export interface PaymentBreakdown {
  principal: number;
  interest: number;
  propertyTax: number;
  homeInsurance: number;
  pmi: number;
  total: number;
}

export interface AmortizationItem {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface ComparisonItem {
  id: string;
  name: string;
  loanAmount: number;
  interestRate: number;
  loanTerm: number;
  monthlyPayment: number;
  totalInterest: number;
}