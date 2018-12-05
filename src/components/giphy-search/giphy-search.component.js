'use strict';

/*
    Weird issue with the controller scope. 

    Keeps not wanting to use vm, have to use $ctrl instead. 


*/



angular.module('giphySearch').
        component('giphySearch', {
          bindings: {
            "searchParams": '<',
            'changeSearchParams': '&',
            'ratings': '<',
          },
          controller: function($window) {
            const vm = this; 
            vm.inputClick = false;

            vm.letterColors = [
                '-4px 9px #ff000077',
                '-4px 9px #00ff0077',
                '-4px 9px #0000ff77',
                '-4px 9px #ff00ff77',
                '-4px 9px #ffff0077',
                '-4px 9px #00ffff77',

            ];
            vm.$onInit = function() {
                vm.oldSearchParams = $window.angular.copy(vm.searchParams);
                vm.searchModel = $window.angular.copy(vm.searchParams);
                vm.ratings = $window.angular.copy(vm.ratings);


            vm.splitQuery = vm.searchModel.query.split('');

            
            }
            vm.$onChange = function(change) {
              if(change.searchParams) {
                vm.oldSearchParams = $window.angular.copy(vm.searchParams);
                vm.searchModel = $window.angular.copy(vm.searchParams);

                vm.splitQuery = vm.searchModel.query.split('');

            
              }
            }





            vm.changeSubmit = function(){
              vm.inputClick = false;
              vm.splitQuery = vm.searchModel.query.split('');            
              vm.changeSearchParams({name: vm.searchModel});
            }




            console.log(vm);
          },
          templateUrl: 'src/templates/giphy-search.html',
        })