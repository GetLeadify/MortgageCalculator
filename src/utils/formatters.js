/**
 * Formats a number as currency with dollar sign
 * @param {number} value - The number to format
 * @returns {string} The formatted currency string
 */
export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};