/* function sayHi(){
    console.log("Hello");

}
console.log( sayHi ); // shows the function code   [Function: sayHi]

let func = sayHi;

console.log( func ) // it returns [Function: sayHi]
func();  //Hello
sayHi();  //Hello


//callbacks

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no();
}

function showOK(){
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOK, showCancel);



  // same using func expression
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

  let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

  function welcome() {
    alert("Hello!");
  }

} else {

  function welcome() {
    alert("Greetings!");
  }

} 

// ...use it later
welcome(); // Error: welcome is not defined
*/



let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {
    alert("Greetings!");
  }
}

// Here we're out of curly braces,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined