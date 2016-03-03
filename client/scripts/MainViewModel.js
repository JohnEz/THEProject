import ko from 'knockout';
//import $ from 'jquery';
import AccountsModel from '../components/accounts/viewModel';
import RegisterModel from '../components/register/viewModel';
import LoginModel from '../components/login/viewModel';
var accountsTemplate = require('../components/accounts/template.html');
var registerTemplate = require('../components/register/template.html');
var loginTemplate = require('../components/login/template.html');

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
