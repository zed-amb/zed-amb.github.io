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

/**
 * @returns {Number} returns number
 */
export function Calculator() {
this["*"] = (a, b) => +a * +b,
this["+"] = (a, b) => +a + +b,
this["/"] = (a, b) => +a / +b,
this["**"] = (a, b) => (+a) ** (+b),
this["-"] = (a, b) => +a - +b,
this.calculate = function (str) {
  let numArr = str.split(" ");
  for (let prop in this) {
    if (numArr[1] === prop) {
      return this[prop](numArr[0], numArr[2]);
    }
  }
};

this.addMethod = function (name, func) {
  for (let prop in this) {
    if (name === prop) {
      func = this[prop]();
    }
  }
};

}


/**
 * 
 * @param {Array} arr accepts arr
 * @returns {Array} returns unique arr
 */
export function unique(arr) {
let uniqueArr = [];
for (let element of arr) {
if (!uniqueArr.includes(element)) {
  uniqueArr.push(element);
}
}
return uniqueArr;
}

/**
 * 
 * @param {Array} array any array
 * @returns {Array} array
 */
 export function groupById(array) {
return array.reduce(function (previousValue, item) {
    previousValue[item.id] = item;
    return previousValue;
  }, {});
}


/**
 * 
 * @param {Array} arr it accepts an array
 * @returns {Array} it returns new array
 */
export function copySorted(arr) {
let copyArr = arr.map((item) => item);
return copyArr.sort();
}


/**
 * 
 * @param {Array} arr of age
 * @returns {Array} it returns sorted array by age
 */
export function sortByAge(arr) {
let newArr = arr.sort(function (a, b) {
  if (a.age > b.age) {
    return -1;
  } else if (a.age < b.age) {
    return 1;
  } else if (a.age == b.age) {
    return 0;
  }
});
return newArr;
}


/**
 * 
 * @param {Array} arr of array
 * @returns {Number} age average
 */
export function getAverageAge(arr) {
let average = arr.reduce((sum, element) => sum + element.age, 0) / arr.length;
return average;
}