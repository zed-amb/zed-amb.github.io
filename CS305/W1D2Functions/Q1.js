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


let isSalaried = true;
let commission = 0;
let sales = prompt("Enter today's sales: ");

if (isSalaried) {
    if (sales > 300 && sales < 500) {
      commission = sales * 0.01;
    } else if (sales > 500) {
      commission = sales * 0.02;
    }
  } else {
    if (sales > 300 && sales <500) {
      commission = sales * 0.02;
    } else if (sales > 500) {
      commission = sales * 0.03;
    }
  }
  
  console.log("Your commission is: "+ commission);