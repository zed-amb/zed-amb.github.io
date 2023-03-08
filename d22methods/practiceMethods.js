//"use strict";
/* eslint-disable */

const manager = {
    name: "John",
    age: 27,
    job: "Software Engineer",
    sayHi: sayHowdy
  };

  const intern= {
    name: "Ben",
    age: 21,
    job: "Software Engineer Intern",
    sayHi: sayHowdy
  };
  
  /**
   * @returns {undefined} 
   */
  function sayHowdy() {
     console.log("Hello, my name is ", this.name, "I am ", this.age, "my job is ", this.job)
  }
  
  
  manager.sayHi(); // Hello, my name is John. I am 27.  My job is Software Engineer.'
  intern.sayHi(); // Hello, my name is Ben.  I am 21.  My job is Software Engineer Intern.'

/* 
let user = {
    name: "John",
    age: 30
    };


    user.zola = function() {
    console.log(this.name);
    };


    user.zola(); // Hello! 
    

    let students = {
        fname: "Zola",
        lname: "Ambisa",
        id: 115120,
    };

    students.course =function(){
        console.log(this.id);
    };

    let courses = ["JS", "Java", "Python"];

    students.course();
    
    console.log(students.courses);*/
    let students = {
        fname: "Zelalem",
        lname: "Ambisa",
        id: 115120,
        greeting: function () {
            return `Hi, I am ${this.fname} ${this.lname}.`;
          },
        };
        console.log(students.greeting());