/* eslint-disable require-jsdoc */


let zol = { fname: "Zola", lname: "Ambisa", yexp: 10 };
let john = { fname: "John", lname: "Hamb", yexp: 20 };
let tola = { fname: "Tola", lname: "Bona", yexp: 5 };
let people = [zol, john, tola];

let total = people.reduce((accu, curr) => accu + curr.yexp, 0);
console.log(total);


//Question #
const o1 = { x: 1, y: 2 };
const o2 = { x: 1, y: 2 };

console.log(o1 === o2);// false
console.log(o1.x === o2.x); //true
console.log(o1 == o2); //false
console.log(o1.x == o2.x); true
o2.y = 200;
o2.x = 100;
console.log(o1.y); // 2

//Question #

//arr.map(foo)
/*
How many times will foo be called?
How many arguments will be passed to foo?

foo will be called once for each element in arr.
 So, if arr has n elements, foo will be called n times.

Each time foo is called, it will be passed three arguments:
 the current element of arr, the index of the current element, 
 and the entire arr array. So, foo will be called with
  three arguments.*/

//Question #
//what is the blank space gonna be ?

/*function foo(bat) {
  if (bat) {
    console.log("bat"); //
    return bat;
  }
  const long = console.log("short");//undefined
  return long;
}

console.log(foo()); //short

 //what is the blank space gonna be ?
 function foo(bat){
    if(bat){
     console.log("bat");//bat
  }
  const long =console.log("short");//short
  return long;
}

console.log(foo(""));//undefined

//what is the blank space gonna be ?
 function foo(bat){
    if(bat){
     console.log("bat");//__________________
    return  bat;
  }
  const long =console.log("short");//_____________________
  return long;
}

console.log(foo(false));//________________ */
/*
function MyCons(name, age){
    this.name = name;
    this.age = age;
}
const bob = myCons("Bob", 20);*/

//console.log(bob);

//valuee of bob????//


const donation1 = { funderId: 1, amount: 100 };
const donation2 = { funderId: 2, amount: 10 };
const donation3 = { funderId: 3, amount: 1 };
const donation4 = { funderId: 4, amount: 5 };
const donation5 = { funderId: 5, amount: 15 };

const day1 = { donations: [donation1, donation2], date: "01/10/2022", };
const day2 = { donations: [donation3, donation4, donation5], date: "01/11/2022", };


const dailyRecord = [day1, day2];

//Use  a for loop in a function, dailyTotal to find total amount
// donated for a given day.
//console.log("expect 21:", dailyTotal(day2.donations));

function dailyTotal(donations) {
  let total = 0;
  for (const donation of donations) {
    total += donation.amount;
  }
  return total;
}

console.log("expect 21:", dailyTotal(day2.donations));

//Use reduce in a function, dailyTotalReduce, to find total amount 
//donated for a given day.

function dailyTotalReduce(donations) {
  return donations.reduce((accu, curr) => accu + curr.amount, 0);
}

console.log("expect 110: ", dailyTotalReduce(day1.donations));

//Write a function totalDonations using a for loop that will
// find the total donations across all days in the dailyRecord array.
// HINT: Make use of dailyTotal.

function totalDonations(record) {
  let total = 0;
  for (let day of record) {
    total += dailyTotal(day.donations);
  }
  return total;
}

console.log("expect 131: ", totalDonations(dailyRecord));


function totalDonation(record) {
  return record.reduce((total, day) => total + dailyTotal(day.donations), 0);
}
console.log("expect 131: ", totalDonation(dailyRecord));




const phone = "789 142 345 590";

const phoneArr = phone.split(" ");
//console.log(phoneArr)

function middleSort(a, b) {
  return a - b;
}

console.log(phoneArr.sort(middleSort));



let myObj = {
  user1: {
    fname: "john",
    lname: "doe",
  },
  user2: {
    fname: "john",
    lname: "doe",
  },
  equals: function () {
    return this.user1 === this.user2;
  }
}


console.log(myObj.equals());


let anotherObject = { color: "green" };
let color = "red";
let myObject = {
  anotherObject: { color: "blue" },
  printColor: function () {
    console.log(this.anotherObject.color);
  }
}
myObject.printColor();

let array = [-10, 10, 20, -20, -10, 30]
let returnVal = array.filter(array => array <= 0);
console.log(returnVal);
console.log(array);

function haveFun() {veFun;
let result = anotherFun();
let output1 = result.myFuns[1];
let output2 = result.myFuns[0]();
console.log(anotherFun);
console.log(result)
  let fun = {
    myFuns: []
  }
  let i = 0;
  while (i < 3) {
    let myFunc = function () {
      console.log("Fun : " + i);
    }

    fun.myFuns.push(myFunc);
    i++;
  }
  return fun;
}



function compareNumeric(a, b) {
  /*   a = " " + a
    b = " " + b
  //the above is for lexocographic
    if (a > b) return 1; //a comes after b if 1
    if (a == b) return 0;
    if (a < b) return -1; //a comes before b if -1 */
  return b - a

}

let arr = [2, 1, 15];
arr.sort(compareNumeric);
console.log(arr); // desceding order



let person = [{ fname: "Chala", age: 10, weight: 95 },
{ fname: "Annane", age: 40, weight: 120 },
{ fname: "Kiyya", age: 60, weight: 80 },];


function sortByNmae(a, b) {
  if (a.fname > b.fname) {
    return 1;
  }
  if (a.fname < b.fname) {
    return -1;
  }
  else 
    return 0;
}

person.sort(sortByNmae);
console.log(person);


 person.sort((a, b) => a.weight - b.weight);
 person.sort((a, b) => a.age - b.age);

console.log(person);


const peopl = [
  {fname: "Alice", age: 25, weight: 65},
  {fname: "Bob", age: 20, weight: 75},
  {fname: "Charlie", age: 30, weight: 80}
];

peopl.sort((a, b) => a.age - b.age);

console.log(peopl);


/* Write a program to compute student  grades 
and average score for the class. your program should have 
a quiz object that will contain two properties: "students" and "key".*/

function foo(bat) {
  if (bat) {
    console.log("bat"); //
    return bat;
  }
  const long = console.log("short");//undefined
  return long;
}

console.log(foo()); //short



const bob = {name: "bob", age: 10, weight: 95};
const ned = {name: "ned", age: 20, weight: 105};
const sue = {name: "sue", age: 30, weight: 125};
const peoplee = [ned, bob, sue];

