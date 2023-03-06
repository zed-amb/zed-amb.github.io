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
    give +4 for each corect answer, -1 for each incorrect answer
- if the score < 0, return 0
Examples:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) -->6
checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""]) -->6
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) -->16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) -->0
*/

/* function checkExam(correctAnswers, studentAnswers) {
    let score = 0;
    for (let i = 0; i < correctAnswers.length; i++) {
         if (studentAnswers[i] === "") {
            score -= 1; 
        } else if (studentAnswers[i] === correctAnswers[i]) {
            score += 4;
        } else {
            score -= 1;
        }
    }
    return score < 0 ? 0 : score;
}
 */
function checkExam(correctAnswers, studentAnswers) {
    let score = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        if (studentAnswers[i] === correctAnswers[i]) {
            score += 4;
        } else {
            score -= 1;
        }
    }
    return score < 0?0:score;
}


console.log("----------------------check exam---------------------------")

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])// -->6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])) //-->6
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])// -->16
checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]) //-->0

//Another example

function scoreExams(stuAnswers, corrAns) {
    const numCorrectArr = [];
    for (let i = 0; i < stuAnswers.length; i++) {
        let numCorrect = 0;
        for (let j = 0; j < stuAnswers[i].length; j++) {
            if (stuAnswers[i][j] === corrAns[j]) {
                numCorrect++;
            }
        }
        numCorrectArr.push(numCorrect);
    }
    return numCorrectArr;
}

const studentAnswers = [[1, 1, 2, 4], [2, 1, 2, 2], [3, 1, 3, 4]];
const correctAnswers = [1, 1, 2, 2];
console.log(scoreExams(studentAnswers, correctAnswers)); // [3, 2, 3]


/*
Write a function computeCharges that will accept an array containing 
arrays of charges for customers. Your function should return array that contains an array for each customer.
The customer array should contain the average charge and maximum charge for that customer
 
Example:
 
const charges = [[1,2,3,4,5],[10,20,30,60], [300, 200, 100]]
 
console.log(computeCharges())--> [[3,5],[30,60],[200,300]]
*/

function computeCharges(arrayCharges) {
    const cutomerArray = [];

    for (let i = 0; i < arrayCharges.length; i++) {
        let sum = 0;
        let max = arrayCharges[i][0];
        for (let j = 0; j < arrayCharges[i].length; j++) {
            const charge = arrayCharges[i][j];
            sum += charge;
            if (charge > max) {
                max = charge;
            }
        }
        const avg = sum / arrayCharges[i].length;
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


let largPrime = largestPrimeFactor(12);

console.log("Largest prime ", largPrime);

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


let sayHi = function () {
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
const isEven = function (num) {
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

if (x === undefined) {
    console.log("x is undefined");
}



function hi(name) {
    return 'Hi ' + name;
}

let goodBye = function () {
    return 'Good Bye';
}

console.log(hi('Developer', 'Welcome')); //_____Hi Developer____________________
console.log(goodBye('Developer'));// _______Goodbye__________________
console.log(goodBye); //__________fn itself_______________
console.log(goodBye());// ________Goodbye_________________

function smtOdd(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            mul = mul * arr[i]
        }
    }
    return mul;
}

let j = [1, 2, 3, 4, 5, 6];
let res = (smtOdd(j));
console.log(res);

//function xyz(arg1)

/* 
 [5] let arr1 = [5,6,7,8,9];
let arr2 = [34,35,66,77,87, 100];
Write a function, odds, that will return an array holding all the odd numbers in the input array. It should use a for..of loop.

odds(arr1) will return [5, 7, 9]
odds(arr2) will return [35, 77, 87 ] */


//Solution

function odds(arr) {
    const result = [];
    for (const num of arr) {
      if (num % 2 !== 0) {
        result.push(num);
      }
    }
    return result;
  }


  /* [5] Write a function, largest(arr) that returns the largest element of an array

  console.log("Expect 55: ", largest([0, 44, 55, 1, 2]));
 */



  function largest(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }


  /* Write a function that receives an array of numbers and returns the same array after
   swapping the largest and smallest elements. First write a defining table for the function. 
   You can include the steps of the table as comments in your code.

Inputs: the input is the given array from the user

Outputs:  is the swapped number between the max and mmin in the array

Steps: */


function swapMinMax(arr) {

    // declaring variables that holds min and max number as well as min and max elements of the first elements
    let minIndex = 0;
    let maxIndex = 0;
    let minVal = arr[0];
    let maxVal = arr[0];
//loop through each elements 
    for(let i = 0; i<arr.lenght; i++){
        /*compare the current smallest and largest in the array. 
        If it's smaller than the current smallest element,  update the smallest index and value.
         If it's larger than the current largest element, update the largest index and value.*/
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minVal) {
              minIndex = i;
              minVal = arr[i];
            } else if (arr[i] > maxVal) {
              maxIndex = i;
              maxVal = arr[i];
            }
          }
          //the smallest index is not equal to the largest index, swap the values at those indice
          if (minIndex !== maxIndex) {
            [arr[minIndex], arr[maxIndex]] = [arr[maxIdx], arr[minIdx]];
          }
        //this reurn the modified one
          return arr;
        }           
    }





    /* Write a function, matrixMatch that will find all the matches in a pair of matrices.
     It will take two 2-d arrays as arguments and return a 1-d array that has the values of all the matches.
      You may assume that the arrays will always be the same dimensions, but could be any number of rows and columns.

const testArr1 = [ [1,2,3], [5,2,3], [9,2,3] ]
const testArr2 = [ [1, 2, 10], [3, 2, 5], [9, 6, 7]]
matrixMatch(testArr1, testArr2)--> [ 1, 2, 2, 9] */



//input
/* arr1: a multidimentional array of numbers
arr2: a multidimentional array of numbers


//output
an array containing the values of all matches between arr1 and arr2 */

function matrixMatch(arr1, arr2) {
    const matchedResult = [];
  //loop through each rows in arr1 and find matches in the corresponding arr2
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr1[i].length; j++) {
        if (arr1[i][j] === arr2[i][j]) {
          matchedResult.push(arr1[i][j]);
        }
      }
    }
  
    return matchedResult;
  }



  function isPrime(n) {
    if (n < 2) {
      return false;
    }
  
    for (let i = 2; i <= n / 2; i++) {
      if (n % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function primeFactors(n) {
    if (n < 2) {
      return 0;
    }
  
    const factors = [];
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        if (isPrime(i)) {
          factors.push(i);
        }
      }
    }
  
    return factors;
  }





