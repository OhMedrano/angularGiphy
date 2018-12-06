'use strict'; 


angular.module('bookView').
        component('bookView', {
          controller: function() {
            const vm = this;

            vm.books = [
              { "id": "1", "name": "Harry Potter  Book  1", "details": { "title": "Harry  Potter  and the Goblet  of  Fire", "ISBN": "1000" } },
              { "id": "2", "name": "Harry  Potter  Book  2", "details": { "title": "Harry  Potter  and the Chamber of  Secrets", "ISBN": "1001" } },
              { "id": "3", "name": "Harry Potter  Book  3", "details": { "title": "Harry  Potter  and the Sorcerer's  Stone", "ISBN": "1003" } }
            ];

/*            vm.bookStyle = {
              'width': 20+'%',
              'border': '1px solid black',
            }
      
*/    


            vm.clickButton = () => {
              console.log(vm);
            }


          },
          templateUrl: 'src/templates/book-view.html',
        })