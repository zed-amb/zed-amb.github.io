
/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myMap(arr, func) {
    let newArr=[];
    for(let element of arr){
       newArr.push(func(element));
    }
    return newArr; 
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */
export function myFilter(arr, func) {
//IMPLEMENTATION NEEDED
}

/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @param {*} initialValue 
 * @returns 
 */
export function myReduce(arr, func, initialValue) {
    //IMPLEMENTATION NEEDED
    return  ;
    }