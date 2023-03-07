/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
export function maxOfThree(a, b, c) {
    let largest = a;// a is the largest so that we compare
    if (b > largest) {
        largest = b;
    } if (c > largest) {
        largest = c;
    }

    return largest;// this will return whichever the largest 
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
 * @returns {number} sum of arr numbers
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
 * @param {words} word 
 * @returns longestword.length
 */
export function findLongestWord(word) {
    let longestWord = 0;
    for (let i = 0; i < word.length; i++) {  //the loop will go through the array. 
        if (word[i].length > longestWord) {// if the array[i] is greater than 0 the we replace 
            longestWord = word[i].length;// the lonestword 
        }
    }
    return longestWord;
}

/**
 * 
 * @param {arrayofnumber} number 
 * @returns reversed newarray
 */
export function reverseArray(array) {
    let newarray = [];          //we declare new array
    for (let i = array.length - 1; i >= 0; i--) { // we start from the end so we -1 from the length because array counts from 0
        newarray.push(array[i]); // we push the reversed to the new array
    }

    return newarray; /// it will give us the reversed array
}



export function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];

    }
    return arr;
}
/**
 * 
 * @param {*array} studentAnswers 
 * @param {*array} correctAnswers 
 * @returns array of correct answer 
 */
export function scoreExams(studentAnswers, correctAnswers) {
    let correctscore = [];

    for (let i = 0; i < studentAnswers.length; i++) {
        let count = 0;
        for (let j = 0; j < studentAnswers[i].length; j++) {
            if (studentAnswers[i][j] === correctAnswers[j]) {
                count++;

            }
        }
        correctscore.push(count);
    }
    return correctscore;
}

/**
 * 
 * @param {*integer} num1 
 * @param {*integer} num2 
 * @returns newArray
 */
export function generateArray(num1, num2) {/// the function take two integers
    let newArray = [];            // we declare new varriable 
    let startingnumber = 1;       // we start with number 1
    for (let i = 0; i < num1; i++) { //loop untill it reachs number
        let inisdeArray = [];       // for the inner array 
        for (let j = 0; j < num2; j++) {
            inisdeArray.push(startingnumber); // we push starting from 1 then we add 1
            startingnumber++;
        }

        newArray.push(inisdeArray);         // we push the inside array in the main array
    }
    return newArray;
}

console.log(generateArray(3, 4));