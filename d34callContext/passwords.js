/* eslint-disable require-jsdoc */


function askPassword(ok, fail, password) {
    if (password == "rockstar") {
        return ok();
    }
    else {
        return fail();
    }
}

let user = {
    name: 'John',

    loginOk() {
        return (`${this.name} logged in`);
    },

    loginFail() {
        return (`${this.name} failed to log in`);
    },



};
askPassword(user.loginOk.bind(user), user.loginFail.bind(user), "rockstar")


function askPassword2(ok, fail, password) {
    if (password == "rockstar") {
        return ok();
    }
    else {
        return fail();
    } 
}

let user2 = {
    name: 'John',

    login(result) {
        return (this.name + (result ? ' logged in' : ' failed to log in'));
    }
}; 


