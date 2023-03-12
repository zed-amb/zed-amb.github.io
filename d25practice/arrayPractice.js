//"use strict"
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */

export function doubleNums(arr) {
    return arr.map(num => num * 2);
}

export function doubleAges(arr) {
    return arr.map(item => {
        let newObj = {
            age: item.age * 2,
            name: item.name
        }
        return newObj;
    })
}

export function filterEven(arr) {
    return arr.filter(item => item % 2 == 0);
}

export function filterOver10(arr) {
    return arr.filter(item => item.age > 10);
}

export function findEvenNum(arr) {
    return arr.find(item => item % 2 === 0);
}

export function findEvenAge(arr) {
    return arr.find(item => item.age % 2 === 0);
}

export function includesEvenNum(arr) {
    return arr.includes(findEvenNum(arr));
}

export function includesEvenAge(arr) {
    return arr.includes(findEvenAge(arr));
}

export function findSum(arr) {
    return arr.reduce((sum, initial) => sum + initial, 0);
}

export function findAverage(arr) {
    let sum = arr.reduce((sum, initial) => sum + initial, 0);
    return sum / arr.length;
}

export function findMax(arr) {
    return arr.reduce((previousValue, currentValue) => Math.max(previousValue, currentValue), -Infinity);
}

export function maxAges(arr) {
    return arr.reduce((previousValue, currentValue) => {
        if (previousValue.age > currentValue.age) {
            return previousValue;
        } else {
            return currentValue;
        }
    }, { age: 0 });
}

export function findAverageEven(arr) {
    let length = 1;
    return arr.filter(item => item.age % 2 === 0).map(item => item.age).reduce((sum, currentValue) => {
        length++
        return sum + currentValue;
    }) / length;
}

export function findAverageOdd(arr) {
    let length = 1;
    return arr.filter(item => item.age % 2 !== 0).map(item => item.age).reduce((sum, currentValue) => {
        length++
        return sum + currentValue;;
    }) / length;
}

