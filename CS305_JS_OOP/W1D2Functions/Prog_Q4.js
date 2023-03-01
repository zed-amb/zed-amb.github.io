"use strict"
const prompt = require("prompt-sync")();



function sumDigits(num) {
    let sum = 0;
    let digit;
    
    while (num > 0) {
      digit = num % 10;
      sum += digit;
      num = (num - digit) / 10;
    }
    
    return sum;
  }
  
  function multDigits(num) {
    let product = 1;
    let digit;
    
    while (num > 0) {
      digit = num % 10;
      if (digit !== 0) {
        product *= digit;
      }
      num = (num - digit) / 10;
    }
    
    return product;
  }
  

console.log(sumDigits(1234)); // 10
console.log(multDigits(1234)); // 24

console.log(sumDigits(102)); // 3
console.log(multDigits(102)); // 0

console.log(sumDigits(8)); // 8
console.log(multDigits(8)); // 8