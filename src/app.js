'use strict';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import { HomeComponent } from './home/home.component';
import {
    ToDoService,
    DataStorageService,
} from './services';

angular.module('myApp', [
    uiRouter,
    Components
  ])
  .component('homePage', HomeComponent)
  .service('ToDoService', ToDoService)
  .service('DataStorageService', DataStorageService)
  .config(($stateProvider) => {
    'ngInject';

    $stateProvider
      .state('home', {
        url: '',
        component: 'homePage',
        resolve: {
          toDoList: (ToDoService) => {
            'ngInject';

            return ToDoService.get();
          }
        }
      });
  });
