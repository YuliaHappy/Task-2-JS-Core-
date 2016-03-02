"use strict";

function Account(accountName) {
    this._accountName = accountName;
    this._person = null;
    this._isActivated = false;
    this._balance = 0;
    this._lastOperation = null;
};

Object.defineProperty(Account.prototype, "accountName", {
    get: function() {
        return this._accountName;
    },
    set: function(accountName) {
        this._accountName = accountName
    }
});

Object.defineProperty(Account.prototype, "person", {
    get: function () {
        return this._person;
    },
    set: function (person) {
        this._person = person;
    }
});

Object.defineProperty(Account.prototype, "balance", {
    get: function() {
        return this._balance;
    },
    set: function(balance) {
        this._balance = balance;
    }
});

Object.defineProperty(Account.prototype, "isActivated", {
    get: function () {
        return this._isActivated;
    },
    set: function (isActivated) {
        this._isActivated = isActivated;
    }
});

Object.defineProperty(Account.prototype, "lastOperation", {
    get: function () {
        return this._lastOperation;
    },
    set: function (lastOperation) {
        this._lastOperation  = lastOperation;
    }
});

Account.prototype.logName = function () {
    console.log(this._accountName + "\n{Person: ");
    this._person.logName();
    console.log("\n" +
        "Balance: " + this._balance + "\n" +
        "LastOperation: " + this._lastOperation + "}");
};