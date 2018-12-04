'use strict';

angular.module('app').
  config(function($locationProvider, $routeProvider){
    console.log('sup from config');

    $locationProvider.html5Mode({enabled:true});


    $routeProvider.
      when('/blog/:id', {
        template: '<giphy-detail></giphy-detail>',
      }).
      when('/', {
        template: '<giphy-list></giphy-list>',
      }).
      otherwise({
        template: 'not found',
      })

  });