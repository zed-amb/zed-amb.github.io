/* eslint-disable no-undef */
/* comment out the import assert line when running in the browser */
//import assert from "node:assert/strict"; 

import {calculator} from "./calculator.js";  //import objects used in the Mocha tests


describe("test calculator with values 2, 3", function () {
    calculator.setValues(2, 3);  //values for the tests

    it("checks initial values 2 and 3", function () {
        assert.strictEqual(calculator.a, 2);
        assert.strictEqual(calculator.b, 3);
    });

    it("when 2 and 3 are entered, the sum is 5", function () {
        assert.strictEqual(calculator.sum(), 5);
    });

    it("when 2 and 3 are entered, the product is 6", function () {
        assert.strictEqual(calculator.mul(), 6);
    });


});


