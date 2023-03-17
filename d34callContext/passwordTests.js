/* eslint-disable no-undef */
/* comment out the import assert line when running in the browser */
//import assert from "node:assert/strict"; 

import { user, askPassword, user2, askPassword2  } from "./passwords.js";


/* modify the book functions (in the Function binding section tasks) to return values instead of displaying alerts, and to take the passwords as parameters rather than prompting for them.  
Then write the additional mocha tests to use call and apply instead of bind.
*//* 
describe("fix function that loses 'this'", function () {
    it("tests rockstar", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "rockstar"),"John logged in");
    });
  
    it("tests wrong password", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "1234"),"John failed to log in" );
    });
  
    it("tests call method with rockstar", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "rockstar"),"John logged in");
    });
  
    it("tests call method with wrong password", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "1234"),"John failed to log in");
    });
  
    it("tests apply method with rockstar", function () {
      assert.strictEqual(askPassword.apply(user, [user.loginOk, user.loginFail, "rockstar"]),"John logged in");
    });
  
    it("tests apply method with wrong password", function () {
      assert.strictEqual(askPassword.apply(user, [user.loginOk, user.loginFail, "1234"]), "John failed to log in");});
  });
  
  describe("Partial application for login", function () {
    it("tests rockstar", function () {
      assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "rockstar"),"John logged in");
    });
  
    it("tests wrong password", function () {
      assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "1234"), "John failed to log in" );
    });
  }); */
/* 
  describe("askPassword", function () {
    it("tests call method with rockstar", function () {
      assert.strictEqual(
        askPassword(user.loginOk.call(user), user.loginFail.call(user), "rockstar"),
        "John logged in"
      );
    });
  
    it("tests call method with wrong password", function () {
      assert.strictEqual(
        askPassword(user.loginOk.call(user), user.loginFail.call(user), "1234"),
        "John failed to log in"
      );
    });
  
    it("tests apply method with rockstar", function () {
      assert.strictEqual(
        askPassword(user.loginOk.apply(user), user.loginFail.apply(user), "rockstar"),
        "John logged in"
      );
    });
  
    it("tests apply method with wrong password", function () {
      assert.strictEqual(
        askPassword(user.loginOk.apply(user), user.loginFail.apply(user), "1234"),
        "John failed to log in"
      );
    });
  
    it("tests bind method with rockstar", function () {
      assert.strictEqual(
        askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar"),
        "John logged in"
      );
    });
  
    it("tests bind method with wrong password", function () {
      assert.strictEqual(
        askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "1234"),
        "John failed to log in"
      );
    });
  });
  
  describe("askPassword2", function () {
    it("tests password rockstar", function () {
      assert.strictEqual(
        askPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false), "rockstar"),
        "John logged in"
      );
    });
  
    it("tests wrong password", function () {
      assert.strictEqual(
        askPassword2(user2.login.bind(user2, true), user2.login.bind(user2, false), "1234"),
        "John failed to log in"
      );
    });
  }); */