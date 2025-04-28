import { HelpCircle, Home, Briefcase, AlertTriangle } from 'lucide-react';

const MortgageGuide = () => {
  return (
    <section className="py-16 bg-gray-50" id="guide">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mortgage Guide</h2>
            <p className="text-lg text-gray-600">
              Understanding the key concepts and terminology associated with mortgages can help you make better financial decisions.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">What is a Mortgage?</h3>
              <p className="text-gray-700 mb-6">
                A mortgage is a loan used to purchase or maintain a home, land, or other types of real estate. The borrower agrees to pay the lender over time, typically in a series of regular payments that are divided into principal and interest. The property serves as collateral to secure the loan.
              </p>

              <div className="border-l-4 border-primary-500 pl-4 py-2 bg-primary-50 mb-8">
                <p className="text-gray-700 italic">
                  "A mortgage is essentially a loan in which your house functions as the collateral. If you stop paying your mortgage, the bank can take your home through a legal process known as foreclosure."
                </p>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Types of Mortgages</h3>
              <p className="text-gray-700 mb-4">
                There are several types of mortgages available to homebuyers. Understanding the differences can help you choose the right one for your situation.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <Home className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Fixed-Rate Mortgage</h4>
                    <p className="text-gray-700">
                      A fixed-rate mortgage has an interest rate that remains the same for the entire term of the loan. This provides stability and predictability in your monthly payments. Common terms are 15, 20, and 30 years.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Adjustable-Rate Mortgage (ARM)</h4>
                    <p className="text-gray-700">
                      An adjustable-rate mortgage (ARM) has an interest rate that changes based on market conditions. Typically, ARMs start with a fixed interest rate for a specified period (3, 5, 7, or 10 years), then adjust periodically afterward.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <HelpCircle className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">FHA, VA, and USDA Loans</h4>
                    <p className="text-gray-700">
                      Government-backed loans include FHA loans (insured by the Federal Housing Administration), VA loans (guaranteed by the Department of Veterans Affairs), and USDA loans (guaranteed by the U.S. Department of Agriculture). These loans often have more flexible qualification requirements.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-5 w-5 text-primary-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">Jumbo Loans</h4>
                    <p className="text-gray-700">
                      Jumbo loans exceed the loan limits set by the Federal Housing Finance Agency (FHFA) and are designed for higher-priced properties. These loans typically require larger down payments and have stricter qualification requirements.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Mortgage Terms</h3>
              <div className="mb-8">
                <dl className="space-y-4">
                  <div>
                    <dt className="font-medium text-gray-900">Principal</dt>
                    <dd className="text-gray-700 ml-4">The original amount of money borrowed in a loan.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Interest Rate</dt>
                    <dd className="text-gray-700 ml-4">The percentage of the principal charged by the lender for borrowing the money.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Annual Percentage Rate (APR)</dt>
                    <dd className="text-gray-700 ml-4">The yearly cost of a loan including interest and fees, expressed as a percentage.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Down Payment</dt>
                    <dd className="text-gray-700 ml-4">The initial payment made when purchasing a home, usually expressed as a percentage of the total purchase price.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Private Mortgage Insurance (PMI)</dt>
                    <dd className="text-gray-700 ml-4">Insurance required by lenders when the down payment is less than 20% of the home's purchase price.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Escrow</dt>
                    <dd className="text-gray-700 ml-4">An account set up by the lender to pay property taxes and insurance on behalf of the borrower.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Closing Costs</dt>
                    <dd className="text-gray-700 ml-4">Fees and expenses paid at the closing of a real estate transaction, typically 2-5% of the loan amount.</dd>
                  </div>
                  <div>
                    <dt className="font-medium text-gray-900">Amortization</dt>
                    <dd className="text-gray-700 ml-4">The process of paying off a debt, like a mortgage, through regular payments over time.</dd>
                  </div>
                </dl>
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Tips for Getting the Best Mortgage</h3>
              <ol className="list-decimal ml-6 space-y-3 text-gray-700 mb-8">
                <li>Improve your credit score before applying for a mortgage.</li>
                <li>Save for a larger down payment to reduce your loan amount and possibly avoid PMI.</li>
                <li>Shop around and compare offers from multiple lenders.</li>
                <li>Consider the total cost of the loan, not just the interest rate.</li>
                <li>Get pre-approved before house hunting to understand your budget.</li>
                <li>Pay attention to the loan term - a shorter term means higher monthly payments but less interest paid overall.</li>
                <li>Be aware of all fees and closing costs associated with the loan.</li>
                <li>Consider making extra payments toward your principal to pay off your mortgage faster.</li>
              </ol>

              <p className="text-gray-700">
                Remember that a mortgage is a long-term commitment. Take the time to understand all aspects of your loan and how it fits into your overall financial plan. Our mortgage calculator can help you explore different scenarios and find the mortgage that works best for your situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MortgageGuide;