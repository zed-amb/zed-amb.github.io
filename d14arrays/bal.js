/* - Use a for .. of loop with the expression array
    - push any left bracket onto a new array, expressionStack
    - on a right bracket pop the expressionStack and check that return value is a left bracket 
        -- using the array as a stack
    - if not, then not balanced
    - if stack empty at end then balanced, else not balanced
Example:  
 Input: exp = [ "{", "}", "{", "{", "}", "}" ]  
Output: Balanced 
 
Input: exp = [ "{", "{", "}", "{" ] 
Output: Not Balanced 
*/
/**
 * 
 * @param {Array} expArray is array of brackets, must be either { or }
 * @returns {String}  balanced or not balanced
 */

function isBalanced(expArray) {
    const expStack = [];
    /* - Use a for .. of loop with the expression array */
    for (const bracket of expArray) {
        /* 	- push any left bracket onto a new array, expressionStack */
        if (bracket === "{") {
            expStack.push(bracket);
        } else {    /*	- on a right bracket pop the expressionStack and check that return value is a left bracket
         if not, then not balanced */
            const popBracket = expStack.pop();
            if (popBracket !== "{") {
                return "not balanced";
            }
        }
    } //end of loop
    /* if stack empty at end then balanced, else not balanced */
    if (expStack.length === 0) {
        return "balanced";
    } else {
        return "not balanced";
    }
}

console.log("expect balanced: ", isBalanced(["{", "}", "{", "{", "}", "}"]));
console.log("expect not balanced: ", isBalanced(["{", "{", "}", "{"]));

/* function a(){
    console.log(x); // consult Global for x and print 20 from Global
    }
    function b(){
    let x = 10;
    a(); // consult Global for a
    console.log(x);
    }
    let x = 20;
    b();
 */
/* 
    function f(){
        function a(){
        console.log(i);
        }
        let i = 10;
        a();
        console.log(i);
        }
        let i = 20;
        f(); 


        function c(){
            function a(){
            console.log(x);
            }
            a();
            console.log(x);
            }
            let k = 20;
            c(); // 20 */




let x = 10;
function main() {
    let x = 0;
    console.log("x1 is " + x);
    x = 20;
    console.log("x2 is " + x);
    if (x > 0) {
        x = 30;
        console.log("x3 is " + x);
    }
    console.log("x4 is " + x);
    function f(x) {
        console.log("x5 is " + x);
    }
    f(50);
    console.log("x6 is " + x);
}
main();
console.log("x7 is " + x);