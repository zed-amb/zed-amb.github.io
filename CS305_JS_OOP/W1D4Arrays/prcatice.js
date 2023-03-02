let scores = [10, 20, 30, 40, 50];

console.log(scores);


function findAverage(arr){
    let sum=0;
    for(let i= 0; i<arr.length; i++){
       sum += arr[i];
    }
   let ave = sum/arr.length;

return ave;
}

let average = findAverage(scores);
console.log(average);

const nums = [];
 const names = ["Zola", "Nimo", "Kiya", "Meluu"];

 console.log(names);

 console.log(names[1]); 

 let x, y;

 function checkNum(x, y){
     if(x==100 || y==100){
         return true;
     }
     else if(x+y==100){
         return true
     }
     else
     return false;
 }

 console.log(checkNum(50, 90));

 let fruit = [];
fruit[123] = "Apple";
console.log( fruit.length ); //124

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

fruits.forEach(function(eatFruit){
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

let grades = [[34, 65,23,87,12,54,39],
              [44,67,43,66,22,46,86,23],
              [65,47,38,65,27,86,43,27,55]];
    

for(let i =0; i < grades.length; i++){
    for(let j = 0; j < grades[i].length; j++){
       // console.log(grades[i][j]);
    }
    
}
console.log("-------------------------------------------")
// Adding multidimensional array

const matrix = [ [1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9] ];

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


if(0)
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

let listNum = [1,2,3,4,5];

for(let listNums of listNum){
    let printNums = listNums*2;
    console.log(printNums);
}
console.log("-----------------------//--------------------------")
let Empp = [1,2,3,4,5,6,7,8,10];

//function zolEmp(allNum){
    for(let i = 0; i<Empp.length; i++){
        let allNum;
        if(allNum % 2 === 0){
        console.log(allNum);
        }
        else
        console.log();
    }
    console.log(allNum);



    
    function sumFirstAndLast(arr) {
        if (arr.length < 2) {
          throw new Error("Array must have at least two elements.");
        }
        return arr[0] + arr[arr.length - 1];
      }
      
      const myArray = [1, 2, 3, 4, 5];
      const sum = sumFirstAndLast(myArray);
      
      console.log(sum); // Output: 6
      


      