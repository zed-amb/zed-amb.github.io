"use strict"
const prompt = require("prompt-sync")();

/* 1. Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500 */




function computeSalesCommission(isSalaried, salesAmount) {
    let commission = 0;
  
    if (isSalaried) {
      if (salesAmount > 500) {
        commission = 0.01 * 500 + 0.02 * (salesAmount - 500);
      } else if (salesAmount >= 300) {
        commission = 0.01 * salesAmount;
      }
    } else {
      if (salesAmount > 500) {
        commission = 0.02 * 500 + 0.03 * (salesAmount - 500);
      } else if (salesAmount >= 300) {
        commission = 0.02 * salesAmount;
      }
    }
  
    return commission;
  }
  
  console.log("expect 0: ", computeSalesCommission(true, 200));
  console.log("expect 0: ", computeSalesCommission(false, 200));
  console.log("expect 3: ", computeSalesCommission(true, 300));
  console.log("expect 6: ", computeSalesCommission(false, 300));
  console.log("expect 65: ", computeSalesCommission(true, 3500));
  console.log("expect 100: ", computeSalesCommission(false, 3500));
  