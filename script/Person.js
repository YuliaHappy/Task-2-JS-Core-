"use strict"

function Person(name, birthDate) {
    this._name = name;
    this._birthDate = birthDate;
    this._accounts = new Array();
}

Object.defineProperty(Person.prototype, "name", {
    get: function () {
        return this._name;
    },
    set: function (name) {
        this._name = name;
    }
});

Object.defineProperty(Person.prototype, "birthDate", {
    get: function () {
        return this._birthDate;
    },
    set: function (birthDate) {
        this._birthDate = birthDate;
    }
});

Object.defineProperty(Person.prototype, "accounts", {
    get: function () {
        return this._accounts;
    },
    set: function (accounts) {
        this._accounts = accounts;
    }
});

Person.prototype.addAccount = function (account) {
    this._accounts.push(account);
};

Person.prototype.logName = function () {
    console.log(this._name + " ("+ this._birthDate + ")");
};