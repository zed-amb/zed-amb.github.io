/* eslint-disable no-undef */
/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import { user, askPassword, user2, askPassword2  } from "./passwords.js";
describe("fix function that loses 'this'", function () {

    it("tests rockstar with call", function () {
        assert.strictEqual(askPassword(user.loginOk.call(user), user.loginFail.call(user), "rockstar"), "John logged in");
    });

    it("tests wrong password with apply", function () {
        assert.strictEqual(askPassword(user.loginOk.apply(user), user.loginFail.apply(user), "1234"), "John failed to log in");
    });
 
});

describe("Partial application for login", function () {
    const user2 = {
        name: "John",
        login(result) {
            return `${this.name} ${result ? "logged in" : "failed to log in"}`;
        }
    };

    it("tests rockstar with call", function () {
        assert.strictEqual(askPassword2(() => user2.login.call(user2, true), () => user2.login.call(user2, false), "rockstar"), "John logged in");
    });

    it("tests wrong password with apply", function () {
        assert.strictEqual(askPassword2(() => user2.login.apply(user2, [true]), () => user2.login.apply(user2, [false]), "1234"), "John failed to log in");
    });

});

  

  
  
  
  
  