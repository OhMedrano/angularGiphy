'use strict'; 


angular.module('bookInfo').
        component('bookInfo', {
          bindings: {
            "bookDetail" : "<"
          },
          controller: function() {
            
          },
          templateUrl: 'src/templates/book-view.html',
        })