"use strict"
const prompt = require("prompt-sync")();


function convertFahrenheit(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius.toFixed(4);
  }
  
  console.log("expect 0: ", convertFahrenheit(32));
  console.log("expect -17.7778: ", convertFahrenheit(0));
  console.log("expect 100: ", convertFahrenheit(212));
  console.log("expect 37.7778: ", convertFahrenheit(100));
  