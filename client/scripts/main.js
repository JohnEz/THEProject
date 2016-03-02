define([
    'knockout',
    'jquery',
    'viewModels/MainViewModel',

], function (ko, $, ViewModel) {
    'use strict';

    var viewModel = new ViewModel();

    ko.applyBindings(viewModel, document.body);


});
