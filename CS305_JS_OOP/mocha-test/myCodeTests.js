/**
 * 
 * @param {Number} num is input from 
 * @returns {boolean} Whether true or false
 */
export function checkPrime(num){
    for(let i = 2; i<=num/2; i++){
        if(num%2===0){
        return false;
    }
}
return true;
}