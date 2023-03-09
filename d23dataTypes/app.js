
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

let str = "zelalem";

console.log(ucFirst(str));

/**
 * 
 * @param {String} str strings 
 * @returns{boolean} it returns boolean if there is spam words
 */
export function checkSpam(str) {
  let spamStr = str.toLowerCase();
  return spamStr.includes("viagra") || spamStr.includes("xxx");
}

console.log(checkSpam("viAGra"));

/**
 * 
 * @param {String} str input string
 * @param {number} maxlength num of worgs we need
 * @returns{String} tranculated string
 */
export function truncate(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + "…";
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
  let currentSum = 0;

  for (let item of arr) {
    currentSum += item;
    maxSum = Math.max(maxSum, currentSum);
    if (currentSum < 0)
     currentSum = 0;
  }

  return maxSum;

}

/**
 * 
 * @param {String} str str with - charcter
 * @returns {String} it returns camelized str
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
 * @param {Number} money with currency charact
 * @returns {Number} returns number without currency charct
 */
export function extractCurrencyValue(money) {
  const moneyValue = money.slice(1);
  return parseInt(moneyValue);
}