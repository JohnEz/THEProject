import ko from 'knockout';
//import $ from 'jquery';
import ViewModel from './MainViewModel';

'use strict';

var viewModel = new ViewModel();

ko.applyBindings(viewModel, document.body);
