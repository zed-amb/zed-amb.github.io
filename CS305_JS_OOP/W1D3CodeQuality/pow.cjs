"use Strict"
const prompt = require("prompt-sync")();

function pow(x, n){
    return x**n;
}

let result = pow(2,3);
console.log(result);

let age = 10;

console.log(age);

function output() {

  age = 20;

  console.log(age);

}

output();

console.log(age);

const foo = console.log("hello");