

/**
 * 
 * @param {number} initialValue is starting value
 * @param {number} increment is amount added each call to accumulate
 * @returns {Accumulator} constructor function
 */
export function Accumulator(initialValue, increment) {
       this.currentValue = initialValue,
       this.increment = increment, 
       this.accumulate = function () {
       this.currentValue = this.currentValue + this.increment;};
       this.report = function () {
       return this.currentValue;
    };
 }
 
 /**
  * @returns {Calculator} this is a constructor function
  */
 export function Calculator() {
    this.setValues = function (a, b) {
        this.a = a;
        this.b = b;
       };
    this.sum = function () {return this.a + this.b;};
    this.mul = function () { return this.a * this.b;};
 
 }