/* eslint-disable valid-jsdoc */
/* eslint-disable require-jsdoc */

/* import { Account } from "./account.js";
import { CheckingAccount } from "./checkingaccount.js";
import { SavingsAccount } from "./savingsaccount.js";
    



export class Bank{
    constructor(){
        this._accounts = [];

    }

    /**
     * create a new plain account object and add it to the bank._accounts array
     
    addAccount(){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcc = new Account(accNum);
        newAcc.deposit(10000);

        this._accounts.push(newAcc);
        return null;
    }

}



Bank.accountNumber = 1;


 */


import { Account } from "./account.js";
import { CheckingAccount } from "./checkingaccount.js";
import { SavingsAccount } from "./savingsaccount.js";

export class Bank{
    constructor(){
        this._accounts = [];
    }

    /**
     * create a new plain account object and add it to the bank._accounts array
     */
    addAccount(){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newAcc = new Account(accNum);
        newAcc.deposit(10000);

        this._accounts.push(newAcc);
        return newAcc;
    }

    /**
     * create a new checking account object and add it to the bank._accounts array
     * @param {number} overdraftLimit - the maximum negative balance allowed on the account
     */
    addCheckingAccount(overdraftLimit){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newCheckingAcc = new CheckingAccount(accNum, overdraftLimit);
        newCheckingAcc.deposit(10000);

        this._accounts.push(newCheckingAcc);
        return newCheckingAcc;
    }

    /**
     * create a new savings account object and add it to the bank._accounts array
     * @param {number} interestRate - the annual interest rate for the account
     */
    addSavingsAccount(interestRate){
        const accNum = Bank.accountNumber;
        Bank.accountNumber += 1;
        const newSavingsAcc = new SavingsAccount(accNum, interestRate);
        newSavingsAcc.deposit(10000);

        this._accounts.push(newSavingsAcc);
        return newSavingsAcc;
    }

    /**
     * close an account by removing it from the bank._accounts array
     * @param {number} accNumber - the account number of the account to be closed
     */
    closeAccount(accNumber){
        const index = this._accounts.findIndex(acc => acc.number === accNumber);
        if(index !== -1){
            this._accounts.splice(index, 1);
            return true;
        }
        return false;
    }

    /**
     * get the sum of the balances of all accounts in the bank
     */
    accountReport(){
        const totalBalance = this._accounts.reduce((sum, acc) => sum + acc.getBalance(), 0);
        return totalBalance;
    }

    /**
     * end of the month process for all accounts in the bank
     */
    endOfMonth(){
        let endOfMonthOutput = "";
        for(const acc of this._accounts){
            endOfMonthOutput += acc.endOfMonth();
        }
        return endOfMonthOutput;
    }
}

Bank.accountNumber = 1;