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

describe("test of ComputSalesCommission", function(){
  it("tests salaried and 200 sales", function(){
  assert.strictEqual(computeSalesCommission(true, 200), 0);
  });
  it("tests not salaried and 200 sales", function(){
  assert.strictEqual(computeSalesCommission(false, 200), 0);
  });
  it("tests salaried and 300 sales", function(){
  assert.strictEqual(computeSalesCommission(true, 300), 3);
  });
  it("tests not salaried and 300 sales", function(){
  assert.strictEqual(computeSalesCommission(false, 300), 6);
  });
  it("tests salaried and 3500 sales", function(){
  assert.strictEqual(computeSalesCommission(true, 3500), 65);
  });
  it("tests not salaried and 3500 sales", function(){
  assert.strictEqual(computeSalesCommission(false, 3500), 100);
  });
 });

console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

  