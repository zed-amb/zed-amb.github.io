import assert from "node:assert/strict";

import { computeSalesCommission } from "./SalesCommission.js";
import { compoundInterest } from "/CS305/W1D2/Functions/Prog_Q2.js"


describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
        assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
});


describe("test of compoundInterest", function () {
    it("test initial amount 100, interest rate 10, and number of Years to compound 1", function () {
        assert.equal(compoundInterest(100, 10, 1), 110.47);
    });
    it("test initial amount 100000, interest rate 5, and number of Years to compound 10 ", function () {
        assert.equal(compoundInterest(10000, 5, 10), 16470.09);
    });
});



describe("test of calcDownpayment", function () {
    it("test cost ", function () {
        assert.equal(calcDownpayment(40000), 2000);
    });

    it("test cost ", function () {
        assert.equal(calcDownpayment(50000), 2500);
    });

    it("test cost ", function () {
        assert.equal(calcDownpayment(100000), 7500);
    });

    it("test cost ", function () {
        assert.equal(calcDownpayment(250000), 25000);
    });

});

describe("test sumdigits", function () {
    it(" test the sum of the digits of a  given number", function () {
        assert.equal(sumDigits(1234), 10);
    });
    it(" test the sum of the digits of a  given number", function () {
        assert.equal(sumDigits(102), 3);
    });

    it(" test the sum of the digits of a  given number", function () {
        assert.equal(sumDigits(8), 8);
    });

});

describe("test the multiplication of digit of a number", function () {
    it(" test the product of the digits of a  given number", function () {
        assert.equal(multDigits(1234), 24);
    });
    it(" test the product of the digits of a  given number", function () {
        assert.equal(multDigits(102), 0);
    });

    it(" test the product of the digits of a  given number", function () {
        assert.equal(multDigits(8), 8);
    });

});

describe("test conversion from Fahrenheit to celcuis  ", function () {
    it(" test the conversion of fahrenheit to celcius degrees", function () {
        assert.equal(convertFahrenheit(32), 0);
    });
    it(" test the conversion of farhrenheit  to celcius degrees", function () {
        assert.equal(convertFahrenheit(0), -17.7778);
    });

    it(" test the conversion of farhrenheit to celcius degrees", function () {
        assert.equal(convertFahrenheit(212), 100);
    });

});

describe("test calcDistance ", function () {
    it(" test co-ordinates of two points into the distance btn these two points", function () {
        assert.equal(alcDistance(0, 0, 5, 5), 7.07);
    });

});
