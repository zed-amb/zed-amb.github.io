import promptSync from "prompt-sync";

const prompt = promptSync();

/* eslint-disable require-jsdoc */

/**
 * 
 * @param {*} question is any string
 * @param {*} yes is fun
 * @param {*} no  is fun
 * @return {undefined}
 */
function ask(question, yes, no) {
    if (question) {
        yes();
    } else {
        no();
  }
}


  function showOk() {
   console.log( "You agreed." );
  }

  function showCancel() {
    console.log( "You canceled the execution." );
  }


  ask(0, showOk, showCancel);



  //callback Example 2

  function greeting(name) {
    console.log(`Hello, ${name}`);
  }
  
const mName = "Zola";
greeting(mName);

  function processUserInput(myName) {
    const namee = "Zelalem";
    myName(namee);
  }
  
  processUserInput(greeting);

  let myInt = 555;
myInt = false;

//There will be an error from trying to assign a boolean to myInt.

console.log(myInt);

let hike = "1043huthuthut";
let what = parseInt(hike, 10);

console.log(what);