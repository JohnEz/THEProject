define([
    'knockout',
    'jquery',
    'viewModels/AccountsModel',
    'viewModels/RegisterModel',
    'viewModels/LoginModel',
], function (ko, $, AccountsModel, RegisterModel, LoginModel) {
    'use strict';

    var ViewModel = function ViewModel() {

        ko.components.register('login-tile', {
          viewModel: {require: 'viewModels/LoginModel'},
          template: {require: 'text!templates/login.html'}
        });

        ko.components.register('register-tile', {
          viewModel: {require: 'viewModels/RegisterModel'},
          template: {require: 'text!templates/register.html'}
        });

        ko.components.register('account-control', {
          viewModel: {require: 'viewModels/AccountsModel'},
          template: {require: 'text!templates/accounts.html'}
        });

      }
    return ViewModel;
});
