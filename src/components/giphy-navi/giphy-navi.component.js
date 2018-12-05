'use strict';


/*

    There's an issue with the scoping, any "mv" calls don't seem to show up on the html. 

    Have to use the default controller name "$ctrl". 

*/

angular.module('giphyNavi').
        component('giphyNavi', {
          controller: function() {
            const mv = this; 

            mv.$onInit = function() {
              mv.navLinks = [
                'search',
                'trending',
              ]
            }

          },

          templateUrl: 'src/templates/giphy-navi.html',
        });

