import assert from "node:assert/strict";
/**
 * 
 * @param {boolean} isSalaried 
 * @param {number} salesAmount 
 * @returns {number} commission
 */
export function computeSalesCommission(isSalaried, salesAmount) {
    let commission = 0;
    
    if (isSalaried) {
      if (salesAmount >= 300 && salesAmount < 500) {
        commission = salesAmount * 0.01;
      } else if (salesAmount >= 500) {
        commission = 500 * 0.01 + (salesAmount - 500) * 0.02;
      }
    } else {
      if (salesAmount >= 300 && salesAmount < 500) {
        commission = salesAmount * 0.02;
      } else if (salesAmount >= 500) {
        commission = 500 * 0.02 + (salesAmount - 500) * 0.03;
      }
    }
    
    return commission;
  }
  