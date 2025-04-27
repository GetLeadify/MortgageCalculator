import React from 'react';
import { DollarSign, Percent, Calendar, ToggleLeft, ToggleRight } from 'lucide-react';

function CalculatorForm({ inputs, setInputs, theme }) {
  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      setInputs(prev => ({ ...prev, [name]: e.target.checked }));
    } else if (type === 'number' || name === 'downPaymentValue') {
      setInputs(prev => ({ ...prev, [name]: parseFloat(value) || 0 }));
    } else {
      setInputs(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleDownPaymentTypeChange = (type) => {
    // Convert the down payment value when switching types
    if (type !== inputs.downPaymentType) {
      let newValue = 0;
      
      if (type === 'percentage') {
        // Convert dollar amount to percentage
        newValue = Math.round((inputs.downPaymentValue / inputs.homePrice) * 100);
      } else {
        // Convert percentage to dollar amount
        newValue = Math.round(inputs.homePrice * (inputs.downPaymentValue / 100));
      }
      
      setInputs(prev => ({
        ...prev,
        downPaymentType: type,
        downPaymentValue: newValue
      }));
    }
  };

  return (
    <form className="space-y-6">
      <div className="input-group">
        <label htmlFor="homePrice">Home Price</label>
        <div className="relative mt-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <DollarSign className="h-4 w-4" />
          </span>
          <input
            type="number"
            name="homePrice"
            id="homePrice"
            className="number-input w-full pl-10"
            value={inputs.homePrice}
            onChange={handleInputChange}
            min="0"
            step="1000"
          />
        </div>
      </div>

      <div className="input-group">
        <label>Down Payment</label>
        <div className="mb-2 flex rounded-md">
          <button
            type="button"
            className={`btn ${
              inputs.downPaymentType === 'percentage'
                ? 'btn-primary'
                : 'btn-secondary'
            } rounded-r-none`}
            onClick={() => handleDownPaymentTypeChange('percentage')}
          >
            <Percent className="mr-1 h-4 w-4" />
            Percentage
          </button>
          <button
            type="button"
            className={`btn ${
              inputs.downPaymentType === 'dollar'
                ? 'btn-primary'
                : 'btn-secondary'
            } rounded-l-none`}
            onClick={() => handleDownPaymentTypeChange('dollar')}
          >
            <DollarSign className="mr-1 h-4 w-4" />
            Dollar
          </button>
        </div>
        <div className="relative mt-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            {inputs.downPaymentType === 'percentage' ? (
              <Percent className="h-4 w-4" />
            ) : (
              <DollarSign className="h-4 w-4" />
            )}
          </span>
          <input
            type="number"
            name="downPaymentValue"
            className="number-input w-full pl-10"
            value={inputs.downPaymentValue}
            onChange={handleInputChange}
            min="0"
            step={inputs.downPaymentType === 'percentage' ? '1' : '1000'}
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="loanTerm">Loan Term (years)</label>
        <select
          name="loanTerm"
          id="loanTerm"
          className="w-full"
          value={inputs.loanTerm}
          onChange={handleInputChange}
        >
          <option value="30">30 years</option>
          <option value="20">20 years</option>
          <option value="15">15 years</option>
          <option value="10">10 years</option>
        </select>
      </div>

      <div className="input-group">
        <label htmlFor="interestRate">Interest Rate (%)</label>
        <div className="relative mt-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <Percent className="h-4 w-4" />
          </span>
          <input
            type="number"
            name="interestRate"
            id="interestRate"
            className="number-input w-full pl-10"
            value={inputs.interestRate}
            onChange={handleInputChange}
            min="0"
            max="20"
            step="0.01"
          />
        </div>
      </div>

      <div className="input-group">
        <label htmlFor="startDate">Start Date</label>
        <div className="relative mt-1">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
            <Calendar className="h-4 w-4" />
          </span>
          <input
            type="month"
            name="startDate"
            id="startDate"
            className="w-full pl-10"
            value={inputs.startDate}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <label htmlFor="includeTaxesAndCosts" className="mb-0 flex items-center font-medium text-gray-900 dark:text-gray-100">
            Include Taxes & Costs
          </label>
          <button
            type="button"
            className="focus:outline-none"
            onClick={() => setInputs(prev => ({ ...prev, includeTaxesAndCosts: !prev.includeTaxesAndCosts }))}
          >
            {inputs.includeTaxesAndCosts ? (
              <ToggleRight className="h-6 w-6 text-blue-600" />
            ) : (
              <ToggleLeft className="h-6 w-6 text-gray-400" />
            )}
          </button>
        </div>
      </div>

      {inputs.includeTaxesAndCosts && (
        <div className="animate-fade-in space-y-4 rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
          <div className="input-group mb-0">
            <label htmlFor="propertyTax">Property Tax (%)</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <Percent className="h-4 w-4" />
              </span>
              <input
                type="number"
                name="propertyTax"
                id="propertyTax"
                className="number-input w-full pl-10"
                value={inputs.propertyTax}
                onChange={handleInputChange}
                min="0"
                step="0.01"
              />
            </div>
          </div>

          <div className="input-group mb-0">
            <label htmlFor="homeInsurance">Home Insurance ($/year)</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <DollarSign className="h-4 w-4" />
              </span>
              <input
                type="number"
                name="homeInsurance"
                id="homeInsurance"
                className="number-input w-full pl-10"
                value={inputs.homeInsurance}
                onChange={handleInputChange}
                min="0"
                step="100"
              />
            </div>
          </div>

          <div className="input-group mb-0">
            <label htmlFor="pmiInsurance">PMI Insurance ($/year)</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <DollarSign className="h-4 w-4" />
              </span>
              <input
                type="number"
                name="pmiInsurance"
                id="pmiInsurance"
                className="number-input w-full pl-10"
                value={inputs.pmiInsurance}
                onChange={handleInputChange}
                min="0"
                step="100"
              />
            </div>
          </div>

          <div className="input-group mb-0">
            <label htmlFor="hoaFees">HOA Fees ($/month)</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <DollarSign className="h-4 w-4" />
              </span>
              <input
                type="number"
                name="hoaFees"
                id="hoaFees"
                className="number-input w-full pl-10"
                value={inputs.hoaFees}
                onChange={handleInputChange}
                min="0"
                step="10"
              />
            </div>
          </div>

          <div className="input-group mb-0">
            <label htmlFor="otherCosts">Other Costs ($/month)</label>
            <div className="relative mt-1">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <DollarSign className="h-4 w-4" />
              </span>
              <input
                type="number"
                name="otherCosts"
                id="otherCosts"
                className="number-input w-full pl-10"
                value={inputs.otherCosts}
                onChange={handleInputChange}
                min="0"
                step="10"
              />
            </div>
          </div>
        </div>
      )}
    </form>
  );
}

export default CalculatorForm;