import ko from 'knockout';
//import $ from 'jquery';
import AccountsModel from './AccountsModel';
import RegisterModel from './RegisterModel';
import LoginModel from './LoginModel';
var accountsTemplate = require('../templates/accounts.html');
var registerTemplate = require('../templates/register.html');
var loginTemplate = require('../templates/login.html');

'use strict';

var ViewModel = function ViewModel() {

  ko.components.register('account-control', {
    viewModel: AccountsModel,
    template: accountsTemplate
  });

  ko.components.register('register-tile', {
    viewModel: RegisterModel,
    template: registerTemplate
  });

  ko.components.register('login-tile', {
    viewModel: LoginModel,
    template: loginTemplate
  });

}

export default ViewModel;
