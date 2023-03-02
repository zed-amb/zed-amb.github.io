"use strict"
const prompt = require("prompt-sync")();

function greet(){
    console.log("Good morning");

}

greet();

function myFun(){

    console.log("Oh happy day!")
  
  }
  
  const returnVal = myFun();
  
  //What will the value of returnVal be?


  function sum(num1=0, num2=0){
    return num1+num2;
    }
    console.log(sum())

    console.log("----------------------------------------------")

    
/*     let x = 10;

    function main() {
    let x;
    console.log("x1: " + x);
    if (x > 0) {
    let x = 30;
    console.log("x2: " + x);
    }

    x= 40;
    let f = function(x) {
         console.log("x3: " + x);
         }
    f(50);
    }

    main(); */

/* 
    function a(){
        console.log(x); // consult Global for x and print 20 from Global
        }

        function b(){
        let x = 10;
        a(); // consult Global for a
        console.log(x);
        }


        let x = 20;
        b()
 */

     /*    function b(){

            function a(){
            console.log(x);
            }

            let x = 10;
            a();

            console.log(x);
            }


            let x = 20;
            b(); // 10 
 */
/* 
            function b(){

                function a(){
                console.log(x);
                }

                a();
                console.log(x);
                }


                let x = 20;
                b(); // 20 */
/* 
                function f() {
                    let a = 1, b = 20, c;
                    console.log(a + " " + b + " " + c); // 1 20 undefined
                    
                    function g() {
                    let b = 300, c = 4000;
                    console.log(a + " " + b + " " + c); // 1 300 4000
                    a = a + b + c;
                    console.log(a + " " + b + " " + c); // 4301 300 4000
                    }

                    console.log(a + " " + b + " " + c); // 1 20 undefined

                    g();

                    console.log(a + " " + b + " " + c); // 4301 20 undefined
                    }


                    f();


                  //  What output will this code produce?

                    let age = 10;
                    
                    console.log(age);
                    
                    function output() {
                    
                      let age = 20;
                    
                      console.log(age);
                    
                    }
                    
                    output();
                    
                    console.log(age);



                    function sayHi(name) {

                        console.log("Hi " , name);
                      
                        return "Bye " + name;
                      
                      }
                      
                      const sayHiReturn = console.log(sayHi() );
                       */


                    