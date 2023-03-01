"use strict"
const prompt = require("prompt-sync")();

/*5. Cost of House Down Payment
Make a defining table and then write a program that calculates down payment for a home loan based
on following rules. Your program should prompt for the cost and write the down payment amount to
the console.
Cost of House                          Down Payment
$0 to less than 50K                      5% of the cost
$50K to less than 100K                   $1000 + 10% of (cost - $50K)
$100K to less than 200K                  $2000 + 15% of (cost - $100K)
$200K and above                          $5000 + 10% of (cost - $200K)*/



function calcDownpayment(costOfTheHouse) {
    let downPayment;
    if (costOfTheHouse > 0 && costOfTheHouse < 50000) {
      downPayment = costOfTheHouse * 0.05;
    } else if (costOfTheHouse >= 50000 && costOfTheHouse < 100000) {
      downPayment = costOfTheHouse * 0.1;
      downPayment += 1000;
    } else if (costOfTheHouse >= 100000 && costOfTheHouse < 200000) {
      downPayment = costOfTheHouse * 0.15;
      downPayment += 2000;
    } else {
      downPayment = costOfTheHouse * 0.1;
      downPayment += 5000;
    }
    return downPayment;
  }
  
  console.log("expect 2000: ", calcDownpayment(40000));
  console.log("expect 2500: ", calcDownpayment(50000));
  console.log("expect 7500: ", calcDownpayment(100000));
  console.log("expect 25000: ", calcDownpayment(250000));
  
  