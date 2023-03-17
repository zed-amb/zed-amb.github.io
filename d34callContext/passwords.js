/* eslint-disable require-jsdoc */

export function askPassword(ok, fail, password) {
  if (password == "rockstar") {
    return ok.bind(user)();
  } else {
    return fail.bind(user)();
  }
}

export let user = {
  name: "John",

  loginOk() {
    return `${this.name} logged in`;
  },

  loginFail() {
    return `${this.name} failed to log in`;
  },
};


export function askPassword2(ok, fail, password) {
    if (password == "rockstar") {
        return ok();
    }
    else {
        return fail();
    } 
}

export let user2 = {
    name: 'John',

    login(result) {
        return (this.name + (result ? ' logged in' : ' failed to log in'));
    }
};