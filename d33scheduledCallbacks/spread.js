/* eslint-disable require-jsdoc */

export function copyArray(arr){
    return [...arr];
}

export function concat(arr1, arr2){
   return [...arr1,...arr2];
}

export function findMin(...numbers) {
    return Math.min(...numbers);
}

export function findMax(...numbers) {
    return Math.max(...numbers);
}
export function combineObjs(obj1, obj2){
    return {...obj1, ...obj2};
}