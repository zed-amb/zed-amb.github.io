import assert from "node:assert/strict";
import {Prog_Q1,} from /.Prog_Q1.js/


function checkPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
}
describe("checkPrime returns true if argument is prime", function () {
    it("37 is prime", function () {
        assert.strictEqual(checkPrime(37), true);
    });
    it(" 77 is not prime", function () {
        assert.strictEqual(checkPrime(77), false);
    });
});
