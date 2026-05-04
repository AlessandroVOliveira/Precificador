/**
 * Pricing engine using the Markup Divisor formula.
 * Formula: Price = Cost / (1 - % Total Encargos)
 */

/**
 * Calculates the suggested selling price using Markup Divisor.
 * @param {number} cost - The unitary cost of the product.
 * @param {number} fixedCostPercent - Percentage of fixed costs (decimal).
 * @param {number} salesTaxPercent - Percentage of sales taxes/fees (decimal).
 * @param {number} profitMarginPercent - Percentage of desired net profit (decimal).
 * @returns {number} The suggested price.
 */
export const calculateSuggestedPrice = (cost, fixedCostPercent, salesTaxPercent, profitMarginPercent) => {
  if (cost === undefined || cost === null) return 0;
  
  const totalEncargos = fixedCostPercent + salesTaxPercent + profitMarginPercent;
  
  // Prevent division by zero or negative divisor
  if (totalEncargos >= 1) {
    return null; // Return null to indicate invalid calculation
  }
  
  return cost / (1 - totalEncargos);
};

/**
 * Calculates the suggested selling price using Markup Multiplier.
 * Formula: Price = Cost * (1 + % Total Encargos)
 * @param {number} cost - The unitary cost of the product.
 * @param {number} fixedCostPercent - Percentage of fixed costs (decimal).
 * @param {number} salesTaxPercent - Percentage of sales taxes/fees (decimal).
 * @param {number} profitMarginPercent - Percentage of desired net profit (decimal).
 * @returns {number} The suggested price.
 */
export const calculateSuggestedPriceMultiplier = (cost, fixedCostPercent, salesTaxPercent, profitMarginPercent) => {
  if (cost === undefined || cost === null) return 0;
  
  const totalEncargos = fixedCostPercent + salesTaxPercent + profitMarginPercent;
  return cost * (1 + totalEncargos);
};

/**
 * Calculates the markup divisor decimal from its components.
 */
export const getMarkupDivisor = (fixedCostPercent, salesTaxPercent, profitMarginPercent) => {
  return 1 - (fixedCostPercent + salesTaxPercent + profitMarginPercent);
};

/**
 * Calculates the fixed cost percentage based on monthly values.
 * @param {number} totalFixedCosts - Sum of all monthly fixed costs.
 * @param {number} expectedRevenue - Monthly expected revenue.
 */
export const calculateFixedCostPercentage = (totalFixedCosts, expectedRevenue) => {
  if (!expectedRevenue || expectedRevenue === 0) return 0;
  return totalFixedCosts / expectedRevenue;
};

