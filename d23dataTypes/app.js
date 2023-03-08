
/**
 * 
 * @param {String} str takes string
 *  @return {String} retuns str
 */
export function ucFirst(str) {

  if (str === "") {
    return "";
  } else {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}

/**
 * 
 * @param {String} str strings 
 */

export function checkSpam(str) {
  let newStr = str.toLowerCase();
  return newStr.includes("viagra") || newStr.includes("xxx");
}


/**
 * 
 * @param {*} str 
 * @param {*} maxlength 
 */
export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    let newStr = str.slice(0, maxlength - 1);
    return newStr + "…";
  } else {
    return str;
  }
}
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
export function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }

  return maxSum;

}

/**
 * 
 * @param {*} str 
 * @returns 
 */
export function camelize(str) {
  if (str === "") {
    return "";
  } else if (str.includes("-")) {
    let strArr = str.split("-");
    let newStr = strArr[0];
    for (let i = 1; i < strArr.length; i++) {
      let newWord = strArr[i].slice(1);
      newStr = newStr + (strArr[i][0].toUpperCase() + newWord);
    }
    return newStr;

  } else {
    return str;
  }
}

/**
 * 
 * @param {*} money 
 * @returns 
 */
export function extractCurrencyValue(money) {
  const moneyValue = money.slice(1);
  return parseInt(moneyValue);
}