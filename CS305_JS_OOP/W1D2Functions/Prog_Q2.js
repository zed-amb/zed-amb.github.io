"use strict"
const prompt = require("prompt-sync")();

/* Input	                             Output
initialAmount                        	Initial amount in the savings account
annualInterestRate	                    Annual interest rate (as a percentage)
numberOfYears	                        Number of years for which the interest will be compounded
Returns                             	Final balance in the savings account */

export function compoundInterest(initialAmount, annualInterestRate, numberOfYears) {
    let monthlyInterestRate = annualInterestRate / 1200; // 12 months in a year, 100 to convert from percentage to decimal
    let numberOfMonths = numberOfYears * 12;
    let balance = initialAmount;
  
    for (let i = 0; i < numberOfMonths; i++) {
      balance += balance * monthlyInterestRate;
    }
  
    return balance; 
  }
  
  console.log("expect 110.47", compoundInterest(100, 10, 1));
  console.log("expect 16470.09", compoundInterest(10000, 5, 10));
  