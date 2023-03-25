/* eslint-disable require-jsdoc */


import { Account } from "./account.js";


export class SavingsAccount extends Account {
    constructor(number, interest) {
      super(number);
      this._interest = interest;
    }
  
    getInterest() {
      return this._interest;
    }
  
    setInterest(interest) {
      this._interest = interest;
    }
  
    addInterest() {
      let interest = (this._balance * this._interest) / 100;
      this.deposit(interest);
    }
  
    toString() {
      return `SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this._interest}`;
    }
  
    endOfMonth() {
      let interest = (this._balance * this._interest) / 100;
      this.deposit(interest);
      return `Interest added ${this.toString()}`;
    }
  }