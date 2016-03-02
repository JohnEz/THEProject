define(['knockout'], function (ko) {
    'use strict';

  function RegisterModel() {
    this.realName = ko.observable();
    this.email = ko.observable();
    this.username = ko.observable();
    this.password1 = ko.observable();
    this.password2 = ko.observable();

    this.passwordMismatch = ko.computed(function(){
      if((this.password1() && this.password1().length > 0) &&
        (this.password2() && this.password2().length > 0) &&
        !(this.password1() === this.password2())) {
          return true;
        }
        else {
          return false;
        }
    }, this);

    this.register = function(){
      console.log("Register "+ this.realName() + " with username " + this.username());
      console.log("and email "+ this.email());
      console.log("password "+ this.password1());
      this.realName("");
      this.email("");
      this.username("");
      this.password1("");
      this.password2("");
    }
  };

  return RegisterModel;

});
