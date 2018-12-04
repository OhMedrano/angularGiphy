'use strict'; 

angular.module('giphyDetail').
        component('giphyDetail', {
          controller: function(giphySvc, $routeParams) {
            const vm = this;
            console.log('sup');
            giphySvc.getGiphy().then((res) => {
              vm.results = res.data;
              console.log(res.data);
              console.log('sup');
            });

            vm.blogItems = [
            {
                title: 'Some Title',
                id: 1,
                description: 'This is a book',
              },
              {
                title: 'Title',
                id: 2,
                description: 'This is another book',
              },
              {
                title: 'e',
                id: 3,
                description: 'This is something of a book',
              },
              {
                title: 'Soeeame Title',
                id: 4,
                description: 'This is the final book',
              },
            ];

            vm.title = 'Not found';
            vm.notFound = true;
            angular.forEach(vm.blogItems, blog => {
              if(blog.id == $routeParams.id) {
                vm.post = blog;
                vm.notFound = false;
              }
            })
            if(vm.notFound) {
              vm.title = `Blog # ${$routeParams.id} not found`;
            }
     },
     controllerAs: 'vm',
      templateUrl: '/src/templates/giphy-detail.html',  
     });

