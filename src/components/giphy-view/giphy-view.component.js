'use strict'; 

/*
let fun = function(giphySvc, $routeParams, $window) {
            const vm = this;

            vm.$onChange = function(change) {
              if(change.giphyObject) {
                vm.returnGif = $window.angular.copy(giphyObject);
              }
            }

          console.log(vm);
     }



class GiphyView {
  constructor() {

  console.log('hey from GiphyView es6');
    
  }

}
*/

angular.module('giphyView').
        component('giphyView', {
          bindings: {
            "gifVal": "<",

          } ,
          controller: function(giphySvc, $routeParams, $window) {
            const vm = this;

            vm.$onInit = function() {
              vm.refineGif = $window.angular.copy(vm.gifVal);  

              vm.backgroundGif = {
                'background': 'url('+vm.refineGif.images.original.url + ')no-repeat',
              }



            };
            console.log(vm);
          
     },
     controllerAs: 'vm',
      templateUrl: '/src/templates/giphy-view.html',  
     });

