import React from 'react';
import { Calculator, Home, DollarSign, PiggyBank, HelpCircle } from 'lucide-react';

function SEOContent({ theme }) {
  return (
    <div className="mt-16 space-y-16" id="guide">
      {/* Introduction */}
      <section>
        <div className="mb-4 flex items-center gap-2 border-b border-gray-200 pb-2 dark:border-gray-700">
          <Calculator className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Understanding Your Mortgage</h2>
        </div>
        
        <p className="mb-4 leading-relaxed text-gray-700 dark:text-gray-300">
          A mortgage is a loan that helps you purchase a home. It's typically repaid over a long period, with interest.
          Understanding how your payments are calculated can help you make informed decisions about your home purchase and manage your finances effectively.
        </p>
        
        <p className="leading-relaxed text-gray-700 dark:text-gray-300">
          Our mortgage calculator helps you estimate your monthly mortgage payment, including principal, interest, taxes, insurance, and other costs.
          You can also see how your payment breaks down and how your loan balance changes over time.
        </p>
      </section>
      
      {/* Mortgage Terms Explained */}
      <section id="glossary">
        <div className="mb-4 flex items-center gap-2 border-b border-gray-200 pb-2 dark:border-gray-700">
          <HelpCircle className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Mortgage Terms Explained</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Principal</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The amount you borrow to purchase your home. This is typically the purchase price minus your down payment.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Interest Rate</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The cost of borrowing money, expressed as a percentage. The interest rate affects your monthly payment and the total amount you'll pay over the life of the loan.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Loan Term</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The length of time you have to repay your mortgage. Common terms are 30, 20, and 15 years. A shorter term typically means higher monthly payments but less interest paid overall.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Down Payment</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The amount you pay upfront when purchasing a home. A larger down payment means a smaller loan amount and potentially better loan terms.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">PMI (Private Mortgage Insurance)</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Insurance that protects the lender if you default on your loan. PMI is typically required if your down payment is less than 20% of the home's purchase price.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Amortization</h3>
            <p className="text-gray-700 dark:text-gray-300">
              The process of paying off your mortgage through regular payments. Early in your loan term, most of your payment goes toward interest. As you continue making payments, more goes toward principal.
            </p>
          </div>
        </div>
      </section>
      
      {/* Tips for Homebuyers */}
      <section>
        <div className="mb-4 flex items-center gap-2 border-b border-gray-200 pb-2 dark:border-gray-700">
          <Home className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Tips for Homebuyers</h2>
        </div>
        
        <div className="space-y-4">
          <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
            <h3 className="mb-2 text-lg font-semibold text-blue-800 dark:text-blue-300">Get Pre-Approved</h3>
            <p className="text-blue-700 dark:text-blue-300">
              Before you start house hunting, get pre-approved for a mortgage. This gives you a clear idea of how much you can borrow and shows sellers you're a serious buyer.
            </p>
          </div>
          
          <div className="rounded-lg bg-green-50 p-4 dark:bg-green-900/20">
            <h3 className="mb-2 text-lg font-semibold text-green-800 dark:text-green-300">Save for a Down Payment</h3>
            <p className="text-green-700 dark:text-green-300">
              Aim to save at least 20% of the home's purchase price for a down payment. This helps you avoid PMI and qualify for better loan terms.
            </p>
          </div>
          
          <div className="rounded-lg bg-yellow-50 p-4 dark:bg-yellow-900/20">
            <h3 className="mb-2 text-lg font-semibold text-yellow-800 dark:text-yellow-300">Consider All Costs</h3>
            <p className="text-yellow-700 dark:text-yellow-300">
              Remember that your mortgage payment isn't the only cost of homeownership. Budget for property taxes, insurance, maintenance, and utilities.
            </p>
          </div>
          
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h3 className="mb-2 text-lg font-semibold text-purple-800 dark:text-purple-300">Shop Around for Lenders</h3>
            <p className="text-purple-700 dark:text-purple-300">
              Don't accept the first mortgage offer you receive. Shop around and compare rates, terms, and fees from multiple lenders to find the best deal.
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section>
        <div className="mb-4 flex items-center gap-2 border-b border-gray-200 pb-2 dark:border-gray-700">
          <PiggyBank className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">What is a good interest rate?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Interest rates vary based on market conditions, your credit score, loan type, and other factors. Generally, a rate that's below the current average is considered good. Shop around and compare offers from multiple lenders.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">How much house can I afford?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              As a general rule, your monthly housing expenses (including mortgage payment, property taxes, and insurance) should not exceed 28% of your gross monthly income. Your total debt payments (including housing expenses and other debts) should not exceed 36% of your gross monthly income.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Should I choose a 15-year or 30-year mortgage?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              A 15-year mortgage typically has a lower interest rate and you'll pay less interest overall, but monthly payments are higher. A 30-year mortgage has lower monthly payments but higher total interest over the life of the loan. Choose based on your financial situation and goals.
            </p>
          </div>
          
          <div>
            <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">What is an amortization schedule?</h3>
            <p className="text-gray-700 dark:text-gray-300">
              An amortization schedule shows how your loan balance decreases over time as you make payments. It breaks down each payment into principal and interest portions, allowing you to see how much of your payment goes toward each component.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SEOContent;