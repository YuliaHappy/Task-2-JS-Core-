"use strict"

var transferService = (function () {
    function register(person, account, balance){
        if(balance < 0){
            throw new RangeError("Error, there`s a negative balance!\n");
        }
        account._person = person;
        account._isActivated = true;
        account._balance = balance;
        person.addAccount(account);
    }


    function transfer(accountFrom, accountTo, sum){
        if(accountFrom._balance < sum){
            throw new RangeError("Balance account " + accountFrom._accountName + " less than the amount transferred" + sum + ".\n");
        }
        if(accountFrom._isActivated == false){
            throw new ActivtedError(accountFrom._accountName + " doesn`t actiaete!\n");
        }
        if(accountTo._isActivated == false){
            throw new ActivtedError(accountTo._accountName + " doesn`t activate!");
        }
        accountFrom._balance = accountFrom._balance - sum;
        accountTo._balance = accountTo._balance + sum;
        accountFrom._lastOperation = accountTo._lastOperation = new Date();
        console.log("Transfer is completed in " + accountFrom._lastOperation + "\n" +
                    "From: ");
        accountFrom.logName();
        console.log("\n" + "To: ");
        accountTo.logName();
        console.log("\n");
    }


    function getPersonAccounts(person){
        if(!person){
            throw new TypeError("Person doesn`t relevance!\n");
        }
        if(person._accounts.length == 0){
            console.log(person._accountName+" has no registered accounts!\n");
            return;
        }
        person._accounts.forEach(function (element) {
            console.log(element);
        });
    }

    return {
        register: register,
        transfer: transfer,
        getPersonAccounts: getPersonAccounts
    };
})();