

/**
 * 
 * @param {Array} arr holding values
 * @returns {Function} returns a function that tests whether its argument is in the arr
 * 
 */
export function inArray(arr) {
  return function (element) {
    return arr.includes(element);
  };

}

/**
 * 
 * @param {number} low is bottom of range
 * @param {number}  high is top of range
 * @returns {Function} returns a function that tests whether its argument is inside the range
 * 
 */
export function inBetween(low, high) {
  let arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(i);
  }
  return function (element) {
    return arr.includes(element);
  };
}

/**
 * 
 * @param {String} fieldName is a property on object to be sorted
 * @returns {Function} sorting function
 */
export function byField(fieldName){
  return function (a, b) {
    return a[fieldName] > b[fieldName] ? 1 : -1;
  };
}


/**
 * @returns {Function} closure that returns it's number
 */
export function makeArmy() {
  let army = [];
  for (let i = 0; i < 10; i++) {
    army.push(function() {
      return i;
    });
  }
  return army;
}

  let army = makeArmy();
  
  army[0](); // the shooter number 0 shows 10
  army[5](); // and number 5 also outputs 10...

