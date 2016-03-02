define(['knockout'], function (ko) {
    'use strict';

  function LoginModel() {
    this.username = ko.observable();
    this.password = ko.observable();

    this.login = function() {
      console.log("login to "+ this.username() + " with " + this.password());
      this.username("");
      this.password("");
    }
  };

  return LoginModel;

});
