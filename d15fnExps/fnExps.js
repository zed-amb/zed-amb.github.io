
/**
 * 
 * @param {number} number - any number times 2
 * @returns {number} double the input
 */
export function double(number){
    return number*2;
 }
 
 /**
  * 
  * @param {number} number - any number times 100
  * @returns  {number} -100 times the input
  */
   export function times100(number){
    return  number*100;
  
   }
 
 /* 
   @param {arr} arr- array of numbers 
   @param {function} function - any function that takes a number as paramater
   @returns  {Array} creates a new array with function mapped to each element
  */
 
   /**
    * 
    * @param {arr} arr array of numbers 
    * @param {function} anyfunction - that takes a number as paramater 
    * @returns {Array}  creates a new array
    */
    export function myMap(arr, anyfunction){
    let arr1=[];
    for( let element of arr){
     arr1.push(anyfunction(element));
    }
 
    return arr1;
 }
 
 
 
 
 
 
 





