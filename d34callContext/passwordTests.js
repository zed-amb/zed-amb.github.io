/* comment out the import assert line when running in the browser */
import assert from "node:assert/strict"; 

import { user, askPassword, user2, askPassword2  } from "./passwords.js";


/* modify the book functions (in the Function binding section tasks) to return values instead of displaying alerts, and to take the passwords as parameters rather than prompting for them.  
Then write the additional mocha tests to use call and apply instead of bind.
*/
/* describe("fix function that loses 'this'", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "1234"), "John failed to log in");
    });
 
});

describe("Partial application for login", function () {

    it("tests rockstar", function () {
        assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "rockstar"), "John logged in");
    });

    it("tests wrong password", function () {
        assert.strictEqual(askPassword2(() => user2.login(true), () => user2.login(false), "1234"), "John failed to log in");
    });

});



/////
describe("fix function that loses 'this'", function () {

    it("tests rockstar with call", function () {
        assert.strictEqual(askPassword(user.loginOk.call(user), user.loginFail.bind(user), "rockstar"), "John logged in");
    });

    it("tests rockstar with apply", function () {
        assert.strictEqual(askPassword3(user3.loginOk, user3.loginFail, "rockstar"), "John logged in");
    });

    it("tests wrong password with call", function () {
        assert.strictEqual(askPassword(user.loginOk.call(user), user.loginFail.call(user), "1234"), "John failed to log in");
    });

    it("tests wrong password with apply", function () {
        assert.strictEqual(askPassword4(user4.loginOk, user4.loginFail, "1234"), "John failed to log in");
    });
}); */


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