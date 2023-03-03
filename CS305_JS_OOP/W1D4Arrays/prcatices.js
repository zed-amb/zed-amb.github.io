"use strict"
let scores = [10, 20, 30, 40, 50];

console.log(scores);


function findAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let ave = sum / arr.length;

    return ave;
}

let average = findAverage(scores);
console.log(average);

const nums = [];
const names = ["Zola", "Nimo", "Kiya", "Meluu"];

console.log(names);

console.log(names[1]);

let x, y;

function checkNum(x, y) {
    if (x == 100 || y == 100) {
        return true;
    }
    else if (x + y == 100) {
        return true
    }
    else
        return false;
}

console.log(checkNum(50, 90));

let fruit = [];
fruit[123] = "Apple";
console.log(fruit.length); //124

//Filling an Array

//Array method manipulation


//1 add element to the end

let fruits = ["Banana", "Avocado", "Apple"];
fruits.push("Kiwi");
console.log(fruits);

//add elements to front
fruits.unshift("Grapes");
console.log(fruits);

//remove item from the last

fruits.pop();
console.log(fruits);

//remove item from the front
fruits.shift();
console.log(fruits);

//Iterating through arrays

fruits.forEach(function (eatFruit) {
    console.log(eatFruit);

});

//Sort and Search

fruits.sort();
console.log(fruits);

console.log("-----------------------------//--------------------------------")
//search

console.log(fruits.indexOf("Avocado"));

//splitting and joining

let sentences = "I love coding in JavaScript";
let words = sentences.split(' ');

console.log(words);

//joining

console.log(words.join(' '));

function isBalanced(exp) {
    let stack = [];

    for (let bracket of exp) {
        if (bracket === '{') {
            stack.push(bracket);
        } else if (bracket === '}') {
            if (stack.pop() !== '{') {
                return false;
            }
        }
    }

    return stack.length === 0;
}


let exp = ['{', '(', ')', '}', '{', '}', '}'];

if (isBalanced(exp)) {
    console.log('The expression is balanced');
} else {
    console.log('The expression is not balanced');
}

// Multidimensional array

let grades = [[34, 65, 23, 87, 12, 54, 39],
[44, 67, 43, 66, 22, 46, 86, 23],
[65, 47, 38, 65, 27, 86, 43, 27, 55]];


for (let i = 0; i < grades.length; i++) {
    for (let j = 0; j < grades[i].length; j++) {
        // console.log(grades[i][j]);
    }

}
console.log("-------------------------------------------")
// Adding multidimensional array

const matrix = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];

function sumMatrix(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            sum += arr[i][j];
        }
    }

    return sum;
}

console.log("expect 45: ", sumMatrix(matrix));


if (0)
    console.log(0);
else
    console.log(1);

/* 
function forward(arg1){
    someOtherFunction(arg1);
}
const val =forward();
console.log(val);

function xyz(args){
    if(args){
        return true;
    }else{
    return;
    }
}
const vals = xyz(0);
alert(vals);
 */

let listNum = [1, 2, 3, 4, 5];

for (let listNums of listNum) {
    let printNums = listNums * 2;
    console.log(printNums);
}
console.log("-----------------------//--------------------------")
let Empp = [1, 2, 3, 4, 5, 6, 7, 8, 10];

/* //function zolEmp(allNum){
    for(let i = 0; i<Empp.length; i++){
        let allNum;
        if(allNum % 2 === 0){
        console.log(allNum);
        }
        else
        console.log();
    }
    console.log(allNum);


 */

function sumFirstAndLast(arr) {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements.");
    }
    return arr[0] + arr[arr.length - 1];
}

const myArray = [1, 2, 3, 4, 5];
const sum = sumFirstAndLast(myArray);

console.log(sum); // Output: 6


console.log("abc" > "xyz");

if (x === undefined) {
    console.log("x is undefined");
}


if (0) {
    console.log(false);
} else {
    console.log(1);
}

console.log("============================================================================");
//write what will appear in the console in the correct order    
let abc = 123;
function myfun(xyz) {
    xyz = xyz % 100;
    console.log(xyz);
    abc = xyz + 200;
    return xyz + abc;
    //console.log(xyz)
}

console.log(abc);
console.log(myfun(abc));
console.log(abc);
//console.log(xyz);

/*Write a js function "checkExam" that returns the grade number. 
The function recieves two arguments , two arrays.
- the input array contains the correct answers to an  exam
- the second input array is "answers" array and contains stuent's answers
- Return the grade number for the array of answers, 
    give +4 for each corect answer, -1 for each correct answer, -1 for each incorrect answer
- if the score < 0, return 0
Examples:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) -->6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) -->6
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) -->16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) -->0
*/

function checkExam(correctAnswers, studentAnswers) {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
        if (studentAnswers[i] === "") {
            score += 0;
        } else if (studentAnswers[i] === correctAnswers[i]) {
            score += 4;
        } else {
            score -= 1;
        }
    }
    return score < 0 ? 0 : score;
}

/*
Write a function computeCharges that will accept an array containing 
arrays of charges for customers. Your function should return array that contains an array for each customer.
The customer array should contain the average charge and maximum charge for that customer
 
Example:
 
const charges = [[1,2,3,4,5],[10,20,30,60], [300, 200, 100]]
 
console.log(computeCharges())--> [[3,5],[30,60],[200,300]]
*/

function computeCharges(arry) {
    const cutomerArray = [];

    for (let i = 0; i < arry.length; i++) {
        let sum = 0;
        let max = arry[i][0];
        for (let j = 0; j < arry[i].length; j++) {
            const charge = arry[i][j];
            sum += charge;
            if (charge > max) {
                max = charge;
            }
        }
        const avg = sum / arry[i].length;
        cutomerArray.push([avg, max]);
    }

    return cutomerArray;
}

const charges = [[1, 2, 3, 4, 5], [10, 20, 30, 60], [300, 200, 100]];

console.log(computeCharges(charges));// [[3,5],[30,60],[200,300]]



//largestPrime factor

function largestPrimeFactor(num) {
    if (num <= 1) {
        return 0;
    }

    let largestPrime = 2;
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            largestPrime = i;
            num /= i;
        }
    }
    return largestPrime;
}


let largPrime = largestPrimeFactor(1);

console.log(largPrime);

let a = [1];
let b = [1];
let c = [1] === [1];
console.log(c);

/* Write code to create an array with elements "l", "m", "n" and then write a 
function and call it with your array as the argument. The function should 
log the elements to the console using an indexed for loop.
 It should return the number of elements logged to the console. */

function numElement(arr) {

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++;
    }
    return count;
}

let str = ["l", "m", "n"];

console.log(numElement(str));


function countElement(arr) {
    let count = 0;
    for (let elements of arr) {
        count++;
    }
    return count;
}



//Call =back function
console.log(countElement(str));


let sayHi = function(){
     console.log("Hi");
}

console.log(sayHi);


//Examples of callbacks
/* Write a function, myCallback( func, arg). myCallback will call func
with the given arg and then log the return value to the console.
➢Test myCallback by calling it with a function that takes a number and returns the cube of the
argument. First write it as "cube" a normal named function declaration, then as an anonymous
function expression.
➢Also test with a function that returns true if the arg is an even number
➢ myCallback(cube, 10) → 100
➢ myCallback(isEven, 10) → true  */

// A function that takes a function and an argument, calls the function with the argument, and logs the result
function myCallback(func, arg) {
    const result = func(arg);
    console.log(result);
  }
  
  // A function that returns the cube of a number
  function cube(num) {
    return num ** 3;
  }
  
  // An anonymous function expression that returns true if a number is even
  const isEven = function(num) {
    return num % 2 === 0;
  };
  
  // Test myCallback with cube and 10
  myCallback(cube, 10); // logs 100
  
  // Test myCallback with isEven and 10
  myCallback(isEven, 10); // logs true



  function funX(a, b) {
    let c;
    c = 5;
    funY(a * c, "yes");
    }
    function funY(x, y) {
    let z;
    z = "I can see the sea";
    console.log("What is on the stack here?");
    }
    function main() {
    let a;
    let b;
    a = "Hello";
    funX(3, a);
    b = "World";
    }
    main();