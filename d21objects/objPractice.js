const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log("draw")
    }
};

//circle.draw();


function Circle (radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw");
    }
}

const newObj = new Circle(2);
//console.log(newObj);
const dog = {
    name: "Luna",
     legs: 4, 
     color: "white", 
     age: 5,
     bark: function(){
        console.log("woof woof");
        //return "woof woof";
     }
};
dog.bark();
console.log(dog.name);

dog.breed = "curl";
dog.getDogInfo =  function(){
    return `The dog name is ${this.name}, the dog has ${this.legs}. \nThe color of the dod is ${this.color}, and age is ${this.age}`;
};



console.log(dog.getDogInfo());

//Exercise

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };

  /* 
1. Find the person who has many skills in the users object.

2. Count logged in users, count users having greater than equal to 50 points from the following object.

3.  Find people who are MERN stack developer from the users object

4. Set your name in the users object without modifying the original users object

5. Get all keys or properties of users object

6. Get all the values of users object

7. Use the countries object to print a country name, capital, populations and languages. */

//Soln 1
let maxSkills = 0;
let skilledPerson = " ";
for(const user in users){
    const numSkills = users[user].skills.length;
    if(numSkills>maxSkills){
        maxSkills = numSkills;
        skilledPerson = user;
    }
}

console.log(skilledPerson);


//soln 2

let numLoggedIn = 0;
let highPoint = 0;

for(const user in users){
    if(users[user].isLoggedIn){
    numLoggedIn++;
}
if(users[user].points>=50)
highPoint++;
}

console.log(numLoggedIn);
console.log(highPoint);


// Soln 3
const mernDevelopers = [];

for (const user in users) {
  const skills = users[user].skills;
  if (skills.includes('MongoDB') && skills.includes('Express') && 
  skills.includes('React') && skills.includes('Node')) {
    
    mernDevelopers.push(user);
  }
}

console.log(mernDevelopers);



const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
//console.log(countriesToUpperCase)

/*
// Arrow function
const countriesToUpperCase = countries.map((country) => {
  return country.toUpperCase();
})
//Explicit return arrow function
const countriesToUpperCase = countries.map(country => country.toUpperCase());
*/
const countriesHaveFiveLetters = countries.filter(
  country => country.length === 5 );
console.log(countriesHaveFiveLetters);

const scores = [
  { name: 'Asabeneh', score: [95, 90, 94] },
  { name: 'Lidiya', score: 98 },
  { name: 'Mathias', score: 80 },
  { name: 'Elias', score: 50 },
  { name: 'Martha', score: 85 },
  { name: 'John', score: 100 },
];

const scoresGreaterEighty = scores.filter(score => score.score > 80);
console.log(scoresGreaterEighty);
