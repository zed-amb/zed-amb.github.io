/* eslint-disable require-jsdoc */
function sum(a, b) {
    return a + b;
}
console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.


let str = "Widget with id get gudda";
//console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
//console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
//console.log( str.indexOf("get") ); // 1, "id" is found at the position 1 (..idget with id)


let arr =[1, 2, 3, 4, 5, 6];

arr.forEach(function (num) {
    if (num % 2 === 0) {
        console.log(num);
    }
});


const numbers = [1, 5, 18, 2, 77, 108]; 

/*
➢ use filter, find, and findIndex to find
➢ all the even numbers
➢ the first even number
➢ the index of the first even number */


const filteredNum = numbers.filter(num => num % 2 === 0);
//console.log(filteredNum); //18, 2, 108


const evenNum = numbers.find(item => item % 2 === 0);
//console.log(evenNum); //18


const firstEvenNum = numbers.findIndex(num => num % 2 === 0);
//console.log(firstEvenNum); //2



/* write a function, sumPoints, to get the total points across all players */
const player1 = { name: "Bob", points: [1, 2, 1] };
const player2 = { name: "Andre", points: [2, 0, 1] };
const player3 = { name: "Max", points: [1, 1, 1] };
const players = [player1, player2, player3];




function sumPoints(players) {
    let totPoints = 0;
    players.forEach(player => {
        player.points.forEach(point => {
            totPoints += point;
        });

    });
    return totPoints;
}

//console.log("expect 10: ", sumPoints(players));


const names = ["Bilbo", "Gandalf", "Nazgul"];
names.forEach(function (character) {
     console.log(character)});
names.forEach((name, index, array) => {
    console.log(`${name} is at index ${index} in ${array}`);
});


/* Exercise
25
➢ use forEach to log all the even elements of an array to the console
[1,5,16,3, 108] */



let nums = [1,5,16,3, 108];
let evnum =[]; 

nums.forEach(function(number){
    if(number%2===0){
        evnum.push(number);
        console.log(evnum);
    }
});



//split()

const words = "A callback is a function which can be passed as parameter to other function. See the example below."

const splitted = words.split(" ");
console.log(splitted);


let mixed = "gdfhgdhg634653";

let pure = mixed.split('');

/* let result = arr.map(function(item, index, array) {
// /passed function returns the new value in place of each item
});
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // [5,7,6]
//modify so that it logs array with index: item.length instead of just item.length
console.log("expect [0: 5, 1: 7, 2: 6]", lengths);  

let name = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // [5,7,6]
let result = arr.map(function(name, index) {
    // /passed function returns the new value in place of each item
return index + " " + name.length;
    });

    console.log(name); 
    
let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);

console.log(name);

*/

/* ➢ reduce the array to the product of the numbers (“expect 120”)
➢ reduce the array to the max of the numbers (“expect 5”)
let arr = [1, 2, 3, 4, 5]; */

let aNum = [1, 2, 3, 4, 5]; 
let mult = aNum.reduce(function(product, current){return product*current; }, 1);
//let max = aNum.reduce(function(max, current) ( if (current>max) { return max;}))

console.log(mult)
let max = aNum.reduce(function(max, current) {return current> max ? current:max; }, 0);
console.log(max);