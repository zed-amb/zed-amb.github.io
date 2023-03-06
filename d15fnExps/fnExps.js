


//import {maxOfThree, sum, multiply, findLongestWord, reverseArray, reverseArrayInPlace, scoreExams, generateArray} from "./arrays.js";
import {maxOfThree, sum, multiply} from "./arrays.js";
"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
*/ 
//import {double, times100, myMap } from "./"; //add all of your function names here that you need for the node mocha tests

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

/**
 * 
 * @param {arr} arr- array of numbers 
 * @param {function} function - any function that takes a number as paramater
 * @returns  {Array} creates a new array with function mapped to each element
 */
   export function myMap(arr, anyfunction){
   let arr1=[];
   for( let element of arr){
    arr1.push(anyfunction(element));
   }

   return arr1;
}






