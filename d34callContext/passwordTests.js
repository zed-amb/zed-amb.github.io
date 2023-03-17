/* eslint-disable no-undef */
/* comment out the import assert line when running in the browser */
//import assert from "node:assert/strict"; 

import { user, askPassword, user2, askPassword2  } from "./passwords.js";

describe("fix function that loses 'this'", function () {
    it("tests rockstar", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "rockstar"),"John logged in");
    });
  
    it("tests wrong password", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "1234"),"John failed to log in" );
    });
  
    it("Tests call method with rockstar", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "rockstar"),"John logged in");
    });
  
    it("Tests call method with wrong password", function () {
      assert.strictEqual(askPassword.call(user, user.loginOk, user.loginFail, "1234"),"John failed to log in");
    });
  
    it("Tests apply method with rockstar", function () {
      assert.strictEqual(askPassword.apply(user, [user.loginOk, user.loginFail, "rockstar"]),"John logged in");
    });
  
    it("Tests apply method with wrong password", function () {
      assert.strictEqual(askPassword.apply(user, [user.loginOk, user.loginFail, "1234"]), "John failed to log in");});
  });
  
  describe("Partial application for login", function () {
    it("tests rockstar", function () {
      assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "rockstar"),"John logged in");
    });
  
    it("tests wrong password", function () {
      assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "1234"), "John failed to log in" );
    });
  });