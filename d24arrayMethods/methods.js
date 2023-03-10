/**
 * 
 * @param {Array} arr any array
 * @param {Number} a min
 * @param {Number} b max 
 * @returns {Array} returns filtered array
 */
export function filterRange(arr, a, b) {
    let filtered = arr.filter(num => num >= 1 && num <= 4);
    return filtered;
}

let nmbr = [5, 3, 8, 1];
let result = filterRange(nmbr, 1, 4);
console.log(result);

/**
 * 
 * @param {Array} arr of numbers
 * @param {Number} a min
 * @param {Number} b max
 * @returns {Array} returns filtered array without creating new array
 */
export function filterRangeInPlace(arr, a, b) {
    for (let number in arr) {
        if ((arr[number] < a) || (arr[number] > b)) {
            arr.splice(number, 1);
        }
    }
}


export function Calculator() {
}

export function unique(arr) {
}


export function groupById(array) {
}