'use strict';

angular.module('app').
  config(function($locationProvider, $routeProvider){
    console.log('sup from config');

    $locationProvider.html5Mode({enabled:true});


    $routeProvider.
      when('/search', {
        template: '<giphy-list></giphy-detail>',
      }).
      when('/trending', {
        template: '<giphy-list></giphy-detail>',
      }).
      when('/', {
        template: '<book-view></book-view>',
      }).
      otherwise({
        template: '<giphy-list></giphy-list>',
      })

  });