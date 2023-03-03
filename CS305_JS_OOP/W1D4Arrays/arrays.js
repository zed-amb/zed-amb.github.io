

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a, b, c) {

    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
    }
    else if (c > a && c > b) {
        return c;
    }
    else {
        return "They are equal.";
    }
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
export function sum(arr) {
    let tot = 0;
    for (const number of arr) {
        tot += number;
    }
    return tot;
}


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} multiply of arr numbers
 */
export function multiply(arr) {
    let tot = 1;
    for (const number of arr) {
        tot *= number;
    }
    return tot;

}
/**
 * 
 * @param {String} str it accepts string of words
 * @returns {number} it returns the length of the word
 */
export function findLongestWord(str) {
    let WordLength = 0;
    for (const word of str) {
        if (word.length > WordLength) {
            WordLength = word.length;
        }
    }
    return WordLength;
}


/**
 * 
 * @param {Array} arr array of string
 * @returns {Array} it returns new array
 */
function reverseArray(arr){
    let arrayLists = [];
    for(let i = arr.length-1; i>=0; i--){
        arrayLists.push(arr[i])
    }
    return arrayLists;
}


/**
 * 
 * @param {Array} arr it reverses array in its place
 */
export function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
      const temp = arr[i];
      arr[i] = arr[arr.length - i - 1];
      arr[arr.length - i - 1] = temp;
    }
  }

export function scoreExams (multiArr){

}

/**
 * 
 * @param {Number} studentAnswers 
 * @param {Number} correctAnswers 
 * @returns {Array} it return an array holding the scores of each student
 */
export function scoreExams(studentAnswers, correctAnswers) {
    const scores = [];
  
    for (let i = 0; i < studentAnswers.length; i++) {
      let score = 0;
  
      for (let j = 0; j < studentAnswers[i].length; j++) {
        if (studentAnswers[i][j] === correctAnswers[j]) {
          score++;
        }
      }
  
      scores.push(score);
    }
  
    return scores;
  }


  /**
   * 
   * @param {Number} arr1 
   * @param {Number} arr2 
   * @returns {Array} it returns multidimentional arrays
   */
  export function generateArray(arr1, arr2) {
    let result = [];
    let counter = 1;
    for (let i = 0; i < arr1; i++) {
      let row = [];
      for (let j = 0; j < arr2; j++) {
        row.push(counter++);
      }
      result.push(row);
    }
    return result;
  }


let a = [1, 2, 3, 4];

let total = sum(a);
console.log(total);

let multip = multiply(a);
console.log(multip);

let name = ["Zelalem", "Melu", "Kiya", "Anitta"];
let names = findLongestWord(name);
let reverseArr = reverseArray(name);
console.log(names);

console.log(reverseArr);



